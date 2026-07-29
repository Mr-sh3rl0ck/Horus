# Horus SIEM Server - Mobile API
# Endpoints dedicados y optimizados para la app móvil Android/iOS
#
# Base URL: /api/mobile/
#
# AUTENTICACIÓN:
# Todos los endpoints requieren el header:
#   Authorization: Bearer <token>
# donde <token> es el obtenido con POST /api/auth/login
#
# ENDPOINTS DISPONIBLES:
#   GET    /api/mobile/alerts               Lista de alertas optimizada para móvil
#   GET    /api/mobile/alerts/{alert_id}    Detalle completo de una alerta
#   POST   /api/mobile/respond              Enviar acción de respuesta al agente
#   GET    /api/mobile/commands             Historial de respuestas activas
#   GET    /api/mobile/commands/{cmd_id}    Estado de un comando enviado
#   GET    /api/mobile/response-actions     Catálogo de acciones disponibles
#   GET    /api/mobile/dashboard-summary    Resumen compacto para widget del dashboard
#
# ROLES:
#   Lectura (alertas, resumen, estado de comandos) → cualquier rol autenticado.
#   POST /api/mobile/respond                       → solo 'admin' o 'soc_analyst'.
#
# NOTA: No hay notificaciones push (FCM). La app obtiene las alertas
# haciendo polling a GET /api/mobile/alerts.

import time
import logging
from typing import Optional

from fastapi import APIRouter, Request, HTTPException, Query, Depends
from pydantic import BaseModel

from api.deps import get_current_session, require_role
from services.response_actions import (
    ACTION_CATALOG,
    ALLOWED_ACTIONS,
    suggest_actions,
    validate_action_params,
)

logger = logging.getLogger("horus.server.mobile")

router = APIRouter()

# Roles autorizados a ejecutar respuesta activa desde el móvil.
# Un 'viewer' puede consultar alertas, pero no actuar sobre un endpoint.
_responder_only = Depends(require_role("admin", "soc_analyst"))


# ---------------------------------------------------------------------------
# Auth helper — valida el Bearer token del request
# ---------------------------------------------------------------------------

def _require_auth(request: Request) -> dict:
    """
    Verifica que el request tenga un Bearer token válido en el header Authorization.
    Retorna los datos de la sesión si es válido, lanza HTTPException 401 si no.

    Delega en `api.deps.get_current_session` para que móvil y dashboard
    compartan exactamente la misma validación de sesión.
    """
    return get_current_session(request)


# ---------------------------------------------------------------------------
# Modelos de Request / Response
# ---------------------------------------------------------------------------

class RespondRequest(BaseModel):
    """
    Cuerpo para enviar una acción de respuesta activa al agente afectado.
    La app envía este request cuando el usuario decide bloquear el ataque
    desde el detalle de una alerta.
    """
    agent_id: str               # ID del agente afectado (viene en la alerta)
    action: str                 # Acción a ejecutar: "block_ip", "kill_process", "isolate"
    params: dict = {}           # Parámetros según la acción:
                                #   block_ip:     {"ip": "x.x.x.x"}
                                #   kill_process: {"pid": 1234, "name": "malware.exe"}
                                #   isolate:      {}  (no requiere parámetros adicionales)
    alert_id: Optional[str] = None  # ID de la alerta que originó la acción (para trazabilidad)


# ---------------------------------------------------------------------------
# Endpoints — Alerts (optimizados para móvil)
# ---------------------------------------------------------------------------

