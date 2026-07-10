import type { Metadata } from "next";
import { getArticlesByType } from "@/lib/content";
import { ArchiveExplorer } from "@/components/writing/archive-explorer";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Literature Reviews",
  description: "Independent literature reviews synthesizing primary research on medical and scientific topics.",
};

export default function LiteratureReviewsPage() {
  const articles = getArticlesByType("literature-review");

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Publication Type"
        title="Literature Reviews"
        description="Structured syntheses of primary research literature, written to summarize the current state of evidence on a defined question."
      />
      <div className="mt-10">
        <ArchiveExplorer articles={articles} hideTypeFilter />
      </div>
    </div>
  );
}
