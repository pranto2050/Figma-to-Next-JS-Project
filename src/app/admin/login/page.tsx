"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, LogIn, AlertCircle } from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { cn } from "@/lib/utils";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, session, isLoading } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000000]">
        <div className="w-8 h-8 border-2 border-[#FF8000] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (session) {
    router.replace("/admin");
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    const result = login(email.trim(), password);
    setIsSubmitting(false);
    if (result.success) {
      router.replace("/admin");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000] px-3 py-6 sm:px-4 sm:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,128,0,0.2),transparent)]" />
      <div className="relative w-full max-w-md">
        <div className="rounded-2xl border border-[#FF8000]/30 bg-[#FFEAD8] shadow-2xl shadow-black/30 backdrop-blur-sm p-5 sm:p-6 md:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FF8000] text-white mb-3 sm:mb-4">
              <LogIn className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold text-[#000000]">Admin Panel</h1>
            <p className="text-[#000000]/70 mt-1 text-sm">Sign in to access the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div
                className={cn(
                  "flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-600"
                )}
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#000000] mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#000000]/50" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 border border-[#FF8000]/40 text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000] transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#000000] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#000000]/50" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 border border-[#FF8000]/40 text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000] transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-[#FF8000] text-white font-medium hover:bg-[#FF8000]/90 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:ring-offset-2 focus:ring-offset-[#FFEAD8] disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[#000000]/60">
            Demo: admin@gmail.com / admin
          </p>
        </div>
      </div>
    </div>
  );
}
