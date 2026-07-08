// Horus SIEM Dashboard - Role-Based Permissions
// Defines what sections each role can access

export type Role = "admin" | "soc_analyst" | "compliance" | "viewer"

export type Section =
  | "overview"
  | "endpoints"
  | "fim"
  | "threats"
  | "vulnerabilities"
  | "syscollector"
  | "compliance"
  | "users"
  | "admin-panel"
  | "reports"

/** Map of role → accessible sections */
const PERMISSIONS: Record<Role, Section[]> = {
  admin: [
    "overview",
    "endpoints",
    "fim",
    "threats",
    "vulnerabilities",
    "syscollector",
    "compliance",
    "users",
    "admin-panel",
    "reports",
  ],
  soc_analyst: [
    "overview",
    "endpoints",
    "fim",
    "threats",
    "vulnerabilities",
    "syscollector",
  ],
  compliance: ["overview", "compliance", "reports"],
  viewer: ["overview"],
}

/** Returns true if the given role can access the given section. */
export function canAccess(role: Role | string | null | undefined, section: Section): boolean {
  if (!role) return false
  const allowed = PERMISSIONS[role as Role]
  if (!allowed) return false
  return allowed.includes(section)
}

/** Returns the display label for a role. */
export function getRoleLabel(role: Role | string | null | undefined): string {
  const labels: Record<string, string> = {
    admin: "Administrador",
    soc_analyst: "SOC Analyst",
    compliance: "Compliance Officer",
    viewer: "Viewer",
  }
  return labels[role as string] ?? (role as string) ?? "Desconocido"
}

/** Returns the badge color class for a role. */
export function getRoleBadgeClass(role: Role | string | null | undefined): string {
  const classes: Record<string, string> = {
    admin: "bg-critical/20 text-critical border-critical/30",
    soc_analyst: "bg-info/20 text-info border-info/30",
    compliance: "bg-warning/20 text-warning border-warning/30",
    viewer: "bg-muted/40 text-muted-foreground border-border",
  }
  return classes[role as string] ?? "bg-muted/40 text-muted-foreground border-border"
}
