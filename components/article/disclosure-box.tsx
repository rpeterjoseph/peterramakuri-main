import type { Article } from "@/lib/content";

const MEDICAL_DISCLAIMER =
  "This article is provided for educational and informational purposes only and does not constitute medical advice, diagnosis, or treatment. It is written from the perspective of a premedical student and has not been authored or reviewed by a licensed physician. Readers should consult a qualified healthcare professional for guidance specific to their circumstances.";

export function DisclosureBox({ article }: { article: Article }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Author Disclosure</h2>
        <p className="mt-2 max-w-measure font-sans text-[14px] leading-relaxed text-ink-muted">
          {article.disclosureStatement}
        </p>
      </div>

      {article.consentStatement && (
        <div>
          <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">Informed Consent</h2>
          <p className="mt-2 max-w-measure font-sans text-[14px] leading-relaxed text-ink-muted">
            {article.consentStatement}
          </p>
        </div>
      )}

      <div>
        <h2 className="font-sans text-[12px] uppercase tracking-wide text-ink-faint">
          {article.publicationType === "case-report" ? "Medical and Educational Disclaimer" : "Educational Disclaimer"}
        </h2>
        <p className="mt-2 max-w-measure font-sans text-[14px] leading-relaxed text-ink-muted">
          {MEDICAL_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
