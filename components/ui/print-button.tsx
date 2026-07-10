"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label = "Print / Save as PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 border border-ink px-5 py-2.5 font-sans text-[13px] uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
    >
      <Printer className="h-[15px] w-[15px]" />
      {label}
    </button>
  );
}
