module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/integradora/Horus/dashboard/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Horus SIEM Dashboard - API Service
// HTTP client for server communication
__turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE,
    "ApiError",
    ()=>ApiError,
    "createUser",
    ()=>createUser,
    "deleteAgent",
    ()=>deleteAgent,
    "deleteUser",
    ()=>deleteUser,
    "getAgent",
    ()=>getAgent,
    "getAgents",
    ()=>getAgents,
    "getAlertDetail",
    ()=>getAlertDetail,
    "getAlerts",
    ()=>getAlerts,
    "getFimEvents",
    ()=>getFimEvents,
    "getFimStats",
    ()=>getFimStats,
    "getHealth",
    ()=>getHealth,
    "getRoles",
    ()=>getRoles,
    "getStats",
    ()=>getStats,
    "getSyscollectorData",
    ()=>getSyscollectorData,
    "getSyscollectorHardware",
    ()=>getSyscollectorHardware,
    "getSyscollectorPackages",
    ()=>getSyscollectorPackages,
    "getSyscollectorPorts",
    ()=>getSyscollectorPorts,
    "getSyscollectorProcesses",
    ()=>getSyscollectorProcesses,
    "getSyscollectorSummary",
    ()=>getSyscollectorSummary,
    "getUsers",
    ()=>getUsers,
    "getVulnerabilities",
    ()=>getVulnerabilities,
    "getVulnerabilityStats",
    ()=>getVulnerabilityStats,
    "searchAlerts",
    ()=>searchAlerts,
    "sendCommand",
    ()=>sendCommand,
    "updateUser",
    ()=>updateUser
]);
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
class ApiError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
        this.name = 'ApiError';
    }
}
async function request(endpoint, options = {}) {
    try {
        const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        const headers = {
            'Content-Type': 'application/json'
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers,
            ...options
        });
        // 401 → session expired, force re-login
        if (response.status === 401) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            throw new ApiError(401, 'Session expired');
        }
        // 403 → insufficient permissions (do NOT redirect, caller decides how to handle)
        if (response.status === 403) {
            const body = await response.json().catch(()=>({}));
            throw new ApiError(403, body?.detail ?? 'Acceso denegado: permisos insuficientes');
        }
        if (!response.ok) {
            const body = await response.json().catch(()=>({}));
            throw new ApiError(response.status, body?.detail ?? `HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        if (error instanceof ApiError) throw error;
        console.error(`API Error [${endpoint}]:`, error);
        throw error;
    }
}
async function getAlerts({ limit = 50, offset = 0, severity, agentId, type } = {}) {
    const params = new URLSearchParams({
        limit: String(limit),
        offset: String(offset)
    });
    if (severity) params.set('severity', severity);
    if (agentId) params.set('agent_id', agentId);
    if (type) params.set('type', type);
    return request(`/alerts?${params}`);
}
async function searchAlerts(query, limit = 50) {
    return request(`/alerts/search?q=${encodeURIComponent(query)}&limit=${limit}`);
}
async function getAlertDetail(alertId) {
    return request(`/alerts/${alertId}`);
}
async function getStats() {
    return request('/stats');
}
async function getAgents() {
    return request('/agents');
}
async function getAgent(agentId) {
    return request(`/agents/${agentId}`);
}
async function deleteAgent(agentId) {
    return request(`/agents/${agentId}`, {
        method: 'DELETE'
    });
}
async function getHealth() {
    return request('/health');
}
async function sendCommand(agentId, action, params = {}) {
    return request('/commands', {
        method: 'POST',
        body: JSON.stringify({
            agent_id: agentId,
            action,
            params
        })
    });
}
async function getFimEvents({ limit = 50, offset = 0, agentId } = {}) {
    const params = new URLSearchParams({
        limit: String(limit),
        offset: String(offset)
    });
    if (agentId) params.set('agent_id', agentId);
    return request(`/fim/events?${params}`);
}
async function getFimStats() {
    return request('/fim/stats');
}
async function getVulnerabilities({ limit = 50, offset = 0, severity, agentId } = {}) {
    const params = new URLSearchParams({
        limit: String(limit),
        offset: String(offset)
    });
    if (severity) params.set('severity', String(severity));
    if (agentId) params.set('agent_id', agentId);
    return request(`/vulnerabilities?${params}`);
}
async function getVulnerabilityStats() {
    return request('/vulnerabilities/stats');
}
async function getSyscollectorSummary() {
    return request('/syscollector/summary');
}
async function getSyscollectorData(agentId) {
    return request(`/syscollector/${agentId}`);
}
async function getSyscollectorHardware(agentId) {
    return request(`/syscollector/${agentId}/hardware`);
}
async function getSyscollectorProcesses(agentId) {
    return request(`/syscollector/${agentId}/processes`);
}
async function getSyscollectorPorts(agentId) {
    return request(`/syscollector/${agentId}/ports`);
}
async function getSyscollectorPackages(agentId) {
    return request(`/syscollector/${agentId}/packages`);
}
async function getUsers() {
    return request('/users');
}
async function createUser(payload) {
    return request('/users', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
}
async function updateUser(username, payload) {
    return request(`/users/${username}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });
}
async function deleteUser(username) {
    return request(`/users/${username}`, {
        method: 'DELETE'
    });
}
async function getRoles() {
    return request('/roles');
}
}),
"[project]/integradora/Horus/dashboard/lib/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/integradora/Horus/dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Horus SIEM Dashboard - Auth Context
// Provides authentication state (user, role, token) to the entire app
var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/integradora/Horus/dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/integradora/Horus/dashboard/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const storedToken = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        localStorage.removeItem("horus_token");
        localStorage.removeItem("horus_user");
        localStorage.removeItem("horus_role");
        setUser(null);
        setToken(null);
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tkn, username, role)=>{
        localStorage.setItem("horus_token", tkn);
        localStorage.setItem("horus_user", username);
        localStorage.setItem("horus_role", role);
        setToken(tkn);
        setUser({
            username,
            role
        });
    }, []);
    // Restore session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedToken = localStorage.getItem("horus_token");
        const storedUser = localStorage.getItem("horus_user");
        const storedRole = localStorage.getItem("horus_role");
        if (storedToken && storedUser && storedRole) {
            fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/auth/verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${storedToken}`
                }
            }).then((res)=>{
                if (res.ok) return res.json();
                throw new Error("invalid");
            }).then((data)=>{
                // Always trust what the server says the role is
                const role = data.role ?? storedRole;
                localStorage.setItem("horus_role", role);
                setToken(storedToken);
                setUser({
                    username: data.username ?? storedUser,
                    role
                });
            }).catch(()=>{
                localStorage.removeItem("horus_token");
                localStorage.removeItem("horus_user");
                localStorage.removeItem("horus_role");
            }).finally(()=>setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            token,
            isAuthenticated: !!user,
            isLoading,
            login,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/integradora/Horus/dashboard/lib/auth-context.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}
}),
"[project]/integradora/Horus/dashboard/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/integradora/Horus/dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/integradora/Horus/dashboard/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/integradora/Horus/dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/integradora/Horus/dashboard/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d3eecfc9._.js.map