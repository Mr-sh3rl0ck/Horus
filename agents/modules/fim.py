# Horus SIEM Agent - File Integrity Monitoring
# Detecta cambios en archivos críticos: creación, modificación, eliminación

import hashlib
import os
import time
import logging
from pathlib import Path
from queue import Queue
from typing import List, Optional

from watchdog.events import FileSystemEventHandler, FileSystemEvent
from watchdog.observers import Observer

from .db import init_db, get_baseline, set_baseline, delete_baseline, get_all_baselines

# Configurar logger
logger = logging.getLogger("horus.fim")


class FIMHandler(FileSystemEventHandler):
    """
    Manejador de eventos del sistema de archivos.
    Detecta created, modified, deleted y compara con baseline.
    """

    def __init__(self, event_queue: Queue, exclude_patterns: List[str] = None):
        """
        Args:
            event_queue: Cola para enviar eventos al módulo de comunicación
            exclude_patterns: Patrones a ignorar (ej: ["*.log", "*.tmp"])
        """
        super().__init__()
        self.event_queue = event_queue
        self.exclude_patterns = exclude_patterns or []

    def _should_ignore(self, path: str) -> bool:
        """Verifica si el archivo debe ignorarse según patrones."""
        from fnmatch import fnmatch
        filename = os.path.basename(path)
        return any(fnmatch(filename, pattern) for pattern in self.exclude_patterns)

    def _calculate_hash(self, path: str) -> Optional[str]:
        """
        Calcula el hash SHA256 de un archivo.

        Returns:
            Hash hexadecimal o None si hay error
        """
        sha256_hash = hashlib.sha256()
        try:
            with open(path, "rb") as f:
                for byte_block in iter(lambda: f.read(4096), b""):
                    sha256_hash.update(byte_block)
            return sha256_hash.hexdigest()
        except (IOError, OSError, PermissionError) as e:
            logger.warning(f"No se pudo leer archivo {path}: {e}")
            return None

    def _get_file_metadata(self, path: str) -> dict:
        """Obtiene metadatos del archivo (tamaño, mtime)."""
        try:
            stat = os.stat(path)
            return {
                "size_bytes": stat.st_size,
                "mtime": stat.st_mtime
            }
        except (IOError, OSError) as e:
            logger.warning(f"No se pudo obtener metadatos de {path}: {e}")
            return {"size_bytes": None, "mtime": None}

    def _create_event(self, action: str, path: str, **extra) -> dict:
        """Crea un evento FIM estandarizado."""
        event = {
            "type": "fim",
            "action": action,
            "path": path,
            "timestamp": time.time(),
            "agent_time_iso": time.strftime("%Y-%m-%dT%H:%M:%S%z")
        }
        event.update(extra)
        return event

    def on_created(self, event: FileSystemEvent) -> None:
        """Maneja la creación de nuevos archivos."""
        if event.is_directory:
            return

        path = event.src_path

        if self._should_ignore(path):
            return

        hash_new = self._calculate_hash(path)
        if hash_new is None:
            return

        metadata = self._get_file_metadata(path)

        set_baseline(
            path=path,
            hash_sha256=hash_new,
            size_bytes=metadata["size_bytes"],
            mtime=metadata["mtime"]
        )

        fim_event = self._create_event(
            action="created",
            path=path,
            hash_sha256=hash_new,
            size_bytes=metadata["size_bytes"]
        )

        logger.info(f"Archivo creado: {path}")
        self.event_queue.put(fim_event)

    def on_modified(self, event: FileSystemEvent) -> None:
        """Maneja la modificación de archivos existentes."""
        if event.is_directory:
            return

        path = event.src_path

        if self._should_ignore(path):
            return

        hash_current = self._calculate_hash(path)
        if hash_current is None:
            return

        # Obtener baseline anterior
        baseline = get_baseline(path)

        if baseline is None:
            # Archivo no tenía baseline, tratarlo como nuevo
            metadata = self._get_file_metadata(path)
            set_baseline(
                path=path,
                hash_sha256=hash_current,
                size_bytes=metadata["size_bytes"],
                mtime=metadata["mtime"]
            )
            return

        hash_previous = baseline["hash_sha256"]

        # Solo generar evento si el hash realmente cambió
        if hash_current != hash_previous:
            metadata = self._get_file_metadata(path)

            set_baseline(
                path=path,
                hash_sha256=hash_current,
                size_bytes=metadata["size_bytes"],
                mtime=metadata["mtime"]
            )

            fim_event = self._create_event(
                action="modified",
                path=path,
                hash_sha256=hash_current,
                hash_previous=hash_previous,
                size_bytes=metadata["size_bytes"],
                size_previous=baseline["size_bytes"]
            )

            logger.info(f"Archivo modificado: {path}")
            self.event_queue.put(fim_event)

    def on_deleted(self, event: FileSystemEvent) -> None:
        """Maneja la eliminación de archivos."""
        if event.is_directory:
            return

        path = event.src_path

        if self._should_ignore(path):
            return

        baseline = get_baseline(path)
        hash_deleted = baseline["hash_sha256"] if baseline else None

        delete_baseline(path)

        fim_event = self._create_event(
            action="deleted",
            path=path,
            hash_previous=hash_deleted
        )

        logger.warning(f"Archivo eliminado: {path}")
        self.event_queue.put(fim_event)

    def on_moved(self, event: FileSystemEvent) -> None:
        """Maneja el movimiento/renombrado de archivos."""
        if event.is_directory:
            return

        src_path = event.src_path
        dest_path = event.dest_path

        baseline = get_baseline(src_path)
        delete_baseline(src_path)

        if baseline:
            metadata = self._get_file_metadata(dest_path)
            set_baseline(
                path=dest_path,
                hash_sha256=baseline["hash_sha256"],
                size_bytes=metadata.get("size_bytes") or baseline["size_bytes"],
                mtime=metadata.get("mtime") or baseline["mtime"]
            )

        fim_event = self._create_event(
            action="moved",
            path=dest_path,
            path_previous=src_path,
            hash_sha256=baseline["hash_sha256"] if baseline else None
        )

        logger.info(f"Archivo movido: {src_path} -> {dest_path}")
        self.event_queue.put(fim_event)


