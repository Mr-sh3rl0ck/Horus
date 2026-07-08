# Horus SIEM Server - Dashboard API
# Endpoints for the React dashboard SPA

import logging
from typing import Optional

from fastapi import APIRouter, Request, Query, Depends

from api.deps import get_current_session, require_role

logger = logging.getLogger("horus.server.dashboard")

router = APIRouter()

# Shorthand dependency aliases
_any_auth      = Depends(get_current_session)
_soc_or_above  = Depends(require_role("admin", "soc_analyst"))
_admin_only    = Depends(require_role("admin"))


@router.get("/alerts", dependencies=[_any_auth])
async def get_alerts(
    request: Request,
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    severity: Optional[int] = Query(None, ge=1, le=15),
    agent_id: Optional[str] = None,
    type: Optional[str] = Query(None),
):
    """Retorna las alertas más recientes."""
    alert_store = request.app.state.alert_store
    
    exclude_types = None
    if type == "threat":
        exclude_types = ["fim", "vulnerability"]
        
    alerts = alert_store.get_recent_alerts(
        limit=limit,
        offset=offset,
        severity=severity,
        agent_id=agent_id,
        exclude_types=exclude_types,
    )
    total = alert_store.get_alert_count(
        severity=severity, agent_id=agent_id, exclude_types=exclude_types
    )

    return {
        "total": total,
        "alerts": alerts,
        "limit": limit,
        "offset": offset,
    }


@router.get("/alerts/search", dependencies=[_any_auth])
async def search_alerts(
    request: Request,
    q: str = Query(..., min_length=1),
    limit: int = Query(50, ge=1, le=500),
):
    """Búsqueda de texto completo sobre alertas históricas."""
    alert_store = request.app.state.alert_store
    results = alert_store.search_alerts(query=q, limit=limit)

    return {
        "query": q,
        "total": len(results),
        "results": results,
    }


@router.get("/stats", dependencies=[_any_auth])
async def get_stats(request: Request):
    """Estadísticas generales para el dashboard."""
    alert_store = request.app.state.alert_store
    agents = request.app.state.agents

    stats = alert_store.get_alert_stats()
    stats["agents_total"] = len(agents)
    stats["agents_active"] = sum(
        1 for a in agents.values()
        if _compute_agent_status(a).get("status") == "active"
    )

    return stats


@router.get("/alerts/{alert_id}", dependencies=[_any_auth])
async def get_alert_detail(request: Request, alert_id: str):
    """Retorna el detalle completo de una alerta."""
    alert_store = request.app.state.alert_store
    alert = alert_store.get_alert_by_id(alert_id)
    if not alert:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Alerta no encontrada")
    return alert


import time as _time

AGENT_TIMEOUT_SECONDS = 60  # Consider disconnected after 60s of no activity


def _compute_agent_status(agent: dict) -> dict:
    """Returns a copy of agent dict with computed status."""
    a = dict(agent)
    last_seen = a.get("last_seen", 0)
    if _time.time() - last_seen > AGENT_TIMEOUT_SECONDS:
        a["status"] = "disconnected"
    else:
        a["status"] = "active"
    return a


@router.get("/agents", dependencies=[_soc_or_above])
async def get_agents(request: Request):
    """Retorna la lista de agentes registrados con status calculado."""
    agents = request.app.state.agents
    agent_list = [_compute_agent_status(a) for a in agents.values()]
    return agent_list


@router.get("/agents/{agent_id}", dependencies=[_soc_or_above])
async def get_agent_detail(request: Request, agent_id: str):
    """Retorna el detalle de un agente específico."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")
    return _compute_agent_status(agents[agent_id])


@router.delete("/agents/{agent_id}", dependencies=[_admin_only])
async def delete_agent(request: Request, agent_id: str):
    """Elimina un agente del registro."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")
    del agents[agent_id]
    # Also clean up pending commands
    pending = getattr(request.app.state, "pending_commands", {})
    pending.pop(agent_id, None)
    return {"status": "deleted", "agent_id": agent_id}


@router.get("/health")
async def health_check(request: Request):
    """Health check endpoint (accesible en /api/health)."""
    redis_client = getattr(request.app.state, "redis", None)
    redis_ok = False
    if redis_client:
        try:
            redis_ok = redis_client.ping()
        except Exception:
            pass
            
    workers = getattr(request.app.state, "workers", [])

    return {
        "status": "ok",
        "redis": "connected" if redis_ok else "disconnected",
        "workers": len(workers),
    }
    
class CommandRequest(BaseModel):
    agent_id: str
    action: str
    params: dict = {}

@router.post("/commands", dependencies=[_soc_or_above])
async def send_command(request: Request, body: CommandRequest):
    """Envia un comando a un agente."""
    agents = getattr(request.app.state, "agents", {})
    if body.agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")
        
    pending = getattr(request.app.state, "pending_commands", {})
    if body.agent_id not in pending:
        pending[body.agent_id] = []
        
    import uuid
    cmd = {
        "command_id": str(uuid.uuid4()),
        "action": body.action,
        "params": body.params,
        "status": "pending"
    }
    pending[body.agent_id].append(cmd)
    
    return {"status": "enqueued", "command": cmd}


