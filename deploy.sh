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
echo ""

# --- 2. Build & Start ---
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
echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}          ${GREEN}${BOLD}Horus SIEM Desplegado${NC}                        ${CYAN}║${NC}"
echo -e "${CYAN}╠══════════════════════════════════════════════════════════╣${NC}"
echo -e "${CYAN}║${NC}                                                          ${CYAN}║${NC}"
echo -e "${CYAN}║${NC}  ${BOLD}Dashboard:${NC}  http://localhost:3000                      ${CYAN}║${NC}"
echo -e "${CYAN}║${NC}  ${BOLD}API:${NC}        http://localhost:5001                      ${CYAN}║${NC}"
echo -e "${CYAN}║${NC}                                                          ${CYAN}║${NC}"
echo -e "${CYAN}╠══════════════════════════════════════════════════════════╣${NC}"
echo -e "${CYAN}║${NC}                                                          ${CYAN}║${NC}"
echo -e "${CYAN}║${NC}  ${BOLD}Usuario:${NC}    admin                                     ${CYAN}║${NC}"
if [ -n "$PASSWORD" ]; then
echo -e "${CYAN}║${NC}  ${BOLD}Password:${NC}   ${YELLOW}${PASSWORD}${NC}$(printf '%*s' $((37 - ${#PASSWORD})) '')${CYAN}║${NC}"
else
echo -e "${CYAN}║${NC}  ${BOLD}Password:${NC}   ${RED}(ver: docker logs horus-server)${NC}        ${CYAN}║${NC}"
fi
echo -e "${CYAN}║${NC}                                                          ${CYAN}║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}La password cambia cada vez que se reinicia el servidor${NC}"
echo -e "${YELLOW}Para verla de nuevo: docker logs horus-server | grep Password${NC}"
echo ""

# --- Estado de los contenedores ---
echo -e "${BOLD}Estado de servicios:${NC}"
echo ""
$COMPOSE_CMD ps
echo ""
