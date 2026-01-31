"use client";

import { FileText } from "lucide-react";

export default function AdminContentPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-xl sm:text-2xl font-bold text-[#000000]">Content</h1>
      <p className="mt-1 sm:mt-2 text-sm sm:text-base text-[#000000]/70">Manage content. Connect to backend later.</p>
      <div className="mt-6 sm:mt-8 rounded-xl border border-[#FF8000]/30 bg-white/80 p-8 sm:p-12 text-center">
        <FileText className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-[#FF8000]" />
        <p className="mt-4 text-sm sm:text-base text-[#000000]/60">Content list will appear here.</p>
      </div>
    </div>
  );
}
