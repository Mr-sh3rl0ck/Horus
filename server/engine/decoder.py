# Horus SIEM Server - Log Decoder/Normalizer
# RF-SRV-03: Regex-based log parsing to structured JSON

import re
import logging
from typing import Dict, Optional, List

logger = logging.getLogger("horus.server.decoder")


# ---------------------------------------------------------------------------
# Decoder definitions
# ---------------------------------------------------------------------------

DECODERS = [
    {
        "name": "sshd",
        "program": "sshd",
        "patterns": [
            {
                "name": "failed_password",
                "regex": re.compile(
                    r"Failed password for (?:invalid user )?(\S+) from (\S+) port (\d+)"
                ),
                "fields": ["dst_user", "src_ip", "src_port"],
                "action": "failed_login",
            },
            {
                "name": "accepted_password",
                "regex": re.compile(
                    r"Accepted (?:password|publickey) for (\S+) from (\S+) port (\d+)"
                ),
                "fields": ["dst_user", "src_ip", "src_port"],
                "action": "successful_login",
            },
            {
                "name": "invalid_user",
                "regex": re.compile(
                    r"Invalid user (\S+) from (\S+)"
                ),
                "fields": ["dst_user", "src_ip"],
                "action": "invalid_user",
            },
            {
                "name": "disconnect",
                "regex": re.compile(
                    r"Disconnected from (?:authenticating )?user (\S+) (\S+) port (\d+)"
                ),
                "fields": ["dst_user", "src_ip", "src_port"],
                "action": "disconnect",
            },
        ],
    },
    {
        "name": "sudo",
        "program": "sudo",
        "patterns": [
            {
                "name": "sudo_command",
                "regex": re.compile(
                    r"(\S+) : TTY=(\S+) ; PWD=(\S+) ; USER=(\S+) ; COMMAND=(.*)"
                ),
                "fields": ["src_user", "tty", "pwd", "dst_user", "command"],
                "action": "sudo_command",
            },
            {
                "name": "sudo_failed",
                "regex": re.compile(
                    r"(\S+) : .* NOT allowed .* COMMAND=(.*)"
                ),
                "fields": ["src_user", "command"],
                "action": "sudo_failed",
            },
        ],
    },
    {
        "name": "fim",
        "program": None,  # FIM events come with type="fim"
        "patterns": [],
    },
]


def decode_event(event: Dict) -> Dict:
    """
    Decodifica y normaliza un evento crudo.

    Extrae campos relevantes del log usando regex y produce un
    evento estructurado con campos normalizados.

    Args:
        event: Evento crudo del agente

    Returns:
        Evento enriquecido con campos decodificados
    """
    event_type = event.get("type", "unknown")

    # FIM/Syscollector events ya vienen parcialmente estructurados
    if event_type in ("fim", "syscollector", "active_response_result"):
        event["decoded"] = True
        event["decoder"] = event_type
        return event

    # Log events requieren decodificación
    raw_log = event.get("raw_log", "")
    parsed = event.get("parsed", {})
    program = parsed.get("program", "")
    message = parsed.get("message", raw_log)

    decoded_fields = {}
    decoder_name = "generic"

    # Intentar con cada decoder
    for decoder in DECODERS:
        if decoder["program"] and program and decoder["program"] not in program.lower():
            continue

        for pattern in decoder["patterns"]:
            match = pattern["regex"].search(message)
            if match:
                decoder_name = f"{decoder['name']}.{pattern['name']}"

                # Extraer campos
                for i, field in enumerate(pattern["fields"]):
                    try:
                        decoded_fields[field] = match.group(i + 1)
                    except IndexError:
                        pass

                decoded_fields["action"] = pattern["action"]
                break

        if decoded_fields:
            break

    # Si no matcheó ningún decoder, usar campos del parsed del agente
    if not decoded_fields:
        decoded_fields = {
            "action": parsed.get("action"),
            "src_ip": parsed.get("src_ip"),
            "dst_user": parsed.get("dst_user"),
            "program": program,
        }
        decoder_name = "agent_parsed"

    # Merge decoded fields into event
    event["decoded"] = True
    event["decoder"] = decoder_name
    event["decoded_fields"] = decoded_fields

    return event
