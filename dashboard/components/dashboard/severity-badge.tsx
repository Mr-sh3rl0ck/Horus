import { cn } from "@/lib/utils"

type Severity = "critical" | "high" | "medium" | "low" | "info"

interface SeverityBadgeProps {
  severity: Severity
  count?: number
  showLabel?: boolean
  className?: string
}

const severityConfig = {
  critical: {
    label: "Critical",
    bgClass: "bg-critical/20",
    textClass: "text-critical",
    dotClass: "bg-critical",
  },
  high: {
    label: "High",
    bgClass: "bg-high/20",
    textClass: "text-high",
    dotClass: "bg-high",
  },
  medium: {
    label: "Medium",
    bgClass: "bg-medium/20",
    textClass: "text-medium",
    dotClass: "bg-medium",
  },
  low: {
    label: "Low",
    bgClass: "bg-low/20",
    textClass: "text-low",
    dotClass: "bg-low",
  },
  info: {
    label: "Info",
    bgClass: "bg-info/20",
    textClass: "text-info",
    dotClass: "bg-info",
  },
}

export function SeverityBadge({
  severity,
  count,
  showLabel = true,
  className,
}: SeverityBadgeProps) {
  const config = severityConfig[severity]

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
        config.bgClass,
        config.textClass,
        className
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", config.dotClass)} />
      {showLabel && config.label}
      {count !== undefined && <span className="font-bold">{count}</span>}
    </span>
  )
}

export function SeverityIndicator({ severity }: { severity: Severity }) {
  const config = severityConfig[severity]
  return (
    <span className={cn("h-2 w-2 rounded-full", config.dotClass)} />
  )
}