@router.get("/mobile/alerts")
async def get_mobile_alerts(
    request: Request,
    limit: int = Query(20, ge=1, le=100),
    offset: int = Query(0, ge=0),
    severity: Optional[int] = Query(None, ge=1, le=15, description="Nivel mínimo de severidad"),
    agent_id: Optional[str] = Query(None, description="Filtrar por agente"),
    event_type: Optional[str] = Query(None, description="Filtrar por tipo: fim, vulnerability, etc."),
):
    """
    Retorna las alertas más recientes optimizadas para la pantalla de la app móvil.

    Este es el único canal de entrega de alertas para la app: no hay push.
    La app debe hacer polling a este endpoint (cada 10-15 s con offset=0)
    mientras la pantalla de alertas esté visible.

    Diferencias con /api/alerts:
    - Límite por defecto menor (20 en vez de 50) para menor uso de datos.
    - Incluye campo `severity_label` (Low/Medium/High/Critical) para mostrar en la UI.
    - Incluye campo `can_block` para saber si mostrar el botón "Bloquear".
    - Incluye campo `time_ago` en segundos desde que ocurrió la alerta.

    ---
    **Query params:**
    - `limit`: cuántas alertas traer (default 20, max 100)
    - `offset`: paginación
    - `severity`: nivel mínimo (1-15)
    - `agent_id`: filtrar por agente
    - `event_type`: filtrar por tipo (fim, vulnerability, syslog, etc.)

    **Response:**
    ```json
    {
      "total": 150,
      "alerts": [
        {
          "id": "abc123",
          "rule_name": "SSH Brute Force",
          "level": 10,
          "severity_label": "High",
          "event_type": "syslog",
          "agent_id": "a1b2c3d4",
          "src_ip": "192.168.1.5",
          "created_at": 1690000000.0,
          "time_ago": 30.5,
          "can_block": true
        }
      ],
      "limit": 20,
      "offset": 0
    }
    ```
    """
    _require_auth(request)
    alert_store = request.app.state.alert_store

    alerts = alert_store.get_recent_alerts(
        limit=limit,
        offset=offset,
        severity=severity,
        agent_id=agent_id,
        event_type=event_type,
    )
    total = alert_store.get_alert_count(
        severity=severity,
        agent_id=agent_id,
        event_type=event_type,
    )

    now = time.time()
    enriched = []
    for alert in alerts:
        enriched.append({
            "id": alert.get("id"),
            "rule_id": alert.get("rule_id"),
            "rule_name": alert.get("rule_name"),
            "rule_description": alert.get("rule_description"),
            "level": alert.get("level"),
            "severity_label": _severity_label(alert.get("level", 0)),
            "event_type": alert.get("event_type"),
            "agent_id": alert.get("agent_id"),
            "src_ip": alert.get("src_ip"),
            "dst_user": alert.get("dst_user"),
            "action": alert.get("action"),
            "path": alert.get("path"),
            "mitre": alert.get("mitre", {}),
            "created_at": alert.get("created_at"),
            "time_ago": round(now - (alert.get("created_at") or now), 1),
            # can_block: true si hay una IP origen para bloquear
            "can_block": bool(alert.get("src_ip")),
        })

    return {
        "total": total,
        "alerts": enriched,
        "limit": limit,
        "offset": offset,
    }


@router.get("/mobile/alerts/{alert_id}")
async def get_mobile_alert_detail(request: Request, alert_id: str):
    """
    Retorna el detalle completo de una alerta específica.

    La app debe llamar este endpoint cuando el usuario toca una alerta de la
    lista para mostrar la pantalla de detalle con las opciones de respuesta.

    ---
    **Path param:**
    - `alert_id`: ID de la alerta (campo `id` de GET /mobile/alerts)

    **Response:**
    ```json
    {
      "id": "abc123",
      "rule_id": "1002",
      "rule_name": "SSH Brute Force",
      "rule_description": "Múltiples intentos fallidos de SSH desde la misma IP.",
      "level": 10,
      "severity_label": "High",
      "event_type": "syslog",
      "agent_id": "a1b2c3d4",
      "src_ip": "192.168.1.5",
      "action": "failed_login",
      "raw_log": "...",
      "mitre": {"technique": "T1110", "tactic": "Credential Access"},
      "created_at": 1690000000.0,
      "time_ago": 30.5,
      "can_block": true,
      "suggested_actions": ["block_ip"]
    }
    ```
    """
    _require_auth(request)
    alert_store = request.app.state.alert_store

    alert = alert_store.get_alert_by_id(alert_id)
    if not alert:
        raise HTTPException(status_code=404, detail="Alerta no encontrada.")

    now = time.time()
    result = dict(alert)
    result["severity_label"] = _severity_label(alert.get("level", 0))
    result["time_ago"] = round(now - (alert.get("created_at") or now), 1)
    result["can_block"] = bool(alert.get("src_ip"))
    result["suggested_actions"] = suggest_actions(alert)

    return result


