"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { DataTable } from "@/components/dashboard/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileSearch,
  FilePlus,
  FileEdit,
  FileX,
  RefreshCw,
  Shield,
  Clock,
  Files,
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
} from "recharts"
import { getFimEvents, getFimStats } from "@/lib/api"

const emptyFimStats: FimStatsData = {
  total_events: 0,
  created: 0,
  modified: 0,
  deleted: 0,
  last_24h: 0,
  unique_files: 0,
}

interface FimEvent {
  id: string
  timestamp: string
  agent_id: string
  action: string
  path: string
  rule_name: string
  level: number
  hash_current: string
  hash_previous: string
}

interface FimStatsData {
  total_events: number
  created: number
  modified: number
  deleted: number
  last_24h: number
  unique_files: number
}

const ActionBadge = ({ action }: { action: string }) => {
  const config: Record<string, { label: string; className: string; icon: any }> = {
    created: { label: "Created", className: "bg-success/20 text-success border-success/30", icon: FilePlus },
    modified: { label: "Modified", className: "bg-medium/20 text-medium border-medium/30", icon: FileEdit },
    deleted: { label: "Deleted", className: "bg-critical/20 text-critical border-critical/30", icon: FileX },
  }

  const c = config[action] || config.modified
  const Icon = c.icon

  return (
    <Badge variant="outline" className={c.className}>
      <Icon className="mr-1.5 h-3 w-3" />
      {c.label}
    </Badge>
  )
}

const LevelBadge = ({ level }: { level: number }) => {
  const getConfig = () => {
    if (level >= 12) return { className: "bg-critical/20 text-critical border-critical/30" }
    if (level >= 8) return { className: "bg-high/20 text-high border-high/30" }
    if (level >= 4) return { className: "bg-medium/20 text-medium border-medium/30" }
    return { className: "bg-low/20 text-low border-low/30" }
  }
  return (
    <Badge variant="outline" className={getConfig().className}>
      Level {level}
    </Badge>
  )
}

