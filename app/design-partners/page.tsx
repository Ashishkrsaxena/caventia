import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title:
    "Design Partner Program - Five Slots, Ninety Days, $0 Pilot",
  description:
    "Caventia's design partner program for regulated AI agents. Free 90-day pilot. Founder-led implementation. Examiner-ready by week 12. Five slots open for banks, FinTech and digital health companies running AI agents in production.",
  keywords: [
    "AI audit trail design partner",
    "AI governance pilot",
    "AI agent governance design partner",
    "FDA 510(k) AI pilot",
    "Caventia design partner",
    "AI model risk pilot",
  ],
  openGraph: {
    title: "Caventia Design Partner Program - Free 90-day Pilot",
    description:
      "Five slots. Ninety days. Examiner-ready by week 12. For banks, FinTech and digital health running AI agents in production.",
    images: [
      {
        url: "/api/og?title=Design+Partner+Program&desc=Five+slots.+Ninety+days.+Examiner-ready.",
        width: 1200,
        height: 630,
        alt: "Caventia Design Partner Program",
      },
    ],
  },
  alternates: {
    canonical: "/design-partners",
  },
};

type FitItem = { primary: string; sub?: string };

const RIGHT_FIT: FitItem[] = [
  {
    primary: "Operational signal over size",
    sub: "Banks $250M+, FinTech with a named compliance officer regardless of asset size, digital health with an active 510(k) or clinical AI deployment. Flexible for right-fit teams.",
  },
  {
    primary: "At least one AI agent in production or near production",
    sub: "LLM-powered, making decisions that touch lending, fraud, KYC, clinical care or any examiner-reviewable surface.",
  },
  {
    primary: "Named MRO, CCO, Chief AI Officer or CMIO with sign-off authority",
    sub: "Champion sits on the second line of defense or the clinical regulatory team.",
  },
  {
    primary: "Recent or upcoming examination or audit pressure",
    sub: "OCC, FDA, state regulator, internal audit finding or board-level AI governance question.",
  },
  {
    primary: "Engineering team that can install an SDK",
    sub: "Without a six-month InfoSec gauntlet. We work in your dev environment first.",
  },
  {
    primary: "Decision-maker available for a weekly 60-minute call",
    sub: "Twelve weeks. Without that cadence the partnership cannot deliver an examiner-ready outcome.",
  },
];

const WRONG_FIT: FitItem[] = [
  {
    primary: "Exploring AI governance without specific pressure",
    sub: "If there is no named examiner, audit or board ask, the AI Agents After SR 11-7 whitepaper is a better starting point.",
  },
  {
    primary: "No AI agents in production today",
    sub: "Pre-deployment shoppers belong on the whitepaper funnel, not in a pilot.",
  },
  {
    primary: "Champion is in IT with no compliance counterpart",
    sub: "The product is built for the second line of defense. Without that voice the pilot drifts.",
  },
  {
    primary: "Procurement-led conversation from day one",
    sub: "Design partner is a commercial relationship. Procurement is for the commercial phase.",
  },
];

type Phase = {
  num: string;
  weeks: string;
  title: string;
  body: string;
};

const PHASES: Phase[] = [
  {
    num: "I.",
    weeks: "Weeks 1-3",
    title: "Discovery and install",
    body: "Schema interview. Map the AI agents to capture. Pull sample decision payloads. SDK installed in dev environment. First synthetic audit record written. Hash chain verified.",
  },
  {
    num: "II.",
    weeks: "Weeks 4-6",
    title: "Capture and tune",
    body: "Real AI agent decisions captured in dev. Schema iterations based on what surfaces. PII redactor tuned. Security review with InfoSec. Production rollout plan signed off.",
  },
  {
    num: "III.",
    weeks: "Weeks 7-9",
    title: "Production capture",
    body: "SDK live in production. First real decisions in the audit trail. Daily Merkle anchor running. Walkthrough with your independent validation function mapping captured fields to the surviving MRM principles or 510(k) requirements.",
  },
  {
    num: "IV.",
    weeks: "Weeks 10-12",
    title: "Examiner dry run and convert",
    body: "Mock examination with Ashish playing the OCC or FDA examiner. Gap closure. End-of-pilot review with sponsor, MRO and procurement. Commercial term sheet presented.",
  },
];

