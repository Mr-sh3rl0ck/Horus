# Horus SIEM Server - MITRE ATT&CK Enrichment
# RF-SRV-06: Enriches alerts with MITRE tactics and techniques

import json
import logging
from pathlib import Path
from typing import Dict, Optional

logger = logging.getLogger("horus.server.mitre")


class MitreEnricher:
    """Enriches alerts with MITRE ATT&CK metadata."""

    def __init__(self, mitre_map_path: str = None):
        self.mitre_map: Dict = {}

        if mitre_map_path:
            self.load_map(mitre_map_path)

    def load_map(self, path: str) -> None:
        """Loads the MITRE mapping from a JSON file."""
        map_file = Path(path)
        if not map_file.exists():
            logger.warning(f"MITRE map no encontrado: {path}")
            return

        with open(map_file, "r", encoding="utf-8") as f:
            self.mitre_map = json.load(f)

        logger.info(f"MITRE map cargado: {len(self.mitre_map)} mapeos")

    def enrich(self, alert: Dict) -> Dict:
        """
        Enriches an alert with MITRE ATT&CK data.

        Checks three sources in order:
        1. The alert's existing MITRE metadata (from rule)
        2. The MITRE map lookup by rule_id
        3. Generic mapping by action type

        Args:
            alert: Alert dictionary

        Returns:
            Alert with enriched MITRE metadata
        """
        # Already has MITRE data from the rule
        if alert.get("mitre") and alert["mitre"].get("tactic"):
            return alert

        rule_id = alert.get("rule_id", "")

        # Lookup by rule_id
        if rule_id in self.mitre_map:
            mapping = self.mitre_map[rule_id]
            alert["mitre"] = {
                "tactic": mapping.get("tactic", []),
                "technique": mapping.get("technique", []),
                "technique_id": mapping.get("technique_id", []),
                "description": mapping.get("description", ""),
                "url": mapping.get("url", ""),
            }
            return alert

        # Fallback: map by action
        action = alert.get("action", "")
        action_mapping = self.mitre_map.get(f"action:{action}")
        if action_mapping:
            alert["mitre"] = action_mapping

        return alert
