# Horus SIEM Server - Shared Dependencies
# FastAPI dependencies for authentication and role-based access control

import time
import logging
from typing import Optional

from fastapi import Request, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

logger = logging.getLogger("horus.server.deps")

security = HTTPBearer(auto_error=False)


def get_current_session(request: Request) -> dict:
    """Extracts and validates the Bearer token from the request.

    Returns the session dict:  { username, role, created_at, expires_at }
    Raises 401 if the token is missing, invalid, or expired.
    """
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token no proporcionado")

    token = auth_header.removeprefix("Bearer ")

    # Sessions are stored in app.state.sessions (set by auth.py)
    sessions: dict = getattr(request.app.state, "sessions", {})
    session = sessions.get(token)

    if not session:
        raise HTTPException(status_code=401, detail="Token inválido")

    if time.time() > session.get("expires_at", 0):
        sessions.pop(token, None)
        raise HTTPException(status_code=401, detail="Token expirado")

    return session


def require_role(*allowed_roles: str):
    """Returns a FastAPI dependency that enforces role membership.

    Usage:
        @router.delete("/agents/{id}", dependencies=[Depends(require_role("admin"))])
        async def delete_agent(...): ...
    """
    def _check(session: dict = Depends(get_current_session)):
        if session.get("role") not in allowed_roles:
            raise HTTPException(
                status_code=403,
                detail=f"Acceso denegado. Se requiere uno de los roles: {list(allowed_roles)}",
            )
        return session
    return _check
