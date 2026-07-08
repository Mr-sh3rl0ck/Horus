"use client"

// Horus SIEM Dashboard - Admin Panel Page
// Exclusive panel for the admin role: system health, user overview, session tracking

import { useState, useEffect, useCallback } from "react"
import {
    LayoutDashboard, Users, Activity, Server, Shield,
    Database, Wifi, WifiOff, RefreshCw, Clock, CheckCircle2,
    AlertTriangle, ShieldAlert, Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getUsers, getHealth, getStats, type UserRecord, ApiError } from "@/lib/api"
import { getRoleLabel, getRoleBadgeClass } from "@/lib/permissions"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SystemHealth {
    status: string
    redis: string
    workers?: number
}

interface SystemStats {
    total_alerts: number
    agents_total: number
    agents_active: number
    [key: string]: unknown
}

// ---------------------------------------------------------------------------
// Stat Card
// ---------------------------------------------------------------------------

function StatCard({
    icon,
    label,
    value,
    sub,
    accent = "primary",
}: {
    icon: React.ReactNode
    label: string
    value: string | number
    sub?: string
    accent?: "primary" | "critical" | "warning" | "info" | "success"
}) {
    const accentMap: Record<string, string> = {
        primary: "bg-sidebar-primary/10 text-sidebar-primary",
        critical: "bg-critical/10 text-critical",
        warning: "bg-warning/10 text-warning",
        info: "bg-info/10 text-info",
        success: "bg-green-500/10 text-green-500",
    }
    return (
        <div className="rounded-xl border border-border bg-card p-5 flex items-start gap-4">
            <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", accentMap[accent])}>
                {icon}
            </div>
            <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-0.5 text-2xl font-bold text-foreground">{value}</p>
                {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// Users Breakdown
// ---------------------------------------------------------------------------

function UsersBreakdown({ users }: { users: UserRecord[] }) {
    const byRole = users.reduce<Record<string, number>>((acc, u) => {
        acc[u.role] = (acc[u.role] ?? 0) + 1
        return acc
    }, {})

    const roles = ["admin", "soc_analyst", "compliance", "viewer"]

    return (
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sidebar-primary" />
                <h3 className="text-sm font-semibold text-foreground">Distribución de roles</h3>
            </div>
            <div className="space-y-2">
                {roles.map((role) => {
                    const count = byRole[role] ?? 0
                    return (
                        <div key={role} className="flex items-center justify-between text-xs py-1">
                            <span className={cn(
                                "rounded-full border px-2 py-0 font-semibold leading-5",
                                getRoleBadgeClass(role)
                            )}>
                                {getRoleLabel(role)}
                            </span>
                            <span className="text-muted-foreground font-medium">{count} usuario{count !== 1 ? "s" : ""}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// User List (compact)
// ---------------------------------------------------------------------------

function UserList({ users }: { users: UserRecord[] }) {
    return (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <h3 className="text-sm font-semibold text-foreground">Usuarios del sistema</h3>
                <span className="text-xs text-muted-foreground">{users.length} total</span>
            </div>
            <div className="divide-y divide-border/50 max-h-64 overflow-y-auto">
                {users.map((u) => (
                    <div key={u.username} className="flex items-center justify-between px-5 py-3 hover:bg-muted/20 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sidebar-primary/15 shrink-0">
                                <span className="text-[10px] font-bold text-sidebar-primary">
                                    {u.username.slice(0, 2).toUpperCase()}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">{u.username}</p>
                                <p className="text-xs text-muted-foreground">
                                    {u.last_login
                                        ? `Último acceso: ${new Date(u.last_login * 1000).toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" })}`
                                        : "Sin accesos registrados"}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={cn(
                                "inline-block rounded-full border px-2 py-0 text-[10px] font-semibold leading-5",
                                getRoleBadgeClass(u.role)
                            )}>
                                {getRoleLabel(u.role)}
                            </span>
                            <div className={cn(
                                "h-2 w-2 rounded-full",
                                u.is_active ? "bg-green-500" : "bg-muted-foreground"
                            )} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// System Health Card
// ---------------------------------------------------------------------------

function HealthCard({ health, loading }: { health: SystemHealth | null; loading: boolean }) {
    const isOk = health?.status === "ok"
    const redisConnected = health?.redis === "connected"

    return (
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-sidebar-primary" />
                <h3 className="text-sm font-semibold text-foreground">Estado del sistema</h3>
            </div>

            {loading ? (
                <div className="flex justify-center py-4">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
            ) : (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Server className="h-4 w-4" /> Servidor API
                        </div>
                        <div className="flex items-center gap-1.5">
                            {isOk
                                ? <CheckCircle2 className="h-4 w-4 text-green-500" />
                                : <AlertTriangle className="h-4 w-4 text-critical" />}
                            <span className={cn("text-xs font-medium", isOk ? "text-green-500" : "text-critical")}>
                                {isOk ? "Operativo" : "Error"}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Database className="h-4 w-4" /> Redis / Queue
                        </div>
                        <div className="flex items-center gap-1.5">
                            {redisConnected
                                ? <Wifi className="h-4 w-4 text-green-500" />
                                : <WifiOff className="h-4 w-4 text-warning" />}
                            <span className={cn("text-xs font-medium", redisConnected ? "text-green-500" : "text-warning")}>
                                {redisConnected ? "Conectado" : "Desconectado"}
                            </span>
                        </div>
                    </div>

                    {health?.workers !== undefined && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Activity className="h-4 w-4" /> Workers activos
                            </div>
                            <span className="text-xs font-medium text-foreground">{health.workers}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export function AdminPanelPage() {
    const [users, setUsers] = useState<UserRecord[]>([])
    const [health, setHealth] = useState<SystemHealth | null>(null)
    const [stats, setStats] = useState<SystemStats | null>(null)
    const [loading, setLoading] = useState(true)
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

    const load = useCallback(async () => {
        setLoading(true)
        try {
            const [u, h, s] = await Promise.allSettled([
                getUsers(),
                getHealth(),
                getStats(),
            ])
            if (u.status === "fulfilled") setUsers(u.value)
            if (h.status === "fulfilled") setHealth(h.value)
            if (s.status === "fulfilled") setStats(s.value)
            setLastUpdated(new Date())
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => { load() }, [load])

    const activeUsers = users.filter(u => u.is_active).length
    const adminCount = users.filter(u => u.role === "admin").length

    return (
        <div className="p-6 space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary/10">
                        <LayoutDashboard className="h-5 w-5 text-sidebar-primary" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-foreground">Panel de Administración</h1>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {lastUpdated
                                ? `Actualizado: ${lastUpdated.toLocaleTimeString("es-MX")}`
                                : "Cargando..."}
                        </p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="gap-2 border-border bg-muted"
                    onClick={load}
                    disabled={loading}
                >
                    <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
                    Actualizar
                </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    icon={<Users className="h-5 w-5" />}
                    label="Usuarios totales"
                    value={loading ? "—" : users.length}
                    sub={`${activeUsers} activo${activeUsers !== 1 ? "s" : ""}`}
                    accent="primary"
                />
                <StatCard
                    icon={<Shield className="h-5 w-5" />}
                    label="Administradores"
                    value={loading ? "—" : adminCount}
                    sub="con acceso total"
                    accent="critical"
                />
                <StatCard
                    icon={<ShieldAlert className="h-5 w-5" />}
                    label="Alertas totales"
                    value={loading ? "—" : (stats?.total_alerts ?? "—")}
                    sub="en la base de datos"
                    accent="warning"
                />
                <StatCard
                    icon={<Server className="h-5 w-5" />}
                    label="Agentes"
                    value={loading ? "—" : (stats?.agents_total ?? "—")}
                    sub={`${stats?.agents_active ?? "—"} activos`}
                    accent="info"
                />
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <HealthCard health={health} loading={loading} />
                <div className="lg:col-span-2">
                    <UsersBreakdown users={users} />
                </div>
            </div>

            {/* User List */}
            <UserList users={users} />
        </div>
    )
}
