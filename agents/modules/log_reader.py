# Horus SIEM Agent - Log Collector Module
# Recolecta logs del sistema (auth.log, syslog, etc.) en entornos Linux/Docker
# Implementa tail con detección de rotación de archivos

import os
import time
import logging
import re
from pathlib import Path
from queue import Queue
from threading import Thread, Event
from typing import List, Dict, Optional

logger = logging.getLogger("horus.log_reader")


# ---------------------------------------------------------------------------
# Parsers de líneas de log
# ---------------------------------------------------------------------------

def parse_syslog_line(line: str, source: str) -> Dict:
    """
    Parsea una línea de syslog/auth.log al formato estructurado Horus.

    Formato esperado (RFC 3164):
        Feb 12 17:00:00 hostname sshd[1234]: Failed password for admin from 10.0.0.1 port 22 ssh2

    Args:
        line: Línea cruda del log
        source: Nombre del archivo fuente (ej: "auth.log")

    Returns:
        Diccionario con campos parseados
    """
    parsed = {
        "program": None,
        "pid": None,
        "message": line.strip(),
        "action": None,
        "src_ip": None,
        "dst_user": None,
    }

    # Patrón syslog: Mes Día HH:MM:SS hostname programa[PID]: mensaje
    syslog_pattern = re.compile(
        r"^(\w{3}\s+\d{1,2}\s+\d{2}:\d{2}:\d{2})\s+"  # timestamp
        r"(\S+)\s+"                                       # hostname
        r"(\S+?)(?:\[(\d+)\])?:\s+"                       # programa[PID]:
        r"(.+)$"                                          # mensaje
    )

    match = syslog_pattern.match(line.strip())
    if match:
        parsed["log_timestamp"] = match.group(1)
        parsed["hostname"] = match.group(2)
        parsed["program"] = match.group(3)
        parsed["pid"] = match.group(4)
        parsed["message"] = match.group(5)

    # Detectar acciones de seguridad comunes
    msg = parsed["message"].lower()

    if "failed password" in msg:
        parsed["action"] = "failed_login"
    elif "accepted password" in msg or "accepted publickey" in msg:
        parsed["action"] = "successful_login"
    elif "session opened" in msg:
        parsed["action"] = "session_opened"
    elif "session closed" in msg:
        parsed["action"] = "session_closed"
    elif "invalid user" in msg:
        parsed["action"] = "invalid_user"
    elif "connection closed" in msg:
        parsed["action"] = "connection_closed"
    elif "disconnect" in msg:
        parsed["action"] = "disconnect"
    elif "sudo" in msg or "command" in msg:
        parsed["action"] = "command_execution"

    # Extraer IP origen
    ip_match = re.search(r"from\s+(\d{1,3}(?:\.\d{1,3}){3})", line)
    if ip_match:
        parsed["src_ip"] = ip_match.group(1)

    # Extraer usuario destino
    user_match = re.search(r"(?:for|user)\s+(\S+)", line)
    if user_match:
        user = user_match.group(1)
        user = user.rstrip(".,;:")
        if user and user not in ("from", "invalid"):
            parsed["dst_user"] = user

    # Extraer puerto
    port_match = re.search(r"port\s+(\d+)", line)
    if port_match:
        parsed["port"] = int(port_match.group(1))

    return parsed


# ---------------------------------------------------------------------------
# FileLogReader — Tail de archivos de log
# ---------------------------------------------------------------------------

