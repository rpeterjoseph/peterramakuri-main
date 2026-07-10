export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-line pb-8">
      {eyebrow && <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">{eyebrow}</p>}
      <h1 className="mt-2 font-serif text-[36px] font-medium leading-tight tracking-tight text-ink sm:text-[44px]">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-measure font-sans text-[16px] leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  );
}
