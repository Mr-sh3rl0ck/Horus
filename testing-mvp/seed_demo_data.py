#!/usr/bin/env python3
"""
Horus SIEM — Demo Data Seeder
Genera alertas realistas para que el dashboard se vea poblado en la PoC.

Uso:
    python seed_demo_data.py [--db ./server/data/alerts.db] [--count 150]
"""

import json
import random
import sqlite3
import time
import uuid
import argparse
from pathlib import Path
from datetime import datetime, timedelta


# ---------------------------------------------------------------------------
# Catálogo de alertas realistas
# ---------------------------------------------------------------------------

SSH_ALERTS = [
    {
        "rule_id": "SSH-001",
        "rule_name": "SSH Failed Login Attempt",
        "rule_description": "A failed SSH login attempt was detected",
        "level": 5,
        "event_type": "log",
        "action": "failed_login",
        "mitre": {"tactic": ["Credential Access"], "technique": ["T1110 - Brute Force"]},
    },
    {
        "rule_id": "SSH-002",
        "rule_name": "SSH Successful Login",
        "rule_description": "A successful SSH login was detected",
        "level": 3,
        "event_type": "log",
        "action": "successful_login",
        "mitre": {"tactic": ["Initial Access"], "technique": ["T1078 - Valid Accounts"]},
    },
    {
        "rule_id": "SSH-003",
        "rule_name": "SSH Invalid User Attempt",
        "rule_description": "Login attempt with a non-existent username",
        "level": 7,
        "event_type": "log",
        "action": "invalid_user",
        "mitre": {"tactic": ["Credential Access"], "technique": ["T1110.001 - Password Guessing"]},
    },
]

CORRELATION_ALERTS = [
    {
        "rule_id": "COR-001",
        "rule_name": "SSH Brute Force Detected",
        "rule_description": "Multiple failed SSH login attempts from the same IP",
        "level": 12,
        "event_type": "log",
        "action": "failed_login",
        "correlation": True,
        "mitre": {"tactic": ["Credential Access"], "technique": ["T1110 - Brute Force"]},
    },
    {
        "rule_id": "COR-002",
        "rule_name": "Multiple Invalid Users",
        "rule_description": "Multiple login attempts with invalid usernames from the same IP",
        "level": 10,
        "event_type": "log",
        "action": "invalid_user",
        "correlation": True,
        "mitre": {"tactic": ["Credential Access", "Discovery"], "technique": ["T1110.001 - Password Guessing"]},
    },
]

FIM_ALERTS = [
    {
        "rule_id": "FIM-001",
        "rule_name": "Critical File Modified",
        "rule_description": "A monitored file was modified",
        "level": 8,
        "event_type": "fim",
        "action": "modified",
        "mitre": {"tactic": ["Defense Evasion", "Impact"], "technique": ["T1565 - Data Manipulation"]},
    },
    {
        "rule_id": "FIM-002",
        "rule_name": "Critical File Deleted",
        "rule_description": "A monitored file was deleted",
        "level": 10,
        "event_type": "fim",
        "action": "deleted",
        "mitre": {"tactic": ["Impact"], "technique": ["T1485 - Data Destruction"]},
    },
    {
        "rule_id": "FIM-003",
        "rule_name": "New File Created in Monitored Path",
        "rule_description": "A new file was created in a monitored directory",
        "level": 5,
        "event_type": "fim",
        "action": "created",
        "mitre": {"tactic": ["Persistence"], "technique": ["T1105 - Ingress Tool Transfer"]},
    },
]

SUDO_ALERTS = [
    {
        "rule_id": "SUDO-001",
        "rule_name": "Sudo Command Executed",
        "rule_description": "A command was executed with sudo privileges",
        "level": 4,
        "event_type": "log",
        "action": "sudo_command",
        "mitre": {"tactic": ["Privilege Escalation"], "technique": ["T1548.003 - Sudo and Sudo Caching"]},
    },
    {
        "rule_id": "SUDO-002",
        "rule_name": "Sudo Command Denied",
        "rule_description": "A sudo command was attempted but denied",
        "level": 9,
        "event_type": "log",
        "action": "sudo_failed",
        "mitre": {"tactic": ["Privilege Escalation"], "technique": ["T1548.003 - Sudo and Sudo Caching"]},
    },
]

