# Horus SIEM Agent - Active Response Module
# Recibe comandos del servidor y ejecuta acciones de mitigación
# RF-AG-04
#
# FLUJO COMPLETO:
#   1. El hilo poller consulta GET /api/agent/commands/{agent_id} cada
#      `poll_interval_seconds`.
#   2. Cada comando recibido pasa por la whitelist (`allowed_actions`)
#      y se encola en la cola interna.
#   3. El hilo executor ejecuta la acción y publica un evento
#      `active_response_result` en la cola de eventos del agente, que el
#      EventSender manda al servidor para cerrar el ciclo.

import logging
import platform
import subprocess
import time
from queue import Queue, Empty
from threading import Thread, Event
from typing import Dict, List, Optional, Callable

logger = logging.getLogger("horus.active_response")


# Cadenas iptables dedicadas — permiten aislar/restaurar sin tocar
# las reglas preexistentes del host.
ISOLATE_CHAIN_IN = "HORUS_ISO_IN"
ISOLATE_CHAIN_OUT = "HORUS_ISO_OUT"


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _run(cmd: List[str], timeout: int = 15) -> subprocess.CompletedProcess:
    """Ejecuta un comando del sistema y retorna el proceso completado."""
    return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)


def _rule_exists(check_cmd: List[str]) -> bool:
    """Verifica si una regla de iptables ya existe (usando -C)."""
    try:
        return _run(check_cmd, timeout=10).returncode == 0
    except Exception:
        return False


# ---------------------------------------------------------------------------
# Acciones de respuesta predefinidas
# ---------------------------------------------------------------------------

def block_ip(ip_address: str) -> Dict:
    """
    Bloquea una IP en el firewall del sistema.

    Linux: usa iptables
    Windows: usa netsh advfirewall

    La operación es idempotente: si la regla ya existe no se duplica.

    Returns:
        Dict con resultado de la acción
    """
    system = platform.system()
    result = {"action": "block_ip", "target": ip_address, "success": False}

    if not ip_address:
        result["error"] = "Falta el parámetro 'ip' con la dirección a bloquear"
        logger.error("block_ip llamado sin dirección IP")
        return result

    try:
        if system == "Linux":
            check = ["iptables", "-C", "INPUT", "-s", ip_address, "-j", "DROP"]
            if _rule_exists(check):
                result["success"] = True
                result["already_applied"] = True
                logger.info(f"IP ya estaba bloqueada: {ip_address}")
                return result
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

        proc = _run(cmd)
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
    except FileNotFoundError:
        result["error"] = "Herramienta de firewall no encontrada (¿iptables/netsh instalado?)"
        logger.error(f"Firewall no disponible para bloquear {ip_address}")
    except Exception as e:
        result["error"] = str(e)
        logger.error(f"Error bloqueando IP {ip_address}: {e}")

    return result


def unblock_ip(ip_address: str) -> Dict:
    """Elimina el bloqueo de una IP previamente bloqueada."""
    system = platform.system()
    result = {"action": "unblock_ip", "target": ip_address, "success": False}

    if not ip_address:
        result["error"] = "Falta el parámetro 'ip' con la dirección a desbloquear"
        return result

    try:
        if system == "Linux":
            cmd = ["iptables", "-D", "INPUT", "-s", ip_address, "-j", "DROP"]
        elif system == "Windows":
            cmd = [
                "netsh", "advfirewall", "firewall", "delete", "rule",
                f"name=HorusBlock_{ip_address}",
            ]
        else:
            result["error"] = f"Plataforma no soportada: {system}"
            return result

        proc = _run(cmd)
        result["success"] = proc.returncode == 0
        result["stdout"] = proc.stdout.strip()
        result["stderr"] = proc.stderr.strip()

        if result["success"]:
            logger.info(f"IP desbloqueada: {ip_address}")

    except Exception as e:
        result["error"] = str(e)
        logger.error(f"Error desbloqueando IP {ip_address}: {e}")

    return result


