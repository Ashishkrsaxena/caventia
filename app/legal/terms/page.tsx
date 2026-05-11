import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { longForm } from "@/lib/entity";

/*
  FLAGGED FOR COUNSEL REVIEW
  ----------------------------------------------------------------
  This is a pre-counsel draft. Items below are open for the lawyer
  before any production commercial relationship begins. The draft is
  conservative enough to ship as-is for a credentialing marketing site;
  the items below are not gating for design-partner conversations but
  must be resolved before any paid contract or SDK access.

  1. Entity status. Incorporation is being filed via Stripe Atlas
     (Delaware C-Corp). Until Atlas confirms the certificate, the
     entity name renders as "Caventia (in formation as a Delaware
     C-Corp)" via lib/entity.ts. Once filed:
       (a) Flip INCORPORATED to true in lib/entity.ts
       (b) Set FORMATION_DATE to the ISO date on the certificate
     Counsel should also confirm governing-law and limitation-of-
     liability clauses are enforceable as of the actual incorporation
     date.

  2. Arbitration and class-action waiver. Currently NOT included.
     Counsel should advise on whether to add binding arbitration
     (JAMS or AAA), a class-action waiver, opt-out window and
     small-claims carveout. Required before any paid commercial
     contract; defensible to omit on a free informational site.

  3. Limitation of liability cap at $100. Aggressive but consistent
     with the free-information posture. Counsel should evaluate
     enforceability in California (unconscionability), Massachusetts
     and EU consumer contexts. Consider adding "amount paid in the
     preceding twelve months" floor if any paid services are added.

  4. Indemnification by user. Currently NOT included. Counsel should
     advise on whether mutual or one-way indemnification is needed,
     especially around scrape/automation activity and unauthorized
     redistribution of whitepapers.

  5. Termination and access withdrawal. Currently NOT included.
     Counsel should advise on whether to reserve a right to terminate
     access for breach of the Acceptable Use section.

  6. DMCA agent. Not designated. Required if user-generated content
     is hosted; not relevant today since the Site has no UGC.
     Re-evaluate when a blog comment system or community feature
     is added.

  7. Whitepaper redistribution restrictions. Today says "may share
     inside your organization." Counsel should advise on definition
     of "organization" (consultants? subsidiaries?), watermarking
     posture and remedies for unauthorized external republication.

  8. Standard boilerplate (entire-agreement, severability, no-waiver,
     assignment, force majeure). Included in baseline form below;
     counsel should confirm wording is enforceable in Delaware.

  9. legal@caventia.com inbox. Verify the alias resolves to a
     monitored mailbox before any production commercial relationship.
*/

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms governing the use of caventia.com.",
  robots: { index: true, follow: false },
};

const EFFECTIVE_DATE = "2026-05-11";

