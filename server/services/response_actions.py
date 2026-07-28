# Horus SIEM Server - Active Response Action Catalog
#
# Fuente única de verdad para las acciones de respuesta activa.
# La consumen tanto el dashboard (api/dashboard.py) como la app móvil
# (api/mobile.py), y debe mantenerse alineada con el ACTION_REGISTRY del
# agente en agents/modules/active_response.py.

from typing import Dict, List

from fastapi import HTTPException


# Catálogo de acciones: qué hace cada una y qué parámetros necesita.
ACTION_CATALOG: Dict[str, dict] = {
    "block_ip": {
        "label": "Bloquear IP",
        "description": "Bloquea la IP origen en el firewall del endpoint.",
        "requires": ["ip"],
        "destructive": False,
    },
    "unblock_ip": {
        "label": "Desbloquear IP",
        "description": "Revierte el bloqueo de una IP previamente bloqueada.",
        "requires": ["ip"],
        "destructive": False,
    },
    "kill_process": {
        "label": "Terminar proceso",
        "description": "Termina un proceso por PID o por nombre.",
        "requires": ["pid|name"],
        "destructive": False,
    },
    "isolate": {
        "label": "Aislar endpoint",
        "description": (
            "Corta todo el tráfico de red del endpoint salvo la comunicación "
            "con el servidor Horus."
        ),
        "requires": [],
        "destructive": True,
    },
    "unisolate": {
        "label": "Reconectar endpoint",
        "description": "Revierte el aislamiento y restaura la conectividad.",
        "requires": [],
        "destructive": False,
    },
}

ALLOWED_ACTIONS = set(ACTION_CATALOG)


def validate_action_params(action: str, params: dict) -> None:
    """
    Valida que los parámetros obligatorios de una acción estén presentes.

    Raises:
        HTTPException 400 si falta algún parámetro requerido.
    """
    params = params or {}

    if action == "block_ip" and not params.get("ip"):
        raise HTTPException(
            status_code=400,
            detail="La acción 'block_ip' requiere el parámetro 'ip'.",
        )

    if action == "unblock_ip" and not params.get("ip"):
        raise HTTPException(
            status_code=400,
            detail="La acción 'unblock_ip' requiere el parámetro 'ip'.",
        )

    if action == "kill_process" and not params.get("pid") and not params.get("name"):
        raise HTTPException(
            status_code=400,
            detail="La acción 'kill_process' requiere 'pid' o 'name' en params.",
        )


def suggest_actions(alert: dict) -> List[str]:
    """
    Sugiere acciones de respuesta según el tipo y los datos de la alerta.
    La app móvil y el dashboard la usan para mostrar botones contextuales.
    """
    actions: List[str] = []

    if alert.get("src_ip"):
        actions.append("block_ip")

    if alert.get("event_type") in ("process", "malware"):
        actions.append("kill_process")

    if (alert.get("level") or 0) >= 12:
        actions.append("isolate")

    return actions