# ---------------------------------------------------------------------------
# Endpoints — Active Response
# ---------------------------------------------------------------------------

@router.post("/mobile/respond")
async def mobile_respond(
    request: Request,
    body: RespondRequest,
    session: dict = _responder_only,
):
    """
    Envía un comando de respuesta activa al agente afectado.

    Este es el endpoint principal de acción desde la app móvil.
    Cuando el operador ve una alerta en la lista y decide actuar,
    la app envía este request.

    El servidor encola el comando y el agente (instalado en el endpoint
    afectado) lo recogerá en su próximo ciclo de polling y lo ejecutará.

    ---
    **Acciones disponibles:**

    | action        | params requeridos          | descripción                          |
    |---------------|---------------------------|--------------------------------------|
    | `block_ip`    | `{"ip": "x.x.x.x"}`       | Bloquea la IP origen en el firewall  |
    | `unblock_ip`  | `{"ip": "x.x.x.x"}`       | Revierte el bloqueo de una IP        |
    | `kill_process`| `{"pid": 1234}` o `{"name": "x"}` | Mata el proceso              |
    | `isolate`     | `{}`                       | Aísla el agente de la red            |
    | `unisolate`   | `{}`                       | Restaura la conectividad del agente  |

    **Requiere rol `admin` o `soc_analyst`.** Un `viewer` recibe 403.

    **Request:**
    ```json
    {
      "agent_id": "a1b2c3d4",
      "action": "block_ip",
      "params": {"ip": "192.168.1.5"},
      "alert_id": "abc123"
    }
    ```

    **Response:**
    ```json
    {
      "status": "queued",
      "command_id": "cmd-9f2a1b3c4d5e",
      "agent_id": "a1b2c3d4",
      "action": "block_ip",
      "message": "Comando encolado. El agente lo ejecutará en su próximo ciclo.",
      "poll_url": "/api/mobile/commands/cmd-9f2a1b3c4d5e"
    }
    ```

    Consulta `poll_url` para saber si el agente ya lo ejecutó.
    """
    # Validar acción contra el catálogo compartido con el dashboard y el agente
    if body.action not in ALLOWED_ACTIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Acción '{body.action}' no válida. Acciones permitidas: {sorted(ALLOWED_ACTIONS)}",
        )

    validate_action_params(body.action, body.params)

    # Verificar que el agente existe
    agents = request.app.state.agents
    if body.agent_id not in agents:
        raise HTTPException(
            status_code=404,
            detail=f"Agente '{body.agent_id}' no encontrado. Verifica el agent_id.",
        )

    # Encolar el comando en SQLite (sobrevive a reinicios del servidor)
    command = request.app.state.alert_store.enqueue_command(
        agent_id=body.agent_id,
        action=body.action,
        params=body.params,
        source="mobile",
        alert_id=body.alert_id,
        created_by=session.get("username"),
    )

    logger.info(
        f"[Mobile] Comando de respuesta encolado — "
        f"agent={body.agent_id} action={body.action} params={body.params} "
        f"alert_id={body.alert_id} por={session.get('username')}"
    )

    return {
        "status": "queued",
        "command_id": command["id"],
        "agent_id": body.agent_id,
        "action": body.action,
        "message": "Comando encolado. El agente lo ejecutará en su próximo ciclo de polling.",
        "poll_url": f"/api/mobile/commands/{command['id']}",
    }


@router.get("/mobile/commands/{command_id}")
async def get_mobile_command_status(request: Request, command_id: str):
    """
    Consulta el estado de un comando de respuesta activa.

    La app debe llamar este endpoint tras enviar `POST /mobile/respond` para
    mostrarle al operador si la acción ya se ejecutó en el endpoint.

    ---
    **Estados posibles:**

    | status      | significado                                        |
    |-------------|----------------------------------------------------|
    | `pending`   | Encolado, el agente aún no lo ha recogido          |
    | `delivered` | El agente lo recogió y lo está ejecutando          |
    | `completed` | Ejecutado correctamente                            |
    | `failed`    | El agente lo intentó pero falló (ver `result`)     |

    **Response:**
    ```json
    {
      "id": "cmd-9f2a1b3c4d5e",
      "agent_id": "a1b2c3d4",
      "action": "block_ip",
      "params": {"ip": "192.168.1.5"},
      "status": "completed",
      "source": "mobile",
      "alert_id": "abc123",
      "created_at": 1690000000.0,
      "delivered_at": 1690000005.0,
      "completed_at": 1690000006.0,
      "result": {"action": "block_ip", "target": "192.168.1.5", "success": true}
    }
    ```
    """
    _require_auth(request)

    command = request.app.state.alert_store.get_command(command_id)
    if not command:
        raise HTTPException(status_code=404, detail="Comando no encontrado.")

    return command


