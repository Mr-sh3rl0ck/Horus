# Horus SIEM — Guía de integración móvil

Todo lo que necesita la app Android/iOS para conectarse al servidor Horus.

- **Base URL:** `http://<IP_DEL_SERVIDOR>:5001/api`
- **Documentación interactiva:** `http://<IP_DEL_SERVIDOR>:5001/docs` (Swagger UI)

> El servidor debe desplegarse con la IP real, no con `localhost`:
> `./deploy.sh 192.168.1.100`. Un teléfono no puede resolver el `localhost`
> de tu laptop.

---

## 1. Autenticación

Todos los endpoints (salvo el login) requieren el header:

```
Authorization: Bearer <token>
```

### Login

```http
POST /api/auth/login
Content-Type: application/json

{ "username": "admin", "password": "Horus2026!" }
```

```json
{
  "token": "9f2a1b...",
  "username": "admin",
  "role": "admin",
  "expires_at": 1690086400.0
}
```

El token dura **24 horas**. `expires_at` es un timestamp Unix en segundos.

### Verificar / cerrar sesión

```http
POST /api/auth/verify     → { "valid": true, "username": "...", "role": "..." }
POST /api/auth/logout     → { "status": "logged_out" }
```

Ante un **401** en cualquier endpoint, borra el token local y vuelve al login.

### Roles

| Rol | Puede leer alertas | Puede ejecutar respuesta activa |
|---|---|---|
| `admin` | Sí | Sí |
| `soc_analyst` | Sí | Sí |
| `compliance` | Sí | No (403) |
| `viewer` | Sí | No (403) |

Usa `session.can_respond` de `/api/mobile/dashboard-summary` para mostrar u
ocultar los botones de acción en lugar de comparar roles a mano.

---

## 2. Endpoints móviles

| Método | Ruta | Descripción |
|---|---|---|
| `POST` | `/api/mobile/register-token` | Registrar token FCM |
| `DELETE` | `/api/mobile/unregister-token` | Eliminar token FCM (logout) |
| `GET` | `/api/mobile/alerts` | Lista de alertas paginada |
| `GET` | `/api/mobile/alerts/{alert_id}` | Detalle de una alerta |
| `POST` | `/api/mobile/respond` | Ejecutar respuesta activa |
| `GET` | `/api/mobile/commands/{command_id}` | Estado de un comando enviado |
| `GET` | `/api/mobile/commands` | Historial de comandos |
| `GET` | `/api/mobile/response-actions` | Catálogo de acciones |
| `GET` | `/api/mobile/dashboard-summary` | Resumen para la home / widget |
| `POST` | `/api/mobile/test-push` | Enviar push de prueba |
| `GET` | `/api/mobile/tokens` | Listar tokens registrados (solo admin) |

### Listado de alertas

```http
GET /api/mobile/alerts?limit=20&offset=0&severity=8&agent_id=a1b2c3d4
```

```json
{
  "total": 150,
  "limit": 20,
  "offset": 0,
  "alerts": [
    {
      "id": "abc123def456",
      "rule_id": "COR-001",
      "rule_name": "SSH Brute Force Detected",
      "rule_description": "Multiple failed SSH login attempts from the same IP",
      "level": 12,
      "severity_label": "Critical",
      "event_type": "log",
      "agent_id": "a1b2c3d4",
      "src_ip": "185.220.101.42",
      "dst_user": "root",
      "action": "failed_login",
      "path": null,
      "mitre": { "tactic": ["Credential Access"], "technique": ["T1110 - Brute Force"] },
      "created_at": 1690000000.0,
      "time_ago": 30.5,
      "can_block": true
    }
  ]
}
```

Campos útiles para la UI:

- `severity_label` — `Low` | `Medium` | `High` | `Critical` (escala 1-15).
- `time_ago` — segundos transcurridos, ya calculado por el servidor.
- `can_block` — si es `true`, muestra el botón "Bloquear IP".

### Detalle de alerta

```http
GET /api/mobile/alerts/{alert_id}
```

Devuelve lo mismo más `raw_log` y `suggested_actions` (lista de `action` que
tienen sentido para esa alerta, p. ej. `["block_ip", "isolate"]`).

---

## 3. Push notifications (FCM)

### Registro del token

Llamar **al iniciar sesión**, **al abrir la app** y en `onNewToken()`:

```http
POST /api/mobile/register-token
Authorization: Bearer <token>

{
  "token": "<fcm_token>",
  "platform": "android",
  "label": "admin@horus.io"
}
```

En el logout:

```http
DELETE /api/mobile/unregister-token
Authorization: Bearer <token>

{ "token": "<fcm_token>" }
```

> **Nota Android:** `DELETE` con cuerpo requiere
> `@HTTP(method = "DELETE", path = "...", hasBody = true)` en Retrofit.

### Canal de notificaciones

La app **debe** crear un canal con ID exactamente:

```kotlin
val channel = NotificationChannel(
    "horus_alerts",
    "Alertas Horus",
    NotificationManager.IMPORTANCE_HIGH
)
```

El servidor envía las push con `channel_id = "horus_alerts"` y prioridad alta.
Si el canal no existe, Android descarta la notificación en segundo plano.

### Payload que llega en `data`

