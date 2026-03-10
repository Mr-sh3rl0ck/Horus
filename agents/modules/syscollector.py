# Horus SIEM Agent - Syscollector Module
# Recolecta inventario del sistema: procesos, hardware, software, puertos
# RF-AG-03

import logging
import platform
import socket
import time
from queue import Queue
from threading import Thread, Event
from typing import Dict, List, Optional

logger = logging.getLogger("horus.syscollector")

try:
    import psutil
    HAS_PSUTIL = True
except ImportError:
    HAS_PSUTIL = False
    logger.warning("psutil no instalado — Syscollector tendrá funcionalidad limitada")


# ---------------------------------------------------------------------------
# Recolectores de datos
# ---------------------------------------------------------------------------

def collect_os_info() -> Dict:
    """Recolecta información del sistema operativo."""
    return {
        "platform": platform.system(),
        "platform_release": platform.release(),
        "platform_version": platform.version(),
        "architecture": platform.machine(),
        "hostname": socket.gethostname(),
        "python_version": platform.python_version(),
    }


def collect_hardware_metrics() -> Dict:
    """Recolecta métricas de hardware: CPU, RAM, disco."""
    if not HAS_PSUTIL:
        return {"error": "psutil no disponible"}

    cpu_freq = psutil.cpu_freq()
    disk = psutil.disk_usage("/")
    mem = psutil.virtual_memory()

    return {
        "cpu": {
            "percent": psutil.cpu_percent(interval=1),
            "count_logical": psutil.cpu_count(logical=True),
            "count_physical": psutil.cpu_count(logical=False),
            "freq_current_mhz": cpu_freq.current if cpu_freq else None,
        },
        "memory": {
            "total_bytes": mem.total,
            "available_bytes": mem.available,
            "used_bytes": mem.used,
            "percent": mem.percent,
        },
        "disk": {
            "total_bytes": disk.total,
            "used_bytes": disk.used,
            "free_bytes": disk.free,
            "percent": disk.percent,
        },
    }


def collect_processes(max_count: int = 200) -> List[Dict]:
    """
    Recolecta lista de procesos activos.

    Args:
        max_count: Límite de procesos a reportar

    Returns:
        Lista de procesos con PID, nombre, usuario, ruta
    """
    if not HAS_PSUTIL:
        return []

    processes = []
    for proc in psutil.process_iter(["pid", "name", "username", "exe", "status", "cpu_percent", "memory_percent"]):
        try:
            info = proc.info
            processes.append({
                "pid": info["pid"],
                "name": info["name"],
                "username": info.get("username"),
                "exe": info.get("exe"),
                "status": info.get("status"),
                "cpu_percent": info.get("cpu_percent"),
                "memory_percent": round(info.get("memory_percent") or 0.0, 2),
            })
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            continue

        if len(processes) >= max_count:
            break

    return processes


def collect_open_ports() -> List[Dict]:
    """Recolecta puertos abiertos (conexiones LISTEN)."""
    if not HAS_PSUTIL:
        return []

    ports = []
    for conn in psutil.net_connections(kind="inet"):
        if conn.status == "LISTEN":
            ports.append({
                "local_address": conn.laddr.ip if conn.laddr else None,
                "local_port": conn.laddr.port if conn.laddr else None,
                "pid": conn.pid,
                "status": conn.status,
            })

    return ports


def collect_installed_packages() -> List[Dict]:
    """
    Recolecta paquetes instalados (platform-specific).
    En Linux usa dpkg/rpm, en Windows usa registry/wmic.
    """
    packages = []
    system = platform.system()

    if system == "Linux":
        packages = _collect_linux_packages()
    elif system == "Windows":
        packages = _collect_windows_packages()

    return packages


