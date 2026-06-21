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
#   POST   /api/mobile/register-token      Registrar token FCM del dispositivo
#   DELETE /api/mobile/unregister-token    Eliminar token FCM al cerrar sesión
#   GET    /api/mobile/tokens              Listar tokens registrados (admin)
#   POST   /api/mobile/test-push           Enviar push de prueba a un token
#   GET    /api/mobile/alerts              Lista de alertas optimizada para móvil
#   GET    /api/mobile/alerts/{alert_id}   Detalle completo de una alerta
#   POST   /api/mobile/respond             Enviar acción de respuesta al agente
#   GET    /api/mobile/dashboard-summary   Resumen compacto para widget del dashboard

import time
import logging
from typing import Optional

from fastapi import APIRouter, Request, HTTPException, Query
from pydantic import BaseModel

logger = logging.getLogger("horus.server.mobile")

router = APIRouter()


# ---------------------------------------------------------------------------
# Auth helper — valida el Bearer token del request
# ---------------------------------------------------------------------------

def _require_auth(request: Request) -> dict:
    """
    Verifica que el request tenga un Bearer token válido en el header Authorization.
    Retorna los datos de la sesión si es válido, lanza HTTPException 401 si no.
    """
    from api.auth import _sessions

    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Token de autenticación requerido. Usa el header: Authorization: Bearer <token>",
        )

    token = auth_header.replace("Bearer ", "").strip()
    session = _sessions.get(token)

    if not session:
        raise HTTPException(status_code=401, detail="Token inválido o expirado.")

    if time.time() > session.get("expires_at", 0):
        _sessions.pop(token, None)
        raise HTTPException(status_code=401, detail="Token expirado. Vuelve a hacer login.")

    return session


# ---------------------------------------------------------------------------
# Modelos de Request / Response
# ---------------------------------------------------------------------------

class RegisterTokenRequest(BaseModel):
    """Cuerpo para registrar un token FCM."""
    token: str
    platform: str = "android"   # "android" | "ios"
    label: Optional[str] = None  # Identificador del usuario/dispositivo (ej. username)


class UnregisterTokenRequest(BaseModel):
    """Cuerpo para eliminar un token FCM."""
    token: str


class RespondRequest(BaseModel):
    """
    Cuerpo para enviar una acción de respuesta activa al agente afectado.
    Cuando la notificación push llega al móvil, la app debe enviar este
    request si el usuario decide bloquear el ataque.
    """
    agent_id: str               # ID del agente afectado (viene en el payload de la push)
    action: str                 # Acción a ejecutar: "block_ip", "kill_process", "isolate"
    params: dict = {}           # Parámetros según la acción:
                                #   block_ip:     {"ip": "x.x.x.x"}
                                #   kill_process: {"pid": 1234, "name": "malware.exe"}
                                #   isolate:      {}  (no requiere parámetros adicionales)
    alert_id: Optional[str] = None  # ID de la alerta que originó la acción (para trazabilidad)


class TestPushRequest(BaseModel):
    """Cuerpo para enviar una notificación push de prueba."""
    token: str


# ---------------------------------------------------------------------------
# Endpoints — Token Management
# ---------------------------------------------------------------------------

@router.post("/mobile/register-token")
async def register_token(request: Request, body: RegisterTokenRequest):
    """
    Registra el token FCM del dispositivo móvil en el servidor.

    La app debe llamar este endpoint:
    - Al iniciar sesión por primera vez.
    - Al abrir la app (en caso de que el token FCM haya cambiado).
    - Cuando Firebase notifica a la app que el token fue renovado
      (método onTokenRefresh / onNewToken en Android).

    El servidor almacenará el token en SQLite y lo usará para enviar
    notificaciones cuando se genere una alerta de nivel >= 8 (High/Critical).

    ---
    **Request:**
    ```json
    {
      "token": "firebase_fcm_token_string",
      "platform": "android",
      "label": "usuario@email.com"
    }
    ```

    **Response:**
    ```json
    {
      "status": "registered",
      "message": "Token FCM registrado correctamente.",
      "push_enabled": true
    }
    ```
    """
    _require_auth(request)
    alert_store = request.app.state.alert_store

    if not body.token or len(body.token) < 10:
        raise HTTPException(status_code=400, detail="Token FCM inválido.")

    alert_store.register_token(
        token=body.token,
        platform=body.platform,
        label=body.label,
    )

    # Verificar si el push service está habilitado
    push_service = getattr(request.app.state, "push_service", None)
    push_enabled = push_service.is_enabled if push_service else False

    logger.info(f"Token FCM registrado — platform={body.platform} label={body.label}")

    return {
        "status": "registered",
        "message": "Token FCM registrado correctamente.",
        "push_enabled": push_enabled,
    }