def scan_baseline(paths: List[str], exclude_patterns: List[str] = None) -> int:
    """
    Escanea directorios y crea baseline inicial de todos los archivos.

    Args:
        paths: Lista de rutas a escanear
        exclude_patterns: Patrones a ignorar

    Returns:
        Número de archivos escaneados
    """
    from fnmatch import fnmatch

    exclude_patterns = exclude_patterns or []
    count = 0

    for base_path in paths:
        base_path = Path(base_path)

        if not base_path.exists():
            logger.warning(f"Ruta no existe: {base_path}")
            continue

        if base_path.is_file():
            files = [base_path]
        else:
            files = base_path.rglob("*")

        for file_path in files:
            if not file_path.is_file():
                continue

            if any(fnmatch(file_path.name, p) for p in exclude_patterns):
                continue

            path_str = str(file_path)

            sha256 = hashlib.sha256()
            try:
                with open(file_path, "rb") as f:
                    for chunk in iter(lambda: f.read(4096), b""):
                        sha256.update(chunk)

                stat = file_path.stat()
                set_baseline(
                    path=path_str,
                    hash_sha256=sha256.hexdigest(),
                    size_bytes=stat.st_size,
                    mtime=stat.st_mtime
                )
                count += 1

            except (IOError, OSError, PermissionError) as e:
                logger.warning(f"No se pudo escanear {path_str}: {e}")

    logger.info(f"Baseline creado: {count} archivos escaneados")
    return count


def verify_integrity() -> List[dict]:
    """
    Verifica la integridad de todos los archivos contra el baseline.
    Útil para detección de cambios que ocurrieron offline.

    Returns:
        Lista de discrepancias encontradas
    """
    discrepancies = []
    baselines = get_all_baselines()

    for entry in baselines:
        path = entry["path"]

        if not os.path.exists(path):
            discrepancies.append({
                "type": "missing",
                "path": path,
                "expected_hash": entry["hash_sha256"]
            })
            continue

        sha256 = hashlib.sha256()
        try:
            with open(path, "rb") as f:
                for chunk in iter(lambda: f.read(4096), b""):
                    sha256.update(chunk)

            current_hash = sha256.hexdigest()

            if current_hash != entry["hash_sha256"]:
                discrepancies.append({
                    "type": "modified",
                    "path": path,
                    "expected_hash": entry["hash_sha256"],
                    "actual_hash": current_hash
                })

        except (IOError, OSError, PermissionError) as e:
            discrepancies.append({
                "type": "unreadable",
                "path": path,
                "error": str(e)
            })

    return discrepancies


def start_fim(paths: List[str], event_queue: Queue,
              exclude_patterns: List[str] = None,
              create_baseline: bool = True) -> Observer:
    """
    Inicia el monitoreo FIM en los directorios especificados.

    Args:
        paths: Lista de rutas a monitorear
        event_queue: Cola para eventos
        exclude_patterns: Patrones a ignorar
        create_baseline: Si True, escanea y crea baseline inicial

    Returns:
        Observer de watchdog (debe detenerse con observer.stop())
    """
    init_db()

    if create_baseline:
        scan_baseline(paths, exclude_patterns)

    handler = FIMHandler(event_queue, exclude_patterns)
    observer = Observer()

    for path in paths:
        if os.path.exists(path):
            observer.schedule(handler, path, recursive=True)
            logger.info(f"Monitoreando: {path}")
        else:
            logger.warning(f"Ruta no existe, saltando: {path}")

    observer.start()
    logger.info("FIM iniciado")

    return observer
