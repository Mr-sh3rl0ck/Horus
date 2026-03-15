#!/bin/bash
# ============================================================
# Horus SIEM Agent — Setup & Run (Zero-Touch)
#
# Un solo comando. No pide nada. Instala todo solo.
#
# Uso:
#   sudo ./setup_agent.sh <IP_DEL_SERVIDOR>
#
# Ejemplo:
#   sudo ./setup_agent.sh 192.168.1.100
# ============================================================

set -e

# --- Colores ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

AGENT_DIR="$(cd "$(dirname "$0")" && pwd)"
SERVER_IP="${1:-}"
AGENT_NAME="${2:-$(hostname)}"

# --- Validar argumentos ---
if [ -z "$SERVER_IP" ]; then
    echo ""
    echo -e "${RED}Uso: sudo ./setup_agent.sh <IP_DEL_SERVIDOR> [NOMBRE_AGENTE]${NC}"
    echo ""
    echo "  Ejemplo: sudo ./setup_agent.sh 192.168.1.100"
    echo "  Ejemplo: sudo ./setup_agent.sh 192.168.1.100 mi-servidor-web"
    echo ""
    exit 1
fi

# --- Validar root ---
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}Ejecuta con sudo: sudo ./setup_agent.sh $SERVER_IP${NC}"
    exit 1
fi

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}       ${BOLD}Horus SIEM Agent — Instalacion automatica${NC}          ${CYAN}║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# --- 1. Python3 ---
echo -e "${BOLD}[1/4] Python3...${NC}"
if command -v python3 &> /dev/null; then
    echo -e "   $(python3 --version) ${GREEN}OK${NC}"
else
    echo -e "   Instalando Python3..."
    apt-get update -qq > /dev/null 2>&1
    apt-get install -y -qq python3 python3-pip > /dev/null 2>&1
    echo -e "   ${GREEN}Python3 instalado${NC}"
fi

# --- 2. Dependencias ---
echo -e "${BOLD}[2/4] Dependencias...${NC}"
pip3 install --break-system-packages -q psutil requests cryptography 2>/dev/null || \
pip3 install -q psutil requests cryptography 2>/dev/null || \
python3 -m pip install -q psutil requests cryptography 2>/dev/null
echo -e "   ${GREEN}psutil, requests, cryptography OK${NC}"

# --- 3. Configurar ---
echo -e "${BOLD}[3/4] Configurando agente...${NC}"
mkdir -p "$AGENT_DIR/data" "$AGENT_DIR/logs"

python3 << PYEOF
import json
config_path = "$AGENT_DIR/config.json"
with open(config_path) as f:
    config = json.load(f)
config["server"]["host"] = "$SERVER_IP"
config["agent"]["name"] = "$AGENT_NAME"
config["agent"]["id"] = None
with open(config_path, "w") as f:
    json.dump(config, f, indent=4)
PYEOF
echo -e "   Servidor: ${BOLD}$SERVER_IP:5001${NC}"
echo -e "   Agente:   ${BOLD}$AGENT_NAME${NC}"
echo -e "   ${GREEN}Configurado${NC}"

# --- 4. Verificar conexion ---
echo -e "${BOLD}[4/4] Conexion al servidor...${NC}"
if curl -s -o /dev/null -w "%{http_code}" "http://$SERVER_IP:5001/health" 2>/dev/null | grep -q "200"; then
    echo -e "   ${GREEN}Servidor alcanzable${NC}"
else
    echo -e "   ${YELLOW}Servidor no responde aun (se reintentara al iniciar)${NC}"
fi

# --- Listo ---
echo ""
echo -e "${GREEN}${BOLD}Instalacion completa. Iniciando agente...${NC}"
echo -e "${YELLOW}Presiona Ctrl+C para detener${NC}"
echo ""

cd "$AGENT_DIR"
python3 main.py
