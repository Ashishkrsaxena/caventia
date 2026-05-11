import { SectionLabel } from "@/components/ui/SectionLabel";

const PROBLEMS = [
  {
    numeral: "I.",
    title: "Horizontal tools, vertical regulators",
    body: "Credo AI, Fiddler, Arthur — none of them ship the SR 11-7 model risk documentation pack an OCC examiner expects. They were built for “AI governance” in the abstract.",
  },
  {
    numeral: "II.",
    title: "Audit logs that aren't audit logs",
    body: "Most AI observability tools capture latency and cost. None capture the feature snapshots and decision metadata that an SR 11-7 reconstruction requires.",
  },
  {
    numeral: "III.",
    title: "No certified human in the loop",
    body: "Banks need third-party model validation under SR 11-7. There is no productized auditor network for AI agents — you hire a Big 4 consulting team at $500K and wait six months.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-paper border-t border-rule">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32">
        <SectionLabel numeral="II.">The compliance gauntlet</SectionLabel>

        <h2 className="type-display-md mt-6 max-w-[820px]">
          Banks deploying AI agents face a four-step compliance gauntlet. Most
          are gluing it together with spreadsheets.
        </h2>

        <p className="type-body-lg mt-6 max-w-[640px] text-ink-mute font-light">
          Pre-deploy security scan. Runtime audit logging. Governance
          documentation. Third-party sign-off. Today, each step is a separate
          vendor, a separate workflow, and a separate gap in the model risk
          file your examiner is going to read.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-20">
          {PROBLEMS.map((p) => (
            <div key={p.numeral} className="pt-8 border-t border-rule">
              <p className="font-display italic text-[28px] text-accent font-medium leading-none mb-3">
                {p.numeral}
              </p>
              <h3 className="font-display text-[22px] font-medium leading-tight text-ink mb-3">
                {p.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-mute font-body">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
