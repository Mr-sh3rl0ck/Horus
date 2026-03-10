// Horus SIEM Dashboard - API Service
// HTTP client for server communication

const API_BASE = 'http://172.21.89.249:5001/api';

async function request(endpoint: string, options: RequestInit = {}) {
    try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('horus_token') : null;

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers,
            ...options,
        });

        // If 401 → session expired or invalid, redirect to login
        if (response.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('horus_token');
                localStorage.removeItem('horus_user');
                window.location.reload();
            }
            throw new Error('Session expired');
        }

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`API Error [${endpoint}]:`, error);
        throw error;
    }
}

// --- Alerts ---

export async function getAlerts({ limit = 50, offset = 0, severity, agentId }: {
    limit?: number;
    offset?: number;
    severity?: string;
    agentId?: string;
} = {}) {
    const params = new URLSearchParams({ limit: String(limit), offset: String(offset) });
    if (severity) params.set('severity', severity);
    if (agentId) params.set('agent_id', agentId);
    return request(`/alerts?${params}`);
}

export async function searchAlerts(query: string, limit: number = 50) {
    return request(`/alerts/search?q=${encodeURIComponent(query)}&limit=${limit}`);
}

export async function getAlertDetail(alertId: string) {
    return request(`/alerts/${alertId}`);
}

// --- Stats ---

export async function getStats() {
    return request('/stats');
}

// --- Agents ---

export async function getAgents() {
    return request('/agents');
}

export async function getAgent(agentId: string) {
    return request(`/agents/${agentId}`);
}

// --- Health ---

export async function getHealth() {
    return request('/health');
}

// --- Commands ---

export async function sendCommand(agentId: string, action: string, params: Record<string, unknown> = {}) {
    return request('/commands', {
        method: 'POST',
        body: JSON.stringify({ agent_id: agentId, action, params }),
    });
}

// --- FIM ---

export async function getFimEvents({ limit = 50, offset = 0, agentId }: {
    limit?: number;
    offset?: number;
    agentId?: string;
} = {}) {
    const params = new URLSearchParams({ limit: String(limit), offset: String(offset) });
    if (agentId) params.set('agent_id', agentId);
    return request(`/fim/events?${params}`);
}

export async function getFimStats() {
    return request('/fim/stats');
}

// --- Vulnerabilities ---

export async function getVulnerabilities({ limit = 50, offset = 0, severity, agentId }: {
    limit?: number;
    offset?: number;
    severity?: number;
    agentId?: string;
} = {}) {
    const params = new URLSearchParams({ limit: String(limit), offset: String(offset) });
    if (severity) params.set('severity', String(severity));
    if (agentId) params.set('agent_id', agentId);
    return request(`/vulnerabilities?${params}`);
}

export async function getVulnerabilityStats() {
    return request('/vulnerabilities/stats');
}

// --- Syscollector ---

export async function getSyscollectorSummary() {
    return request('/syscollector/summary');
}

export async function getSyscollectorData(agentId: string) {
    return request(`/syscollector/${agentId}`);
}

export async function getSyscollectorHardware(agentId: string) {
    return request(`/syscollector/${agentId}/hardware`);
}

export async function getSyscollectorProcesses(agentId: string) {
    return request(`/syscollector/${agentId}/processes`);
}

export async function getSyscollectorPorts(agentId: string) {
    return request(`/syscollector/${agentId}/ports`);
}

export async function getSyscollectorPackages(agentId: string) {
    return request(`/syscollector/${agentId}/packages`);
}
