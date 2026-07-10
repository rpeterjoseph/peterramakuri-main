import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site-config";
import { OrcidMark } from "@/components/ui/orcid-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-ink">Peter Ramakuri</p>
            <p className="mt-2 max-w-xs font-sans text-[13.5px] leading-relaxed text-ink-muted">
              {siteConfig.descriptor}
            </p>
          </div>

          <div>
            <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Elsewhere</p>
            <ul className="mt-3 space-y-2 font-sans text-[13.5px] text-ink-muted">
              <li>
                <a href={siteConfig.orcidUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 hover:text-ink">
                  <OrcidMark className="h-3.5 w-3.5" /> ORCID
                </a>
              </li>
              <li>
                <a href={siteConfig.zenodoUrl} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
                  Zenodo
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="link-underline hover:text-ink">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Policies</p>
            <ul className="mt-3 space-y-2 font-sans text-[13.5px] text-ink-muted">
              {footerNav.policies.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-sans text-[12.5px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Peter Ramakuri. All rights reserved.</p>
          <p>Independent scholarly writing — not affiliated with any institution unless stated.</p>
        </div>
      </div>
    </footer>
  );
}
