import Link from "next/link";
import { author } from "@/content/data/author";
import { siteConfig } from "@/lib/site-config";
import { OrcidMark } from "@/components/ui/orcid-mark";

export function AboutAuthorSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[auto,1fr] md:gap-12">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-line bg-paper-raised font-serif text-2xl text-ink">
          PR
        </div>
        <div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            About the Author
          </p>
          <h2 className="mt-2 font-serif text-2xl text-ink">{author.name}</h2>
          <p className="mt-1 font-sans text-[13.5px] text-ink-muted">{author.role}</p>
          <p className="mt-4 max-w-measure font-sans text-[15px] leading-relaxed text-ink-muted">
            {author.shortBio}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[13.5px]">
            <Link href="/about" className="link-underline text-ink">
              Full biography
            </Link>
            <Link href="/cv" className="link-underline text-ink">
              CV
            </Link>
            <a href={siteConfig.orcidUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-ink">
              <OrcidMark className="h-3.5 w-3.5 text-accent" /> ORCID
            </a>
            <a href={siteConfig.zenodoUrl} target="_blank" rel="noreferrer" className="link-underline text-ink">
              Zenodo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
