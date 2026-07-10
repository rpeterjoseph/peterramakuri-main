import { SERIES } from "@/lib/series";
import { getArticlesBySeries } from "@/lib/content";
import { SeriesCard } from "./series-card";

export function FeaturedSeries() {
  const seriesWithArticles = SERIES.map((series) => ({
    series,
    articles: getArticlesBySeries(series.slug),
  })).filter((s) => s.articles.length > 0);

  if (seriesWithArticles.length === 0) return null;

  return (
    <section className="border-t border-line bg-paper-raised/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-serif text-2xl text-ink">Featured Series</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {seriesWithArticles.map(({ series, articles }) => (
            <SeriesCard key={series.slug} series={series} articles={articles} />
          ))}
        </div>
      </div>
    </section>
  );
}
