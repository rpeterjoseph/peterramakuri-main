import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERIES, getSeriesMeta } from "@/lib/series";
import { getArticlesBySeries } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { formatDate } from "@/lib/utils";
import { PublicationTypeBadge } from "@/components/article/badges";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return SERIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeriesMeta(slug);
  return { title: series?.title ?? "Series", description: series?.description };
}

export default async function SeriesPage({ params }: { params: Params }) {
  const { slug } = await params;
  const series = getSeriesMeta(slug);
  if (!series) notFound();

  const articles = getArticlesBySeries(slug);

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Series" title={series.title} description={series.description} />
      <ol className="mt-10 space-y-8">
        {articles.map((article, i) => (
          <li key={article.slug} className="flex gap-5 border-b border-line pb-8 last:border-b-0">
            <span className="font-serif text-2xl text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <PublicationTypeBadge type={article.publicationType} />
              <h2 className="mt-1.5 font-serif text-xl text-ink">
                <Link href={`/writing/${article.slug}`} className="link-underline">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-measure font-sans text-[14px] leading-relaxed text-ink-muted">
                {article.abstract}
              </p>
              <p className="mt-2 font-sans text-[12.5px] text-ink-faint">{formatDate(article.publishedDate)}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
