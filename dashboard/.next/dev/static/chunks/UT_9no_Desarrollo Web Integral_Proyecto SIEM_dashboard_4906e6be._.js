(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginPage",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LoginPage({ onLogin }) {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const response = await fetch("http://172.21.89.249:5001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (!response.ok) {
                const data = await response.json().catch(()=>({}));
                throw new Error(data.detail || "Credenciales inválidas");
            }
            const data = await response.json();
            localStorage.setItem("horus_token", data.token);
            localStorage.setItem("horus_user", data.username);
            onLogin(data.token);
        } catch (err) {
            setError(err.message || "Error de conexión con el servidor");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center bg-background relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sidebar-primary/5 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-info/5 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-sidebar-primary/3 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.02]",
                style: {
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px"
                }
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-md px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sidebar-primary/10 border border-sidebar-primary/20 shadow-lg shadow-sidebar-primary/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "h-8 w-8 text-sidebar-primary"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold tracking-tight text-foreground",
                                children: "Horus SIEM"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-muted-foreground",
                                children: "Security Information & Event Management"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card/80 backdrop-blur-sm p-8 shadow-2xl shadow-black/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "Iniciar sesión"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-muted-foreground",
                                        children: "Ingrese sus credenciales para acceder al dashboard."
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-5",
                                children: [
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 rounded-lg border border-critical/30 bg-critical/10 px-4 py-3 text-sm text-critical animate-in fade-in slide-in-from-top-1 duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 33
                                            }, this),
                                            error
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "username",
                                                className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                                children: "Usuario"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "username",
                                                type: "text",
                                                value: username,
                                                onChange: (e)=>setUsername(e.target.value),
                                                placeholder: "admin",
                                                required: true,
                                                autoFocus: true,
                                                className: "flex h-11 w-full rounded-lg border border-border bg-muted/50 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary/50 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "password",
                                                className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                                children: "Contraseña"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "password",
                                                        type: showPassword ? "text" : "password",
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value),
                                                        placeholder: "••••••••••",
                                                        required: true,
                                                        className: "flex h-11 w-full rounded-lg border border-border bg-muted/50 px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary/50 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        tabIndex: -1,
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 41
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading || !username || !password,
                                        className: "flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-medium text-sm hover:bg-sidebar-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-sidebar-primary/20",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 37
                                                }, this),
                                                "Verificando..."
                                            ]
                                        }, void 0, true) : "Acceder"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-center text-xs text-muted-foreground/50",
                        children: "Horus SIEM v0.1.0 — Credenciales generadas al iniciar el servidor"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_s(LoginPage, "ayzKgH7BByp2AR/MS2llVmW2ZVU=");
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/collapsible.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
;
function Collapsible({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "collapsible",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/collapsible.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Collapsible;
function CollapsibleTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
        "data-slot": "collapsible-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/collapsible.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c1 = CollapsibleTrigger;
function CollapsibleContent({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
        "data-slot": "collapsible-content",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/collapsible.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c2 = CollapsibleContent;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Collapsible");
__turbopack_context__.k.register(_c1, "CollapsibleTrigger");
__turbopack_context__.k.register(_c2, "CollapsibleContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileWarning$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/file-warning.js [app-client] (ecmascript) <export default as FileWarning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/monitor-speaker.js [app-client] (ecmascript) <export default as MonitorSpeaker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/collapsible.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NavItem({ icon, label, href = "#", isActive, children }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (children) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
            open: isOpen,
            onOpenChange: setIsOpen,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors", "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", isOpen && "bg-sidebar-accent text-sidebar-accent-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-3",
                                children: [
                                    icon,
                                    label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform", isOpen && "rotate-90")
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                    className: "pl-9 pt-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: child.href,
                                className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                children: child.label
                            }, child.href, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors", "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", isActive && "bg-sidebar-accent text-sidebar-primary"),
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, this);
}
_s(NavItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = NavItem;
function Sidebar({ currentPage = "overview", onNavigate, onLogout }) {
    _s1();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNavClick = (page)=>{
        onNavigate?.(page);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300", isCollapsed ? "w-16" : "w-64"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-14 items-center justify-between border-b border-sidebar-border px-4",
                children: [
                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg text-sidebar-primary-foreground",
                                    children: "𓂀"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-sidebar-foreground",
                                children: "Horus SIEM"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-muted-foreground hover:text-sidebar-foreground",
                        onClick: ()=>setIsCollapsed(!isCollapsed),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 overflow-y-auto p-3", isCollapsed && "px-2"),
                children: isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-10 w-10",
                            onClick: ()=>handleNavClick("overview"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", currentPage === "overview" ? "text-sidebar-primary" : "text-muted-foreground")
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 150,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 149,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-10 w-10",
                            onClick: ()=>handleNavClick("endpoints"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", currentPage === "endpoints" ? "text-sidebar-primary" : "text-muted-foreground")
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 153,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 152,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-10 w-10",
                            onClick: ()=>handleNavClick("threats"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", currentPage === "threats" ? "text-sidebar-primary" : "text-muted-foreground")
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 156,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 155,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-10 w-10",
                            onClick: ()=>handleNavClick("vulnerabilities"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", currentPage === "vulnerabilities" ? "text-sidebar-primary" : "text-muted-foreground")
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 159,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 158,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-10 w-10",
                            onClick: ()=>handleNavClick("fim"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", currentPage === "fim" ? "text-sidebar-primary" : "text-muted-foreground")
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 162,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 161,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-10 w-10",
                            onClick: ()=>handleNavClick("syscollector"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__["MonitorSpeaker"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", currentPage === "syscollector" ? "text-sidebar-primary" : "text-muted-foreground")
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 165,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 164,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Main"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick("overview"),
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                            lineNumber: 176,
                                            columnNumber: 48
                                        }, void 0),
                                        label: "Overview",
                                        isActive: currentPage === "overview"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 176,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 175,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 178,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 178,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 171,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Endpoint Security"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 183,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick("endpoints"),
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                            lineNumber: 187,
                                            columnNumber: 48
                                        }, void 0),
                                        label: "Endpoints",
                                        isActive: currentPage === "endpoints"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 187,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 186,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick("fim"),
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                            lineNumber: 190,
                                            columnNumber: 48
                                        }, void 0),
                                        label: "File Integrity",
                                        isActive: currentPage === "fim"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 190,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 189,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick("syscollector"),
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__["MonitorSpeaker"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                            lineNumber: 193,
                                            columnNumber: 48
                                        }, void 0),
                                        label: "System Inventory",
                                        isActive: currentPage === "syscollector"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 193,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 195,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Malware Detection"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 195,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 196,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Configuration"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 196,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 182,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Threat Intelligence"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 201,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick("threats"),
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                            lineNumber: 205,
                                            columnNumber: 48
                                        }, void 0),
                                        label: "Threat Hunting",
                                        isActive: currentPage === "threats"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 205,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 204,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick("vulnerabilities"),
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                            lineNumber: 208,
                                            columnNumber: 48
                                        }, void 0),
                                        label: "Vulnerabilities",
                                        isActive: currentPage === "vulnerabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 208,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 210,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "MITRE ATT&CK"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 210,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 200,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Compliance"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 218,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "PCI DSS"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 219,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "GDPR"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 219,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileWarning$3e$__["FileWarning"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 220,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "HIPAA"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 220,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 214,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Cloud Security"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 228,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Docker"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 228,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 229,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "AWS"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 230,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Google Cloud"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 230,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 224,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Management"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 235,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 238,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Agents"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 238,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 239,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Indexer"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 240,
                                        columnNumber: 44
                                    }, void 0),
                                    label: "Reports"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 240,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 234,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, this),
            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-sidebar-border p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-8 rounded-full bg-sidebar-primary/20 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-sidebar-primary",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 251,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 250,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-sidebar-foreground truncate",
                                    children: ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("horus_user") || "Admin" : "TURBOPACK unreachable"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 254,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Administrador"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                    lineNumber: 257,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 253,
                            columnNumber: 25
                        }, this),
                        onLogout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-8 w-8 text-muted-foreground hover:text-critical shrink-0",
                            onClick: onLogout,
                            title: "Cerrar sesión",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 267,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                            lineNumber: 260,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                    lineNumber: 249,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
                lineNumber: 248,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx",
        lineNumber: 119,
        columnNumber: 9
    }, this);
}
_s1(Sidebar, "XL80Ke9pMdZ2JRKLtHkkSCCoQZ0=");
_c1 = Sidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header({ title, breadcrumbs = [], showTimeRange = true, showRefresh = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex h-14 items-center justify-between border-b border-border bg-card px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    breadcrumbs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: breadcrumbs.map((crumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 35,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: index === breadcrumbs.length - 1 ? "text-foreground" : "text-muted-foreground hover:text-foreground cursor-pointer",
                                        children: crumb.label
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, crumb.label, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold text-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search...",
                                className: "w-64 bg-muted pl-9 text-sm placeholder:text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    showTimeRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "gap-2 border-border bg-muted text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        "Last 24 hours",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "bg-card border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "text-foreground",
                                        children: "Last 15 minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "text-foreground",
                                        children: "Last hour"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "text-foreground",
                                        children: "Last 24 hours"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "text-foreground",
                                        children: "Last 7 days"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "text-foreground",
                                        children: "Last 30 days"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "text-foreground",
                                        children: "Custom range"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    showRefresh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "icon",
                        className: "border-border bg-muted text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "relative text-muted-foreground hover:text-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                className: "absolute -right-1 -top-1 h-5 w-5 rounded-full bg-critical p-0 text-xs text-foreground",
                                children: "3"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sm font-medium text-sidebar-primary-foreground",
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCard",
    ()=>StatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
;
;
;
;
function StatsCard({ title, value, subtitle, icon, trend, variant = "default", className }) {
    const variantStyles = {
        default: "text-foreground",
        critical: "text-critical",
        high: "text-high",
        medium: "text-medium",
        low: "text-low",
        success: "text-success"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card border-border", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex flex-row items-center justify-between pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-sm font-medium text-muted-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl font-bold", variantStyles[variant]),
                        children: typeof value === "number" ? value.toLocaleString() : value
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 flex items-center gap-2",
                        children: [
                            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-xs", trend.isPositive ? "text-success" : "text-critical"),
                                children: [
                                    trend.isPositive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    Math.abs(trend.value),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = StatsCard;
var _c;
__turbopack_context__.k.register(_c, "StatsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Horus SIEM Dashboard - API Service
// HTTP client for server communication
__turbopack_context__.s([
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
    "getVulnerabilities",
    ()=>getVulnerabilities,
    "getVulnerabilityStats",
    ()=>getVulnerabilityStats,
    "searchAlerts",
    ()=>searchAlerts,
    "sendCommand",
    ()=>sendCommand
]);
const API_BASE = 'http://172.21.89.249:5001/api';
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
        // If 401 → session expired or invalid, redirect to login
        if (response.status === 401) {
            if ("TURBOPACK compile-time truthy", 1) {
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
async function getAlerts({ limit = 50, offset = 0, severity, agentId } = {}) {
    const params = new URLSearchParams({
        limit: String(limit),
        offset: String(offset)
    });
    if (severity) params.set('severity', severity);
    if (agentId) params.set('agent_id', agentId);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverviewPage",
    ()=>OverviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Fallback mock data
const defaultAgentData = [
    {
        name: "Active",
        value: 0,
        color: "hsl(145, 70%, 50%)"
    },
    {
        name: "Disconnected",
        value: 0,
        color: "hsl(25, 90%, 55%)"
    },
    {
        name: "Pending",
        value: 0,
        color: "hsl(45, 90%, 55%)"
    }
];
const defaultAlertsData = [
    {
        time: "00:00",
        count: 0
    },
    {
        time: "04:00",
        count: 0
    },
    {
        time: "08:00",
        count: 0
    },
    {
        time: "12:00",
        count: 0
    },
    {
        time: "16:00",
        count: 0
    },
    {
        time: "20:00",
        count: 0
    },
    {
        time: "Now",
        count: 0
    }
];
const moduleCards = [
    {
        title: "Configuration Assessment",
        description: "Scan your assets as part of a configuration assessment audit.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        category: "Endpoint Security"
    },
    {
        title: "Malware Detection",
        description: "Check indicators of compromise triggered by malware infections.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        category: "Endpoint Security"
    },
    {
        title: "File Integrity Monitoring",
        description: "Alerts related to file changes, including permissions and attributes.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"],
        category: "Endpoint Security"
    },
    {
        title: "Threat Hunting",
        description: "Browse through your security alerts, identifying threats in your environment.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        category: "Threat Intelligence"
    },
    {
        title: "Vulnerability Detection",
        description: "Discover what applications are affected by well-known vulnerabilities.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        category: "Threat Intelligence"
    },
    {
        title: "MITRE ATT&CK",
        description: "Explore security alerts mapped to adversary tactics and techniques.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        category: "Threat Intelligence"
    },
    {
        title: "Docker",
        description: "Monitor and collect activity from Docker containers.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"],
        category: "Cloud Security"
    },
    {
        title: "Amazon Web Services",
        description: "Security events related to your AWS services, collected via AWS API.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        category: "Cloud Security"
    },
    {
        title: "PCI DSS",
        description: "Global security standard for entities that process payment cardholder data.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        category: "Compliance"
    }
];
function OverviewPage() {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [agentData, setAgentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultAgentData);
    const [alertsData, setAlertsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultAlertsData);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [serverOnline, setServerOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OverviewPage.useCallback[fetchData]": async ()=>{
            try {
                const [statsRes, agentsRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStats"])().catch({
                        "OverviewPage.useCallback[fetchData]": ()=>null
                    }["OverviewPage.useCallback[fetchData]"]),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgents"])().catch({
                        "OverviewPage.useCallback[fetchData]": ()=>null
                    }["OverviewPage.useCallback[fetchData]"])
                ]);
                if (statsRes) {
                    setStats(statsRes);
                    setServerOnline(true);
                    setAlertsData([
                        {
                            time: "00:00",
                            count: 0
                        },
                        {
                            time: "04:00",
                            count: 0
                        },
                        {
                            time: "08:00",
                            count: 0
                        },
                        {
                            time: "12:00",
                            count: 0
                        },
                        {
                            time: "16:00",
                            count: 0
                        },
                        {
                            time: "20:00",
                            count: 0
                        },
                        {
                            time: "Now",
                            count: statsRes.last_24h || 0
                        }
                    ]);
                }
                if (agentsRes && Array.isArray(agentsRes)) {
                    const active = agentsRes.filter({
                        "OverviewPage.useCallback[fetchData]": (a)=>a.status === "active"
                    }["OverviewPage.useCallback[fetchData]"]).length;
                    const disconnected = agentsRes.filter({
                        "OverviewPage.useCallback[fetchData]": (a)=>a.status !== "active"
                    }["OverviewPage.useCallback[fetchData]"]).length;
                    setAgentData([
                        {
                            name: "Active",
                            value: active,
                            color: "hsl(145, 70%, 50%)"
                        },
                        {
                            name: "Disconnected",
                            value: disconnected,
                            color: "hsl(25, 90%, 55%)"
                        },
                        {
                            name: "Pending",
                            value: 0,
                            color: "hsl(45, 90%, 55%)"
                        }
                    ]);
                }
            } catch  {
                setServerOnline(false);
            } finally{
                setLoading(false);
            }
        }
    }["OverviewPage.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OverviewPage.useEffect": ()=>{
            fetchData();
            const interval = setInterval(fetchData, 15000);
            return ({
                "OverviewPage.useEffect": ()=>clearInterval(interval)
            })["OverviewPage.useEffect"];
        }
    }["OverviewPage.useEffect"], [
        fetchData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            !loading && !serverOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-medium/30 bg-medium/10 px-4 py-2 text-sm text-medium",
                children: "⚠️ Server offline — no data available"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                lineNumber: 175,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Total Endpoints",
                        value: stats?.agents_total ?? 16,
                        subtitle: `${stats?.agents_active ?? 12} active`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                            lineNumber: 186,
                            columnNumber: 27
                        }, void 0),
                        trend: {
                            value: 12,
                            isPositive: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Active Alerts",
                        value: stats?.total_alerts ?? 47,
                        subtitle: "Last 24 hours",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                            lineNumber: 193,
                            columnNumber: 27
                        }, void 0),
                        trend: {
                            value: 8,
                            isPositive: false
                        },
                        variant: "high"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Critical Alerts",
                        value: stats?.critical ?? 0,
                        subtitle: `${stats?.high ?? 2} high severity`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                            lineNumber: 201,
                            columnNumber: 27
                        }, void 0),
                        variant: "critical"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Compliance Score",
                        value: "87%",
                        subtitle: "PCI DSS",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                            lineNumber: 208,
                            columnNumber: 27
                        }, void 0),
                        trend: {
                            value: 5,
                            isPositive: true
                        },
                        variant: "success"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Agents Summary"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-32 w-32",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: "100%",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                        data: agentData.filter((d)=>d.value > 0),
                                                        cx: "50%",
                                                        cy: "50%",
                                                        innerRadius: 35,
                                                        outerRadius: 55,
                                                        paddingAngle: 2,
                                                        dataKey: "value",
                                                        children: agentData.filter((d)=>d.value > 0).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: entry.color
                                                            }, `cell-${index}`, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: agentData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-3 w-3 rounded-full",
                                                            style: {
                                                                backgroundColor: item.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-foreground",
                                                            children: [
                                                                "(",
                                                                item.value,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, item.name, true, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Last 24 Hours Alerts"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                lineNumber: 266,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-critical",
                                                        children: stats?.critical ?? 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Critical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Level 15+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-high",
                                                        children: stats?.high ?? 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "High"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Level 12-14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-medium",
                                                        children: stats?.medium ?? 30
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Medium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Level 7-11"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-low",
                                                        children: stats?.low ?? 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Low"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Level 0-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                                data: alertsData,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                            id: "alertGradient",
                                                            x1: "0",
                                                            y1: "0",
                                                            x2: "0",
                                                            y2: "1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "0%",
                                                                    stopColor: "hsl(250, 70%, 60%)",
                                                                    stopOpacity: 0.3
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "100%",
                                                                    stopColor: "hsl(250, 70%, 60%)",
                                                                    stopOpacity: 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "time",
                                                        axisLine: false,
                                                        tickLine: false,
                                                        tick: {
                                                            fill: "hsl(0, 0%, 50%)",
                                                            fontSize: 10
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                        type: "monotone",
                                                        dataKey: "count",
                                                        stroke: "hsl(250, 70%, 60%)",
                                                        strokeWidth: 2,
                                                        fill: "url(#alertGradient)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                lineNumber: 271,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    "Endpoint Security",
                    "Threat Intelligence",
                    "Cloud Security",
                    "Compliance"
                ].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px flex-1 bg-border"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                lineNumber: 328,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                                children: moduleCards.filter((card)=>card.category === category).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "group cursor-pointer border-border bg-card transition-colors hover:border-muted-foreground/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "flex items-start gap-4 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-muted p-2.5 text-info group-hover:bg-info/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium text-foreground",
                                                                    children: card.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm text-muted-foreground",
                                                            children: card.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 45
                                        }, this)
                                    }, card.title, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                                lineNumber: 334,
                                columnNumber: 29
                            }, this)
                        ]
                    }, category, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                        lineNumber: 327,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
                lineNumber: 324,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx",
        lineNumber: 172,
        columnNumber: 9
    }, this);
}
_s(OverviewPage, "8JyuMkv+GpXM/QDqag6znk2lZEI=");
_c = OverviewPage;
var _c;
__turbopack_context__.k.register(_c, "OverviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/columns-2.js [app-client] (ecmascript) <export default as Columns>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DataTable({ data, columns, title, totalItems, showSearch = true, showFilters = true, showExport = true, className, onRowClick }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil((totalItems || data.length) / itemsPerPage);
    const filteredData = data.filter((item)=>Object.values(item).some((value)=>String(value).toLowerCase().includes(searchQuery.toLowerCase())));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border border-border bg-card", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-foreground",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            totalItems !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    totalItems.toLocaleString(),
                                    " results"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Search...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-48 bg-muted pl-9 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-2 border-border bg-muted text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            "Filters"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-2 border-border bg-muted text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns$3e$__["Columns"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            "Columns"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            showExport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "gap-2 border-border bg-muted text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    "Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-8 w-8 text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                className: "border-border hover:bg-transparent",
                                children: columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium uppercase tracking-wider text-muted-foreground", column.className),
                                        children: column.header
                                    }, String(column.key), false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: filteredData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    colSpan: columns.length,
                                    className: "h-24 text-center text-muted-foreground",
                                    children: "No results found"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this) : filteredData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-border", onRowClick && "cursor-pointer hover:bg-muted/50"),
                                    onClick: ()=>onRowClick?.(item),
                                    children: columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-foreground", column.className),
                                            children: column.render ? column.render(item) : item[column.key]
                                        }, String(column.key), false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, this))
                                }, index, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-t border-border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Page ",
                            currentPage,
                            " of ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "border-border bg-muted",
                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                disabled: currentPage === 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "border-border bg-muted",
                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: currentPage === totalPages,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(DataTable, "txtXLi45gap+jsOdqRzNDGQD7TY=");
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndpointsPage",
    ()=>EndpointsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const StatusBadge = ({ status })=>{
    const statusConfig = {
        active: {
            label: "Active",
            className: "bg-success/20 text-success"
        },
        disconnected: {
            label: "Disconnected",
            className: "bg-high/20 text-high"
        },
        pending: {
            label: "Pending",
            className: "bg-medium/20 text-medium"
        },
        never_connected: {
            label: "Never connected",
            className: "bg-muted text-muted-foreground"
        }
    };
    const config = statusConfig[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: config.className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-1.5 h-1.5 w-1.5 rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            config.label
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StatusBadge;
function DonutChart({ data, title }) {
    const total = data.reduce((acc, item)=>acc + item.value, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-border bg-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-center text-xs font-medium uppercase tracking-wider text-muted-foreground",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-28 w-28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                            data: data.filter((d)=>d.value > 0),
                                            cx: "50%",
                                            cy: "50%",
                                            innerRadius: 30,
                                            outerRadius: 50,
                                            paddingAngle: 2,
                                            dataKey: "value",
                                            children: data.filter((d)=>d.value > 0).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: entry.color
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-foreground",
                                        children: total
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5",
                            children: data.filter((d)=>d.value > 0).slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full",
                                            style: {
                                                backgroundColor: item.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-foreground",
                                            children: [
                                                "(",
                                                item.value,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
_c1 = DonutChart;
// Agent Detail Row helper
function DetailRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between border-b border-border/50 py-2.5 last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-foreground text-right max-w-[60%]",
                children: value
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
        lineNumber: 129,
        columnNumber: 9
    }, this);
}
_c2 = DetailRow;
function EndpointsPage() {
    _s();
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Dialog states
    const [detailAgent, setDetailAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailOpen, setDetailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deployOpen, setDeployOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [removeAgent, setRemoveAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [removeOpen, setRemoveOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchAgents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EndpointsPage.useCallback[fetchAgents]": async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgents"])();
                if (res && Array.isArray(res)) {
                    const agentList = res.map({
                        "EndpointsPage.useCallback[fetchAgents].agentList": (data)=>({
                                id: data.agent_id || data.id || "—",
                                name: data.hostname || data.name || data.agent_id || "—",
                                ip: data.ip || "—",
                                groups: data.groups || [
                                    "Default"
                                ],
                                os: typeof data.os === "object" ? `${data.os?.platform || ""} ${data.os?.platform_release || ""}`.trim() || "Unknown" : data.os || "Unknown",
                                cluster: data.cluster || "node01",
                                version: data.version || "0.1.0",
                                status: data.status === "active" ? "active" : "disconnected",
                                enrolled_at: data.enrolled_at || "—",
                                last_seen: data.last_seen || 0
                            })
                    }["EndpointsPage.useCallback[fetchAgents].agentList"]);
                    setAgents(agentList);
                }
            } catch  {
            // Keep empty state
            } finally{
                setLoading(false);
            }
        }
    }["EndpointsPage.useCallback[fetchAgents]"], []);
    const handleRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EndpointsPage.useCallback[handleRefresh]": async ()=>{
            setRefreshing(true);
            await fetchAgents();
            setTimeout({
                "EndpointsPage.useCallback[handleRefresh]": ()=>setRefreshing(false)
            }["EndpointsPage.useCallback[handleRefresh]"], 600);
        }
    }["EndpointsPage.useCallback[handleRefresh]"], [
        fetchAgents
    ]);
    const handleViewDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EndpointsPage.useCallback[handleViewDetails]": async (agent)=>{
            // Try to get fresh data from server
            try {
                const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgent"])(agent.id);
                if (fresh) {
                    setDetailAgent({
                        id: fresh.agent_id || agent.id,
                        name: fresh.hostname || fresh.name || agent.name,
                        ip: fresh.ip || agent.ip,
                        groups: fresh.groups || agent.groups,
                        os: fresh.os || agent.os,
                        cluster: fresh.cluster || agent.cluster,
                        version: fresh.version || agent.version,
                        status: fresh.status === "active" ? "active" : "disconnected",
                        enrolled_at: fresh.enrolled_at || agent.enrolled_at,
                        last_seen: fresh.last_seen || agent.last_seen
                    });
                } else {
                    setDetailAgent(agent);
                }
            } catch  {
                setDetailAgent(agent);
            }
            setDetailOpen(true);
        }
    }["EndpointsPage.useCallback[handleViewDetails]"], []);
    const handleRemoveAgent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EndpointsPage.useCallback[handleRemoveAgent]": async ()=>{
            if (!removeAgent) return;
            try {
                await fetch(`http://localhost:5001/api/agents/${removeAgent.id}`, {
                    method: "DELETE"
                });
            } catch  {
            // Server may not support DELETE yet, that's OK
            }
            setRemoveOpen(false);
            setRemoveAgent(null);
            handleRefresh();
        }
    }["EndpointsPage.useCallback[handleRemoveAgent]"], [
        removeAgent,
        handleRefresh
    ]);
    const handleCopyId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EndpointsPage.useCallback[handleCopyId]": (id)=>{
            navigator.clipboard.writeText(id);
            setCopied(true);
            setTimeout({
                "EndpointsPage.useCallback[handleCopyId]": ()=>setCopied(false)
            }["EndpointsPage.useCallback[handleCopyId]"], 2000);
        }
    }["EndpointsPage.useCallback[handleCopyId]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EndpointsPage.useEffect": ()=>{
            fetchAgents();
            const interval = setInterval(fetchAgents, 15000);
            return ({
                "EndpointsPage.useEffect": ()=>clearInterval(interval)
            })["EndpointsPage.useEffect"];
        }
    }["EndpointsPage.useEffect"], [
        fetchAgents
    ]);
    // Build chart data from agents
    const statusData = [
        {
            name: "Active",
            value: agents.filter((a)=>a.status === "active").length,
            color: "hsl(145, 70%, 50%)"
        },
        {
            name: "Disconnected",
            value: agents.filter((a)=>a.status === "disconnected").length,
            color: "hsl(25, 90%, 55%)"
        },
        {
            name: "Pending",
            value: agents.filter((a)=>a.status === "pending").length,
            color: "hsl(45, 90%, 55%)"
        }
    ];
    // Count OS distribution
    const osCounts = {};
    agents.forEach((a)=>{
        osCounts[a.os] = (osCounts[a.os] || 0) + 1;
    });
    const osColors = [
        "hsl(250, 70%, 60%)",
        "hsl(165, 70%, 50%)",
        "hsl(45, 90%, 55%)",
        "hsl(25, 90%, 55%)",
        "hsl(300, 50%, 50%)"
    ];
    const osData = Object.entries(osCounts).slice(0, 5).map(([name, value], i)=>({
            name,
            value,
            color: osColors[i % osColors.length]
        }));
    // Count group distribution
    const groupCounts = {};
    agents.forEach((a)=>a.groups.forEach((g)=>{
            groupCounts[g] = (groupCounts[g] || 0) + 1;
        }));
    const groupColors = [
        "hsl(145, 70%, 50%)",
        "hsl(250, 70%, 60%)",
        "hsl(45, 90%, 55%)",
        "hsl(0, 0%, 50%)"
    ];
    const groupsData = Object.entries(groupCounts).slice(0, 5).map(([name, value], i)=>({
            name,
            value,
            color: groupColors[i % groupColors.length]
        }));
    const formatLastSeen = (ts)=>{
        if (!ts) return "Never";
        const diff = Date.now() / 1000 - ts;
        if (diff < 60) return `${Math.floor(diff)}s ago`;
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return `${Math.floor(diff / 86400)}d ago`;
    };
    const columns = [
        {
            key: "id",
            header: "ID",
            render: (agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-muted-foreground",
                    children: agent.id
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 269,
                    columnNumber: 17
                }, this)
        },
        {
            key: "name",
            header: "Name",
            render: (agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "font-medium text-info hover:underline cursor-pointer",
                    onClick: ()=>handleViewDetails(agent),
                    children: agent.name
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 276,
                    columnNumber: 17
                }, this)
        },
        {
            key: "ip",
            header: "IP Address",
            render: (agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm",
                    children: agent.ip
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 288,
                    columnNumber: 17
                }, this)
        },
        {
            key: "groups",
            header: "Group(s)",
            render: (agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1",
                    children: agent.groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "border-border bg-muted text-foreground",
                            children: group
                        }, group, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 297,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 295,
                    columnNumber: 17
                }, this)
        },
        {
            key: "os",
            header: "Operating System",
            render: (agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: String(agent.os)
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 312,
                    columnNumber: 17
                }, this)
        },
        {
            key: "cluster",
            header: "Cluster Node"
        },
        {
            key: "version",
            header: "Version"
        },
        {
            key: "status",
            header: "Status",
            render: (agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                    status: agent.status
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 326,
                    columnNumber: 39
                }, this)
        },
        {
            key: "actions",
            header: "Actions",
            render: (agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-8 w-8 text-muted-foreground hover:text-foreground",
                            onClick: ()=>handleViewDetails(agent),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                lineNumber: 339,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 333,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-8 w-8 text-muted-foreground hover:text-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                    align: "end",
                                    className: "bg-card border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "text-foreground cursor-pointer",
                                            onClick: ()=>handleViewDetails(agent),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 33
                                                }, this),
                                                "View details"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "text-foreground cursor-pointer",
                                            onClick: ()=>handleCopyId(agent.id),
                                            children: [
                                                copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 43
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 80
                                                }, this),
                                                "Copy agent ID"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "my-1 h-px bg-border"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 362,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "text-critical cursor-pointer",
                                            onClick: ()=>{
                                                setRemoveAgent(agent);
                                                setRemoveOpen(true);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 33
                                                }, this),
                                                "Remove agent"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 341,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 332,
                    columnNumber: 17
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                        data: statusData,
                        title: "Agents by Status"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                        lineNumber: 384,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                        data: osData.length > 0 ? osData : [
                            {
                                name: "No data",
                                value: 1,
                                color: "hsl(0, 0%, 40%)"
                            }
                        ],
                        title: "Top 5 OS"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                        lineNumber: 385,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                        data: groupsData.length > 0 ? groupsData : [
                            {
                                name: "No data",
                                value: 1,
                                color: "hsl(0, 0%, 40%)"
                            }
                        ],
                        title: "Top 5 Groups"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                        lineNumber: 386,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 383,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-foreground",
                        children: [
                            "Agents (",
                            agents.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                        lineNumber: 391,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
                                onClick: ()=>setDeployOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 25
                                    }, this),
                                    "Deploy new agent"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                lineNumber: 395,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "gap-2 border-border bg-muted text-foreground",
                                onClick: handleRefresh,
                                disabled: refreshing,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 25
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                lineNumber: 402,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                        lineNumber: 394,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 390,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                data: agents,
                columns: columns,
                totalItems: agents.length,
                showFilters: true,
                showExport: true
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 415,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: detailOpen,
                onOpenChange: setDetailOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "bg-card border-border sm:max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-foreground flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "h-5 w-5 text-info"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 29
                                        }, this),
                                        "Agent Details"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-muted-foreground",
                                    children: "Full information for this endpoint agent."
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 431,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 426,
                            columnNumber: 21
                        }, this),
                        detailAgent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Agent ID",
                                    value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: detailAgent.id
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 33
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Hostname",
                                    value: detailAgent.name
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "IP Address",
                                    value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: detailAgent.ip
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 33
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Operating System",
                                    value: detailAgent.os
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Version",
                                    value: detailAgent.version
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Cluster Node",
                                    value: detailAgent.cluster
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Groups",
                                    value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 flex-wrap justify-end",
                                        children: detailAgent.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "border-border bg-muted text-foreground",
                                                children: g
                                            }, g, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 41
                                            }, void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 33
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Status",
                                    value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                        status: detailAgent.status
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 62
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Enrolled At",
                                    value: detailAgent.enrolled_at || "—"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Last Seen",
                                    value: formatLastSeen(detailAgent.last_seen)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 436,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>setDetailOpen(false),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                lineNumber: 462,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 461,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 425,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 424,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: deployOpen,
                onOpenChange: setDeployOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "bg-card border-border sm:max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-foreground flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-5 w-5 text-success"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 474,
                                            columnNumber: 29
                                        }, this),
                                        "Deploy New Agent"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-muted-foreground",
                                    children: "Follow these steps to connect a new agent to this Horus SIEM server."
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 472,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-border bg-muted/50 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground mb-2",
                                            children: "1. Clone the agent"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "block rounded bg-background px-3 py-2 text-xs font-mono text-muted-foreground",
                                            children: "git clone <repo-url> && cd agents"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-border bg-muted/50 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground mb-2",
                                            children: "2. Configure server connection"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "block rounded bg-background px-3 py-2 text-xs font-mono text-muted-foreground",
                                            children: `"server": { "host": "<server-ip>", "enrollment_port": 5001, "ingestion_port": 5001 }`
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-border bg-muted/50 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground mb-2",
                                            children: "3. Start the agent"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "block rounded bg-background px-3 py-2 text-xs font-mono text-muted-foreground",
                                            children: "pip install -r requirements.txt && python main.py"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 481,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>setDeployOpen(false),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                lineNumber: 502,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 501,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 471,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 470,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: removeOpen,
                onOpenChange: setRemoveOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "bg-card border-border sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-foreground flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-5 w-5 text-critical"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 29
                                        }, this),
                                        "Remove Agent"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-muted-foreground",
                                    children: [
                                        "Are you sure you want to remove agent",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-foreground",
                                            children: removeAgent?.name
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        "(",
                                        removeAgent?.id,
                                        ")? This action cannot be undone."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 517,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 512,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setRemoveOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleRemoveAgent,
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                            lineNumber: 523,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                    lineNumber: 511,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
                lineNumber: 510,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx",
        lineNumber: 381,
        columnNumber: 9
    }, this);
}
_s(EndpointsPage, "LTOzIvaZc+VyE9IVImLhiaUYNHA=");
_c3 = EndpointsPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "DonutChart");
__turbopack_context__.k.register(_c2, "DetailRow");
__turbopack_context__.k.register(_c3, "EndpointsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FIMPage",
    ()=>FIMPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/file-plus.js [app-client] (ecmascript) <export default as FilePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileEdit$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript) <export default as FileEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileX$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/file-x.js [app-client] (ecmascript) <export default as FileX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const emptyFimStats = {
    total_events: 0,
    created: 0,
    modified: 0,
    deleted: 0,
    last_24h: 0,
    unique_files: 0
};
const ActionBadge = ({ action })=>{
    const config = {
        created: {
            label: "Created",
            className: "bg-success/20 text-success border-success/30",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__["FilePlus"]
        },
        modified: {
            label: "Modified",
            className: "bg-medium/20 text-medium border-medium/30",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileEdit$3e$__["FileEdit"]
        },
        deleted: {
            label: "Deleted",
            className: "bg-critical/20 text-critical border-critical/30",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileX$3e$__["FileX"]
        }
    };
    const c = config[action] || config.modified;
    const Icon = c.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: c.className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "mr-1.5 h-3 w-3"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            c.label
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ActionBadge;
const LevelBadge = ({ level })=>{
    const getConfig = ()=>{
        if (level >= 12) return {
            className: "bg-critical/20 text-critical border-critical/30"
        };
        if (level >= 8) return {
            className: "bg-high/20 text-high border-high/30"
        };
        if (level >= 4) return {
            className: "bg-medium/20 text-medium border-medium/30"
        };
        return {
            className: "bg-low/20 text-low border-low/30"
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: getConfig().className,
        children: [
            "Level ",
            level
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = LevelBadge;
function FIMPage() {
    _s();
    const [fimEvents, setFimEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyFimStats);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [serverOnline, setServerOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FIMPage.useCallback[fetchData]": async ()=>{
            try {
                const [eventsRes, statsRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFimEvents"])({
                        limit: 100
                    }).catch({
                        "FIMPage.useCallback[fetchData]": ()=>null
                    }["FIMPage.useCallback[fetchData]"]),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFimStats"])().catch({
                        "FIMPage.useCallback[fetchData]": ()=>null
                    }["FIMPage.useCallback[fetchData]"])
                ]);
                if (statsRes) {
                    setStats(statsRes);
                    setServerOnline(true);
                }
                if (eventsRes && eventsRes.events && eventsRes.events.length > 0) {
                    const events = eventsRes.events.map({
                        "FIMPage.useCallback[fetchData].events": (e)=>({
                                id: e.id || "—",
                                timestamp: e.timestamp ? new Date(e.timestamp * 1000).toLocaleString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit"
                                }) : e.agent_time_iso || "—",
                                agent_id: e.agent_id || "unknown",
                                action: e.action || "modified",
                                path: e.path || "—",
                                rule_name: e.rule_name || "File integrity event",
                                level: e.level || 5,
                                hash_current: "—",
                                hash_previous: "—"
                            })
                    }["FIMPage.useCallback[fetchData].events"]);
                    setFimEvents(events);
                    setServerOnline(true);
                }
            } catch  {
                setServerOnline(false);
            } finally{
                setLoading(false);
            }
        }
    }["FIMPage.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FIMPage.useEffect": ()=>{
            fetchData();
            const interval = setInterval(fetchData, 15000);
            return ({
                "FIMPage.useEffect": ()=>clearInterval(interval)
            })["FIMPage.useEffect"];
        }
    }["FIMPage.useEffect"], [
        fetchData
    ]);
    // Build chart data from stats
    const actionPieData = [
        {
            name: "Created",
            value: stats.created,
            color: "hsl(145, 70%, 50%)"
        },
        {
            name: "Modified",
            value: stats.modified,
            color: "hsl(45, 90%, 55%)"
        },
        {
            name: "Deleted",
            value: stats.deleted,
            color: "hsl(0, 70%, 55%)"
        }
    ];
    // Build a simple timeline from events
    const timelineBuckets = {};
    fimEvents.forEach((e)=>{
        const hour = e.timestamp.split(",")[1]?.trim().slice(0, 2) || "00";
        timelineBuckets[`${hour}:00`] = (timelineBuckets[`${hour}:00`] || 0) + 1;
    });
    const timelineData = Object.entries(timelineBuckets).slice(0, 8).map(([time, count])=>({
            time,
            count
        }));
    if (timelineData.length === 0) {
        timelineData.push({
            time: "00:00",
            count: 3
        }, {
            time: "06:00",
            count: 8
        }, {
            time: "12:00",
            count: 12
        }, {
            time: "18:00",
            count: 5
        });
    }
    const eventsColumns = [
        {
            key: "timestamp",
            header: "Timestamp",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-muted-foreground",
                    children: item.timestamp
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
        },
        {
            key: "agent_id",
            header: "Agent",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-info",
                    children: item.agent_id
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
        },
        {
            key: "action",
            header: "Action",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBadge, {
                    action: item.action
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                    lineNumber: 190,
                    columnNumber: 35
                }, this)
        },
        {
            key: "path",
            header: "File Path",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "max-w-[300px] truncate font-mono text-sm",
                    children: item.path
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
        },
        {
            key: "rule_name",
            header: "Rule",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "line-clamp-1 max-w-xs text-sm",
                    children: item.rule_name
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
        },
        {
            key: "level",
            header: "Level",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelBadge, {
                    level: item.level
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                    lineNumber: 209,
                    columnNumber: 35
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            !loading && !serverOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-medium/30 bg-medium/10 px-4 py-2 text-sm text-medium",
                children: "⚠️ Server offline — no data available"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "dashboard",
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "border-border bg-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "dashboard",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "events",
                                children: "Events"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "dashboard",
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Total FIM Events",
                                        value: stats.total_events,
                                        subtitle: `${stats.last_24h} in last 24h`,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Files Modified",
                                        value: stats.modified,
                                        subtitle: "Checksum changes detected",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileEdit$3e$__["FileEdit"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 21
                                        }, void 0),
                                        variant: "high"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Files Created",
                                        value: stats.created,
                                        subtitle: "New files in monitored dirs",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__["FilePlus"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, void 0),
                                        variant: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Files Deleted",
                                        value: stats.deleted,
                                        subtitle: "Removed from monitored dirs",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileX$3e$__["FileX"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 21
                                        }, void 0),
                                        variant: "critical"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-6 lg:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-border bg-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Events by Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-32 w-32",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                            data: actionPieData.filter((d)=>d.value > 0),
                                                                            cx: "50%",
                                                                            cy: "50%",
                                                                            innerRadius: 35,
                                                                            outerRadius: 55,
                                                                            paddingAngle: 2,
                                                                            dataKey: "value",
                                                                            children: actionPieData.filter((d)=>d.value > 0).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                                    fill: entry.color
                                                                                }, `cell-${index}`, false, {
                                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                                    lineNumber: 285,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-lg font-bold text-foreground",
                                                                        children: stats.total_events
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2",
                                                            children: actionPieData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-3 w-3 rounded-full",
                                                                            style: {
                                                                                backgroundColor: item.color
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                            lineNumber: 297,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted-foreground",
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                            lineNumber: 298,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium text-foreground",
                                                                            children: [
                                                                                "(",
                                                                                item.value,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, item.name, true, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-border bg-card lg:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "FIM Events Timeline"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-48",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: "100%",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                                            data: timelineData,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                        id: "fimGradient",
                                                                        x1: "0",
                                                                        y1: "0",
                                                                        x2: "0",
                                                                        y2: "1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "0%",
                                                                                stopColor: "hsl(165, 70%, 50%)",
                                                                                stopOpacity: 0.3
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                                lineNumber: 320,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "100%",
                                                                                stopColor: "hsl(165, 70%, 50%)",
                                                                                stopOpacity: 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                                lineNumber: 321,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    dataKey: "time",
                                                                    axisLine: false,
                                                                    tickLine: false,
                                                                    tick: {
                                                                        fill: "hsl(0, 0%, 50%)",
                                                                        fontSize: 11
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    axisLine: false,
                                                                    tickLine: false,
                                                                    tick: {
                                                                        fill: "hsl(0, 0%, 50%)",
                                                                        fontSize: 11
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    contentStyle: {
                                                                        backgroundColor: "hsl(0, 0%, 14%)",
                                                                        border: "1px solid hsl(0, 0%, 22%)",
                                                                        borderRadius: "8px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                                    type: "monotone",
                                                                    dataKey: "count",
                                                                    stroke: "hsl(165, 70%, 50%)",
                                                                    strokeWidth: 2,
                                                                    fill: "url(#fimGradient)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-border bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "Monitoring Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-info",
                                                                children: stats.unique_files
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Unique Files Monitored"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-foreground",
                                                                children: stats.last_24h
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Events Last 24h"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-success",
                                                                children: stats.total_events
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Total Events"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "events",
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: [
                                            "FIM Events (",
                                            fimEvents.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "gap-2 border-border bg-muted text-foreground",
                                        onClick: fetchData,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                                data: fimEvents,
                                columns: eventsColumns,
                                totalItems: fimEvents.length,
                                showFilters: true,
                                showExport: true
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(FIMPage, "gT8SDTYBVTs8oHFLAYIo5AfiJCk=");
_c2 = FIMPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ActionBadge");
__turbopack_context__.k.register(_c1, "LevelBadge");
__turbopack_context__.k.register(_c2, "FIMPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VulnerabilitiesPage",
    ()=>VulnerabilitiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const emptyVulnStats = {
    total_vulnerabilities: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    affected_agents: 0
};
const SeverityBadge = ({ severity })=>{
    const config = {
        critical: {
            className: "bg-critical/20 text-critical border-critical/30"
        },
        high: {
            className: "bg-high/20 text-high border-high/30"
        },
        medium: {
            className: "bg-medium/20 text-medium border-medium/30"
        },
        low: {
            className: "bg-low/20 text-low border-low/30"
        }
    };
    const c = config[severity] || config.medium;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: c.className,
        children: severity.charAt(0).toUpperCase() + severity.slice(1)
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SeverityBadge;
function VulnerabilitiesPage() {
    _s();
    const [vulns, setVulns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyVulnStats);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [serverOnline, setServerOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VulnerabilitiesPage.useCallback[fetchData]": async ()=>{
            try {
                const [vulnsRes, statsRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVulnerabilities"])({
                        limit: 100
                    }).catch({
                        "VulnerabilitiesPage.useCallback[fetchData]": ()=>null
                    }["VulnerabilitiesPage.useCallback[fetchData]"]),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVulnerabilityStats"])().catch({
                        "VulnerabilitiesPage.useCallback[fetchData]": ()=>null
                    }["VulnerabilitiesPage.useCallback[fetchData]"])
                ]);
                if (statsRes) {
                    setStats(statsRes);
                    setServerOnline(true);
                }
                if (vulnsRes && vulnsRes.vulnerabilities && vulnsRes.vulnerabilities.length > 0) {
                    const items = vulnsRes.vulnerabilities.map({
                        "VulnerabilitiesPage.useCallback[fetchData].items": (v)=>({
                                id: v.id || "—",
                                timestamp: v.timestamp ? new Date(v.timestamp * 1000).toLocaleString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit"
                                }) : v.agent_time_iso || "—",
                                agent_id: v.agent_id || "unknown",
                                cve_id: v.vulnerability?.cve_id || v.rule_id || "—",
                                package_name: v.vulnerability?.package || v.rule_name?.replace("Vulnerable Package: ", "") || "—",
                                installed_version: v.vulnerability?.installed_version || "—",
                                severity: v.vulnerability?.severity || (v.level >= 12 ? "critical" : v.level >= 8 ? "high" : v.level >= 4 ? "medium" : "low"),
                                level: v.level || 5,
                                description: v.rule_description || v.vulnerability?.description || "—",
                                affected_versions: v.vulnerability?.affected_versions || "—"
                            })
                    }["VulnerabilitiesPage.useCallback[fetchData].items"]);
                    setVulns(items);
                    setServerOnline(true);
                }
            } catch  {
                setServerOnline(false);
            } finally{
                setLoading(false);
            }
        }
    }["VulnerabilitiesPage.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VulnerabilitiesPage.useEffect": ()=>{
            fetchData();
            const interval = setInterval(fetchData, 15000);
            return ({
                "VulnerabilitiesPage.useEffect": ()=>clearInterval(interval)
            })["VulnerabilitiesPage.useEffect"];
        }
    }["VulnerabilitiesPage.useEffect"], [
        fetchData
    ]);
    // Build severity chart data
    const severityChartData = [
        {
            name: "Critical",
            value: stats.critical,
            color: "hsl(0, 70%, 55%)"
        },
        {
            name: "High",
            value: stats.high,
            color: "hsl(25, 90%, 55%)"
        },
        {
            name: "Medium",
            value: stats.medium,
            color: "hsl(45, 90%, 55%)"
        },
        {
            name: "Low",
            value: stats.low,
            color: "hsl(165, 70%, 50%)"
        }
    ];
    // Build top vulnerable packages
    const packageCounts = {};
    vulns.forEach((v)=>{
        packageCounts[v.package_name] = (packageCounts[v.package_name] || 0) + 1;
    });
    const topPackages = Object.entries(packageCounts).sort(([, a], [, b])=>b - a).slice(0, 5);
    const columns = [
        {
            key: "timestamp",
            header: "Timestamp",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-muted-foreground",
                    children: item.timestamp
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
        },
        {
            key: "agent_id",
            header: "Agent",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-info",
                    children: item.agent_id
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
        },
        {
            key: "cve_id",
            header: "CVE",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-sm text-critical",
                            children: item.cve_id
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "h-3 w-3 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
        },
        {
            key: "package_name",
            header: "Package",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: item.package_name
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                "v",
                                item.installed_version
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
        },
        {
            key: "severity",
            header: "Severity",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityBadge, {
                    severity: item.severity
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                    lineNumber: 181,
                    columnNumber: 40
                }, this)
        },
        {
            key: "affected_versions",
            header: "Affected",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm text-muted-foreground",
                    children: item.affected_versions
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
        },
        {
            key: "description",
            header: "Description",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "line-clamp-1 max-w-xs text-sm",
                    children: item.description
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            !loading && !serverOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-medium/30 bg-medium/10 px-4 py-2 text-sm text-medium",
                children: "⚠️ Server offline — no data available"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Total Vulnerabilities",
                        value: stats.total_vulnerabilities,
                        subtitle: `${stats.affected_agents} agents affected`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 214,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Critical",
                        value: stats.critical,
                        subtitle: "Immediate action required",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 220,
                            columnNumber: 17
                        }, void 0),
                        variant: "critical"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "High",
                        value: stats.high,
                        subtitle: "Action recommended",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 227,
                            columnNumber: 17
                        }, void 0),
                        variant: "high"
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Medium / Low",
                        value: stats.medium + stats.low,
                        subtitle: `${stats.medium} medium, ${stats.low} low`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                            lineNumber: 234,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Vulnerability Severity Distribution"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: "100%",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                            data: severityChartData,
                                            barSize: 40,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    dataKey: "name",
                                                    axisLine: false,
                                                    tickLine: false,
                                                    tick: {
                                                        fill: "hsl(0, 0%, 60%)",
                                                        fontSize: 12
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    axisLine: false,
                                                    tickLine: false,
                                                    tick: {
                                                        fill: "hsl(0, 0%, 50%)",
                                                        fontSize: 11
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: {
                                                        backgroundColor: "hsl(0, 0%, 14%)",
                                                        border: "1px solid hsl(0, 0%, 22%)",
                                                        borderRadius: "8px"
                                                    },
                                                    labelStyle: {
                                                        color: "hsl(0, 0%, 95%)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "value",
                                                    radius: [
                                                        6,
                                                        6,
                                                        0,
                                                        0
                                                    ],
                                                    children: severityChartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: entry.color
                                                        }, `cell-${index}`, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Top Vulnerable Packages"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        topPackages.map(([name, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                className: "h-4 w-4 text-muted-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-foreground",
                                                                children: name
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: "border-border bg-muted font-mono",
                                                        children: [
                                                            count,
                                                            " ",
                                                            count === 1 ? "vuln" : "vulns"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, name, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)),
                                        topPackages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-sm text-muted-foreground",
                                            children: "No vulnerabilities detected"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-foreground",
                        children: [
                            "Vulnerabilities (",
                            vulns.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "gap-2 border-border bg-muted text-foreground",
                        onClick: fetchData,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            "Refresh"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                data: vulns,
                columns: columns,
                totalItems: vulns.length,
                showFilters: true,
                showExport: true
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(VulnerabilitiesPage, "DddqQMVcku19JtfBNyOQRT6Hbfc=");
_c1 = VulnerabilitiesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SeverityBadge");
__turbopack_context__.k.register(_c1, "VulnerabilitiesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreatsPage",
    ()=>ThreatsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const emptyTimeline = [
    {
        time: "00:00",
        count: 0
    },
    {
        time: "04:00",
        count: 0
    },
    {
        time: "08:00",
        count: 0
    },
    {
        time: "12:00",
        count: 0
    },
    {
        time: "16:00",
        count: 0
    },
    {
        time: "20:00",
        count: 0
    }
];
function severityLabel(level) {
    if (level >= 12) return "Critical";
    if (level >= 8) return "High";
    if (level >= 4) return "Medium";
    return "Low";
}
function timeAgo(timestamp) {
    const diff = Date.now() / 1000 - timestamp;
    if (diff < 60) return `${Math.floor(diff)}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
}
const LevelBadge = ({ level })=>{
    const getConfig = ()=>{
        if (level >= 12) return {
            className: "bg-critical/20 text-critical border-critical/30",
            label: "Critical"
        };
        if (level >= 8) return {
            className: "bg-high/20 text-high border-high/30",
            label: "High"
        };
        if (level >= 4) return {
            className: "bg-medium/20 text-medium border-medium/30",
            label: "Medium"
        };
        return {
            className: "bg-low/20 text-low border-low/30",
            label: "Low"
        };
    };
    const config = getConfig();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: config.className,
        children: [
            "Level ",
            level
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LevelBadge;
function ThreatsPage() {
    _s();
    const [threatEvents, setThreatEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [eventsTimelineData, setEventsTimelineData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyTimeline);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThreatsPage.useCallback[fetchAlerts]": async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlerts"])({
                    limit: 50
                });
                if (res && res.alerts && res.alerts.length > 0) {
                    const events = res.alerts.map({
                        "ThreatsPage.useCallback[fetchAlerts].events": (alert)=>({
                                timestamp: alert.timestamp ? new Date(alert.timestamp * 1000).toLocaleString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit"
                                }) : "Unknown",
                                agent: alert.agent_id || "unknown",
                                rule: alert.rule_name || "Unknown rule",
                                ruleId: alert.rule_id || 0,
                                level: alert.level || 0,
                                tactic: alert.mitre?.tactic?.[0] || severityLabel(alert.level || 0),
                                technique: alert.mitre?.technique?.[0] || "—",
                                description: alert.rule_description || alert.rule_name || "—"
                            })
                    }["ThreatsPage.useCallback[fetchAlerts].events"]);
                    setThreatEvents(events);
                }
            } catch  {
            // No fallback — keep empty state
            } finally{
                setLoading(false);
            }
        }
    }["ThreatsPage.useCallback[fetchAlerts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreatsPage.useEffect": ()=>{
            fetchAlerts();
            const interval = setInterval(fetchAlerts, 15000);
            return ({
                "ThreatsPage.useEffect": ()=>clearInterval(interval)
            })["ThreatsPage.useEffect"];
        }
    }["ThreatsPage.useEffect"], [
        fetchAlerts
    ]);
    const columns = [
        {
            key: "timestamp",
            header: "Timestamp",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-muted-foreground",
                    children: item.timestamp
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, this)
        },
        {
            key: "agent",
            header: "Agent",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-info",
                    children: item.agent
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, this)
        },
        {
            key: "rule",
            header: "Rule",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: item.rule
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                "ID: ",
                                item.ruleId
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this)
        },
        {
            key: "level",
            header: "Level",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelBadge, {
                    level: item.level
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                    lineNumber: 143,
                    columnNumber: 44
                }, this)
        },
        {
            key: "tactic",
            header: "MITRE Tactic",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    className: "border-info/30 bg-info/10 text-info",
                    children: item.tactic
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this)
        },
        {
            key: "technique",
            header: "Technique",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-sm text-info",
                            children: item.technique
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "h-3 w-3 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                            lineNumber: 160,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                    lineNumber: 158,
                    columnNumber: 17
                }, this)
        },
        {
            key: "description",
            header: "Description",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "line-clamp-1 max-w-xs text-sm",
                    children: item.description
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Events Count Evolution"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: "100%",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                            data: eventsTimelineData,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "threatGradient",
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "0",
                                                        y2: "1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "hsl(250, 70%, 60%)",
                                                                stopOpacity: 0.3
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "hsl(250, 70%, 60%)",
                                                                stopOpacity: 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    dataKey: "time",
                                                    axisLine: false,
                                                    tickLine: false,
                                                    tick: {
                                                        fill: "hsl(0, 0%, 50%)",
                                                        fontSize: 11
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    axisLine: false,
                                                    tickLine: false,
                                                    tick: {
                                                        fill: "hsl(0, 0%, 50%)",
                                                        fontSize: 11
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: {
                                                        backgroundColor: "hsl(0, 0%, 14%)",
                                                        border: "1px solid hsl(0, 0%, 22%)",
                                                        borderRadius: "8px"
                                                    },
                                                    labelStyle: {
                                                        color: "hsl(0, 0%, 95%)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                    type: "monotone",
                                                    dataKey: "count",
                                                    stroke: "hsl(250, 70%, 60%)",
                                                    strokeWidth: 2,
                                                    fill: "url(#threatGradient)"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 184,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "MITRE ATT&CK"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-xs font-medium text-muted-foreground",
                                        children: "Top Tactics"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: threatEvents.length > 0 ? (()=>{
                                            const tacticCounts = {};
                                            threatEvents.forEach((e)=>{
                                                tacticCounts[e.tactic] = (tacticCounts[e.tactic] || 0) + 1;
                                            });
                                            const colors = [
                                                "hsl(250, 70%, 60%)",
                                                "hsl(165, 70%, 50%)",
                                                "hsl(45, 90%, 55%)",
                                                "hsl(25, 90%, 55%)",
                                                "hsl(340, 70%, 55%)"
                                            ];
                                            return Object.entries(tacticCounts).sort(([, a], [, b])=>b - a).slice(0, 5).map(([tactic, count], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-foreground",
                                                            children: tactic
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "border-border bg-muted font-mono",
                                                            children: count
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, tactic, true, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 45
                                                }, this));
                                        })() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-sm text-muted-foreground",
                                            children: "No threat data available"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 234,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Compliance"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "border-border text-muted-foreground",
                                            children: "PCI DSS"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 268,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-sm text-muted-foreground",
                                        children: "Compliance data will be computed from real alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                        lineNumber: 267,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Threat Summary (Last 24 hours)"
                                }, void 0, false, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 289,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-critical",
                                                    children: threatEvents.filter((e)=>e.level >= 12).length
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Critical Events"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-high",
                                                    children: threatEvents.filter((e)=>e.level >= 8 && e.level < 12).length
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "High Events"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-medium",
                                                    children: threatEvents.filter((e)=>e.level >= 4 && e.level < 8).length
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Medium Events"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: new Set(threatEvents.map((e)=>e.technique)).size
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Unique Techniques"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 294,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                        lineNumber: 288,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-foreground",
                        children: [
                            "Security Events (",
                            threatEvents.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "gap-2 border-border bg-muted text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 25
                                    }, this),
                                    "Advanced Filters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 331,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "gap-2 border-border bg-muted text-foreground",
                                onClick: fetchAlerts,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 25
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                                lineNumber: 335,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                        lineNumber: 330,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                lineNumber: 326,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                data: threatEvents,
                columns: columns,
                totalItems: threatEvents.length,
                showFilters: true,
                showExport: true
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
                lineNumber: 343,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx",
        lineNumber: 174,
        columnNumber: 9
    }, this);
}
_s(ThreatsPage, "zahz31tIrg6i/u1DCEyPG9VJZeU=");
_c1 = ThreatsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "LevelBadge");
__turbopack_context__.k.register(_c1, "ThreatsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyscollectorPage",
    ()=>SyscollectorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
function formatBytes(bytes) {
    if (bytes == null || bytes === 0) return "0 B";
    const k = 1024;
    const sizes = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
const StatusBadge = ({ status })=>{
    const map = {
        running: "bg-success/20 text-success border-success/30",
        sleeping: "bg-info/20 text-info border-info/30",
        stopped: "bg-critical/20 text-critical border-critical/30",
        zombie: "bg-high/20 text-high border-high/30"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: map[status] || "bg-muted/20 text-muted-foreground border-muted/30",
        children: status || "—"
    }, void 0, false, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
        lineNumber: 128,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StatusBadge;
// Gauge ring component
function GaugeRing({ percent, label, sublabel, color }) {
    const clamp = Math.min(100, Math.max(0, percent));
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - clamp / 100 * circumference;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-28 w-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 100 100",
                        className: "h-full w-full -rotate-90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: radius,
                                fill: "none",
                                stroke: "hsl(0,0%,20%)",
                                strokeWidth: "8"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: radius,
                                fill: "none",
                                stroke: color,
                                strokeWidth: "8",
                                strokeLinecap: "round",
                                strokeDasharray: circumference,
                                strokeDashoffset: offset,
                                className: "transition-all duration-700"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-bold text-foreground",
                            children: [
                                clamp.toFixed(1),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: sublabel
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
        lineNumber: 142,
        columnNumber: 9
    }, this);
}
_c1 = GaugeRing;
function SyscollectorPage() {
    _s();
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAgent, setSelectedAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        total_agents: 0,
        agents_with_data: 0,
        total_processes: 0,
        total_open_ports: 0,
        total_packages: 0
    });
    const [snapshot, setSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [serverOnline, setServerOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch agents list + summary
    const fetchBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SyscollectorPage.useCallback[fetchBase]": async ()=>{
            try {
                const [agentsRes, summaryRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgents"])().catch({
                        "SyscollectorPage.useCallback[fetchBase]": ()=>null
                    }["SyscollectorPage.useCallback[fetchBase]"]),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSyscollectorSummary"])().catch({
                        "SyscollectorPage.useCallback[fetchBase]": ()=>null
                    }["SyscollectorPage.useCallback[fetchBase]"])
                ]);
                if (agentsRes && Array.isArray(agentsRes)) {
                    const mapped = agentsRes.map({
                        "SyscollectorPage.useCallback[fetchBase].mapped": (a)=>({
                                id: a.agent_id || a.id,
                                agent_id: a.agent_id || a.id,
                                name: a.name || a.hostname || a.agent_id,
                                status: a.status
                            })
                    }["SyscollectorPage.useCallback[fetchBase].mapped"]);
                    setAgents(mapped);
                    setServerOnline(true);
                    // Auto-select first agent if none selected
                    if (!selectedAgent && mapped.length > 0) {
                        setSelectedAgent(mapped[0].agent_id || "");
                    }
                }
                if (summaryRes) {
                    setSummary(summaryRes);
                    setServerOnline(true);
                }
            } catch  {
                setServerOnline(false);
            } finally{
                setLoading(false);
            }
        }
    }["SyscollectorPage.useCallback[fetchBase]"], [
        selectedAgent
    ]);
    // Fetch snapshot for selected agent
    const fetchSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SyscollectorPage.useCallback[fetchSnapshot]": async ()=>{
            if (!selectedAgent) return;
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSyscollectorData"])(selectedAgent);
                if (res && res.status !== "no_data") {
                    setSnapshot(res);
                } else {
                    setSnapshot(null);
                }
            } catch  {
                setSnapshot(null);
            }
        }
    }["SyscollectorPage.useCallback[fetchSnapshot]"], [
        selectedAgent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SyscollectorPage.useEffect": ()=>{
            fetchBase();
            const interval = setInterval(fetchBase, 30000);
            return ({
                "SyscollectorPage.useEffect": ()=>clearInterval(interval)
            })["SyscollectorPage.useEffect"];
        }
    }["SyscollectorPage.useEffect"], [
        fetchBase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SyscollectorPage.useEffect": ()=>{
            fetchSnapshot();
        }
    }["SyscollectorPage.useEffect"], [
        fetchSnapshot
    ]);
    const refreshAll = ()=>{
        fetchBase();
        fetchSnapshot();
    };
    // Derived data
    const hw = snapshot?.hardware || null;
    const os = snapshot?.os || null;
    const processes = snapshot?.processes || [];
    const ports = snapshot?.open_ports || [];
    const packages = snapshot?.packages || [];
    // Process status distribution for pie chart
    const statusCounts = {};
    processes.forEach((p)=>{
        const s = p.status || "unknown";
        statusCounts[s] = (statusCounts[s] || 0) + 1;
    });
    const statusPieData = Object.entries(statusCounts).map(([name, value])=>{
        const colorMap = {
            running: "hsl(145, 70%, 50%)",
            sleeping: "hsl(210, 70%, 55%)",
            stopped: "hsl(0, 70%, 55%)",
            zombie: "hsl(35, 90%, 55%)"
        };
        return {
            name,
            value,
            color: colorMap[name] || "hsl(0, 0%, 50%)"
        };
    });
    // Top 10 processes by memory
    const topProcs = [
        ...processes
    ].sort((a, b)=>(b.memory_percent || 0) - (a.memory_percent || 0)).slice(0, 10);
    const topProcsBarData = topProcs.map((p)=>({
            name: p.name.slice(0, 15),
            mem: p.memory_percent,
            cpu: p.cpu_percent
        }));
    // Table columns
    const processColumns = [
        {
            key: "pid",
            header: "PID",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm text-foreground",
                    children: item.pid
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 269,
                    columnNumber: 69
                }, this)
        },
        {
            key: "name",
            header: "Name",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-info",
                    children: item.name
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 270,
                    columnNumber: 71
                }, this)
        },
        {
            key: "username",
            header: "User",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-muted-foreground",
                    children: item.username || "—"
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 271,
                    columnNumber: 75
                }, this)
        },
        {
            key: "status",
            header: "Status",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                    status: item.status
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 272,
                    columnNumber: 75
                }, this)
        },
        {
            key: "cpu_percent",
            header: "CPU %",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm",
                    children: [
                        (item.cpu_percent || 0).toFixed(1),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 273,
                    columnNumber: 79
                }, this)
        },
        {
            key: "memory_percent",
            header: "Mem %",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm",
                    children: [
                        (item.memory_percent || 0).toFixed(1),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 274,
                    columnNumber: 82
                }, this)
        }
    ];
    const portColumns = [
        {
            key: "local_address",
            header: "Address",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm text-foreground",
                    children: item.local_address || "0.0.0.0"
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 278,
                    columnNumber: 80
                }, this)
        },
        {
            key: "local_port",
            header: "Port",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm font-semibold text-info",
                    children: item.local_port
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 279,
                    columnNumber: 74
                }, this)
        },
        {
            key: "pid",
            header: "PID",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm text-muted-foreground",
                    children: item.pid || "—"
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 280,
                    columnNumber: 66
                }, this)
        },
        {
            key: "status",
            header: "Status",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    className: "bg-success/20 text-success border-success/30",
                    children: item.status
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 281,
                    columnNumber: 72
                }, this)
        }
    ];
    const packageColumns = [
        {
            key: "name",
            header: "Package",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-foreground",
                    children: item.name
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 285,
                    columnNumber: 74
                }, this)
        },
        {
            key: "version",
            header: "Version",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-sm text-muted-foreground",
                    children: item.version || "—"
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 286,
                    columnNumber: 77
                }, this)
        },
        {
            key: "architecture",
            header: "Arch",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-muted-foreground",
                    children: item.architecture || "—"
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 287,
                    columnNumber: 79
                }, this)
        },
        {
            key: "source",
            header: "Source",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    className: "bg-info/20 text-info border-info/30",
                    children: item.source || "—"
                }, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                    lineNumber: 288,
                    columnNumber: 75
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            !loading && !serverOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-medium/30 bg-medium/10 px-4 py-2 text-sm text-medium",
                children: "⚠️ Server offline — no data available"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                lineNumber: 295,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-foreground",
                                children: "System Inventory"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 303,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedAgent,
                                onChange: (e)=>setSelectedAgent(e.target.value),
                                className: "rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-primary",
                                children: [
                                    agents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "No agents"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 49
                                    }, this),
                                    agents.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: a.agent_id,
                                            children: [
                                                a.name,
                                                " (",
                                                a.agent_id,
                                                ")"
                                            ]
                                        }, a.agent_id, true, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 304,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "gap-2 border-border bg-muted text-foreground",
                        onClick: refreshAll,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 318,
                                columnNumber: 21
                            }, this),
                            "Refresh"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 317,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, this),
            !loading && serverOnline && !snapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-info/30 bg-info/10 px-4 py-3 text-sm text-info",
                children: "ℹ️ No syscollector data for this agent yet. The agent sends inventory every ~5 minutes."
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                lineNumber: 325,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "overview",
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "border-border bg-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "overview",
                                children: "Overview"
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 332,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "processes",
                                children: [
                                    "Processes (",
                                    processes.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 333,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "network",
                                children: [
                                    "Network (",
                                    ports.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 334,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "packages",
                                children: [
                                    "Packages (",
                                    packages.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 335,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "overview",
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Agents Reporting",
                                        value: `${summary.agents_with_data} / ${summary.total_agents}`,
                                        subtitle: "With inventory data",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 35
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Total Processes",
                                        value: snapshot?.process_count ?? summary.total_processes,
                                        subtitle: selectedAgent ? "Selected agent" : "All agents",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 35
                                        }, void 0),
                                        variant: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Open Ports",
                                        value: ports.length || summary.total_open_ports,
                                        subtitle: "LISTEN connections",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 35
                                        }, void 0),
                                        variant: "high"
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Installed Packages",
                                        value: packages.length || summary.total_packages,
                                        subtitle: selectedAgent ? "Selected agent" : "All agents",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 35
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 341,
                                columnNumber: 21
                            }, this),
                            os && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-border bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "Operating System"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 375,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Platform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-foreground",
                                                                children: os.platform
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Release"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-foreground",
                                                                children: os.platform_release
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Architecture"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-foreground",
                                                                children: os.architecture
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Hostname"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-info",
                                                                children: os.hostname
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Python"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-foreground",
                                                                children: os.python_version
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Last Scan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-foreground",
                                                                children: snapshot?.agent_time_iso ? new Date(snapshot.agent_time_iso).toLocaleString("en-US", {
                                                                    month: "short",
                                                                    day: "numeric",
                                                                    hour: "2-digit",
                                                                    minute: "2-digit"
                                                                }) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 372,
                                columnNumber: 25
                            }, this),
                            hw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-border bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "Hardware Metrics"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-start justify-around gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GaugeRing, {
                                                        percent: hw.cpu?.percent || 0,
                                                        label: "CPU",
                                                        sublabel: `${hw.cpu?.count_physical || "?"} cores / ${hw.cpu?.count_logical || "?"} threads`,
                                                        color: "hsl(210, 70%, 55%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GaugeRing, {
                                                        percent: hw.memory?.percent || 0,
                                                        label: "RAM",
                                                        sublabel: `${formatBytes(hw.memory?.used_bytes)} / ${formatBytes(hw.memory?.total_bytes)}`,
                                                        color: "hsl(145, 70%, 50%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GaugeRing, {
                                                        percent: hw.disk?.percent || 0,
                                                        label: "Disk",
                                                        sublabel: `${formatBytes(hw.disk?.used_bytes)} / ${formatBytes(hw.disk?.total_bytes)}`,
                                                        color: "hsl(35, 90%, 55%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 417,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-6 lg:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-border bg-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Process Status Distribution"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 454,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-32 w-32",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                            data: statusPieData.filter((d)=>d.value > 0),
                                                                            cx: "50%",
                                                                            cy: "50%",
                                                                            innerRadius: 35,
                                                                            outerRadius: 55,
                                                                            paddingAngle: 2,
                                                                            dataKey: "value",
                                                                            children: statusPieData.filter((d)=>d.value > 0).map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                                    fill: entry.color
                                                                                }, `cell-${i}`, false, {
                                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                                    lineNumber: 471,
                                                                                    columnNumber: 57
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                            lineNumber: 464,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                        lineNumber: 463,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-lg font-bold text-foreground",
                                                                        children: processes.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                        lineNumber: 477,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2",
                                                            children: statusPieData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-3 w-3 rounded-full",
                                                                            style: {
                                                                                backgroundColor: item.color
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted-foreground capitalize",
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                            lineNumber: 484,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium text-foreground",
                                                                            children: [
                                                                                "(",
                                                                                item.value,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, item.name, true, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 45
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-border bg-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Top 10 Processes by Memory"
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-48",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: "100%",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                            data: topProcsBarData,
                                                            layout: "vertical",
                                                            margin: {
                                                                left: 60
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    type: "number",
                                                                    axisLine: false,
                                                                    tickLine: false,
                                                                    tick: {
                                                                        fill: "hsl(0,0%,50%)",
                                                                        fontSize: 11
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                    lineNumber: 504,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    type: "category",
                                                                    dataKey: "name",
                                                                    axisLine: false,
                                                                    tickLine: false,
                                                                    tick: {
                                                                        fill: "hsl(0,0%,50%)",
                                                                        fontSize: 11
                                                                    },
                                                                    width: 60
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    contentStyle: {
                                                                        backgroundColor: "hsl(0,0%,14%)",
                                                                        border: "1px solid hsl(0,0%,22%)",
                                                                        borderRadius: "8px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                    dataKey: "mem",
                                                                    name: "Mem %",
                                                                    fill: "hsl(145, 70%, 50%)",
                                                                    radius: [
                                                                        0,
                                                                        4,
                                                                        4,
                                                                        0
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 451,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 339,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "processes",
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: [
                                            "Running Processes (",
                                            processes.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "gap-2 border-border bg-muted text-foreground",
                                        onClick: refreshAll,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 533,
                                                columnNumber: 29
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 528,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                                data: processes,
                                columns: processColumns,
                                totalItems: processes.length,
                                showFilters: true,
                                showExport: true
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 537,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 527,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "network",
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: [
                                            "Open Ports (",
                                            ports.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "gap-2 border-border bg-muted text-foreground",
                                        onClick: refreshAll,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 29
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 548,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                                data: ports,
                                columns: portColumns,
                                totalItems: ports.length,
                                showFilters: true,
                                showExport: true
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 557,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 547,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "packages",
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: [
                                            "Installed Packages (",
                                            packages.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "gap-2 border-border bg-muted text-foreground",
                                        onClick: refreshAll,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                                lineNumber: 573,
                                                columnNumber: 29
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 568,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                                data: packages,
                                columns: packageColumns,
                                totalItems: packages.length,
                                showFilters: true,
                                showExport: true
                            }, void 0, false, {
                                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                                lineNumber: 577,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                        lineNumber: 567,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
                lineNumber: 330,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx",
        lineNumber: 292,
        columnNumber: 9
    }, this);
}
_s(SyscollectorPage, "ohfoWxltXme535eD3Vkg7fDmuvQ=");
_c2 = SyscollectorPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "GaugeRing");
__turbopack_context__.k.register(_c2, "SyscollectorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SecurityDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$login$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/login-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$overview$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/overview-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$endpoints$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/endpoints-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$fim$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/fim-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$vulnerabilities$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/vulnerabilities-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$threats$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/threats-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$syscollector$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/components/dashboard/pages/syscollector-page.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const pageConfig = {
    overview: {
        title: "Overview",
        breadcrumbs: [
            {
                label: "Home"
            },
            {
                label: "Overview"
            }
        ]
    },
    endpoints: {
        title: "Endpoints",
        breadcrumbs: [
            {
                label: "Home"
            },
            {
                label: "Endpoint Security"
            },
            {
                label: "Endpoints"
            }
        ]
    },
    fim: {
        title: "File Integrity Monitoring",
        breadcrumbs: [
            {
                label: "Home"
            },
            {
                label: "Endpoint Security"
            },
            {
                label: "File Integrity"
            }
        ]
    },
    vulnerabilities: {
        title: "Vulnerability Detection",
        breadcrumbs: [
            {
                label: "Home"
            },
            {
                label: "Threat Intelligence"
            },
            {
                label: "Vulnerabilities"
            }
        ]
    },
    threats: {
        title: "Threat Hunting",
        breadcrumbs: [
            {
                label: "Home"
            },
            {
                label: "Threat Intelligence"
            },
            {
                label: "Threat Hunting"
            }
        ]
    },
    syscollector: {
        title: "System Inventory",
        breadcrumbs: [
            {
                label: "Home"
            },
            {
                label: "Endpoint Security"
            },
            {
                label: "System Inventory"
            }
        ]
    }
};
function SecurityDashboard() {
    _s();
    const [authenticated, setAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkingAuth, setCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const config = pageConfig[currentPage] || pageConfig.overview;
    // Check for existing session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SecurityDashboard.useEffect": ()=>{
            const token = localStorage.getItem("horus_token");
            if (token) {
                // Verify the token is still valid
                fetch("http://172.21.89.249:5001/api/auth/verify", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }).then({
                    "SecurityDashboard.useEffect": (res)=>{
                        if (res.ok) {
                            setAuthenticated(true);
                        } else {
                            localStorage.removeItem("horus_token");
                            localStorage.removeItem("horus_user");
                        }
                    }
                }["SecurityDashboard.useEffect"]).catch({
                    "SecurityDashboard.useEffect": ()=>{
                        // Server unreachable — clear stale token
                        localStorage.removeItem("horus_token");
                        localStorage.removeItem("horus_user");
                    }
                }["SecurityDashboard.useEffect"]).finally({
                    "SecurityDashboard.useEffect": ()=>setCheckingAuth(false)
                }["SecurityDashboard.useEffect"]);
            } else {
                setCheckingAuth(false);
            }
        }
    }["SecurityDashboard.useEffect"], []);
    const handleLogin = (token)=>{
        setAuthenticated(true);
    };
    const handleLogout = ()=>{
        const token = localStorage.getItem("horus_token");
        if (token) {
            fetch("http://172.21.89.249:5001/api/auth/logout", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(()=>{});
        }
        localStorage.removeItem("horus_token");
        localStorage.removeItem("horus_user");
        setAuthenticated(false);
    };
    // Show nothing while checking auth
    if (checkingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-8 animate-spin rounded-full border-2 border-sidebar-primary border-t-transparent"
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                lineNumber: 99,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
            lineNumber: 98,
            columnNumber: 13
        }, this);
    }
    // Show login page if not authenticated
    if (!authenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$login$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginPage"], {
            onLogin: handleLogin
        }, void 0, false, {
            fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
            lineNumber: 106,
            columnNumber: 16
        }, this);
    }
    const renderPage = ()=>{
        switch(currentPage){
            case "endpoints":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$endpoints$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EndpointsPage"], {}, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                    lineNumber: 112,
                    columnNumber: 24
                }, this);
            case "fim":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$fim$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIMPage"], {}, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                    lineNumber: 114,
                    columnNumber: 24
                }, this);
            case "vulnerabilities":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$vulnerabilities$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VulnerabilitiesPage"], {}, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                    lineNumber: 116,
                    columnNumber: 24
                }, this);
            case "threats":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$threats$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreatsPage"], {}, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                    lineNumber: 118,
                    columnNumber: 24
                }, this);
            case "syscollector":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$syscollector$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyscollectorPage"], {}, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                    lineNumber: 120,
                    columnNumber: 24
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$pages$2f$overview$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverviewPage"], {}, void 0, false, {
                    fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                    lineNumber: 122,
                    columnNumber: 24
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                currentPage: currentPage,
                onNavigate: setCurrentPage,
                onLogout: handleLogout
            }, void 0, false, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        title: config.title,
                        breadcrumbs: config.breadcrumbs
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UT$2f$9no$2f$Desarrollo__Web__Integral$2f$Proyecto__SIEM$2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto",
                        children: renderPage()
                    }, void 0, false, {
                        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                        lineNumber: 131,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UT/9no/Desarrollo Web Integral/Proyecto SIEM/dashboard/app/page.tsx",
        lineNumber: 127,
        columnNumber: 9
    }, this);
}
_s(SecurityDashboard, "Dwbjkk8EZiWq3IlWIOPy4Hj27mU=");
_c = SecurityDashboard;
var _c;
__turbopack_context__.k.register(_c, "SecurityDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=UT_9no_Desarrollo%20Web%20Integral_Proyecto%20SIEM_dashboard_4906e6be._.js.map