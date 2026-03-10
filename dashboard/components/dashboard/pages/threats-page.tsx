"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/dashboard/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, ExternalLink, Filter } from "lucide-react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts"
import { getAlerts } from "@/lib/api"

const emptyTimeline = [
    { time: "00:00", count: 0 },
    { time: "04:00", count: 0 },
    { time: "08:00", count: 0 },
    { time: "12:00", count: 0 },
    { time: "16:00", count: 0 },
    { time: "20:00", count: 0 },
]

interface ThreatEvent {
    timestamp: string
    agent: string
    rule: string
    ruleId: number
    level: number
    tactic: string
    technique: string
    description: string
}



function severityLabel(level: number) {
    if (level >= 12) return "Critical"
    if (level >= 8) return "High"
    if (level >= 4) return "Medium"
    return "Low"
}

function timeAgo(timestamp: number) {
    const diff = Date.now() / 1000 - timestamp
    if (diff < 60) return `${Math.floor(diff)}s ago`
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return `${Math.floor(diff / 86400)}d ago`
}

const LevelBadge = ({ level }: { level: number }) => {
    const getConfig = () => {
        if (level >= 12) return { className: "bg-critical/20 text-critical border-critical/30", label: "Critical" }
        if (level >= 8) return { className: "bg-high/20 text-high border-high/30", label: "High" }
        if (level >= 4) return { className: "bg-medium/20 text-medium border-medium/30", label: "Medium" }
        return { className: "bg-low/20 text-low border-low/30", label: "Low" }
    }

    const config = getConfig()

    return (
        <Badge variant="outline" className={config.className}>
            Level {level}
        </Badge>
    )
}

