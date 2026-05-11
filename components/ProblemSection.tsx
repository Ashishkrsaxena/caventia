import Marginalia from "@/components/Marginalia";

const PROBLEMS = [
  {
    numeral: "I.",
    title: "Horizontal tools, vertical regulators",
    body: 'Credo AI, Fiddler, Arthur - none of them ship the SR 11-7 model risk documentation pack an OCC examiner expects. They were built for "AI governance" in the abstract.',
  },
  {
    numeral: "II.",
    title: "Audit logs that aren't audit logs",
    body: "Most AI observability tools capture latency and cost. None capture the feature snapshots and decision metadata that an SR 11-7 reconstruction requires.",
  },
  {
    numeral: "III.",
    title: "No certified human in the loop",
    body: "Banks need third-party model validation under SR 11-7. There is no productized auditor network for AI agents - you hire a Big 4 consulting team at $500K and wait six months.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-paper border-y border-rule z-[2]">
      <Marginalia numeral="II" position="top-right" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <p
          className="font-body font-medium uppercase text-ink-mute inline-flex items-center gap-2.5 mb-5"
          style={{ fontSize: "11px", letterSpacing: "0.18em" }}
        >
          <span aria-hidden="true" className="w-6 h-px bg-accent" />
          The compliance gauntlet
        </p>

        <h2
          className="font-display font-normal text-ink mb-10 max-w-[880px]"
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontVariationSettings: '"opsz" 96, "SOFT" 30',
          }}
        >
          A four-step gauntlet, stitched together with spreadsheets.
        </h2>

        <p
          className="font-display italic text-ink-mute max-w-[680px]"
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            fontVariationSettings: '"opsz" 36, "SOFT" 30',
          }}
        >
          Pre-deploy security scan. Runtime audit logging. Governance
          documentation. Third-party sign-off. Today, each step is a separate
          vendor, a separate workflow and a separate gap in the model risk
          file your examiner is going to read.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-24 relative z-[2]">
          {PROBLEMS.map((p) => (
            <div key={p.numeral} className="pt-9 border-t-2 border-ink relative">
              <p
                className="font-display italic font-normal text-accent leading-none mb-4"
                style={{
                  fontSize: "56px",
                  fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
                }}
              >
                {p.numeral}
              </p>
              <h3
                className="font-display font-medium text-ink mb-4"
                style={{
                  fontSize: "26px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.015em",
                  fontVariationSettings: '"opsz" 36, "SOFT" 30',
                }}
              >
                {p.title}
              </h3>
              <p
                className="font-body text-ink-mute"
                style={{ fontSize: "16px", lineHeight: 1.55 }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