def kill_process(pid: Optional[int] = None, name: Optional[str] = None) -> Dict:
    """
    Termina un proceso por su PID o por su nombre.

    Si se entrega `name` en lugar de `pid`, se terminan todos los procesos
    cuyo nombre coincida (case-insensitive).

    Returns:
        Dict con resultado de la acción
    """
    result = {"action": "kill_process", "target": pid or name, "success": False}

    if not pid and not name:
        result["error"] = "Se requiere 'pid' o 'name' para terminar un proceso"
        logger.error("kill_process llamado sin pid ni name")
        return result

    try:
        import psutil

        targets = []
        if pid:
            targets.append(psutil.Process(int(pid)))
        else:
            wanted = str(name).lower()
            for proc in psutil.process_iter(["pid", "name"]):
                try:
                    if (proc.info.get("name") or "").lower() == wanted:
                        targets.append(proc)
                except (psutil.NoSuchProcess, psutil.AccessDenied):
                    continue

        if not targets:
            result["error"] = f"No se encontró ningún proceso con name='{name}'"
            logger.warning(result["error"])
            return result

        killed = []
        for proc in targets:
            try:
                proc_name = proc.name()
                proc_pid = proc.pid
                proc.terminate()
                try:
                    proc.wait(timeout=5)
                except psutil.TimeoutExpired:
                    proc.kill()  # Force kill
                killed.append({"pid": proc_pid, "name": proc_name})
                logger.info(f"Proceso terminado: PID={proc_pid} ({proc_name})")
            except (psutil.NoSuchProcess, psutil.AccessDenied) as e:
                logger.warning(f"No se pudo terminar PID={proc.pid}: {e}")

        result["success"] = len(killed) > 0
        result["killed"] = killed
        if not killed:
            result["error"] = "No se pudo terminar ningún proceso (¿permisos insuficientes?)"

        return result

    except ImportError:
        # Fallback sin psutil — solo soporta PID
        if not pid:
            result["error"] = "psutil no instalado: matar por nombre no está disponible"
            return result

        system = platform.system()
        try:
            if system == "Linux":
                cmd = ["kill", "-9", str(pid)]
            elif system == "Windows":
                cmd = ["taskkill", "/PID", str(pid), "/F"]
            else:
                result["error"] = f"Plataforma no soportada: {system}"
                return result

            proc = _run(cmd, timeout=10)
            result["success"] = proc.returncode == 0
            result["stdout"] = proc.stdout.strip()
        except Exception as e:
            result["error"] = str(e)

    except Exception as e:
        result["error"] = str(e)
        logger.error(f"Error terminando proceso pid={pid} name={name}: {e}")

    return result


def isolate(server_host: Optional[str] = None) -> Dict:
    """
    Aísla el endpoint de la red: bloquea todo el tráfico entrante y saliente
    salvo loopback y la comunicación con el servidor Horus.

    Mantener abierto el canal hacia el servidor es intencional: permite que el
    agente siga reportando y que el operador pueda revertir el aislamiento
    remotamente con la acción `unisolate`.

    Returns:
        Dict con resultado de la acción
    """
    system = platform.system()
    result = {"action": "isolate", "target": server_host, "success": False}

    if not server_host:
        result["error"] = (
            "No se conoce la IP del servidor Horus — se aborta el aislamiento "
            "para no perder el control del endpoint"
        )
        logger.error(result["error"])
        return result

    try:
        if system == "Linux":
            steps = [
                # Crear las cadenas (falla si ya existen — se ignora)
                (["iptables", "-N", ISOLATE_CHAIN_IN], True),
                (["iptables", "-N", ISOLATE_CHAIN_OUT], True),
                # Limpiarlas por si quedó estado previo
                (["iptables", "-F", ISOLATE_CHAIN_IN], False),
                (["iptables", "-F", ISOLATE_CHAIN_OUT], False),
                # Entrante: loopback + servidor Horus, resto DROP
                (["iptables", "-A", ISOLATE_CHAIN_IN, "-i", "lo", "-j", "ACCEPT"], False),
                (["iptables", "-A", ISOLATE_CHAIN_IN, "-s", server_host, "-j", "ACCEPT"], False),
                (["iptables", "-A", ISOLATE_CHAIN_IN, "-j", "DROP"], False),
                # Saliente: loopback + servidor Horus, resto DROP
                (["iptables", "-A", ISOLATE_CHAIN_OUT, "-o", "lo", "-j", "ACCEPT"], False),
                (["iptables", "-A", ISOLATE_CHAIN_OUT, "-d", server_host, "-j", "ACCEPT"], False),
                (["iptables", "-A", ISOLATE_CHAIN_OUT, "-j", "DROP"], False),
            ]

            for cmd, ignore_failure in steps:
                proc = _run(cmd)
                if proc.returncode != 0 and not ignore_failure:
                    result["error"] = f"Falló '{' '.join(cmd)}': {proc.stderr.strip()}"
                    logger.error(result["error"])
                    return result

            # Enganchar las cadenas al inicio de INPUT/OUTPUT (idempotente)
            for parent, chain, direction in (
                ("INPUT", ISOLATE_CHAIN_IN, "-s"),
                ("OUTPUT", ISOLATE_CHAIN_OUT, "-d"),
            ):
                if not _rule_exists(["iptables", "-C", parent, "-j", chain]):
                    proc = _run(["iptables", "-I", parent, "1", "-j", chain])
                    if proc.returncode != 0:
                        result["error"] = f"No se pudo enganchar {chain} a {parent}: {proc.stderr.strip()}"
                        logger.error(result["error"])
                        return result

            result["success"] = True
            logger.warning(
                f"Endpoint AISLADO de la red — solo se permite tráfico con {server_host}"
            )

        elif system == "Windows":
            # Permitir primero el canal con el servidor, luego bloquear todo
            _run([
                "netsh", "advfirewall", "firewall", "add", "rule",
                "name=HorusIsolate_Allow_Server", "dir=out", "action=allow",
                f"remoteip={server_host}", "protocol=any",
            ])
            _run([
                "netsh", "advfirewall", "firewall", "add", "rule",
                "name=HorusIsolate_Allow_Server_In", "dir=in", "action=allow",
                f"remoteip={server_host}", "protocol=any",
            ])
            proc = _run([
                "netsh", "advfirewall", "set", "allprofiles",
                "firewallpolicy", "blockinbound,blockoutbound",
            ])
            result["success"] = proc.returncode == 0
            result["stderr"] = proc.stderr.strip()
            if result["success"]:
                logger.warning(
                    f"Endpoint AISLADO de la red — solo se permite tráfico con {server_host}"
                )
        else:
            result["error"] = f"Plataforma no soportada: {system}"

    except subprocess.TimeoutExpired:
        result["error"] = "Timeout aplicando reglas de aislamiento"
        logger.error(result["error"])
    except FileNotFoundError:
        result["error"] = "Herramienta de firewall no encontrada (¿iptables/netsh instalado?)"
        logger.error(result["error"])
    except Exception as e:
        result["error"] = str(e)
        logger.error(f"Error aislando el endpoint: {e}")

    return result


