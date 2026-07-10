import Link from "next/link";
import { TOPICS } from "@/lib/taxonomy";

export function BrowseByTopic() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <h2 className="font-serif text-2xl text-ink">Browse by Topic</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {TOPICS.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="border border-line px-4 py-2 font-sans text-[13.5px] text-ink-muted transition-colors hover:border-accent hover:text-ink"
          >
            {topic.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
