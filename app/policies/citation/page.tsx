import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Citation Policy" };

export default function CitationPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Policy" title="Citation Policy" />
      <div className="prose prose-neutral mt-8 max-w-measure font-sans text-[15px] leading-relaxed text-ink-muted">
        <p>
          Articles on this site may be cited using the suggested citation provided at the top and
          bottom of each article page. Each citation includes the author, publication year, title,
          and — where available — a DOI or permanent Zenodo record.
        </p>
        <p>
          Independent articles that are not peer-reviewed should be cited and described as such.
          Please do not represent unreviewed, independent work as peer-reviewed research in
          downstream citations.
        </p>
        <p>
          If an article is later revised, the version number and revision date shown on the article
          page indicate which version was cited. Earlier versions remain noted in the version
          history at the end of each article.
        </p>
        <p>
          For questions about citing a specific piece, or to request a citation in a particular
          format, please use the contact page.
        </p>
      </div>
    </div>
  );
}
