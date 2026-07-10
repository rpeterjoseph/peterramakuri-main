import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
      <PageHeader eyebrow="Policy" title="Privacy Policy" />
      <div className="prose prose-neutral mt-8 max-w-measure font-sans text-[15px] leading-relaxed text-ink-muted">
        <p>
          This site collects the minimum information necessary to operate. If you submit the
          publication-updates form or the contact form, the email address and message you provide
          are used only to respond to you or to notify you of new publications, and are not sold or
          shared with third parties.
        </p>
        <p>
          This site does not run advertising and does not use third-party tracking or analytics
          cookies beyond what is strictly required to serve the pages you request.
        </p>
        <p>
          You may request that any information you have submitted be deleted at any time by
          contacting <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </div>
  );
}
