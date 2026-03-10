"use client"

import { useState, useEffect } from "react"
import { LoginPage } from "@/components/dashboard/pages/login-page"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { OverviewPage } from "@/components/dashboard/pages/overview-page"
import { EndpointsPage } from "@/components/dashboard/pages/endpoints-page"
import { FIMPage } from "@/components/dashboard/pages/fim-page"
import { VulnerabilitiesPage } from "@/components/dashboard/pages/vulnerabilities-page"
import { ThreatsPage } from "@/components/dashboard/pages/threats-page"
import { SyscollectorPage } from "@/components/dashboard/pages/syscollector-page"

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
}

export default function SecurityDashboard() {
    const [authenticated, setAuthenticated] = useState(false)
    const [checkingAuth, setCheckingAuth] = useState(true)
    const [currentPage, setCurrentPage] = useState("overview")
    const config = pageConfig[currentPage] || pageConfig.overview

    // Check for existing session on mount
    useEffect(() => {
        const token = localStorage.getItem("horus_token")
        if (token) {
            // Verify the token is still valid
            fetch("http://172.21.89.249:5001/api/auth/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    if (res.ok) {
                        setAuthenticated(true)
                    } else {
                        localStorage.removeItem("horus_token")
                        localStorage.removeItem("horus_user")
                    }
                })
                .catch(() => {
                    // Server unreachable — clear stale token
                    localStorage.removeItem("horus_token")
                    localStorage.removeItem("horus_user")
                })
                .finally(() => setCheckingAuth(false))
        } else {
            setCheckingAuth(false)
        }
    }, [])

    const handleLogin = (token: string) => {
        setAuthenticated(true)
    }

    const handleLogout = () => {
        const token = localStorage.getItem("horus_token")
        if (token) {
            fetch("http://172.21.89.249:5001/api/auth/logout", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            }).catch(() => { })
        }
        localStorage.removeItem("horus_token")
        localStorage.removeItem("horus_user")
        setAuthenticated(false)
    }

    // Show nothing while checking auth
    if (checkingAuth) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-sidebar-primary border-t-transparent" />
            </div>
        )
    }

    // Show login page if not authenticated
    if (!authenticated) {
        return <LoginPage onLogin={handleLogin} />
    }

    const renderPage = () => {
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
            default:
                return <OverviewPage />
        }
    }

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} onLogout={handleLogout} />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header title={config.title} breadcrumbs={config.breadcrumbs} />
                <main className="flex-1 overflow-y-auto">{renderPage()}</main>
            </div>
        </div>
    )
}
