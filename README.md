# Horus - SIEM / XDR

[English Version](#english-version) | [Versión en Español](#versión-en-español)

---

## English Version

### Overview
Horus is a comprehensive Security Information and Event Management (SIEM) and Extended Detection and Response (XDR) platform. It is designed to collect, analyze, and correlate security events across multiple endpoints, providing real-time threat detection and automated response capabilities.

### Architecture
The project is divided into the following core components:
* **Server (Backend):** Developed in Python using FastAPI. It handles data ingestion, event correlation rules, and the REST API.
* **Dashboard (Frontend):** Developed in React using Next.js. It provides the user interface for monitoring alerts, endpoints, and system status.
* **Redis:** Used as a message broker and cache layer for high-performance data processing.
* **Agents:** Endpoint components responsible for collecting telemetry data and executing response actions.

### Prerequisites
To deploy Horus, ensure you have the following software installed on your system:
* Git
* Docker
* Docker Compose

### Deployment Steps (Docker)
The recommended way to deploy Horus is using Docker Compose, which builds and provisions all necessary services automatically.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mr-sh3rl0ck/Horus.git
   cd Horus
   ```

2. **Build and start the services:**
   Run the following command in the root directory of the project:
   ```bash
   docker-compose up -d --build
   ```

3. **Verify running containers:**
   Ensure all three services (`horus-redis`, `horus-server`, `horus-dashboard`) are up and running:
   ```bash
   docker-compose ps
   ```

4. **Access the application:**
   * **Dashboard (UI):** Open your web browser and navigate to `http://localhost:3000`
   * **API Server:** The backend runs on `http://localhost:5001`

### Local Development Setup (Without Docker)
If you wish to run the components locally for development purposes, follow these steps.

**1. Redis:**
Make sure you have a Redis server running locally on port 6379.

**2. Server (Backend):**
```bash
cd server
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

**3. Dashboard (Frontend):**
```bash
cd dashboard
npm install
npm run dev
```

---

## Versión en Español

### Visión General
Horus es una plataforma integral de Gestión de Eventos e Información de Seguridad (SIEM) y Detección y Respuesta Extendidas (XDR). Está diseñada para recopilar, analizar y correlacionar eventos de seguridad en múltiples endpoints, proporcionando detección de amenazas en tiempo real y capacidades de respuesta automatizada.

### Arquitectura
El proyecto se divide en los siguientes componentes principales:
* **Servidor (Backend):** Desarrollado en Python utilizando FastAPI. Maneja la ingesta de datos, las reglas de correlación de eventos y la API REST.
* **Dashboard (Frontend):** Desarrollado en React utilizando Next.js. Proporciona la interfaz de usuario para monitorear alertas, endpoints y el estado del sistema.
* **Redis:** Utilizado como intermediario de mensajes (message broker) y capa de caché para el procesamiento de datos de alto rendimiento.
* **Agentes (Agents):** Componentes en los endpoints responsables de recopilar datos de telemetría y ejecutar acciones de respuesta.

### Requisitos Previos
Para desplegar Horus, asegúrese de tener instalado el siguiente software en su sistema:
* Git
* Docker
* Docker Compose

### Pasos de Despliegue (Docker)
La forma recomendada de instalar y ejecutar Horus es mediante Docker Compose, el cual construye y aprovisiona todos los servicios necesarios automáticamente.

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Mr-sh3rl0ck/Horus.git
   cd Horus
   ```

2. **Construir e iniciar los servicios:**
   Ejecute el siguiente comando en el directorio raíz del proyecto:
   ```bash
   docker-compose up -d --build
   ```

3. **Verificar los contenedores en ejecución:**
   Asegúrese de que los tres servicios (`horus-redis`, `horus-server`, `horus-dashboard`) estén funcionando correctamente:
   ```bash
   docker-compose ps
   ```

4. **Acceder a la aplicación:**
   * **Dashboard (Interfaz de Usuario):** Abra su navegador web y diríjase a `http://localhost:3000`
   * **Servidor API:** El backend se ejecuta en `http://localhost:5001`

### Configuración de Desarrollo Local (Sin Docker)
Si desea ejecutar los componentes localmente para fines de desarrollo, siga estos pasos.

**1. Redis:**
Asegúrese de tener un servidor Redis ejecutándose localmente en el puerto 6379.

**2. Servidor (Backend):**
```bash
cd server
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

**3. Dashboard (Frontend):**
```bash
cd dashboard
npm install
npm run dev
```
