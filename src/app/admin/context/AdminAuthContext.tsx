"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getSession, login as authLogin, logout as authLogout, type AdminSession } from "@/lib/admin-auth";

interface AdminAuthContextValue {
  session: AdminSession | null;
  isLoading: boolean;
  login: (email: string, password: string) => { success: true } | { success: false; error: string };
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSession(getSession());
    setIsLoading(false);
  }, []);

  const login = useCallback((email: string, password: string) => {
    const result = authLogin(email, password);
    if (result.success) {
      setSession(result.session);
      return { success: true as const };
    }
    return { success: false as const, error: result.error };
  }, []);

  const logout = useCallback(() => {
    authLogout();
    setSession(null);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ session, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
