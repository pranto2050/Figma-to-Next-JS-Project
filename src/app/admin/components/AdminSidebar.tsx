"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  X,
} from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Content", href: "/admin/content", icon: FileText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({ isOpen = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { session, logout } = useAdminAuth();

  function handleLogout() {
    logout();
    router.replace("/admin/login");
  }

  return (
    <>
      {/* Overlay for mobile/tablet when drawer is open */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#000000]/60 backdrop-blur-sm transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose?.()}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 max-w-[85vw] border-r border-[#FFEAD8]/20 bg-[#000000] backdrop-blur flex flex-col transition-transform duration-200 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:max-w-none"
        )}
      >
      <div className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-[#FFEAD8]/20 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF8000] text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <span className="font-semibold text-[#FFEAD8] truncate">Admin Panel</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#FFEAD8]/80 hover:bg-[#FFEAD8]/10 lg:hidden"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-0.5 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                isActive
                  ? "bg-[#FF8000]/20 text-[#FF8000]"
                  : "text-[#FFEAD8]/80 hover:bg-[#FFEAD8]/10 hover:text-[#FFEAD8]"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {item.label}
              {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#FFEAD8]/20 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF8000]/30 text-[#FFEAD8] text-sm font-medium">
            {session?.user.name?.charAt(0) ?? "?"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-[#FFEAD8]">{session?.user.name}</p>
            <p className="truncate text-xs text-[#FFEAD8]/60">{session?.user.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#FFEAD8]/80 hover:bg-[#FFEAD8]/10 hover:text-red-400 transition"
        >
          <LogOut className="h-5 w-5" />
          Sign out
        </button>
      </div>
    </aside>
    </>
  );
}