def _collect_linux_packages() -> List[Dict]:
    """Recolecta paquetes instalados en Linux via dpkg o rpm."""
    import subprocess

    packages = []

    # Intentar dpkg (Debian/Ubuntu)
    try:
        result = subprocess.run(
            ["dpkg-query", "-W", "-f", "${Package}\t${Version}\t${Architecture}\n"],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split("\n"):
                parts = line.split("\t")
                if len(parts) >= 2:
                    packages.append({
                        "name": parts[0],
                        "version": parts[1],
                        "architecture": parts[2] if len(parts) > 2 else None,
                        "source": "dpkg",
                    })
            return packages
    except (FileNotFoundError, subprocess.TimeoutExpired):
        pass

    # Intentar rpm (RHEL/CentOS/Fedora)
    try:
        result = subprocess.run(
            ["rpm", "-qa", "--queryformat", "%{NAME}\t%{VERSION}-%{RELEASE}\t%{ARCH}\n"],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split("\n"):
                parts = line.split("\t")
                if len(parts) >= 2:
                    packages.append({
                        "name": parts[0],
                        "version": parts[1],
                        "architecture": parts[2] if len(parts) > 2 else None,
                        "source": "rpm",
                    })
            return packages
    except (FileNotFoundError, subprocess.TimeoutExpired):
        pass

    return packages


def _collect_windows_packages() -> List[Dict]:
    """Recolecta paquetes instalados en Windows via PowerShell."""
    import subprocess

    packages = []

    try:
        result = subprocess.run(
            [
                "powershell", "-Command",
                "Get-ItemProperty HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* "
                "| Select-Object DisplayName, DisplayVersion | ConvertTo-Csv -NoTypeInformation"
            ],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            lines = result.stdout.strip().split("\n")
            for line in lines[1:]:  # Saltar header
                parts = line.strip().strip('"').split('","')
                if len(parts) >= 2 and parts[0]:
                    packages.append({
                        "name": parts[0].strip('"'),
                        "version": parts[1].strip('"') if len(parts) > 1 else None,
                        "source": "registry",
                    })
    except (FileNotFoundError, subprocess.TimeoutExpired):
        pass

    return packages


# ---------------------------------------------------------------------------
# Syscollector — Recolector periódico
# ---------------------------------------------------------------------------

class Syscollector:
    """
    Recolecta inventario del sistema periódicamente y envía eventos.
    Configurable via config.json sección 'syscollector'.
    """

    def __init__(self, config: Dict, event_queue: Queue):
        """
        Args:
            config: Sección 'syscollector' de config.json
            event_queue: Cola compartida de eventos
        """
        self.config = config
        self.event_queue = event_queue
        self.interval = config.get("interval_seconds", 300)
        self._stop_event = Event()
        self._thread: Optional[Thread] = None

    def _collect_and_send(self) -> None:
        """Realiza una recolección completa y la envía a la cola."""
        logger.info("Iniciando recolección de inventario...")

        inventory = {
            "type": "syscollector",
            "timestamp": time.time(),
            "agent_time_iso": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        }

        # Siempre recolectar info de OS
        inventory["os"] = collect_os_info()

        # Métricas de hardware
        if self.config.get("collect_hardware", True):
            inventory["hardware"] = collect_hardware_metrics()

        # Procesos
        if self.config.get("collect_processes", True):
            inventory["processes"] = collect_processes()
            inventory["process_count"] = len(inventory["processes"])

        # Puertos abiertos
        if self.config.get("collect_ports", True):
            inventory["open_ports"] = collect_open_ports()

        # Paquetes instalados
        if self.config.get("collect_packages", True):
            inventory["packages"] = collect_installed_packages()

        self.event_queue.put(inventory)
        logger.info(
            f"Inventario recolectado — "
            f"OS: {inventory['os']['platform']} "
            f"{inventory['os']['platform_release']}, "
            f"Procesos: {inventory.get('process_count', 'N/A')}"
        )

    def _run_loop(self) -> None:
        """Bucle principal de recolección periódica."""
        logger.info(f"Syscollector iniciado (intervalo: {self.interval}s)")

        # Primera recolección al iniciar
        self._collect_and_send()

        while not self._stop_event.is_set():
            self._stop_event.wait(self.interval)
            if not self._stop_event.is_set():
                try:
                    self._collect_and_send()
                except Exception as e:
                    logger.error(f"Error en recolección: {e}", exc_info=True)

        logger.info("Syscollector detenido")

    def start(self) -> None:
        """Inicia la recolección periódica."""
        if self._thread and self._thread.is_alive():
            logger.warning("Syscollector ya está corriendo")
            return

        self._stop_event.clear()
        self._thread = Thread(
            target=self._run_loop,
            daemon=True,
            name="Syscollector",
        )
        self._thread.start()

    def stop(self) -> None:
        """Detiene la recolección."""
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=10)
