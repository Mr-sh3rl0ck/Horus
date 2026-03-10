# Horus SIEM Server - Correlation Engine
# RF-SRV-05: Time-window event correlation for complex threat detection

import time
import logging
from collections import defaultdict
from threading import Lock
from typing import Dict, List, Optional

logger = logging.getLogger("horus.server.correlator")


class CorrelationRule:
    """Defines a correlation pattern (e.g., brute force)."""

    def __init__(self, rule_def: Dict):
        self.id = rule_def.get("id", "unknown")
        self.name = rule_def.get("name", "")
        self.description = rule_def.get("description", "")
        self.level = rule_def.get("level", 10)
        self.event_type = rule_def.get("event_type", "log")
        self.action = rule_def.get("action", "")
        self.group_by = rule_def.get("group_by", ["src_ip"])
        self.threshold = rule_def.get("threshold", 5)
        self.window_seconds = rule_def.get("window_seconds", 60)
        self.mitre = rule_def.get("mitre", {})


class CorrelationEngine:
    """
    Tracks events by key over time windows.
    Triggers composite alerts when thresholds are exceeded.
    """

    def __init__(self):
        # key -> list of timestamps
        self._buckets: Dict[str, List[float]] = defaultdict(list)
        self._lock = Lock()
        self._fired: Dict[str, float] = {}  # key -> last fired time (dedup)

        # Default correlation rules
        self.rules: List[CorrelationRule] = [
            CorrelationRule({
                "id": "COR-001",
                "name": "SSH Brute Force Detected",
                "description": "Multiple failed SSH login attempts from the same IP",
                "level": 12,
                "event_type": "log",
                "action": "failed_login",
                "group_by": ["src_ip"],
                "threshold": 5,
                "window_seconds": 60,
                "mitre": {
                    "tactic": ["Credential Access"],
                    "technique": ["T1110 - Brute Force"],
                },
            }),
            CorrelationRule({
                "id": "COR-002",
                "name": "Multiple Invalid Users",
                "description": "Multiple login attempts with invalid usernames from the same IP",
                "level": 10,
                "event_type": "log",
                "action": "invalid_user",
                "group_by": ["src_ip"],
                "threshold": 3,
                "window_seconds": 120,
                "mitre": {
                    "tactic": ["Credential Access", "Discovery"],
                    "technique": ["T1110.001 - Password Guessing"],
                },
            }),
            CorrelationRule({
                "id": "COR-003",
                "name": "Rapid FIM Changes Detected",
                "description": "Multiple file integrity changes in a short period",
                "level": 11,
                "event_type": "fim",
                "action": "modified",
                "group_by": [],
                "threshold": 10,
                "window_seconds": 30,
                "mitre": {
                    "tactic": ["Impact"],
                    "technique": ["T1485 - Data Destruction"],
                },
            }),
        ]

    def _build_key(self, rule: CorrelationRule, event: Dict) -> str:
        """Builds a bucket key from event fields."""
        decoded = event.get("decoded_fields", {})
        parsed = event.get("parsed", {})
        fields = {**parsed, **decoded}

        parts = [rule.id]
        for field in rule.group_by:
            value = fields.get(field) or event.get(field) or "unknown"
            parts.append(str(value))

        return "|".join(parts)

    def _clean_bucket(self, key: str, window: float) -> None:
        """Removes expired timestamps from a bucket."""
        cutoff = time.time() - window
        self._buckets[key] = [
            ts for ts in self._buckets[key] if ts > cutoff
        ]

    def correlate(self, event: Dict) -> List[Dict]:
        """
        Processes an event through correlation rules.

        Args:
            event: Decoded event

        Returns:
            List of correlation alerts triggered
        """
        event_type = event.get("type", "")
        decoded = event.get("decoded_fields", {})
        parsed = event.get("parsed", {})
        action = decoded.get("action") or parsed.get("action") or event.get("action", "")

        alerts = []

        for rule in self.rules:
            # Check if event matches the correlation rule's criteria
            if rule.event_type and event_type != rule.event_type:
                continue
            if rule.action and action != rule.action:
                continue

            key = self._build_key(rule, event)

            with self._lock:
                # Add timestamp
                self._buckets[key].append(time.time())

                # Clean old entries
                self._clean_bucket(key, rule.window_seconds)

                count = len(self._buckets[key])

                # Check threshold
                if count >= rule.threshold:
                    # Dedup: don't fire again within window
                    last_fired = self._fired.get(key, 0)
                    if time.time() - last_fired > rule.window_seconds:
                        self._fired[key] = time.time()

                        alert = {
                            "rule_id": rule.id,
                            "rule_name": rule.name,
                            "rule_description": rule.description,
                            "level": rule.level,
                            "mitre": rule.mitre,
                            "correlation": True,
                            "event_count": count,
                            "window_seconds": rule.window_seconds,
                            "threshold": rule.threshold,
                            "event_type": event_type,
                            "agent_id": event.get("agent_id"),
                            "src_ip": decoded.get("src_ip") or parsed.get("src_ip"),
                            "dst_user": decoded.get("dst_user") or parsed.get("dst_user"),
                            "timestamp": time.time(),
                        }
                        alerts.append(alert)

                        logger.warning(
                            f"Correlación activada: [{rule.id}] {rule.name} "
                            f"({count}/{rule.threshold} en {rule.window_seconds}s)"
                        )

                        # Reset bucket after firing
                        self._buckets[key] = []

        return alerts
