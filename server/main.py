# Horus SIEM Server - Main Entry Point
# FastAPI application with Redis queue and analysis pipeline

import os
import logging
import asyncio
from pathlib import Path
from contextlib import asynccontextmanager
from threading import Thread

import yaml
import redis
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.enrollment import router as enrollment_router
from api.ingestion import router as ingestion_router
from api.dashboard import router as dashboard_router
from api.auth import router as auth_router, generate_admin_credentials, ADMIN_USER
from api.mobile import router as mobile_router
from api.users import router as users_router
from engine.worker import AnalysisWorker
from services.alert_store import AlertStore
from services.cold_storage import ColdStorageManager
from services.push_service import PushService
from services.user_store import UserStore

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("horus.server")


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

def _env_bool(name: str) -> bool | None:
    """Lee una variable de entorno booleana. Retorna None si no está definida."""
    raw = os.environ.get(name)
    if raw is None:
        return None
    return raw.strip().lower() in ("1", "true", "yes", "on")


def apply_env_overrides(config: dict) -> dict:
    """
    Aplica variables de entorno sobre el YAML.

    Permite desplegar en Docker (o cambiar de red para una demo) sin editar
    archivos de configuración ni reconstruir la imagen.
    """
    config.setdefault("auth", {})
    config.setdefault("redis", {})
    config.setdefault("server", {})
    config.setdefault("firebase", {})
    config.setdefault("push", {})

    # --- Canal agente ↔ servidor ---
    if os.environ.get("HORUS_PSK"):
        config["auth"]["psk"] = os.environ["HORUS_PSK"]

    require_psk = _env_bool("HORUS_REQUIRE_AGENT_PSK")
    if require_psk is not None:
        config["auth"]["require_agent_psk"] = require_psk

    # --- Redis ---
    if os.environ.get("REDIS_HOST"):
        config["redis"]["host"] = os.environ["REDIS_HOST"]
    if os.environ.get("REDIS_PORT"):
        config["redis"]["port"] = int(os.environ["REDIS_PORT"])

    # --- CORS (útil para exponer el dashboard en la LAN durante una demo) ---
    if os.environ.get("HORUS_CORS_ORIGINS"):
        origins = [
            o.strip()
            for o in os.environ["HORUS_CORS_ORIGINS"].split(",")
            if o.strip()
        ]
        if origins:
            config["server"]["cors_origins"] = origins

    # --- Firebase Cloud Messaging ---
    fb_enabled = _env_bool("FIREBASE_ENABLED")
    if fb_enabled is not None:
        config["firebase"]["enabled"] = fb_enabled
    if os.environ.get("FIREBASE_PROJECT_ID"):
        config["firebase"]["project_id"] = os.environ["FIREBASE_PROJECT_ID"]
    if os.environ.get("FIREBASE_CREDENTIALS"):
        config["firebase"]["service_account_key"] = os.environ["FIREBASE_CREDENTIALS"]

    if os.environ.get("PUSH_MIN_LEVEL"):
        config["push"]["min_level"] = int(os.environ["PUSH_MIN_LEVEL"])

    return config


def load_config(path: str = "config.yaml") -> dict:
    """Carga la configuración del servidor desde YAML y aplica overrides de entorno."""
    config_file = Path(path)
    if not config_file.exists():
        raise FileNotFoundError(f"Configuración no encontrada: {path}")

    with open(config_file, "r", encoding="utf-8") as f:
        config = yaml.safe_load(f) or {}

    return apply_env_overrides(config)


CONFIG = load_config()


# ---------------------------------------------------------------------------
# Redis connection
# ---------------------------------------------------------------------------

def get_redis_client() -> redis.Redis:
    """Crea y retorna un cliente Redis."""
    redis_config = CONFIG.get("redis", {})
    return redis.Redis(
        host=redis_config.get("host", "127.0.0.1"),
        port=redis_config.get("port", 6379),
        db=redis_config.get("db", 0),
        decode_responses=True,
    )


# ---------------------------------------------------------------------------
# Application lifecycle
# ---------------------------------------------------------------------------

