# Horus SIEM Server - Authentication API
# Simple token-based auth with admin credentials generated at startup

import os
import time
import uuid
import hashlib
import logging
import secrets
from typing import Dict, Optional

from fastapi import APIRouter, Request, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel

logger = logging.getLogger("horus.server.auth")

router = APIRouter()
security = HTTPBearer(auto_error=False)

# In-memory session store
_sessions: Dict[str, dict] = {}

# Admin credentials (set at startup)
ADMIN_USER = os.environ.get("ADMIN_USER", "admin")
ADMIN_PASSWORD = ""  # Set at startup


def generate_admin_credentials() -> str:
    """Generate admin password. Uses ADMIN_PASSWORD env var if set, otherwise random."""
    global ADMIN_PASSWORD
    env_password = os.environ.get("ADMIN_PASSWORD", "")
    if env_password:
        ADMIN_PASSWORD = env_password
    else:
        ADMIN_PASSWORD = secrets.token_urlsafe(12)
    return ADMIN_PASSWORD


class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    token: str
    username: str
    role: str
    expires_at: float


@router.post("/auth/login", response_model=LoginResponse)
async def login(body: LoginRequest):
    """Authenticate user and return a session token."""
    if body.username != ADMIN_USER or body.password != ADMIN_PASSWORD:
        logger.warning(f"Login fallido para usuario: {body.username}")
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    # Create session token
    token = secrets.token_urlsafe(32)
    expires_at = time.time() + 86400  # 24 hours

    _sessions[token] = {
        "username": body.username,
        "role": "admin",
        "created_at": time.time(),
        "expires_at": expires_at,
    }

    logger.info(f"Login exitoso: {body.username}")

    return LoginResponse(
        token=token,
        username=body.username,
        role="admin",
        expires_at=expires_at,
    )


@router.post("/auth/verify")
async def verify_token(request: Request):
    """Verify if a session token is valid."""
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token no proporcionado")

    token = auth_header.replace("Bearer ", "")
    session = _sessions.get(token)

    if not session:
        raise HTTPException(status_code=401, detail="Token inválido")

    if time.time() > session["expires_at"]:
        del _sessions[token]
        raise HTTPException(status_code=401, detail="Token expirado")

    return {
        "valid": True,
        "username": session["username"],
        "role": session["role"],
    }


@router.post("/auth/logout")
async def logout(request: Request):
    """Invalidate a session token."""
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        token = auth_header.replace("Bearer ", "")
        _sessions.pop(token, None)

    return {"status": "logged_out"}
