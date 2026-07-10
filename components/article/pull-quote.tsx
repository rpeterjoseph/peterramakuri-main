import type { ReactNode } from "react";

export function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <figure className="not-prose my-10 border-y border-line py-6 sm:mx-[-2rem] sm:px-8">
      <blockquote className="font-serif text-2xl italic leading-snug text-ink sm:text-[28px]">
        {children}
      </blockquote>
      {cite && <figcaption className="mt-3 font-sans text-[13px] text-ink-muted">— {cite}</figcaption>}
    </figure>
  );
}
