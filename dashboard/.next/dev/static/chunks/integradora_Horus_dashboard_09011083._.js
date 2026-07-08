(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/integradora/Horus/dashboard/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/integradora/Horus/dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
class ApiError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
        this.name = 'ApiError';
    }
}
async function request(endpoint, options = {}) {
    try {
        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('horus_token') : "TURBOPACK unreachable";
        const headers = {
            'Content-Type': 'application/json'
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers,
            ...options
        });
        // 401 → session expired, force re-login
        if (response.status === 401) {
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem('horus_token');
                localStorage.removeItem('horus_user');
                localStorage.removeItem('horus_role');
                window.location.reload();
            }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/integradora/Horus/dashboard/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/integradora/Horus/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Horus SIEM Dashboard - Auth Context
// Provides authentication state (user, role, token) to the entire app
var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/integradora/Horus/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/integradora/Horus/dashboard/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            const storedToken = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("horus_token") : "TURBOPACK unreachable";
            if (storedToken) {
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"]}/auth/logout`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                }).catch({
                    "AuthProvider.useCallback[logout]": ()=>{}
                }["AuthProvider.useCallback[logout]"]);
            }
            localStorage.removeItem("horus_token");
            localStorage.removeItem("horus_user");
            localStorage.removeItem("horus_role");
            setUser(null);
            setToken(null);
        }
    }["AuthProvider.useCallback[logout]"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": (tkn, username, role)=>{
            localStorage.setItem("horus_token", tkn);
            localStorage.setItem("horus_user", username);
            localStorage.setItem("horus_role", role);
            setToken(tkn);
            setUser({
                username,
                role
            });
        }
    }["AuthProvider.useCallback[login]"], []);
    // Restore session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const storedToken = localStorage.getItem("horus_token");
            const storedUser = localStorage.getItem("horus_user");
            const storedRole = localStorage.getItem("horus_role");
            if (storedToken && storedUser && storedRole) {
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"]}/auth/verify`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${storedToken}`
                    }
                }).then({
                    "AuthProvider.useEffect": (res)=>{
                        if (res.ok) return res.json();
                        throw new Error("invalid");
                    }
                }["AuthProvider.useEffect"]).then({
                    "AuthProvider.useEffect": (data)=>{
                        // Always trust what the server says the role is
                        const role = data.role ?? storedRole;
                        localStorage.setItem("horus_role", role);
                        setToken(storedToken);
                        setUser({
                            username: data.username ?? storedUser,
                            role
                        });
                    }
                }["AuthProvider.useEffect"]).catch({
                    "AuthProvider.useEffect": ()=>{
                        localStorage.removeItem("horus_token");
                        localStorage.removeItem("horus_user");
                        localStorage.removeItem("horus_role");
                    }
                }["AuthProvider.useEffect"]).finally({
                    "AuthProvider.useEffect": ()=>setIsLoading(false)
                }["AuthProvider.useEffect"]);
            } else {
                setIsLoading(false);
            }
        }
    }["AuthProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
_s(AuthProvider, "6nUDVIP45YhKWQZf2KAVJj8/coI=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}
_s1(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/integradora/Horus/dashboard/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/integradora/Horus/dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/integradora/Horus/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/integradora/Horus/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$integradora$2f$Horus$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/integradora/Horus/dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/integradora/Horus/dashboard/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=integradora_Horus_dashboard_09011083._.js.map