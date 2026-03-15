# Horus SIEM Server - Cold Storage Manager
# RNF: Archives old alerts as compressed .json.gz files for legal audits

import gzip
import json
import time
import logging
from pathlib import Path
from threading import Thread, Event
from typing import Optional

logger = logging.getLogger("horus.server.cold_storage")


class ColdStorageManager:
    """
    Periodically archives alerts older than `retention_days` from SQLite
    into compressed .json.gz files on disk, then purges them from the DB.
    """

    def __init__(
        self,
        alert_store,
        cold_storage_path: str = "./data/cold_storage",
        retention_days: int = 90,
        check_interval_hours: int = 24,
    ):
        self.alert_store = alert_store
        self.cold_storage_path = Path(cold_storage_path)
        self.cold_storage_path.mkdir(parents=True, exist_ok=True)
        self.retention_days = retention_days
        self.check_interval = check_interval_hours * 3600
        self._stop_event = Event()
        self._thread: Optional[Thread] = None

    def _archive_cycle(self) -> int:
        """
        Exports alerts older than retention_days to a .json.gz file
        and deletes them from SQLite.

        Returns:
            Number of alerts archived.
        """
        cutoff = time.time() - (self.retention_days * 86400)

        # Fetch old alerts from alert_store
        conn = self.alert_store._get_conn()
        cursor = conn.cursor()

        cursor.execute(
            "SELECT * FROM alerts WHERE created_at < ? ORDER BY created_at ASC",
            (cutoff,),
        )
        rows = cursor.fetchall()

        if not rows:
            return 0

        # Convert rows to dicts
        alerts = [self.alert_store._row_to_dict(row) for row in rows]

        # Write compressed archive
        timestamp_str = time.strftime("%Y%m%d_%H%M%S")
        archive_file = self.cold_storage_path / f"alerts_{timestamp_str}.json.gz"

        with gzip.open(archive_file, "wt", encoding="utf-8") as f:
            json.dump(
                {
                    "archived_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
                    "retention_days": self.retention_days,
                    "count": len(alerts),
                    "alerts": alerts,
                },
                f,
                indent=2,
                default=str,
            )

        # Delete archived alerts from SQLite
        alert_ids = [a["id"] for a in alerts]
        placeholders = ",".join("?" for _ in alert_ids)
        cursor.execute(f"DELETE FROM alerts WHERE id IN ({placeholders})", alert_ids)
        conn.commit()

        logger.info(
            f"Cold storage: {len(alerts)} alertas archivadas en {archive_file.name} "
            f"y eliminadas de SQLite"
        )

        return len(alerts)

    def _run_loop(self) -> None:
        """Main loop — runs archive cycle periodically."""
        logger.info(
            f"Cold Storage Manager iniciado "
            f"(retención: {self.retention_days} días, "
            f"intervalo: {self.check_interval // 3600}h)"
        )

        while not self._stop_event.is_set():
            try:
                count = self._archive_cycle()
                if count > 0:
                    logger.info(f"Ciclo de archivado completado: {count} alertas")
                else:
                    logger.debug("Ciclo de archivado: sin alertas antiguas")
            except Exception as e:
                logger.error(f"Error en ciclo de cold storage: {e}", exc_info=True)

            # Wait for next cycle or stop
            self._stop_event.wait(self.check_interval)

        logger.info("Cold Storage Manager detenido")

    def start(self) -> None:
        """Starts the cold storage thread."""
        if self._thread and self._thread.is_alive():
            return

        self._stop_event.clear()
        self._thread = Thread(
            target=self._run_loop,
            daemon=True,
            name="ColdStorage",
        )
        self._thread.start()

    def stop(self) -> None:
        """Stops the cold storage thread."""
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=5)
