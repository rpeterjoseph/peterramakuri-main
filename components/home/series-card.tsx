import Link from "next/link";
import type { SeriesMeta } from "@/lib/series";
import type { Article } from "@/lib/content";

export function SeriesCard({ series, articles }: { series: SeriesMeta; articles: Article[] }) {
  return (
    <div className="border border-line p-6">
      <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">
        Series · {articles.length} {articles.length === 1 ? "Part" : "Parts"}
      </p>
      <h3 className="mt-1.5 font-serif text-xl text-ink">
        <Link href={`/series/${series.slug}`} className="link-underline">
          {series.title}
        </Link>
      </h3>
      <p className="mt-2 font-sans text-[14px] leading-relaxed text-ink-muted">{series.description}</p>
      <ul className="mt-4 space-y-1.5">
        {articles.slice(0, 3).map((article, i) => (
          <li key={article.slug} className="font-sans text-[13.5px] text-ink-muted">
            <Link href={`/writing/${article.slug}`} className="link-underline">
              {i + 1}. {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
