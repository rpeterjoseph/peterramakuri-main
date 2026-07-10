import { OrcidMark } from "@/components/ui/orcid-mark";

export function OrcidLink({ orcid }: { orcid: string }) {
  return (
    <a
      href={`https://orcid.org/${orcid}`}
      target="_blank"
      rel="noreferrer"
      className="link-underline inline-flex items-center gap-1.5 font-sans text-[13px] text-ink-muted hover:text-ink"
    >
      <OrcidMark className="h-3.5 w-3.5 text-accent" />
      {orcid}
    </a>
  );
}
