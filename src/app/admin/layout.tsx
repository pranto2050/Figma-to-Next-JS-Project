"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { AdminAuthProvider, useAdminAuth } from "./context/AdminAuthContext";
import { AdminSidebar } from "./components/AdminSidebar";

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { session, isLoading } = useAdminAuth();
  const isLoginPage = pathname === "/admin/login";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    if (!isLoginPage && !session) {
      router.replace("/admin/login");
    }
  }, [isLoading, session, isLoginPage, router]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (isLoading && !isLoginPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000000]">
        <div className="w-8 h-8 border-2 border-[#FF8000] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Mobile / tablet header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center gap-3 border-b border-[#FFEAD8]/20 bg-[#000000] px-4 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#FFEAD8] hover:bg-[#FFEAD8]/10 transition"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <span className="font-semibold text-[#FFEAD8]">Admin Panel</span>
      </header>

      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="min-h-screen bg-[#FFEAD8] pt-14 pl-0 lg:pt-0 lg:pl-64">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AdminAuthProvider>
  );
}
