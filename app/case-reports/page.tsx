import type { Metadata } from "next";
import { getArticlesByType } from "@/lib/content";
import { ArchiveExplorer } from "@/components/writing/archive-explorer";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Case Reports",
  description: "Structured case reports written for educational purposes, with informed consent where required.",
};

export default function CaseReportsPage() {
  const articles = getArticlesByType("case-report");

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Publication Type"
        title="Case Reports"
        description="Structured, educational case reports. Any patient-derived material is de-identified and published only with appropriate consent."
      />
      <div className="mt-10">
        <ArchiveExplorer articles={articles} hideTypeFilter />
      </div>
    </div>
  );
}
