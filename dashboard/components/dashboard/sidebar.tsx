"use client"

import React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { canAccess, getRoleBadgeClass, getRoleLabel } from "@/lib/permissions"
import type { Role } from "@/lib/permissions"
import {
    Shield,
    Home,
    Search,
    ShieldAlert,
    Bug,
    FileSearch,
    Target,
    ShieldCheck,
    Server,
    Cloud,
    Container,
    Users,
    Settings,
    ChevronRight,
    Activity,
    FileWarning,
    Lock,
    Globe,
    Database,
    BarChart3,
    Menu,
    LogOut,
    MonitorSpeaker,
    LayoutDashboard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface NavItemProps {
    icon: React.ReactNode
    label: string
    href?: string
    isActive?: boolean
    children?: { label: string; href: string }[]
    onClick?: () => void
}

function NavItem({ icon, label, href = "#", isActive, children, onClick }: NavItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    if (children) {
        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                    <button
                        className={cn(
                            "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            isOpen && "bg-sidebar-accent text-sidebar-accent-foreground"
                        )}
                    >
                        <span className="flex items-center gap-3">
                            {icon}
                            {label}
                        </span>
                        <ChevronRight
                            className={cn(
                                "h-4 w-4 transition-transform",
                                isOpen && "rotate-90"
                            )}
                        />
                    </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-9 pt-1">
                    <div className="flex flex-col gap-1">
                        {children.map((child) => (
                            <a
                                key={child.href}
                                href={child.href}
                                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            >
                                {child.label}
                            </a>
                        ))}
                    </div>
                </CollapsibleContent>
            </Collapsible>
        )
    }

    const baseClass = cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors w-full text-left",
        "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        isActive && "bg-sidebar-accent text-sidebar-primary"
    )

    if (onClick) {
        return (
            <button onClick={onClick} className={baseClass}>
                {icon}
                {label}
            </button>
        )
    }

    return (
        <a href={href} className={baseClass}>
            {icon}
            {label}
        </a>
    )
}

interface SidebarProps {
    currentPage?: string
    onNavigate?: (page: string) => void
    onLogout?: () => void
    role?: Role | string
}

