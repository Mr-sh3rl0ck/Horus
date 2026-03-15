#!/usr/bin/env python3
"""
Horus SIEM — Live Attack Simulator
Envía eventos realistas al servidor para demostrar detección en tiempo real.

Escenarios:
  1) Fuerza bruta SSH  — 8 intentos fallidos + alerta de correlación
  2) FIM               — Creación, modificación y eliminación de archivos
  3) Syscollector       — Inventario con paquetes vulnerables

Uso:
    python simulate_attack.py --server http://localhost:5001

Instrucciones para la PoC en vivo:
    1. Inicia el servidor (python main.py o docker-compose up)
    2. Abre el dashboard en el navegador
    3. Ejecuta este script
    4. Observa las alertas aparecer en tiempo real en el dashboard
"""

import json
import time
import sys
import argparse
import requests
from datetime import datetime


# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

DEFAULT_SERVER = "http://localhost:5001"
AGENT_ID = "demo-agent"
AGENT_NAME = "demo-endpoint"

ATTACKER_IP = "185.220.101.42"
TARGET_USERS = ["root", "admin", "ubuntu"]
INVALID_USERS = ["scanner", "hadoop", "oracle", "ftpuser", "guest"]


def send_event(server_url: str, event: dict) -> bool:
    """Envía un evento al servidor."""
    try:
        resp = requests.post(
            f"{server_url}/api/events",
            json=event,
            timeout=5,
        )
        return resp.status_code == 200
    except requests.ConnectionError:
        print(f"   ❌ No se pudo conectar a {server_url}")
        return False
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False


def banner(text: str):
    """Imprime un banner bonito."""
    print(f"\n{'='*60}")
    print(f"  🎯 {text}")
    print(f"{'='*60}")


def step(text: str):
    """Imprime un paso con animación."""
    print(f"\n   ➤ {text}", end="", flush=True)


def ok():
    print(" ✅")


def wait(seconds: float, msg: str = ""):
    """Espera con countdown."""
    if msg:
        print(f"\n   ⏳ {msg}", end="", flush=True)
    for i in range(int(seconds), 0, -1):
        print(f" {i}...", end="", flush=True)
        time.sleep(1)
    print()


# ---------------------------------------------------------------------------
# Escenario 1: Fuerza Bruta SSH
# ---------------------------------------------------------------------------

def scenario_brute_force(server_url: str):
    banner("ESCENARIO 1: Ataque de Fuerza Bruta SSH")
    print(f"\n   Atacante: {ATTACKER_IP}")
    print(f"   Objetivo: Servidor SSH del endpoint {AGENT_NAME}")
    print(f"   El servidor debe detectar 5+ intentos fallidos en 60s")
    print(f"   y generar una alerta de correlación COR-001")

    wait(2, "Iniciando ataque")

    # Enviar 8 intentos fallidos rápidos
    for i in range(8):
        user = TARGET_USERS[i % len(TARGET_USERS)]
        port = 40000 + i

        event = {
            "agent_id": AGENT_ID,
            "type": "log",
            "timestamp": time.time(),
            "agent_time_iso": datetime.now().strftime("%Y-%m-%dT%H:%M:%S"),
            "raw_log": f"Failed password for {user} from {ATTACKER_IP} port {port} ssh2",
            "parsed": {
                "program": "sshd",
                "action": "failed_login",
                "src_ip": ATTACKER_IP,
                "dst_user": user,
                "src_port": str(port),
            },
            "source": "/var/log/auth.log",
            "agent_name": AGENT_NAME,
            "hostname": AGENT_NAME,
        }

        step(f"Intento {i+1}/8: SSH login fallido — {user}@{ATTACKER_IP}:{port}")
        if send_event(server_url, event):
            ok()
        time.sleep(0.5)

    # Enviar 3 intentos con usuarios inválidos
    print()
    for i in range(3):
        user = INVALID_USERS[i]
        event = {
            "agent_id": AGENT_ID,
            "type": "log",
            "timestamp": time.time(),
            "agent_time_iso": datetime.now().strftime("%Y-%m-%dT%H:%M:%S"),
            "raw_log": f"Invalid user {user} from {ATTACKER_IP} port {50000+i}",
            "parsed": {
                "program": "sshd",
                "action": "invalid_user",
                "src_ip": ATTACKER_IP,
                "dst_user": user,
            },
            "source": "/var/log/auth.log",
            "agent_name": AGENT_NAME,
            "hostname": AGENT_NAME,
        }

        step(f"Intento con usuario inválido: {user}@{ATTACKER_IP}")
        if send_event(server_url, event):
            ok()
        time.sleep(0.3)

    print(f"\n   📍 Revisa el dashboard → Threat Hunting")
    print(f"      Deberías ver alertas SSH-001, SSH-003 y correlación COR-001/COR-002")


# ---------------------------------------------------------------------------
# Escenario 2: Cambios FIM
# ---------------------------------------------------------------------------

