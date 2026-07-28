# Horus SIEM Server - Alert Store
# SQLite-backed alert persistence with FTS5 full-text search

import json
import re
import sqlite3
import time
import uuid
import threading
import logging
from pathlib import Path
from typing import Dict, List, Optional

logger = logging.getLogger("horus.server.alert_store")

_local = threading.local()


class AlertStore:
    """SQLite-backed alert storage with full-text search."""

    def __init__(self, db_path: str = "./data/alerts.db"):
        self.db_path = db_path
        Path(db_path).parent.mkdir(parents=True, exist_ok=True)
        self._init_db()

    def _get_conn(self) -> sqlite3.Connection:
        """Thread-safe connection getter.

        Los workers de análisis, la API y el cold storage escriben desde hilos
        distintos. WAL permite lecturas concurrentes con una escritura, y el
        timeout evita 'database is locked' bajo ráfagas de eventos.
        """
        if not hasattr(_local, "conn") or _local.conn is None:
            conn = sqlite3.connect(self.db_path, check_same_thread=False, timeout=30.0)
            conn.row_factory = sqlite3.Row
            conn.execute("PRAGMA journal_mode=WAL")
            conn.execute("PRAGMA busy_timeout=30000")
            conn.execute("PRAGMA synchronous=NORMAL")
            _local.conn = conn
        return _local.conn

    def _init_db(self) -> None:
        """Creates the alerts tables."""
        conn = self._get_conn()
        cursor = conn.cursor()

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS alerts (
                id TEXT PRIMARY KEY,
                rule_id TEXT,
                rule_name TEXT,
                rule_description TEXT,
                level INTEGER DEFAULT 3,
                event_type TEXT,
                agent_id TEXT,
                src_ip TEXT,
                dst_user TEXT,
                action TEXT,
                raw_log TEXT,
                path TEXT,
                hash_before TEXT,
                hash_after TEXT,
                mitre_json TEXT,
                correlation INTEGER DEFAULT 0,
                event_count INTEGER DEFAULT 1,
                timestamp REAL,
                agent_time_iso TEXT,
                created_at REAL NOT NULL
            )
        """)

        cursor.execute("""
            CREATE INDEX IF NOT EXISTS idx_alerts_level ON alerts(level)
        """)
        cursor.execute("""
            CREATE INDEX IF NOT EXISTS idx_alerts_agent ON alerts(agent_id)
        """)
        cursor.execute("""
            CREATE INDEX IF NOT EXISTS idx_alerts_time ON alerts(created_at DESC)
        """)

        # -----------------------------------------------------------------------
        # FTS5 full-text search
        #
        # Se usa una tabla FTS5 *normal* (no external-content). La variante
        # external-content exige insertar el rowid explícitamente y mantener
        # triggers de DELETE/UPDATE; sin ellos el índice se desincroniza en
        # cuanto se borra una alerta (p. ej. al archivar en cold storage) y las
        # búsquedas empiezan a devolver filas equivocadas.
        # -----------------------------------------------------------------------
        legacy_fts = cursor.execute(
            "SELECT sql FROM sqlite_master WHERE type='table' AND name='alerts_fts'"
        ).fetchone()

        if legacy_fts and "content=" in (legacy_fts["sql"] or ""):
            logger.warning("Migrando alerts_fts desde el esquema external-content...")
            cursor.execute("DROP TRIGGER IF EXISTS alerts_ai")
            cursor.execute("DROP TABLE IF EXISTS alerts_fts")
            legacy_fts = None

        cursor.execute("""
            CREATE VIRTUAL TABLE IF NOT EXISTS alerts_fts USING fts5(
                id UNINDEXED, rule_name, rule_description, raw_log, src_ip,
                dst_user, action, path
            )
        """)

        # Triggers to keep FTS in sync (insert / delete / update)
        cursor.execute("""
            CREATE TRIGGER IF NOT EXISTS alerts_ai AFTER INSERT ON alerts BEGIN
                INSERT INTO alerts_fts(id, rule_name, rule_description, raw_log,
                    src_ip, dst_user, action, path)
                VALUES (new.id, new.rule_name, new.rule_description, new.raw_log,
                    new.src_ip, new.dst_user, new.action, new.path);
            END
        """)
        cursor.execute("""
            CREATE TRIGGER IF NOT EXISTS alerts_ad AFTER DELETE ON alerts BEGIN
                DELETE FROM alerts_fts WHERE id = old.id;
            END
        """)
        cursor.execute("""
            CREATE TRIGGER IF NOT EXISTS alerts_au AFTER UPDATE ON alerts BEGIN
                DELETE FROM alerts_fts WHERE id = old.id;
                INSERT INTO alerts_fts(id, rule_name, rule_description, raw_log,
                    src_ip, dst_user, action, path)
                VALUES (new.id, new.rule_name, new.rule_description, new.raw_log,
                    new.src_ip, new.dst_user, new.action, new.path);
            END
        """)

        # Repoblar el índice si quedó vacío tras la migración (o si la DB venía
        # sembrada por seed_demo_data.py con el esquema antiguo).
        fts_count = cursor.execute("SELECT COUNT(*) FROM alerts_fts").fetchone()[0]
        alerts_count = cursor.execute("SELECT COUNT(*) FROM alerts").fetchone()[0]
        if alerts_count and fts_count != alerts_count:
            cursor.execute("DELETE FROM alerts_fts")
            cursor.execute("""
                INSERT INTO alerts_fts(id, rule_name, rule_description, raw_log,
                    src_ip, dst_user, action, path)
                SELECT id, rule_name, rule_description, raw_log,
                    src_ip, dst_user, action, path FROM alerts
            """)
            logger.info(f"Índice FTS reconstruido con {alerts_count} alertas")

        # -----------------------------------------------------------------------
        # Mobile tokens table (FCM push notifications)
        # -----------------------------------------------------------------------
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS mobile_tokens (
                token TEXT PRIMARY KEY,
                platform TEXT NOT NULL DEFAULT 'android',
                label TEXT,
                registered_at REAL NOT NULL,
                last_used_at REAL
            )
        """)

        # -----------------------------------------------------------------------
        # Agents table (persistent storage)
        # -----------------------------------------------------------------------
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS agents (
                agent_id TEXT PRIMARY KEY,
                name TEXT,
                hostname TEXT,
                ip TEXT,
                os TEXT,
                version TEXT,
                cluster TEXT,
                groups TEXT,
                enrolled_at TEXT,
                last_seen REAL,
                status TEXT,
                syscollector_json TEXT
            )
        """)

        # -----------------------------------------------------------------------
        # Active response commands
        #
        # Persistir la cola de comandos (en vez de mantenerla solo en memoria)
        # evita perder acciones pendientes si el servidor se reinicia y permite
        # que la app móvil consulte el estado de lo que ordenó.
        # -----------------------------------------------------------------------
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS commands (
                id TEXT PRIMARY KEY,
                agent_id TEXT NOT NULL,
                action TEXT NOT NULL,
                params_json TEXT,
                status TEXT NOT NULL DEFAULT 'pending',
                source TEXT,
                alert_id TEXT,
                created_by TEXT,
                created_at REAL NOT NULL,
                delivered_at REAL,
                completed_at REAL,
                result_json TEXT
            )
        """)
        cursor.execute("""
            CREATE INDEX IF NOT EXISTS idx_commands_agent ON commands(agent_id, status)
        """)
        cursor.execute("""
            CREATE INDEX IF NOT EXISTS idx_commands_time ON commands(created_at DESC)
        """)

        # -----------------------------------------------------------------------
        # Migrations
        # -----------------------------------------------------------------------
        try:
            cursor.execute("ALTER TABLE alerts ADD COLUMN hash_before TEXT")
        except sqlite3.OperationalError:
            pass
            
        try:
            cursor.execute("ALTER TABLE alerts ADD COLUMN hash_after TEXT")
        except sqlite3.OperationalError:
            pass

        conn.commit()
        logger.info(f"Alert store inicializado: {self.db_path}")

    def insert_alert(self, alert: Dict) -> str:
        """Inserts an alert and returns its ID."""
        conn = self._get_conn()
        cursor = conn.cursor()

        alert_id = str(uuid.uuid4())[:12]
        now = time.time()

        cursor.execute("""
            INSERT INTO alerts (
                id, rule_id, rule_name, rule_description, level,
                event_type, agent_id, src_ip, dst_user, action,
                raw_log, path, hash_before, hash_after, mitre_json, correlation, event_count,
                timestamp, agent_time_iso, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            alert_id,
            alert.get("rule_id"),
            alert.get("rule_name"),
            alert.get("rule_description"),
            alert.get("level", 3),
            alert.get("event_type"),
            alert.get("agent_id"),
            alert.get("src_ip"),
            alert.get("dst_user"),
            alert.get("action"),
            alert.get("raw_log"),
            alert.get("path"),
            alert.get("hash_before"),
            alert.get("hash_after"),
            json.dumps(alert.get("mitre", {})),
            1 if alert.get("correlation") else 0,
            alert.get("event_count", 1),
            alert.get("timestamp", now),
            alert.get("agent_time_iso"),
            now,
        ))

        conn.commit()
        return alert_id

    def get_recent_alerts(
        self,
        limit: int = 50,
        offset: int = 0,
        severity: Optional[int] = None,
        agent_id: Optional[str] = None,
        event_type: Optional[str] = None,
        exclude_types: Optional[List[str]] = None,
    ) -> List[Dict]:
        """Gets recent alerts with optional filters."""
        conn = self._get_conn()
        cursor = conn.cursor()

        query = "SELECT * FROM alerts WHERE 1=1"
        params = []

        if severity is not None:
            query += " AND level >= ?"
            params.append(severity)

        if agent_id:
            query += " AND agent_id = ?"
            params.append(agent_id)

        if event_type:
            query += " AND event_type = ?"
            params.append(event_type)

        if exclude_types:
            placeholders = ",".join("?" for _ in exclude_types)
            query += f" AND (event_type NOT IN ({placeholders}) OR event_type IS NULL)"
            params.extend(exclude_types)

        query += " ORDER BY created_at DESC LIMIT ? OFFSET ?"
        params.extend([limit, offset])

        cursor.execute(query, params)

        return [self._row_to_dict(row) for row in cursor.fetchall()]

    @staticmethod
    def _sanitize_fts_query(query: str) -> str:
        """
        Convierte texto libre en una consulta FTS5 segura.

        FTS5 interpreta caracteres como `-`, `:`, `*`, `"` y `(` como sintaxis,
        así que una búsqueda tan normal como `192.168.1.5` o `admin@host` haría
        fallar la consulta. Cada término se escapa como frase entre comillas y
        al último se le añade `*` para búsqueda por prefijo.
        """
        terms = [t for t in re.split(r"\s+", query.strip()) if t]
        if not terms:
            return '""'

        escaped = [t.replace('"', '""') for t in terms]
        parts = [f'"{t}"' for t in escaped[:-1]]
        parts.append(f'"{escaped[-1]}"*')
        return " ".join(parts)

    def search_alerts(self, query: str, limit: int = 50) -> List[Dict]:
        """Full-text search over alerts."""
        conn = self._get_conn()
        cursor = conn.cursor()

        try:
            cursor.execute("""
                SELECT alerts.* FROM alerts
                JOIN alerts_fts ON alerts.id = alerts_fts.id
                WHERE alerts_fts MATCH ?
                ORDER BY alerts.created_at DESC
                LIMIT ?
            """, (self._sanitize_fts_query(query), limit))
            return [self._row_to_dict(row) for row in cursor.fetchall()]

        except sqlite3.OperationalError as e:
            # Nunca romper la barra de búsqueda del dashboard por una consulta
            # que FTS5 no sepa interpretar — se degrada a un LIKE simple.
            logger.warning(f"Búsqueda FTS fallida ({e}) — usando LIKE como fallback")
            like = f"%{query.strip()}%"
            cursor.execute("""
                SELECT * FROM alerts
                WHERE rule_name LIKE ? OR rule_description LIKE ? OR raw_log LIKE ?
                   OR src_ip LIKE ? OR dst_user LIKE ? OR path LIKE ?
                ORDER BY created_at DESC
                LIMIT ?
            """, (like, like, like, like, like, like, limit))
            return [self._row_to_dict(row) for row in cursor.fetchall()]

    def get_alert_by_id(self, alert_id: str) -> Optional[Dict]:
        """Gets a single alert by ID."""
        conn = self._get_conn()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM alerts WHERE id = ?", (alert_id,))
        row = cursor.fetchone()

        return self._row_to_dict(row) if row else None

    def get_alert_count(
        self,
        severity: Optional[int] = None,
        agent_id: Optional[str] = None,
        event_type: Optional[str] = None,
        exclude_types: Optional[List[str]] = None,
    ) -> int:
        """Gets the total count of alerts with optional filters."""
        conn = self._get_conn()
        cursor = conn.cursor()

        query = "SELECT COUNT(*) FROM alerts WHERE 1=1"
        params = []

        if severity is not None:
            query += " AND level >= ?"
            params.append(severity)

        if agent_id:
            query += " AND agent_id = ?"
            params.append(agent_id)

        if event_type:
            query += " AND event_type = ?"
            params.append(event_type)

        if exclude_types:
            placeholders = ",".join("?" for _ in exclude_types)
            query += f" AND (event_type NOT IN ({placeholders}) OR event_type IS NULL)"
            params.extend(exclude_types)

        cursor.execute(query, params)
        return cursor.fetchone()[0]

    def get_alert_stats(self) -> Dict:
        """Gets alert statistics for the dashboard."""
        conn = self._get_conn()
        cursor = conn.cursor()

        # Total
        cursor.execute("SELECT COUNT(*) FROM alerts")
        total = cursor.fetchone()[0]

        # By level
        cursor.execute("""
            SELECT
                SUM(CASE WHEN level >= 12 THEN 1 ELSE 0 END) as critical,
                SUM(CASE WHEN level >= 8 AND level < 12 THEN 1 ELSE 0 END) as high,
                SUM(CASE WHEN level >= 4 AND level < 8 THEN 1 ELSE 0 END) as medium,
                SUM(CASE WHEN level < 4 THEN 1 ELSE 0 END) as low
            FROM alerts
        """)
        row = cursor.fetchone()

        # Last 24h
        cutoff = time.time() - 86400
        cursor.execute(
            "SELECT COUNT(*) FROM alerts WHERE created_at > ?", (cutoff,)
        )
        last_24h = cursor.fetchone()[0]

        return {
            "total_alerts": total,
            "critical": row["critical"] or 0,
            "high": row["high"] or 0,
            "medium": row["medium"] or 0,
            "low": row["low"] or 0,
            "last_24h": last_24h,
        }

    def get_fim_stats(self) -> Dict:
        """Gets FIM-specific statistics."""
        conn = self._get_conn()
        cursor = conn.cursor()

        # Total FIM events
        cursor.execute("SELECT COUNT(*) FROM alerts WHERE event_type = 'fim'")
        total = cursor.fetchone()[0]

        # By action
        cursor.execute("""
            SELECT
                SUM(CASE WHEN action = 'created' THEN 1 ELSE 0 END) as created,
                SUM(CASE WHEN action = 'modified' THEN 1 ELSE 0 END) as modified,
                SUM(CASE WHEN action = 'deleted' THEN 1 ELSE 0 END) as deleted
            FROM alerts WHERE event_type = 'fim'
        """)
        row = cursor.fetchone()

        # Last 24h
        cutoff = time.time() - 86400
        cursor.execute(
            "SELECT COUNT(*) FROM alerts WHERE event_type = 'fim' AND created_at > ?",
            (cutoff,),
        )
        last_24h = cursor.fetchone()[0]

        # Unique files monitored
        cursor.execute(
            "SELECT COUNT(DISTINCT path) FROM alerts WHERE event_type = 'fim'"
        )
        unique_files = cursor.fetchone()[0]

        return {
            "total_events": total,
            "created": row["created"] or 0 if row else 0,
            "modified": row["modified"] or 0 if row else 0,
            "deleted": row["deleted"] or 0 if row else 0,
            "last_24h": last_24h,
            "unique_files": unique_files,
        }

    def get_vulnerability_stats(self) -> Dict:
        """Gets vulnerability-specific statistics."""
        conn = self._get_conn()
        cursor = conn.cursor()

        # Total vulnerability alerts
        cursor.execute(
            "SELECT COUNT(*) FROM alerts WHERE event_type = 'vulnerability'"
        )
        total = cursor.fetchone()[0]

        # By severity
        cursor.execute("""
            SELECT
                SUM(CASE WHEN level >= 12 THEN 1 ELSE 0 END) as critical,
                SUM(CASE WHEN level >= 8 AND level < 12 THEN 1 ELSE 0 END) as high,
                SUM(CASE WHEN level >= 4 AND level < 8 THEN 1 ELSE 0 END) as medium,
                SUM(CASE WHEN level < 4 THEN 1 ELSE 0 END) as low
            FROM alerts WHERE event_type = 'vulnerability'
        """)
        row = cursor.fetchone()

        # Unique affected agents
        cursor.execute(
            "SELECT COUNT(DISTINCT agent_id) FROM alerts WHERE event_type = 'vulnerability'"
        )
        affected_agents = cursor.fetchone()[0]

        return {
            "total_vulnerabilities": total,
            "critical": row["critical"] or 0 if row else 0,
            "high": row["high"] or 0 if row else 0,
            "medium": row["medium"] or 0 if row else 0,
            "low": row["low"] or 0 if row else 0,
            "affected_agents": affected_agents,
        }

    def _row_to_dict(self, row: sqlite3.Row) -> Dict:
        """Converts a row to a dictionary with parsed MITRE JSON."""
        d = dict(row)
        if d.get("mitre_json"):
            try:
                d["mitre"] = json.loads(d.pop("mitre_json"))
            except (json.JSONDecodeError, TypeError):
                d["mitre"] = {}
                d.pop("mitre_json", None)
        else:
            d["mitre"] = {}
            d.pop("mitre_json", None)
        return d

    # ---------------------------------------------------------------------------
    # Mobile Token management (FCM push notifications)
    # ---------------------------------------------------------------------------

    def register_token(self, token: str, platform: str = "android", label: str = None) -> bool:
        """
        Registra o actualiza un token FCM de dispositivo móvil.

        Args:
            token: Token FCM del dispositivo (obtenido por la app al iniciar).
            platform: 'android' o 'ios' (por ahora solo android está activo).
            label: Etiqueta opcional para identificar el dispositivo (ej. username).

        Returns:
            True si se registró correctamente.
        """
        conn = self._get_conn()
        cursor = conn.cursor()
        now = time.time()

        cursor.execute("""
            INSERT INTO mobile_tokens (token, platform, label, registered_at, last_used_at)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(token) DO UPDATE SET
                platform = excluded.platform,
                label = excluded.label,
                last_used_at = excluded.last_used_at
        """, (token, platform, label, now, now))

        conn.commit()
        logger.info(f"Token móvil registrado: ...{token[-8:]} platform={platform} label={label}")
        return True

    def get_all_tokens(self) -> List[str]:
        """
        Retorna todos los tokens FCM activos registrados.
        Usada por el worker para enviar notificaciones a todos los dispositivos.

        Returns:
            Lista de strings con los tokens FCM.
        """
        conn = self._get_conn()
        cursor = conn.cursor()
        cursor.execute("SELECT token FROM mobile_tokens ORDER BY registered_at ASC")
        return [row["token"] for row in cursor.fetchall()]

    def get_tokens_detail(self) -> List[Dict]:
        """
        Retorna los tokens con todos sus metadatos (para el endpoint de administración).

        Returns:
            Lista de dicts con token, platform, label, registered_at, last_used_at.
        """
        conn = self._get_conn()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT token, platform, label, registered_at, last_used_at
            FROM mobile_tokens
            ORDER BY registered_at DESC
        """)
        return [dict(row) for row in cursor.fetchall()]

    def delete_token(self, token: str) -> bool:
        """
        Elimina un token FCM. Se llama cuando:
        - El usuario cierra sesión en la app móvil.
        - FCM reporta que el token ya no es válido.

        Args:
            token: Token FCM a eliminar.

        Returns:
            True si se encontró y eliminó, False si no existía.
        """
        conn = self._get_conn()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM mobile_tokens WHERE token = ?", (token,))
        conn.commit()
        deleted = cursor.rowcount > 0
        if deleted:
            logger.info(f"Token móvil eliminado: ...{token[-8:]}")
        return deleted

    # ---------------------------------------------------------------------------
    # Agent management (persistence)
    # ---------------------------------------------------------------------------

    def save_agent(self, agent: dict) -> None:
        """Saves or updates an agent in the database."""
        conn = self._get_conn()
        cursor = conn.cursor()
        
        syscollector_data = agent.get("syscollector")
        syscollector_json = json.dumps(syscollector_data) if syscollector_data else None
        
        cursor.execute("""
            INSERT INTO agents (
                agent_id, name, hostname, ip, os, version,
                cluster, groups, enrolled_at, last_seen, status, syscollector_json
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(agent_id) DO UPDATE SET
                name = excluded.name,
                hostname = excluded.hostname,
                ip = excluded.ip,
                os = excluded.os,
                version = excluded.version,
                cluster = excluded.cluster,
                groups = excluded.groups,
                last_seen = excluded.last_seen,
                status = excluded.status,
                syscollector_json = excluded.syscollector_json
        """, (
            agent.get("agent_id"),
            agent.get("name"),
            agent.get("hostname"),
            agent.get("ip"),
            agent.get("os"),
            agent.get("version"),
            agent.get("cluster"),
            json.dumps(agent.get("groups", [])),
            agent.get("enrolled_at"),
            agent.get("last_seen"),
            agent.get("status"),
            syscollector_json
        ))
        conn.commit()

    def get_all_agents(self) -> Dict[str, dict]:
        """Returns a dict of all agents keyed by agent_id."""
        conn = self._get_conn()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM agents")
        
        agents = {}
        for row in cursor.fetchall():
            d = dict(row)
            try:
                d["groups"] = json.loads(d.get("groups") or "[]")
            except:
                d["groups"] = []
            
            if d.get("syscollector_json"):
                try:
                    d["syscollector"] = json.loads(d.pop("syscollector_json"))
                except:
                    d["syscollector"] = None
                    d.pop("syscollector_json", None)
            else:
                d.pop("syscollector_json", None)
                
            agents[d["agent_id"]] = d
            
        return agents
    
    def delete_agent(self, agent_id: str) -> bool:
        """Deletes an agent and its queued commands from the database."""
        conn = self._get_conn()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM agents WHERE agent_id = ?", (agent_id,))
        deleted = cursor.rowcount > 0
        cursor.execute("DELETE FROM commands WHERE agent_id = ?", (agent_id,))
        conn.commit()
        return deleted

    # ---------------------------------------------------------------------------
    # Active response command queue
    # ---------------------------------------------------------------------------

    def _row_to_command(self, row: sqlite3.Row) -> Dict:
        """Converts a commands row into an API-friendly dict."""
        d = dict(row)
        try:
            d["params"] = json.loads(d.pop("params_json") or "{}")
        except (json.JSONDecodeError, TypeError):
            d["params"] = {}
            d.pop("params_json", None)

        result_json = d.pop("result_json", None)
        if result_json:
            try:
                d["result"] = json.loads(result_json)
            except (json.JSONDecodeError, TypeError):
                d["result"] = None
        else:
            d["result"] = None

        return d

    def enqueue_command(
        self,
        agent_id: str,
        action: str,
        params: Optional[Dict] = None,
        source: str = "api",
        alert_id: Optional[str] = None,
        created_by: Optional[str] = None,
    ) -> Dict:
        """
        Persists a new active-response command for an agent.

        Returns:
            The stored command as a dict.
        """
        conn = self._get_conn()
        cursor = conn.cursor()

        command_id = f"cmd-{uuid.uuid4().hex[:12]}"
        now = time.time()

        cursor.execute("""
            INSERT INTO commands (
                id, agent_id, action, params_json, status,
                source, alert_id, created_by, created_at
            ) VALUES (?, ?, ?, ?, 'pending', ?, ?, ?, ?)
        """, (
            command_id,
            agent_id,
            action,
            json.dumps(params or {}),
            source,
            alert_id,
            created_by,
            now,
        ))
        conn.commit()

        logger.info(
            f"Comando encolado: {command_id} agent={agent_id} "
            f"action={action} source={source}"
        )

        return self.get_command(command_id)

    def fetch_pending_commands(self, agent_id: str) -> List[Dict]:
        """
        Returns the pending commands for an agent and marks them as delivered.

        Called by the agent's polling loop via GET /api/commands/{agent_id}.
        """
        conn = self._get_conn()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT * FROM commands
            WHERE agent_id = ? AND status = 'pending'
            ORDER BY created_at ASC
        """, (agent_id,))
        rows = cursor.fetchall()

        if not rows:
            return []

        commands = [self._row_to_command(row) for row in rows]
        now = time.time()
        placeholders = ",".join("?" for _ in commands)
        cursor.execute(
            f"UPDATE commands SET status='delivered', delivered_at=? "
            f"WHERE id IN ({placeholders})",
            [now] + [c["id"] for c in commands],
        )
        conn.commit()

        logger.info(f"{len(commands)} comando(s) entregado(s) al agente {agent_id}")
        return commands

    def record_command_result(self, command_id: str, result: Dict) -> bool:
        """
        Stores the execution result reported back by the agent.

        Returns:
            True if the command existed and was updated.
        """
        conn = self._get_conn()
        cursor = conn.cursor()

        status = "completed" if result.get("success") else "failed"
        cursor.execute("""
            UPDATE commands
            SET status = ?, completed_at = ?, result_json = ?
            WHERE id = ?
        """, (status, time.time(), json.dumps(result), command_id))
        conn.commit()

        updated = cursor.rowcount > 0
        if updated:
            logger.info(f"Resultado registrado para {command_id}: {status}")
        else:
            logger.warning(f"Resultado recibido para comando desconocido: {command_id}")
        return updated

    def get_command(self, command_id: str) -> Optional[Dict]:
        """Returns a single command by ID."""
        conn = self._get_conn()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM commands WHERE id = ?", (command_id,))
        row = cursor.fetchone()
        return self._row_to_command(row) if row else None

    def list_commands(
        self,
        agent_id: Optional[str] = None,
        status: Optional[str] = None,
        limit: int = 50,
    ) -> List[Dict]:
        """Returns recent commands, optionally filtered by agent and status."""
        conn = self._get_conn()
        cursor = conn.cursor()

        query = "SELECT * FROM commands WHERE 1=1"
        params: List = []

        if agent_id:
            query += " AND agent_id = ?"
            params.append(agent_id)

        if status:
            query += " AND status = ?"
            params.append(status)

        query += " ORDER BY created_at DESC LIMIT ?"
        params.append(limit)

        cursor.execute(query, params)
        return [self._row_to_command(row) for row in cursor.fetchall()]

    def count_pending_commands(self, agent_id: Optional[str] = None) -> int:
        """Counts commands still waiting to be picked up by an agent."""
        conn = self._get_conn()
        cursor = conn.cursor()

        if agent_id:
            cursor.execute(
                "SELECT COUNT(*) FROM commands WHERE status='pending' AND agent_id = ?",
                (agent_id,),
            )
        else:
            cursor.execute("SELECT COUNT(*) FROM commands WHERE status='pending'")

        return cursor.fetchone()[0]

