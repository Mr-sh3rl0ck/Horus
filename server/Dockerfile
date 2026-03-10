# ============================================================
# Horus SIEM Server — Dockerfile
# Python 3.12 + FastAPI + Uvicorn
# ============================================================

FROM python:3.12-slim

# Prevent Python from writing .pyc files and enable unbuffered output
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

# Install dependencies first (layer caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source
COPY api/          ./api/
COPY engine/       ./engine/
COPY services/     ./services/
COPY rules/        ./rules/
COPY data/         ./data/
COPY main.py       .
COPY config.docker.yaml ./config.yaml

EXPOSE 5001

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5001"]
