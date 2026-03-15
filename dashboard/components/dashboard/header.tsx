"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Bell, Search, RefreshCw, Calendar, ChevronDown, X, AlertTriangle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { searchAlerts } from "@/lib/api"

interface HeaderProps {
  title: string
  breadcrumbs?: { label: string; href?: string }[]
  showTimeRange?: boolean
  showRefresh?: boolean
}

interface SearchResult {
  id: string
  rule_name: string
  rule_description?: string
  level: number
  agent_id?: string
  src_ip?: string
  created_at: number
}

function getSeverityColor(level: number): string {
  if (level >= 12) return "text-critical"
  if (level >= 8) return "text-warning"
  if (level >= 4) return "text-info"
  return "text-muted-foreground"
}

function getSeverityLabel(level: number): string {
  if (level >= 12) return "Critical"
  if (level >= 8) return "High"
  if (level >= 4) return "Medium"
  return "Low"
}

function formatTime(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString()
}

export function Header({
  title,
  breadcrumbs = [],
  showTimeRange = true,
  showRefresh = true,
}: HeaderProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const searchRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Debounced search
  const doSearch = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([])
      setTotalResults(0)
      setShowResults(false)
      return
    }

    setIsSearching(true)
    try {
      const data = await searchAlerts(q, 10)
      setResults(data.results || [])
      setTotalResults(data.total || 0)
      setShowResults(true)
    } catch {
      setResults([])
      setTotalResults(0)
    } finally {
      setIsSearching(false)
    }
  }, [])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => doSearch(query), 350)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query, doSearch])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setShowResults(false)
  }

  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-4">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {index > 0 && <span className="text-muted-foreground">/</span>}
                <span
                  className={
                    index === breadcrumbs.length - 1
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground cursor-pointer"
                  }
                >
                  {crumb.label}
                </span>
              </span>
            ))}
          </div>
        )}
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative" ref={searchRef}>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar alertas..."
            className="w-72 bg-muted pl-9 pr-9 text-sm placeholder:text-muted-foreground"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => { if (results.length > 0) setShowResults(true) }}
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {isSearching ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <X className="h-3.5 w-3.5" />}
            </button>
          )}

          {/* Search Results Dropdown */}
          {showResults && (
            <div className="absolute right-0 top-full z-50 mt-2 w-[480px] rounded-lg border border-border bg-card shadow-xl">
              <div className="border-b border-border px-4 py-2.5">
                <p className="text-xs text-muted-foreground">
                  {totalResults} resultado{totalResults !== 1 ? "s" : ""} para &ldquo;{query}&rdquo;
                </p>
              </div>

              {results.length === 0 ? (
                <div className="flex flex-col items-center gap-2 py-8 text-muted-foreground">
                  <Search className="h-8 w-8 opacity-30" />
                  <p className="text-sm">Sin resultados</p>
                </div>
              ) : (
                <div className="max-h-80 overflow-y-auto">
                  {results.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-start gap-3 border-b border-border/50 px-4 py-3 transition-colors hover:bg-muted/50 last:border-0"
                    >
                      <AlertTriangle className={`mt-0.5 h-4 w-4 shrink-0 ${getSeverityColor(alert.level)}`} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-medium text-foreground">
                            {alert.rule_name}
                          </p>
                          <Badge
                            variant="outline"
                            className={`shrink-0 text-[10px] px-1.5 py-0 ${getSeverityColor(alert.level)} border-current`}
                          >
                            {getSeverityLabel(alert.level)}
                          </Badge>
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                          {alert.agent_id && <span>Agent: {alert.agent_id}</span>}
                          {alert.src_ip && <span>IP: {alert.src_ip}</span>}
                          <span>{formatTime(alert.created_at)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Time Range */}
        {showTimeRange && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 border-border bg-muted text-foreground">
                <Calendar className="h-4 w-4" />
                Last 24 hours
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem className="text-foreground">Last 15 minutes</DropdownMenuItem>
              <DropdownMenuItem className="text-foreground">Last hour</DropdownMenuItem>
              <DropdownMenuItem className="text-foreground">Last 24 hours</DropdownMenuItem>
              <DropdownMenuItem className="text-foreground">Last 7 days</DropdownMenuItem>
              <DropdownMenuItem className="text-foreground">Last 30 days</DropdownMenuItem>
              <DropdownMenuItem className="text-foreground">Custom range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Refresh */}
        {showRefresh && (
          <Button variant="outline" size="icon" className="border-border bg-muted text-foreground">
            <RefreshCw className="h-4 w-4" />
          </Button>
        )}

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-critical p-0 text-xs text-foreground">
            3
          </Badge>
        </Button>

        {/* User Avatar */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sm font-medium text-sidebar-primary-foreground">
          A
        </div>
      </div>
    </header>
  )
}
