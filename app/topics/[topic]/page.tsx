import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOPICS, topicLabel } from "@/lib/taxonomy";
import { getArticlesByTopic } from "@/lib/content";
import { ArchiveExplorer } from "@/components/writing/archive-explorer";
import { PageHeader } from "@/components/ui/page-header";

type Params = Promise<{ topic: string }>;

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { topic } = await params;
  const label = topicLabel(topic);
  return {
    title: label,
    description: `Independent writing on ${label}.`,
  };
}

export default async function TopicPage({ params }: { params: Params }) {
  const { topic: topicSlug } = await params;
  const topic = TOPICS.find((t) => t.slug === topicSlug);
  if (!topic) notFound();

  const articles = getArticlesByTopic(topic.slug);

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Topic" title={topic.label} description={`All writing addressing ${topic.label.toLowerCase()}.`} />
      <div className="mt-10">
        <ArchiveExplorer articles={articles} hideTypeFilter />
      </div>
    </div>
  );
}
