"use client";

import {
  LayoutDashboard,
  Users,
  Package,
  FileText,
  TrendingUp,
  Activity,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import { useAdminAuth } from "./context/AdminAuthContext";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Users", value: "2,847", change: "+12%", icon: Users, color: "primary" },
  { label: "Products", value: "156", change: "+8%", icon: Package, color: "primary" },
  { label: "Content Items", value: "1,024", change: "+24%", icon: FileText, color: "primary" },
  { label: "Revenue", value: "$42.5k", change: "+18%", icon: TrendingUp, color: "primary" },
];

const recentActivity = [
  { id: 1, action: "New user registered", target: "john@example.com", time: "2 min ago" },
  { id: 2, action: "Product updated", target: "Product #124", time: "15 min ago" },
  { id: 3, action: "Content published", target: "Blog: Getting Started", time: "1 hour ago" },
  { id: 4, action: "Settings changed", target: "Notification preferences", time: "2 hours ago" },
];

const colorClasses: Record<string, string> = {
  primary: "bg-[#FF8000]/20 text-[#FF8000]",
};

export default function AdminDashboardPage() {
  const { session } = useAdminAuth();

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-[#000000] truncate">Dashboard</h1>
          <p className="mt-1 text-sm sm:text-base text-[#000000]/70 truncate">
            Welcome back, {session?.user.name ?? "Admin"}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="relative w-full sm:w-auto sm:min-w-[12rem] flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000000]/50 shrink-0" />
            <input
              type="search"
              placeholder="Search..."
              className="h-10 w-full sm:w-64 rounded-lg border border-[#FF8000]/40 bg-white/80 pl-9 pr-4 text-sm text-[#000000] placeholder-[#000000]/50 focus:border-[#FF8000] focus:outline-none focus:ring-1 focus:ring-[#FF8000]"
            />
          </div>
          <button className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#FF8000]/40 bg-white/80 text-[#000000]/70 hover:bg-[#FF8000]/10 hover:text-[#FF8000] transition" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#FF8000]" />
          </button>
          <button className="flex h-10 items-center gap-2 rounded-lg border border-[#FF8000]/40 bg-white/80 px-3 text-sm text-[#000000]/80 hover:bg-[#FF8000]/10 transition shrink-0">
            Filters
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-[#FF8000]/30 bg-white/80 p-4 sm:p-6 shadow-lg shadow-black/5 transition hover:border-[#FF8000]/50"
            >
              <div className="flex items-start justify-between">
                <div className={cn("rounded-lg p-2 sm:p-2.5", colorClasses[stat.color])}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="rounded-full bg-[#FF8000]/20 px-2 py-0.5 text-xs font-medium text-[#FF8000]">
                  {stat.change}
                </span>
              </div>
              <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-[#000000]">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-[#000000]/70">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-[#FF8000]/30 bg-white/80 p-4 sm:p-6 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#000000]">Recent Activity</h2>
            <button className="text-sm font-medium text-[#FF8000] hover:text-[#FF8000]/80 transition">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 sm:gap-4 rounded-lg border border-[#FF8000]/20 bg-[#FFEAD8]/50 p-3 sm:p-4 transition hover:border-[#FF8000]/40"
              >
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#FF8000]/20">
                  <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-[#FF8000]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-[#000000] truncate">{item.action}</p>
                  <p className="text-xs text-[#000000]/60 truncate">{item.target}</p>
                </div>
                <span className="text-xs text-[#000000]/60 shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#FF8000]/30 bg-white/80 p-4 sm:p-6 shadow-lg shadow-black/5">
          <h2 className="text-base sm:text-lg font-semibold text-[#000000] mb-4 sm:mb-6">Quick Actions</h2>
          <div className="space-y-2 sm:space-y-3">
            <button className="flex w-full items-center gap-3 rounded-lg border border-[#FF8000]/40 bg-[#FFEAD8]/50 px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm font-medium text-[#000000]/80 transition hover:border-[#FF8000] hover:bg-[#FF8000]/10">
              <Users className="h-5 w-5 shrink-0 text-[#FF8000]" />
              Add new user
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg border border-[#FF8000]/40 bg-[#FFEAD8]/50 px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm font-medium text-[#000000]/80 transition hover:border-[#FF8000] hover:bg-[#FF8000]/10">
              <Package className="h-5 w-5 shrink-0 text-[#FF8000]" />
              Create product
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg border border-[#FF8000]/40 bg-[#FFEAD8]/50 px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm font-medium text-[#000000]/80 transition hover:border-[#FF8000] hover:bg-[#FF8000]/10">
              <FileText className="h-5 w-5 shrink-0 text-[#FF8000]" />
              Publish content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
