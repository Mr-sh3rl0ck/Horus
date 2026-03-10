# Horus SIEM Server - Rules Engine
# RF-SRV-04: YAML-based rule matching against decoded events

import logging
import re
from pathlib import Path
from typing import Dict, List, Optional

import yaml

logger = logging.getLogger("horus.server.rules")


class Rule:
    """Represents a single detection rule."""

    def __init__(self, rule_def: Dict):
        self.id = rule_def.get("id", "unknown")
        self.name = rule_def.get("name", "Unnamed Rule")
        self.description = rule_def.get("description", "")
        self.level = rule_def.get("level", 3)
        self.event_type = rule_def.get("event_type")
        self.conditions = rule_def.get("conditions", {})
        self.mitre = rule_def.get("mitre", {})
        self.active = rule_def.get("active", True)

    def matches(self, event: Dict) -> bool:
        """
        Checks if an event matches this rule's conditions.

        Args:
            event: Decoded event dictionary

        Returns:
            True if all conditions match
        """
        if not self.active:
            return False

        # Check event type
        if self.event_type and event.get("type") != self.event_type:
            return False

        decoded = event.get("decoded_fields", {})
        parsed = event.get("parsed", {})
        # Merge sources for condition checking
        fields = {**parsed, **decoded}

        for field, expected in self.conditions.items():
            actual = fields.get(field)

            if actual is None:
                # Also check top-level event fields
                actual = event.get(field)

            if actual is None:
                return False

            # Support regex matching with "regex:" prefix
            if isinstance(expected, str) and expected.startswith("regex:"):
                pattern = expected[6:]
                if not re.search(pattern, str(actual)):
                    return False
            elif isinstance(expected, list):
                # OR matching - actual must be one of the values
                if actual not in expected:
                    return False
            else:
                if str(actual) != str(expected):
                    return False

        return True

    def generate_alert(self, event: Dict) -> Dict:
        """Generates an alert from a matching event."""
        decoded = event.get("decoded_fields", {})
        parsed = event.get("parsed", {})

        return {
            "rule_id": self.id,
            "rule_name": self.name,
            "rule_description": self.description,
            "level": self.level,
            "mitre": self.mitre,
            "event_type": event.get("type", "unknown"),
            "agent_id": event.get("agent_id"),
            "src_ip": decoded.get("src_ip") or parsed.get("src_ip"),
            "dst_user": decoded.get("dst_user") or parsed.get("dst_user"),
            "action": decoded.get("action") or parsed.get("action") or event.get("action"),
            "raw_log": event.get("raw_log", ""),
            "path": event.get("path"),
            "timestamp": event.get("timestamp"),
            "agent_time_iso": event.get("agent_time_iso"),
        }


class RulesEngine:
    """Loads and evaluates rules against events."""

    def __init__(self, rules_path: str = None):
        self.rules: List[Rule] = []

        if rules_path:
            self.load_rules(rules_path)

    def load_rules(self, path: str) -> None:
        """Loads rules from a YAML file."""
        rules_file = Path(path)
        if not rules_file.exists():
            logger.warning(f"Archivo de reglas no encontrado: {path}")
            return

        with open(rules_file, "r", encoding="utf-8") as f:
            data = yaml.safe_load(f)

        rules_list = data.get("rules", [])
        self.rules = [Rule(r) for r in rules_list]
        logger.info(f"Cargadas {len(self.rules)} reglas desde {path}")

    def evaluate(self, event: Dict) -> List[Dict]:
        """
        Evaluates an event against all rules.

        Returns:
            List of alert dicts for matching rules
        """
        alerts = []

        for rule in self.rules:
            if rule.matches(event):
                alert = rule.generate_alert(event)
                alerts.append(alert)
                logger.info(
                    f"Regla activada: [{rule.id}] {rule.name} (nivel {rule.level})"
                )

        return alerts
