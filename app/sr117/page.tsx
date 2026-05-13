import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import WhitepaperGate from "@/components/WhitepaperGate";
import ThreeLinesFilm from "@/components/ThreeLinesFilm";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "Applying SR 11-7 to AI Agents - A Practical Framework",
  description:
    "A 12-page whitepaper on applying the Federal Reserve's SR 11-7 model risk management guidance to LLM-based AI agents. Written by Ashish K. Saxena. Free for banking and fintech model risk professionals.",
  openGraph: {
    title: "Applying SR 11-7 to AI Agents - A Practical Framework",
    description:
      "12 pages on SR 11-7 applied to AI agents. Free for model risk officers.",
    images: [
      {
        url: "/api/og?title=Applying+SR+11-7+to+AI+Agents&desc=A+practical+framework+for+model+risk+officers",
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
    title: "Why SR 11-7 Still Matters in 2026",
    body: "The Fed has confirmed in supervisory letters throughout 2024 and 2025 that LLM-based decisions fit squarely inside SR 11-7's model definition. Banks treating AI agents as automation face MRA findings.",
  },
  {
    num: "II.",
    title: "Where the framework maps cleanly",
    body: "SR 11-7's three pillars (development, validation, ongoing monitoring) translate to AI agents without modification. The principles are durable. The artifacts are not.",
  },
  {
    num: "III.",
    title: "Five places it breaks down",
    body: "Non-determinism. Prompt-as-feature. Tool use and emergent behavior. Model provider opacity. Continuous capability evolution. Each gets a specific fix.",
  },
  {
    num: "IV.",
    title: "A five-step practical framework",
    body: "Inventory and classify. Document each agent. Validate before deployment. Capture production decisions. Monitor and re-validate. Pressure-tested against examiner conversations.",
  },
  {
    num: "V.",
    title: "Documentation artifacts you need",
    body: "Per-agent (Model Identity Document, validation reports, monitoring history, exception log). Program-level (inventory, policy, independence policy, provider risk assessment).",
  },
  {
    num: "VI.",
    title: "Architectural requirements for capture",
    body: "Reproducibility. Tamper evidence. Independence from agent operator. Retention. Demographic capture for ECOA. Replay queries. Minimum bars for examiner-credible evidence.",
  },
  {
    num: "VII.",
    title: "Validation for non-deterministic systems",
    body: "Behavioral envelope testing. Adversarial test suites. Disparate impact analysis on balanced corpora. Shift from accuracy-on-test-set to envelope stability.",
  },
  {
    num: "VIII.",
    title: "Seven pitfalls banks are making in 2026",
    body: "Treating AI as automation. Documenting the LLM as the model. Validating once, never again. No demographic capture. Capture in logs engineers can modify. Among others.",
  },
  {
    num: "IX.",
    title: "Implementation roadmap",
    body: "Days 1-90 (inventory, classify, pattern build). Days 91-180 (capture layer rollout, monitoring). Days 181-365 (full coverage, re-validation cycle).",
  },
  {
    num: "X.",
    title: "Independence: the quiet advantage",
    body: "Counterintuitive: AI agents make independence requirements easier to satisfy than traditional models. Validators no longer need scarce quant PhDs.",
  },
  {
    num: "XI.",
    title: "Provider risk: a specific concern",
    body: "LLM providers ship updates that meaningfully change agent behavior. Contractual, operational, strategic and documentary controls for managing the dependency.",
  },
  {
    num: "App.",
    title: "Appendices",
    body: "SR 11-7 to AI agent mapping table. Glossary covering agent, capture layer, decision drift, feature snapshot, hash chain, Merkle root, MRA, prompt drift and tamper evidence.",
  },
];

export default function SR117Page() {
  return (
    <>
      {/* Hero with email gate side-by-side */}
      <section className="relative overflow-hidden border-b border-rule">
        <Marginalia numeral="V" position="top-right" />
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
                Applying SR 11-7 to AI Agents:{" "}
                <em
                  className="italic text-accent font-display"
                  style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1' }}
                >
                  a practical framework.
                </em>
              </h1>
              <p className="type-body-lg mt-8 max-w-[620px] text-ink-mute font-light">
                12 pages on how the Federal Reserve&apos;s SR 11-7 model
                risk management guidance applies to the LLM-based AI agents
                your business units are now deploying. Written for Chief
                Model Risk Officers, Heads of Model Validation and AI
                Governance leads at banks $10B+ AUM.
              </p>
              <p className="mt-6 font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute">
                Written by Ashish K. Saxena · Founder, Caventia
              </p>
            </div>
            <div id="whitepaper-gate" className="lg:sticky lg:top-8 scroll-mt-24">
              <WhitepaperGate paperId="sr117" />
            </div>
          </div>
        </div>
      </section>

      {/* Three lines, one spine - film */}
      <ThreeLinesFilm />

      {/* Excerpt */}
      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="I.">An excerpt</SectionLabel>
          <h2 className="type-display-md mt-6 mb-10 max-w-[820px]">
            The principles hold up. The artifacts don&apos;t.
          </h2>

          <div className="max-w-[720px]">
            <p className="dropcap font-body text-[19px] text-ink leading-[1.65] mb-6">
              SR 11-7 was written in 2011, three years before GPT-2 and seven
              years before the term &ldquo;AI agent&rdquo; entered common
              usage. Today, banks are deploying AI agents in fraud detection,
              KYC adjudication, credit underwriting and customer service
              while still wrestling with whether traditional model risk
              frameworks apply.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The honest answer: SR 11-7&apos;s principles hold up better
              than you&apos;d expect. The artifacts and workflows it implies
              break down quickly when applied to LLM-based agents.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              An LLM-based fraud detector that produces a fraud_score from a
              transaction prompt fits squarely inside SR 11-7&apos;s model
              definition. So does an AI agent that synthesizes a KYC verdict
              from multiple data sources. The Fed has confirmed this
              position in supervisory letters and OCC examiner training
              materials throughout 2024 and 2025.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              Yet many banks are still treating AI agents as
              &ldquo;automation&rdquo; rather than as models. This creates
              two risks.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              First, examiner findings: the OCC and Fed increasingly ask
              explicitly about AI/ML model governance. Banks without an
              answer face Matters Requiring Attention.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              Second, disparate impact exposure: AI agents making
              credit-adjacent decisions without ECOA-compliant validation
              are creating CFPB enforcement risk.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The whitepaper organizes the response in three layers. The
              three pillars of SR 11-7 (robust development, independent
              validation, ongoing monitoring) translate to AI agents without
              modification.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The breakdowns happen in five specific places: non-determinism,
              prompt-as-feature, tool use, model provider opacity and
              continuous capability evolution. The fix is a five-step
              practical framework: inventory and classify, document each
              agent, validate before deployment, capture production
              decisions, monitor and re-validate.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75]">
              The opportunity: banks that build AI agent governance
              correctly in 2026 have a 12 to 24 month head start on
              competitors who will be forced to retrofit it under examiner
              pressure.{" "}
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
            Eleven sections and two appendices.
          </h2>
          <p className="type-body-lg text-ink-mute font-light mt-2 mb-12 max-w-[640px]">
            About 4,800 words. Roughly 12 pages once typeset.
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
    </>
  );
}
