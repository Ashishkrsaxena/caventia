import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import WhitepaperGate from "@/components/WhitepaperGate";

export const metadata: Metadata = {
  title: "SR 11-7 Compliance for AI Agents — A Practical Framework",
  description:
    "A 24-page whitepaper on SR 11-7 model risk management applied to generative AI agents. Written by Ashish K. Saxena. Free download for banking and fintech model risk professionals.",
  openGraph: {
    title: "SR 11-7 Compliance for AI Agents — A Practical Framework",
    description:
      "A 24-page whitepaper on SR 11-7 applied to AI agents. Free download.",
    images: [
      {
        url: "/api/og?title=SR+11-7+Compliance+for+AI+Agents&desc=A+practical+framework+for+model+risk",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SR117Page() {
  return (
    <>
      {/* Hero with email gate side-by-side */}
      <section className="border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel numeral="0.">Whitepaper · Free download</SectionLabel>
              <h1 className="type-display-lg mt-6">
                SR 11-7 Compliance for AI Agents:{" "}
                <em className="italic text-accent font-display">
                  a practical framework.
                </em>
              </h1>
              <p className="type-body-lg mt-8 max-w-[620px] text-ink-mute font-light">
                Twenty-four pages on how to apply the Federal Reserve&apos;s SR
                11-7 model risk management guidance to the generative AI
                agents your business units are now deploying. Written for
                Chief Model Risk Officers and their teams.
              </p>
              <p className="mt-6 font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute">
                Written by Ashish K. Saxena · Founder, Caventia
              </p>
            </div>
            <div className="lg:sticky lg:top-8">
              <WhitepaperGate paperId="sr117" />
            </div>
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="I.">An excerpt</SectionLabel>
          <h2 className="type-display-md mt-6 mb-10 max-w-[820px]">
            What the SR 11-7 framework asks, and why generative AI breaks it.
          </h2>

          <div className="max-w-[720px]">
            <p className="dropcap font-body text-[19px] text-ink leading-[1.65] mb-6">
              SR 11-7 was written in 2011 for a world of credit scorecards,
              fraud rules, and stress-test econometrics. Its three pillars —
              conceptual soundness, ongoing monitoring, and outcomes analysis —
              were designed around models you could specify, freeze, and
              reason about as a mathematical object. The generative AI agent
              your business unit is piloting today fits none of those
              assumptions, and your examiner has noticed.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The first place SR 11-7 strains is conceptual soundness. The
              guidance asks for a clear statement of what the model is
              supposed to do, what data it was trained on, and what the
              expected error modes are. For a foundation model invoked
              through prompts, those statements either become trivially true
              (“it processes natural language”) or trivially false (“we
              cannot enumerate the training data”). Neither answer satisfies
              the examiner.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The second place it strains is ongoing monitoring. SR 11-7
              expects the model risk function to detect drift, retrain on
              schedule, and document each change. With prompt-based agents
              the change cadence is daily, the “retraining” is a prompt
              rewrite, and the population is shifting under your feet because
              user behaviour adapts to the agent. The bank needs a monitoring
              substrate that captures every prompt-version, every feature
              snapshot, and every outcome — and produces drift evidence on
              the schema your examiner reads.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              The third place it strains is independent validation. SR 11-7
              requires a third-party model validation function that can
              opine on the model&apos;s fitness. The standard answer — hire a
              Big 4 firm — is a six-month, half-million-dollar engagement
              that scales poorly when your bank has fifty agents under
              review. A productized validator network, bonded and trained on
              a common evidence model, is the only economically viable
              answer at scale.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75]">
              The remainder of this whitepaper proposes a concrete framework
              for each pillar, with templates your model risk function can
              adopt this quarter.{" "}
              <span className="font-mono text-[14px] text-ink-mute">
                [Download to continue reading.]
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-parchment border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="II.">What&apos;s inside</SectionLabel>
          <h2 className="type-display-md mt-6 mb-12 max-w-[820px]">
            Five sections, twenty-four pages, three appendices.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {[
              {
                num: "I.",
                title: "Where SR 11-7 strains",
                body: "Pillar-by-pillar diagnosis of where the 2011 guidance breaks under generative AI workloads.",
              },
              {
                num: "II.",
                title: "The conceptual-soundness rewrite",
                body: "How to write a model documentation pack that satisfies an OCC examiner for a prompt-based agent.",
              },
              {
                num: "III.",
                title: "Monitoring substrate",
                body: "The minimum data structure for runtime audit logs that survive an SR 11-7 reconstruction.",
              },
              {
                num: "IV.",
                title: "Independent validation, productized",
                body: "A framework for a bonded validator network and the economics of moving from $500K engagements to $40K cycles.",
              },
              {
                num: "V.",
                title: "Implementation checklist",
                body: "A 30-page-by-page checklist your model risk function can adapt this quarter.",
              },
              {
                num: "App.",
                title: "Templates and appendices",
                body: "Model documentation template, drift detection schema, examiner briefing one-pager.",
              },
            ].map((item) => (
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
