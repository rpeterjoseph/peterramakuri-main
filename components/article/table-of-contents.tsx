"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { TocEntry } from "@/lib/toc";

function TocLinks({ entries, activeId, onNavigate }: { entries: TocEntry[]; activeId: string | null; onNavigate?: () => void }) {
  return (
    <ul className="space-y-2.5">
      {entries.map((entry) => (
        <li key={entry.id} className={cn(entry.depth === 3 && "pl-4")}>
          <a
            href={`#${entry.id}`}
            onClick={onNavigate}
            className={cn(
              "block font-sans text-[13px] leading-snug transition-colors",
              activeId === entry.id ? "text-accent" : "text-ink-muted hover:text-ink"
            )}
          >
            {entry.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (entries.length === 0) return;
    const headingEls = entries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (obs) => {
        const visible = obs.filter((o) => o.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px" }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <>
      <details className="no-print mb-8 border border-line lg:hidden">
        <summary className="cursor-pointer px-4 py-3 font-sans text-[13px] uppercase tracking-wide text-ink-muted">
          Table of Contents
        </summary>
        <div className="border-t border-line px-4 py-4">
          <TocLinks entries={entries} activeId={activeId} />
        </div>
      </details>

      <nav
        aria-label="Table of contents"
        className="no-print sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block"
      >
        <p className="mb-3 font-sans text-[12px] uppercase tracking-wide text-ink-faint">Contents</p>
        <TocLinks entries={entries} activeId={activeId} />
      </nav>
    </>
  );
}
