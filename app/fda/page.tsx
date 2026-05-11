import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import WhitepaperGate from "@/components/WhitepaperGate";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "FDA Q-Sub Strategy for AI Agent Governance Platforms",
  description:
    "A practical framework for using the FDA Pre-Submission program to lock in regulatory classification before deploying clinical AI agents. Written for Chief Medical Information Officers and Heads of Clinical AI at $1B+ health systems and digital health companies.",
  openGraph: {
    title: "FDA Q-Sub Strategy for AI Agent Governance Platforms",
    description:
      "A framework for FDA Pre-Submission strategy on clinical AI agents.",
    images: [
      {
        url: "/api/og?title=FDA+Q-Sub+Strategy&desc=for+AI+Agent+Governance+Platforms",
        width: 1200,
        height: 630,
      },
    ],
  },
};

type Section = {
  num: string;
  title: string;
  body: string;
};

const SECTIONS: Section[] = [
  {
    num: "I.",
    title: "What a Q-Sub is and is not",
    body: "The FDA Pre-Submission Program is a free, voluntary mechanism for written FDA feedback within 70 to 75 days. It is not a clearance. It is the cheapest way to lock in classification before customer contracts make refactoring expensive.",
  },
  {
    num: "II.",
    title: "The Section 3060 carve-out",
    body: "Under the 21st Century Cures Act, clinical decision support software falls outside FDA device regulation if it displays patient data for clinician review, allows independent review of the basis for the recommendation and does not acquire or process medical images directly. Your governance position must thread this needle.",
  },
  {
    num: "III.",
    title: "Why file before Healthcare launch",
    body: "Locks in regulatory classification. Creates a paper trail you can show health-system buyers (FDA has reviewed our position). Surfaces features that push toward device territory while you can still redesign. Costs zero in FDA fees.",
  },
  {
    num: "IV.",
    title: "The five questions you ask FDA",
    body: "Does the platform meet all four Section 3060 criteria? Does generating documentation that assists 510(k) submission keep us outside device classification? Auditing of cleared devices: any device-accessory risk? Bias-flagging features: interpretation of medical data? Adaptive AI under PCCP: where is the governance/PCCP boundary?",
  },
  {
    num: "V.",
    title: "The strategic framing",
    body: "Position the platform as infrastructure for the clinician's review, not as software that interprets patient data. The platform does not acquire or process patient data. The platform does not generate clinical recommendations. The platform supports the independent clinical review required under Section 3060.",
  },
  {
    num: "VI.",
    title: "Q-Sub package contents",
    body: "Cover letter (type of submission, meeting type). Device description (architecture, data flows). Intended use statement. Technology overview. Regulatory position (argument for non-device classification). Numbered list of specific questions for FDA.",
  },
  {
    num: "VII.",
    title: "Counsel selection",
    body: "You need an FDA regulatory specialist, not a generic healthcare attorney. Short list of firms with AI/ML device Q-Sub history. Budget guidance: $30K to $50K for Q-Sub prep, $20K to $30K for follow-up meeting if requested.",
  },
  {
    num: "VIII.",
    title: "Risks and mitigations",
    body: "FDA classifies as device accessory: Pre-Sub questions surface this early; restructure before launch. FDA punts: push for informal teleconference, cite specific guidance. Adverse feedback leaks: Q-Sub responses are confidential under 21 CFR 814.9. 70-day clock blowing up launch: file six months ahead.",
  },
  {
    num: "IX.",
    title: "Timeline",
    body: "T-6: retain FDA counsel. T-5: draft Q-Sub package. T-4: file with FDA. T-2 to T-1: written response. T-1: optional teleconference. T-0: Healthcare SKU launch. Compatible with Year 2 healthcare entry per the platform roadmap.",
  },
  {
    num: "App.",
    title: "Appendices",
    body: "Healthcare regulatory hooks (FDA 510(k), SaMD, PCCP, HIPAA, HITECH, ONC algorithm transparency, Joint Commission). Vendor requirements (HIPAA BAA, HITRUST i1/r2, state medical privacy). Marketing claims compliance (FTC unfair-trade-practice exposure).",
  },
];

