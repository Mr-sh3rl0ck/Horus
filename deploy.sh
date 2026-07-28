#!/bin/bash
# ============================================================
# Horus SIEM — Deploy Script
# Levanta los servicios con Docker Compose, espera a que el
# servidor esté listo y muestra las credenciales de acceso.
# ============================================================

set -e

COMPOSE_FILE="docker-compose.yml"
SERVER_CONTAINER="horus-server"
MAX_WAIT=120  # segundos máximos para esperar al servidor

cd "$(dirname "$0")"

# --- Host de acceso ---------------------------------------------------------
# Uso:  ./deploy.sh [IP_O_HOSTNAME]
# Si se omite, se lee HORUS_HOST del .env y, en su defecto, 'localhost'.
# Necesario cuando el dashboard o el móvil se conectan desde otra máquina:
# Next.js hornea la URL del API en el bundle durante el build.
if [ -n "$1" ]; then
    export HORUS_HOST="$1"
elif [ -f .env ]; then
    # shellcheck disable=SC1091
    export HORUS_HOST="$(grep -E '^HORUS_HOST=' .env | cut -d= -f2- | tr -d '"' | tr -d "'")"
fi
HORUS_HOST="${HORUS_HOST:-localhost}"
export HORUS_HOST

# --- Colores ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}          ${BOLD}🦅  Horus SIEM — Deploy${NC}                         ${CYAN}║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# --- 1. Verificar Docker ---
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker no encontrado. Instálalo primero.${NC}"
    exit 1
fi

if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo -e "${RED}Docker Compose no encontrado.${NC}"
    exit 1
fi

# Detectar comando de compose
if docker compose version &> /dev/null 2>&1; then
    COMPOSE_CMD="docker compose"
else
    COMPOSE_CMD="docker-compose"
fi

echo -e "${YELLOW}Usando: ${COMPOSE_CMD}${NC}"
echo -e "${YELLOW}Host de acceso: ${BOLD}${HORUS_HOST}${NC}"
echo ""

# --- 2. Preflight: archivos que docker-compose monta como volumen ---
# Docker crearía un DIRECTORIO en su lugar si no existen, y el servidor
# fallaría al arrancar.
mkdir -p server/data

if [ ! -f serviceAccountKey.json ]; then
    echo -e "${YELLOW}serviceAccountKey.json no existe — creando placeholder vacío${NC}"
    echo -e "${YELLOW}(las push notifications quedarán desactivadas)${NC}"
    echo '{}' > serviceAccountKey.json
    echo ""
fi

# --- 3. Build & Start ---
echo -e "${BOLD}Paso 1/3: Construyendo y levantando servicios...${NC}"
echo ""

$COMPOSE_CMD up -d --build 2>&1 | while IFS= read -r line; do
    echo "   $line"
done

echo ""
echo -e "${GREEN}Contenedores iniciados${NC}"

# --- 3. Esperar al servidor ---
echo ""
echo -e "${BOLD}Paso 2/3: Esperando a que el servidor esté listo...${NC}"

elapsed=0
while [ $elapsed -lt $MAX_WAIT ]; do
    # Verificar si el contenedor existe y está corriendo
    if docker ps --filter "name=$SERVER_CONTAINER" --filter "status=running" -q | grep -q .; then
        # Intentar health check
        if curl -s -o /dev/null -w "%{http_code}" http://localhost:5001/health 2>/dev/null | grep -q "200"; then
            echo -e "\n${GREEN}Servidor listo (${elapsed}s)${NC}"
            break
        fi
    fi

    printf "Esperando... %ds / %ds\r" "$elapsed" "$MAX_WAIT"
    sleep 2
    elapsed=$((elapsed + 2))
done

if [ $elapsed -ge $MAX_WAIT ]; then
    echo -e "\n${RED}Timeout: el servidor no respondió en ${MAX_WAIT}s${NC}"
    echo -e "${YELLOW}Revisa los logs con: docker logs $SERVER_CONTAINER${NC}"
    exit 1
fi

# --- 4. Extraer credenciales ---
echo ""
echo -e "${BOLD}Paso 3/3: Obteniendo credenciales...${NC}"
echo ""

# Esperar un momento para que los logs se escriban
sleep 2

# Buscar la password en los logs del servidor
PASSWORD=""
for i in $(seq 1 10); do
    PASSWORD=$(docker logs "$SERVER_CONTAINER" 2>&1 | grep -oP 'Password: \K\S+' | tail -1)
    if [ -n "$PASSWORD" ]; then
        break
    fi
    sleep 1
done

if [ -z "$PASSWORD" ]; then
    # Fallback: intentar con formato alternativo
    PASSWORD=$(docker logs "$SERVER_CONTAINER" 2>&1 | grep -A1 "Password" | tail -1 | tr -d ' ')
fi

# --- 5. Mostrar resultado ---
PSK="$(grep -E '^HORUS_PSK=' .env 2>/dev/null | cut -d= -f2- | tr -d '"' | tr -d "'")"
PSK="${PSK:-horus-default-psk}"

echo ""
echo -e "${CYAN}══════════════════════════════════════════════════════════${NC}"
echo -e "          ${GREEN}${BOLD}Horus SIEM Desplegado${NC}"
echo -e "${CYAN}══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "  ${BOLD}Dashboard:${NC}  http://${HORUS_HOST}:3000"
echo -e "  ${BOLD}API:${NC}        http://${HORUS_HOST}:5001"
echo -e "  ${BOLD}API docs:${NC}   http://${HORUS_HOST}:5001/docs"
echo ""
echo -e "  ${BOLD}Usuario:${NC}    admin"
if [ -n "$PASSWORD" ]; then
    echo -e "  ${BOLD}Password:${NC}   ${YELLOW}${PASSWORD}${NC}"
else
    echo -e "  ${BOLD}Password:${NC}   ${RED}(ver: docker logs horus-server | grep Password)${NC}"
fi
echo ""
echo -e "${CYAN}══════════════════════════════════════════════════════════${NC}"
echo -e "  ${BOLD}Conectar un agente${NC} (en la máquina a monitorear):"
echo -e "    cd agents && sudo ./setup_agent.sh ${HORUS_HOST} \$(hostname) ${PSK}"
echo ""
echo -e "  ${BOLD}Conectar la app móvil${NC}:"
echo -e "    Base URL: http://${HORUS_HOST}:5001/api"
echo -e "    Login:    POST /api/auth/login"
echo ""
echo -e "  ${BOLD}Simular un ataque${NC} (demo en vivo):"
echo -e "    python testing-mvp/simulate_attack.py --server http://${HORUS_HOST}:5001 --psk ${PSK}"
echo -e "${CYAN}══════════════════════════════════════════════════════════${NC}"
echo ""

if [ "$HORUS_HOST" = "localhost" ]; then
    echo -e "${YELLOW}Nota: el dashboard solo funcionará desde ESTA máquina.${NC}"
    echo -e "${YELLOW}Para acceder desde el móvil u otro equipo, redespliega con la IP:${NC}"
    echo -e "${YELLOW}  ./deploy.sh 192.168.1.100${NC}"
    echo ""
fi

# --- Estado de los contenedores ---
echo -e "${BOLD}Estado de servicios:${NC}"
echo ""
$COMPOSE_CMD ps
echo ""
