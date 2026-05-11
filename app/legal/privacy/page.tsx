import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

/*
  FLAGGED FOR COUNSEL REVIEW
  ----------------------------------------------------------------
  This is a pre-counsel draft. Counsel should specifically validate
  or replace the following items before any production data
  collection at scale (early design-partner volumes are unlikely to
  trigger material exposure, but the open items below are real):

  1. Entity status. "Caventia Inc." is stated as a Delaware C-Corp.
     Per the product plan, incorporation is deferred until first
     paid contract or three signed LOIs. Soften to "Caventia (in
     formation as a Delaware C-Corp)" until filing. Otherwise align
     this page with the actual incorporation date.

  2. CCPA/CPRA categories disclosure. California law requires
     enumerating each category of personal information collected,
     sources, business purposes and disclosures. The matrix below
     is a conservative first draft; counsel should verify category
     labels match the CCPA-published taxonomy.

  3. GDPR legal basis per processing purpose. The basis table
     below uses "legitimate interest" and "consent." Counsel
     should confirm the legitimate-interest balancing test is
     defensible for each purpose.

  4. International data transfers. Resend (US) processes data from
     EU/UK visitors. Counsel should confirm the appropriate
     transfer mechanism (Standard Contractual Clauses, UK IDTA,
     adequacy decisions) and whether to identify Caventia's
     EU representative under GDPR Article 27 if traffic warrants.

  5. Retention schedule. The current "duration of commercial
     relationship plus seven years" needs jurisdiction-specific
     review; some EU regulators expect shorter defaults absent
     a specific legal-hold reason.

  6. Children's data. We do not knowingly collect from under-16
     visitors but should state the affirmative position and
     contact path for parental requests.

  7. Breach notification. Affirmative commitment text should
     match state-specific timing requirements (e.g. New York 30
     days, California "expedient").

  8. privacy@caventia.com inbox. Verify the alias resolves to a
     monitored mailbox before launch; an unanswered privacy
     inbox is itself a compliance issue.

  9. Cookies. Currently zero. If Plausible or any other tag is
     added later, the "Cookies and tracking" section must be
     refreshed to reflect that exactly.

  10. Linked third-party services (Resend, Vercel). Their privacy
      practices should be referenced; counsel should advise on
      sub-processor disclosure requirements.
*/

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Caventia collects, stores and uses personal data.",
  robots: { index: true, follow: false },
};

const EFFECTIVE_DATE = "2026-05-11";

