"use client"

import { useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { canAccess } from "@/lib/permissions"
import { LoginPage } from "@/components/dashboard/pages/login-page"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { OverviewPage } from "@/components/dashboard/pages/overview-page"
import { EndpointsPage } from "@/components/dashboard/pages/endpoints-page"
import { FIMPage } from "@/components/dashboard/pages/fim-page"
import { VulnerabilitiesPage } from "@/components/dashboard/pages/vulnerabilities-page"
import { ThreatsPage } from "@/components/dashboard/pages/threats-page"
import { SyscollectorPage } from "@/components/dashboard/pages/syscollector-page"
import { UsersPage } from "@/components/dashboard/pages/users-page"
import { AdminPanelPage } from "@/components/dashboard/pages/admin-panel-page"
import { useState } from "react"

const pageConfig: Record<string, { title: string; breadcrumbs: { label: string }[] }> = {
    overview: {
        title: "Overview",
        breadcrumbs: [{ label: "Home" }, { label: "Overview" }],
    },
    endpoints: {
        title: "Endpoints",
        breadcrumbs: [{ label: "Home" }, { label: "Endpoint Security" }, { label: "Endpoints" }],
    },
    fim: {
        title: "File Integrity Monitoring",
        breadcrumbs: [{ label: "Home" }, { label: "Endpoint Security" }, { label: "File Integrity" }],
    },
    vulnerabilities: {
        title: "Vulnerability Detection",
        breadcrumbs: [{ label: "Home" }, { label: "Threat Intelligence" }, { label: "Vulnerabilities" }],
    },
    threats: {
        title: "Threat Hunting",
        breadcrumbs: [{ label: "Home" }, { label: "Threat Intelligence" }, { label: "Threat Hunting" }],
    },
    syscollector: {
        title: "System Inventory",
        breadcrumbs: [{ label: "Home" }, { label: "Endpoint Security" }, { label: "System Inventory" }],
    },
    users: {
        title: "Gestión de Usuarios",
        breadcrumbs: [{ label: "Home" }, { label: "Administración" }, { label: "Usuarios" }],
    },
    "admin-panel": {
        title: "Panel de Administración",
        breadcrumbs: [{ label: "Home" }, { label: "Administración" }, { label: "Panel Admin" }],
    },
}

export default function SecurityDashboard() {
    const { user, isAuthenticated, isLoading, login, logout } = useAuth()
    const [currentPage, setCurrentPage] = useState("overview")

    // Redirect to overview if current page is not accessible with the current role
    useEffect(() => {
        if (user && !canAccess(user.role, currentPage as Parameters<typeof canAccess>[1])) {
            setCurrentPage("overview")
        }
    }, [user, currentPage])

    const config = pageConfig[currentPage] ?? pageConfig.overview

    const handleLogin = (token: string, username: string, role: string) => {
        login(token, username, role as Parameters<typeof login>[2])
    }

    // Show spinner while checking auth
    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-sidebar-primary border-t-transparent" />
            </div>
        )
    }

    // Show login page if not authenticated
    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />
    }

    const renderPage = () => {
        // Guard: check access before rendering
        const section = currentPage as Parameters<typeof canAccess>[1]
        if (!canAccess(user?.role, section)) {
            return (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
                    <span className="text-5xl">🔒</span>
                    <p className="text-lg font-medium">Acceso denegado</p>
                    <p className="text-sm">Tu rol no tiene permisos para ver esta sección.</p>
                </div>
            )
        }

        switch (currentPage) {
            case "endpoints":
                return <EndpointsPage />
            case "fim":
                return <FIMPage />
            case "vulnerabilities":
                return <VulnerabilitiesPage />
            case "threats":
                return <ThreatsPage />
            case "syscollector":
                return <SyscollectorPage />
            case "users":
                return <UsersPage />
            case "admin-panel":
                return <AdminPanelPage />
            default:
                return <OverviewPage role={user?.role ?? "viewer"} />
        }
    }

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar
                currentPage={currentPage}
                onNavigate={setCurrentPage}
                onLogout={logout}
                role={user?.role ?? "viewer"}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header title={config.title} breadcrumbs={config.breadcrumbs} />
                <main className="flex-1 overflow-y-auto">{renderPage()}</main>
            </div>
        </div>
    )
}