def scenario_fim(server_url: str):
    banner("ESCENARIO 2: Cambios de Integridad de Archivos (FIM)")
    print(f"\n   Simulando actividad sospechosa en archivos críticos")

    wait(2, "Iniciando detección FIM")

    fim_events = [
        {"action": "created",  "path": "/etc/cron.d/backdoor",          "desc": "Archivo sospechoso creado en cron"},
        {"action": "modified", "path": "/etc/ssh/sshd_config",          "desc": "Configuración SSH modificada"},
        {"action": "modified", "path": "/etc/passwd",                   "desc": "Archivo de usuarios modificado"},
        {"action": "created",  "path": "/tmp/.hidden_shell",            "desc": "Shell oculto detectado en /tmp"},
        {"action": "deleted",  "path": "/var/log/auth.log",             "desc": "¡Log de autenticación borrado!"},
        {"action": "modified", "path": "/etc/sudoers",                  "desc": "Archivo sudoers modificado"},
    ]

    for fe in fim_events:
        event = {
            "agent_id": AGENT_ID,
            "type": "fim",
            "timestamp": time.time(),
            "agent_time_iso": datetime.now().strftime("%Y-%m-%dT%H:%M:%S"),
            "action": fe["action"],
            "path": fe["path"],
            "raw_log": f"FIM: {fe['action']} {fe['path']}",
            "agent_name": AGENT_NAME,
            "hostname": AGENT_NAME,
            "hash_before": "a1b2c3d4e5f6" if fe["action"] != "created" else None,
            "hash_after": "f6e5d4c3b2a1" if fe["action"] != "deleted" else None,
        }

        step(f"[{fe['action'].upper():8s}] {fe['path']} — {fe['desc']}")
        if send_event(server_url, event):
            ok()
        time.sleep(1)

    print(f"\n   📍 Revisa el dashboard → File Integrity")
    print(f"      Deberías ver alertas FIM-001, FIM-002, FIM-003")


# ---------------------------------------------------------------------------
# Escenario 3: Syscollector con vulnerabilidades
# ---------------------------------------------------------------------------

def scenario_syscollector(server_url: str):
    banner("ESCENARIO 3: Inventario de Sistema + Detección de Vulnerabilidades")
    print(f"\n   Enviando inventario con paquetes vulnerables conocidos")
    print(f"   El servidor cruzará con la base CVE y generará alertas")

    wait(2, "Enviando snapshot de syscollector")

    event = {
        "agent_id": AGENT_ID,
        "type": "syscollector",
        "timestamp": time.time(),
        "agent_time_iso": datetime.now().strftime("%Y-%m-%dT%H:%M:%S"),
        "agent_name": AGENT_NAME,
        "hostname": AGENT_NAME,
        "os": {
            "platform": "Ubuntu",
            "platform_release": "22.04",
            "platform_version": "#1 SMP PREEMPT_DYNAMIC",
            "architecture": "x86_64",
        },
        "hardware": {
            "cpu_name": "Intel Core i7-12700K",
            "cpu_count": 8,
            "cpu_usage_percent": 23.5,
            "ram_total_gb": 16.0,
            "ram_used_gb": 5.8,
            "ram_percent": 36.2,
            "disk_total_gb": 256.0,
            "disk_used_gb": 87.3,
            "disk_percent": 34.1,
        },
        "processes": [
            {"pid": 1, "name": "systemd", "status": "sleeping", "cpu_percent": 0.0, "memory_percent": 0.1},
            {"pid": 542, "name": "sshd", "status": "sleeping", "cpu_percent": 0.1, "memory_percent": 0.3},
            {"pid": 1001, "name": "nginx", "status": "sleeping", "cpu_percent": 1.2, "memory_percent": 2.1},
            {"pid": 1255, "name": "python3", "status": "running", "cpu_percent": 5.4, "memory_percent": 3.8},
            {"pid": 1340, "name": "postgres", "status": "sleeping", "cpu_percent": 0.8, "memory_percent": 4.5},
            {"pid": 2001, "name": "redis-server", "status": "sleeping", "cpu_percent": 0.3, "memory_percent": 1.2},
        ],
        "process_count": 127,
        "open_ports": [
            {"port": 22, "protocol": "tcp", "pid": 542, "process": "sshd"},
            {"port": 80, "protocol": "tcp", "pid": 1001, "process": "nginx"},
            {"port": 443, "protocol": "tcp", "pid": 1001, "process": "nginx"},
            {"port": 5432, "protocol": "tcp", "pid": 1340, "process": "postgres"},
            {"port": 6379, "protocol": "tcp", "pid": 2001, "process": "redis-server"},
        ],
        "packages": [
            {"name": "openssh-server", "version": "8.9"},
            {"name": "openssl", "version": "3.0.2"},
            {"name": "curl", "version": "7.81.0"},
            {"name": "sudo", "version": "1.9.9"},
            {"name": "nginx", "version": "1.18.0"},
            {"name": "python3", "version": "3.10.12"},
            {"name": "postgresql", "version": "14.9"},
            {"name": "redis-server", "version": "6.0.16"},
            {"name": "git", "version": "2.34.1"},
            {"name": "vim", "version": "8.2.3995"},
        ],
    }

    step("Enviando inventario completo (OS, hardware, procesos, puertos, paquetes)")
    if send_event(server_url, event):
        ok()

    print(f"\n   📦 Paquetes vulnerables enviados:")
    print(f"      • openssh-server 8.9   → CVE-2024-6387 (Critical)")
    print(f"      • curl 7.81.0          → CVE-2023-38545 (Critical)")
    print(f"      • sudo 1.9.9           → CVE-2023-22809 (High)")
    print(f"      • openssl 3.0.2        → CVE-2024-0727  (Medium)")

    print(f"\n   📍 Revisa el dashboard → Vulnerabilities + System Inventory")


