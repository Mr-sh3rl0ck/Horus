# Horus SIEM Server - Authentication API
# Multi-user token-based auth backed by UserStore (SQLite + bcrypt)

import os
import time
import secrets
import logging
from typing import Dict, Optional

from fastapi import APIRouter, Request, HTTPException
from pydantic import BaseModel

logger = logging.getLogger("horus.server.auth")

router = APIRouter()

# ---------------------------------------------------------------------------
# Shared in-memory session store  (exposed via app.state.sessions)
# ---------------------------------------------------------------------------

_sessions: Dict[str, dict] = {}

# Admin credentials (resolved at startup via generate_admin_credentials)
ADMIN_USER = os.environ.get("ADMIN_USER", "admin")
ADMIN_PASSWORD = ""


def generate_admin_credentials() -> str:
    """Generates (or reads from env) the admin password and returns it."""
    global ADMIN_PASSWORD
    env_password = os.environ.get("ADMIN_PASSWORD", "")
    ADMIN_PASSWORD = env_password if env_password else secrets.token_urlsafe(12)
    return ADMIN_PASSWORD


# ---------------------------------------------------------------------------
# Pydantic models
# ---------------------------------------------------------------------------

class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    token: str
    username: str
    role: str
    expires_at: float


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------

@router.post("/auth/login", response_model=LoginResponse)
async def login(body: LoginRequest, request: Request):
    """Authenticates a user and returns a session token with role."""
    user_store = getattr(request.app.state, "user_store", None)

    if user_store is None:
        # Fallback: only admin credentials available (should not happen in prod)
        logger.error("UserStore not initialised — rejecting login")
        raise HTTPException(status_code=503, detail="Servicio no disponible")

    user = user_store.authenticate(body.username, body.password)
    if not user:
        logger.warning(f"Login fallido para usuario: {body.username}")
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    token = secrets.token_urlsafe(32)
    expires_at = time.time() + 86400  # 24 h

    session = {
        "username": user["username"],
        "role": user["role"],
        "created_at": time.time(),
        "expires_at": expires_at,
    }

    # Store in module-level dict AND in app.state so deps.py can find them
    _sessions[token] = session
    request.app.state.sessions[token] = session

    logger.info(f"Login exitoso: {user['username']} [{user['role']}]")

    return LoginResponse(
        token=token,
        username=user["username"],
        role=user["role"],
        expires_at=expires_at,
    )


@router.post("/auth/verify")
async def verify_token(request: Request):
    """Verifies if a session token is still valid. Returns username + role."""
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token no proporcionado")

    token = auth_header.removeprefix("Bearer ")
    sessions: dict = getattr(request.app.state, "sessions", {})
    session = sessions.get(token)

    if not session:
        raise HTTPException(status_code=401, detail="Token inválido")

    if time.time() > session.get("expires_at", 0):
        sessions.pop(token, None)
        raise HTTPException(status_code=401, detail="Token expirado")

    return {
        "valid": True,
        "username": session["username"],
        "role": session["role"],
    }


@router.post("/auth/logout")
async def logout(request: Request):
    """Invalidates a session token."""
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        token = auth_header.removeprefix("Bearer ")
        sessions: dict = getattr(request.app.state, "sessions", {})
        sessions.pop(token, None)
        _sessions.pop(token, None)

    return {"status": "logged_out"}
