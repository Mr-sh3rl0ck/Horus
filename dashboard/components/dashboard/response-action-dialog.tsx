"use client"

// Horus SIEM Dashboard - Active Response Dialog
//
// Encola una acción de respuesta activa contra un agente y hace polling del
// estado hasta que el agente la ejecuta (o falla). Es el equivalente en el
// dashboard del flujo que la app móvil implementa con
// POST /api/mobile/respond + GET /api/mobile/commands/{id}.

import { useState, useEffect, useCallback, useRef } from "react"
import { ShieldOff, Loader2, CheckCircle2, XCircle, Clock, Send } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sendCommand, getCommandStatus, ApiError } from "@/lib/api"
import type { CommandRecord, CommandStatus } from "@/lib/api"

interface ResponseActionDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    agentId: string
    agentName?: string
    action: string
    actionLabel: string
    /** Parámetros de la acción, p. ej. { ip: "1.2.3.4" } */
    params?: Record<string, unknown>
    /** Alerta que originó la acción — se guarda para trazabilidad */
    alertId?: string
    /** Aviso extra para acciones destructivas (isolate) */
    warning?: string
}

const STATUS_META: Record<CommandStatus, { label: string; className: string; icon: typeof Clock }> = {
    pending: {
        label: "Encolado — esperando al agente",
        className: "bg-medium/20 text-medium border-medium/30",
        icon: Clock,
    },
    delivered: {
        label: "Recibido por el agente — ejecutando",
        className: "bg-info/20 text-info border-info/30",
        icon: Loader2,
    },
    completed: {
        label: "Ejecutado correctamente",
        className: "bg-success/20 text-success border-success/30",
        icon: CheckCircle2,
    },
    failed: {
        label: "Falló en el endpoint",
        className: "bg-critical/20 text-critical border-critical/30",
        icon: XCircle,
    },
}

export function ResponseActionDialog({
    open,
    onOpenChange,
    agentId,
    agentName,
    action,
    actionLabel,
    params = {},
    alertId,
    warning,
}: ResponseActionDialogProps) {
    const [sending, setSending] = useState(false)
    const [command, setCommand] = useState<CommandRecord | null>(null)
    const [error, setError] = useState<string | null>(null)
    const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const stopPolling = useCallback(() => {
        if (pollRef.current) {
            clearInterval(pollRef.current)
            pollRef.current = null
        }
    }, [])

    // Reiniciar el estado cada vez que se abre el diálogo
    useEffect(() => {
        if (open) {
            setCommand(null)
            setError(null)
            setSending(false)
        } else {
            stopPolling()
        }
    }, [open, stopPolling])

    useEffect(() => stopPolling, [stopPolling])

    const handleSend = useCallback(async () => {
        setSending(true)
        setError(null)

        try {
            const res = await sendCommand(agentId, action, params, alertId)
            setCommand(res.command)

            // Polling hasta que el agente reporte el resultado
            stopPolling()
            pollRef.current = setInterval(async () => {
                try {
                    const fresh = await getCommandStatus(res.command.id)
                    setCommand(fresh)
                    if (fresh.status === "completed" || fresh.status === "failed") {
                        stopPolling()
                    }
                } catch {
                    stopPolling()
                }
            }, 2000)
        } catch (err) {
            const message =
                err instanceof ApiError
                    ? err.message
                    : "No se pudo enviar el comando al servidor."
            setError(message)
        } finally {
            setSending(false)
        }
    }, [agentId, action, params, alertId, stopPolling])

    const paramEntries = Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== "")
    const statusMeta = command ? STATUS_META[command.status] : null
    const StatusIcon = statusMeta?.icon
    const isSettled = command?.status === "completed" || command?.status === "failed"
    const resultError =
        command?.result && typeof command.result === "object"
            ? (command.result as { error?: string }).error
            : undefined

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-card border-border sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-foreground flex items-center gap-2">
                        <ShieldOff className="h-5 w-5 text-high" />
                        {actionLabel}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Se enviará al agente{" "}
                        <strong className="text-foreground">{agentName || agentId}</strong>. La
                        acción se ejecuta en el endpoint, no en el servidor.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-3">
                    {paramEntries.length > 0 && (
                        <div className="rounded-lg border border-border bg-muted/50 p-3">
                            {paramEntries.map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between py-1 text-sm">
                                    <span className="text-muted-foreground">{key}</span>
                                    <span className="font-mono text-foreground">{String(value)}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {warning && !command && (
                        <div className="rounded-lg border border-high/30 bg-high/10 px-3 py-2 text-sm text-high">
                            {warning}
                        </div>
                    )}

                    {error && (
                        <div className="rounded-lg border border-critical/30 bg-critical/10 px-3 py-2 text-sm text-critical">
                            {error}
                        </div>
                    )}

                    {command && statusMeta && StatusIcon && (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <StatusIcon
                                    className={`h-4 w-4 ${
                                        command.status === "delivered" ? "animate-spin" : ""
                                    }`}
                                />
                                <Badge variant="outline" className={statusMeta.className}>
                                    {statusMeta.label}
                                </Badge>
                            </div>
                            <p className="font-mono text-xs text-muted-foreground">{command.id}</p>
                            {resultError && (
                                <p className="rounded border border-critical/30 bg-critical/10 px-3 py-2 text-xs text-critical">
                                    {resultError}
                                </p>
                            )}
                            {!isSettled && (
                                <p className="text-xs text-muted-foreground">
                                    El agente consulta comandos cada pocos segundos. Esta ventana se
                                    actualiza sola.
                                </p>
                            )}
                        </div>
                    )}
                </div>

                <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        {isSettled ? "Cerrar" : "Cancelar"}
                    </Button>
                    {!command && (
                        <Button
                            variant={warning ? "destructive" : "default"}
                            onClick={handleSend}
                            disabled={sending}
                            className="gap-2"
                        >
                            {sending ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <Send className="h-4 w-4" />
                            )}
                            {sending ? "Enviando..." : "Ejecutar"}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
