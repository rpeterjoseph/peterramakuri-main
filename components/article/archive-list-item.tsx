import Link from "next/link";
import type { Article } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { PublicationTypeBadge, PeerReviewBadge, DoiBadge } from "./badges";

export function ArchiveListItem({ article }: { article: Article }) {
  return (
    <article className="border-b border-line py-8 first:pt-0 last:border-b-0">
      <div className="mb-2.5 flex flex-wrap items-center gap-3">
        <PublicationTypeBadge type={article.publicationType} />
        <PeerReviewBadge status={article.peerReviewStatus} />
      </div>

      <h3 className="font-serif text-[22px] leading-snug text-ink">
        <Link href={`/writing/${article.slug}`} className="link-underline">
          {article.title}
        </Link>
      </h3>

      <p className="mt-2.5 max-w-measure font-sans text-[15px] leading-relaxed text-ink-muted">
        {article.abstract}
      </p>

      {article.keywords.length > 0 && (
        <p className="mt-3 font-sans text-[12.5px] text-ink-faint">
          Keywords: {article.keywords.join(", ")}
        </p>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-sans text-[12.5px] text-ink-faint">
        <span>Published {formatDate(article.publishedDate)}</span>
        {article.revisedDate && (
          <>
            <span aria-hidden="true">·</span>
            <span>Revised {formatDate(article.revisedDate)}</span>
          </>
        )}
        <span aria-hidden="true">·</span>
        <span>{article.readingTimeMinutes} min read</span>
        {article.doi && (
          <>
            <span aria-hidden="true">·</span>
            <DoiBadge doi={article.doi} />
          </>
        )}
        {article.pdfUrl && (
          <>
            <span aria-hidden="true">·</span>
            <a href={article.pdfUrl} className="link-underline" target="_blank" rel="noreferrer">
              PDF
            </a>
          </>
        )}
      </div>
    </article>
  );
}
