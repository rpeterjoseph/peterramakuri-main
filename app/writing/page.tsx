import type { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import { ArchiveExplorer } from "@/components/writing/archive-explorer";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Writing",
  description: "The complete archive of independent literature reviews, commentaries, essays, and case reports.",
};

export default async function WritingArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; topic?: string }>;
}) {
  const params = await searchParams;
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Archive"
        title="Writing"
        description="The complete, searchable archive of independent literature reviews, commentaries, essays, educational guides, and case reports."
      />
      <div className="mt-10">
        <ArchiveExplorer articles={articles} initialType={params.type} initialTopic={params.topic} />
      </div>
    </div>
  );
}
