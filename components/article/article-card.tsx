import Link from "next/link";
import type { Article } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { PublicationTypeBadge, PeerReviewBadge } from "./badges";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group border-b border-line py-7 first:pt-0 last:border-b-0">
      <div className="mb-2.5 flex items-center gap-3">
        <PublicationTypeBadge type={article.publicationType} />
        <PeerReviewBadge status={article.peerReviewStatus} />
      </div>
      <h3 className="font-serif text-[22px] leading-snug text-ink sm:text-[24px]">
        <Link href={`/writing/${article.slug}`} className="link-underline">
          {article.title}
        </Link>
      </h3>
      {article.subtitle && (
        <p className="mt-1 font-serif text-[16px] italic text-ink-muted">{article.subtitle}</p>
      )}
      <p className="mt-2.5 max-w-measure font-sans text-[15px] leading-relaxed text-ink-muted">
        {article.abstract}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[12.5px] text-ink-faint">
        <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
        <span aria-hidden="true">·</span>
        <span>{article.readingTimeMinutes} min read</span>
      </div>
    </article>
  );
}
