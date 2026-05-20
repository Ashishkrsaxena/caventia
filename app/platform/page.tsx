import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import SpineDiagram from "@/components/SpineDiagram";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "The Platform - Four Products, One AI Audit Trail Spine",
  description:
    "The Caventia platform captures every AI agent decision in a tamper-evident chain. SDK, ingestion API, examiner console and verification CLI. Four products on one audit-trail spine, built for the principles the 2026 MRM Guidance still expects and FDA 510(k) examiner readiness.",
  keywords: [
    "AI audit trail platform",
    "AI agent audit trail",
    "AI governance platform",
    "2026 MRM Guidance AI",
    "FDA 510(k) AI platform",
    "tamper-evident AI logs",
    "AI examiner console",
    "regulated AI agents",
  ],
  alternates: {
    canonical: "/platform",
  },
};

type Product = {
  id: string;
  numeral: string;
  hook: string;
  name: string;
  tagline: string;
  // Array of paragraphs. Keep each one to 2-3 sentences max.
  description: string[];
  regulator: string;
  artifact: string;
  pricingBand: string;
};

const PRODUCTS: Product[] = [
  {
    id: "agentguard",
    numeral: "I.",
    hook: "Pre-deployment",
    name: "AgentGuard",
    tagline: "The CI/CD scanner for AI agents.",
    description: [
      "AgentGuard wires into your build pipeline and runs adversarial checks every time a model or prompt changes. It detects prompt-injection paths, PII leakage, jailbreak surfaces and policy violations before an agent reaches production.",
      "Output is a deploy-gate decision and a machine-readable report.",
    ],
    regulator: "2026 MRM Guidance §IV (model development & use), NIST AI RMF GOVERN-2.1",
    artifact: "Pre-deployment validation report (PDF + JSON)",
    pricingBand: "$60K-$120K annual seat",
  },
  {
    id: "audit-trail",
    numeral: "II.",
    hook: "Runtime",
    name: "Audit Trail",
    tagline: "The spine. Every agent action, captured with full context.",
    description: [
      "An SDK and dashboard that capture every input, feature snapshot, decision and outcome. The data structure was designed to satisfy the surviving outcomes-analysis and ongoing-monitoring expectations and FDA's algorithm change protocol expectations.",
      "This is the substrate every other Caventia product reads from.",
    ],
    regulator: "2026 MRM Guidance §V (validation & monitoring), FDA PCCP, ECOA §1002.9",
    artifact: "Queryable runtime log with examiner-mode export",
    pricingBand: "$120K-$250K platform + per-event scaling",
  },
  {
    id: "passport",
    numeral: "III.",
    hook: "Governance documentation",
    name: "Compliance Passport",
    tagline: "Auto-assembled regulator packs. No more spreadsheet glue.",
    description: [
      "The Passport reads from the Audit Trail and emits the model risk pack examiners still expect: model identity documentation, validation reports, ECOA disparate-impact analysis, NIST AI RMF mapping, NYC Local Law 144 disclosures.",
      "The artifacts ship as PDFs with full evidence links back to the audit log.",
    ],
    regulator: "2026 MRM Guidance §VII (vendor/third-party), ECOA, NYC LL 144, NIST AI RMF",
    artifact: "Examiner-defensible model risk pack",
    pricingBand: "$80K-$150K annual",
  },
  {
    id: "bridge",
    numeral: "IV.",
    hook: "Third-party sign-off",
    name: "Auditor Bridge",
    tagline: "Productized model validation. Structurally independent.",
    description: [
      "Banks still need independent model validation under the surviving principles. Today, that means a $500K Big 4 engagement and six months of waiting.",
      "Auditor Bridge runs as a separately-incorporated entity (Caventia Audit Services LLC) with its own management chain, P&L and quality control function. Auditor compensation is flat-fee and not tied to validation outcome.",
      "The four pillars (functional, organizational, compensation and knowledge independence) are documented in a public independence policy. Cycles shrink from quarters to weeks while the independence standard goes up, not down.",
    ],
    regulator: "2026 MRM Guidance §VI (governance & controls), Interagency Third-Party Risk Guidance (June 2023)",
    artifact: "Signed validator opinion, liability rider and independence attestation",
    pricingBand: "$40K-$80K per validation",
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <Marginalia numeral="II" position="top-right" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <SectionLabel>Platform</SectionLabel>
          <h1
            className="font-display font-normal text-ink mt-6 max-w-[920px]"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 120, "SOFT" 30',
            }}
          >
            One platform. Four artifacts. A single audit-trail spine.
          </h1>
          <p className="type-body-lg mt-8 max-w-[640px] text-ink-mute font-light">
            Caventia is a vertical AI governance platform. The four products
            share one data model, one identity layer and one evidence ledger -
            so the artifact your OCC examiner reads is the same artifact your
            auditor countersigns.
          </p>
        </div>
      </section>

      {/* Spine diagram - visual anchor */}
      <SpineDiagram />

      {/* Per-product detail */}
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32">
          <SectionLabel numeral="V.">The four products</SectionLabel>
          <h2 className="type-display-md mt-6 max-w-[820px] mb-16">
            What each surface ships and which regulator hook it satisfies.
          </h2>

          <div className="flex flex-col gap-20">
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 pb-20 border-b border-rule last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-display italic text-[28px] text-accent font-medium leading-none mb-2">
                    {p.numeral}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-mute">
                    {p.hook}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[32px] md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] mb-3 text-ink">
                    {p.name}
                  </h3>
                  <p className="font-display italic text-[20px] md:text-[22px] text-ink-mute mb-6 leading-[1.35]">
                    {p.tagline}
                  </p>
                  <div className="mb-8 max-w-[640px] space-y-4">
                    {p.description.map((para, idx) => (
                      <p
                        key={idx}
                        className="font-body text-[16px] md:text-[17px] text-ink leading-[1.65]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-rule">
                    <div>
                      <dt className="type-label mb-2">Regulator hook</dt>
                      <dd className="font-mono text-[13px] text-ink leading-[1.5]">
                        {p.regulator}
                      </dd>
                    </div>
                    <div>
                      <dt className="type-label mb-2">Artifact</dt>
                      <dd className="font-body text-[14px] text-ink leading-[1.5]">
                        {p.artifact}
                      </dd>
                    </div>
                    <div>
                      <dt className="type-label mb-2">Pricing band</dt>
                      <dd className="font-mono text-[13px] text-ink leading-[1.5]">
                        {p.pricingBand}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32 text-center">
          <SectionLabel numeral="VI.">Walk through this</SectionLabel>
          <h2 className="type-display-md mt-6 max-w-[640px] mx-auto">
            Want to walk through the platform with the founder?
          </h2>
          <p className="type-body-lg mt-6 max-w-[560px] mx-auto text-ink-mute font-light">
            Thirty minutes. No deck, no sales engineer. Just the architecture,
            your specific regulator pain and a real conversation about whether
            Caventia fits.
          </p>
          <div className="mt-10">
            <LinkButton href="/contact" variant="primary">
              Talk to the founder
            </LinkButton>
          </div>
          <p className="mt-6 font-mono text-[12px] tracking-[0.06em] text-ink-light">
            Prefer to read first?{" "}
            <Link href="/sr117" className="text-accent border-b border-accent">
              AI Agents After SR 11-7
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