@router.delete("/mobile/unregister-token")
async def unregister_token(request: Request, body: UnregisterTokenRequest):
    """
    Elimina el token FCM del dispositivo.

    Llamar este endpoint cuando el usuario cierre sesión en la app.
    Esto asegura que el dispositivo no siga recibiendo notificaciones
    después del logout.

    ---
    **Request:**
    ```json
    {
      "token": "firebase_fcm_token_string"
    }
    ```

    **Response:**
    ```json
    {
      "status": "unregistered",
      "found": true
    }
    ```
    """
    _require_auth(request)
    alert_store = request.app.state.alert_store

    deleted = alert_store.delete_token(body.token)

    return {
        "status": "unregistered",
        "found": deleted,
    }


@router.get("/mobile/tokens")
async def list_tokens(request: Request):
    """
    Lista todos los tokens FCM registrados con sus metadatos.
    Útil para administración y debugging desde la app o el dashboard.

    ---
    **Response:**
    ```json
    {
      "total": 2,
      "push_enabled": false,
      "tokens": [
        {
          "token": "...abc123",
          "platform": "android",
          "label": "admin@horus.io",
          "registered_at": 1690000000.0,
          "last_used_at": 1690000000.0
        }
      ]
    }
    ```
    """
    _require_auth(request)
    alert_store = request.app.state.alert_store
    push_service = getattr(request.app.state, "push_service", None)

    tokens = alert_store.get_tokens_detail()

    # Truncar el token por seguridad (mostrar solo los últimos 8 chars)
    for t in tokens:
        full_token = t["token"]
        t["token_preview"] = f"...{full_token[-8:]}"
        del t["token"]  # No exponer el token completo en el listado

    return {
        "total": len(tokens),
        "push_enabled": push_service.is_enabled if push_service else False,
        "tokens": tokens,
    }


@router.post("/mobile/test-push")
async def test_push(request: Request, body: TestPushRequest):
    """
    Envía una notificación push de prueba a un token específico.
    Usa esto para verificar que la integración con Firebase funciona
    correctamente antes de ir a producción.

    Requiere que firebase.enabled=true en config.yaml.

    ---
    **Request:**
    ```json
    {
      "token": "firebase_fcm_token_string"
    }
    ```

    **Response (éxito):**
    ```json
    {
      "success": true,
      "message_id": "projects/your-project/messages/12345",
      "message": "Push enviado correctamente."
    }
    ```

    **Response (Firebase no configurado):**
    ```json
    {
      "success": false,
      "message": "Firebase no está habilitado. Configura firebase.enabled=true en config.yaml."
    }
    ```
    """
    _require_auth(request)
    push_service = getattr(request.app.state, "push_service", None)

    if not push_service:
        raise HTTPException(status_code=503, detail="PushService no inicializado.")

    result = push_service.send_test_notification(body.token)

    return {
        "success": result.get("success", False),
        "message_id": result.get("message_id"),
        "message": "Push enviado correctamente." if result.get("success") else result.get("message", result.get("error")),
    }


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

    La app debe llamar este endpoint cuando el usuario toca una notificación
    push para mostrar la pantalla de detalle con todas las opciones de respuesta.

    ---
    **Path param:**
    - `alert_id`: ID de la alerta (viene en el payload data de la notificación push)

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
    result["suggested_actions"] = _suggest_actions(alert)

    return result


# ---------------------------------------------------------------------------
# Endpoints — Active Response
# ---------------------------------------------------------------------------