export function FIMPage() {
  const [fimEvents, setFimEvents] = useState<FimEvent[]>([])
  const [stats, setStats] = useState<FimStatsData>(emptyFimStats)
  const [loading, setLoading] = useState(true)
  const [serverOnline, setServerOnline] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const [eventsRes, statsRes] = await Promise.all([
        getFimEvents({ limit: 100 }).catch(() => null),
        getFimStats().catch(() => null),
      ])

      if (statsRes) {
        setStats(statsRes)
        setServerOnline(true)
      }

      if (eventsRes && eventsRes.events && eventsRes.events.length > 0) {
        const events: FimEvent[] = eventsRes.events.map((e: any) => ({
          id: e.id || "—",
          timestamp: e.timestamp
            ? new Date(e.timestamp * 1000).toLocaleString("en-US", {
              month: "short", day: "numeric", year: "numeric",
              hour: "2-digit", minute: "2-digit", second: "2-digit",
            })
            : e.agent_time_iso || "—",
          agent_id: e.agent_id || "unknown",
          action: e.action || "modified",
          path: e.path || "—",
          rule_name: e.rule_name || "File integrity event",
          level: e.level || 5,
          hash_current: "—",
          hash_previous: "—",
        }))
        setFimEvents(events)
        setServerOnline(true)
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

  // Build chart data from stats
  const actionPieData = [
    { name: "Created", value: stats.created, color: "hsl(145, 70%, 50%)" },
    { name: "Modified", value: stats.modified, color: "hsl(45, 90%, 55%)" },
    { name: "Deleted", value: stats.deleted, color: "hsl(0, 70%, 55%)" },
  ]

  // Build a simple timeline from events
  const timelineBuckets: Record<string, number> = {}
  fimEvents.forEach((e) => {
    const hour = e.timestamp.split(",")[1]?.trim().slice(0, 2) || "00"
    timelineBuckets[`${hour}:00`] = (timelineBuckets[`${hour}:00`] || 0) + 1
  })
  const timelineData = Object.entries(timelineBuckets)
    .slice(0, 8)
    .map(([time, count]) => ({ time, count }))

  if (timelineData.length === 0) {
    timelineData.push(
      { time: "00:00", count: 3 },
      { time: "06:00", count: 8 },
      { time: "12:00", count: 12 },
      { time: "18:00", count: 5 },
    )
  }

  const eventsColumns = [
    {
      key: "timestamp",
      header: "Timestamp",
      render: (item: FimEvent) => (
        <span className="text-xs text-muted-foreground">{item.timestamp}</span>
      ),
    },
    {
      key: "agent_id",
      header: "Agent",
      render: (item: FimEvent) => (
        <span className="font-medium text-info">{item.agent_id}</span>
      ),
    },
    {
      key: "action",
      header: "Action",
      render: (item: FimEvent) => <ActionBadge action={item.action} />,
    },
    {
      key: "path",
      header: "File Path",
      render: (item: FimEvent) => (
        <span className="max-w-[300px] truncate font-mono text-sm">{item.path}</span>
      ),
    },
    {
      key: "rule_name",
      header: "Rule",
      render: (item: FimEvent) => (
        <span className="line-clamp-1 max-w-xs text-sm">{item.rule_name}</span>
      ),
    },
    {
      key: "level",
      header: "Level",
      render: (item: FimEvent) => <LevelBadge level={item.level} />,
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Connection banner */}
      {!loading && !serverOnline && (
        <div className="rounded-lg border border-medium/30 bg-medium/10 px-4 py-2 text-sm text-medium">
          ⚠️ Server offline — no data available
        </div>
      )}

      {/* Tabs */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="border-border bg-muted">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-6">
          {/* Stats Row */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total FIM Events"
              value={stats.total_events}
              subtitle={`${stats.last_24h} in last 24h`}
              icon={<FileSearch className="h-5 w-5" />}
            />
            <StatsCard
              title="Files Modified"
              value={stats.modified}
              subtitle="Checksum changes detected"
              icon={<FileEdit className="h-5 w-5" />}
              variant="high"
            />
            <StatsCard
              title="Files Created"
              value={stats.created}
              subtitle="New files in monitored dirs"
              icon={<FilePlus className="h-5 w-5" />}
              variant="success"
            />
            <StatsCard
              title="Files Deleted"
              value={stats.deleted}
              subtitle="Removed from monitored dirs"
              icon={<FileX className="h-5 w-5" />}
              variant="critical"
            />
          </div>

          {/* Charts Row */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* Actions Distribution */}
            <Card className="border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Events by Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center gap-6">
                  <div className="relative h-32 w-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={actionPieData.filter(d => d.value > 0)}
                          cx="50%"
                          cy="50%"
                          innerRadius={35}
                          outerRadius={55}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {actionPieData.filter(d => d.value > 0).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-foreground">{stats.total_events}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {actionPieData.map((item) => (
                      <div key={item.name} className="flex items-center gap-2 text-sm">
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-medium text-foreground">({item.value})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Events Timeline */}
            <Card className="border-border bg-card lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  FIM Events Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timelineData}>
                      <defs>
                        <linearGradient id="fimGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(165, 70%, 50%)" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="hsl(165, 70%, 50%)" stopOpacity={0} />
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
                      />
                      <Area
                        type="monotone"
                        dataKey="count"
                        stroke="hsl(165, 70%, 50%)"
                        strokeWidth={2}
                        fill="url(#fimGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick stats */}
          <div className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Monitoring Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-info">{stats.unique_files}</div>
                    <div className="text-xs text-muted-foreground">Unique Files Monitored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{stats.last_24h}</div>
                    <div className="text-xs text-muted-foreground">Events Last 24h</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">{stats.total_events}</div>
                    <div className="text-xs text-muted-foreground">Total Events</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          {/* Actions Bar */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              FIM Events ({fimEvents.length})
            </h2>
            <Button
              variant="outline"
              className="gap-2 border-border bg-muted text-foreground"
              onClick={fetchData}
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>

          {/* Events Table */}
          <DataTable
            data={fimEvents}
            columns={eventsColumns}
            totalItems={fimEvents.length}
            showFilters
            showExport
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
