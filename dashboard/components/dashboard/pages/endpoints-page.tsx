"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/dashboard/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, RefreshCw, MoreHorizontal, Eye, Trash2, Info, Copy, Check } from "lucide-react"
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { getAgents, getAgent } from "@/lib/api"


interface Agent {
    id: string
    name: string
    ip: string
    groups: string[]
    os: string
    cluster: string
    version: string
    status: "active" | "disconnected" | "pending" | "never_connected"
    enrolled_at?: string
    last_seen?: number
}

const StatusBadge = ({ status }: { status: Agent["status"] }) => {
    const statusConfig = {
        active: { label: "Active", className: "bg-success/20 text-success" },
        disconnected: { label: "Disconnected", className: "bg-high/20 text-high" },
        pending: { label: "Pending", className: "bg-medium/20 text-medium" },
        never_connected: { label: "Never connected", className: "bg-muted text-muted-foreground" },
    }

    const config = statusConfig[status]

    return (
        <Badge variant="outline" className={config.className}>
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
            {config.label}
        </Badge>
    )
}

function DonutChart({
    data,
    title,
}: {
    data: { name: string; value: number; color: string }[]
    title: string
}) {
    const total = data.reduce((acc, item) => acc + item.value, 0)

    return (
        <Card className="border-border bg-card">
            <CardHeader className="pb-2">
                <CardTitle className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center gap-4">
                    <div className="relative h-28 w-28">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data.filter((d) => d.value > 0)}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={30}
                                    outerRadius={50}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {data
                                        .filter((d) => d.value > 0)
                                        .map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-foreground">{total}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        {data
                            .filter((d) => d.value > 0)
                            .slice(0, 4)
                            .map((item) => (
                                <div key={item.name} className="flex items-center gap-2 text-xs">
                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-muted-foreground">{item.name}</span>
                                    <span className="font-medium text-foreground">({item.value})</span>
                                </div>
                            ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

// Agent Detail Row helper
function DetailRow({ label, value }: { label: string; value: string | React.ReactNode }) {
    return (
        <div className="flex items-start justify-between border-b border-border/50 py-2.5 last:border-0">
            <span className="text-sm font-medium text-muted-foreground">{label}</span>
            <span className="text-sm text-foreground text-right max-w-[60%]">{value}</span>
        </div>
    )
}

export function EndpointsPage() {
    const [agents, setAgents] = useState<Agent[]>([])
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)

    // Dialog states
    const [detailAgent, setDetailAgent] = useState<Agent | null>(null)
    const [detailOpen, setDetailOpen] = useState(false)
    const [deployOpen, setDeployOpen] = useState(false)
    const [removeAgent, setRemoveAgent] = useState<Agent | null>(null)
    const [removeOpen, setRemoveOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const fetchAgents = useCallback(async () => {
        try {
            const res = await getAgents()
            if (res && Array.isArray(res)) {
                const agentList: Agent[] = res.map((data: any) => ({
                    id: data.agent_id || data.id || "—",
                    name: data.hostname || data.name || data.agent_id || "—",
                    ip: data.ip || "—",
                    groups: data.groups || ["Default"],
                    os: typeof data.os === "object" ? `${data.os?.platform || ""} ${data.os?.platform_release || ""}`.trim() || "Unknown" : (data.os || "Unknown"),
                    cluster: data.cluster || "node01",
                    version: data.version || "0.1.0",
                    status: (data.status === "active" ? "active" : "disconnected") as Agent["status"],
                    enrolled_at: data.enrolled_at || "—",
                    last_seen: data.last_seen || 0,
                }))
                setAgents(agentList)
            }
        } catch {
            // Keep empty state
        } finally {
            setLoading(false)
        }
    }, [])

    const handleRefresh = useCallback(async () => {
        setRefreshing(true)
        await fetchAgents()
        setTimeout(() => setRefreshing(false), 600)
    }, [fetchAgents])

    const handleViewDetails = useCallback(async (agent: Agent) => {
        // Try to get fresh data from server
        try {
            const fresh = await getAgent(agent.id)
            if (fresh) {
                setDetailAgent({
                    id: fresh.agent_id || agent.id,
                    name: fresh.hostname || fresh.name || agent.name,
                    ip: fresh.ip || agent.ip,
                    groups: fresh.groups || agent.groups,
                    os: fresh.os || agent.os,
                    cluster: fresh.cluster || agent.cluster,
                    version: fresh.version || agent.version,
                    status: (fresh.status === "active" ? "active" : "disconnected") as Agent["status"],
                    enrolled_at: fresh.enrolled_at || agent.enrolled_at,
                    last_seen: fresh.last_seen || agent.last_seen,
                })
            } else {
                setDetailAgent(agent)
            }
        } catch {
            setDetailAgent(agent)
        }
        setDetailOpen(true)
    }, [])

    const handleRemoveAgent = useCallback(async () => {
        if (!removeAgent) return
        try {
            await fetch(`http://localhost:5001/api/agents/${removeAgent.id}`, {
                method: "DELETE",
            })
        } catch {
            // Server may not support DELETE yet, that's OK
        }
        setRemoveOpen(false)
        setRemoveAgent(null)
        handleRefresh()
    }, [removeAgent, handleRefresh])

    const handleCopyId = useCallback((id: string) => {
        navigator.clipboard.writeText(id)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }, [])

    useEffect(() => {
        fetchAgents()
        const interval = setInterval(fetchAgents, 15000)
        return () => clearInterval(interval)
    }, [fetchAgents])

    // Build chart data from agents
    const statusData = [
        { name: "Active", value: agents.filter(a => a.status === "active").length, color: "hsl(145, 70%, 50%)" },
        { name: "Disconnected", value: agents.filter(a => a.status === "disconnected").length, color: "hsl(25, 90%, 55%)" },
        { name: "Pending", value: agents.filter(a => a.status === "pending").length, color: "hsl(45, 90%, 55%)" },
    ]

    // Count OS distribution
    const osCounts: Record<string, number> = {}
    agents.forEach(a => { osCounts[a.os] = (osCounts[a.os] || 0) + 1 })
    const osColors = ["hsl(250, 70%, 60%)", "hsl(165, 70%, 50%)", "hsl(45, 90%, 55%)", "hsl(25, 90%, 55%)", "hsl(300, 50%, 50%)"]
    const osData = Object.entries(osCounts).slice(0, 5).map(([name, value], i) => ({
        name, value, color: osColors[i % osColors.length]
    }))

    // Count group distribution
    const groupCounts: Record<string, number> = {}
    agents.forEach(a => a.groups.forEach(g => { groupCounts[g] = (groupCounts[g] || 0) + 1 }))
    const groupColors = ["hsl(145, 70%, 50%)", "hsl(250, 70%, 60%)", "hsl(45, 90%, 55%)", "hsl(0, 0%, 50%)"]
    const groupsData = Object.entries(groupCounts).slice(0, 5).map(([name, value], i) => ({
        name, value, color: groupColors[i % groupColors.length]
    }))

    const formatLastSeen = (ts: number | undefined) => {
        if (!ts) return "Never"
        const diff = Date.now() / 1000 - ts
        if (diff < 60) return `${Math.floor(diff)}s ago`
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
        return `${Math.floor(diff / 86400)}d ago`
    }

    const columns = [
        {
            key: "id",
            header: "ID",
            render: (agent: Agent) => (
                <span className="font-mono text-muted-foreground">{agent.id}</span>
            ),
        },
        {
            key: "name",
            header: "Name",
            render: (agent: Agent) => (
                <button
                    className="font-medium text-info hover:underline cursor-pointer"
                    onClick={() => handleViewDetails(agent)}
                >
                    {agent.name}
                </button>
            ),
        },
        {
            key: "ip",
            header: "IP Address",
            render: (agent: Agent) => (
                <span className="font-mono text-sm">{agent.ip}</span>
            ),
        },
        {
            key: "groups",
            header: "Group(s)",
            render: (agent: Agent) => (
                <div className="flex gap-1">
                    {agent.groups.map((group) => (
                        <Badge
                            key={group}
                            variant="outline"
                            className="border-border bg-muted text-foreground"
                        >
                            {group}
                        </Badge>
                    ))}
                </div>
            ),
        },
        {
            key: "os",
            header: "Operating System",
            render: (agent: Agent) => (
                <span className="text-sm">{String(agent.os)}</span>
            ),
        },
        {
            key: "cluster",
            header: "Cluster Node",
        },
        {
            key: "version",
            header: "Version",
        },
        {
            key: "status",
            header: "Status",
            render: (agent: Agent) => <StatusBadge status={agent.status} />,
        },
        {
            key: "actions",
            header: "Actions",
            render: (agent: Agent) => (
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => handleViewDetails(agent)}
                    >
                        <Eye className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-card border-border">
                            <DropdownMenuItem
                                className="text-foreground cursor-pointer"
                                onClick={() => handleViewDetails(agent)}
                            >
                                <Eye className="mr-2 h-4 w-4" />
                                View details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="text-foreground cursor-pointer"
                                onClick={() => handleCopyId(agent.id)}
                            >
                                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                                Copy agent ID
                            </DropdownMenuItem>
                            <div className="my-1 h-px bg-border" />
                            <DropdownMenuItem
                                className="text-critical cursor-pointer"
                                onClick={() => {
                                    setRemoveAgent(agent)
                                    setRemoveOpen(true)
                                }}
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Remove agent
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ),
        },
    ]

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Summary Charts */}
            <div className="grid gap-4 md:grid-cols-3">
                <DonutChart data={statusData} title="Agents by Status" />
                <DonutChart data={osData.length > 0 ? osData : [{ name: "No data", value: 1, color: "hsl(0, 0%, 40%)" }]} title="Top 5 OS" />
                <DonutChart data={groupsData.length > 0 ? groupsData : [{ name: "No data", value: 1, color: "hsl(0, 0%, 40%)" }]} title="Top 5 Groups" />
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">
                    Agents ({agents.length})
                </h2>
                <div className="flex items-center gap-2">
                    <Button
                        className="gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                        onClick={() => setDeployOpen(true)}
                    >
                        <Plus className="h-4 w-4" />
                        Deploy new agent
                    </Button>
                    <Button
                        variant="outline"
                        className="gap-2 border-border bg-muted text-foreground"
                        onClick={handleRefresh}
                        disabled={refreshing}
                    >
                        <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Agents Table */}
            <DataTable
                data={agents}
                columns={columns}
                totalItems={agents.length}
                showFilters
                showExport
            />

            {/* ===== Agent Detail Dialog ===== */}
            <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
                <DialogContent className="bg-card border-border sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="text-foreground flex items-center gap-2">
                            <Info className="h-5 w-5 text-info" />
                            Agent Details
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                            Full information for this endpoint agent.
                        </DialogDescription>
                    </DialogHeader>
                    {detailAgent && (
                        <div className="mt-2 space-y-0">
                            <DetailRow label="Agent ID" value={
                                <span className="font-mono">{detailAgent.id}</span>
                            } />
                            <DetailRow label="Hostname" value={detailAgent.name} />
                            <DetailRow label="IP Address" value={
                                <span className="font-mono">{detailAgent.ip}</span>
                            } />
                            <DetailRow label="Operating System" value={detailAgent.os} />
                            <DetailRow label="Version" value={detailAgent.version} />
                            <DetailRow label="Cluster Node" value={detailAgent.cluster} />
                            <DetailRow label="Groups" value={
                                <div className="flex gap-1 flex-wrap justify-end">
                                    {detailAgent.groups.map(g => (
                                        <Badge key={g} variant="outline" className="border-border bg-muted text-foreground">
                                            {g}
                                        </Badge>
                                    ))}
                                </div>
                            } />
                            <DetailRow label="Status" value={<StatusBadge status={detailAgent.status} />} />
                            <DetailRow label="Enrolled At" value={detailAgent.enrolled_at || "—"} />
                            <DetailRow label="Last Seen" value={formatLastSeen(detailAgent.last_seen)} />
                        </div>
                    )}
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDetailOpen(false)}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* ===== Deploy Agent Dialog ===== */}
            <Dialog open={deployOpen} onOpenChange={setDeployOpen}>
                <DialogContent className="bg-card border-border sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="text-foreground flex items-center gap-2">
                            <Plus className="h-5 w-5 text-success" />
                            Deploy New Agent
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                            Follow these steps to connect a new agent to this Horus SIEM server.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-2 space-y-4">
                        <div className="rounded-lg border border-border bg-muted/50 p-4">
                            <p className="text-sm font-medium text-foreground mb-2">1. Clone the agent</p>
                            <code className="block rounded bg-background px-3 py-2 text-xs font-mono text-muted-foreground">
                                git clone &lt;repo-url&gt; &amp;&amp; cd agents
                            </code>
                        </div>
                        <div className="rounded-lg border border-border bg-muted/50 p-4">
                            <p className="text-sm font-medium text-foreground mb-2">2. Configure server connection</p>
                            <code className="block rounded bg-background px-3 py-2 text-xs font-mono text-muted-foreground">
                                {`"server": { "host": "<server-ip>", "enrollment_port": 5001, "ingestion_port": 5001 }`}
                            </code>
                        </div>
                        <div className="rounded-lg border border-border bg-muted/50 p-4">
                            <p className="text-sm font-medium text-foreground mb-2">3. Start the agent</p>
                            <code className="block rounded bg-background px-3 py-2 text-xs font-mono text-muted-foreground">
                                pip install -r requirements.txt &amp;&amp; python main.py
                            </code>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDeployOpen(false)}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* ===== Remove Agent Confirmation Dialog ===== */}
            <Dialog open={removeOpen} onOpenChange={setRemoveOpen}>
                <DialogContent className="bg-card border-border sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-foreground flex items-center gap-2">
                            <Trash2 className="h-5 w-5 text-critical" />
                            Remove Agent
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                            Are you sure you want to remove agent{" "}
                            <strong className="text-foreground">{removeAgent?.name}</strong>
                            {" "}({removeAgent?.id})? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="gap-2">
                        <Button variant="outline" onClick={() => setRemoveOpen(false)}>
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleRemoveAgent}
                        >
                            Remove
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
