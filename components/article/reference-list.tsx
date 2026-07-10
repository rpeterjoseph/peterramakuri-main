export type ReferenceItem = {
  text: string;
  href?: string;
};

export function ReferenceList({ items }: { items: ReferenceItem[] }) {
  return (
    <ol className="not-prose space-y-3 font-sans text-[14px] leading-relaxed text-ink-muted">
      {items.map((item, i) => (
        <li key={i} id={`ref-${i + 1}`} className="flex gap-3">
          <span className="shrink-0 text-ink-faint">[{i + 1}]</span>
          <span>
            {item.text}{" "}
            {item.href && (
              <a href={item.href} target="_blank" rel="noreferrer" className="link-underline text-accent">
                {item.href}
              </a>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
