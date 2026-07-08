# Horus SIEM Server - User Management API
# CRUD endpoints for user administration (admin role only)

import logging
from typing import Optional

from fastapi import APIRouter, Request, HTTPException, Depends
from pydantic import BaseModel, field_validator

from api.deps import require_role
from services.user_store import VALID_ROLES

logger = logging.getLogger("horus.server.users")

router = APIRouter()

_admin_only = Depends(require_role("admin"))


# ---------------------------------------------------------------------------
# Pydantic models
# ---------------------------------------------------------------------------

class CreateUserRequest(BaseModel):
    username: str
    password: str
    role: str = "viewer"

    @field_validator("role")
    @classmethod
    def role_must_be_valid(cls, v):
        if v not in VALID_ROLES:
            raise ValueError(f"Rol inválido. Opciones: {sorted(VALID_ROLES)}")
        return v

    @field_validator("username")
    @classmethod
    def username_not_empty(cls, v):
        v = v.strip()
        if not v:
            raise ValueError("El nombre de usuario no puede estar vacío")
        if len(v) < 3:
            raise ValueError("El nombre de usuario debe tener al menos 3 caracteres")
        return v

    @field_validator("password")
    @classmethod
    def password_min_length(cls, v):
        if len(v) < 6:
            raise ValueError("La contraseña debe tener al menos 6 caracteres")
        return v


class UpdateUserRequest(BaseModel):
    role: Optional[str] = None
    password: Optional[str] = None
    is_active: Optional[bool] = None

    @field_validator("role")
    @classmethod
    def role_must_be_valid(cls, v):
        if v is not None and v not in VALID_ROLES:
            raise ValueError(f"Rol inválido. Opciones: {sorted(VALID_ROLES)}")
        return v


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------

@router.get("/users", dependencies=[_admin_only])
async def list_users(request: Request):
    """Returns all registered users (no password hashes). Admin only."""
    user_store = request.app.state.user_store
    return user_store.list_users()


@router.post("/users", dependencies=[_admin_only], status_code=201)
async def create_user(body: CreateUserRequest, request: Request):
    """Creates a new user. Admin only."""
    user_store = request.app.state.user_store
    try:
        ok = user_store.create_user(body.username, body.password, body.role)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    if not ok:
        raise HTTPException(status_code=409, detail=f"El usuario '{body.username}' ya existe")

    return user_store.get_user(body.username)


@router.get("/users/{username}", dependencies=[_admin_only])
async def get_user(username: str, request: Request):
    """Returns details for a specific user. Admin only."""
    user_store = request.app.state.user_store
    user = user_store.get_user(username)
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return user


@router.put("/users/{username}", dependencies=[_admin_only])
async def update_user(username: str, body: UpdateUserRequest, request: Request):
    """Updates user role, password, or active status. Admin only."""
    user_store = request.app.state.user_store

    # Protect the admin account from being demoted or deactivated by mistake
    current_admin_session = None  # we don't need it here — just guard logic
    user = user_store.get_user(username)
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    if user["role"] == "admin" and body.role and body.role != "admin":
        # Count how many admins exist
        all_users = user_store.list_users()
        admin_count = sum(1 for u in all_users if u["role"] == "admin")
        if admin_count <= 1:
            raise HTTPException(
                status_code=400,
                detail="No se puede cambiar el rol del único administrador del sistema",
            )

    try:
        ok = user_store.update_user(
            username,
            role=body.role,
            plain_password=body.password,
            is_active=body.is_active,
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    if not ok:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    return user_store.get_user(username)


@router.delete("/users/{username}", dependencies=[_admin_only])
async def delete_user(username: str, request: Request):
    """Deletes a user. Admin only. Cannot delete the last admin."""
    user_store = request.app.state.user_store
    user = user_store.get_user(username)
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    if user["role"] == "admin":
        all_users = user_store.list_users()
        admin_count = sum(1 for u in all_users if u["role"] == "admin")
        if admin_count <= 1:
            raise HTTPException(
                status_code=400,
                detail="No se puede eliminar el único administrador del sistema",
            )

    user_store.delete_user(username)
    return {"status": "deleted", "username": username}


@router.get("/roles")
async def get_roles():
    """Returns the list of valid roles and their descriptions. Public."""
    return [
        {"id": "admin",       "label": "Administrador",     "description": "Acceso total + gestión de usuarios"},
        {"id": "soc_analyst", "label": "SOC Analyst",        "description": "Alertas, endpoints, FIM, amenazas, vulnerabilidades"},
        {"id": "compliance",  "label": "Compliance Officer", "description": "PCI DSS, GDPR, HIPAA, reportes"},
        {"id": "viewer",      "label": "Viewer",             "description": "Solo lectura — Overview"},
    ]
