import type { Article } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function VersionHistory({ article }: { article: Article }) {
  const entries = [
    ...article.versionHistory,
    { version: "1.0", date: article.publishedDate, note: "Initial publication." },
  ].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div>
      <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Version History</h2>
      <ul className="mt-3 space-y-2.5">
        {entries.map((entry) => (
          <li key={entry.version} className="flex gap-3 font-sans text-[13.5px] text-ink-muted">
            <span className="shrink-0 font-mono text-ink">v{entry.version}</span>
            <span className="shrink-0 text-ink-faint">{formatDate(entry.date)}</span>
            <span>{entry.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
