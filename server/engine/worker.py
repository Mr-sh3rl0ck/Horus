# Horus SIEM Server - Analysis Worker
# Consumes events from Redis and runs the analysis pipeline

import json
import time
import logging
from threading import Thread, Event
from typing import Optional

from engine.decoder import decode_event
from engine.rules import RulesEngine
from engine.correlator import CorrelationEngine
from engine.mitre import MitreEnricher
from services.vuln_manager import VulnerabilityManager

logger = logging.getLogger("horus.server.worker")


class AnalysisWorker:
    """
    Worker thread that consumes events from Redis and processes them
    through the pipeline: Decode → Rules → Correlate → MITRE → Store → Push.
    """

    def __init__(self, worker_id: int, config: dict, redis_client, alert_store, push_service=None):
        self.worker_id = worker_id
        self.config = config
        self.redis_client = redis_client
        self.alert_store = alert_store
        self.push_service = push_service  # PushService instance (puede ser None si FCM deshabilitado)
        self._stop_event = Event()
        self._thread: Optional[Thread] = None

        # Pipeline components
        analysis_config = config.get("analysis", {})

        self.rules_engine = RulesEngine(
            rules_path=analysis_config.get("rules_path")
        )
        self.correlator = CorrelationEngine()
        self.mitre_enricher = MitreEnricher(
            mitre_map_path=analysis_config.get("mitre_map_path")
        )
        self.vuln_manager = VulnerabilityManager()

        self.queue_key = config.get("redis", {}).get("event_queue_key", "horus:events")
        self.batch_size = config.get("workers", {}).get("batch_size", 10)

    def _process_event(self, event: dict) -> None:
        """Runs a single event through the full analysis pipeline."""
        try:
            # Step 1: Decode / Normalize
            event = decode_event(event)

            # Step 2: Rule matching
            rule_alerts = self.rules_engine.evaluate(event)

            # Step 3: Correlation
            corr_alerts = self.correlator.correlate(event)

            # Step 3.5: Vulnerability check for syscollector events
            vuln_alerts = []
            if event.get("type") == "syscollector":
                vuln_alerts = self.vuln_manager.check_inventory(event)

            # Step 4: Enrich + Store all alerts
            all_alerts = rule_alerts + corr_alerts + vuln_alerts

            for alert in all_alerts:
                # MITRE enrichment
                alert = self.mitre_enricher.enrich(alert)

                # Store
                alert_id = self.alert_store.insert_alert(alert)
                alert["id"] = alert_id  # Attach the generated ID to the alert dict

                logger.info(
                    f"[Worker-{self.worker_id}] Alerta generada: "
                    f"[{alert.get('rule_id')}] {alert.get('rule_name')} "
                    f"(nivel {alert.get('level')})"
                )

                # Push notification (si Firebase está habilitado y el nivel es suficiente)
                if self.push_service:
                    try:
                        tokens = self.alert_store.get_all_tokens()
                        self.push_service.send_alert_notification(alert, tokens)

                        # Limpiar tokens inválidos reportados por FCM
                        invalid = self.push_service.get_and_clear_invalid_tokens()
                        for bad_token in invalid:
                            self.alert_store.delete_token(bad_token)
                            logger.info(f"[Worker-{self.worker_id}] Token FCM inválido eliminado.")

                    except Exception as push_err:
                        # El push nunca debe detener el procesamiento de alertas
                        logger.warning(
                            f"[Worker-{self.worker_id}] Error enviando push notification: {push_err}"
                        )

        except Exception as e:
            logger.error(
                f"[Worker-{self.worker_id}] Error procesando evento: {e}",
                exc_info=True,
            )

    def _run_loop(self) -> None:
        """Main worker loop — consumes from Redis queue."""
        logger.info(f"Worker-{self.worker_id} iniciado")

        while not self._stop_event.is_set():
            if not self.redis_client:
                self._stop_event.wait(1.0)
                continue

            try:
                # BLPOP with timeout (blocks until event available or timeout)
                result = self.redis_client.blpop(self.queue_key, timeout=1)

                if result:
                    _, event_json = result
                    event = json.loads(event_json)
                    self._process_event(event)

            except Exception as e:
                if not self._stop_event.is_set():
                    logger.error(f"[Worker-{self.worker_id}] Error: {e}")
                    self._stop_event.wait(1.0)

        logger.info(f"Worker-{self.worker_id} detenido")

    def start(self) -> None:
        """Starts the worker thread."""
        if self._thread and self._thread.is_alive():
            return

        self._stop_event.clear()
        self._thread = Thread(
            target=self._run_loop,
            daemon=True,
            name=f"Worker-{self.worker_id}",
        )
        self._thread.start()

    def stop(self) -> None:
        """Stops the worker thread."""
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=5)
