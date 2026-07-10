"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search as SearchIcon } from "lucide-react";
import { PUBLICATION_TYPE_LABEL, type PublicationType } from "@/lib/taxonomy";
import { formatDate } from "@/lib/utils";

export type SearchDoc = {
  slug: string;
  title: string;
  subtitle?: string;
  abstract: string;
  keywords: string[];
  publicationType: PublicationType;
  publishedDate: string;
};

export function SearchClient({ docs }: { docs: SearchDoc[] }) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(docs, {
        keys: [
          { name: "title", weight: 0.4 },
          { name: "subtitle", weight: 0.15 },
          { name: "abstract", weight: 0.25 },
          { name: "keywords", weight: 0.2 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [docs]
  );

  const results = query.trim() ? fuse.search(query).map((r) => r.item) : docs.slice(0, 8);

  return (
    <div>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          autoFocus
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, abstracts, keywords…"
          aria-label="Search articles"
          className="w-full border border-line bg-paper py-3 pl-10 pr-4 font-sans text-[15px] text-ink placeholder:text-ink-faint focus:border-accent"
        />
      </div>

      <p className="mt-4 font-sans text-[12.5px] text-ink-faint">
        {query.trim() ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Recent publications"}
      </p>

      <ul className="mt-4 divide-y divide-line border-t border-line">
        {results.map((doc) => (
          <li key={doc.slug} className="py-5">
            <Link href={`/writing/${doc.slug}`} className="group block">
              <p className="font-sans text-[11.5px] uppercase tracking-wide text-accent">
                {PUBLICATION_TYPE_LABEL[doc.publicationType]}
              </p>
              <h2 className="mt-1 font-serif text-xl text-ink link-underline">{doc.title}</h2>
              <p className="mt-1.5 line-clamp-2 max-w-measure font-sans text-[14px] text-ink-muted">{doc.abstract}</p>
              <p className="mt-1.5 font-sans text-[12.5px] text-ink-faint">{formatDate(doc.publishedDate)}</p>
            </Link>
          </li>
        ))}
        {query.trim() && results.length === 0 && (
          <li className="py-10 font-sans text-[14px] text-ink-muted">No results for &ldquo;{query}&rdquo;.</li>
        )}
      </ul>
    </div>
  );
}