export default function TermsPage() {
  return (
    <section>
      <div className="max-w-[820px] mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <SectionLabel numeral="0.">Legal</SectionLabel>
        <h1 className="type-display-lg mt-6 mb-2">Terms of service</h1>
        <p className="font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute mb-14">
          Effective · {EFFECTIVE_DATE}
        </p>

        <div className="font-body text-[17px] text-ink leading-[1.75] space-y-6">
          <p>
            These terms govern your use of caventia.com (the
            &ldquo;Site&rdquo;) operated by {longForm()} (&ldquo;Caventia&rdquo;,
            &ldquo;we&rdquo; or &ldquo;our&rdquo;). By accessing or using
            the Site you agree to these terms. If you do not agree, please
            do not use the Site.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            What the Site is
          </h2>
          <p>
            The Site is an informational and marketing presence for
            Caventia. It is not a product. It does not constitute legal,
            regulatory, financial or medical advice.
          </p>
          <p>
            The frameworks, whitepapers and opinions on the Site are
            provided for general professional interest only. You should
            consult your own counsel, model risk team, clinical informatics
            team or other qualified advisors before acting on any of it.
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
              Scrape, crawl or systematically reproduce the Site&apos;s
              content except as permitted by robots.txt and applicable law.
            </li>
            <li>
              Submit forms with deliberately false or misleading information.
            </li>
            <li>
              Reverse engineer, decompile or attempt to derive source code
              from the Site.
            </li>
            <li>
              Use the Site to send unsolicited communications, including
              spam, to Caventia or to any third party.
            </li>
            <li>
              Interfere with the operation of the Site, including denial of
              service attempts or any attempt to bypass access controls.
            </li>
          </ul>
          <p>
            We may suspend or terminate your access for breach of these
            Acceptable Use provisions.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Intellectual property
          </h2>
          <p>
            The Site, including its text, design, source code, whitepapers
            and the Caventia name and wordmark, is owned by Caventia and
            protected by applicable copyright, trademark and intellectual
            property law.
          </p>
          <p>
            You may quote brief excerpts of whitepapers (up to two hundred
            words) with attribution to Caventia and a link to the relevant
            Site page. Republishing whole sections, full whitepapers or
            substantial portions requires written permission from Caventia.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Whitepapers and downloads
          </h2>
          <p>
            Whitepapers are provided for your professional use. You may
            share them inside your own organization, including with external
            advisors retained to support your organization. You may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Redistribute whitepapers externally for general circulation.</li>
            <li>Repost whitepapers on public or paywalled platforms.</li>
            <li>
              Remove or alter Caventia attribution, copyright notices or
              cover pages.
            </li>
            <li>Claim authorship or rebrand the content as your own.</li>
          </ul>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Forms and submissions
          </h2>
          <p>
            Information you submit through Site forms is governed by the{" "}
            <Link href="/legal/privacy" className="text-accent border-b border-accent">
              Privacy Policy
            </Link>
            . Submitting a form does not create any obligation on Caventia
            to respond, to engage commercially or to provide any specific
            information.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Third-party links
          </h2>
          <p>
            The Site may link to third-party services such as Google
            Scholar, LinkedIn or commercial publication pages. Caventia
            does not endorse and is not responsible for the content of any
            third-party site.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            No warranty
          </h2>
          <p>
            THE SITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTY OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
            NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Site will be error-free,
            uninterrupted or that the information will be current,
            accurate or complete.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Limitation of liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAVENTIA&apos;S TOTAL
            LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO YOUR USE OF
            THE SITE IS LIMITED TO ONE HUNDRED U.S. DOLLARS (US$100).
          </p>
          <p>
            CAVENTIA WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES, EVEN IF ADVISED OF
            THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT
            ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OF
            LIABILITY FOR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS
            MAY NOT APPLY TO YOU.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Caventia and its
            officers, directors, employees and agents from any claim,
            liability, cost or expense arising out of your breach of these
            terms, your misuse of the Site or your violation of any
            applicable law.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Termination
          </h2>
          <p>
            We may suspend or terminate your access to the Site at any
            time, with or without notice, for any reason, including breach
            of these terms. The provisions that by their nature should
            survive termination (including Intellectual Property, No
            Warranty, Limitation of Liability, Indemnification and
            Governing Law) will survive.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Changes to these terms
          </h2>
          <p>
            We may update these terms as our practices change. The
            &ldquo;Effective&rdquo; date at the top reflects the most
            recent revision. Material changes will be flagged at the top of
            this page for at least thirty days. Your continued use of the
            Site after a revision becomes effective constitutes acceptance
            of the revised terms.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Governing law
          </h2>
          <p>
            These terms are governed by the laws of the State of Delaware,
            United States, without regard to its conflict-of-laws
            principles. Any action arising under these terms will be
            brought exclusively in the state or federal courts located in
            Delaware. You consent to personal jurisdiction in those courts.
          </p>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Miscellaneous
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Entire agreement.</strong> These terms and the
              Privacy Policy constitute the entire agreement between you
              and Caventia regarding the Site and supersede any prior
              agreements on the same subject.
            </li>
            <li>
              <strong>Severability.</strong> If any provision is held
              unenforceable, the remaining provisions remain in full
              force.
            </li>
            <li>
              <strong>No waiver.</strong> Failure to enforce any provision
              is not a waiver of the right to do so later.
            </li>
            <li>
              <strong>Assignment.</strong> You may not assign these terms
              without our written consent. We may assign them in connection
              with a merger, acquisition or sale of all or substantially
              all of our assets.
            </li>
            <li>
              <strong>Force majeure.</strong> Neither party is liable for
              delay or failure to perform caused by events beyond
              reasonable control.
            </li>
          </ul>

          <h2 className="font-display text-[28px] font-medium leading-tight mt-12 mb-2">
            Contact
          </h2>
          <p>
            Caventia, Delaware, USA. Email{" "}
            <a
              href="mailto:legal@caventia.com"
              className="text-accent border-b border-accent"
            >
              legal@caventia.com
            </a>{" "}
            for any questions about these terms.
          </p>

          <p className="font-mono text-[13px] text-ink-mute mt-12">
            This document is a working terms-of-service draft and is not
            legal advice. Counsel review is scheduled before launch.{" "}
            <Link href="/legal/privacy" className="text-accent border-b border-accent">
              Read the privacy policy →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