export default function PrivacyPage() {
  return (
    <section>
      <div className="max-w-[820px] mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <SectionLabel numeral="0.">Legal</SectionLabel>
        <h1 className="type-display-lg mt-6 mb-2">Privacy policy</h1>
        <p className="font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute mb-14">
          Effective · {EFFECTIVE_DATE}
        </p>

        <div className="font-body text-[17px] text-ink leading-[1.75] space-y-6">
          <p>
            This policy describes how Caventia (in formation as a Delaware
            C-Corp; together with its affiliates, &ldquo;Caventia&rdquo;,
            &ldquo;we&rdquo; or &ldquo;our&rdquo;) collects, uses and
            discloses personal information through caventia.com (the
            &ldquo;Site&rdquo;). It applies to anyone who visits the Site or
            submits a form on it.
          </p>
          <p>
            Caventia is pre-product. This policy covers Site activity only.
            A separate Data Processing Addendum will govern any future
            customer-facing product.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Categories of personal information we collect
          </h2>
          <p>
            We collect only what you submit through forms on the Site, plus
            limited technical data your browser sends automatically.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Identifiers.</strong> Name, work email address,
              professional title, employer name. Collected when you submit
              the whitepaper, design-partner or press forms.
            </li>
            <li>
              <strong>Professional information.</strong> AUM tier, regulator
              context and any free-text inquiry message you choose to
              include.
            </li>
            <li>
              <strong>Technical data.</strong> IP address, user-agent and
              referrer at the time of a Site visit. Captured by the hosting
              infrastructure; not used to identify individuals.
            </li>
          </ul>
          <p>
            We do not collect sensitive personal information as defined by
            CCPA/CPRA. We do not collect biometric, genetic, health, sexual
            orientation, religious or political data.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            How we use it
          </h2>
          <p>
            We use the information you submit to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deliver the whitepaper or response you requested.</li>
            <li>
              Have a follow-up conversation about a design-partner
              relationship or press inquiry.
            </li>
            <li>
              Maintain a record of inquiries for our own contractual,
              regulatory and audit-trail purposes.
            </li>
            <li>
              Improve the Site in aggregate based on which content
              converts.
            </li>
          </ul>
          <p>
            We do not sell, rent, share or trade your personal information
            with third parties for their own marketing. We do not engage in
            cross-context behavioral advertising as defined by CPRA.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Legal basis (GDPR / UK GDPR)
          </h2>
          <p>
            If you are in the EU or UK, our legal basis for processing your
            personal information depends on the purpose:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Consent</strong> (Article 6(1)(a)) for delivering the
              whitepaper you requested.
            </li>
            <li>
              <strong>Legitimate interest</strong> (Article 6(1)(f)) for
              following up on commercial inquiries, maintaining inquiry
              records and improving the Site. Our legitimate interest is in
              operating a credible design-partner pipeline; we believe this
              does not override your rights and we will reconsider at any
              individual&apos;s request.
            </li>
          </ul>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Cookies and tracking
          </h2>
          <p>
            The Site does not currently set cookies or use third-party
            tracking. We do not run advertising tags. We do not use Google
            Analytics. If we add a privacy-respecting analytics tool such as
            Plausible Analytics, it will be cookieless and aggregate only
            non-identifying page-view counts; this policy will be updated to
            reflect any such addition.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Service providers and sub-processors
          </h2>
          <p>
            We use the following services to operate the Site. Each
            processes a limited slice of the data described above under our
            instructions.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vercel</strong> hosts the Site. Vercel may process IP
              address and request metadata in the course of serving pages.
            </li>
            <li>
              <strong>Resend</strong> delivers transactional email when you
              submit a form. Resend processes your email address and the
              message body.
            </li>
          </ul>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            International data transfers
          </h2>
          <p>
            Our service providers are located primarily in the United
            States. If you submit personal information from outside the
            United States, that information will be transferred to and
            processed in the United States. Where required, we rely on
            Standard Contractual Clauses or equivalent transfer mechanisms
            with our sub-processors.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Retention
          </h2>
          <p>
            We retain personal information only as long as needed for the
            purpose collected, then delete or anonymize it.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Inquiry submissions</strong> are retained for the
              duration of the commercial relationship, plus a defensible
              tail not to exceed seven years for record-keeping.
            </li>
            <li>
              <strong>Server logs</strong> with IP addresses are retained no
              longer than ninety days.
            </li>
          </ul>
          <p>
            You can request earlier deletion at any time at the address
            below; we will comply within thirty days unless we are subject
            to a legal-hold obligation that requires longer retention.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Your rights
          </h2>
          <p>
            Depending on where you live, you may have rights to access,
            correct, delete, port or restrict processing of your personal
            information. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>EU / UK (GDPR / UK GDPR):</strong> access, rectification,
              erasure, restriction, portability, objection and the right to
              lodge a complaint with your supervisory authority.
            </li>
            <li>
              <strong>California (CCPA / CPRA):</strong> right to know, right
              to delete, right to correct, right to opt out of sale or
              sharing (we do not sell or share), right to limit use of
              sensitive personal information (we do not collect sensitive
              data) and right to non-discrimination for exercising these
              rights.
            </li>
            <li>
              <strong>Other US states</strong> with comprehensive privacy
              laws (Colorado, Connecticut, Virginia, Utah and similar)
              provide analogous rights.
            </li>
          </ul>
          <p>
            Email{" "}
            <a
              href="mailto:privacy@caventia.com"
              className="text-accent border-b border-accent"
            >
              privacy@caventia.com
            </a>{" "}
            to exercise any of these rights. We will verify your identity by
            confirming your control of the email address on file, then
            respond within the timing required by applicable law.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Children
          </h2>
          <p>
            The Site is not directed to children under sixteen. We do not
            knowingly collect personal information from anyone under sixteen.
            If you believe we have collected information from a child,
            please contact us and we will delete it.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Security
          </h2>
          <p>
            We use reasonable and appropriate technical and organizational
            safeguards including TLS in transit, encrypted storage at our
            sub-processors and access controls limited to staff with a
            business need. No security is perfect; we cannot guarantee
            absolute security but we will notify affected individuals of any
            breach as required by applicable law.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Automated decision-making
          </h2>
          <p>
            We do not use your personal information for automated
            decision-making or profiling that produces legal or similarly
            significant effects.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Changes to this policy
          </h2>
          <p>
            We may update this policy as our practices change. The
            &ldquo;Effective&rdquo; date at the top reflects the most recent
            revision. Material changes will be flagged at the top of this
            page for at least thirty days.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Contact
          </h2>
          <p>
            Caventia, Delaware, USA. For privacy questions or to exercise
            your rights:{" "}
            <a
              href="mailto:privacy@caventia.com"
              className="text-accent border-b border-accent"
            >
              privacy@caventia.com
            </a>
            . You can also reach the founder at{" "}
            <a
              href="mailto:ashish@caventia.com"
              className="text-accent border-b border-accent"
            >
              ashish@caventia.com
            </a>
            .
          </p>

          <p className="font-mono text-[13px] text-ink-mute mt-12">
            This document is a working policy and is not legal advice.
            Counsel review is scheduled before any production commercial
            relationship begins.{" "}
            <Link href="/legal/terms" className="text-accent border-b border-accent">
              Read the terms of service →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
