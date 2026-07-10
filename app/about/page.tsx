import type { Metadata } from "next";
import Link from "next/link";
import { author } from "@/content/data/author";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/ui/page-header";
import { OrcidMark } from "@/components/ui/orcid-mark";

export const metadata: Metadata = {
  title: "About",
  description: author.shortBio,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="About" title={author.name} description={author.role} />

      <div className="mt-10 flex items-center gap-6 border-b border-line pb-10">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center border border-line bg-paper-raised font-serif text-3xl text-ink">
          PR
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-[13.5px]">
          <a href={siteConfig.orcidUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-ink">
            <OrcidMark className="h-3.5 w-3.5 text-accent" /> ORCID
          </a>
          <a href={siteConfig.zenodoUrl} target="_blank" rel="noreferrer" className="link-underline text-ink">
            Zenodo
          </a>
          <Link href="/cv" className="link-underline text-ink">
            Download CV
          </Link>
          <Link href="/contact" className="link-underline text-ink">
            Contact
          </Link>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">Biography</h2>
        <div className="mt-4 max-w-measure space-y-4 font-sans text-[16px] leading-relaxed text-ink-muted">
          {author.longBio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-10">
        <h2 className="font-serif text-2xl text-ink">Educational Background</h2>
        <ul className="mt-4 space-y-3">
          {author.education.map((e, i) => (
            <li key={i} className="font-sans text-[15px] text-ink-muted">
              <span className="text-ink">{e.credential}</span> — {e.institution} · {e.period}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-line pt-10">
        <h2 className="font-serif text-2xl text-ink">Research and Medical Interests</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {author.interests.map((interest) => (
            <li key={interest} className="border border-line px-3 py-1.5 font-sans text-[13.5px] text-ink-muted">
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-line pt-10">
        <h2 className="font-serif text-2xl text-ink">Writing Philosophy</h2>
        <p className="mt-4 max-w-measure font-sans text-[16px] leading-relaxed text-ink-muted">
          {author.writingPhilosophy}
        </p>
      </section>

      <section className="mt-12 border-t border-line pt-10">
        <h2 className="font-serif text-2xl text-ink">Current Areas of Study</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 font-sans text-[15px] text-ink-muted">
          {author.currentStudy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-line pt-10">
        <h2 className="font-serif text-2xl text-ink">Contact</h2>
        <p className="mt-4 font-sans text-[15px] text-ink-muted">
          <a href={`mailto:${siteConfig.email}`} className="link-underline text-ink">
            {siteConfig.email}
          </a>
        </p>
      </section>
    </div>
  );
}
