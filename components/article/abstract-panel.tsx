import type { Article } from "@/lib/content";
import { PEER_REVIEW_STATUS_LABEL } from "@/lib/taxonomy";
import { CitationBox } from "./citation-box";

export function AbstractPanel({ article }: { article: Article }) {
  return (
    <section
      aria-labelledby="abstract-heading"
      className="my-10 border border-line bg-paper-raised/50 p-6 sm:p-8"
    >
      <h2 id="abstract-heading" className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">
        Abstract
      </h2>
      <p className="mt-2.5 max-w-measure font-serif text-[17px] leading-relaxed text-ink">
        {article.abstract}
      </p>

      {article.keywords.length > 0 && (
        <div className="mt-5">
          <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Keywords</p>
          <p className="mt-1.5 font-sans text-[14px] text-ink-muted">{article.keywords.join(" · ")}</p>
        </div>
      )}

      <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-line pt-5 font-sans text-[13.5px] sm:grid-cols-2">
        <div>
          <dt className="text-ink-faint">Publication Status</dt>
          <dd className="mt-0.5 capitalize text-ink">{article.publicationStatus}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Peer-Review Status</dt>
          <dd className="mt-0.5 text-ink">{PEER_REVIEW_STATUS_LABEL[article.peerReviewStatus]}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Version</dt>
          <dd className="mt-0.5 text-ink">v{article.version}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Conflicts of Interest</dt>
          <dd className="mt-0.5 text-ink">{article.disclosureStatement}</dd>
        </div>
      </dl>

      <div className="mt-6 border-t border-line pt-5">
        <CitationBox article={article} />
      </div>
    </section>
  );
}
