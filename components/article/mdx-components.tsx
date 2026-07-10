import type { MDXComponents } from "mdx/types";
import { ExternalLink } from "lucide-react";
import { Callout } from "./callout";
import { PullQuote } from "./pull-quote";
import { Definition } from "./definition";
import { Figure } from "./figure";
import { ReferenceList } from "./reference-list";

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export const mdxComponents: MDXComponents = {
  a: ({ href = "", children, className, ...props }) => {
    const isHeadingAnchor =
      typeof className === "string" ? className.includes("heading-anchor") : false;

    if (isHeadingAnchor) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }

    const external = isExternal(href);
    return (
      <a
        href={href}
        {...props}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="link-underline text-accent"
      >
        {children}
        {external && <ExternalLink className="ml-0.5 inline h-3 w-3 align-super" aria-hidden="true" />}
      </a>
    );
  },
  table: ({ children, ...props }) => (
    <div className="not-prose my-8 overflow-x-auto border border-line">
      <table className="w-full border-collapse font-sans text-[14px]" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border-b border-line bg-paper-raised px-4 py-2.5 text-left font-semibold text-ink"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border-b border-line px-4 py-2.5 text-ink-muted" {...props}>
      {children}
    </td>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-5 font-serif text-lg italic text-ink-muted"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code className="rounded-sm bg-paper-raised px-1.5 py-0.5 font-mono text-[0.85em]" {...props}>
      {children}
    </code>
  ),
  Callout,
  PullQuote,
  Definition,
  Figure,
  ReferenceList,
};
