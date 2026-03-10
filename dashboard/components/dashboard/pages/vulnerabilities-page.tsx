"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { DataTable } from "@/components/dashboard/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ShieldAlert,
  Bug,
  AlertTriangle,
  Shield,
  RefreshCw,
  ExternalLink,
  Package,
  Server,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts"
import { getVulnerabilities, getVulnerabilityStats } from "@/lib/api"

const emptyVulnStats: VulnStatsData = {
  total_vulnerabilities: 0,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
  affected_agents: 0,
}

interface Vulnerability {
  id: string
  timestamp: string
  agent_id: string
  cve_id: string
  package_name: string
  installed_version: string
  severity: string
  level: number
  description: string
  affected_versions: string
}

interface VulnStatsData {
  total_vulnerabilities: number
  critical: number
  high: number
  medium: number
  low: number
  affected_agents: number
}

const SeverityBadge = ({ severity }: { severity: string }) => {
  const config: Record<string, { className: string }> = {
    critical: { className: "bg-critical/20 text-critical border-critical/30" },
    high: { className: "bg-high/20 text-high border-high/30" },
    medium: { className: "bg-medium/20 text-medium border-medium/30" },
    low: { className: "bg-low/20 text-low border-low/30" },
  }
  const c = config[severity] || config.medium
  return (
    <Badge variant="outline" className={c.className}>
      {severity.charAt(0).toUpperCase() + severity.slice(1)}
    </Badge>
  )
}

export function VulnerabilitiesPage() {
  const [vulns, setVulns] = useState<Vulnerability[]>([])
  const [stats, setStats] = useState<VulnStatsData>(emptyVulnStats)
  const [loading, setLoading] = useState(true)
  const [serverOnline, setServerOnline] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const [vulnsRes, statsRes] = await Promise.all([
        getVulnerabilities({ limit: 100 }).catch(() => null),
        getVulnerabilityStats().catch(() => null),
      ])

      if (statsRes) {
        setStats(statsRes)
        setServerOnline(true)
      }

      if (vulnsRes && vulnsRes.vulnerabilities && vulnsRes.vulnerabilities.length > 0) {
        const items: Vulnerability[] = vulnsRes.vulnerabilities.map((v: any) => ({
          id: v.id || "—",
          timestamp: v.timestamp
            ? new Date(v.timestamp * 1000).toLocaleString("en-US", {
              month: "short", day: "numeric", year: "numeric",
              hour: "2-digit", minute: "2-digit", second: "2-digit",
            })
            : v.agent_time_iso || "—",
          agent_id: v.agent_id || "unknown",
          cve_id: v.vulnerability?.cve_id || v.rule_id || "—",
          package_name: v.vulnerability?.package || v.rule_name?.replace("Vulnerable Package: ", "") || "—",
          installed_version: v.vulnerability?.installed_version || "—",
          severity: v.vulnerability?.severity || (v.level >= 12 ? "critical" : v.level >= 8 ? "high" : v.level >= 4 ? "medium" : "low"),
          level: v.level || 5,
          description: v.rule_description || v.vulnerability?.description || "—",
          affected_versions: v.vulnerability?.affected_versions || "—",
        }))
        setVulns(items)
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

  // Build severity chart data
  const severityChartData = [
    { name: "Critical", value: stats.critical, color: "hsl(0, 70%, 55%)" },
    { name: "High", value: stats.high, color: "hsl(25, 90%, 55%)" },
    { name: "Medium", value: stats.medium, color: "hsl(45, 90%, 55%)" },
    { name: "Low", value: stats.low, color: "hsl(165, 70%, 50%)" },
  ]

  // Build top vulnerable packages
  const packageCounts: Record<string, number> = {}
  vulns.forEach(v => { packageCounts[v.package_name] = (packageCounts[v.package_name] || 0) + 1 })
  const topPackages = Object.entries(packageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  const columns = [
    {
      key: "timestamp",
      header: "Timestamp",
      render: (item: Vulnerability) => (
        <span className="text-xs text-muted-foreground">{item.timestamp}</span>
      ),
    },
    {
      key: "agent_id",
      header: "Agent",
      render: (item: Vulnerability) => (
        <span className="font-medium text-info">{item.agent_id}</span>
      ),
    },
    {
      key: "cve_id",
      header: "CVE",
      render: (item: Vulnerability) => (
        <div className="flex items-center gap-1">
          <span className="font-mono text-sm text-critical">{item.cve_id}</span>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </div>
      ),
    },
    {
      key: "package_name",
      header: "Package",
      render: (item: Vulnerability) => (
        <div className="flex flex-col">
          <span className="font-medium">{item.package_name}</span>
          <span className="text-xs text-muted-foreground">v{item.installed_version}</span>
        </div>
      ),
    },
    {
      key: "severity",
      header: "Severity",
      render: (item: Vulnerability) => <SeverityBadge severity={item.severity} />,
    },
    {
      key: "affected_versions",
      header: "Affected",
      render: (item: Vulnerability) => (
        <span className="font-mono text-sm text-muted-foreground">{item.affected_versions}</span>
      ),
    },
    {
      key: "description",
      header: "Description",
      render: (item: Vulnerability) => (
        <span className="line-clamp-1 max-w-xs text-sm">{item.description}</span>
      ),
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

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Vulnerabilities"
          value={stats.total_vulnerabilities}
          subtitle={`${stats.affected_agents} agents affected`}
          icon={<Bug className="h-5 w-5" />}
        />
        <StatsCard
          title="Critical"
          value={stats.critical}
          subtitle="Immediate action required"
          icon={<AlertTriangle className="h-5 w-5" />}
          variant="critical"
        />
        <StatsCard
          title="High"
          value={stats.high}
          subtitle="Action recommended"
          icon={<ShieldAlert className="h-5 w-5" />}
          variant="high"
        />
        <StatsCard
          title="Medium / Low"
          value={stats.medium + stats.low}
          subtitle={`${stats.medium} medium, ${stats.low} low`}
          icon={<Shield className="h-5 w-5" />}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Severity Distribution */}
        <Card className="border-border bg-card lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Vulnerability Severity Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={severityChartData} barSize={40}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(0, 0%, 60%)", fontSize: 12 }}
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
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {severityChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Vulnerable Packages */}
        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Top Vulnerable Packages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPackages.map(([name, count]) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </div>
                  <Badge variant="outline" className="border-border bg-muted font-mono">
                    {count} {count === 1 ? "vuln" : "vulns"}
                  </Badge>
                </div>
              ))}
              {topPackages.length === 0 && (
                <div className="text-center text-sm text-muted-foreground">
                  No vulnerabilities detected
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Vulnerabilities ({vulns.length})
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

      {/* Vulnerabilities Table */}
      <DataTable
        data={vulns}
        columns={columns}
        totalItems={vulns.length}
        showFilters
        showExport
      />
    </div>
  )
}
