import { PUBLICATION_TYPE_LABEL, PEER_REVIEW_STATUS_LABEL, type PeerReviewStatus, type PublicationType } from "@/lib/taxonomy";
import { cn } from "@/lib/utils";

export function PublicationTypeBadge({
  type,
  className,
}: {
  type: PublicationType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-sans text-[12px] font-semibold uppercase tracking-wide text-accent",
        className
      )}
    >
      {PUBLICATION_TYPE_LABEL[type]}
    </span>
  );
}

export function PeerReviewBadge({ status }: { status: PeerReviewStatus }) {
  const isPeerReviewed = status === "peer-reviewed";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-0.5 font-sans text-[11px] uppercase tracking-wide",
        isPeerReviewed
          ? "border-accent/50 text-accent"
          : "border-line text-ink-faint"
      )}
    >
      {PEER_REVIEW_STATUS_LABEL[status]}
    </span>
  );
}

export function DoiBadge({ doi }: { doi: string }) {
  const href = doi.startsWith("http") ? doi : `https://doi.org/${doi}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-underline inline-flex items-center gap-1.5 font-mono text-[12.5px] text-ink-muted hover:text-ink"
    >
      DOI: {doi.replace(/^https?:\/\/doi\.org\//, "")}
    </a>
  );
}

export function TopicPill({ label, href }: { label: string; href?: string }) {
  const classes =
    "border border-line px-2.5 py-1 font-sans text-[12px] text-ink-muted transition-colors hover:border-accent hover:text-ink";
  if (!href) return <span className={classes}>{label}</span>;
  return (
    <a href={href} className={classes}>
      {label}
    </a>
  );
}
