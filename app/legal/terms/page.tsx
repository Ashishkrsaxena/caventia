import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms governing the use of caventia.com.",
  robots: { index: true, follow: false },
};

const LAST_UPDATED = "May 2026";

export default function TermsPage() {
  return (
    <section>
      <div className="max-w-[820px] mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <SectionLabel numeral="0.">Legal</SectionLabel>
        <h1 className="type-display-lg mt-6 mb-2">Terms of service</h1>
        <p className="font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute mb-14">
          Last updated · {LAST_UPDATED}
        </p>

        <div className="font-body text-[17px] text-ink leading-[1.75] space-y-6">
          <p>
            These terms govern your use of caventia.com (the &ldquo;Site&rdquo;)
            operated by Caventia Inc. (&ldquo;Caventia&rdquo;,
            &ldquo;we&rdquo;). By using the Site you agree to these terms. If
            you do not agree, please do not use the Site.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            What the Site is
          </h2>
          <p>
            The Site is an informational and marketing presence for Caventia.
            It is not a product and it does not constitute legal, regulatory,
            financial, or medical advice. The frameworks, whitepapers, and
            opinions on the Site are provided for general professional
            interest only.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Acceptable use
          </h2>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Site for any unlawful purpose.</li>
            <li>
              Scrape, crawl, or systematically reproduce the Site&apos;s
              content except as permitted by robots.txt and applicable law.
            </li>
            <li>Submit forms with deliberately false or misleading information.</li>
            <li>
              Reverse engineer, decompile, or attempt to derive source code
              from the Site.
            </li>
          </ul>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Intellectual property
          </h2>
          <p>
            The Site, including its text, design, source code, whitepapers,
            and the Caventia name and wordmark, is owned by Caventia and
            protected by applicable copyright, trademark and intellectual
            property law. You may quote brief excerpts of whitepapers with
            attribution. Republishing whole sections requires written
            permission.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Whitepapers and downloads
          </h2>
          <p>
            Whitepapers are provided for your professional use. You may share
            them inside your organization. You may not redistribute them
            externally, repost them, or claim authorship.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            No warranty
          </h2>
          <p>
            The Site is provided &ldquo;as is&rdquo; without warranty of any
            kind, express or implied. We do not warrant that the Site will be
            error-free, uninterrupted, or that the information will be
            current.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Limitation of liability
          </h2>
          <p>
            To the maximum extent permitted by law, Caventia&apos;s liability
            for any claim arising from the Site is limited to one hundred
            U.S. dollars.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Governing law
          </h2>
          <p>
            These terms are governed by the laws of the State of Delaware,
            United States, without regard to its conflict-of-laws principles.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Contact
          </h2>
          <p>
            Caventia Inc. - Delaware, USA. Email{" "}
            <a
              href="mailto:legal@caventia.com"
              className="text-accent border-b border-accent"
            >
              legal@caventia.com
            </a>{" "}
            for any questions about these terms.
          </p>

          <p className="font-mono text-[13px] text-ink-mute mt-12">
            This document is intended as a working terms-of-service draft and
            is not legal advice. Counsel review is scheduled before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