VULN_ALERTS = [
    {
        "rule_id": "VUL-CVE-2024-6387",
        "rule_name": "Vulnerable Package: openssh-server",
        "rule_description": "regreSSHion: RCE in OpenSSH server (glibc-based Linux)",
        "level": 14,
        "event_type": "vulnerability",
        "action": "vulnerable_package",
        "mitre": {"tactic": ["Initial Access"], "technique": ["T1190 - Exploit Public-Facing Application"]},
    },
    {
        "rule_id": "VUL-CVE-2023-38545",
        "rule_name": "Vulnerable Package: curl",
        "rule_description": "SOCKS5 heap buffer overflow",
        "level": 14,
        "event_type": "vulnerability",
        "action": "vulnerable_package",
        "mitre": {"tactic": ["Initial Access"], "technique": ["T1190 - Exploit Public-Facing Application"]},
    },
    {
        "rule_id": "VUL-CVE-2023-22809",
        "rule_name": "Vulnerable Package: sudo",
        "rule_description": "Sudo privilege escalation via sudoedit",
        "level": 11,
        "event_type": "vulnerability",
        "action": "vulnerable_package",
        "mitre": {"tactic": ["Initial Access"], "technique": ["T1190 - Exploit Public-Facing Application"]},
    },
    {
        "rule_id": "VUL-CVE-2024-0727",
        "rule_name": "Vulnerable Package: openssl",
        "rule_description": "OpenSSL denial of service via PKCS#12 files",
        "level": 7,
        "event_type": "vulnerability",
        "action": "vulnerable_package",
        "mitre": {"tactic": ["Initial Access"], "technique": ["T1190 - Exploit Public-Facing Application"]},
    },
]

# ---------------------------------------------------------------------------
# Data generators
# ---------------------------------------------------------------------------

ATTACKER_IPS = [
    "185.220.101.42", "45.33.32.156", "91.240.118.172",
    "103.235.47.88", "198.51.100.23", "203.0.113.55",
    "178.128.22.100", "159.89.198.77", "64.227.15.33",
]

TARGET_USERS = ["root", "admin", "ubuntu", "deploy", "postgres", "nginx", "git", "test", "user1"]

INVALID_USERS = ["scanner", "hadoop", "oracle", "ftpuser", "guest", "backup", "mysql", "nagios"]

AGENT_IDS = ["agt-001a", "agt-002b", "agt-003c"]

FIM_PATHS = [
    "/etc/passwd", "/etc/shadow", "/etc/ssh/sshd_config",
    "/etc/crontab", "/etc/hosts", "/var/www/html/index.html",
    "/usr/local/bin/deploy.sh", "/etc/sudoers",
    "/etc/nginx/nginx.conf", "/opt/app/config.yml",
]

SUDO_COMMANDS = [
    "/usr/bin/apt update", "/usr/sbin/service nginx restart",
    "/usr/bin/systemctl status sshd", "/bin/cat /etc/shadow",
    "/usr/bin/vim /etc/hosts", "/usr/sbin/iptables -L",
]

RAW_LOG_TEMPLATES = {
    "failed_login": "Mar {day} {time} server sshd[{pid}]: Failed password for {user} from {ip} port {port} ssh2",
    "successful_login": "Mar {day} {time} server sshd[{pid}]: Accepted password for {user} from {ip} port {port} ssh2",
    "invalid_user": "Mar {day} {time} server sshd[{pid}]: Invalid user {user} from {ip} port {port}",
    "sudo_command": "Mar {day} {time} server sudo: {user} : TTY=pts/0 ; PWD=/home/{user} ; USER=root ; COMMAND={cmd}",
    "sudo_failed": "Mar {day} {time} server sudo: {user} : command not allowed ; TTY=pts/0 ; PWD=/home/{user} ; USER=root ; COMMAND={cmd}",
}


