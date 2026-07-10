import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";

import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/content";
import { extractToc } from "@/lib/toc";
import { formatDate, formatISODate } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

import { mdxComponents } from "@/components/article/mdx-components";
import { PublicationTypeBadge, PeerReviewBadge, DoiBadge } from "@/components/article/badges";
import { OrcidLink } from "@/components/article/orcid-link";
import { AbstractPanel } from "@/components/article/abstract-panel";
import { TableOfContents } from "@/components/article/table-of-contents";
import { ArticleActions } from "@/components/article/article-actions";
import { VersionHistory } from "@/components/article/version-history";
import { DisclosureBox } from "@/components/article/disclosure-box";
import { RelatedArticles } from "@/components/article/related-articles";
import { CitationBox } from "@/components/article/citation-box";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.abstract,
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.abstract,
      publishedTime: formatISODate(article.publishedDate),
      modifiedTime: article.revisedDate ? formatISODate(article.revisedDate) : undefined,
      authors: [article.author],
      url: `${siteConfig.url}/writing/${article.slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/writing/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const toc = extractToc(article.content);
  const related = getRelatedArticles(article);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    description: article.abstract,
    author: {
      "@type": "Person",
      name: article.author,
      ...(article.orcid ? { identifier: `https://orcid.org/${article.orcid}` } : {}),
    },
    datePublished: formatISODate(article.publishedDate),
    dateModified: formatISODate(article.revisedDate ?? article.publishedDate),
    keywords: article.keywords.join(", "),
    ...(article.doi ? { sameAs: `https://doi.org/${article.doi}` } : {}),
    isAccessibleForFree: true,
    url: `${siteConfig.url}/writing/${article.slug}`,
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr,220px]">
        <article className="min-w-0">
          <header className="border-b border-line pb-8">
            <PublicationTypeBadge type={article.publicationType} />
            <h1 className="mt-3 font-serif text-[34px] font-medium leading-[1.15] tracking-tight text-ink sm:text-[42px]">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="mt-3 font-serif text-xl italic text-ink-muted">{article.subtitle}</p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[13.5px] text-ink-muted">
              <span className="text-ink">{article.author}</span>
              {article.orcid && <OrcidLink orcid={article.orcid} />}
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedDate}>Published {formatDate(article.publishedDate)}</time>
              {article.revisedDate && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.revisedDate}>Revised {formatDate(article.revisedDate)}</time>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{article.readingTimeMinutes} min read</span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[13px] text-ink-muted">
              {article.doi && <DoiBadge doi={article.doi} />}
              {article.zenodoUrl && (
                <a href={article.zenodoUrl} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
                  Zenodo Record
                </a>
              )}
              <PeerReviewBadge status={article.peerReviewStatus} />
            </div>
          </header>

          <div className="mt-2">
            <ArticleActions pdfUrl={article.pdfUrl} />
          </div>

          <AbstractPanel article={article} />

          <div className="prose prose-neutral max-w-measure font-serif text-[18px] leading-[1.75] prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:font-serif prose-li:font-serif prose-a:font-sans">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: "append",
                        properties: { className: ["heading-anchor"], ariaLabel: "Link to this section" },
                        content: [{ type: "text", value: " #" }],
                      },
                    ],
                    rehypeKatex,
                  ],
                },
              }}
            />
          </div>

          <div className="mt-14 space-y-12 border-t border-line pt-10">
            <div>
              <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Suggested Citation</h2>
              <div className="mt-3">
                <CitationBox article={article} />
              </div>
            </div>

            <VersionHistory article={article} />
            <DisclosureBox article={article} />
            <RelatedArticles articles={related} />
          </div>
        </article>

        <div className="min-w-0">
          <TableOfContents entries={toc} />
        </div>
      </div>
    </div>
  );
}
