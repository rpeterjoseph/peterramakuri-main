"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Mail } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { OrcidMark } from "@/components/ui/orcid-mark";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center text-ink"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-b border-line bg-paper px-5 pb-6 pt-2 animate-fade">
          <nav aria-label="Primary">
            <ul className="flex flex-col divide-y divide-line">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-sans text-[15px] text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex items-center gap-5 pt-2 text-ink-muted">
            <Link href="/search" onClick={() => setOpen(false)} aria-label="Search" className="hover:text-ink">
              <Search className="h-[18px] w-[18px]" />
            </Link>
            <a href={siteConfig.orcidUrl} target="_blank" rel="noreferrer" aria-label="ORCID profile" className="hover:text-ink">
              <OrcidMark className="h-[18px] w-[18px]" />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Contact via email" className="hover:text-ink">
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
