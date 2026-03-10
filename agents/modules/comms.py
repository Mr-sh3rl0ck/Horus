# Horus SIEM Agent - Communications Module
# Maneja la comunicación cifrada entre el agente y el servidor
# RF-AG-05: Autenticación PSK + Cifrado AES

import json
import logging
import time
import uuid
import base64
import hashlib
from pathlib import Path
from queue import Queue
from threading import Thread, Event
from typing import Dict, Optional

logger = logging.getLogger("horus.comms")

try:
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    HAS_CRYPTO = True
except ImportError:
    HAS_CRYPTO = False
    logger.warning("cryptography no instalado — comunicación sin cifrado")

try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    HAS_REQUESTS = False
    logger.error("requests no instalado — comunicación deshabilitada")


# ---------------------------------------------------------------------------
# Cifrado AES-GCM
# ---------------------------------------------------------------------------

class AESCipher:
    """Cifrado/descifrado AES-256-GCM para payloads de eventos."""

    def __init__(self, key: bytes):
        """
        Args:
            key: Clave de 32 bytes para AES-256
        """
        if not HAS_CRYPTO:
            raise RuntimeError("cryptography package requerido para cifrado")
        if len(key) != 32:
            raise ValueError("La clave debe ser de 32 bytes (AES-256)")
        self._aesgcm = AESGCM(key)

    def encrypt(self, plaintext: bytes) -> bytes:
        """
        Cifra datos con AES-256-GCM.

        Returns:
            nonce (12 bytes) + ciphertext
        """
        import os
        nonce = os.urandom(12)
        ciphertext = self._aesgcm.encrypt(nonce, plaintext, None)
        return nonce + ciphertext

    def decrypt(self, data: bytes) -> bytes:
        """
        Descifra datos cifrados con AES-256-GCM.

        Args:
            data: nonce (12 bytes) + ciphertext

        Returns:
            Datos descifrados
        """
        nonce = data[:12]
        ciphertext = data[12:]
        return self._aesgcm.decrypt(nonce, ciphertext, None)


# ---------------------------------------------------------------------------
# Gestión de credenciales
# ---------------------------------------------------------------------------

def derive_key_from_psk(psk: str) -> bytes:
    """
    Deriva una clave AES-256 de un Pre-Shared Key usando SHA256.

    Args:
        psk: Pre-shared key como string

    Returns:
        32 bytes de clave derivada
    """
    return hashlib.sha256(psk.encode("utf-8")).digest()


def save_credentials(creds: Dict, path: str) -> None:
    """Guarda credenciales de enrollment en disco."""
    creds_path = Path(path)
    creds_path.parent.mkdir(parents=True, exist_ok=True)

    with open(creds_path, "w", encoding="utf-8") as f:
        json.dump(creds, f, indent=2)

    logger.info(f"Credenciales guardadas en {path}")


def load_credentials(path: str) -> Optional[Dict]:
    """Carga credenciales de enrollment desde disco."""
    creds_path = Path(path)

    if not creds_path.exists():
        return None

    with open(creds_path, "r", encoding="utf-8") as f:
        return json.load(f)


# ---------------------------------------------------------------------------
# CommClient — Cliente de comunicación con el servidor
# ---------------------------------------------------------------------------

