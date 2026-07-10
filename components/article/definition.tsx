import type { ReactNode } from "react";

export function Definition({ term, children }: { term: string; children: ReactNode }) {
  return (
    <span className="not-prose group relative inline">
      <span className="cursor-help border-b border-dotted border-accent font-medium text-ink">
        {term}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-sm border border-line bg-paper-raised p-3 font-sans text-[13px] leading-snug text-ink-muted opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus:opacity-100">
        {children}
      </span>
    </span>
  );
}
