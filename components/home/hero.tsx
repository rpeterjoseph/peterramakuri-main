import Link from "next/link";
import type { Article } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { PublicationTypeBadge } from "@/components/article/badges";

export function Hero({ article }: { article: Article }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Featured</p>
        <div className="mt-4 max-w-3xl">
          <PublicationTypeBadge type={article.publicationType} />
          <h1 className="mt-3 font-serif text-[38px] font-medium leading-[1.1] tracking-tight text-ink sm:text-[52px]">
            <Link href={`/writing/${article.slug}`} className="link-underline">
              {article.title}
            </Link>
          </h1>
          {article.subtitle && (
            <p className="mt-4 font-serif text-xl italic text-ink-muted">{article.subtitle}</p>
          )}
          <p className="mt-5 max-w-measure font-sans text-[16px] leading-relaxed text-ink-muted">
            {article.abstract}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[13px] text-ink-faint">
            <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTimeMinutes} min read</span>
          </div>
          <Link
            href={`/writing/${article.slug}`}
            className="mt-8 inline-block border border-ink px-6 py-3 font-sans text-[13px] uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Read Article
          </Link>
        </div>
      </div>
    </section>
  );
}
