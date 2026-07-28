# Horus — SIEM / XDR

Plataforma de Gestión de Eventos e Información de Seguridad (SIEM) y Detección
y Respuesta Extendidas (XDR): recolecta, analiza y correlaciona eventos de
seguridad en múltiples endpoints, con detección de amenazas en tiempo real y
respuesta activa desde el dashboard web o desde la app móvil.

📱 **[Guía de integración móvil →](MOBILE_API.md)**

---

## Arquitectura

| Componente | Tecnología | Función |
|---|---|---|
| **Server** | Python + FastAPI | Ingesta, decodificación, reglas, correlación, API REST |
| **Dashboard** | Next.js + React | Interfaz de monitoreo y respuesta activa |
| **Redis** | Redis 7 | Cola de eventos entre ingesta y workers de análisis |
| **Agents** | Python | Telemetría del endpoint (FIM, logs, inventario) y ejecución de respuestas |

**Pipeline de análisis:** `Decode → Rules → Correlate → MITRE → Store → Push`

**Canales de comunicación:**

- `/api/agent/*` y `/api/events` — canal agente↔servidor, autenticado con el
  PSK compartido (header `X-Horus-PSK`) y cifrado con AES-256-GCM.
- El resto de `/api/*` — canal de consola (dashboard y móvil), autenticado con
  tokens de sesión Bearer y control de acceso por rol.

---

## Requisitos

- Git
- Docker + Docker Compose

---

## Despliegue

### 1. Clonar y configurar

```bash
git clone https://github.com/Mr-sh3rl0ck/Horus.git
cd Horus
cp .env.example .env
```

Edita `.env` y ajusta **`HORUS_HOST`**:

```bash
HORUS_HOST=192.168.1.100    # IP de la máquina donde corre el servidor
```

> ⚠️ **Esto es lo más importante del despliegue.** Next.js hornea la URL del API
> en el bundle durante el build. Si dejas `localhost`, el dashboard **solo
> funcionará desde esa misma máquina** y el móvil no podrá conectarse.
> Para averiguar tu IP: `hostname -I | awk '{print $1}'` (Linux/macOS) o
> `ipconfig` (Windows).

### 2. Levantar

```bash
./deploy.sh
```

El script crea los archivos que Docker monta como volumen, construye las
imágenes, espera al health check y muestra las credenciales y las URLs de
acceso. También puedes pasar el host directamente:

```bash
./deploy.sh 192.168.1.100
```

O usar Docker Compose a mano:

```bash
docker compose up -d --build
docker compose ps
```

### 3. Acceder

| Servicio | URL |
|---|---|
| Dashboard | `http://<HORUS_HOST>:3000` |
| API | `http://<HORUS_HOST>:5001` |
| Swagger UI | `http://<HORUS_HOST>:5001/docs` |

Usuario `admin`, contraseña la de `ADMIN_PASSWORD` en tu `.env`. Si no la
definiste, el servidor genera una aleatoria en cada arranque:

```bash
docker logs horus-server | grep Password
```

### Detener

```bash
./stop.sh            # detener
./stop.sh --clean    # detener + borrar volúmenes e imágenes
```

---

## Conectar un agente

En la máquina que quieras monitorear (Linux):

```bash
cd agents
sudo ./setup_agent.sh <IP_DEL_SERVIDOR> [NOMBRE_AGENTE] [PSK]
```

Ejemplo:

```bash
sudo ./setup_agent.sh 192.168.1.100 web-prod-01 horus-default-psk
```

El script instala dependencias, configura `config.json`, verifica la conexión y
arranca el agente. El PSK debe coincidir con `HORUS_PSK` del servidor.

El agente activa cuatro módulos:

- **FIM** — integridad de `/etc/passwd`, `/etc/shadow`, `/etc/hosts`.
- **Log Collector** — `/var/log/auth.log`, `/var/log/syslog`.
- **Syscollector** — procesos, hardware, puertos y paquetes cada 5 min.
- **Active Response** — consulta comandos al servidor cada 5 s y los ejecuta.

---

## Respuesta activa

Flujo completo, disparable desde el dashboard o desde la app móvil:

```
Dashboard/Móvil → POST /api/commands (o /api/mobile/respond)
                → cola en SQLite (status: pending)
                → el agente hace polling cada 5s → status: delivered
                → el agente ejecuta la acción en el endpoint
                → reporta el resultado → status: completed | failed
```

| Acción | Parámetros | Efecto en el endpoint |
|---|---|---|
| `block_ip` | `{"ip": "..."}` | Regla DROP en iptables / netsh |
| `unblock_ip` | `{"ip": "..."}` | Elimina la regla |
| `kill_process` | `{"pid": N}` o `{"name": "..."}` | Termina el proceso |
| `isolate` | `{}` | Corta toda la red salvo la conexión con Horus |
| `unisolate` | `{}` | Restaura la conectividad |

`isolate` deja abierto el canal con el servidor a propósito: así el agente
sigue reportando y puedes revertir el aislamiento remotamente.

**Dónde está en la UI:**

- *Threat Hunting* → columna **Response** → "Bloquear IP" en alertas con IP origen.
- *Endpoints* → menú `⋯` de cada agente → "Aislar / Reconectar endpoint".

