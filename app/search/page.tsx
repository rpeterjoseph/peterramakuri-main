import type { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { SearchClient, type SearchDoc } from "@/components/search/search-client";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the archive of independent writing.",
};

export default function SearchPage() {
  const docs: SearchDoc[] = getAllArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    subtitle: a.subtitle,
    abstract: a.abstract,
    keywords: a.keywords,
    publicationType: a.publicationType,
    publishedDate: a.publishedDate,
  }));

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Search" title="Search the Archive" />
      <div className="mt-10">
        <SearchClient docs={docs} />
      </div>
    </div>
  );
}
