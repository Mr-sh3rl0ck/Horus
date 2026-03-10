"use client"

import { Bell, Search, RefreshCw, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  title: string
  breadcrumbs?: { label: string; href?: string }[]
  showTimeRange?: boolean
  showRefresh?: boolean
}

export function Header({
  title,
  breadcrumbs = [],
  showTimeRange = true,
  showRefresh = true,
}: HeaderProps) {
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
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 bg-muted pl-9 text-sm placeholder:text-muted-foreground"
          />
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
