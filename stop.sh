#!/bin/bash
# ============================================================
# Horus SIEM — Stop Script
# Detiene todos los servicios de Horus SIEM de forma ordenada.
# ============================================================

set -e

# --- Colores ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}          ${BOLD}Horus SIEM — Deteniendo servicios${NC}                ${CYAN}║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Detectar comando de compose
if docker compose version &> /dev/null 2>&1; then
    COMPOSE_CMD="docker compose"
else
    COMPOSE_CMD="docker-compose"
fi

# Mostrar estado actual
echo -e "${BOLD}Estado actual:${NC}"
echo ""
$COMPOSE_CMD ps 2>/dev/null || echo "   No hay servicios corriendo"
echo ""

# Detener servicios
echo -e "${YELLOW}Deteniendo contenedores...${NC}"
$COMPOSE_CMD down 2>&1 | while IFS= read -r line; do
    echo "   $line"
done

echo ""
echo -e "${GREEN}Horus SIEM detenido correctamente${NC}"
echo ""

# Opcion para limpiar
if [ "$1" == "--clean" ]; then
    echo -e "${YELLOW}Limpiando volumenes e imagenes...${NC}"
    $COMPOSE_CMD down -v --rmi local 2>&1 | while IFS= read -r line; do
        echo "   $line"
    done
    echo -e "${GREEN}Limpieza completada${NC}"
    echo ""
fi

echo -e "Uso:"
echo -e "  ${BOLD}./stop.sh${NC}         Detener servicios"
echo -e "  ${BOLD}./stop.sh --clean${NC}  Detener + borrar volumenes e imagenes"
echo ""
