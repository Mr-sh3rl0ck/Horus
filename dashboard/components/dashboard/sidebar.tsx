"use client"

import React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
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
}

function NavItem({ icon, label, href = "#", isActive, children }: NavItemProps) {
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

    return (
        <a
            href={href}
            className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive && "bg-sidebar-accent text-sidebar-primary"
            )}
        >
            {icon}
            {label}
        </a>
    )
}

interface SidebarProps {
    currentPage?: string
    onNavigate?: (page: string) => void
    onLogout?: () => void
}

export function Sidebar({ currentPage = "overview", onNavigate, onLogout }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleNavClick = (page: string) => {
        onNavigate?.(page)
    }

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
                    <div className="flex flex-col items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => handleNavClick("overview")}>
                            <Home className={cn("h-5 w-5", currentPage === "overview" ? "text-sidebar-primary" : "text-muted-foreground")} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => handleNavClick("endpoints")}>
                            <Server className={cn("h-5 w-5", currentPage === "endpoints" ? "text-sidebar-primary" : "text-muted-foreground")} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => handleNavClick("threats")}>
                            <ShieldAlert className={cn("h-5 w-5", currentPage === "threats" ? "text-sidebar-primary" : "text-muted-foreground")} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => handleNavClick("vulnerabilities")}>
                            <Bug className={cn("h-5 w-5", currentPage === "vulnerabilities" ? "text-sidebar-primary" : "text-muted-foreground")} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => handleNavClick("fim")}>
                            <FileSearch className={cn("h-5 w-5", currentPage === "fim" ? "text-sidebar-primary" : "text-muted-foreground")} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => handleNavClick("syscollector")}>
                            <MonitorSpeaker className={cn("h-5 w-5", currentPage === "syscollector" ? "text-sidebar-primary" : "text-muted-foreground")} />
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-1">
                        {/* Main */}
                        <div className="mb-4">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Main
                            </p>
                            <button onClick={() => handleNavClick("overview")} className="w-full">
                                <NavItem icon={<Home className="h-4 w-4" />} label="Overview" isActive={currentPage === "overview"} />
                            </button>
                            <NavItem icon={<Search className="h-4 w-4" />} label="Explore" />
                        </div>

                        {/* Endpoint Security */}
                        <div className="mb-4">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Endpoint Security
                            </p>
                            <button onClick={() => handleNavClick("endpoints")} className="w-full">
                                <NavItem icon={<Server className="h-4 w-4" />} label="Endpoints" isActive={currentPage === "endpoints"} />
                            </button>
                            <button onClick={() => handleNavClick("fim")} className="w-full">
                                <NavItem icon={<FileSearch className="h-4 w-4" />} label="File Integrity" isActive={currentPage === "fim"} />
                            </button>
                            <button onClick={() => handleNavClick("syscollector")} className="w-full">
                                <NavItem icon={<MonitorSpeaker className="h-4 w-4" />} label="System Inventory" isActive={currentPage === "syscollector"} />
                            </button>
                            <NavItem icon={<Bug className="h-4 w-4" />} label="Malware Detection" />
                            <NavItem icon={<Settings className="h-4 w-4" />} label="Configuration" />
                        </div>

                        {/* Threat Intelligence */}
                        <div className="mb-4">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Threat Intelligence
                            </p>
                            <button onClick={() => handleNavClick("threats")} className="w-full">
                                <NavItem icon={<Target className="h-4 w-4" />} label="Threat Hunting" isActive={currentPage === "threats"} />
                            </button>
                            <button onClick={() => handleNavClick("vulnerabilities")} className="w-full">
                                <NavItem icon={<ShieldAlert className="h-4 w-4" />} label="Vulnerabilities" isActive={currentPage === "vulnerabilities"} />
                            </button>
                            <NavItem icon={<Activity className="h-4 w-4" />} label="MITRE ATT&CK" />
                        </div>

                        {/* Compliance */}
                        <div className="mb-4">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Compliance
                            </p>
                            <NavItem icon={<ShieldCheck className="h-4 w-4" />} label="PCI DSS" />
                            <NavItem icon={<Lock className="h-4 w-4" />} label="GDPR" />
                            <NavItem icon={<FileWarning className="h-4 w-4" />} label="HIPAA" />
                        </div>

                        {/* Cloud Security */}
                        <div className="mb-4">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Cloud Security
                            </p>
                            <NavItem icon={<Container className="h-4 w-4" />} label="Docker" />
                            <NavItem icon={<Cloud className="h-4 w-4" />} label="AWS" />
                            <NavItem icon={<Globe className="h-4 w-4" />} label="Google Cloud" />
                        </div>

                        {/* Management */}
                        <div className="mb-4">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Management
                            </p>
                            <NavItem icon={<Users className="h-4 w-4" />} label="Agents" />
                            <NavItem icon={<Database className="h-4 w-4" />} label="Indexer" />
                            <NavItem icon={<BarChart3 className="h-4 w-4" />} label="Reports" />
                        </div>
                    </div>
                )}
            </nav>

            {/* Footer */}
            {!isCollapsed && (
                <div className="border-t border-sidebar-border p-4">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-sidebar-primary/20 flex items-center justify-center">
                            <span className="text-xs font-bold text-sidebar-primary">A</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-sidebar-foreground truncate">
                                {typeof window !== "undefined" ? localStorage.getItem("horus_user") || "Admin" : "Admin"}
                            </p>
                            <p className="text-xs text-muted-foreground">Administrador</p>
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
