"use client";

import { useState } from "react";
import { Link2, Printer, Check, Download } from "lucide-react";

export function ArticleActions({ pdfUrl }: { pdfUrl?: string }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="no-print flex flex-wrap items-center gap-5 border-y border-line py-3 font-sans text-[13px] text-ink-muted">
      <button type="button" onClick={copyLink} className="inline-flex items-center gap-1.5 hover:text-ink">
        {copied ? <Check className="h-[15px] w-[15px]" /> : <Link2 className="h-[15px] w-[15px]" />}
        {copied ? "Link copied" : "Copy link"}
      </button>
      <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-1.5 hover:text-ink">
        <Printer className="h-[15px] w-[15px]" />
        Print
      </button>
      {pdfUrl ? (
        <a href={pdfUrl} className="inline-flex items-center gap-1.5 hover:text-ink" target="_blank" rel="noreferrer">
          <Download className="h-[15px] w-[15px]" />
          Download PDF
        </a>
      ) : (
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 hover:text-ink"
        >
          <Download className="h-[15px] w-[15px]" />
          Save as PDF
        </button>
      )}
    </div>
  );
}