class FileLogReader:
    """
    Lee archivos de log con mecanismo tipo 'tail -F'.
    Soporta detección de rotación de archivos (logrotate).
    """

    def __init__(
        self,
        file_path: str,
        event_queue: Queue,
        poll_interval: float = 1.0,
    ):
        """
        Args:
            file_path: Ruta absoluta al archivo de log
            event_queue: Cola compartida donde se depositan los eventos
            poll_interval: Intervalo de polling en segundos
        """
        self.file_path = file_path
        self.source_name = Path(file_path).name
        self.event_queue = event_queue
        self.poll_interval = poll_interval
        self._stop_event = Event()
        self._thread: Optional[Thread] = None
        self._inode: Optional[int] = None
        self._position: int = 0

    def _get_inode(self) -> Optional[int]:
        """Obtiene el inodo del archivo (para detectar rotación)."""
        try:
            return os.stat(self.file_path).st_ino
        except OSError:
            return None

    def _create_event(self, line: str) -> Dict:
        """Crea un evento estructurado a partir de una línea de log."""
        parsed = parse_syslog_line(line, self.source_name)

        return {
            "type": "log",
            "source": self.source_name,
            "path": self.file_path,
            "timestamp": time.time(),
            "agent_time_iso": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
            "raw_log": line.strip(),
            "parsed": parsed,
        }

    def _tail_loop(self) -> None:
        """Bucle principal de lectura tipo tail."""
        logger.info(f"Iniciando tail en: {self.file_path}")

        # Esperar a que el archivo exista
        while not self._stop_event.is_set():
            if os.path.isfile(self.file_path):
                break
            logger.debug(f"Esperando archivo: {self.file_path}")
            self._stop_event.wait(self.poll_interval)

        if self._stop_event.is_set():
            return

        # Abrir y posicionarse al final (solo leer datos nuevos)
        try:
            f = open(self.file_path, "r", encoding="utf-8", errors="replace")
            f.seek(0, os.SEEK_END)
            self._position = f.tell()
            self._inode = self._get_inode()
            logger.info(
                f"Archivo abierto, posición inicial: {self._position} bytes, inode: {self._inode}"
            )
        except OSError as e:
            logger.error(f"No se pudo abrir {self.file_path}: {e}")
            return

        # Bucle de lectura
        while not self._stop_event.is_set():
            try:
                # Detectar rotación de archivo
                current_inode = self._get_inode()
                if current_inode is None:
                    logger.warning(f"Archivo desapareció: {self.file_path}")
                    f.close()
                    self._stop_event.wait(self.poll_interval)

                    if os.path.isfile(self.file_path):
                        f = open(self.file_path, "r", encoding="utf-8", errors="replace")
                        self._inode = self._get_inode()
                        self._position = 0
                        logger.info(f"Archivo reabierto tras rotación: {self.file_path}")
                    continue

                if current_inode != self._inode:
                    logger.info(
                        f"Rotación detectada en {self.file_path} "
                        f"(inode {self._inode} -> {current_inode})"
                    )
                    for line in f:
                        if line.strip():
                            event = self._create_event(line)
                            self.event_queue.put(event)

                    f.close()
                    f = open(self.file_path, "r", encoding="utf-8", errors="replace")
                    self._inode = current_inode
                    self._position = 0

                # Detectar truncamiento
                current_size = os.path.getsize(self.file_path)
                if current_size < self._position:
                    logger.info(f"Archivo truncado: {self.file_path}")
                    f.seek(0)
                    self._position = 0

                # Leer nuevas líneas
                for line in f:
                    if line.strip():
                        event = self._create_event(line)
                        self.event_queue.put(event)

                self._position = f.tell()

            except OSError as e:
                logger.error(f"Error leyendo {self.file_path}: {e}")

            self._stop_event.wait(self.poll_interval)

        # Cleanup
        try:
            f.close()
        except Exception:
            pass
        logger.info(f"Tail detenido: {self.file_path}")

    def start(self) -> None:
        """Inicia el tail en un thread independiente."""
        if self._thread and self._thread.is_alive():
            logger.warning(f"FileLogReader ya está corriendo para {self.file_path}")
            return

        self._stop_event.clear()
        self._thread = Thread(
            target=self._tail_loop,
            daemon=True,
            name=f"LogReader-{self.source_name}",
        )
        self._thread.start()

    def stop(self) -> None:
        """Detiene el tail."""
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=5)


# ---------------------------------------------------------------------------
# DockerLogReader — Lee logs de contenedores Docker
# ---------------------------------------------------------------------------

