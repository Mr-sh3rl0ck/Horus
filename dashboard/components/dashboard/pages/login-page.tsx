"use client"

import { useState, FormEvent } from "react"
import { Shield, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react"

interface LoginPageProps {
    onLogin: (token: string) => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const response = await fetch("http://172.21.89.249:5001/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            })

            if (!response.ok) {
                const data = await response.json().catch(() => ({}))
                throw new Error(data.detail || "Credenciales inválidas")
            }

            const data = await response.json()
            localStorage.setItem("horus_token", data.token)
            localStorage.setItem("horus_user", data.username)
            onLogin(data.token)
        } catch (err: any) {
            setError(err.message || "Error de conexión con el servidor")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
            {/* Animated background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sidebar-primary/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-info/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-sidebar-primary/3 blur-[100px]" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 w-full max-w-md px-6">
                {/* Logo & Title */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sidebar-primary/10 border border-sidebar-primary/20 shadow-lg shadow-sidebar-primary/5">
                        <Shield className="h-8 w-8 text-sidebar-primary" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Horus SIEM
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Security Information & Event Management
                    </p>
                </div>

                {/* Login Card */}
                <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-8 shadow-2xl shadow-black/20">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-foreground">
                            Iniciar sesión
                        </h2>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Ingrese sus credenciales para acceder al dashboard.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Error Banner */}
                        {error && (
                            <div className="flex items-center gap-2 rounded-lg border border-critical/30 bg-critical/10 px-4 py-3 text-sm text-critical animate-in fade-in slide-in-from-top-1 duration-200">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                {error}
                            </div>
                        )}

                        {/* Username */}
                        <div className="space-y-2">
                            <label
                                htmlFor="username"
                                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                            >
                                Usuario
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="admin"
                                required
                                autoFocus
                                className="flex h-11 w-full rounded-lg border border-border bg-muted/50 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary/50 transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                            >
                                Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••"
                                    required
                                    className="flex h-11 w-full rounded-lg border border-border bg-muted/50 px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary/50 transition-colors"
                                />
                                <button
                                    type="button"
                                    tabIndex={-1}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading || !username || !password}
                            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-medium text-sm hover:bg-sidebar-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-sidebar-primary/20"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Verificando...
                                </>
                            ) : (
                                "Acceder"
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-muted-foreground/50">
                    Horus SIEM v0.1.0 — Credenciales generadas al iniciar el servidor
                </p>
            </div>
        </div>
    )
}