def unisolate() -> Dict:
    """Revierte el aislamiento de red aplicado por `isolate`."""
    system = platform.system()
    result = {"action": "unisolate", "success": False}

    try:
        if system == "Linux":
            # Desenganchar y eliminar las cadenas dedicadas
            for parent, chain in (("INPUT", ISOLATE_CHAIN_IN), ("OUTPUT", ISOLATE_CHAIN_OUT)):
                while _rule_exists(["iptables", "-C", parent, "-j", chain]):
                    if _run(["iptables", "-D", parent, "-j", chain]).returncode != 0:
                        break
                _run(["iptables", "-F", chain])
                _run(["iptables", "-X", chain])

            result["success"] = True
            logger.info("Aislamiento de red revertido — conectividad restaurada")

        elif system == "Windows":
            proc = _run([
                "netsh", "advfirewall", "set", "allprofiles",
                "firewallpolicy", "blockinbound,allowoutbound",
            ])
            _run([
                "netsh", "advfirewall", "firewall", "delete", "rule",
                "name=HorusIsolate_Allow_Server",
            ])
            _run([
                "netsh", "advfirewall", "firewall", "delete", "rule",
                "name=HorusIsolate_Allow_Server_In",
            ])
            result["success"] = proc.returncode == 0
            result["stderr"] = proc.stderr.strip()
            if result["success"]:
                logger.info("Aislamiento de red revertido — conectividad restaurada")
        else:
            result["error"] = f"Plataforma no soportada: {system}"

    except Exception as e:
        result["error"] = str(e)
        logger.error(f"Error revirtiendo el aislamiento: {e}")

    return result


# ---------------------------------------------------------------------------
# Registro de acciones permitidas (whitelist)
# ---------------------------------------------------------------------------
#
# Cada handler recibe el dict `params` del comando. Los nombres de parámetros
# aceptados deben coincidir con los que valida el servidor en
# server/api/mobile.py (`ALLOWED_ACTIONS`).

ACTION_REGISTRY: Dict[str, Callable[[Dict], Dict]] = {
    # El servidor envía {"ip": "..."}; se acepta "ip_address" como alias.
    "block_ip": lambda params: block_ip(
        params.get("ip") or params.get("ip_address", "")
    ),
    "unblock_ip": lambda params: unblock_ip(
        params.get("ip") or params.get("ip_address", "")
    ),
    # El servidor envía {"pid": 1234} y/o {"name": "malware.exe"}.
    "kill_process": lambda params: kill_process(
        pid=params.get("pid"),
        name=params.get("name") or params.get("process_name"),
    ),
    # `server_host` lo inyecta el handler antes de ejecutar.
    "isolate": lambda params: isolate(params.get("server_host")),
    "unisolate": lambda params: unisolate(),
}


# ---------------------------------------------------------------------------
# ActiveResponseHandler
# ---------------------------------------------------------------------------

