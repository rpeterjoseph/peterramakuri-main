import Link from "next/link";
import { PUBLICATION_TYPES, PUBLICATION_TYPE_LABEL, PUBLICATION_TYPE_ARCHIVE_ROUTE } from "@/lib/taxonomy";

export function BrowseByType() {
  return (
    <section className="border-y border-line bg-paper-raised/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-serif text-2xl text-ink">Browse by Publication Type</h2>
        <div className="mt-6 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
          {PUBLICATION_TYPES.map((type) => (
            <Link
              key={type}
              href={PUBLICATION_TYPE_ARCHIVE_ROUTE[type] ?? `/writing?type=${type}`}
              className="group flex items-center justify-between bg-paper px-5 py-5 transition-colors hover:bg-paper-raised"
            >
              <span className="font-sans text-[14.5px] text-ink">{PUBLICATION_TYPE_LABEL[type]}</span>
              <span className="font-sans text-ink-faint transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