# ---------------------------------------------------------------------------
# FIM (File Integrity Monitoring) endpoints
# ---------------------------------------------------------------------------

@router.get("/fim/events", dependencies=[_soc_or_above])
async def get_fim_events(
    request: Request,
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    agent_id: Optional[str] = None,
):
    """Retorna los eventos FIM."""
    alert_store = request.app.state.alert_store
    events = alert_store.get_recent_alerts(
        limit=limit,
        offset=offset,
        agent_id=agent_id,
        event_type="fim",
    )
    total = alert_store.get_alert_count(agent_id=agent_id, event_type="fim")

    return {
        "total": total,
        "events": events,
        "limit": limit,
        "offset": offset,
    }


@router.get("/fim/stats", dependencies=[_soc_or_above])
async def get_fim_stats(request: Request):
    """Estadísticas de FIM para el dashboard."""
    alert_store = request.app.state.alert_store
    return alert_store.get_fim_stats()


# ---------------------------------------------------------------------------
# Vulnerability Detection endpoints
# ---------------------------------------------------------------------------

@router.get("/vulnerabilities", dependencies=[_soc_or_above])
async def get_vulnerabilities(
    request: Request,
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    agent_id: Optional[str] = None,
    severity: Optional[int] = Query(None, ge=1, le=15),
):
    """Retorna las alertas de vulnerabilidades."""
    alert_store = request.app.state.alert_store
    vulns = alert_store.get_recent_alerts(
        limit=limit,
        offset=offset,
        severity=severity,
        agent_id=agent_id,
        event_type="vulnerability",
    )
    total = alert_store.get_alert_count(
        severity=severity, agent_id=agent_id, event_type="vulnerability"
    )

    return {
        "total": total,
        "vulnerabilities": vulns,
        "limit": limit,
        "offset": offset,
    }


@router.get("/vulnerabilities/stats", dependencies=[_soc_or_above])
async def get_vulnerability_stats(request: Request):
    """Estadísticas de vulnerabilidades para el dashboard."""
    alert_store = request.app.state.alert_store
    return alert_store.get_vulnerability_stats()


# ---------------------------------------------------------------------------
# Syscollector (System Inventory) endpoints
# ---------------------------------------------------------------------------

@router.get("/syscollector/summary", dependencies=[_soc_or_above])
async def get_syscollector_summary(request: Request):
    """Aggregated syscollector summary across all agents."""
    agents = request.app.state.agents
    total_processes = 0
    total_ports = 0
    total_packages = 0
    agents_with_data = 0

    for agent in agents.values():
        sc = agent.get("syscollector")
        if sc:
            agents_with_data += 1
            total_processes += sc.get("process_count", 0)
            total_ports += len(sc.get("open_ports", []))
            total_packages += len(sc.get("packages", []))

    return {
        "total_agents": len(agents),
        "agents_with_data": agents_with_data,
        "total_processes": total_processes,
        "total_open_ports": total_ports,
        "total_packages": total_packages,
    }


@router.get("/syscollector/{agent_id}", dependencies=[_soc_or_above])
async def get_syscollector_data(request: Request, agent_id: str):
    """Full syscollector snapshot for a specific agent."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    sc = agents[agent_id].get("syscollector")
    if not sc:
        return {"status": "no_data", "message": "No syscollector data available yet"}

    return sc


@router.get("/syscollector/{agent_id}/hardware", dependencies=[_soc_or_above])
async def get_syscollector_hardware(request: Request, agent_id: str):
    """Hardware metrics for a specific agent."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    sc = agents[agent_id].get("syscollector", {})
    return {
        "os": sc.get("os", {}),
        "hardware": sc.get("hardware", {}),
        "timestamp": sc.get("timestamp"),
    }


@router.get("/syscollector/{agent_id}/processes", dependencies=[_soc_or_above])
async def get_syscollector_processes(request: Request, agent_id: str):
    """Running processes for a specific agent."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    sc = agents[agent_id].get("syscollector", {})
    return {
        "process_count": sc.get("process_count", 0),
        "processes": sc.get("processes", []),
    }


@router.get("/syscollector/{agent_id}/ports", dependencies=[_soc_or_above])
async def get_syscollector_ports(request: Request, agent_id: str):
    """Open LISTEN ports for a specific agent."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    sc = agents[agent_id].get("syscollector", {})
    return {"ports": sc.get("open_ports", [])}


@router.get("/syscollector/{agent_id}/packages", dependencies=[_soc_or_above])
async def get_syscollector_packages(request: Request, agent_id: str):
    """Installed packages for a specific agent."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    sc = agents[agent_id].get("syscollector", {})
    return {"packages": sc.get("packages", [])}
