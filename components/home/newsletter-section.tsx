import { NewsletterForm } from "./newsletter-form";

export function NewsletterSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Publication Updates</p>
        <h2 className="mt-2 max-w-xl font-serif text-2xl text-ink">
          Receive an email when a new article is published.
        </h2>
        <p className="mt-2 max-w-measure font-sans text-[14px] text-ink-muted">
          No promotional content, occasional notices only when new writing is published.
        </p>
        <div className="mt-6">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
