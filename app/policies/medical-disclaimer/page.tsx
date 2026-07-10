import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Medical Disclaimer" };

export default function MedicalDisclaimerPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Policy" title="Medical Disclaimer" />
      <div className="prose prose-neutral mt-8 max-w-measure font-sans text-[15px] leading-relaxed text-ink-muted">
        <p>
          The content published on this site is provided for educational and informational
          purposes only. It is written by a biology and premedical student and has not been
          authored, reviewed, or endorsed by a licensed physician or other healthcare professional
          unless explicitly stated.
        </p>
        <p>
          Nothing on this site constitutes medical advice, diagnosis, or treatment, and it should
          not be used as a substitute for consultation with a qualified healthcare provider.
          Readers with a medical concern should seek the advice of a licensed clinician.
        </p>
        <p>
          Case reports published on this site contain only de-identified information published with
          appropriate informed consent and, where applicable, institutional authorization. If you
          believe any published material identifies a patient without proper consent, please
          contact us immediately through the contact page so it can be reviewed and, if necessary,
          removed.
        </p>
      </div>
    </div>
  );
}