export default function FDAPage() {
  return (
    <>
      {/* Hero with email gate side-by-side */}
      <section className="relative overflow-hidden border-b border-rule">
        <Marginalia numeral="VII" position="top-right" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel>Whitepaper · Free download</SectionLabel>
              <h1
                className="font-display font-normal text-ink mt-6"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 80px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  fontVariationSettings: '"opsz" 96, "SOFT" 30',
                }}
              >
                FDA Q-Sub strategy{" "}
                <em
                  className="italic text-accent font-display"
                  style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1' }}
                >
                  for AI agent governance.
                </em>
              </h1>
              <p className="type-body-lg mt-8 max-w-[620px] text-ink-mute font-light">
                How to use the FDA Pre-Submission program to lock in
                regulatory classification before deploying clinical AI
                agents. Written for Chief Medical Information Officers,
                Heads of Clinical AI and digital health founders preparing
                for an FDA conversation in 2026 or 2027.
              </p>
              <p className="mt-6 font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute">
                Written by Ashish K. Saxena · Founder, Caventia
              </p>
            </div>
            <div className="lg:sticky lg:top-8">
              <WhitepaperGate paperId="fda" />
            </div>
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="I.">An excerpt</SectionLabel>
          <h2 className="type-display-md mt-6 mb-10 max-w-[820px]">
            The cheapest way to lock in classification before you ship.
          </h2>

          <div className="max-w-[720px]">
            <p className="dropcap font-body text-[19px] text-ink leading-[1.65] mb-6">
              The single most consequential FDA decision for a clinical AI
              agent platform is not the 510(k) clearance. It is the
              classification call: device or non-device. Get it wrong and
              you are spending eighteen months and seven figures on a
              regulatory pathway you did not need to enter. Get it right
              and you can ship inside the 21st Century Cures Act Section
              3060 carve-out for clinical decision support software.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The FDA Pre-Submission Program (Q-Sub) is the mechanism for
              locking in that call. It is free, voluntary and returns
              written FDA feedback within seventy to seventy-five days. For
              an AI agent governance platform that audits, logs and governs
              other AI systems without making clinical decisions itself,
              the Q-Sub is the gate that confirms non-device status before
              customer contracts make refactoring expensive.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The framing has to be precise. The platform does not acquire,
              process or analyze patient data. It captures metadata about
              the operation of customer-owned AI systems. The platform does
              not generate clinical recommendations. Recommendations are
              produced by customer systems. The platform supports the
              independent clinical review required under Section 3060. Each
              of those sentences corresponds to one of the four Section
              3060 criteria that determine whether you are inside the
              carve-out or outside it.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The whitepaper covers the package contents, the five specific
              questions you ask FDA, counsel selection criteria, risks and
              mitigations and the six-month timeline that lets a Q-Sub
              return before your Healthcare SKU launch. It also covers what
              you cannot say in marketing without triggering FTC
              unfair-trade-practice exposure (FDA approved, FDA cleared,
              FDA certified are all off the table for governance software).
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75]">
              If you are a clinical AI founder reading this in 2026,
              filing a Q-Sub before Healthcare launch is the highest-ROI
              regulatory move you can make this quarter.{" "}
              <span className="font-mono text-[14px] text-ink-mute">
                [Download to continue reading.]
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-parchment border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="II.">What&apos;s inside</SectionLabel>
          <h2 className="type-display-md mt-6 mb-2 max-w-[820px]">
            Nine sections and an appendix on Healthcare regulatory hooks.
          </h2>
          <p className="type-body-lg text-ink-mute font-light mt-2 mb-12 max-w-[640px]">
            Written for clinical AI founders and Chief Medical Information
            Officers approaching FDA for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-10">
            {SECTIONS.map((item) => (
              <div key={item.num} className="border-t border-rule pt-6">
                <p className="font-display italic text-[22px] text-accent font-medium mb-2 leading-none">
                  {item.num}
                </p>
                <h3 className="font-display text-[22px] font-medium text-ink mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] text-ink-mute leading-[1.6]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing-claims caveat */}
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[820px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel>A note on marketing claims</SectionLabel>
          <p className="font-body text-[17px] text-ink leading-[1.75] mt-8">
            False or misleading claims about regulatory status are FTC
            unfair-trade-practice violations. You cannot say &ldquo;FDA
            approved,&rdquo; &ldquo;FDA cleared&rdquo; or &ldquo;regulatory
            approved auditor&rdquo; for a governance platform. You can say
            &ldquo;aligned with SR 11-7 requirements,&rdquo; &ldquo;generates
            510(k)-submission-ready documentation&rdquo; and
            &ldquo;HIPAA-compliant architecture, BAA available.&rdquo; Bake
            this into the brand from day one. One wrong sales-deck slide
            creates years of FTC exposure.
          </p>
        </div>
      </section>
    </>
  );
}