# ---------------------------------------------------------------------------
# Escenario 4: Login exitoso post-ataque
# ---------------------------------------------------------------------------

def scenario_successful_login(server_url: str):
    banner("ESCENARIO 4: Login Exitoso Sospechoso")
    print(f"\n   Tras el ataque de fuerza bruta, el atacante logró acceso")

    wait(2, "Simulando acceso exitoso")

    event = {
        "agent_id": AGENT_ID,
        "type": "log",
        "timestamp": time.time(),
        "agent_time_iso": datetime.now().strftime("%Y-%m-%dT%H:%M:%S"),
        "raw_log": f"Accepted password for root from {ATTACKER_IP} port 48822 ssh2",
        "parsed": {
            "program": "sshd",
            "action": "successful_login",
            "src_ip": ATTACKER_IP,
            "dst_user": "root",
            "src_port": "48822",
        },
        "source": "/var/log/auth.log",
        "agent_name": AGENT_NAME,
        "hostname": AGENT_NAME,
    }

    step(f"SSH login exitoso: root@{ATTACKER_IP}:48822")
    if send_event(server_url, event):
        ok()

    # Sudo command from attacker
    event2 = {
        "agent_id": AGENT_ID,
        "type": "log",
        "timestamp": time.time(),
        "agent_time_iso": datetime.now().strftime("%Y-%m-%dT%H:%M:%S"),
        "raw_log": f"root : TTY=pts/0 ; PWD=/root ; USER=root ; COMMAND=/bin/cat /etc/shadow",
        "parsed": {
            "program": "sudo",
            "action": "sudo_command",
            "src_user": "root",
            "dst_user": "root",
            "command": "/bin/cat /etc/shadow",
        },
        "source": "/var/log/auth.log",
        "agent_name": AGENT_NAME,
        "hostname": AGENT_NAME,
    }

    step(f"Ejecutando: sudo cat /etc/shadow")
    if send_event(server_url, event2):
        ok()

    print(f"\n   📍 Revisa el dashboard → Overview y Threat Hunting")
    print(f"      Alerta SSH-002 + SUDO-001 desde la misma IP atacante")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Horus SIEM — Live Attack Simulator")
    parser.add_argument("--server", default=DEFAULT_SERVER, help=f"URL del servidor (default: {DEFAULT_SERVER})")
    parser.add_argument("--scenario", choices=["all", "brute", "fim", "syscollector", "login"], default="all",
                        help="Escenario a ejecutar (default: all)")
    args = parser.parse_args()

    server_url = args.server.rstrip("/")

    print()
    print("╔══════════════════════════════════════════════════════════╗")
    print("║        🦅  Horus SIEM — Live Attack Simulator           ║")
    print("║                                                          ║")
    print(f"║  Servidor: {server_url:<44s}  ║")
    print("╚══════════════════════════════════════════════════════════╝")

    # Verificar conexión
    print(f"\n   🔌 Verificando conexión al servidor...", end="", flush=True)
    try:
        resp = requests.get(f"{server_url}/health", timeout=5)
        if resp.status_code == 200:
            print(f" Conectado ✅")
            health = resp.json()
            print(f"      Redis: {health.get('redis', 'unknown')}")
            print(f"      Workers: {health.get('workers', 0)}")
        else:
            print(f" Error {resp.status_code} ❌")
            sys.exit(1)
    except requests.ConnectionError:
        print(f" No se pudo conectar ❌")
        print(f"\n   Asegúrate de que el servidor esté corriendo en {server_url}")
        sys.exit(1)

    scenarios = {
        "brute": scenario_brute_force,
        "fim": scenario_fim,
        "syscollector": scenario_syscollector,
        "login": scenario_successful_login,
    }

    if args.scenario == "all":
        for name, fn in scenarios.items():
            fn(server_url)
            if name != "login":
                wait(3, "Siguiente escenario")
    else:
        scenarios[args.scenario](server_url)

    print()
    print("╔══════════════════════════════════════════════════════════╗")
    print("║              ✅  Simulación Completada                   ║")
    print("║                                                          ║")
    print("║  Revisa el dashboard para ver todas las alertas          ║")
    print("║  generadas en tiempo real.                               ║")
    print("╚══════════════════════════════════════════════════════════╝")
    print()


if __name__ == "__main__":
    main()