workers: list = []
alert_store: AlertStore = None
redis_client: redis.Redis = None
cold_storage: ColdStorageManager = None
push_service: PushService = None
user_store: UserStore = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Manage application startup and shutdown."""
    global workers, alert_store, redis_client, cold_storage, user_store

    logger.info("=" * 60)
    logger.info("Horus SIEM Server iniciando...")
    logger.info("=" * 60)

    # Redis
    try:
        redis_client = get_redis_client()
        redis_client.ping()
        logger.info("Redis conectado")
    except redis.ConnectionError:
        logger.warning("Redis no disponible — eventos se procesarán sin buffer")
        redis_client = None

    # Alert store
    db_path = CONFIG.get("storage", {}).get("alerts_db_path", "./data/alerts.db")
    alert_store = AlertStore(db_path)
    logger.info(f"Alert store inicializado: {db_path}")

    # Store refs in app state for access in routes
    app.state.config = CONFIG
    app.state.redis = redis_client
    app.state.alert_store = alert_store
    app.state.agents = alert_store.get_all_agents()  # In-memory agent registry loaded from DB
    app.state.sessions = {}  # token -> session dict (shared with auth.py)
    app.state.workers = workers

    # Push Service (Firebase Cloud Messaging)
    global push_service
    push_service = PushService(CONFIG)
    app.state.push_service = push_service
    logger.info(
        f"PushService: {'habilitado' if push_service.is_enabled else 'deshabilitado (modo sin credenciales)'}"
    )

    # Analysis workers
    worker_count = CONFIG.get("workers", {}).get("count", 2)
    for i in range(worker_count):
        w = AnalysisWorker(
            worker_id=i,
            config=CONFIG,
            redis_client=redis_client,
            alert_store=alert_store,
            push_service=push_service,
        )
        w.start()
        workers.append(w)
    logger.info(f"{worker_count} worker(s) de análisis iniciados")

    # Cold Storage
    storage_config = CONFIG.get("storage", {})
    cold_storage = ColdStorageManager(
        alert_store=alert_store,
        cold_storage_path=storage_config.get("cold_storage_path", "./data/cold_storage"),
        retention_days=storage_config.get("cold_storage_retention_days", 90),
    )
    cold_storage.start()
    logger.info("Cold Storage Manager iniciado")

    # User Store — initialize before generating admin credentials
    db_path = CONFIG.get("storage", {}).get("alerts_db_path", "./data/alerts.db")
    user_store = UserStore(db_path)
    app.state.user_store = user_store
    logger.info("User Store inicializado")

    # Generate admin credentials and ensure admin user exists in UserStore
    admin_password = generate_admin_credentials()
    user_store.ensure_admin(ADMIN_USER, admin_password)
    logger.info("=" * 60)
    logger.info("  DASHBOARD CREDENTIALS")
    logger.info(f"  Usuario : {ADMIN_USER}")
    logger.info(f"  Password: {admin_password}")
    logger.info("=" * 60)

    # Resumen de estado — evita sorpresas durante una demo en vivo
    auth_cfg = CONFIG.get("auth", {})
    pending_cmds = alert_store.count_pending_commands()
    logger.info(f"  Agentes registrados   : {len(app.state.agents)}")
    logger.info(f"  Comandos pendientes   : {pending_cmds}")
    logger.info(
        f"  PSK de agentes        : "
        f"{'requerido' if auth_cfg.get('require_agent_psk', True) else 'DESACTIVADO'}"
    )
    logger.info(
        f"  Push notifications    : "
        f"{'activas' if push_service.is_enabled else 'inactivas (Firebase sin configurar)'}"
    )
    logger.info(f"  CORS permitido        : {CONFIG.get('server', {}).get('cors_origins')}")
    logger.info("=" * 60)

    logger.info("Servidor listo")

    yield

    # Shutdown
    logger.info("Deteniendo servidor...")
    for w in workers:
        w.stop()
    workers.clear()

    if cold_storage:
        cold_storage.stop()

    if redis_client:
        redis_client.close()

    logger.info("Horus SIEM Server detenido")


# ---------------------------------------------------------------------------
# FastAPI app
# ---------------------------------------------------------------------------

app = FastAPI(
    title="Horus SIEM Server",
    description="Security Information and Event Management — Core Server",
    version="0.1.0",
    lifespan=lifespan,
)

# CORS
#
# Con allow_origins=["*"] los navegadores rechazan allow_credentials=True.
# Horus autentica con Bearer tokens en el header (no con cookies), así que
# desactivar credentials en modo wildcard es seguro y evita que el dashboard
# falle silenciosamente cuando se expone en la LAN con HORUS_CORS_ORIGINS=*.
cors_origins = CONFIG.get("server", {}).get("cors_origins", ["*"])
wildcard = "*" in cors_origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=not wildcard,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth_router, prefix="/api", tags=["Auth"])
app.include_router(users_router, prefix="/api", tags=["Users"])
app.include_router(enrollment_router, prefix="/api", tags=["Enrollment"])
app.include_router(ingestion_router, prefix="/api", tags=["Ingestion"])
app.include_router(dashboard_router, prefix="/api", tags=["Dashboard"])
app.include_router(mobile_router, prefix="/api", tags=["Mobile"])


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    redis_ok = False
    if redis_client:
        try:
            redis_ok = redis_client.ping()
        except Exception:
            pass

    return {
        "status": "ok",
        "redis": "connected" if redis_ok else "disconnected",
        "workers": len(workers),
    }


# ---------------------------------------------------------------------------
# Run server
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    import uvicorn

    host = CONFIG.get("server", {}).get("host", "0.0.0.0")
    port = CONFIG.get("server", {}).get("port", 5001)
    logger.info(f"Iniciando uvicorn en {host}:{port}")
    uvicorn.run(app, host=host, port=port)
