import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Caventia collects, stores and uses personal data.",
  robots: { index: true, follow: false },
};

const LAST_UPDATED = "2026";

export default function PrivacyPage() {
  return (
    <section>
      <div className="max-w-[820px] mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <SectionLabel numeral="0.">Legal</SectionLabel>
        <h1 className="type-display-lg mt-6 mb-2">Privacy policy</h1>
        <p className="font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute mb-14">
          Last updated · {LAST_UPDATED}
        </p>

        <div className="font-body text-[17px] text-ink leading-[1.75] space-y-6">
          <p>
            This page describes how Caventia Inc. (&ldquo;Caventia&rdquo;,
            &ldquo;we&rdquo;) collects and uses personal information through
            caventia.com. It applies to visitors and to anyone who submits a
            form on the site. It does not yet apply to a product, because
            Caventia is pre-product.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            What we collect
          </h2>
          <p>
            We collect only what you submit through forms on this site. That
            consists of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your work email address, when you request a whitepaper.</li>
            <li>
              Your name, title, institution, AUM tier and the inquiry message
              you write, when you submit the design-partner contact form.
            </li>
            <li>
              Your name, outlet, deadline and topic, when you submit the
              press form.
            </li>
          </ul>
          <p>
            We do not run cookies for advertising. We do not use Google
            Analytics. If we use Plausible Analytics, it is configured in
            cookieless mode and aggregates only page-view counts.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            How we use it
          </h2>
          <p>
            We use the information you submit to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send you the whitepaper you requested.</li>
            <li>
              Have a follow-up conversation with you about a design-partner
              relationship or a press inquiry.
            </li>
            <li>
              Improve the site, in aggregate, based on which pages convert.
            </li>
          </ul>
          <p>
            We do not sell, rent, share, or trade your personal information
            with third parties for their own marketing.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Who can see it
          </h2>
          <p>
            Submissions are delivered to the founder via Resend
            (transactional email). The founder and a small operating team
            access the data. We retain submissions for the duration of the
            commercial relationship plus seven years for regulatory record
            keeping. You can request deletion at any time by emailing{" "}
            <a
              href="mailto:privacy@caventia.com"
              className="text-accent border-b border-accent"
            >
              privacy@caventia.com
            </a>
            .
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Your rights
          </h2>
          <p>
            If you are in the EU/UK, you have rights under GDPR including
            access, rectification, erasure, restriction and portability. If
            you are in California, you have rights under the CCPA/CPRA
            including access, deletion and the right to opt out of sale (we
            do not sell). Email{" "}
            <a
              href="mailto:privacy@caventia.com"
              className="text-accent border-b border-accent"
            >
              privacy@caventia.com
            </a>{" "}
            to exercise any of these rights.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Contact
          </h2>
          <p>
            Caventia Inc. - Delaware, USA. For privacy questions:{" "}
            <a
              href="mailto:privacy@caventia.com"
              className="text-accent border-b border-accent"
            >
              privacy@caventia.com
            </a>
            .
          </p>

          <p className="font-mono text-[13px] text-ink-mute mt-12">
            This document is intended as a working policy and is not legal
            advice. Counsel review is scheduled before any production
            commercial relationship begins.
          </p>
        </div>
      </div>
    </section>
  );
}