@router.post("/mobile/respond")
async def mobile_respond(request: Request, body: RespondRequest):
    """
    Envía un comando de respuesta activa al agente afectado.

    Este es el endpoint principal de acción desde la app móvil.
    Cuando la notificación push llega al dispositivo del operador y decide
    actuar, la app envía este request.

    El servidor encola el comando y el agente (instalado en el endpoint
    afectado) lo recogerá en su próximo ciclo de polling y lo ejecutará.

    ---
    **Acciones disponibles:**

    | action        | params requeridos          | descripción                          |
    |---------------|---------------------------|--------------------------------------|
    | `block_ip`    | `{"ip": "x.x.x.x"}`       | Bloquea la IP origen en el firewall  |
    | `kill_process`| `{"pid": 1234}`            | Mata el proceso por PID              |
    | `isolate`     | `{}`                       | Aísla el agente de la red            |

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
      "command_id": "cmd-1690000000",
      "agent_id": "a1b2c3d4",
      "action": "block_ip",
      "message": "Comando encolado. El agente lo ejecutará en su próximo ciclo."
    }
    ```
    """
    _require_auth(request)

    # Validar acción permitida
    ALLOWED_ACTIONS = {"block_ip", "kill_process", "isolate"}
    if body.action not in ALLOWED_ACTIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Acción '{body.action}' no válida. Acciones permitidas: {sorted(ALLOWED_ACTIONS)}",
        )

    # Validar parámetros requeridos por acción
    if body.action == "block_ip":
        if not body.params.get("ip"):
            raise HTTPException(
                status_code=400,
                detail="La acción 'block_ip' requiere el parámetro 'ip'.",
            )

    if body.action == "kill_process":
        if not body.params.get("pid") and not body.params.get("name"):
            raise HTTPException(
                status_code=400,
                detail="La acción 'kill_process' requiere 'pid' o 'name' en params.",
            )

    # Verificar que el agente existe
    agents = request.app.state.agents
    if body.agent_id not in agents:
        raise HTTPException(
            status_code=404,
            detail=f"Agente '{body.agent_id}' no encontrado. Verifica el agent_id.",
        )

    # Construir y encolar el comando
    pending = request.app.state.pending_commands
    command = {
        "id": f"cmd-{int(time.time())}",
        "action": body.action,
        "params": body.params,
        "created_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        "source": "mobile",                           # Origen del comando
        "alert_id": body.alert_id,                    # Trazabilidad con la alerta
    }

    if body.agent_id not in pending:
        pending[body.agent_id] = []

    pending[body.agent_id].append(command)

    logger.info(
        f"[Mobile] Comando de respuesta encolado — "
        f"agent={body.agent_id} action={body.action} params={body.params} "
        f"alert_id={body.alert_id}"
    )

    return {
        "status": "queued",
        "command_id": command["id"],
        "agent_id": body.agent_id,
        "action": body.action,
        "message": "Comando encolado. El agente lo ejecutará en su próximo ciclo de polling.",
    }


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
      "push": {
        "enabled": false,
        "registered_devices": 1
      },
      "server_time": "2026-06-21T14:00:00+0000"
    }
    ```
    """
    _require_auth(request)

    alert_store = request.app.state.alert_store
    agents = request.app.state.agents
    push_service = getattr(request.app.state, "push_service", None)

    # Calcular status de agentes
    now = time.time()
    AGENT_TIMEOUT = 60
    active = sum(
        1 for a in agents.values()
        if now - a.get("last_seen", 0) <= AGENT_TIMEOUT
    )

    # Conteo de tokens registrados
    tokens = alert_store.get_all_tokens()

    return {
        "alerts": alert_store.get_alert_stats(),
        "agents": {
            "total": len(agents),
            "active": active,
            "disconnected": len(agents) - active,
        },
        "push": {
            "enabled": push_service.is_enabled if push_service else False,
            "registered_devices": len(tokens),
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


def _suggest_actions(alert: dict) -> list:
    """
    Sugiere acciones de respuesta basadas en el tipo y datos de la alerta.
    La app puede usar esto para mostrar botones de acción contextual.
    """
    actions = []
    if alert.get("src_ip"):
        actions.append("block_ip")
    event_type = alert.get("event_type", "")
    if event_type in ("process", "malware"):
        actions.append("kill_process")
    if alert.get("level", 0) >= 12:
        actions.append("isolate")
    return actions
