import Link from "next/link";
import type { Article } from "@/lib/content";
import { ArticleCard } from "@/components/article/article-card";

export function LatestWriting({ articles }: { articles: Article[] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="font-serif text-2xl text-ink">Latest Writing</h2>
        <Link href="/writing" className="link-underline font-sans text-[13px] text-ink-muted">
          View all
        </Link>
      </div>
      <div>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
