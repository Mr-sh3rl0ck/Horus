# Horus SIEM Agent - Active Response Module
# Recibe comandos del servidor y ejecuta acciones de mitigación
# RF-AG-04

import logging
import platform
import subprocess
import time
from queue import Queue
from threading import Thread, Event
from typing import Dict, List, Optional, Callable

logger = logging.getLogger("horus.active_response")


# ---------------------------------------------------------------------------
# Acciones de respuesta predefinidas
# ---------------------------------------------------------------------------

def block_ip(ip_address: str) -> Dict:
    """
    Bloquea una IP en el firewall del sistema.

    Linux: usa iptables
    Windows: usa netsh advfirewall

    Returns:
        Dict con resultado de la acción
    """
    system = platform.system()
    result = {"action": "block_ip", "target": ip_address, "success": False}

    try:
        if system == "Linux":
            cmd = ["iptables", "-A", "INPUT", "-s", ip_address, "-j", "DROP"]
        elif system == "Windows":
            cmd = [
                "netsh", "advfirewall", "firewall", "add", "rule",
                f"name=HorusBlock_{ip_address}",
                "dir=in", "action=block",
                f"remoteip={ip_address}",
                "protocol=any"
            ]
        else:
            result["error"] = f"Plataforma no soportada: {system}"
            return result

        proc = subprocess.run(
            cmd, capture_output=True, text=True, timeout=15
        )
        result["success"] = proc.returncode == 0
        result["stdout"] = proc.stdout.strip()
        result["stderr"] = proc.stderr.strip()

        if result["success"]:
            logger.info(f"IP bloqueada: {ip_address}")
        else:
            logger.error(f"Error bloqueando IP {ip_address}: {proc.stderr}")

    except subprocess.TimeoutExpired:
        result["error"] = "Timeout ejecutando comando de firewall"
        logger.error(f"Timeout bloqueando IP {ip_address}")
    except Exception as e:
        result["error"] = str(e)
        logger.error(f"Error bloqueando IP {ip_address}: {e}")

    return result


def kill_process(pid: int) -> Dict:
    """
    Termina un proceso por su PID.

    Returns:
        Dict con resultado de la acción
    """
    result = {"action": "kill_process", "target": pid, "success": False}

    try:
        import psutil
        proc = psutil.Process(pid)
        proc_name = proc.name()
        proc.terminate()

        # Esperar graceful termination
        try:
            proc.wait(timeout=5)
        except psutil.TimeoutExpired:
            proc.kill()  # Force kill

        result["success"] = True
        result["process_name"] = proc_name
        logger.info(f"Proceso terminado: PID={pid} ({proc_name})")

    except ImportError:
        # Fallback sin psutil
        system = platform.system()
        try:
            if system == "Linux":
                cmd = ["kill", "-9", str(pid)]
            elif system == "Windows":
                cmd = ["taskkill", "/PID", str(pid), "/F"]
            else:
                result["error"] = f"Plataforma no soportada: {system}"
                return result

            proc = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
            result["success"] = proc.returncode == 0
            result["stdout"] = proc.stdout.strip()
        except Exception as e:
            result["error"] = str(e)

    except Exception as e:
        result["error"] = str(e)
        logger.error(f"Error terminando proceso PID={pid}: {e}")

    return result


# ---------------------------------------------------------------------------
# Registro de acciones permitidas (whitelist)
# ---------------------------------------------------------------------------

ACTION_REGISTRY: Dict[str, Callable] = {
    "block_ip": lambda params: block_ip(params.get("ip_address", "")),
    "kill_process": lambda params: kill_process(params.get("pid", 0)),
}


# ---------------------------------------------------------------------------
# ActiveResponseHandler
# ---------------------------------------------------------------------------

class ActiveResponseHandler:
    """
    Maneja la ejecución de respuestas activas ordenadas por el servidor.
    Solo ejecuta acciones que estén en la whitelist de configuración.
    """

    def __init__(self, config: Dict, event_queue: Queue):
        """
        Args:
            config: Sección 'active_response' de config.json
            event_queue: Cola para reportar resultados de acciones
        """
        self.config = config
        self.event_queue = event_queue
        self.allowed_actions = set(config.get("allowed_actions", []))
        self.poll_interval = config.get("poll_interval_seconds", 10)
        self._stop_event = Event()
        self._thread: Optional[Thread] = None
        self._command_queue: Queue = Queue()

    def enqueue_command(self, command: Dict) -> bool:
        """
        Encola un comando de respuesta activa para ejecución.

        Args:
            command: Dict con 'action' y 'params'

        Returns:
            True si se aceptó, False si la acción no está permitida
        """
        action = command.get("action", "")

        if action not in self.allowed_actions:
            logger.warning(f"Acción rechazada (no permitida): {action}")
            return False

        if action not in ACTION_REGISTRY:
            logger.warning(f"Acción desconocida: {action}")
            return False

        self._command_queue.put(command)
        logger.info(f"Comando encolado: {action}")
        return True

    def _execute_command(self, command: Dict) -> None:
        """Ejecuta un comando de respuesta activa."""
        action = command.get("action", "")
        params = command.get("params", {})
        command_id = command.get("id", "unknown")

        logger.info(f"Ejecutando respuesta activa: {action} (id={command_id})")

        handler = ACTION_REGISTRY.get(action)
        if not handler:
            return

        result = handler(params)
        result["command_id"] = command_id
        result["timestamp"] = time.time()
        result["agent_time_iso"] = time.strftime("%Y-%m-%dT%H:%M:%S%z")

        # Enviar resultado a la cola de eventos para reportar al servidor
        event = {
            "type": "active_response_result",
            "timestamp": time.time(),
            "agent_time_iso": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
            "result": result,
        }
        self.event_queue.put(event)

    def _run_loop(self) -> None:
        """Bucle principal que ejecuta comandos de la cola."""
        logger.info("Active Response handler iniciado")

        while not self._stop_event.is_set():
            try:
                command = self._command_queue.get(timeout=1.0)
                self._execute_command(command)
            except Exception:
                continue

        logger.info("Active Response handler detenido")

    def start(self) -> None:
        """Inicia el handler de respuesta activa."""
        if self._thread and self._thread.is_alive():
            logger.warning("ActiveResponseHandler ya corriendo")
            return

        self._stop_event.clear()
        self._thread = Thread(
            target=self._run_loop,
            daemon=True,
            name="ActiveResponse",
        )
        self._thread.start()

    def stop(self) -> None:
        """Detiene el handler."""
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=5)
