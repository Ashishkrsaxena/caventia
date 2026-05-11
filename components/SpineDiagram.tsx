import { SectionLabel } from "@/components/ui/SectionLabel";

type Node = {
  hook: string;
  name: string;
  description: string;
};

const LEFT_NODES: Node[] = [
  {
    hook: "CI/CD scan",
    name: "AgentGuard",
    description:
      "Detects prompt injection, PII leakage, jailbreak paths before agents reach production.",
  },
  {
    hook: "Governance doc",
    name: "Compliance Passport",
    description:
      "Auto-assembles the SR 11-7 model risk pack, ECOA disparate impact report, NIST AI RMF mapping.",
  },
];

const RIGHT_NODES: Node[] = [
  {
    hook: "Runtime log",
    name: "Audit Trail",
    description:
      "SDK + dashboard capturing every agent action with full feature snapshots. The data spine for everything else.",
  },
  {
    hook: "Certified sign-off",
    name: "Auditor Bridge",
    description:
      "Independent third-party model validation with liability coverage. Built for SR 11-7 examiner readiness.",
  },
];

function SpineNode({
  node,
  side,
}: {
  node: Node;
  side: "left" | "right";
}) {
  return (
    <div className="relative bg-paper border border-rule rounded-[2px] p-7">
      {/* Connecting horizontal hairline to the spine — hidden on mobile */}
      <span
        aria-hidden="true"
        className={`hidden md:block absolute top-1/2 w-[60px] h-px bg-rule-strong ${
          side === "left" ? "-right-[60px]" : "-left-[60px]"
        }`}
      />
      <p className="font-mono text-[11px] tracking-[0.10em] uppercase text-accent mb-2">
        {node.hook}
      </p>
      <h3 className="font-display text-[22px] font-medium leading-tight tracking-[-0.01em] text-ink mb-2">
        {node.name}
      </h3>
      <p className="text-[14px] leading-[1.5] text-ink-mute font-body">
        {node.description}
      </p>
    </div>
  );
}

export default function SpineDiagram() {
  return (
    <section className="bg-parchment relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32">
        <SectionLabel numeral="III.">The architecture</SectionLabel>

        <h2 className="type-display-md mt-6 max-w-[820px]">
          One platform. Four artifacts. A single audit-trail spine.
        </h2>

        <p className="type-body-lg mt-6 max-w-[640px] text-ink-mute font-light">
          Every AI decision flows through one capture layer — the audit log.
          From there, the four product surfaces share evidence, share schema,
          and produce regulator-ready artifacts without manual stitching.
        </p>

        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="w-full max-w-[880px] grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-6 md:gap-0 items-center">
            <div className="flex flex-col gap-8">
              {LEFT_NODES.map((node) => (
                <SpineNode key={node.name} node={node} side="left" />
              ))}
            </div>

            {/* Spine line — desktop only */}
            <div className="hidden md:flex justify-center self-stretch relative">
              <div className="relative w-[3px] h-full bg-ink">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent opacity-60" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] origin-center bg-parchment px-2.5 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute whitespace-nowrap">
                  audit log
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {RIGHT_NODES.map((node) => (
                <SpineNode key={node.name} node={node} side="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
