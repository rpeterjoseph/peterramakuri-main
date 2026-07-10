import type { Metadata } from "next";
import { author } from "@/content/data/author";
import { cv } from "@/content/data/cv";
import { siteConfig } from "@/lib/site-config";
import { getAllArticles } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { PrintButton } from "@/components/ui/print-button";
import { OrcidMark } from "@/components/ui/orcid-mark";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae for Peter Ramakuri.",
};

export default function CvPage() {
  const publications = getAllArticles().slice(0, 12);

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Curriculum Vitae" title={author.name} description={author.role} />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-[13.5px] text-ink-muted">
          <a href={`mailto:${siteConfig.email}`} className="link-underline hover:text-ink">
            {siteConfig.email}
          </a>
          <a href={siteConfig.orcidUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 hover:text-ink">
            <OrcidMark className="h-3.5 w-3.5 text-accent" /> {siteConfig.orcid}
          </a>
          <a href={siteConfig.zenodoUrl} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
            Zenodo
          </a>
        </div>
        <PrintButton />
      </div>

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-sans text-[13px] uppercase tracking-wide text-ink-faint">Education</h2>
        <ul className="mt-3 space-y-2">
          {cv.education.map((e, i) => (
            <li key={i} className="font-sans text-[15px] text-ink-muted">
              <span className="font-medium text-ink">{e.credential}</span> — {e.institution} · {e.period}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-sans text-[13px] uppercase tracking-wide text-ink-faint">Research and Writing Interests</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {cv.interests.map((interest) => (
            <li key={interest} className="border border-line px-3 py-1.5 font-sans text-[13.5px] text-ink-muted">
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-sans text-[13px] uppercase tracking-wide text-ink-faint">Selected Independent Writing</h2>
        <ul className="mt-3 space-y-2.5">
          {publications.map((p) => (
            <li key={p.slug} className="font-sans text-[14.5px] leading-relaxed text-ink-muted">
              {p.author} ({new Date(p.publishedDate).getFullYear()}). <span className="text-ink">{p.title}</span>.{" "}
              {siteConfig.name}. {formatDate(p.publishedDate)}.
              {p.doi && <> DOI: {p.doi}.</>}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 border-t border-line pt-6 font-sans text-[13px] text-ink-faint">
        A complete curriculum vitae is available on request via email.
      </p>
    </div>
  );
}