El diálogo hace polling del estado y muestra en vivo si el agente ya ejecutó
la acción.

Requiere rol `admin` o `soc_analyst`.

---

## Roles y permisos

| Rol | Secciones | Respuesta activa | Gestión de usuarios |
|---|---|---|---|
| `admin` | Todas | Sí | Sí |
| `soc_analyst` | Overview, Endpoints, FIM, Threats, Vulnerabilities, Inventory | Sí | No |
| `compliance` | Overview, Compliance, Reportes | No | No |
| `viewer` | Overview | No | No |

---

## Push notifications (Firebase)

1. Firebase Console → *Configuración del proyecto* → *Cuentas de servicio*.
2. **Generar nueva clave privada** y guardar el JSON como `serviceAccountKey.json`
   en la raíz del repositorio (ya está en `.gitignore`).
3. En `.env`:
   ```bash
   FIREBASE_ENABLED=true
   FIREBASE_PROJECT_ID=tu-project-id
   PUSH_MIN_LEVEL=8
   ```
4. Redesplegar: `./deploy.sh`

Verifica en los logs de arranque: `Push notifications : activas`.

Prueba el envío con `POST /api/mobile/test-push`. Los detalles del payload y
del canal `horus_alerts` están en [MOBILE_API.md](MOBILE_API.md).

---

## Demo / PoC en vivo

```bash
# 1. Levantar con la IP real
./deploy.sh 192.168.1.100

# 2. (Opcional) Poblar el dashboard con datos históricos
python testing-mvp/seed_demo_data.py --count 150

# 3. Abrir el dashboard y hacer login

# 4. Lanzar el ataque simulado
python testing-mvp/simulate_attack.py \
    --server http://192.168.1.100:5001 \
    --psk horus-default-psk
```

El simulador ejecuta cuatro escenarios: fuerza bruta SSH (con alerta de
correlación `COR-001`), cambios FIM, inventario con paquetes vulnerables y
login exitoso. Las alertas aparecen en el dashboard en tiempo real.

Para demostrar la respuesta activa necesitas un agente real corriendo
(ver *Conectar un agente*): el simulador solo genera eventos, no ejecuta
acciones.

**Escenario completo recomendado:**

1. Agente corriendo en una VM Linux.
2. Fuerza bruta SSH real contra esa VM (o `simulate_attack.py`).
3. El dashboard muestra la alerta de correlación nivel 12.
4. Llega la push al móvil.
5. Desde el móvil: "Bloquear IP" → el estado pasa a `completed`.
6. Verificar en la VM: `sudo iptables -L INPUT -n | grep <IP>`.

---

## Desarrollo local (sin Docker)

**Redis** debe estar corriendo en el puerto 6379.

**Servidor:**

```bash
cd server
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

**Dashboard:**

```bash
cd dashboard
npm install
npm run dev
```

**Agente:**

```bash
cd agents
pip install -r <(echo -e "watchdog\ncryptography\npsutil\nrequests")
python main.py
```

---

## Variables de entorno

| Variable | Default | Descripción |
|---|---|---|
| `HORUS_HOST` | `localhost` | IP/hostname de acceso (afecta al build del dashboard) |
| `ADMIN_USER` | `admin` | Usuario administrador |
| `ADMIN_PASSWORD` | *(aleatoria)* | Contraseña del admin |
| `HORUS_PSK` | `horus-default-psk` | Clave compartida con los agentes |
| `HORUS_REQUIRE_AGENT_PSK` | `true` | Exigir PSK en el canal de agentes |
| `HORUS_CORS_ORIGINS` | localhost + `HORUS_HOST` | Orígenes permitidos (separados por coma) |
| `FIREBASE_ENABLED` | `false` | Activar push notifications |
| `FIREBASE_PROJECT_ID` | — | Project ID de Firebase |
| `PUSH_MIN_LEVEL` | `8` | Nivel mínimo de alerta que dispara push |
| `REDIS_HOST` / `REDIS_PORT` | `redis` / `6379` | Conexión a Redis |

---

## Escala de severidad

| Nivel | Etiqueta |
|---|---|
| 1–3 | Low |
| 4–7 | Medium |
| 8–11 | High |
| 12–15 | Critical |

---

## Resolución de problemas

**El dashboard carga pero no muestra datos**
CORS o URL del API. Verifica en los logs de arranque la línea
`CORS permitido` y comprueba que `NEXT_PUBLIC_API_URL` (horneada en el build)
apunte a una URL alcanzable desde el navegador. Si cambiaste `HORUS_HOST`,
reconstruye: `docker compose up -d --build`.

**El agente no aparece en Endpoints**
Revisa `agents/logs/agent.log`. Si ves `PSK inválido`, el `auth.psk` del agente
no coincide con `HORUS_PSK` del servidor.

**Un comando se queda en `pending`**
El agente no está haciendo polling: verifica que esté corriendo y que
`active_response.enabled` sea `true` en su `config.json`.

**Un comando termina en `failed`**
Mira `result.error` en la respuesta. La causa más común es falta de permisos:
`block_ip` e `isolate` requieren root para manipular iptables.
