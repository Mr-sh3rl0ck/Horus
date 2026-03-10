"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { SeverityBadge } from "@/components/dashboard/severity-badge"
import {
    Shield,
    Server,
    AlertTriangle,
    FileSearch,
    Bug,
    Target,
    ShieldCheck,
    Container,
    Cloud,
    Lock,
    ExternalLink,
    Loader2,
} from "lucide-react"
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts"
import { getStats, getAgents, getAlerts } from "@/lib/api"

// Fallback mock data
const defaultAgentData = [
    { name: "Active", value: 0, color: "hsl(145, 70%, 50%)" },
    { name: "Disconnected", value: 0, color: "hsl(25, 90%, 55%)" },
    { name: "Pending", value: 0, color: "hsl(45, 90%, 55%)" },
]

const defaultAlertsData = [
    { time: "00:00", count: 0 },
    { time: "04:00", count: 0 },
    { time: "08:00", count: 0 },
    { time: "12:00", count: 0 },
    { time: "16:00", count: 0 },
    { time: "20:00", count: 0 },
    { time: "Now", count: 0 },
]

const moduleCards = [
    {
        title: "Configuration Assessment",
        description: "Scan your assets as part of a configuration assessment audit.",
        icon: ShieldCheck,
        category: "Endpoint Security",
    },
    {
        title: "Malware Detection",
        description: "Check indicators of compromise triggered by malware infections.",
        icon: Bug,
        category: "Endpoint Security",
    },
    {
        title: "File Integrity Monitoring",
        description: "Alerts related to file changes, including permissions and attributes.",
        icon: FileSearch,
        category: "Endpoint Security",
    },
    {
        title: "Threat Hunting",
        description: "Browse through your security alerts, identifying threats in your environment.",
        icon: Target,
        category: "Threat Intelligence",
    },
    {
        title: "Vulnerability Detection",
        description: "Discover what applications are affected by well-known vulnerabilities.",
        icon: AlertTriangle,
        category: "Threat Intelligence",
    },
    {
        title: "MITRE ATT&CK",
        description: "Explore security alerts mapped to adversary tactics and techniques.",
        icon: Shield,
        category: "Threat Intelligence",
    },
    {
        title: "Docker",
        description: "Monitor and collect activity from Docker containers.",
        icon: Container,
        category: "Cloud Security",
    },
    {
        title: "Amazon Web Services",
        description: "Security events related to your AWS services, collected via AWS API.",
        icon: Cloud,
        category: "Cloud Security",
    },
    {
        title: "PCI DSS",
        description: "Global security standard for entities that process payment cardholder data.",
        icon: Lock,
        category: "Compliance",
    },
]

interface StatsData {
    total_alerts: number
    critical: number
    high: number
    medium: number
    low: number
    last_24h: number
    agents_total: number
    agents_active: number
}

