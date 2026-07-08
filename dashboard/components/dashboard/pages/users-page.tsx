"use client"

// Horus SIEM Dashboard - Users Management Page
// Admin-only page for creating, editing, and deleting users

import { useState, useEffect, useCallback } from "react"
import {
    Users, Plus, Pencil, Trash2, RefreshCw, ShieldCheck,
    AlertCircle, Check, X, Eye, EyeOff, Loader2, UserCog,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    getUsers, createUser, updateUser, deleteUser, getRoles,
    type UserRecord, ApiError
} from "@/lib/api"
import { getRoleLabel, getRoleBadgeClass } from "@/lib/permissions"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Role { id: string; label: string; description: string }

interface UserFormState {
    username: string
    password: string
    role: string
    is_active: boolean
    showPassword: boolean
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(ts: number | null): string {
    if (!ts) return "—"
    return new Date(ts * 1000).toLocaleString("es-MX", {
        dateStyle: "short", timeStyle: "short"
    })
}

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

interface UserModalProps {
    mode: "create" | "edit"
    editTarget?: UserRecord | null
    roles: Role[]
    onClose: () => void
    onSave: () => void
}

function UserModal({ mode, editTarget, roles, onClose, onSave }: UserModalProps) {
    const [form, setForm] = useState<UserFormState>({
        username: editTarget?.username ?? "",
        password: "",
        role: editTarget?.role ?? "viewer",
        is_active: editTarget ? !!editTarget.is_active : true,
        showPassword: false,
    })
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState("")

    const handleSave = async () => {
        setError("")
        setSaving(true)
        try {
            if (mode === "create") {
                await createUser({ username: form.username, password: form.password, role: form.role })
            } else {
                const payload: Record<string, unknown> = { role: form.role, is_active: form.is_active }
                if (form.password) payload.password = form.password
                await updateUser(editTarget!.username, payload)
            }
            onSave()
        } catch (e: unknown) {
            const msg = e instanceof ApiError ? e.message : "Error al guardar usuario"
            setError(msg)
        } finally {
            setSaving(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-xl border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                    <div className="flex items-center gap-2">
                        <UserCog className="h-5 w-5 text-sidebar-primary" />
                        <h2 className="text-base font-semibold text-foreground">
                            {mode === "create" ? "Nuevo Usuario" : `Editar: ${editTarget?.username}`}
                        </h2>
                    </div>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-4 px-6 py-5">
                    {error && (
                        <div className="flex items-center gap-2 rounded-lg border border-critical/30 bg-critical/10 px-4 py-3 text-sm text-critical">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            {error}
                        </div>
                    )}

                    {/* Username (only on create) */}
                    {mode === "create" && (
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Nombre de usuario
                            </label>
                            <input
                                type="text"
                                value={form.username}
                                onChange={(e) => setForm(f => ({ ...f, username: e.target.value }))}
                                placeholder="ej: analista1"
                                className="flex h-10 w-full rounded-lg border border-border bg-muted/50 px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary/50 transition-colors"
                            />
                        </div>
                    )}

                    {/* Password */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {mode === "edit" ? "Nueva contraseña (dejar vacío para no cambiar)" : "Contraseña"}
                        </label>
                        <div className="relative">
                            <input
                                type={form.showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={(e) => setForm(f => ({ ...f, password: e.target.value }))}
                                placeholder={mode === "edit" ? "••••••••" : "Mínimo 6 caracteres"}
                                className="flex h-10 w-full rounded-lg border border-border bg-muted/50 px-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary/50 transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setForm(f => ({ ...f, showPassword: !f.showPassword }))}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {form.showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Rol</label>
                        <select
                            value={form.role}
                            onChange={(e) => setForm(f => ({ ...f, role: e.target.value }))}
                            className="flex h-10 w-full rounded-lg border border-border bg-muted/50 px-3 text-sm text-foreground focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary/50 transition-colors"
                        >
                            {roles.map(r => (
                                <option key={r.id} value={r.id}>{r.label} — {r.description}</option>
                            ))}
                        </select>
                    </div>

                    {/* Active toggle (edit only) */}
                    {mode === "edit" && (
                        <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-3">
                            <div>
                                <p className="text-sm font-medium text-foreground">Estado</p>
                                <p className="text-xs text-muted-foreground">Un usuario inactivo no puede iniciar sesión</p>
                            </div>
                            <button
                                onClick={() => setForm(f => ({ ...f, is_active: !f.is_active }))}
                                className={cn(
                                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                    form.is_active ? "bg-sidebar-primary" : "bg-muted"
                                )}
                            >
                                <span
                                    className={cn(
                                        "inline-block h-4 w-4 rounded-full bg-white shadow transition-transform",
                                        form.is_active ? "translate-x-6" : "translate-x-1"
                                    )}
                                />
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex justify-end gap-3 border-t border-border px-6 py-4">
                    <Button variant="outline" onClick={onClose} className="border-border">Cancelar</Button>
                    <Button
                        onClick={handleSave}
                        disabled={saving || (mode === "create" && (!form.username || !form.password))}
                        className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    >
                        {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                        {mode === "create" ? "Crear usuario" : "Guardar cambios"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// Confirm Delete Modal
// ---------------------------------------------------------------------------

interface ConfirmDeleteProps {
    username: string
    onConfirm: () => void
    onCancel: () => void
    deleting: boolean
    error: string
}

function ConfirmDeleteModal({ username, onConfirm, onCancel, deleting, error }: ConfirmDeleteProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-xl border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-200 p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-critical/10">
                        <Trash2 className="h-5 w-5 text-critical" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">¿Eliminar usuario?</p>
                        <p className="text-xs text-muted-foreground">Esta acción no se puede deshacer.</p>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">
                    Se eliminará permanentemente el usuario <span className="font-mono font-semibold text-foreground">{username}</span>.
                </p>
                {error && (
                    <div className="flex items-center gap-2 rounded-lg border border-critical/30 bg-critical/10 px-3 py-2 text-xs text-critical">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {error}
                    </div>
                )}
                <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={onCancel} className="border-border">Cancelar</Button>
                    <Button
                        onClick={onConfirm}
                        disabled={deleting}
                        className="bg-critical text-white hover:bg-critical/90"
                    >
                        {deleting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                        Eliminar
                    </Button>
                </div>
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export function UsersPage() {
    const [users, setUsers] = useState<UserRecord[]>([])
    const [roles, setRoles] = useState<Role[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [modal, setModal] = useState<null | "create" | "edit">(null)
    const [editTarget, setEditTarget] = useState<UserRecord | null>(null)
    const [deleteTarget, setDeleteTarget] = useState<UserRecord | null>(null)
    const [deleting, setDeleting] = useState(false)
    const [deleteError, setDeleteError] = useState("")

    const load = useCallback(async () => {
        setLoading(true)
        setError("")
        try {
            const [u, r] = await Promise.all([getUsers(), getRoles()])
            setUsers(u)
            setRoles(r)
        } catch (e: unknown) {
            const msg = e instanceof ApiError ? e.message : "Error al cargar usuarios"
            setError(msg)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => { load() }, [load])

    const handleDelete = async () => {
        if (!deleteTarget) return
        setDeleting(true)
        setDeleteError("")
        try {
            await deleteUser(deleteTarget.username)
            setDeleteTarget(null)
            load()
        } catch (e: unknown) {
            const msg = e instanceof ApiError ? e.message : "Error al eliminar usuario"
            setDeleteError(msg)
        } finally {
            setDeleting(false)
        }
    }

    return (
        <div className="p-6 space-y-6">
            {/* Modals */}
            {modal && (
                <UserModal
                    mode={modal}
                    editTarget={modal === "edit" ? editTarget : null}
                    roles={roles}
                    onClose={() => { setModal(null); setEditTarget(null) }}
                    onSave={() => { setModal(null); setEditTarget(null); load() }}
                />
            )}
            {deleteTarget && (
                <ConfirmDeleteModal
                    username={deleteTarget.username}
                    onConfirm={handleDelete}
                    onCancel={() => { setDeleteTarget(null); setDeleteError("") }}
                    deleting={deleting}
                    error={deleteError}
                />
            )}

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary/10">
                        <Users className="h-5 w-5 text-sidebar-primary" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-foreground">Gestión de Usuarios</h1>
                        <p className="text-xs text-muted-foreground">{users.length} usuario{users.length !== 1 ? "s" : ""} registrado{users.length !== 1 ? "s" : ""}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-border bg-muted"
                        onClick={load}
                        disabled={loading}
                    >
                        <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
                    </Button>
                    <Button
                        onClick={() => setModal("create")}
                        className="gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    >
                        <Plus className="h-4 w-4" />
                        Nuevo usuario
                    </Button>
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 rounded-lg border border-critical/30 bg-critical/10 px-4 py-3 text-sm text-critical">
                    <AlertCircle className="h-4 w-4 shrink-0" /> {error}
                </div>
            )}

            {/* Table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border bg-muted/30">
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Usuario</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rol</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Creado</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Último acceso</th>
                                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="py-12 text-center">
                                        <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
                                    </td>
                                </tr>
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-12 text-center text-muted-foreground text-sm">
                                        No hay usuarios registrados
                                    </td>
                                </tr>
                            ) : (
                                users.map((u) => (
                                    <tr key={u.username} className="border-b border-border/50 hover:bg-muted/20 transition-colors last:border-0">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary/15 shrink-0">
                                                    <span className="text-xs font-bold text-sidebar-primary">
                                                        {u.username.slice(0, 2).toUpperCase()}
                                                    </span>
                                                </div>
                                                <span className="font-medium text-foreground">{u.username}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={cn(
                                                "inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                                                getRoleBadgeClass(u.role)
                                            )}>
                                                {getRoleLabel(u.role)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1.5">
                                                <div className={cn(
                                                    "h-2 w-2 rounded-full",
                                                    u.is_active ? "bg-green-500" : "bg-muted-foreground"
                                                )} />
                                                <span className={cn("text-xs", u.is_active ? "text-green-500" : "text-muted-foreground")}>
                                                    {u.is_active ? "Activo" : "Inactivo"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground text-xs">{formatDate(u.created_at)}</td>
                                        <td className="px-4 py-3 text-muted-foreground text-xs">{formatDate(u.last_login)}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                                                    onClick={() => { setEditTarget(u); setModal("edit") }}
                                                    title="Editar"
                                                >
                                                    <Pencil className="h-3.5 w-3.5" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-7 w-7 text-muted-foreground hover:text-critical"
                                                    onClick={() => { setDeleteTarget(u); setDeleteError("") }}
                                                    title="Eliminar"
                                                >
                                                    <Trash2 className="h-3.5 w-3.5" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Role legend */}
            <div className="rounded-xl border border-border bg-card/50 p-4">
                <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="h-4 w-4 text-sidebar-primary" />
                    <p className="text-sm font-medium text-foreground">Descripción de roles</p>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {roles.map(r => (
                        <div key={r.id} className="flex items-start gap-2">
                            <span className={cn(
                                "mt-0.5 inline-block shrink-0 rounded-full border px-2 py-0 text-[10px] font-semibold leading-5",
                                getRoleBadgeClass(r.id)
                            )}>
                                {r.label}
                            </span>
                            <p className="text-xs text-muted-foreground">{r.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