const WE_GIVE = [
  "Full Caventia platform access, no usage caps, for 90 days",
  "Weekly 60-minute video call with the founder for 12 weeks",
  "Custom schema design for your specific decision types",
  "White-glove examiner-readiness dry run in week 10",
  "Year-1 commercial rate locked at 30% below list",
  "Year-2 rate capped at a 10% increase",
  "Best-effort response within 24 hours on critical questions",
];

const YOU_GIVE = [
  "At least one real AI agent through the SDK during the pilot",
  "Weekly 60-minute call with your MRO/CCO and engineering counterpart",
  "Sample decision payloads for schema design (anonymized is fine)",
  "Permission to use anonymized aggregates for product improvement",
  "End-of-pilot review with your second line of defense",
  "Reference call (one per quarter) if you convert to commercial",
  "Notice of intent by day 75 so commercial paperwork has runway",
];

export default function DesignPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <Marginalia numeral="V" position="top-right" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <SectionLabel>Design partner program</SectionLabel>
          <h1
            className="font-display font-normal text-ink mt-6 max-w-[980px]"
            style={{
              fontSize: "clamp(40px, 6vw, 92px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 120, "SOFT" 30',
            }}
          >
            Five slots. Ninety days each.{" "}
            <em
              className="italic text-accent"
              style={{ fontVariationSettings: '"opsz" 120, "SOFT" 100, "WONK" 1' }}
            >
              Examiner-ready by week 12.
            </em>
          </h1>
          <p
            className="font-display italic text-ink-mute mt-8 max-w-[680px]"
            style={{ fontSize: "22px", lineHeight: 1.45 }}
          >
            For banks, FinTech and digital health companies running AI
            agents in production today. Free for 90 days. Founder-led.
            Convertible to commercial at design-partner pricing.
          </p>
        </div>
      </section>

      {/* The numbers */}
      <section className="bg-paper border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-24">
          <SectionLabel numeral="I.">The shape of the offer</SectionLabel>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-t border-ink pt-6">
              <p
                className="font-display font-medium text-accent"
                style={{
                  fontSize: "72px",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                5
              </p>
              <p className="font-display italic text-ink mt-3 text-[18px] leading-[1.5]">
                Design partners in the first wave. Staggered kickoffs so
                no two hit the same phase the same week.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <p
                className="font-display font-medium text-accent"
                style={{
                  fontSize: "72px",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                90
              </p>
              <p className="font-display italic text-ink mt-3 text-[18px] leading-[1.5]">
                Days from kickoff to examiner-readiness, including a mock
                examiner dry run in week 10.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <p
                className="font-display font-medium text-accent"
                style={{
                  fontSize: "72px",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                $0
              </p>
              <p className="font-display italic text-ink mt-3 text-[18px] leading-[1.5]">
                During the pilot. Year-1 commercial at 30% below list.
                Year-2 capped at +10%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What fits / what doesn't */}
      <section className="bg-parchment border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="II.">Who fits, who doesn&apos;t</SectionLabel>
          <p className="font-display italic text-ink-mute mt-6 max-w-[640px] text-[19px] leading-[1.5]">
            Honest qualification saves both sides six weeks. If most of
            the right column is true, start the conversation. If most of
            the left column is true, the whitepaper is a better starting
            point.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-t border-ink pt-6">
              <p
                className="font-body font-medium uppercase text-accent mb-6"
                style={{ fontSize: "11px", letterSpacing: "0.18em" }}
              >
                Right-fit signals
              </p>
              <ul className="space-y-5">
                {RIGHT_FIT.map((item) => (
                  <li key={item.primary} className="border-b border-rule-soft pb-4 last:border-b-0">
                    <p className="font-display text-[18px] text-ink leading-[1.4] font-medium">
                      {item.primary}
                    </p>
                    {item.sub && (
                      <p className="font-body text-[15px] text-ink-mute mt-1 leading-[1.55]">
                        {item.sub}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-ink pt-6">
              <p
                className="font-body font-medium uppercase text-ink-mute mb-6"
                style={{ fontSize: "11px", letterSpacing: "0.18em" }}
              >
                Wrong-fit signals
              </p>
              <ul className="space-y-5">
                {WRONG_FIT.map((item) => (
                  <li key={item.primary} className="border-b border-rule-soft pb-4 last:border-b-0">
                    <p className="font-display text-[18px] text-ink leading-[1.4] font-medium">
                      {item.primary}
                    </p>
                    {item.sub && (
                      <p className="font-body text-[15px] text-ink-mute mt-1 leading-[1.55]">
                        {item.sub}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 90-day pilot */}
      <section className="bg-paper border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="III.">The 90-day pilot</SectionLabel>
          <h2
            className="font-display font-normal text-ink mt-6 max-w-[760px]"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontVariationSettings: '"opsz" 96, "SOFT" 30',
            }}
          >
            Four phases.{" "}
            <em
              className="italic text-accent"
              style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1' }}
            >
              Examiner-ready at the end.
            </em>
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {PHASES.map((p) => (
              <div key={p.num} className="border-t border-ink pt-5">
                <div className="flex items-baseline gap-4 mb-3">
                  <span
                    className="font-display italic text-accent"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="font-body font-medium uppercase text-ink-mute"
                    style={{ fontSize: "11px", letterSpacing: "0.18em" }}
                  >
                    {p.weeks}
                  </span>
                </div>
                <h3
                  className="font-display font-medium text-ink mb-3"
                  style={{
                    fontSize: "26px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {p.title}
                </h3>
                <p className="font-body text-ink text-[16px] leading-[1.65]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What each side gives */}
      <section className="bg-parchment border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="IV.">What each side puts on the table</SectionLabel>
          <p className="font-display italic text-ink-mute mt-6 max-w-[640px] text-[19px] leading-[1.5]">
            Asymmetric on purpose. The partner pays in feedback and
            reference rights. Caventia pays in founder time and a
            two-year pricing lock.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-paper border border-rule border-l-[3px] border-l-accent p-6 md:p-8">
              <p
                className="font-body font-medium uppercase text-accent mb-5"
                style={{ fontSize: "11px", letterSpacing: "0.18em" }}
              >
                What Caventia gives
              </p>
              <ul className="space-y-3">
                {WE_GIVE.map((line) => (
                  <li
                    key={line}
                    className="relative pl-6 font-body text-ink text-[15.5px] leading-[1.55]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[3px] text-accent"
                      style={{ fontSize: "18px", lineHeight: 1 }}
                    >
                      +
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper border border-rule border-l-[3px] border-l-ink p-6 md:p-8">
              <p
                className="font-body font-medium uppercase text-ink-mute mb-5"
                style={{ fontSize: "11px", letterSpacing: "0.18em" }}
              >
                What the partner gives
              </p>
              <ul className="space-y-3">
                {YOU_GIVE.map((line) => (
                  <li
                    key={line}
                    className="relative pl-6 font-body text-ink text-[15.5px] leading-[1.55]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[3px] text-ink-mute"
                      style={{ fontSize: "18px", lineHeight: 1 }}
                    >
                      +
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32 text-center">
          <SectionLabel numeral="V." centered>
            How to start
          </SectionLabel>
          <h2
            className="font-display font-normal text-ink mt-8 mx-auto max-w-[820px]"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontVariationSettings: '"opsz" 96, "SOFT" 30',
            }}
          >
            If your examiner is coming, we should{" "}
            <em
              className="italic text-accent"
              style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1' }}
            >
              already have built this for you.
            </em>
          </h2>
          <p className="font-display italic text-ink-mute mt-8 max-w-[640px] mx-auto text-[19px] leading-[1.55]">
            One 30-minute call. Same script every partner sees. Mutual
            NDA and Design Partner Agreement exchanged within 48 hours
            of mutual fit. Pilot kickoff within two weeks.
          </p>
          <div className="mt-12 flex flex-col xs:flex-row gap-4 justify-center">
            <LinkButton href="/contact" variant="primary">
              Apply to be a design partner
            </LinkButton>
            <LinkButton href="/sr117" variant="secondary">
              Read AI Agents After SR 11-7 first
            </LinkButton>
          </div>
          <p
            className="font-body text-ink-mute mt-10 text-[14px]"
            style={{ letterSpacing: "0.01em" }}
          >
            Or email{" "}
            <a
              href="mailto:ashish@caventia.com"
              className="text-accent border-b border-accent pb-[1px] hover:text-link-hover hover:border-link-hover transition-colors"
            >
              ashish@caventia.com
            </a>{" "}
            directly. Founder reads every message.
          </p>
        </div>
      </section>
    </>
  );
}
