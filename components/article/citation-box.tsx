"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { Article } from "@/lib/content";
import { buildCitation, buildBibtex } from "@/lib/citation";

export function CitationBox({ article }: { article: Article }) {
  const [copied, setCopied] = useState<"apa" | "bibtex" | null>(null);
  const citation = buildCitation(article);
  const bibtex = buildBibtex(article);

  async function copy(text: string, which: "apa" | "bibtex") {
    await navigator.clipboard.writeText(text);
    setCopied(which);
    setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Suggested Citation</p>
          <button
            type="button"
            onClick={() => copy(citation, "apa")}
            className="inline-flex items-center gap-1 font-sans text-[12px] text-ink-muted hover:text-ink"
          >
            {copied === "apa" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied === "apa" ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-1.5 font-mono text-[13px] leading-relaxed text-ink">{citation}</p>
      </div>
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">BibTeX</p>
          <button
            type="button"
            onClick={() => copy(bibtex, "bibtex")}
            className="inline-flex items-center gap-1 font-sans text-[12px] text-ink-muted hover:text-ink"
          >
            {copied === "bibtex" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied === "bibtex" ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="mt-1.5 overflow-x-auto whitespace-pre-wrap break-words font-mono text-[12.5px] leading-relaxed text-ink-muted">
{bibtex}
        </pre>
      </div>
    </div>
  );
}
