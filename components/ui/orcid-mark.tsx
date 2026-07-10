export function OrcidMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="12" cy="12" r="9.3" />
      <circle cx="9.1" cy="8.2" r="0.9" fill="currentColor" stroke="none" />
      <line x1="9.1" y1="10.6" x2="9.1" y2="16" />
      <path d="M11.7 10.6h2.1a2.9 2.9 0 0 1 0 5.8h-2.1z" />
    </svg>
  );
}