export function Sidebar({ currentPage = "overview", onNavigate, onLogout, role = "viewer" }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const nav = (page: string) => onNavigate?.(page)
    const can = (section: Parameters<typeof canAccess>[1]) => canAccess(role, section)

    // User initials for avatar
    const userLabel = typeof window !== "undefined" ? localStorage.getItem("horus_user") ?? "User" : "User"
    const initials = userLabel.slice(0, 2).toUpperCase()

    return (
        <aside
            className={cn(
                "flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
                isCollapsed ? "w-16" : "w-64"
            )}
        >
            {/* Header */}
            <div className="flex h-14 items-center justify-between border-b border-sidebar-border px-4">
                {!isCollapsed && (
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
                            <span className="text-lg text-sidebar-primary-foreground">𓂀</span>
                        </div>
                        <span className="font-semibold text-sidebar-foreground">Horus SIEM</span>
                    </div>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-sidebar-foreground"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <Menu className="h-4 w-4" />
                </Button>
            </div>

            {/* Navigation */}
            <nav className={cn("flex-1 overflow-y-auto p-3", isCollapsed && "px-2")}>
                {isCollapsed ? (
                    /* Collapsed: icon-only buttons */
                    <div className="flex flex-col items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("overview")}>
                            <Home className={cn("h-5 w-5", currentPage === "overview" ? "text-sidebar-primary" : "text-muted-foreground")} />
                        </Button>
                        {can("admin-panel") && (
                            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("admin-panel")}>
                                <LayoutDashboard className={cn("h-5 w-5", currentPage === "admin-panel" ? "text-sidebar-primary" : "text-muted-foreground")} />
                            </Button>
                        )}
                        {can("endpoints") && (
                            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("endpoints")}>
                                <Server className={cn("h-5 w-5", currentPage === "endpoints" ? "text-sidebar-primary" : "text-muted-foreground")} />
                            </Button>
                        )}
                        {can("threats") && (
                            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("threats")}>
                                <ShieldAlert className={cn("h-5 w-5", currentPage === "threats" ? "text-sidebar-primary" : "text-muted-foreground")} />
                            </Button>
                        )}
                        {can("vulnerabilities") && (
                            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("vulnerabilities")}>
                                <Bug className={cn("h-5 w-5", currentPage === "vulnerabilities" ? "text-sidebar-primary" : "text-muted-foreground")} />
                            </Button>
                        )}
                        {can("fim") && (
                            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("fim")}>
                                <FileSearch className={cn("h-5 w-5", currentPage === "fim" ? "text-sidebar-primary" : "text-muted-foreground")} />
                            </Button>
                        )}
                        {can("syscollector") && (
                            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("syscollector")}>
                                <MonitorSpeaker className={cn("h-5 w-5", currentPage === "syscollector" ? "text-sidebar-primary" : "text-muted-foreground")} />
                            </Button>
                        )}
                        {can("users") && (
                            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => nav("users")}>
                                <Users className={cn("h-5 w-5", currentPage === "users" ? "text-sidebar-primary" : "text-muted-foreground")} />
                            </Button>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col gap-1">
                        {/* Main */}
                        <div className="mb-4">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Main
                            </p>
                            <NavItem
                                icon={<Home className="h-4 w-4" />}
                                label="Overview"
                                isActive={currentPage === "overview"}
                                onClick={() => nav("overview")}
                            />
                            {can("admin-panel") && (
                                <NavItem
                                    icon={<LayoutDashboard className="h-4 w-4" />}
                                    label="Panel Admin"
                                    isActive={currentPage === "admin-panel"}
                                    onClick={() => nav("admin-panel")}
                                />
                            )}
                        </div>

                        {/* Endpoint Security */}
                        {(can("endpoints") || can("fim") || can("syscollector")) && (
                            <div className="mb-4">
                                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Endpoint Security
                                </p>
                                {can("endpoints") && (
                                    <NavItem
                                        icon={<Server className="h-4 w-4" />}
                                        label="Endpoints"
                                        isActive={currentPage === "endpoints"}
                                        onClick={() => nav("endpoints")}
                                    />
                                )}
                                {can("fim") && (
                                    <NavItem
                                        icon={<FileSearch className="h-4 w-4" />}
                                        label="File Integrity"
                                        isActive={currentPage === "fim"}
                                        onClick={() => nav("fim")}
                                    />
                                )}
                                {can("syscollector") && (
                                    <NavItem
                                        icon={<MonitorSpeaker className="h-4 w-4" />}
                                        label="System Inventory"
                                        isActive={currentPage === "syscollector"}
                                        onClick={() => nav("syscollector")}
                                    />
                                )}
                            </div>
                        )}

                        {/* Threat Intelligence */}
                        {(can("threats") || can("vulnerabilities")) && (
                            <div className="mb-4">
                                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Threat Intelligence
                                </p>
                                {can("threats") && (
                                    <NavItem
                                        icon={<Target className="h-4 w-4" />}
                                        label="Threat Hunting"
                                        isActive={currentPage === "threats"}
                                        onClick={() => nav("threats")}
                                    />
                                )}
                                {can("vulnerabilities") && (
                                    <NavItem
                                        icon={<ShieldAlert className="h-4 w-4" />}
                                        label="Vulnerabilities"
                                        isActive={currentPage === "vulnerabilities"}
                                        onClick={() => nav("vulnerabilities")}
                                    />
                                )}
                                {can("threats") && (
                                    <NavItem icon={<Activity className="h-4 w-4" />} label="MITRE ATT&CK" />
                                )}
                            </div>
                        )}

                        {/* Compliance */}
                        {can("compliance") && (
                            <div className="mb-4">
                                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Compliance
                                </p>
                                <NavItem icon={<ShieldCheck className="h-4 w-4" />} label="PCI DSS" />
                                <NavItem icon={<Lock className="h-4 w-4" />} label="GDPR" />
                                <NavItem icon={<FileWarning className="h-4 w-4" />} label="HIPAA" />
                                {can("reports") && (
                                    <NavItem icon={<BarChart3 className="h-4 w-4" />} label="Reportes" />
                                )}
                            </div>
                        )}

                        {/* Administration (admin only) */}
                        {can("users") && (
                            <div className="mb-4">
                                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Administración
                                </p>
                                <NavItem
                                    icon={<Users className="h-4 w-4" />}
                                    label="Usuarios"
                                    isActive={currentPage === "users"}
                                    onClick={() => nav("users")}
                                />
                                <NavItem icon={<Database className="h-4 w-4" />} label="Indexer" />
                            </div>
                        )}
                    </div>
                )}
            </nav>

            {/* Footer — user info + role badge */}
            {!isCollapsed && (
                <div className="border-t border-sidebar-border p-4">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-sidebar-primary/20 flex items-center justify-center shrink-0">
                            <span className="text-xs font-bold text-sidebar-primary">{initials}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-sidebar-foreground truncate">
                                {userLabel}
                            </p>
                            <span
                                className={cn(
                                    "inline-block mt-0.5 rounded-full border px-2 py-0 text-[10px] font-semibold leading-5",
                                    getRoleBadgeClass(role)
                                )}
                            >
                                {getRoleLabel(role)}
                            </span>
                        </div>
                        {onLogout && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-critical shrink-0"
                                onClick={onLogout}
                                title="Cerrar sesión"
                            >
                                <LogOut className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </aside>
    )
}
