# Horus SIEM Server - Enrollment API
# RF-SRV-01: Agent registration and key distribution

import hashlib
import time
import uuid
import logging
from typing import Dict

from fastapi import APIRouter, Request, HTTPException
from pydantic import BaseModel

logger = logging.getLogger("horus.server.enrollment")

router = APIRouter()


class EnrollRequest(BaseModel):
    agent_name: str
    psk: str
    hostname: str = None
    os: str = None
    ip: str = None
    version: str = None
    timestamp: float = None


class EnrollResponse(BaseModel):
    agent_id: str
    status: str
    message: str


@router.post("/enroll", response_model=EnrollResponse)
async def enroll_agent(request: Request, body: EnrollRequest):
    """
    Registra un nuevo agente en el servidor.
    Valida el PSK y genera un ID único para el agente.
    """
    config = request.app.state.config
    expected_psk = config.get("auth", {}).get("psk", "")

    # Validar PSK
    if body.psk != expected_psk:
        logger.warning(f"Enrollment rechazado para '{body.agent_name}' — PSK inválido")
        raise HTTPException(status_code=401, detail="PSK inválido")

    # Generar agent ID
    agent_id = str(uuid.uuid4())[:8]

    # Capturar IP del cliente
    client_ip = body.ip or (request.client.host if request.client else None)

    # Registrar agente
    agents: Dict = request.app.state.agents
    agents[agent_id] = {
        "agent_id": agent_id,
        "name": body.agent_name,
        "hostname": body.hostname or body.agent_name,
        "ip": client_ip,
        "os": body.os or "Unknown",
        "version": body.version or "0.1.0",
        "enrolled_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        "last_seen": time.time(),
        "status": "active",
    }

    # Inicializar cola de comandos
    request.app.state.pending_commands[agent_id] = []

    logger.info(f"Agente enrollado: {body.agent_name} -> ID={agent_id} IP={client_ip}")

    return EnrollResponse(
        agent_id=agent_id,
        status="enrolled",
        message=f"Agente '{body.agent_name}' registrado exitosamente",
    )
