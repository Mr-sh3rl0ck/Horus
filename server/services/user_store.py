# Horus SIEM Server - User Store
# SQLite-backed user persistence with bcrypt password hashing

import sqlite3
import threading
import logging
import time
import secrets
from pathlib import Path
from typing import Optional, List, Dict

import bcrypt

logger = logging.getLogger("horus.server.user_store")

_local = threading.local()

VALID_ROLES = {"admin", "soc_analyst", "compliance", "viewer"}


class UserStore:
    """SQLite-backed user storage with bcrypt password hashing.

    Shares the same database file as AlertStore but manages its own
    `users` table so no changes to the existing schema are required.
    """

    def __init__(self, db_path: str = "./data/alerts.db"):
        self.db_path = db_path
        Path(db_path).parent.mkdir(parents=True, exist_ok=True)
        self._init_db()

    # ------------------------------------------------------------------
    # Internal helpers
    # ------------------------------------------------------------------

    def _get_conn(self) -> sqlite3.Connection:
        """Thread-safe SQLite connection.

        Comparte archivo con AlertStore, así que usa los mismos PRAGMA para no
        chocar con las escrituras de los workers de análisis.
        """
        if not hasattr(_local, "user_conn") or _local.user_conn is None:
            conn = sqlite3.connect(self.db_path, check_same_thread=False, timeout=30.0)
            conn.row_factory = sqlite3.Row
            conn.execute("PRAGMA journal_mode=WAL")
            conn.execute("PRAGMA busy_timeout=30000")
            _local.user_conn = conn
        return _local.user_conn

    def _init_db(self) -> None:
        """Creates the users table if it does not exist."""
        conn = self._get_conn()
        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                username    TEXT PRIMARY KEY,
                hashed_pw   TEXT NOT NULL,
                role        TEXT NOT NULL DEFAULT 'viewer',
                is_active   INTEGER NOT NULL DEFAULT 1,
                created_at  REAL NOT NULL,
                last_login  REAL
            )
        """)
        conn.commit()
        logger.info("UserStore: tabla 'users' lista")

    # ------------------------------------------------------------------
    # Password utilities
    # ------------------------------------------------------------------

    @staticmethod
    def hash_password(plain: str) -> str:
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(plain.encode('utf-8'), salt).decode('utf-8')

    @staticmethod
    def verify_password(plain: str, hashed: str) -> bool:
        try:
            return bcrypt.checkpw(plain.encode('utf-8'), hashed.encode('utf-8'))
        except ValueError:
            return False

    # ------------------------------------------------------------------
    # CRUD
    # ------------------------------------------------------------------

    def create_user(self, username: str, plain_password: str, role: str = "viewer") -> bool:
        """Creates a new user. Returns False if username already exists."""
        if role not in VALID_ROLES:
            raise ValueError(f"Rol inválido: {role}. Válidos: {VALID_ROLES}")
        conn = self._get_conn()
        try:
            conn.execute(
                "INSERT INTO users (username, hashed_pw, role, is_active, created_at) VALUES (?,?,?,1,?)",
                (username, self.hash_password(plain_password), role, time.time()),
            )
            conn.commit()
            logger.info(f"Usuario creado: {username} [{role}]")
            return True
        except sqlite3.IntegrityError:
            logger.warning(f"Usuario ya existe: {username}")
            return False

    def get_user(self, username: str) -> Optional[Dict]:
        """Returns user dict or None."""
        row = self._get_conn().execute(
            "SELECT username, role, is_active, created_at, last_login FROM users WHERE username=?",
            (username,),
        ).fetchone()
        return dict(row) if row else None

    def get_user_with_hash(self, username: str) -> Optional[Dict]:
        """Returns user dict including hashed_pw (for auth only)."""
        row = self._get_conn().execute(
            "SELECT * FROM users WHERE username=?", (username,)
        ).fetchone()
        return dict(row) if row else None

    def list_users(self) -> List[Dict]:
        """Returns all users without password hashes."""
        rows = self._get_conn().execute(
            "SELECT username, role, is_active, created_at, last_login FROM users ORDER BY created_at"
        ).fetchall()
        return [dict(r) for r in rows]

    def update_user(self, username: str, role: Optional[str] = None,
                    plain_password: Optional[str] = None, is_active: Optional[bool] = None) -> bool:
        """Updates user fields. Returns False if user not found."""
        conn = self._get_conn()
        user = self.get_user(username)
        if not user:
            return False

        if role and role not in VALID_ROLES:
            raise ValueError(f"Rol inválido: {role}")

        fields, vals = [], []
        if role is not None:
            fields.append("role=?"); vals.append(role)
        if plain_password is not None:
            fields.append("hashed_pw=?"); vals.append(self.hash_password(plain_password))
        if is_active is not None:
            fields.append("is_active=?"); vals.append(1 if is_active else 0)

        if not fields:
            return True  # nothing to update

        vals.append(username)
        conn.execute(f"UPDATE users SET {', '.join(fields)} WHERE username=?", vals)
        conn.commit()
        logger.info(f"Usuario actualizado: {username}")
        return True

    def delete_user(self, username: str) -> bool:
        """Deletes a user. Returns False if not found."""
        conn = self._get_conn()
        cur = conn.execute("DELETE FROM users WHERE username=?", (username,))
        conn.commit()
        deleted = cur.rowcount > 0
        if deleted:
            logger.info(f"Usuario eliminado: {username}")
        return deleted

    def record_login(self, username: str) -> None:
        """Updates last_login timestamp."""
        conn = self._get_conn()
        conn.execute("UPDATE users SET last_login=? WHERE username=?", (time.time(), username))
        conn.commit()

    def authenticate(self, username: str, plain_password: str) -> Optional[Dict]:
        """Validates credentials. Returns user dict (no hash) or None."""
        user = self.get_user_with_hash(username)
        if not user:
            return None
        if not user.get("is_active"):
            return None
        if not self.verify_password(plain_password, user["hashed_pw"]):
            return None
        self.record_login(username)
        return {
            "username": user["username"],
            "role": user["role"],
            "is_active": user["is_active"],
        }

    def ensure_admin(self, username: str, plain_password: str) -> None:
        """Creates the admin user if it does not already exist."""
        if not self.get_user(username):
            self.create_user(username, plain_password, role="admin")
            logger.info(f"Admin '{username}' inicializado en UserStore")
        else:
            # Update password in case ADMIN_PASSWORD env var changed
            self.update_user(username, plain_password=plain_password)
