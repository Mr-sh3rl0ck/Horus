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

from api.deps import require_agent_psk as _require_agent_auth

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


@router.post("/events")
async def ingest_event(request: Request, body: EventPayload):
    """
    Recibe eventos de los agentes y los coloca en la cola Redis.
    Soporta payloads cifrados (AES-GCM) y en texto plano.

    Autenticado con el PSK compartido (header 'X-Horus-PSK').
    """
    _require_agent_auth(request)

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
            new_agent = {
                "agent_id": agent_id,
                "name": event_data.get("agent_name", agent_id),
                "hostname": event_data.get("hostname", agent_id),
                "ip": client_ip,
                "os": _extract_os(event_data),
                "version": event_data.get("version", "0.1.0"),
                "cluster": event_data.get("cluster", "default"),
                "groups": event_data.get("groups", ["default"]),
                "enrolled_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
                "last_seen": time.time(),
                "status": "active",
            }
            request.app.state.agents[agent_id] = new_agent
            if hasattr(request.app.state, "alert_store"):
                request.app.state.alert_store.save_agent(new_agent)

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
            
            if hasattr(request.app.state, "alert_store"):
                request.app.state.alert_store.save_agent(request.app.state.agents[agent_id])
                
            logger.info(
                f"Syscollector snapshot almacenado para {agent_id}: "
                f"{sc_snapshot.get('process_count', 0)} procesos, "
                f"{len(sc_snapshot.get('open_ports', []))} puertos, "
                f"{len(sc_snapshot.get('packages', []))} paquetes"
            )

    # Resultado de una respuesta activa — cierra el ciclo del comando.
    # No pasa por la cola de análisis: ninguna regla lo evalúa, y registrarlo
    # de inmediato permite que la app móvil consulte el estado al instante.
    if event_data.get("type") == "active_response_result":
        result = event_data.get("result", {}) or {}
        command_id = event_data.get("command_id") or result.get("command_id")

        if command_id:
            request.app.state.alert_store.record_command_result(command_id, result)
            logger.info(
                f"Respuesta activa reportada — command={command_id} "
                f"action={result.get('action')} success={result.get('success')}"
            )
        else:
            logger.warning("active_response_result sin command_id — se ignora")

        return {"status": "accepted", "command_id": command_id}

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


@router.get("/agent/commands/{agent_id}")
async def get_commands(request: Request, agent_id: str):
    """
    Retorna los comandos pendientes para un agente y los marca como entregados.

    Lo consume el hilo de polling del agente (ActiveResponseHandler). La cola
    vive en SQLite, así que sobrevive a reinicios del servidor.

    Va bajo el prefijo /agent/ para separar el canal agente↔servidor (que se
    autentica con el PSK compartido) del canal de consola /api/commands/*
    (que usa tokens de sesión), y para que /api/commands/{command_id} no quede
    capturado por esta ruta.
    """
    _require_agent_auth(request)

    alert_store = request.app.state.alert_store
    commands = alert_store.fetch_pending_commands(agent_id)

    return {"commands": commands}
