import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/contact-form";
import { OrcidMark } from "@/components/ui/orcid-mark";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch regarding published writing, corrections, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="For corrections, questions about published writing, or collaboration inquiries."
      />

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Direct</h2>
          <ul className="mt-3 space-y-2.5 font-sans text-[15px] text-ink-muted">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="link-underline text-ink">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.orcidUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-ink">
                <OrcidMark className="h-3.5 w-3.5 text-accent" /> ORCID Profile
              </a>
            </li>
            <li>
              <a href={siteConfig.zenodoUrl} target="_blank" rel="noreferrer" className="link-underline text-ink">
                Zenodo Profile
              </a>
            </li>
            <li>
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="link-underline text-ink">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Send a Message</h2>
          <div className="mt-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
