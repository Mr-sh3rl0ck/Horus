# Horus SIEM — API para la app móvil

App de dos funciones: **ver alertas** y **mitigar con un botón**.
Este documento tiene los contratos exactos de qué se envía y qué se recibe.

- **Base URL:** `http://192.168.0.10:5001/api` *(cambia la IP por la del servidor)*
- **Swagger:** `http://192.168.0.10:5001/docs`
- **Credenciales de prueba:** `admin` / `Horus2026!`

Todas las respuestas son JSON. Todos los timestamps son **segundos Unix (float)**,
no milisegundos — en Kotlin hay que multiplicar por 1000 para construir un `Date`.

---

## Prueba en 2 minutos

Antes de escribir código, comprueba que el servidor responde:

```bash
# 1. Login -> token
curl -X POST http://192.168.0.10:5001/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"admin","password":"Horus2026!"}'

# 2. Alertas (pega el token del paso 1)
curl http://192.168.0.10:5001/api/mobile/alerts?limit=5 \
  -H "Authorization: Bearer <TOKEN>"
```

---

## 1. Login

### Envías

```http
POST /api/auth/login
Content-Type: application/json
```
```json
{ "username": "admin", "password": "Horus2026!" }
```

### Recibes

```json
{
  "token": "9f2a1b3c4d5e6f7a8b9c0d1e2f3a4b5c",
  "username": "admin",
  "role": "admin",
  "expires_at": 1690086400.0
}
```

| Campo | Tipo | Notas |
|---|---|---|
| `token` | string | Guárdalo. Va en el header de todas las demás llamadas |
| `username` | string | Para mostrar en la UI |
| `role` | string | `admin`, `soc_analyst`, `compliance` o `viewer` |
| `expires_at` | float | Unix segundos. Dura **24 h** |

### A partir de aquí, en TODAS las peticiones

```
Authorization: Bearer 9f2a1b3c4d5e6f7a8b9c0d1e2f3a4b5c
```

### El botón de mitigar solo lo pueden usar 2 roles

```kotlin
val puedeMitigar = role == "admin" || role == "soc_analyst"
```

Si es `viewer` o `compliance`, **oculta el botón**: el servidor devolvería `403`.

### Al abrir la app, valida el token guardado

```http
POST /api/auth/verify
Authorization: Bearer <token>
```

Responde `200` con `{ "valid": true, "username": "...", "role": "..." }`
o `401` si caducó. Ante cualquier `401` en cualquier endpoint: borra la sesión
local y vuelve al login.

### Logout

```http
POST /api/auth/logout
Authorization: Bearer <token>
```

---

## 2. Pantalla de alertas

### Envías

```http
GET /api/mobile/alerts?limit=20&offset=0
Authorization: Bearer <token>
```

| Query param | Tipo | Default | Para qué |
|---|---|---|---|
| `limit` | int 1-100 | 20 | Cuántas traer |
| `offset` | int | 0 | Paginación (scroll infinito) |
| `severity` | int 1-15 | — | Solo alertas de ese nivel **o superior** |
| `agent_id` | string | — | Filtrar por equipo |
| `event_type` | string | — | `log`, `fim`, `vulnerability` |

