import type { Metadata } from "next";
import Link from "next/link";
import { TOPICS } from "@/lib/taxonomy";
import { getArticlesByTopic } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse writing by subject area.",
};

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Browse" title="Topics" description="Writing grouped by subject area." />
      <div className="mt-10 divide-y divide-line border-t border-line">
        {TOPICS.map((topic) => {
          const count = getArticlesByTopic(topic.slug).length;
          return (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="flex items-center justify-between py-5 transition-colors hover:bg-paper-raised/40"
            >
              <span className="font-serif text-xl text-ink">{topic.label}</span>
              <span className="font-sans text-[13px] text-ink-faint">
                {count} {count === 1 ? "article" : "articles"}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