class CommClient:
    """
    Cliente de comunicación con el servidor Horus.
    Maneja enrollment, envío de eventos cifrados, y polling de comandos.
    """

    def __init__(self, config: Dict, credentials_path: str):
        """
        Args:
            config: Sección 'server' de config.json
            credentials_path: Ruta al archivo de credenciales
        """
        self.server_host = config.get("host", "127.0.0.1")
        self.enrollment_port = config.get("enrollment_port", 5000)
        self.ingestion_port = config.get("ingestion_port", 5001)
        self.credentials_path = credentials_path
        self.agent_id: Optional[str] = None
        self.cipher: Optional[AESCipher] = None
        self._session = requests.Session() if HAS_REQUESTS else None

    @property
    def enrollment_url(self) -> str:
        return f"http://{self.server_host}:{self.enrollment_port}"

    @property
    def ingestion_url(self) -> str:
        return f"http://{self.server_host}:{self.ingestion_port}"

    def enroll(self, agent_name: str, psk: str) -> bool:
        """
        Inscribe el agente ante el servidor.

        Args:
            agent_name: Nombre del agente
            psk: Pre-shared key

        Returns:
            True si se enrolló correctamente
        """
        if not HAS_REQUESTS:
            logger.error("requests no disponible, enrollment imposible")
            return False

        try:
            import platform
            import socket

            # Detect system info
            os_info = f"{platform.system()} {platform.release()}"
            hostname = socket.gethostname()
            try:
                local_ip = socket.gethostbyname(hostname)
            except Exception:
                local_ip = None

            payload = {
                "agent_name": agent_name,
                "psk": psk,
                "hostname": hostname,
                "os": os_info,
                "ip": local_ip,
                "version": "0.1.0",
                "timestamp": time.time(),
            }

            response = self._session.post(
                f"{self.enrollment_url}/api/enroll",
                json=payload,
                timeout=10,
            )

            if response.status_code == 200:
                data = response.json()
                self.agent_id = data.get("agent_id")

                # Derivar clave de cifrado del PSK
                key = derive_key_from_psk(psk)
                if HAS_CRYPTO:
                    self.cipher = AESCipher(key)

                # Guardar credenciales
                creds = {
                    "agent_id": self.agent_id,
                    "agent_name": agent_name,
                    "enrolled_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
                }
                save_credentials(creds, self.credentials_path)

                logger.info(f"Enrollment exitoso — Agent ID: {self.agent_id}")
                return True
            else:
                logger.error(
                    f"Enrollment fallido: {response.status_code} - {response.text}"
                )
                return False

        except requests.ConnectionError:
            logger.warning(
                f"No se pudo conectar al servidor {self.enrollment_url} — "
                "el agente almacenará eventos localmente"
            )
            return False
        except Exception as e:
            logger.error(f"Error en enrollment: {e}")
            return False

    def send_event(self, event: Dict) -> bool:
        """
        Envía un evento al servidor.

        Args:
            event: Evento estructurado

        Returns:
            True si se envió correctamente
        """
        if not HAS_REQUESTS:
            return False

        try:
            # Agregar agent_id al evento
            event["agent_id"] = self.agent_id

            payload_bytes = json.dumps(event).encode("utf-8")

            # Cifrar si hay cipher disponible
            if self.cipher:
                encrypted = self.cipher.encrypt(payload_bytes)
                data = {
                    "agent_id": self.agent_id,
                    "encrypted": True,
                    "payload": base64.b64encode(encrypted).decode("ascii"),
                }
            else:
                data = event

            response = self._session.post(
                f"{self.ingestion_url}/api/events",
                json=data,
                timeout=5,
            )

            return response.status_code == 200

        except requests.ConnectionError:
            logger.debug("Servidor no disponible, evento almacenado localmente")
            return False
        except Exception as e:
            logger.error(f"Error enviando evento: {e}")
            return False

    def poll_commands(self) -> list:
        """
        Consulta al servidor por comandos de respuesta activa pendientes.

        Returns:
            Lista de comandos pendientes
        """
        if not HAS_REQUESTS or not self.agent_id:
            return []

        try:
            response = self._session.get(
                f"{self.ingestion_url}/api/commands/{self.agent_id}",
                timeout=5,
            )

            if response.status_code == 200:
                data = response.json()
                return data.get("commands", [])

        except requests.ConnectionError:
            pass
        except Exception as e:
            logger.debug(f"Error polling comandos: {e}")

        return []

    def load_existing_credentials(self) -> bool:
        """Carga credenciales existentes (si ya se enrolló antes)."""
        creds = load_credentials(self.credentials_path)
        if creds:
            self.agent_id = creds.get("agent_id")
            logger.info(f"Credenciales cargadas — Agent ID: {self.agent_id}")
            return True
        return False


# ---------------------------------------------------------------------------
# EventSender — Thread que consume eventos y los envía
# ---------------------------------------------------------------------------

class EventSender:
    """
    Thread que consume eventos de la cola y los envía al servidor.
    Si el servidor no está disponible, loguea los eventos localmente.
    """

    def __init__(self, event_queue: Queue, comm_client: CommClient):
        self.event_queue = event_queue
        self.comm_client = comm_client
        self._stop_event = Event()
        self._thread: Optional[Thread] = None

    def _send_loop(self) -> None:
        """Bucle principal de envío de eventos."""
        logger.info("Event sender iniciado")

        while not self._stop_event.is_set():
            try:
                event = self.event_queue.get(timeout=1.0)

                sent = self.comm_client.send_event(event)
                if sent:
                    logger.debug(f"Evento enviado: {event.get('type', 'unknown')}")
                else:
                    # Log local como fallback
                    evt_type = event.get("type", "unknown")
                    action = event.get("action") or event.get("parsed", {}).get("action", "")
                    logger.info(
                        f"[LOCAL] {evt_type}:{action} - "
                        f"{event.get('path', event.get('raw_log', '')[:80])}"
                    )

            except Exception:
                continue

        logger.info("Event sender detenido")

    def start(self) -> None:
        """Inicia el thread de envío."""
        if self._thread and self._thread.is_alive():
            return

        self._stop_event.clear()
        self._thread = Thread(
            target=self._send_loop,
            daemon=True,
            name="EventSender",
        )
        self._thread.start()

    def stop(self) -> None:
        """Detiene el thread de envío."""
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=5)
