import Link from "next/link";
import { Search } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { OrcidMark } from "@/components/ui/orcid-mark";

export function SiteHeader() {
  return (
    <header className="relative bg-paper">
      {/* Utility bar */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 sm:px-8">
          <p className="hidden font-sans text-[11px] uppercase tracking-[0.14em] text-ink-faint sm:block">
            Independent Scholarly Publication
          </p>

          <div className="hidden items-center gap-5 md:flex">
            <Link href="/search" aria-label="Search" className="text-ink-muted transition-colors hover:text-ink">
              <Search className="h-[15px] w-[15px]" />
            </Link>
            <a
              href={siteConfig.orcidUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID profile"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <OrcidMark className="h-[15px] w-[15px]" />
            </a>
            <a
              href={siteConfig.zenodoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-wide text-ink-muted transition-colors hover:text-ink"
            >
              Zenodo
            </a>
            <Link
              href="/contact"
              className="font-sans text-[12px] uppercase tracking-wide text-ink-muted transition-colors hover:text-ink"
            >
              Contact
            </Link>
            <span className="h-3.5 w-px bg-line" aria-hidden="true" />
            <ThemeToggle />
          </div>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-7 text-center sm:px-8 sm:py-9">
          <Link
            href="/"
            className="font-serif text-[34px] font-medium leading-none tracking-tight text-ink sm:text-[46px]"
          >
            Peter Ramakuri
          </Link>
          <p className="mt-2.5 font-sans text-[11px] uppercase tracking-[0.16em] text-ink-faint sm:text-[12px]">
            {siteConfig.descriptor}
          </p>
        </div>
      </div>

      {/* Section navigation */}
      <div className="hidden border-b-2 border-ink md:block">
        <nav aria-label="Primary" className="mx-auto max-w-6xl px-5 sm:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1 py-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-[12.5px] font-medium uppercase tracking-wide text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