class DockerLogReader:
    """
    Lee logs de contenedores Docker via stdout/stderr.
    Usa el comando 'docker logs --follow' como subproceso.
    """

    def __init__(self, container: str, event_queue: Queue):
        self.container = container
        self.event_queue = event_queue
        self._stop_event = Event()
        self._thread: Optional[Thread] = None
        self._process = None

    def _create_event(self, line: str) -> Dict:
        """Crea un evento estructurado desde una línea de log de Docker."""
        return {
            "type": "log",
            "source": f"docker:{self.container}",
            "timestamp": time.time(),
            "agent_time_iso": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
            "raw_log": line.strip(),
            "parsed": {
                "container": self.container,
                "message": line.strip(),
            },
        }

    def _follow_loop(self) -> None:
        """Sigue los logs de Docker con `docker logs --follow --since now`."""
        import subprocess

        logger.info(f"Iniciando follow de container Docker: {self.container}")

        cmd = [
            "docker", "logs",
            "--follow",
            "--since", "0s",
            "--timestamps",
            self.container,
        ]

        try:
            self._process = subprocess.Popen(
                cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                bufsize=1,
            )

            for line in self._process.stdout:
                if self._stop_event.is_set():
                    break
                if line.strip():
                    event = self._create_event(line)
                    self.event_queue.put(event)

        except FileNotFoundError:
            logger.error("Comando 'docker' no encontrado. ¿Docker está instalado?")
        except Exception as e:
            logger.error(f"Error en Docker log reader ({self.container}): {e}")
        finally:
            if self._process:
                self._process.terminate()
                try:
                    self._process.wait(timeout=3)
                except subprocess.TimeoutExpired:
                    self._process.kill()
            logger.info(f"Docker log reader detenido: {self.container}")

    def start(self) -> None:
        """Inicia el follow en un thread independiente."""
        if self._thread and self._thread.is_alive():
            logger.warning(f"DockerLogReader ya corriendo para {self.container}")
            return

        self._stop_event.clear()
        self._thread = Thread(
            target=self._follow_loop,
            daemon=True,
            name=f"DockerLog-{self.container}",
        )
        self._thread.start()

    def stop(self) -> None:
        """Detiene el follow."""
        self._stop_event.set()
        if self._process:
            self._process.terminate()
        if self._thread:
            self._thread.join(timeout=5)


# ---------------------------------------------------------------------------
# LogCollector — Orquestador principal
# ---------------------------------------------------------------------------

class LogCollector:
    """
    Orquesta la recolección de logs de múltiples fuentes.
    Lee la configuración y lanza los readers apropiados.
    """

    def __init__(self, config: Dict, event_queue: Queue):
        self.config = config
        self.event_queue = event_queue
        self._readers: List = []

    def start(self) -> None:
        """Inicia todos los log readers configurados."""
        sources = self.config.get("sources", {})

        # --- Fuentes de archivo (Linux) ---
        linux_sources = sources.get("linux", [])
        for file_path in linux_sources:
            reader = FileLogReader(
                file_path=file_path,
                event_queue=self.event_queue,
                poll_interval=self.config.get("poll_interval_seconds", 1.0),
            )
            reader.start()
            self._readers.append(reader)
            if os.path.isfile(file_path):
                logger.info(f"FileLogReader iniciado: {file_path}")
            else:
                logger.warning(f"Archivo no encontrado, se esperará: {file_path}")

        # --- Fuentes Docker ---
        docker_sources = sources.get("docker", {})
        containers = docker_sources.get("containers", [])
        for container in containers:
            reader = DockerLogReader(
                container=container,
                event_queue=self.event_queue,
            )
            reader.start()
            self._readers.append(reader)
            logger.info(f"DockerLogReader iniciado: {container}")

        logger.info(
            f"LogCollector iniciado — {len(self._readers)} reader(s) activos "
            f"({len(linux_sources)} archivos, {len(containers)} containers)"
        )

    def stop(self) -> None:
        """Detiene todos los log readers."""
        logger.info("Deteniendo LogCollector...")
        for reader in self._readers:
            reader.stop()
        self._readers.clear()
        logger.info("LogCollector detenido")

    def get_reader_count(self) -> int:
        """Retorna el número de readers activos."""
        return len(self._readers)
