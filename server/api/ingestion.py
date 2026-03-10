# Horus SIEM Server - Ingestion API
# RF-SRV-02: Event ingestion with Redis queue buffer

import json
import time
import logging
import base64
import hashlib
from typing import Dict, Optional

from fastapi import APIRouter, Request, HTTPException
from pydantic import BaseModel

logger = logging.getLogger("horus.server.ingestion")

router = APIRouter()


def _extract_os(event_data: dict) -> str:
    """Extract a string OS value from event data, handling object or string."""
    os_val = event_data.get("os", "Unknown")
    if isinstance(os_val, dict):
        platform = os_val.get("platform", "")
        release = os_val.get("platform_release", "")
        return f"{platform} {release}".strip() or "Unknown"
    if isinstance(os_val, str):
        return os_val
    return "Unknown"


class EventPayload(BaseModel):
    agent_id: Optional[str] = None
    encrypted: bool = False
    payload: Optional[str] = None
    # Direct fields (unencrypted)
    type: Optional[str] = None
    timestamp: Optional[float] = None
    raw_log: Optional[str] = None
    parsed: Optional[dict] = None
    action: Optional[str] = None
    path: Optional[str] = None
    source: Optional[str] = None
    agent_time_iso: Optional[str] = None

    class Config:
        extra = "allow"


class CommandRequest(BaseModel):
    agent_id: str
    action: str
    params: dict = {}


@router.post("/events")
async def ingest_event(request: Request, body: EventPayload):
    """
    Recibe eventos de los agentes y los coloca en la cola Redis.
    Soporta payloads cifrados (AES-GCM) y en texto plano.
    """
    redis_client = request.app.state.redis
    config = request.app.state.config
    queue_key = config.get("redis", {}).get("event_queue_key", "horus:events")
    max_queue = config.get("redis", {}).get("max_queue_size", 10000)

    # Procesar payload
    if body.encrypted and body.payload:
        # Descifrar payload
        try:
            psk = config.get("auth", {}).get("psk", "")
            key = hashlib.sha256(psk.encode("utf-8")).digest()

            from cryptography.hazmat.primitives.ciphers.aead import AESGCM
            aesgcm = AESGCM(key)

            encrypted_data = base64.b64decode(body.payload)
            nonce = encrypted_data[:12]
            ciphertext = encrypted_data[12:]

            decrypted = aesgcm.decrypt(nonce, ciphertext, None)
            event_data = json.loads(decrypted.decode("utf-8"))

        except Exception as e:
            logger.error(f"Error descifrando payload: {e}")
            raise HTTPException(status_code=400, detail="Error descifrando payload")
    else:
        # Payload en texto plano
        event_data = body.model_dump(exclude_none=True)

    # Agregar metadatos del servidor
    event_data["server_received_at"] = time.time()
    event_data["server_time_iso"] = time.strftime("%Y-%m-%dT%H:%M:%S%z")

    # Actualizar last_seen del agente (o auto-registrar si desconocido)
    agent_id = event_data.get("agent_id") or body.agent_id
    if agent_id:
        if agent_id in request.app.state.agents:
            request.app.state.agents[agent_id]["last_seen"] = time.time()
            # Update IP if available
            if request.client:
                request.app.state.agents[agent_id]["ip"] = request.client.host
        else:
            # Auto-register unknown agent (e.g. after server restart)
            client_ip = request.client.host if request.client else None
            request.app.state.agents[agent_id] = {
                "agent_id": agent_id,
                "name": event_data.get("agent_name", agent_id),
                "hostname": event_data.get("hostname", agent_id),
                "ip": client_ip,
                "os": _extract_os(event_data),
                "version": event_data.get("version", "0.1.0"),
                "enrolled_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
                "last_seen": time.time(),
                "status": "active",
            }
            request.app.state.pending_commands[agent_id] = []
            logger.info(f"Agente auto-registrado desde evento: {agent_id} IP={client_ip}")

        # Store latest syscollector snapshot on the agent state
        if event_data.get("type") == "syscollector":
            sc_snapshot = {
                "timestamp": event_data.get("timestamp"),
                "agent_time_iso": event_data.get("agent_time_iso"),
                "os": event_data.get("os", {}),
                "hardware": event_data.get("hardware", {}),
                "processes": event_data.get("processes", []),
                "process_count": event_data.get("process_count", 0),
                "open_ports": event_data.get("open_ports", []),
                "packages": event_data.get("packages", []),
            }
            request.app.state.agents[agent_id]["syscollector"] = sc_snapshot
            # Also update the agent's OS string from fresh data
            request.app.state.agents[agent_id]["os"] = _extract_os(event_data)
            logger.info(
                f"Syscollector snapshot almacenado para {agent_id}: "
                f"{sc_snapshot.get('process_count', 0)} procesos, "
                f"{len(sc_snapshot.get('open_ports', []))} puertos, "
                f"{len(sc_snapshot.get('packages', []))} paquetes"
            )

    # Encolar en Redis
    if redis_client:
        try:
            # Leaky bucket: verificar tamaño de cola
            current_size = redis_client.llen(queue_key)
            if current_size >= max_queue:
                logger.warning(f"Cola Redis llena ({current_size}/{max_queue}) — descartando evento más antiguo")
                redis_client.lpop(queue_key)

            redis_client.rpush(queue_key, json.dumps(event_data))
            logger.debug(f"Evento encolado: {event_data.get('type', 'unknown')}")

        except Exception as e:
            logger.error(f"Error encolando en Redis: {e}")
            raise HTTPException(status_code=500, detail="Error interno de cola")
    else:
        logger.warning("Redis no disponible — evento descartado")

    return {"status": "accepted", "queue_size": redis_client.llen(queue_key) if redis_client else 0}


@router.post("/commands")
async def send_command(request: Request, body: CommandRequest):
    """Encola un comando de respuesta activa para un agente."""
    pending = request.app.state.pending_commands

    if body.agent_id not in request.app.state.agents:
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    command = {
        "id": f"cmd-{int(time.time())}",
        "action": body.action,
        "params": body.params,
        "created_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
    }

    if body.agent_id not in pending:
        pending[body.agent_id] = []

    pending[body.agent_id].append(command)
    logger.info(f"Comando encolado para {body.agent_id}: {body.action}")

    return {"status": "queued", "command_id": command["id"]}


@router.get("/commands/{agent_id}")
async def get_commands(request: Request, agent_id: str):
    """Retorna y vacía los comandos pendientes para un agente."""
    pending = request.app.state.pending_commands

    commands = pending.get(agent_id, [])
    pending[agent_id] = []  # Vaciar cola

    return {"commands": commands}