export function OverviewPage() {
    const [stats, setStats] = useState<StatsData | null>(null)
    const [agentData, setAgentData] = useState(defaultAgentData)
    const [alertsData, setAlertsData] = useState(defaultAlertsData)
    const [loading, setLoading] = useState(true)
    const [serverOnline, setServerOnline] = useState(false)

    const fetchData = useCallback(async () => {
        try {
            const [statsRes, agentsRes] = await Promise.all([
                getStats().catch(() => null),
                getAgents().catch(() => null),
            ])

            if (statsRes) {
                setStats(statsRes)
                setServerOnline(true)

                setAlertsData([
                    { time: "00:00", count: 0 },
                    { time: "04:00", count: 0 },
                    { time: "08:00", count: 0 },
                    { time: "12:00", count: 0 },
                    { time: "16:00", count: 0 },
                    { time: "20:00", count: 0 },
                    { time: "Now", count: statsRes.last_24h || 0 },
                ])
            }

            if (agentsRes && Array.isArray(agentsRes)) {
                const active = agentsRes.filter((a: any) => a.status === "active").length
                const disconnected = agentsRes.filter((a: any) => a.status !== "active").length
                setAgentData([
                    { name: "Active", value: active, color: "hsl(145, 70%, 50%)" },
                    { name: "Disconnected", value: disconnected, color: "hsl(25, 90%, 55%)" },
                    { name: "Pending", value: 0, color: "hsl(45, 90%, 55%)" },
                ])
            }
        } catch {
            setServerOnline(false)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
        const interval = setInterval(fetchData, 15000)
        return () => clearInterval(interval)
    }, [fetchData])

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Connection banner */}
            {!loading && !serverOnline && (
                <div className="rounded-lg border border-medium/30 bg-medium/10 px-4 py-2 text-sm text-medium">
                    ⚠️ Server offline — no data available
                </div>
            )}

            {/* Top Stats Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Endpoints"
                    value={stats?.agents_total ?? 16}
                    subtitle={`${stats?.agents_active ?? 12} active`}
                    icon={<Server className="h-5 w-5" />}
                    trend={{ value: 12, isPositive: true }}
                />
                <StatsCard
                    title="Active Alerts"
                    value={stats?.total_alerts ?? 47}
                    subtitle="Last 24 hours"
                    icon={<AlertTriangle className="h-5 w-5" />}
                    trend={{ value: 8, isPositive: false }}
                    variant="high"
                />
                <StatsCard
                    title="Critical Alerts"
                    value={stats?.critical ?? 0}
                    subtitle={`${stats?.high ?? 2} high severity`}
                    icon={<Bug className="h-5 w-5" />}
                    variant="critical"
                />
                <StatsCard
                    title="Compliance Score"
                    value="87%"
                    subtitle="PCI DSS"
                    icon={<ShieldCheck className="h-5 w-5" />}
                    trend={{ value: 5, isPositive: true }}
                    variant="success"
                />
            </div>

            {/* Charts Row */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Agents Summary */}
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Agents Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-6">
                            <div className="h-32 w-32">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={agentData.filter(d => d.value > 0)}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={35}
                                            outerRadius={55}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {agentData.filter(d => d.value > 0).map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex flex-col gap-2">
                                {agentData.map((item) => (
                                    <div key={item.name} className="flex items-center gap-2">
                                        <span
                                            className="h-3 w-3 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span className="text-sm text-muted-foreground">
                                            {item.name}
                                        </span>
                                        <span className="font-medium text-foreground">
                                            ({item.value})
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Alerts Timeline */}
                <Card className="border-border bg-card lg:col-span-2">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Last 24 Hours Alerts
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-critical">{stats?.critical ?? 0}</div>
                                <div className="text-xs text-muted-foreground">Critical</div>
                                <div className="text-xs text-muted-foreground">Level 15+</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-high">{stats?.high ?? 2}</div>
                                <div className="text-xs text-muted-foreground">High</div>
                                <div className="text-xs text-muted-foreground">Level 12-14</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-medium">{stats?.medium ?? 30}</div>
                                <div className="text-xs text-muted-foreground">Medium</div>
                                <div className="text-xs text-muted-foreground">Level 7-11</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-low">{stats?.low ?? 15}</div>
                                <div className="text-xs text-muted-foreground">Low</div>
                                <div className="text-xs text-muted-foreground">Level 0-6</div>
                            </div>
                        </div>
                        <div className="h-24">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={alertsData}>
                                    <defs>
                                        <linearGradient id="alertGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="hsl(250, 70%, 60%)" stopOpacity={0.3} />
                                            <stop offset="100%" stopColor="hsl(250, 70%, 60%)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="time"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "hsl(0, 0%, 50%)", fontSize: 10 }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="count"
                                        stroke="hsl(250, 70%, 60%)"
                                        strokeWidth={2}
                                        fill="url(#alertGradient)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Security Modules */}
            <div className="space-y-4">
                {["Endpoint Security", "Threat Intelligence", "Cloud Security", "Compliance"].map(
                    (category) => (
                        <div key={category}>
                            <div className="mb-3 flex items-center gap-4">
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {category}
                                </h3>
                                <div className="h-px flex-1 bg-border" />
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {moduleCards
                                    .filter((card) => card.category === category)
                                    .map((card) => (
                                        <Card
                                            key={card.title}
                                            className="group cursor-pointer border-border bg-card transition-colors hover:border-muted-foreground/50"
                                        >
                                            <CardContent className="flex items-start gap-4 p-4">
                                                <div className="rounded-lg bg-muted p-2.5 text-info group-hover:bg-info/20">
                                                    <card.icon className="h-5 w-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-medium text-foreground">
                                                            {card.title}
                                                        </h4>
                                                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                                                    </div>
                                                    <p className="mt-1 text-sm text-muted-foreground">
                                                        {card.description}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
