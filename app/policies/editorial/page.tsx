import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Editorial Policy" };

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Policy" title="Editorial Policy" />
      <div className="prose prose-neutral mt-8 max-w-measure font-sans text-[15px] leading-relaxed text-ink-muted">
        <p>
          This site publishes independent literature reviews, commentaries, educational articles,
          essays, and case reports written by Peter Ramakuri. All work is self-authored and
          self-edited unless otherwise noted.
        </p>
        <p>
          Nothing published here has undergone formal peer review unless an article is explicitly
          labeled &ldquo;Peer-Reviewed.&rdquo; Most work is labeled &ldquo;Independent — Not
          Peer-Reviewed&rdquo; or, where appropriate, &ldquo;Preprint,&rdquo; and should be read
          accordingly.
        </p>
        <p>
          Every article states its publication and revision dates, a version number, and any
          conflicts of interest. Substantive corrections are recorded in the version history at the
          end of the article rather than made silently.
        </p>
        <p>
          This site does not claim institutional affiliation, employment, or endorsement by any
          university, hospital, or journal unless explicitly stated in an article or on the About
          page.
        </p>
      </div>
    </div>
  );
}
