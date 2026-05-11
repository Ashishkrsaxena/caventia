"use client";

import { useEffect, useRef, useState } from "react";
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

// Reveal order per design system §6:
// spine first, then top-left → top-right → bottom-left → bottom-right.
const NODE_DELAYS = {
  topLeft: 1200,
  topRight: 1400,
  bottomLeft: 1600,
  bottomRight: 1800,
} as const;

function SpineNode({
  node,
  side,
  delay,
  revealed,
}: {
  node: Node;
  side: "left" | "right";
  delay: number;
  revealed: boolean;
}) {
  return (
    <div
      className="relative bg-paper border border-rule rounded-[2px] p-7 transition-all duration-[400ms] ease-out"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(8px)",
        transitionDelay: revealed ? `${delay}ms` : "0ms",
      }}
    >
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
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — reveal immediately, skip the animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      // 30% rather than the 60% suggested in design system §6 — at 60% the
      // container is taller than the viewport on mobile and never fires.
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

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

        <div ref={ref} className="mt-16 md:mt-20 flex justify-center">
          <div className="w-full max-w-[880px] grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-6 md:gap-0 items-center">
            <div className="flex flex-col gap-8">
              <SpineNode
                node={LEFT_NODES[0]}
                side="left"
                delay={NODE_DELAYS.topLeft}
                revealed={revealed}
              />
              <SpineNode
                node={LEFT_NODES[1]}
                side="left"
                delay={NODE_DELAYS.bottomLeft}
                revealed={revealed}
              />
            </div>

            {/* Spine line — desktop only; draws downward over 1200ms */}
            <div className="hidden md:flex justify-center self-stretch relative">
              <div className="relative w-[3px] h-full">
                {/* Static background placeholder so layout doesn't jump */}
                <div className="absolute inset-0 w-[3px] bg-ink/0" />
                {/* The drawing line */}
                <div
                  className="absolute top-0 left-0 w-[3px] bg-ink transition-[height] duration-[1200ms] ease-out origin-top"
                  style={{ height: revealed ? "100%" : "0%" }}
                />
                {/* Pompeii red overlay, draws in sync */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-accent opacity-60 transition-[height] duration-[1200ms] ease-out"
                  style={{ height: revealed ? "100%" : "0%" }}
                />
                {/* Label appears after spine completes */}
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] origin-center bg-parchment px-2.5 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute whitespace-nowrap transition-opacity duration-[300ms]"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transitionDelay: revealed ? "1000ms" : "0ms",
                  }}
                >
                  audit log
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <SpineNode
                node={RIGHT_NODES[0]}
                side="right"
                delay={NODE_DELAYS.topRight}
                revealed={revealed}
              />
              <SpineNode
                node={RIGHT_NODES[1]}
                side="right"
                delay={NODE_DELAYS.bottomRight}
                revealed={revealed}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
