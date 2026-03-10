"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { DataTable } from "@/components/dashboard/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Cpu,
    HardDrive,
    MemoryStick,
    Network,
    Package,
    RefreshCw,
    Server,
    Activity,
    MonitorSpeaker,
} from "lucide-react"
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts"
import {
    getAgents,
    getSyscollectorSummary,
    getSyscollectorData,
} from "@/lib/api"

// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------

interface Agent {
    id?: string
    agent_id?: string
    name?: string
    status?: string
}

interface HardwareData {
    cpu: { percent: number; count_logical: number; count_physical: number; freq_current_mhz: number | null }
    memory: { total_bytes: number; available_bytes: number; used_bytes: number; percent: number }
    disk: { total_bytes: number; used_bytes: number; free_bytes: number; percent: number }
}

interface ProcessData {
    pid: number
    name: string
    username: string | null
    exe: string | null
    status: string
    cpu_percent: number
    memory_percent: number
}

interface PortData {
    local_address: string | null
    local_port: number | null
    pid: number | null
    status: string
}

interface PackageData {
    name: string
    version: string | null
    architecture?: string | null
    source?: string
}

interface OsData {
    platform: string
    platform_release: string
    platform_version: string
    architecture: string
    hostname: string
    python_version: string
}

interface SyscollectorSnapshot {
    timestamp?: number
    agent_time_iso?: string
    os?: OsData
    hardware?: HardwareData
    processes?: ProcessData[]
    process_count?: number
    open_ports?: PortData[]
    packages?: PackageData[]
    status?: string
}

interface SummaryData {
    total_agents: number
    agents_with_data: number
    total_processes: number
    total_open_ports: number
    total_packages: number
}

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------

function formatBytes(bytes: number | null | undefined): string {
    if (bytes == null || bytes === 0) return "0 B"
    const k = 1024
    const sizes = ["B", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
}

const StatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, string> = {
        running: "bg-success/20 text-success border-success/30",
        sleeping: "bg-info/20 text-info border-info/30",
        stopped: "bg-critical/20 text-critical border-critical/30",
        zombie: "bg-high/20 text-high border-high/30",
    }
    return (
        <Badge variant="outline" className={map[status] || "bg-muted/20 text-muted-foreground border-muted/30"}>
            {status || "—"}
        </Badge>
    )
}

// Gauge ring component
function GaugeRing({ percent, label, sublabel, color }: { percent: number; label: string; sublabel: string; color: string }) {
    const clamp = Math.min(100, Math.max(0, percent))
    const radius = 42
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (clamp / 100) * circumference

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative h-28 w-28">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                    <circle cx="50" cy="50" r={radius} fill="none" stroke="hsl(0,0%,20%)" strokeWidth="8" />
                    <circle
                        cx="50" cy="50" r={radius} fill="none"
                        stroke={color} strokeWidth="8" strokeLinecap="round"
                        strokeDasharray={circumference} strokeDashoffset={offset}
                        className="transition-all duration-700"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-foreground">{clamp.toFixed(1)}%</span>
                </div>
            </div>
            <span className="text-sm font-medium text-foreground">{label}</span>
            <span className="text-xs text-muted-foreground">{sublabel}</span>
        </div>
    )
}

// ------------------------------------------------------------------
// Page component
// ------------------------------------------------------------------

