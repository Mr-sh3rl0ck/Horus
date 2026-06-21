# Horus SIEM Server - Push Notification Service
# Firebase Cloud Messaging (FCM) v1 HTTP API
#
# SETUP (dev-mobile):
# 1. Ve a Firebase Console > Configuración del proyecto > Cuentas de servicio
# 2. Genera una nueva clave privada y guarda el JSON como 'serviceAccountKey.json'
#    en el directorio raíz del servidor (el mismo que contiene main.py)
# 3. En config.yaml pon:
#      firebase:
#        enabled: true
#        service_account_key: "./serviceAccountKey.json"
#        project_id: "tu-project-id-real"
# 4. Asegúrate de que serviceAccountKey.json esté en .gitignore (ya lo está)

import logging
from typing import Optional, List

logger = logging.getLogger("horus.server.push_service")


class PushService:
    """
    Servicio de notificaciones push usando Firebase Cloud Messaging (FCM) v1.

    Soporta:
    - Android: nativo FCM
    - iOS: preparado (requiere APNs configurado en Firebase Console)

    Cuando firebase.enabled=false en config.yaml, el servicio opera en modo
    'disabled' y loguea las notificaciones sin enviarlas, permitiendo que
    el servidor arranque sin credenciales.
    """

    def __init__(self, config: dict):
        self._enabled = False
        self._app = None
        self._project_id: Optional[str] = None
        self._min_level: int = config.get("push", {}).get("min_level", 8)
        self._title_tpl: str = config.get("push", {}).get(
            "notification_title", "⚠️ Alerta Horus [{level}]"
        )
        self._body_tpl: str = config.get("push", {}).get(
            "notification_body", "{rule_name} — Agente: {agent_id}"
        )

        firebase_cfg = config.get("firebase", {})

        if not firebase_cfg.get("enabled", False):
            logger.info(
                "PushService: Firebase deshabilitado en config.yaml. "
                "Las notificaciones push NO se enviarán hasta que habilites Firebase."
            )
            return

        # Intentar inicializar Firebase Admin SDK
        try:
            import firebase_admin
            from firebase_admin import credentials

            key_path = firebase_cfg.get("service_account_key", "./serviceAccountKey.json")
            self._project_id = firebase_cfg.get("project_id", "")

            if not self._project_id or self._project_id == "YOUR_FIREBASE_PROJECT_ID":
                logger.warning(
                    "PushService: firebase.project_id no configurado. "
                    "Edita config.yaml con tu project_id real."
                )
                return

            cred = credentials.Certificate(key_path)
            self._app = firebase_admin.initialize_app(cred)
            self._enabled = True
            logger.info(
                f"PushService: Firebase inicializado correctamente. "
                f"Project: {self._project_id} | Nivel mínimo push: {self._min_level}"
            )

        except FileNotFoundError:
            logger.warning(
                "PushService: serviceAccountKey.json no encontrado. "
                "El servidor seguirá funcionando sin push notifications."
            )
        except Exception as e:
            logger.error(
                f"PushService: Error inicializando Firebase — {e}. "
                "El servidor seguirá funcionando sin push notifications."
            )

    # ---------------------------------------------------------------------------
    # Public API
    # ---------------------------------------------------------------------------

    @property
    def is_enabled(self) -> bool:
        return self._enabled

    def send_alert_notification(
        self,
        alert: dict,
        tokens: List[str],
    ) -> None:
        """
        Envía una notificación push a todos los tokens FCM registrados.
        Solo se envía si el nivel de la alerta >= push.min_level en config.yaml.

        Args:
            alert: Diccionario con los datos de la alerta generada por el worker.
            tokens: Lista de FCM tokens registrados (obtenidos del alert_store).
        """
        level = alert.get("level", 0)

        # Filtrar por nivel mínimo
        if level < self._min_level:
            return

        if not tokens:
            logger.debug("PushService: No hay tokens registrados, skip push.")
            return

        # Formatear título y cuerpo usando los datos de la alerta
        title = self._format_template(self._title_tpl, alert)
        body = self._format_template(self._body_tpl, alert)

        if not self._enabled:
            # Modo disabled: solo loguear (útil para desarrollo/testing)
            logger.info(
                f"[PushService-DISABLED] Notificación que se enviaría: "
                f"'{title}' — '{body}' → {len(tokens)} token(s)"
            )
            return

        # Enviar a cada token de forma individual para poder detectar
        # tokens inválidos y retornar cuáles fallaron
        self._dispatch_multicast(title, body, alert, tokens)

    def send_test_notification(self, token: str) -> dict:
        """
        Envía una notificación de prueba a un token específico.
        Útil para verificar que la integración funciona correctamente.

        Returns:
            {"success": bool, "message": str}
        """
        if not self._enabled:
            return {
                "success": False,
                "message": "Firebase no está habilitado. Configura firebase.enabled=true en config.yaml.",
            }

        test_alert = {
            "rule_name": "Test de conexión Horus",
            "agent_id": "test-agent",
            "level": 99,
            "rule_id": "TEST-001",
        }
        title = self._format_template(self._title_tpl, test_alert)
        body = "✅ Conexión con Horus SIEM verificada correctamente."

        result = self._send_single(title, body, test_alert, token)
        return result

    # ---------------------------------------------------------------------------
    # Internal helpers
    # ---------------------------------------------------------------------------

    def _format_template(self, template: str, alert: dict) -> str:
        """Reemplaza variables {rule_name}, {agent_id}, {level} en el template."""
        return template.format(
            rule_name=alert.get("rule_name", "Alerta de seguridad"),
            agent_id=alert.get("agent_id", "desconocido"),
            level=alert.get("level", 0),
            rule_id=alert.get("rule_id", ""),
            event_type=alert.get("event_type", ""),
        )

    def _build_data_payload(self, alert: dict) -> dict:
        """
        Construye el payload 'data' de FCM con los campos clave de la alerta.
        La app móvil puede usar estos datos para construir la UI de la notificación.
        """
        return {
            "alert_id": str(alert.get("id", "")),
            "rule_id": str(alert.get("rule_id", "")),
            "rule_name": str(alert.get("rule_name", "")),
            "level": str(alert.get("level", 0)),
            "event_type": str(alert.get("event_type", "")),
            "agent_id": str(alert.get("agent_id", "")),
            "src_ip": str(alert.get("src_ip", "")),
            "action": str(alert.get("action", "")),
            "timestamp": str(alert.get("created_at", "")),
            # Flag para que la app sepa que puede mostrar el botón "Bloquear"
            "can_block": "true" if alert.get("src_ip") else "false",
        }

    def _send_single(
        self, title: str, body: str, alert: dict, token: str
    ) -> dict:
        """Envía una notificación FCM a un único token."""
        try:
            from firebase_admin import messaging

            data_payload = self._build_data_payload(alert)

            message = messaging.Message(
                notification=messaging.Notification(
                    title=title,
                    body=body,
                ),
                android=messaging.AndroidConfig(
                    priority="high",
                    notification=messaging.AndroidNotification(
                        sound="default",
                        priority="high",
                        channel_id="horus_alerts",  # La app debe crear este canal
                    ),
                ),
                # iOS preparado para cuando el dev móvil lo habilite
                # apns=messaging.APNSConfig(
                #     payload=messaging.APNSPayload(
                #         aps=messaging.Aps(sound="default", badge=1)
                #     )
                # ),
                data=data_payload,
                token=token,
            )

            message_id = messaging.send(message)
            logger.info(f"PushService: Push enviado OK → token ...{token[-8:]} | id: {message_id}")
            return {"success": True, "message_id": message_id, "token": token}

        except Exception as e:
            error_str = str(e)
            logger.warning(f"PushService: Error enviando push → token ...{token[-8:]}: {error_str}")

            # FCM devuelve códigos específicos para tokens inválidos
            invalid_codes = [
                "registration-token-not-registered",
                "invalid-registration-token",
                "UNREGISTERED",
                "INVALID_ARGUMENT",
            ]
            is_invalid = any(code.lower() in error_str.lower() for code in invalid_codes)
            return {"success": False, "error": error_str, "token": token, "is_invalid": is_invalid}

    def _dispatch_multicast(
        self, title: str, body: str, alert: dict, tokens: List[str]
    ) -> None:
        """Envía la notificación a todos los tokens y limpia los inválidos."""
        invalid_tokens = []
        success_count = 0

        for token in tokens:
            result = self._send_single(title, body, alert, token)
            if result.get("success"):
                success_count += 1
            elif result.get("is_invalid"):
                invalid_tokens.append(token)

        logger.info(
            f"PushService: Multicast completo — "
            f"{success_count}/{len(tokens)} enviados, "
            f"{len(invalid_tokens)} tokens inválidos detectados."
        )

        # Retornar tokens inválidos para que el llamador los limpie si tiene acceso al store
        # (el worker se encarga de esto via _invalid_tokens)
        if invalid_tokens:
            self._last_invalid_tokens = invalid_tokens
        else:
            self._last_invalid_tokens = []

    def get_and_clear_invalid_tokens(self) -> List[str]:
        """
        Retorna los tokens que FCM marcó como inválidos en el último dispatch.
        El worker los usa para limpiarlos de la base de datos.
        """
        tokens = getattr(self, "_last_invalid_tokens", [])
        self._last_invalid_tokens = []
        return tokens
