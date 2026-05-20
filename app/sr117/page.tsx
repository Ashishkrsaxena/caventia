import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import WhitepaperGate from "@/components/WhitepaperGate";
import ThreeLinesFilm from "@/components/ThreeLinesFilm";
import ExaminerFilm from "@/components/ExaminerFilm";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "AI Agent Governance After SR 11-7 - A Practical Framework for Banks",
  description:
    "On April 17 2026 the agencies rescinded SR 11-7 and excluded generative and agentic AI from the replacement guidance. This is the framework banks adopt instead. Free whitepaper by Ashish K. Saxena. Coming soon.",
  keywords: [
    "AI agent governance",
    "AI Agent Governance After SR 11-7",
    "2026 Interagency MRM Guidance",
    "generative AI governance banks",
    "agentic AI governance banks",
    "model risk management AI",
    "AI audit trail",
    "AI governance for banks",
    "regulated AI agents",
    "FIL-15-2026",
  ],
  openGraph: {
    title: "AI Agent Governance After SR 11-7 - A Practical Framework for Banks",
    description:
      "The agencies excluded generative and agentic AI from the 2026 MRM Guidance. They didn't excuse banks from governing them. Free whitepaper. Coming soon.",
    images: [
      {
        url: "/api/og?title=AI+Agent+Governance+After+SR+11-7&desc=The+framework+banks+adopt+for+the+models+regulators+excluded",
        width: 1200,
        height: 630,
        alt: "AI Agent Governance After SR 11-7 whitepaper",
      },
    ],
  },
  alternates: {
    canonical: "/sr117",
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
    title: "What the April 2026 MRM Rewrite says (and doesn't)",
    body: "The non-prescriptive replacement guidance applies most to banks over $30B. Footnote 3 explicitly excludes generative and agentic AI from scope - while telling banks they still must govern them.",
  },
  {
    num: "II.",
    title: "Why the principles outlived the letter",
    body: "Model inventory, validation, outcomes analysis, ongoing monitoring, effective challenge, vendor oversight. The surviving principles map cleanly onto AI agents. The branded artifacts no longer do.",
  },
  {
    num: "III.",
    title: "Five places the old framework broke down",
    body: "Non-determinism. Prompt-as-feature. Tool use and emergent behavior. Model provider opacity. Continuous capability evolution. Each is precisely why the agencies carved gen AI and agentic AI out.",
  },
  {
    num: "IV.",
    title: "A five-step framework banks adopt",
    body: "Inventory and classify. Document each agent. Validate before deployment. Capture production decisions. Monitor and re-validate. Pressure-tested against post-rewrite examiner conversations.",
  },
  {
    num: "V.",
    title: "Documentation artifacts you still need",
    body: "Per-agent (Model Identity Document, validation reports, monitoring history, exception log). Program-level (inventory, policy, independence policy, provider risk assessment). Names change. Substance doesn't.",
  },
  {
    num: "VI.",
    title: "Architectural requirements for capture",
    body: "Reproducibility. Tamper evidence. Independence from agent operator. Retention. Demographic capture for ECOA. Replay queries. Minimum bars for examiner-defensible evidence.",
  },
  {
    num: "VII.",
    title: "Validation for non-deterministic systems",
    body: "Behavioral envelope testing. Adversarial test suites. Disparate impact analysis on balanced corpora. Shift from accuracy-on-test-set to envelope stability.",
  },
  {
    num: "VIII.",
    title: "Seven pitfalls banks are making in 2026",
    body: "Reading 'non-prescriptive' as 'unaccountable'. Treating AI as automation. Documenting the LLM as the model. Validating once, never again. No demographic capture. Capture in logs engineers can modify. Among others.",
  },
  {
    num: "IX.",
    title: "Implementation roadmap",
    body: "Days 1-90 (inventory, classify, pattern build). Days 91-180 (capture layer rollout, monitoring). Days 181-365 (full coverage, re-validation cycle). Aligned to the new guidance's risk-based tailoring.",
  },
  {
    num: "X.",
    title: "Independence: the quiet advantage",
    body: "Counterintuitive: AI agents make independent validation easier to satisfy than traditional models. Validators no longer need scarce quant PhDs. Effective challenge survives the rewrite intact.",
  },
  {
    num: "XI.",
    title: "Provider risk: the section that just got sharper",
    body: "LLM providers ship updates that meaningfully change agent behavior. The new guidance's Section VII on vendor and third-party products applies in full. Contractual, operational, strategic and documentary controls.",
  },
  {
    num: "App.",
    title: "Appendices",
    body: "The 2026 MRM Guidance to AI agent mapping table. Glossary covering agent, capture layer, decision drift, feature snapshot, hash chain, Merkle root, prompt drift and tamper evidence.",
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
              <SectionLabel>Whitepaper · Coming soon</SectionLabel>
              <h1
                className="font-display font-normal text-ink mt-6"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 80px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  fontVariationSettings: '"opsz" 96, "SOFT" 30',
                }}
              >
                AI Agent Governance{" "}
                <em
                  className="italic text-accent font-display"
                  style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1' }}
                >
                  after SR 11-7.
                </em>
              </h1>
              <p className="type-body-lg mt-8 max-w-[620px] text-ink-mute font-light">
                On April 17 2026 the Federal Reserve, OCC and FDIC jointly
                rescinded SR 11-7 and issued a non-prescriptive replacement
                that explicitly excludes generative and agentic AI from its
                scope. This whitepaper is the framework banks adopt instead.
                Written for Chief Risk Officers, Heads of Model Validation
                and AI Governance leads at banks and FinTech with active AI
                deployment.
              </p>
              <p className="mt-6 font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute">
                Written by Ashish K. Saxena · Founder, Caventia
              </p>
            </div>
            <div id="whitepaper-gate" className="lg:sticky lg:top-8 scroll-mt-24">
              <WhitepaperGate paperId="sr117" comingSoon />
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
            The letter is gone. The principles aren&apos;t.
          </h2>

          <div className="max-w-[720px]">
            <p className="dropcap font-body text-[19px] text-ink leading-[1.65] mb-6">
              On April 17 2026 the Federal Reserve, OCC and FDIC jointly
              rescinded SR 11-7 and replaced it with a 12-page principles-based
              &quot;Supervisory Guidance on Model Risk Management&quot;.
              The new guidance is non-prescriptive, most relevant to banks
              above $30B in total assets and footnote 3 contains the
              sentence that defines the next decade of AI governance in
              banking.
            </p>
            <blockquote
              className="border-l-2 border-accent pl-6 py-2 my-8 font-display italic text-ink"
              style={{
                fontSize: "20px",
                lineHeight: 1.55,
                fontVariationSettings: '"opsz" 36, "SOFT" 60',
              }}
            >
              &quot;Generative AI and agentic AI models are novel and
              rapidly evolving. As such, they are not within the scope of
              this guidance. Nonetheless, a banking organization&apos;s risk
              management and governance practices should guide the
              determination of appropriate governance and controls for any
              tools, processes, or systems not covered in this document.&quot;
              <footer className="not-italic mt-3 font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute">
                Footnote 3, Supervisory Guidance on Model Risk Management,
                April 17 2026
              </footer>
            </blockquote>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The agencies named the gap. They said: we will not tell you
              how to govern AI agents. Figure it out yourselves.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              This is not a relief. It is an obligation. Footnote 1 of the
              same document preserves the escape hatch the agencies left
              themselves: &quot;supervisory action may result for any
              violations of law or unsafe or unsound practices stemming from
              insufficient management of model risk.&quot; Banks can still
              be cited. They just no longer have a checklist to point at.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The surviving principles - model inventory, validation,
              outcomes analysis, ongoing monitoring, effective challenge,
              vendor oversight, model materiality, aggregate risk - all map
              cleanly onto generative and agentic AI. The branded artifacts
              of the SR 11-7 era (&quot;model risk pack&quot;,
              &quot;three lines of defense&quot;) do not. The vocabulary
              changed; the work didn&apos;t.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              This whitepaper is the framework banks adopt for the AI agents
              the 2026 MRM Guidance left to them. Five places the old SR
              11-7 framework broke down for agentic AI - each, as it turns
              out, is precisely why the agencies carved gen AI and agentic
              AI out. A five-step practical framework banks build instead.
              Per-agent documentation artifacts that satisfy what examiners
              still expect.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75]">
              The opportunity: banks that build AI agent governance
              correctly in 2026 have a 12 to 24 month head start on
              competitors who will be forced to retrofit it under board,
              regulator or first-incident pressure.{" "}
              <span className="font-mono text-[14px] text-ink-mute">
                [Leave your email to get the new edition on launch.]
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

      {/* What the examiner sees - closing film */}
      <ExaminerFilm />
    </>
  );
}