export function SyscollectorPage() {
    const [agents, setAgents] = useState<Agent[]>([])
    const [selectedAgent, setSelectedAgent] = useState<string>("")
    const [summary, setSummary] = useState<SummaryData>({ total_agents: 0, agents_with_data: 0, total_processes: 0, total_open_ports: 0, total_packages: 0 })
    const [snapshot, setSnapshot] = useState<SyscollectorSnapshot | null>(null)
    const [loading, setLoading] = useState(true)
    const [serverOnline, setServerOnline] = useState(false)

    // Fetch agents list + summary
    const fetchBase = useCallback(async () => {
        try {
            const [agentsRes, summaryRes] = await Promise.all([
                getAgents().catch(() => null),
                getSyscollectorSummary().catch(() => null),
            ])

            if (agentsRes && Array.isArray(agentsRes)) {
                const mapped = agentsRes.map((a: any) => ({
                    id: a.agent_id || a.id,
                    agent_id: a.agent_id || a.id,
                    name: a.name || a.hostname || a.agent_id,
                    status: a.status,
                }))
                setAgents(mapped)
                setServerOnline(true)

                // Auto-select first agent if none selected
                if (!selectedAgent && mapped.length > 0) {
                    setSelectedAgent(mapped[0].agent_id || "")
                }
            }

            if (summaryRes) {
                setSummary(summaryRes)
                setServerOnline(true)
            }
        } catch {
            setServerOnline(false)
        } finally {
            setLoading(false)
        }
    }, [selectedAgent])

    // Fetch snapshot for selected agent
    const fetchSnapshot = useCallback(async () => {
        if (!selectedAgent) return
        try {
            const res = await getSyscollectorData(selectedAgent)
            if (res && res.status !== "no_data") {
                setSnapshot(res)
            } else {
                setSnapshot(null)
            }
        } catch {
            setSnapshot(null)
        }
    }, [selectedAgent])

    useEffect(() => {
        fetchBase()
        const interval = setInterval(fetchBase, 30000)
        return () => clearInterval(interval)
    }, [fetchBase])

    useEffect(() => {
        fetchSnapshot()
    }, [fetchSnapshot])

    const refreshAll = () => {
        fetchBase()
        fetchSnapshot()
    }

    // Derived data
    const hw = snapshot?.hardware || null
    const os = snapshot?.os || null
    const processes = snapshot?.processes || []
    const ports = snapshot?.open_ports || []
    const packages = snapshot?.packages || []

    // Process status distribution for pie chart
    const statusCounts: Record<string, number> = {}
    processes.forEach(p => {
        const s = p.status || "unknown"
        statusCounts[s] = (statusCounts[s] || 0) + 1
    })
    const statusPieData = Object.entries(statusCounts).map(([name, value]) => {
        const colorMap: Record<string, string> = {
            running: "hsl(145, 70%, 50%)",
            sleeping: "hsl(210, 70%, 55%)",
            stopped: "hsl(0, 70%, 55%)",
            zombie: "hsl(35, 90%, 55%)",
        }
        return { name, value, color: colorMap[name] || "hsl(0, 0%, 50%)" }
    })

    // Top 10 processes by memory
    const topProcs = [...processes].sort((a, b) => (b.memory_percent || 0) - (a.memory_percent || 0)).slice(0, 10)
    const topProcsBarData = topProcs.map(p => ({ name: p.name.slice(0, 15), mem: p.memory_percent, cpu: p.cpu_percent }))

    // Table columns
    const processColumns = [
        { key: "pid", header: "PID", render: (item: ProcessData) => <span className="font-mono text-sm text-foreground">{item.pid}</span> },
        { key: "name", header: "Name", render: (item: ProcessData) => <span className="font-medium text-info">{item.name}</span> },
        { key: "username", header: "User", render: (item: ProcessData) => <span className="text-sm text-muted-foreground">{item.username || "—"}</span> },
        { key: "status", header: "Status", render: (item: ProcessData) => <StatusBadge status={item.status} /> },
        { key: "cpu_percent", header: "CPU %", render: (item: ProcessData) => <span className="font-mono text-sm">{(item.cpu_percent || 0).toFixed(1)}%</span> },
        { key: "memory_percent", header: "Mem %", render: (item: ProcessData) => <span className="font-mono text-sm">{(item.memory_percent || 0).toFixed(1)}%</span> },
    ]

    const portColumns = [
        { key: "local_address", header: "Address", render: (item: PortData) => <span className="font-mono text-sm text-foreground">{item.local_address || "0.0.0.0"}</span> },
        { key: "local_port", header: "Port", render: (item: PortData) => <span className="font-mono text-sm font-semibold text-info">{item.local_port}</span> },
        { key: "pid", header: "PID", render: (item: PortData) => <span className="font-mono text-sm text-muted-foreground">{item.pid || "—"}</span> },
        { key: "status", header: "Status", render: (item: PortData) => <Badge variant="outline" className="bg-success/20 text-success border-success/30">{item.status}</Badge> },
    ]

    const packageColumns = [
        { key: "name", header: "Package", render: (item: PackageData) => <span className="font-medium text-foreground">{item.name}</span> },
        { key: "version", header: "Version", render: (item: PackageData) => <span className="font-mono text-sm text-muted-foreground">{item.version || "—"}</span> },
        { key: "architecture", header: "Arch", render: (item: PackageData) => <span className="text-sm text-muted-foreground">{item.architecture || "—"}</span> },
        { key: "source", header: "Source", render: (item: PackageData) => <Badge variant="outline" className="bg-info/20 text-info border-info/30">{item.source || "—"}</Badge> },
    ]

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Connection banner */}
            {!loading && !serverOnline && (
                <div className="rounded-lg border border-medium/30 bg-medium/10 px-4 py-2 text-sm text-medium">
                    ⚠️ Server offline — no data available
                </div>
            )}

            {/* Agent selector + refresh */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-semibold text-foreground">System Inventory</h2>
                    <select
                        value={selectedAgent}
                        onChange={(e) => setSelectedAgent(e.target.value)}
                        className="rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-primary"
                    >
                        {agents.length === 0 && <option value="">No agents</option>}
                        {agents.map((a) => (
                            <option key={a.agent_id} value={a.agent_id}>
                                {a.name} ({a.agent_id})
                            </option>
                        ))}
                    </select>
                </div>
                <Button variant="outline" className="gap-2 border-border bg-muted text-foreground" onClick={refreshAll}>
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                </Button>
            </div>

            {/* No data banner */}
            {!loading && serverOnline && !snapshot && (
                <div className="rounded-lg border border-info/30 bg-info/10 px-4 py-3 text-sm text-info">
                    ℹ️ No syscollector data for this agent yet. The agent sends inventory every ~5 minutes.
                </div>
            )}

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="border-border bg-muted">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="processes">Processes ({processes.length})</TabsTrigger>
                    <TabsTrigger value="network">Network ({ports.length})</TabsTrigger>
                    <TabsTrigger value="packages">Packages ({packages.length})</TabsTrigger>
                </TabsList>

                {/* ============ OVERVIEW TAB ============ */}
                <TabsContent value="overview" className="mt-6">
                    {/* Summary stats */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <StatsCard
                            title="Agents Reporting"
                            value={`${summary.agents_with_data} / ${summary.total_agents}`}
                            subtitle="With inventory data"
                            icon={<Server className="h-5 w-5" />}
                        />
                        <StatsCard
                            title="Total Processes"
                            value={snapshot?.process_count ?? summary.total_processes}
                            subtitle={selectedAgent ? "Selected agent" : "All agents"}
                            icon={<Activity className="h-5 w-5" />}
                            variant="success"
                        />
                        <StatsCard
                            title="Open Ports"
                            value={ports.length || summary.total_open_ports}
                            subtitle="LISTEN connections"
                            icon={<Network className="h-5 w-5" />}
                            variant="high"
                        />
                        <StatsCard
                            title="Installed Packages"
                            value={packages.length || summary.total_packages}
                            subtitle={selectedAgent ? "Selected agent" : "All agents"}
                            icon={<Package className="h-5 w-5" />}
                        />
                    </div>

                    {/* OS Info card */}
                    {os && (
                        <div className="mt-6">
                            <Card className="border-border bg-card">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        Operating System
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                                        <div>
                                            <div className="text-xs text-muted-foreground">Platform</div>
                                            <div className="font-medium text-foreground">{os.platform}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Release</div>
                                            <div className="font-medium text-foreground">{os.platform_release}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Architecture</div>
                                            <div className="font-medium text-foreground">{os.architecture}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Hostname</div>
                                            <div className="font-medium text-info">{os.hostname}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Python</div>
                                            <div className="font-medium text-foreground">{os.python_version}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Last Scan</div>
                                            <div className="font-medium text-foreground">
                                                {snapshot?.agent_time_iso
                                                    ? new Date(snapshot.agent_time_iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
                                                    : "—"}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Hardware gauges */}
                    {hw && (
                        <div className="mt-6">
                            <Card className="border-border bg-card">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        Hardware Metrics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap items-start justify-around gap-6">
                                        <GaugeRing
                                            percent={hw.cpu?.percent || 0}
                                            label="CPU"
                                            sublabel={`${hw.cpu?.count_physical || "?"} cores / ${hw.cpu?.count_logical || "?"} threads`}
                                            color="hsl(210, 70%, 55%)"
                                        />
                                        <GaugeRing
                                            percent={hw.memory?.percent || 0}
                                            label="RAM"
                                            sublabel={`${formatBytes(hw.memory?.used_bytes)} / ${formatBytes(hw.memory?.total_bytes)}`}
                                            color="hsl(145, 70%, 50%)"
                                        />
                                        <GaugeRing
                                            percent={hw.disk?.percent || 0}
                                            label="Disk"
                                            sublabel={`${formatBytes(hw.disk?.used_bytes)} / ${formatBytes(hw.disk?.total_bytes)}`}
                                            color="hsl(35, 90%, 55%)"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Charts row */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                        {/* Process status distribution */}
                        <Card className="border-border bg-card">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    Process Status Distribution
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-center gap-6">
                                    <div className="relative h-32 w-32">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={statusPieData.filter(d => d.value > 0)}
                                                    cx="50%" cy="50%"
                                                    innerRadius={35} outerRadius={55}
                                                    paddingAngle={2} dataKey="value"
                                                >
                                                    {statusPieData.filter(d => d.value > 0).map((entry, i) => (
                                                        <Cell key={`cell-${i}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg font-bold text-foreground">{processes.length}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {statusPieData.map((item) => (
                                            <div key={item.name} className="flex items-center gap-2 text-sm">
                                                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                                                <span className="text-muted-foreground capitalize">{item.name}</span>
                                                <span className="font-medium text-foreground">({item.value})</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Top processes by memory */}
                        <Card className="border-border bg-card">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    Top 10 Processes by Memory
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={topProcsBarData} layout="vertical" margin={{ left: 60 }}>
                                            <XAxis type="number" axisLine={false} tickLine={false}
                                                tick={{ fill: "hsl(0,0%,50%)", fontSize: 11 }}
                                            />
                                            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false}
                                                tick={{ fill: "hsl(0,0%,50%)", fontSize: 11 }} width={60}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: "hsl(0,0%,14%)",
                                                    border: "1px solid hsl(0,0%,22%)",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                            <Bar dataKey="mem" name="Mem %" fill="hsl(145, 70%, 50%)" radius={[0, 4, 4, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* ============ PROCESSES TAB ============ */}
                <TabsContent value="processes" className="mt-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-foreground">
                            Running Processes ({processes.length})
                        </h2>
                        <Button variant="outline" className="gap-2 border-border bg-muted text-foreground" onClick={refreshAll}>
                            <RefreshCw className="h-4 w-4" />
                            Refresh
                        </Button>
                    </div>
                    <DataTable
                        data={processes as any}
                        columns={processColumns as any}
                        totalItems={processes.length}
                        showFilters
                        showExport
                    />
                </TabsContent>

                {/* ============ NETWORK TAB ============ */}
                <TabsContent value="network" className="mt-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-foreground">
                            Open Ports ({ports.length})
                        </h2>
                        <Button variant="outline" className="gap-2 border-border bg-muted text-foreground" onClick={refreshAll}>
                            <RefreshCw className="h-4 w-4" />
                            Refresh
                        </Button>
                    </div>
                    <DataTable
                        data={ports as any}
                        columns={portColumns as any}
                        totalItems={ports.length}
                        showFilters
                        showExport
                    />
                </TabsContent>

                {/* ============ PACKAGES TAB ============ */}
                <TabsContent value="packages" className="mt-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-foreground">
                            Installed Packages ({packages.length})
                        </h2>
                        <Button variant="outline" className="gap-2 border-border bg-muted text-foreground" onClick={refreshAll}>
                            <RefreshCw className="h-4 w-4" />
                            Refresh
                        </Button>
                    </div>
                    <DataTable
                        data={packages as any}
                        columns={packageColumns as any}
                        totalItems={packages.length}
                        showFilters
                        showExport
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}
