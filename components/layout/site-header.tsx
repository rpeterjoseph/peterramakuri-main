import Link from "next/link";
import { Search } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { OrcidMark } from "@/components/ui/orcid-mark";

export function SiteHeader() {
  return (
    <header className="relative border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight text-ink">
          Peter Ramakuri
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-[13.5px] uppercase tracking-wide text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/search" aria-label="Search" className="text-ink-muted transition-colors hover:text-ink">
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <a
            href={siteConfig.orcidUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="ORCID profile"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <OrcidMark className="h-[18px] w-[18px]" />
          </a>
          <a
            href={siteConfig.zenodoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[13px] text-ink-muted transition-colors hover:text-ink"
          >
            Zenodo
          </a>
          <Link href="/contact" className="font-sans text-[13px] text-ink-muted transition-colors hover:text-ink">
            Contact
          </Link>
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