### Recibes

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
      "mitre": {
        "tactic": ["Credential Access"],
        "technique": ["T1110 - Brute Force"]
      },
      "created_at": 1690000000.0,
      "time_ago": 30.5,
      "can_block": true
    }
  ]
}
```

| Campo | Tipo | Qué hacer con él |
|---|---|---|
| `id` | string | Clave de la alerta. La necesitas para el detalle |
| `rule_name` | string | **Título de la tarjeta** |
| `rule_description` | string | Subtítulo / descripción |
| `level` | int 1-15 | Severidad numérica |
| `severity_label` | string | **Ya calculado**: `Low`/`Medium`/`High`/`Critical` |
| `event_type` | string | Icono según tipo |
| `agent_id` | string | **Necesario para mitigar** |
| `src_ip` | string \| **null** | IP atacante. **Necesaria para mitigar** |
| `dst_user` | string \| null | Usuario atacado |
| `action` | string \| null | `failed_login`, `modified`, ... |
| `path` | string \| null | Ruta del archivo (solo eventos FIM) |
| `mitre` | objeto | `tactic` y `technique` son **arrays de string** |
| `created_at` | float | Unix segundos |
| `time_ago` | float | **Segundos transcurridos, ya calculados por el servidor** |
| `can_block` | bool | **Si es `true`, muestra el botón de mitigar** |

Dos cosas que te ahorran trabajo:

- **Usa `time_ago`, no calcules la diferencia tú.** Lo calcula el servidor, así
  que no te afecta si el reloj del teléfono está desfasado.
- **Usa `severity_label`, no compares niveles a mano.** Ya viene resuelto.

Colores sugeridos:

| `severity_label` | Nivel | Color |
|---|---|---|
| `Critical` | 12-15 | Rojo |
| `High` | 8-11 | Naranja |
| `Medium` | 4-7 | Amarillo |
| `Low` | 1-3 | Gris / verde |

> Ojo con los `null`. `src_ip` y `path` son null según el tipo de alerta.
> En Kotlin declara esos campos como nullable (`String?`).

### Refresco

Haz polling cada 10-15 s con `offset=0` mientras la pantalla esté visible.
No hay websockets ni notificaciones push: **esta lista es el único canal de
entrega de alertas**. Para avisar de alertas nuevas, compara el `id` de la
primera alerta con el de la consulta anterior.

---

## 3. Detalle de una alerta

Solo hace falta si quieres una pantalla de detalle al tocar una alerta de la
lista. Para la lista y el botón ya tienes todo lo necesario en el paso anterior.

### Envías

```http
GET /api/mobile/alerts/abc123def456
Authorization: Bearer <token>
```

### Recibes

Todos los campos de la lista, **más**:

```json
{
  "raw_log": "Failed password for root from 185.220.101.42 port 40022 ssh2",
  "correlation": 1,
  "event_count": 8,
  "timestamp": 1690000000.0,
  "agent_time_iso": "2026-07-27T14:00:00",
  "suggested_actions": ["block_ip", "isolate"]
}
```

| Campo extra | Tipo | Notas |
|---|---|---|
| `raw_log` | string | Log crudo. Muéstralo en monoespaciada |
| `correlation` | int | `1` = generada por correlación, no por un evento suelto |
| `event_count` | int | Cuántos eventos la dispararon (ej. 8 intentos fallidos) |
| `suggested_actions` | array | Acciones recomendadas para esta alerta |

Si la alerta no existe: `404`.

---

## 4. El botón de mitigar

Son **3 pasos**: envías la acción → recibes un `command_id` → consultas hasta
saber si se ejecutó.

El servidor solo **encola** el comando. Quien lo ejecuta es el agente instalado
en el equipo afectado, que consulta al servidor cada 5 s. Por eso hace falta el
paso 3: la respuesta inmediata no significa que ya esté hecho.

### 4.1 Qué acción manda el botón

Con un solo botón, decide así:

| Condición | `action` | `params` | Texto del botón |
|---|---|---|---|
| `can_block == true` | `block_ip` | `{"ip": src_ip}` | **Bloquear IP** |
| `can_block == false` y `level >= 12` | `isolate` | `{}` | **Aislar equipo** |
| resto | — | — | ocultar el botón |

```kotlin
val accion = when {
    alerta.canBlock          -> "block_ip" to mapOf("ip" to alerta.srcIp)
    alerta.level >= 12       -> "isolate"  to emptyMap()
    else                     -> null
}
```

`block_ip` es el caso normal y es **reversible** (existe `unblock_ip`).
`isolate` corta toda la red del equipo salvo su conexión con Horus — **pide
confirmación explícita** antes de mandarla.

### 4.2 Paso 1 — Enviar

```http
POST /api/mobile/respond
Authorization: Bearer <token>
Content-Type: application/json
```
```json
{
  "agent_id": "a1b2c3d4",
  "action": "block_ip",
  "params": { "ip": "185.220.101.42" },
  "alert_id": "abc123def456"
}
```

| Campo | Tipo | Obligatorio | De dónde sale |
|---|---|---|---|
| `agent_id` | string | Sí | `alerta.agent_id` |
| `action` | string | Sí | Tabla de 4.1 |
| `params` | objeto | Sí (puede ir `{}`) | Tabla de 4.1 |
| `alert_id` | string | No | `alerta.id`. Para trazabilidad — mándalo |

**Recibes:**

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

**Guarda `command_id`.** Sin él no puedes saber si la mitigación funcionó.

### 4.3 Paso 2 — Consultar el estado

```http
GET /api/mobile/commands/cmd-9f2a1b3c4d5e
Authorization: Bearer <token>
```

**Recibes:**

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
    "success": true
  }
}
```

### 4.4 Los 4 estados

| `status` | Significado | Qué mostrar |
|---|---|---|
| `pending` | Encolado, el agente aún no lo recogió | Spinner "Enviando…" |
| `delivered` | El agente lo recogió y lo está ejecutando | Spinner "Ejecutando…" |
| `completed` | ✅ Hecho | Check verde |
| `failed` | ❌ Falló en el equipo | Cruz roja + `result.error` |