export function ThreatsPage() {
    const [threatEvents, setThreatEvents] = useState<ThreatEvent[]>([])
    const [eventsTimelineData, setEventsTimelineData] = useState(emptyTimeline)
    const [loading, setLoading] = useState(true)

    const fetchAlerts = useCallback(async () => {
        try {
            const res = await getAlerts({ limit: 50 })
            if (res && res.alerts && res.alerts.length > 0) {
                const events: ThreatEvent[] = res.alerts.map((alert: any) => ({
                    timestamp: alert.timestamp
                        ? new Date(alert.timestamp * 1000).toLocaleString("en-US", {
                            month: "short", day: "numeric", year: "numeric",
                            hour: "2-digit", minute: "2-digit", second: "2-digit",
                        })
                        : "Unknown",
                    agent: alert.agent_id || "unknown",
                    rule: alert.rule_name || "Unknown rule",
                    ruleId: alert.rule_id || 0,
                    level: alert.level || 0,
                    tactic: alert.mitre?.tactic?.[0] || severityLabel(alert.level || 0),
                    technique: alert.mitre?.technique?.[0] || "—",
                    description: alert.rule_description || alert.rule_name || "—",
                }))
                setThreatEvents(events)
            }
        } catch {
            // No fallback — keep empty state
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchAlerts()
        const interval = setInterval(fetchAlerts, 15000)
        return () => clearInterval(interval)
    }, [fetchAlerts])

    const columns = [
        {
            key: "timestamp",
            header: "Timestamp",
            render: (item: ThreatEvent) => (
                <span className="text-xs text-muted-foreground">{item.timestamp}</span>
            ),
        },
        {
            key: "agent",
            header: "Agent",
            render: (item: ThreatEvent) => (
                <span className="font-medium text-info">{item.agent}</span>
            ),
        },
        {
            key: "rule",
            header: "Rule",
            render: (item: ThreatEvent) => (
                <div className="flex flex-col">
                    <span className="font-medium">{item.rule}</span>
                    <span className="text-xs text-muted-foreground">ID: {item.ruleId}</span>
                </div>
            ),
        },
        {
            key: "level",
            header: "Level",
            render: (item: ThreatEvent) => <LevelBadge level={item.level} />,
        },
        {
            key: "tactic",
            header: "MITRE Tactic",
            render: (item: ThreatEvent) => (
                <Badge variant="outline" className="border-info/30 bg-info/10 text-info">
                    {item.tactic}
                </Badge>
            ),
        },
        {
            key: "technique",
            header: "Technique",
            render: (item: ThreatEvent) => (
                <div className="flex items-center gap-1">
                    <span className="font-mono text-sm text-info">{item.technique}</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </div>
            ),
        },
        {
            key: "description",
            header: "Description",
            render: (item: ThreatEvent) => (
                <span className="line-clamp-1 max-w-xs text-sm">{item.description}</span>
            ),
        },
    ]

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Top Charts Row */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Events Timeline */}
                <Card className="border-border bg-card lg:col-span-2">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Events Count Evolution
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={eventsTimelineData}>
                                    <defs>
                                        <linearGradient id="threatGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="hsl(250, 70%, 60%)" stopOpacity={0.3} />
                                            <stop offset="100%" stopColor="hsl(250, 70%, 60%)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="time"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "hsl(0, 0%, 50%)", fontSize: 11 }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "hsl(0, 0%, 50%)", fontSize: 11 }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "hsl(0, 0%, 14%)",
                                            border: "1px solid hsl(0, 0%, 22%)",
                                            borderRadius: "8px",
                                        }}
                                        labelStyle={{ color: "hsl(0, 0%, 95%)" }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="count"
                                        stroke="hsl(250, 70%, 60%)"
                                        strokeWidth={2}
                                        fill="url(#threatGradient)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* MITRE ATT&CK */}
                <Card className="border-border bg-card">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            MITRE ATT&CK
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="mb-2 text-xs font-medium text-muted-foreground">Top Tactics</div>
                        <div className="space-y-2">
                            {threatEvents.length > 0 ? (
                                (() => {
                                    const tacticCounts: Record<string, number> = {}
                                    threatEvents.forEach(e => { tacticCounts[e.tactic] = (tacticCounts[e.tactic] || 0) + 1 })
                                    const colors = ["hsl(250, 70%, 60%)", "hsl(165, 70%, 50%)", "hsl(45, 90%, 55%)", "hsl(25, 90%, 55%)", "hsl(340, 70%, 55%)"]
                                    return Object.entries(tacticCounts)
                                        .sort(([, a], [, b]) => b - a)
                                        .slice(0, 5)
                                        .map(([tactic, count], i) => (
                                            <div key={tactic} className="flex items-center justify-between">
                                                <span className="text-sm text-foreground">{tactic}</span>
                                                <Badge variant="outline" className="border-border bg-muted font-mono">
                                                    {count}
                                                </Badge>
                                            </div>
                                        ))
                                })()
                            ) : (
                                <div className="text-center text-sm text-muted-foreground">
                                    No threat data available
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Second Row */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Compliance */}
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Compliance
                            </CardTitle>
                            <Badge variant="outline" className="border-border text-muted-foreground">
                                PCI DSS
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-center gap-4">
                            <div className="text-center text-sm text-muted-foreground">
                                Compliance data will be computed from real alerts
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="border-border bg-card lg:col-span-2">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Threat Summary (Last 24 hours)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-critical">
                                    {threatEvents.filter(e => e.level >= 12).length}
                                </div>
                                <div className="text-xs text-muted-foreground">Critical Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-high">
                                    {threatEvents.filter(e => e.level >= 8 && e.level < 12).length}
                                </div>
                                <div className="text-xs text-muted-foreground">High Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-medium">
                                    {threatEvents.filter(e => e.level >= 4 && e.level < 8).length}
                                </div>
                                <div className="text-xs text-muted-foreground">Medium Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground">
                                    {new Set(threatEvents.map(e => e.technique)).size}
                                </div>
                                <div className="text-xs text-muted-foreground">Unique Techniques</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">
                    Security Events ({threatEvents.length})
                </h2>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="gap-2 border-border bg-muted text-foreground">
                        <Filter className="h-4 w-4" />
                        Advanced Filters
                    </Button>
                    <Button variant="outline" className="gap-2 border-border bg-muted text-foreground" onClick={fetchAlerts}>
                        <RefreshCw className="h-4 w-4" />
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Events Table */}
            <DataTable
                data={threatEvents}
                columns={columns}
                totalItems={threatEvents.length}
                showFilters
                showExport
            />
        </div>
    )
}
