# Horus SIEM Server - Vulnerability Manager
# RF-SRV-07: Correlates Syscollector inventory with CVE/NVD data

import logging
import time
from typing import Dict, List, Optional

logger = logging.getLogger("horus.server.vuln_manager")

try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    HAS_REQUESTS = False


# ---------------------------------------------------------------------------
# Local CVE cache (MVP — avoids hammering NVD API)
# ---------------------------------------------------------------------------

# Common known-vulnerable packages for demonstration
KNOWN_VULNS = {
    "openssl": [
        {
            "cve_id": "CVE-2024-0727",
            "severity": "medium",
            "affected_versions": "<3.0.13",
            "description": "OpenSSL denial of service via PKCS#12 files",
        },
    ],
    "openssh-server": [
        {
            "cve_id": "CVE-2024-6387",
            "severity": "critical",
            "affected_versions": "<9.8",
            "description": "regreSSHion: RCE in OpenSSH server (glibc-based Linux)",
        },
    ],
    "sudo": [
        {
            "cve_id": "CVE-2023-22809",
            "severity": "high",
            "affected_versions": "<1.9.12p2",
            "description": "Sudo privilege escalation via sudoedit",
        },
    ],
    "curl": [
        {
            "cve_id": "CVE-2023-38545",
            "severity": "critical",
            "affected_versions": "<8.4.0",
            "description": "SOCKS5 heap buffer overflow",
        },
    ],
}


class VulnerabilityManager:
    """
    Correlates agent software inventory with vulnerability databases.
    MVP uses a local cache; can be extended to query NVD API.
    """

    def __init__(self):
        self.vuln_cache = KNOWN_VULNS.copy()

    def check_inventory(self, inventory_event: Dict) -> List[Dict]:
        """
        Checks a Syscollector inventory event for known vulnerabilities.

        Args:
            inventory_event: Event with packages list

        Returns:
            List of vulnerability alerts
        """
        packages = inventory_event.get("packages", [])
        agent_id = inventory_event.get("agent_id")
        vulns_found = []

        for pkg in packages:
            name = pkg.get("name", "").lower()
            version = pkg.get("version", "")

            if name in self.vuln_cache:
                for vuln in self.vuln_cache[name]:
                    # Simple version comparison (MVP)
                    vuln_alert = {
                        "rule_id": f"VUL-{vuln['cve_id']}",
                        "rule_name": f"Vulnerable Package: {name}",
                        "rule_description": vuln["description"],
                        "level": self._severity_to_level(vuln["severity"]),
                        "event_type": "vulnerability",
                        "agent_id": agent_id,
                        "action": "vulnerable_package",
                        "raw_log": f"{name}@{version} — {vuln['cve_id']}: {vuln['description']}",
                        "mitre": {
                            "tactic": ["Initial Access"],
                            "technique": ["T1190 - Exploit Public-Facing Application"],
                        },
                        "vulnerability": {
                            "cve_id": vuln["cve_id"],
                            "package": name,
                            "installed_version": version,
                            "affected_versions": vuln["affected_versions"],
                            "severity": vuln["severity"],
                        },
                        "timestamp": time.time(),
                    }
                    vulns_found.append(vuln_alert)

        if vulns_found:
            logger.warning(
                f"Encontradas {len(vulns_found)} vulnerabilidades para agente {agent_id}"
            )

        return vulns_found

    def _severity_to_level(self, severity: str) -> int:
        """Maps CVE severity to Horus alert level."""
        mapping = {
            "critical": 14,
            "high": 11,
            "medium": 7,
            "low": 3,
        }
        return mapping.get(severity.lower(), 5)

    def query_nvd(self, package_name: str) -> List[Dict]:
        """
        Queries the NVD API for vulnerabilities (future implementation).

        Args:
            package_name: Name of the package to check

        Returns:
            List of CVE records
        """
        if not HAS_REQUESTS:
            return []

        # TODO: Implement NVD API query
        # https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch={package}
        return []