Todos los valores son **strings** (requisito de FCM):

```json
{
  "alert_id": "abc123def456",
  "rule_id": "COR-001",
  "rule_name": "SSH Brute Force Detected",
  "level": "12",
  "event_type": "log",
  "agent_id": "a1b2c3d4",
  "src_ip": "185.220.101.42",
  "action": "failed_login",
  "timestamp": "1690000000.0",
  "can_block": "true"
}
```

Al tocar la notificación: abre el detalle con
`GET /api/mobile/alerts/{alert_id}` usando `alert_id` del payload.

Solo se envían push de alertas con `level >= 8` (configurable con
`PUSH_MIN_LEVEL`).

---

## 4. Respuesta activa (el flujo estrella)

Tres pasos: **enviar → recibir command_id → hacer polling del estado**.

### Paso 1 — Enviar la acción

```http
POST /api/mobile/respond
Authorization: Bearer <token>

{
  "agent_id": "a1b2c3d4",
  "action": "block_ip",
  "params": { "ip": "185.220.101.42" },
  "alert_id": "abc123def456"
}
```

```json
{
  "status": "queued",
  "command_id": "cmd-9f2a1b3c4d5e",
  "agent_id": "a1b2c3d4",
  "action": "block_ip",
  "message": "Comando encolado. El agente lo ejecutará en su próximo ciclo de polling.",
  "poll_url": "/api/mobile/commands/cmd-9f2a1b3c4d5e"
}
```

### Paso 2 — Consultar el estado

```http
GET /api/mobile/commands/cmd-9f2a1b3c4d5e
```

```json
{
  "id": "cmd-9f2a1b3c4d5e",
  "agent_id": "a1b2c3d4",
  "action": "block_ip",
  "params": { "ip": "185.220.101.42" },
  "status": "completed",
  "source": "mobile",
  "alert_id": "abc123def456",
  "created_by": "admin",
  "created_at": 1690000000.0,
  "delivered_at": 1690000005.0,
  "completed_at": 1690000006.0,
  "result": {
    "action": "block_ip",
    "target": "185.220.101.42",
    "success": true,
    "command_id": "cmd-9f2a1b3c4d5e"
  }
}
```

| `status` | Significado | UI sugerida |
|---|---|---|
| `pending` | Encolado, el agente aún no lo recogió | Spinner "Enviando..." |
| `delivered` | El agente lo recogió, ejecutando | Spinner "Ejecutando..." |
| `completed` | Ejecutado correctamente | Check verde |
| `failed` | Falló en el endpoint (ver `result.error`) | Cruz roja + mensaje |

El agente consulta comandos cada **5 segundos** (`poll_interval_seconds`), así
que un ciclo completo tarda típicamente entre 5 y 10 segundos. Haz polling cada
2 s y deja de hacerlo al llegar a `completed` o `failed`.

### Acciones disponibles

Obtén el catálogo dinámicamente con `GET /api/mobile/response-actions`:

| `action` | `params` | Descripción |
|---|---|---|
| `block_ip` | `{"ip": "1.2.3.4"}` | Bloquea la IP en el firewall del endpoint |
| `unblock_ip` | `{"ip": "1.2.3.4"}` | Revierte el bloqueo |
| `kill_process` | `{"pid": 1234}` o `{"name": "x.exe"}` | Termina el proceso |
| `isolate` | `{}` | Corta la red del endpoint salvo con Horus |
| `unisolate` | `{}` | Restaura la conectividad |

`isolate` está marcada como `destructive: true` en el catálogo — conviene pedir
confirmación explícita en la app.

### Errores

| Código | Causa |
|---|---|
| `400` | Acción inválida o falta un parámetro requerido |
| `401` | Token ausente, inválido o expirado |
| `403` | El rol no puede ejecutar respuesta activa (`viewer` / `compliance`) |
| `404` | `agent_id` o `command_id` no existe |

---

## 5. Resumen para la home

```http
GET /api/mobile/dashboard-summary
```

```json
{
  "alerts": {
    "total_alerts": 1250, "critical": 3, "high": 12,
    "medium": 45, "low": 1190, "last_24h": 28
  },
  "agents": { "total": 5, "active": 4, "disconnected": 1 },
  "push": { "enabled": true, "registered_devices": 2 },
  "commands": { "pending": 0 },
  "session": { "username": "admin", "role": "admin", "can_respond": true },
  "server_time": "2026-07-27T14:00:00+0000"
}
```

---

## 6. Checklist de integración

- [ ] Base URL apuntando a la IP del servidor (no `localhost`).
- [ ] Login guardando `token` y `expires_at`; renovar al expirar.
- [ ] Interceptor que añade `Authorization: Bearer` a cada request.
- [ ] Manejo global del `401` → limpiar sesión y volver al login.
- [ ] Canal de notificaciones `horus_alerts` creado al arrancar.
- [ ] `register-token` en login, arranque y `onNewToken`.
- [ ] `unregister-token` en logout.
- [ ] Deep link de la notificación → detalle usando `alert_id`.
- [ ] Botones de acción ocultos si `can_respond` es `false`.
- [ ] Polling del `command_id` tras cada respuesta activa.
- [ ] Confirmación explícita antes de `isolate`.
