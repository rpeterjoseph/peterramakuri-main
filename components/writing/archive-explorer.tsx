"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/lib/content";
import { PUBLICATION_TYPES, PUBLICATION_TYPE_LABEL, TOPICS, PUBLICATION_STATUSES } from "@/lib/taxonomy";
import { ArchiveListItem } from "@/components/article/archive-list-item";

type SortOrder = "recent" | "alphabetical";

export function ArchiveExplorer({
  articles,
  initialType,
  initialTopic,
  hideTypeFilter = false,
}: {
  articles: Article[];
  initialType?: string;
  initialTopic?: string;
  hideTypeFilter?: boolean;
}) {
  const [type, setType] = useState(initialType ?? "all");
  const [topic, setTopic] = useState(initialTopic ?? "all");
  const [year, setYear] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState<SortOrder>("recent");

  const years = useMemo(() => {
    const set = new Set(articles.map((a) => new Date(a.publishedDate).getFullYear().toString()));
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [articles]);

  const filtered = useMemo(() => {
    let result = articles.filter((a) => {
      if (type !== "all" && a.publicationType !== type) return false;
      if (topic !== "all" && !a.topics.includes(topic)) return false;
      if (year !== "all" && new Date(a.publishedDate).getFullYear().toString() !== year) return false;
      if (status !== "all" && a.publicationStatus !== status) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sort === "alphabetical") return a.title.localeCompare(b.title);
      return +new Date(b.publishedDate) - +new Date(a.publishedDate);
    });

    return result;
  }, [articles, type, topic, year, status, sort]);

  const selectClasses =
    "border border-line bg-paper px-3 py-2 font-sans text-[13px] text-ink focus:border-accent";

  return (
    <div>
      <div className="flex flex-wrap gap-3 border-b border-line pb-6" role="group" aria-label="Filter articles">
        {!hideTypeFilter && (
          <select aria-label="Filter by publication type" value={type} onChange={(e) => setType(e.target.value)} className={selectClasses}>
            <option value="all">All Types</option>
            {PUBLICATION_TYPES.map((t) => (
              <option key={t} value={t}>
                {PUBLICATION_TYPE_LABEL[t]}
              </option>
            ))}
          </select>
        )}

        <select aria-label="Filter by subject" value={topic} onChange={(e) => setTopic(e.target.value)} className={selectClasses}>
          <option value="all">All Subjects</option>
          {TOPICS.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.label}
            </option>
          ))}
        </select>

        <select aria-label="Filter by year" value={year} onChange={(e) => setYear(e.target.value)} className={selectClasses}>
          <option value="all">All Years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)} className={selectClasses}>
          <option value="all">All Statuses</option>
          {PUBLICATION_STATUSES.map((s) => (
            <option key={s} value={s} className="capitalize">
              {s[0].toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>

        <select
          aria-label="Sort order"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOrder)}
          className={`${selectClasses} ml-auto`}
        >
          <option value="recent">Most Recent</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      <p className="mt-4 font-sans text-[12.5px] text-ink-faint">
        {filtered.length} {filtered.length === 1 ? "publication" : "publications"}
      </p>

      <div>
        {filtered.map((article) => (
          <ArchiveListItem key={article.slug} article={article} />
        ))}
        {filtered.length === 0 && (
          <p className="py-12 font-sans text-[14px] text-ink-muted">No publications match these filters.</p>
        )}
      </div>
    </div>
  );
}