@router.get("/mobile/commands")
async def list_mobile_commands(
    request: Request,
    agent_id: Optional[str] = Query(None, description="Filtrar por agente"),
    limit: int = Query(20, ge=1, le=100),
):
    """
    Historial reciente de comandos de respuesta activa.

    Útil para una pantalla de "acciones recientes" en la app.

    ---
    **Response:**
    ```json
    {
      "total": 3,
      "commands": [ { "id": "cmd-...", "action": "block_ip", "status": "completed" } ]
    }
    ```
    """
    _require_auth(request)

    commands = request.app.state.alert_store.list_commands(
        agent_id=agent_id, limit=limit
    )
    return {"total": len(commands), "commands": commands}


@router.get("/mobile/response-actions")
async def get_mobile_response_actions(request: Request):
    """
    Catálogo de acciones de respuesta activa que soporta el servidor.

    La app puede usarlo para construir dinámicamente los botones de acción
    en lugar de tenerlos hardcodeados.

    ---
    **Response:**
    ```json
    [
      {
        "id": "block_ip",
        "label": "Bloquear IP",
        "description": "Bloquea la IP origen en el firewall del endpoint.",
        "requires": ["ip"],
        "destructive": false
      }
    ]
    ```
    """
    _require_auth(request)
    return [{"id": key, **meta} for key, meta in ACTION_CATALOG.items()]


# ---------------------------------------------------------------------------
# Endpoints — Dashboard summary
# ---------------------------------------------------------------------------

@router.get("/mobile/dashboard-summary")
async def get_dashboard_summary(request: Request):
    """
    Retorna un resumen compacto del estado del sistema, pensado para widgets
    y la pantalla principal de la app móvil.

    ---
    **Response:**
    ```json
    {
      "alerts": {
        "total": 1250,
        "critical": 3,
        "high": 12,
        "medium": 45,
        "low": 1190,
        "last_24h": 28
      },
      "agents": {
        "total": 5,
        "active": 4,
        "disconnected": 1
      },
      "commands": {
        "pending": 0
      },
      "session": {
        "username": "admin",
        "role": "admin",
        "can_respond": true
      },
      "server_time": "2026-06-21T14:00:00+0000"
    }
    ```

    `session.can_respond` indica si el rol del usuario puede ejecutar acciones
    de respuesta activa — úsalo para mostrar u ocultar los botones en la UI.
    """
    session = _require_auth(request)

    alert_store = request.app.state.alert_store
    agents = request.app.state.agents

    # Calcular status de agentes
    now = time.time()
    AGENT_TIMEOUT = 60
    active = sum(
        1 for a in agents.values()
        if now - a.get("last_seen", 0) <= AGENT_TIMEOUT
    )

    return {
        "alerts": alert_store.get_alert_stats(),
        "agents": {
            "total": len(agents),
            "active": active,
            "disconnected": len(agents) - active,
        },
        "commands": {
            "pending": alert_store.count_pending_commands(),
        },
        "session": {
            "username": session.get("username"),
            "role": session.get("role"),
            # La app puede ocultar los botones de acción si es false
            "can_respond": session.get("role") in ("admin", "soc_analyst"),
        },
        "server_time": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
    }


# ---------------------------------------------------------------------------
# Helpers internos
# ---------------------------------------------------------------------------

def _severity_label(level: int) -> str:
    """Convierte el nivel numérico de Horus en una etiqueta legible."""
    if level >= 12:
        return "Critical"
    if level >= 8:
        return "High"
    if level >= 4:
        return "Medium"
    return "Low"