Cuando es `failed`, el motivo está en `result.error`:

```json
{ "status": "failed", "result": { "success": false, "error": "sin permisos" } }
```

### 4.5 Paso 3 — El polling

```kotlin
// Consulta cada 2 s; para al llegar a completed/failed.
// Timeout de 60 s: si el agente está apagado, se queda en 'pending' para siempre.
repeat(30) {
    val cmd = api.getCommandStatus(commandId)
    actualizarUI(cmd.status)
    if (cmd.status == "completed" || cmd.status == "failed") return@repeat
    delay(2000)
}
```

**Tiempo normal: 5-10 segundos.** El agente consulta al servidor cada 5 s, así
que ese es el retardo mínimo. Si se queda en `pending` más de un minuto, el
agente de ese equipo no está corriendo.

### 4.6 Acciones disponibles (referencia)

| `action` | `params` | Reversible con |
|---|---|---|
| `block_ip` | `{"ip": "1.2.3.4"}` | `unblock_ip` |
| `unblock_ip` | `{"ip": "1.2.3.4"}` | — |
| `kill_process` | `{"pid": 1234}` o `{"name": "x.exe"}` | — |
| `isolate` | `{}` | `unisolate` |
| `unisolate` | `{}` | — |

Para esta app bastan `block_ip` e `isolate` (más sus reversas si añades un
botón de deshacer).

---

## 5. Errores

| Código | Qué pasó | Qué hacer en la app |
|---|---|---|
| `400` | Acción inválida o falta un parámetro | Bug en la app: revisa `params` |
| `401` | Token ausente, inválido o caducado | Borrar sesión → pantalla de login |
| `403` | El rol no puede mitigar (`viewer`/`compliance`) | Ocultar el botón desde el inicio |
| `404` | `alert_id`, `agent_id` o `command_id` no existe | "Ya no está disponible" |
| `503` | Servidor arrancando | Reintentar en unos segundos |

El cuerpo del error siempre trae el motivo en `detail`:

```json
{ "detail": "La acción 'block_ip' requiere el parámetro 'ip'." }
```

---

## 6. Resumen para la pantalla principal (opcional)

Si quieres una cabecera con contadores:

```http
GET /api/mobile/dashboard-summary
Authorization: Bearer <token>
```
```json
{
  "alerts": {
    "total_alerts": 1250, "critical": 3, "high": 12,
    "medium": 45, "low": 1190, "last_24h": 28
  },
  "agents": { "total": 5, "active": 4, "disconnected": 1 },
  "commands": { "pending": 0 },
  "session": { "username": "admin", "role": "admin", "can_respond": true },
  "server_time": "2026-07-27T14:00:00+0000"
}
```

`session.can_respond` es la forma más limpia de decidir si pintar el botón:
te evita duplicar la lógica de roles en la app.

---

## 7. Checklist

- [ ] Base URL con la **IP del servidor**, no `localhost` (el teléfono no
      resuelve el `localhost` del PC).
- [ ] Interceptor que añade `Authorization: Bearer` a todas las peticiones.
- [ ] Manejo global del `401` → limpiar sesión y volver al login.
- [ ] Campos `src_ip` y `path` declarados como **nullable**.
- [ ] `time_ago` y `severity_label` usados tal cual, sin recalcular.
- [ ] Polling de la lista cada 10-15 s con `offset=0` mientras esté visible.
- [ ] Botón oculto si el rol no es `admin` ni `soc_analyst`.
- [ ] `command_id` guardado y consultado tras cada mitigación.
- [ ] Confirmación explícita antes de `isolate`.
- [ ] Timeout en el polling (no dejarlo girando indefinidamente).

---

## 8. Si algo no funciona

| Síntoma | Causa habitual |
|---|---|
| No conecta desde el móvil | Base URL con `localhost`, o el firewall del PC bloquea los puertos 3000/5001 |
| Login `401` con credenciales buenas | Contraseña regenerada al reiniciar el servidor: `docker logs horus-server \| grep Password` |
| No aparecen alertas nuevas | La app no está haciendo polling con `offset=0`, o no hay eventos llegando al servidor |
| El comando se queda en `pending` | El agente de ese equipo no está corriendo |
| El comando sale `failed` | Mira `result.error`. Lo más común: el agente necesita root para tocar el firewall |

Para generar alertas de prueba sin esperar un ataque real:

```bash
python testing-mvp/simulate_attack.py --server http://192.168.0.10:5001
```
