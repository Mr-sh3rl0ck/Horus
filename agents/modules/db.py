# Horus SIEM - FIM Database Module
# Maneja la base de datos SQLite para almacenar hashes baseline de archivos

import sqlite3
import time
import threading
from pathlib import Path
from typing import Optional, Dict, List

# Thread-local storage para conexiones SQLite
_local = threading.local()

DB_PATH = Path(__file__).parent.parent / "data" / "fim_baseline.db"


def _get_connection() -> sqlite3.Connection:
    """Obtiene conexión thread-safe a SQLite."""
    if not hasattr(_local, "connection"):
        DB_PATH.parent.mkdir(parents=True, exist_ok=True)
        _local.connection = sqlite3.connect(str(DB_PATH), check_same_thread=False)
        _local.connection.row_factory = sqlite3.Row
    return _local.connection


def init_db() -> None:
    """Inicializa la base de datos con el esquema necesario."""
    conn = _get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS file_baseline (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            path TEXT UNIQUE NOT NULL,
            hash_sha256 TEXT NOT NULL,
            size_bytes INTEGER,
            mtime REAL,
            created_at REAL NOT NULL,
            updated_at REAL NOT NULL
        )
    """)

    cursor.execute("""
        CREATE INDEX IF NOT EXISTS idx_file_path ON file_baseline(path)
    """)

    conn.commit()


def get_baseline(path: str) -> Optional[Dict]:
    """
    Obtiene el baseline de un archivo.

    Args:
        path: Ruta absoluta del archivo

    Returns:
        Dict con hash_sha256, size_bytes, mtime o None si no existe
    """
    conn = _get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT hash_sha256, size_bytes, mtime FROM file_baseline WHERE path = ?",
        (path,)
    )
    row = cursor.fetchone()

    if row:
        return {
            "hash_sha256": row["hash_sha256"],
            "size_bytes": row["size_bytes"],
            "mtime": row["mtime"]
        }
    return None


def set_baseline(path: str, hash_sha256: str, size_bytes: int = None, mtime: float = None) -> None:
    """
    Guarda o actualiza el baseline de un archivo (UPSERT).

    Args:
        path: Ruta absoluta del archivo
        hash_sha256: Hash SHA256 del contenido
        size_bytes: Tamaño en bytes (opcional)
        mtime: Tiempo de modificación (opcional)
    """
    conn = _get_connection()
    cursor = conn.cursor()

    now = time.time()

    cursor.execute("""
        INSERT INTO file_baseline (path, hash_sha256, size_bytes, mtime, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(path) DO UPDATE SET
            hash_sha256 = excluded.hash_sha256,
            size_bytes = excluded.size_bytes,
            mtime = excluded.mtime,
            updated_at = excluded.updated_at
    """, (path, hash_sha256, size_bytes, mtime, now, now))

    conn.commit()


def delete_baseline(path: str) -> bool:
    """
    Elimina el baseline de un archivo.

    Returns:
        True si se eliminó, False si no existía
    """
    conn = _get_connection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM file_baseline WHERE path = ?", (path,))
    deleted = cursor.rowcount > 0
    conn.commit()

    return deleted


def get_all_baselines() -> List[Dict]:
    """
    Obtiene todos los baselines almacenados.
    Útil para verificación periódica de integridad.
    """
    conn = _get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT path, hash_sha256, size_bytes, mtime FROM file_baseline")

    return [
        {
            "path": row["path"],
            "hash_sha256": row["hash_sha256"],
            "size_bytes": row["size_bytes"],
            "mtime": row["mtime"]
        }
        for row in cursor.fetchall()
    ]


def clear_all_baselines() -> int:
    """
    Elimina todos los baselines. Útil para reinicializar.

    Returns:
        Número de registros eliminados
    """
    conn = _get_connection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM file_baseline")
    count = cursor.rowcount
    conn.commit()

    return count