def generate_raw_log(action: str, ts: float) -> str:
    """Genera un log crudo realista."""
    dt = datetime.fromtimestamp(ts)
    params = {
        "day": dt.strftime("%d"),
        "time": dt.strftime("%H:%M:%S"),
        "pid": random.randint(1000, 65000),
        "user": random.choice(TARGET_USERS if action != "invalid_user" else INVALID_USERS),
        "ip": random.choice(ATTACKER_IPS),
        "port": random.randint(40000, 65535),
        "cmd": random.choice(SUDO_COMMANDS),
    }
    template = RAW_LOG_TEMPLATES.get(action, "")
    return template.format(**params) if template else f"[{action}] event at {dt.isoformat()}"


def random_timestamp(days_back: int = 30) -> float:
    """Genera un timestamp aleatorio en los últimos N días."""
    now = time.time()
    offset = random.uniform(0, days_back * 86400)
    return now - offset


# ---------------------------------------------------------------------------
# DB insertion
# ---------------------------------------------------------------------------

def init_db(db_path: str) -> sqlite3.Connection:
    """Crea/conecta a la DB y asegura que las tablas existan."""
    conn = sqlite3.connect(db_path)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS alerts (
            id TEXT PRIMARY KEY,
            rule_id TEXT,
            rule_name TEXT,
            rule_description TEXT,
            level INTEGER DEFAULT 3,
            event_type TEXT,
            agent_id TEXT,
            src_ip TEXT,
            dst_user TEXT,
            action TEXT,
            raw_log TEXT,
            path TEXT,
            mitre_json TEXT,
            correlation INTEGER DEFAULT 0,
            event_count INTEGER DEFAULT 1,
            timestamp REAL,
            agent_time_iso TEXT,
            created_at REAL NOT NULL
        )
    """)

    conn.execute("CREATE INDEX IF NOT EXISTS idx_alerts_level ON alerts(level)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_alerts_agent ON alerts(agent_id)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_alerts_time ON alerts(created_at DESC)")

    try:
        conn.execute("""
            CREATE VIRTUAL TABLE IF NOT EXISTS alerts_fts USING fts5(
                id, rule_name, rule_description, raw_log, src_ip,
                dst_user, action, path,
                content='alerts',
                content_rowid='rowid'
            )
        """)
        conn.execute("""
            CREATE TRIGGER IF NOT EXISTS alerts_ai AFTER INSERT ON alerts BEGIN
                INSERT INTO alerts_fts(id, rule_name, rule_description, raw_log,
                    src_ip, dst_user, action, path)
                VALUES (new.id, new.rule_name, new.rule_description, new.raw_log,
                    new.src_ip, new.dst_user, new.action, new.path);
            END
        """)
    except Exception:
        pass  # FTS already exists

    conn.commit()
    return conn


def insert_alert(conn: sqlite3.Connection, template: dict, ts: float) -> str:
    """Inserta una alerta con datos aleatorios realistas."""
    alert_id = str(uuid.uuid4())[:12]
    action = template.get("action", "")
    agent_id = random.choice(AGENT_IDS)
    src_ip = random.choice(ATTACKER_IPS) if action not in ("sudo_command", "sudo_failed", "modified", "deleted", "created", "vulnerable_package") else None
    dst_user = random.choice(TARGET_USERS) if action in ("failed_login", "successful_login", "sudo_command", "sudo_failed") else (
        random.choice(INVALID_USERS) if action == "invalid_user" else None
    )
    path = random.choice(FIM_PATHS) if template["event_type"] == "fim" else None
    raw_log = generate_raw_log(action, ts) if template["event_type"] == "log" else (
        f"FIM: {action} {path}" if template["event_type"] == "fim" else
        f"{template.get('rule_description', '')}"
    )

    event_count = random.randint(5, 20) if template.get("correlation") else 1
    dt = datetime.fromtimestamp(ts)

    conn.execute("""
        INSERT INTO alerts (
            id, rule_id, rule_name, rule_description, level,
            event_type, agent_id, src_ip, dst_user, action,
            raw_log, path, mitre_json, correlation, event_count,
            timestamp, agent_time_iso, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        alert_id,
        template["rule_id"],
        template["rule_name"],
        template["rule_description"],
        template["level"],
        template["event_type"],
        agent_id,
        src_ip,
        dst_user,
        action,
        raw_log,
        path,
        json.dumps(template.get("mitre", {})),
        1 if template.get("correlation") else 0,
        event_count,
        ts,
        dt.strftime("%Y-%m-%dT%H:%M:%S"),
        ts,
    ))

    return alert_id


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def seed(db_path: str, count: int = 150):
    """Genera alertas de demostración."""
    conn = init_db(db_path)

    # Distribución realista de alertas
    weights = {
        "ssh_failed": 30,       # Muy frecuente
        "ssh_success": 10,      # Menos
        "ssh_invalid": 15,      # Frecuente
        "cor_brute": 8,         # Correlaciones
        "cor_invalid": 5,
        "fim_modified": 10,     # FIM
        "fim_deleted": 4,
        "fim_created": 6,
        "sudo_ok": 5,           # Sudo
        "sudo_fail": 3,
        "vuln": 4,              # Vulnerabilidades
    }

    templates_map = {
        "ssh_failed": SSH_ALERTS[0],
        "ssh_success": SSH_ALERTS[1],
        "ssh_invalid": SSH_ALERTS[2],
        "cor_brute": CORRELATION_ALERTS[0],
        "cor_invalid": CORRELATION_ALERTS[1],
        "fim_modified": FIM_ALERTS[0],
        "fim_deleted": FIM_ALERTS[1],
        "fim_created": FIM_ALERTS[2],
        "sudo_ok": SUDO_ALERTS[0],
        "sudo_fail": SUDO_ALERTS[1],
        "vuln": None,  # Will pick from VULN_ALERTS randomly
    }

    total_weight = sum(weights.values())
    pool = []
    for key, weight in weights.items():
        n = max(1, round(count * weight / total_weight))
        pool.extend([key] * n)

    random.shuffle(pool)
    pool = pool[:count]

    print(f"🌱 Sembrando {len(pool)} alertas en {db_path}...")

    generated = {
        "critical": 0, "high": 0, "medium": 0, "low": 0,
        "by_type": {}
    }

    for key in pool:
        if key == "vuln":
            template = random.choice(VULN_ALERTS)
        else:
            template = templates_map[key]

        ts = random_timestamp(days_back=30)
        insert_alert(conn, template, ts)

        level = template["level"]
        if level >= 12:
            generated["critical"] += 1
        elif level >= 8:
            generated["high"] += 1
        elif level >= 4:
            generated["medium"] += 1
        else:
            generated["low"] += 1

        etype = template["event_type"]
        generated["by_type"][etype] = generated["by_type"].get(etype, 0) + 1

    conn.commit()
    conn.close()

    print(f"\n✅ {len(pool)} alertas generadas exitosamente!")
    print(f"\n📊 Distribución por severidad:")
    print(f"   🔴 Critical: {generated['critical']}")
    print(f"   🟠 High:     {generated['high']}")
    print(f"   🟡 Medium:   {generated['medium']}")
    print(f"   🟢 Low:      {generated['low']}")
    print(f"\n📂 Distribución por tipo:")
    for t, c in sorted(generated["by_type"].items()):
        print(f"   • {t}: {c}")
    print(f"\n💡 Ahora inicia el servidor y abre el dashboard para ver los datos.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Horus SIEM — Demo Data Seeder")
    parser.add_argument("--db", default="./server/data/alerts.db", help="Ruta a la base de datos SQLite")
    parser.add_argument("--count", type=int, default=150, help="Número de alertas a generar")
    args = parser.parse_args()

    Path(args.db).parent.mkdir(parents=True, exist_ok=True)
    seed(args.db, args.count)
