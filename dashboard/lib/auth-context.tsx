"use client"

// Horus SIEM Dashboard - Auth Context
// Provides authentication state (user, role, token) to the entire app

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { API_BASE } from "@/lib/api"
import type { Role } from "@/lib/permissions"

interface AuthUser {
  username: string
  role: Role
}

interface AuthContextValue {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (token: string, username: string, role: Role) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const logout = useCallback(() => {
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("horus_token") : null
    if (storedToken) {
      fetch(`${API_BASE}/auth/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${storedToken}` },
      }).catch(() => {})
    }
    localStorage.removeItem("horus_token")
    localStorage.removeItem("horus_user")
    localStorage.removeItem("horus_role")
    setUser(null)
    setToken(null)
  }, [])

  const login = useCallback((tkn: string, username: string, role: Role) => {
    localStorage.setItem("horus_token", tkn)
    localStorage.setItem("horus_user", username)
    localStorage.setItem("horus_role", role)
    setToken(tkn)
    setUser({ username, role })
  }, [])

  // Restore session on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("horus_token")
    const storedUser = localStorage.getItem("horus_user")
    const storedRole = localStorage.getItem("horus_role") as Role | null

    if (storedToken && storedUser && storedRole) {
      fetch(`${API_BASE}/auth/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then((res) => {
          if (res.ok) return res.json()
          throw new Error("invalid")
        })
        .then((data) => {
          // Always trust what the server says the role is
          const role: Role = data.role ?? storedRole
          localStorage.setItem("horus_role", role)
          setToken(storedToken)
          setUser({ username: data.username ?? storedUser, role })
        })
        .catch(() => {
          localStorage.removeItem("horus_token")
          localStorage.removeItem("horus_user")
          localStorage.removeItem("horus_role")
        })
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
  return ctx
}
