import Link from "next/link";
import type { Article } from "@/lib/content";
import { PUBLICATION_TYPE_LABEL } from "@/lib/taxonomy";
import { formatDate } from "@/lib/utils";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <div>
      <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Related Reading</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/writing/${article.slug}`} className="group block">
            <p className="font-sans text-[11.5px] uppercase tracking-wide text-accent">
              {PUBLICATION_TYPE_LABEL[article.publicationType]}
            </p>
            <h3 className="mt-1.5 font-serif text-[17px] leading-snug text-ink link-underline">
              {article.title}
            </h3>
            <p className="mt-1.5 font-sans text-[12.5px] text-ink-faint">{formatDate(article.publishedDate)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
