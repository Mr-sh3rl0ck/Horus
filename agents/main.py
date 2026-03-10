# Horus SIEM Agent - Main Entry Point
# Orquesta todos los módulos del agente: FIM, Log Collector, Syscollector,
# Active Response, Comunicación cifrada

import json
import sys
import signal
import logging
from logging.handlers import RotatingFileHandler
from pathlib import Path
from queue import Queue
from threading import Event

# Agregar el directorio actual al path
sys.path.insert(0, str(Path(__file__).parent))

from modules.db import init_db
from modules.fim import start_fim, verify_integrity
from modules.log_reader import LogCollector
from modules.syscollector import Syscollector
from modules.active_response import ActiveResponseHandler
from modules.comms import CommClient, EventSender


# ---------------------------------------------------------------------------
# Estado global
# ---------------------------------------------------------------------------
CONFIG: dict = {}
shutdown_event = Event()


# ---------------------------------------------------------------------------
# Configuración
# ---------------------------------------------------------------------------

def load_config(config_path: str = "config.json") -> dict:
    """Carga la configuración desde archivo JSON."""
    config_file = Path(config_path)

    if not config_file.exists():
        raise FileNotFoundError(f"Archivo de configuración no encontrado: {config_path}")

    with open(config_file, "r", encoding="utf-8") as f:
        return json.load(f)


def setup_logging(config: dict) -> logging.Logger:
    """Configura el sistema de logging con rotación de archivos."""
    log_config = config.get("logging", {})
    log_level = getattr(logging, log_config.get("level", "INFO"))
    log_file = log_config.get("file", "./logs/agent.log")

    # Crear directorio de logs
    log_path = Path(log_file)
    log_path.parent.mkdir(parents=True, exist_ok=True)

    # Formato
    formatter = logging.Formatter(
        "%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S"
    )

    # Handler de archivo rotativo
    file_handler = RotatingFileHandler(
        log_file,
        maxBytes=log_config.get("max_size_mb", 10) * 1024 * 1024,
        backupCount=log_config.get("backup_count", 5)
    )
    file_handler.setFormatter(formatter)

    # Handler de consola
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)

    # Logger raíz del agente
    logger = logging.getLogger("horus")
    logger.setLevel(log_level)
    logger.addHandler(file_handler)
    logger.addHandler(console_handler)

    return logger


# ---------------------------------------------------------------------------
# Signal handler
# ---------------------------------------------------------------------------

def signal_handler(signum, frame):
    """Maneja señales de terminación (SIGINT, SIGTERM)."""
    logger = logging.getLogger("horus")
    sig_name = signal.Signals(signum).name if hasattr(signal, "Signals") else str(signum)
    logger.info(f"Señal {sig_name} recibida, iniciando shutdown...")
    shutdown_event.set()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    """Punto de entrada principal del agente Horus."""
    global CONFIG

    # Cargar configuración
    try:
        CONFIG = load_config()
    except FileNotFoundError as e:
        print(f"ERROR: {e}")
        sys.exit(1)

    # Configurar logging
    logger = setup_logging(CONFIG)
    logger.info("=" * 60)
    logger.info("Horus SIEM Agent iniciando...")
    logger.info(f"  Versión : {CONFIG['agent'].get('version', 'unknown')}")
    logger.info(f"  Nombre  : {CONFIG['agent'].get('name', 'unnamed')}")
    logger.info("=" * 60)

    # Registrar handlers de señales
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    # Inicializar base de datos FIM
    init_db()
    logger.info("Base de datos FIM inicializada")

    # Cola central de eventos
    event_queue: Queue = Queue()

    # --- Comunicaciones (Enrollment + Sender) ---
    comm_client = CommClient(
        config=CONFIG.get("server", {}),
        credentials_path=CONFIG.get("credentials_path", "./data/agent_keys.enc"),
    )

    # Intentar cargar credenciales existentes o enrollar
    if not comm_client.load_existing_credentials():
        logger.info("No hay credenciales, intentando enrollment...")
        comm_client.enroll(
            agent_name=CONFIG["agent"].get("name", "unnamed"),
            psk="horus-default-psk",  # TODO: Leer PSK de variable de entorno
        )

    # Event sender (consume cola y envía al servidor)
    event_sender = EventSender(event_queue, comm_client)
    event_sender.start()

    # Recursos a limpiar
    log_collector = None
    fim_observer = None
    syscollector = None
    ar_handler = None

    try:
        # --- FIM ---
        fim_config = CONFIG.get("fim", {})
        if fim_config.get("enabled", False):
            logger.info("Iniciando módulo FIM...")

            # Verificar integridad al inicio
            discrepancies = verify_integrity()
            if discrepancies:
                logger.warning(f"Se encontraron {len(discrepancies)} discrepancias en verificación inicial")
                for d in discrepancies[:5]:
                    logger.warning(f"  - {d['type']}: {d['path']}")

            fim_observer = start_fim(
                paths=fim_config.get("paths", []),
                event_queue=event_queue,
                exclude_patterns=fim_config.get("exclude_patterns", []),
                create_baseline=fim_config.get("create_baseline_on_start", True),
            )
            logger.info(f"FIM monitoreando {len(fim_config.get('paths', []))} rutas")
        else:
            logger.info("FIM deshabilitado en configuración")

        # --- Log Collector ---
        log_config = CONFIG.get("log_collection", {})
        if log_config.get("enabled", False):
            logger.info("Iniciando módulo Log Collector...")
            log_collector = LogCollector(
                config=log_config,
                event_queue=event_queue,
            )
            log_collector.start()
            logger.info(f"Log Collector activo — {log_collector.get_reader_count()} reader(s)")
        else:
            logger.info("Log Collector deshabilitado en configuración")

        # --- Syscollector ---
        sc_config = CONFIG.get("syscollector", {})
        if sc_config.get("enabled", False):
            logger.info("Iniciando módulo Syscollector...")
            syscollector = Syscollector(
                config=sc_config,
                event_queue=event_queue,
            )
            syscollector.start()
            logger.info(f"Syscollector activo (intervalo: {sc_config.get('interval_seconds', 300)}s)")
        else:
            logger.info("Syscollector deshabilitado en configuración")

        # --- Active Response ---
        ar_config = CONFIG.get("active_response", {})
        if ar_config.get("enabled", False):
            logger.info("Iniciando módulo Active Response...")
            ar_handler = ActiveResponseHandler(
                config=ar_config,
                event_queue=event_queue,
            )
            ar_handler.start()
            logger.info(
                f"Active Response activo — Acciones permitidas: "
                f"{', '.join(ar_config.get('allowed_actions', []))}"
            )
        else:
            logger.info("Active Response deshabilitado en configuración")

        logger.info("=" * 60)
        logger.info("Agente ejecutándose. Presione Ctrl+C para detener.")
        logger.info("=" * 60)

        # Esperar señal de terminación
        shutdown_event.wait()

    except Exception as e:
        logger.error(f"Error fatal: {e}", exc_info=True)
        shutdown_event.set()

    finally:
        logger.info("Iniciando shutdown graceful...")

        # Detener módulos en orden
        if fim_observer:
            fim_observer.stop()
            fim_observer.join(timeout=5)
            logger.info("FIM detenido")

        if log_collector:
            log_collector.stop()
            logger.info("Log Collector detenido")

        if syscollector:
            syscollector.stop()
            logger.info("Syscollector detenido")

        if ar_handler:
            ar_handler.stop()
            logger.info("Active Response detenido")

        # Detener sender
        event_sender.stop()
        logger.info("Event sender detenido")

        logger.info("Horus SIEM Agent detenido")


if __name__ == "__main__":
    main()