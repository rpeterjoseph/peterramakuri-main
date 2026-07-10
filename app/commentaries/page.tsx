import type { Metadata } from "next";
import { getArticlesByType } from "@/lib/content";
import { ArchiveExplorer } from "@/components/writing/archive-explorer";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Commentaries",
  description: "Commentary and opinion writing on medicine, biology, science, and society.",
};

export default function CommentariesPage() {
  const articles = getArticlesByType("commentary");

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Publication Type"
        title="Commentaries"
        description="Argument-driven writing on current questions in medicine, biology, health policy, and the public understanding of science."
      />
      <div className="mt-10">
        <ArchiveExplorer articles={articles} hideTypeFilter />
      </div>
    </div>
  );
}
