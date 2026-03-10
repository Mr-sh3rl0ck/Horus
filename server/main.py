# Horus SIEM Server - Main Entry Point
# FastAPI application with Redis queue and analysis pipeline

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
from api.auth import router as auth_router, generate_admin_credentials
from engine.worker import AnalysisWorker
from services.alert_store import AlertStore

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

def load_config(path: str = "config.yaml") -> dict:
    """Carga la configuración del servidor desde YAML."""
    config_file = Path(path)
    if not config_file.exists():
        raise FileNotFoundError(f"Configuración no encontrada: {path}")

    with open(config_file, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


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


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Manage application startup and shutdown."""
    global workers, alert_store, redis_client

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
    app.state.agents = {}  # In-memory agent registry
    app.state.pending_commands = {}  # agent_id -> [commands]

    # Analysis workers
    worker_count = CONFIG.get("workers", {}).get("count", 2)
    for i in range(worker_count):
        w = AnalysisWorker(
            worker_id=i,
            config=CONFIG,
            redis_client=redis_client,
            alert_store=alert_store,
        )
        w.start()
        workers.append(w)
    logger.info(f"{worker_count} worker(s) de análisis iniciados")

    # Generate admin credentials
    admin_password = generate_admin_credentials()
    logger.info("=" * 60)
    logger.info("  DASHBOARD CREDENTIALS")
    logger.info(f"  Usuario : admin")
    logger.info(f"  Password: {admin_password}")
    logger.info("=" * 60)

    logger.info("Servidor listo")

    yield

    # Shutdown
    logger.info("Deteniendo servidor...")
    for w in workers:
        w.stop()
    workers.clear()

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
cors_origins = CONFIG.get("server", {}).get("cors_origins", ["*"])
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth_router, prefix="/api", tags=["Auth"])
app.include_router(enrollment_router, prefix="/api", tags=["Enrollment"])
app.include_router(ingestion_router, prefix="/api", tags=["Ingestion"])
app.include_router(dashboard_router, prefix="/api", tags=["Dashboard"])


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