class ActiveResponseHandler:
    """
    Maneja la ejecución de respuestas activas ordenadas por el servidor.

    Levanta dos hilos:
      - poller:   consulta periódicamente los comandos pendientes al servidor.
      - executor: ejecuta los comandos aceptados y reporta el resultado.

    Solo ejecuta acciones que estén en la whitelist de configuración.
    """

    def __init__(self, config: Dict, event_queue: Queue, comm_client=None):
        """
        Args:
            config: Sección 'active_response' de config.json
            event_queue: Cola para reportar resultados de acciones
            comm_client: CommClient para consultar comandos al servidor.
                         Si es None, el handler solo acepta comandos
                         encolados manualmente con `enqueue_command`.
        """
        self.config = config
        self.event_queue = event_queue
        self.comm_client = comm_client
        self.allowed_actions = set(config.get("allowed_actions", []))
        self.poll_interval = config.get("poll_interval_seconds", 10)
        self._stop_event = Event()
        self._thread: Optional[Thread] = None
        self._poll_thread: Optional[Thread] = None
        self._command_queue: Queue = Queue()

    # -----------------------------------------------------------------------
    # Encolado
    # -----------------------------------------------------------------------

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
            logger.warning(f"Acción rechazada (no permitida en config.json): {action}")
            self._report_rejection(command, f"Acción '{action}' no permitida en la configuración del agente")
            return False

        if action not in ACTION_REGISTRY:
            logger.warning(f"Acción desconocida: {action}")
            self._report_rejection(command, f"Acción '{action}' no implementada en el agente")
            return False

        self._command_queue.put(command)
        logger.info(f"Comando encolado: {action} (id={command.get('id', 'unknown')})")
        return True

    # -----------------------------------------------------------------------
    # Ejecución
    # -----------------------------------------------------------------------

    def _report(self, command: Dict, result: Dict) -> None:
        """Publica el resultado de un comando en la cola de eventos."""
        command_id = command.get("id") or command.get("command_id") or "unknown"
        result["command_id"] = command_id
        result["timestamp"] = time.time()
        result["agent_time_iso"] = time.strftime("%Y-%m-%dT%H:%M:%S%z")

        self.event_queue.put({
            "type": "active_response_result",
            "command_id": command_id,
            "action": command.get("action", ""),
            "success": bool(result.get("success")),
            "timestamp": time.time(),
            "agent_time_iso": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
            "result": result,
        })

    def _report_rejection(self, command: Dict, reason: str) -> None:
        """Reporta al servidor que un comando fue rechazado por el agente."""
        self._report(command, {
            "action": command.get("action", ""),
            "success": False,
            "error": reason,
            "rejected": True,
        })

    def _execute_command(self, command: Dict) -> None:
        """Ejecuta un comando de respuesta activa."""
        action = command.get("action", "")
        params = dict(command.get("params") or {})
        command_id = command.get("id") or command.get("command_id") or "unknown"

        logger.info(f"Ejecutando respuesta activa: {action} (id={command_id})")

        handler = ACTION_REGISTRY.get(action)
        if not handler:
            self._report_rejection(command, f"Acción '{action}' no implementada")
            return

        # `isolate` necesita saber a qué servidor debe seguir hablando
        if action == "isolate" and not params.get("server_host"):
            params["server_host"] = getattr(self.comm_client, "server_host", None)

        try:
            result = handler(params)
        except Exception as e:
            logger.error(f"Error ejecutando {action}: {e}", exc_info=True)
            result = {"action": action, "success": False, "error": str(e)}

        self._report(command, result)

    # -----------------------------------------------------------------------
    # Hilos
    # -----------------------------------------------------------------------

    def _poll_loop(self) -> None:
        """Consulta comandos pendientes al servidor periódicamente."""
        if not self.comm_client:
            logger.warning(
                "Active Response sin comm_client — no se consultarán comandos al servidor"
            )
            return

        logger.info(
            f"Active Response poller iniciado (intervalo: {self.poll_interval}s)"
        )

        while not self._stop_event.is_set():
            try:
                commands = self.comm_client.poll_commands()
                if commands:
                    logger.info(f"{len(commands)} comando(s) recibido(s) del servidor")
                    for command in commands:
                        self.enqueue_command(command)
            except Exception as e:
                logger.debug(f"Error consultando comandos: {e}")

            self._stop_event.wait(self.poll_interval)

        logger.info("Active Response poller detenido")

    def _run_loop(self) -> None:
        """Bucle principal que ejecuta comandos de la cola."""
        logger.info("Active Response handler iniciado")

        while not self._stop_event.is_set():
            try:
                command = self._command_queue.get(timeout=1.0)
            except Empty:
                continue
            except Exception:
                continue

            try:
                self._execute_command(command)
            except Exception as e:
                logger.error(f"Error procesando comando: {e}", exc_info=True)

        logger.info("Active Response handler detenido")

    def start(self) -> None:
        """Inicia los hilos de polling y ejecución."""
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

        if self.comm_client:
            self._poll_thread = Thread(
                target=self._poll_loop,
                daemon=True,
                name="ActiveResponsePoller",
            )
            self._poll_thread.start()

    def stop(self) -> None:
        """Detiene los hilos."""
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=5)
        if self._poll_thread:
            self._poll_thread.join(timeout=5)
