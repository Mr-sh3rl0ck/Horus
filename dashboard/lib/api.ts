// Horus SIEM Dashboard - API Service
// HTTP client for server communication

export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

/** Custom error class that carries the HTTP status code. */
export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message)
        this.name = 'ApiError'
    }
}

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

        // 401 → session expired, force re-login
        if (response.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('horus_token');
                localStorage.removeItem('horus_user');
                localStorage.removeItem('horus_role');
                window.location.reload();
            }
            throw new ApiError(401, 'Session expired');
        }

        // 403 → insufficient permissions (do NOT redirect, caller decides how to handle)
        if (response.status === 403) {
            const body = await response.json().catch(() => ({}))
            throw new ApiError(403, body?.detail ?? 'Acceso denegado: permisos insuficientes');
        }

        if (!response.ok) {
            const body = await response.json().catch(() => ({}))
            throw new ApiError(response.status, body?.detail ?? `HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        if (error instanceof ApiError) throw error;
        console.error(`API Error [${endpoint}]:`, error);
        throw error;
    }
}


// --- Alerts ---

export async function getAlerts({ limit = 50, offset = 0, severity, agentId, type }: {
    limit?: number;
    offset?: number;
    severity?: string;
    agentId?: string;
    type?: string;
} = {}) {
    const params = new URLSearchParams({ limit: String(limit), offset: String(offset) });
    if (severity) params.set('severity', severity);
    if (agentId) params.set('agent_id', agentId);
    if (type) params.set('type', type);
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

export async function deleteAgent(agentId: string) {
    return request(`/agents/${agentId}`, { method: 'DELETE' });
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

// --- Users (admin only) ---

export interface UserRecord {
    username: string
    role: string
    is_active: number
    created_at: number
    last_login: number | null
}

export interface CreateUserPayload {
    username: string
    password: string
    role: string
}

export interface UpdateUserPayload {
    role?: string
    password?: string
    is_active?: boolean
}

export async function getUsers(): Promise<UserRecord[]> {
    return request('/users');
}

export async function createUser(payload: CreateUserPayload): Promise<UserRecord> {
    return request('/users', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateUser(username: string, payload: UpdateUserPayload): Promise<UserRecord> {
    return request(`/users/${username}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function deleteUser(username: string): Promise<{ status: string; username: string }> {
    return request(`/users/${username}`, { method: 'DELETE' });
}

export async function getRoles() {
    return request('/roles');
}

