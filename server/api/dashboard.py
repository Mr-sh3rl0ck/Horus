# Horus SIEM Server - Dashboard API
# Endpoints for the React dashboard SPA

import logging
from typing import Optional

from fastapi import APIRouter, Request, Query

logger = logging.getLogger("horus.server.dashboard")

router = APIRouter()


@router.get("/alerts")
async def get_alerts(
    request: Request,
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    severity: Optional[int] = Query(None, ge=1, le=15),
    agent_id: Optional[str] = None,
):
    """Retorna las alertas más recientes."""
    alert_store = request.app.state.alert_store
    alerts = alert_store.get_recent_alerts(
        limit=limit,
        offset=offset,
        severity=severity,
        agent_id=agent_id,
    )
    total = alert_store.get_alert_count(severity=severity, agent_id=agent_id)

    return {
        "total": total,
        "alerts": alerts,
        "limit": limit,
        "offset": offset,
    }


@router.get("/alerts/search")
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


@router.get("/stats")
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


@router.get("/alerts/{alert_id}")
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


@router.get("/agents")
async def get_agents(request: Request):
    """Retorna la lista de agentes registrados con status calculado."""
    agents = request.app.state.agents
    agent_list = [_compute_agent_status(a) for a in agents.values()]
    return agent_list


@router.get("/agents/{agent_id}")
async def get_agent_detail(request: Request, agent_id: str):
    """Retorna el detalle de un agente específico."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")
    return _compute_agent_status(agents[agent_id])


@router.delete("/agents/{agent_id}")
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

    return {
        "status": "ok",
        "redis": "connected" if redis_ok else "disconnected",
    }


# ---------------------------------------------------------------------------
# FIM (File Integrity Monitoring) endpoints
# ---------------------------------------------------------------------------

@router.get("/fim/events")
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


@router.get("/fim/stats")
async def get_fim_stats(request: Request):
    """Estadísticas de FIM para el dashboard."""
    alert_store = request.app.state.alert_store
    return alert_store.get_fim_stats()


# ---------------------------------------------------------------------------
# Vulnerability Detection endpoints
# ---------------------------------------------------------------------------

@router.get("/vulnerabilities")
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


@router.get("/vulnerabilities/stats")
async def get_vulnerability_stats(request: Request):
    """Estadísticas de vulnerabilidades para el dashboard."""
    alert_store = request.app.state.alert_store
    return alert_store.get_vulnerability_stats()


# ---------------------------------------------------------------------------
# Syscollector (System Inventory) endpoints
# ---------------------------------------------------------------------------

@router.get("/syscollector/summary")
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


@router.get("/syscollector/{agent_id}")
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


@router.get("/syscollector/{agent_id}/hardware")
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


@router.get("/syscollector/{agent_id}/processes")
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


@router.get("/syscollector/{agent_id}/ports")
async def get_syscollector_ports(request: Request, agent_id: str):
    """Open LISTEN ports for a specific agent."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    sc = agents[agent_id].get("syscollector", {})
    return {"ports": sc.get("open_ports", [])}


@router.get("/syscollector/{agent_id}/packages")
async def get_syscollector_packages(request: Request, agent_id: str):
    """Installed packages for a specific agent."""
    agents = request.app.state.agents
    if agent_id not in agents:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Agente no encontrado")

    sc = agents[agent_id].get("syscollector", {})
    return {"packages": sc.get("packages", [])}
