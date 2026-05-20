"use client";

import { useEffect, useRef, useState } from "react";

type Node = {
  num: string;
  hook: string;
  name: string;
  description: string;
  regulator: string;
};

const LEFT_NODES: Node[] = [
  {
    num: "I.",
    hook: "CI/CD scan",
    name: "AgentGuard",
    description:
      "Detects prompt injection, PII leakage, jailbreak paths before agents reach production.",
    regulator: "→ Pre-deployment readiness",
  },
  {
    num: "III.",
    hook: "Governance documentation",
    name: "Compliance Passport",
    description:
      "Auto-assembles the model risk pack examiners still expect, ECOA disparate impact report, NIST AI RMF mapping.",
    regulator: "→ Examiner-defensible artifacts",
  },
];

const RIGHT_NODES: Node[] = [
  {
    num: "II.",
    hook: "Runtime capture",
    name: "Audit Trail",
    description:
      "SDK + dashboard capturing every agent action with full feature snapshots. The data spine for everything else.",
    regulator: "→ Full reconstruction",
  },
  {
    num: "IV.",
    hook: "Certified sign-off",
    name: "Auditor Bridge",
    description:
      "Independent third-party model validation with liability coverage. Built for the independence and effective challenge principles examiners still expect.",
    regulator: "→ Independent attestation",
  },
];

// Seven vertebrae, two of them "active" (highlighted in accent red).
const VERTEBRAE = [
  { label: "I", active: false },
  { label: "II", active: true },
  { label: "III", active: false },
  { label: "IV", active: false },
  { label: "V", active: false },
  { label: "VI", active: true },
  { label: "VII", active: false },
];

function SpineNode({
  node,
  side,
  revealed,
  delay,
}: {
  node: Node;
  side: "left" | "right";
  revealed: boolean;
  delay: number;
}) {
  return (
    <div
      className={`group relative flex flex-col bg-parchment border border-rule transition-all duration-300 hover:bg-paper hover:border-accent hover:-translate-y-0.5 ${
        side === "left" ? "text-right" : "text-left"
      }`}
      style={{
        padding: "32px 36px 28px",
        minHeight: "180px",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 400ms ease ${delay}ms, transform 400ms ease ${delay}ms, background-color 300ms ease, border-color 300ms ease`,
      }}
    >
      {/* Connector hairline to the spine - desktop only, longer + softer in v3 */}
      <span
        aria-hidden="true"
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-ink opacity-40 transition-[width] duration-[600ms] ease-out ${
          side === "left" ? "-right-[84px]" : "-left-[84px]"
        }`}
        style={{ width: revealed ? "84px" : "0px" }}
      />

      {/* Roman numeral floats above the node as a paper-bg tab */}
      <span
        className={`absolute font-display italic font-medium text-accent bg-paper ${
          side === "left" ? "right-9" : "left-9"
        }`}
        style={{
          top: "-14px",
          fontSize: "17px",
          letterSpacing: "0.05em",
          padding: "0 12px",
          lineHeight: 1.6,
          fontVariationSettings: '"opsz" 36, "SOFT" 100, "WONK" 1',
        }}
      >
        {node.num}
      </span>

      <div
        className="font-mono uppercase text-ink-mute mb-3.5"
        style={{ fontSize: "10px", letterSpacing: "0.18em" }}
      >
        {node.hook}
      </div>
      <div
        className="font-display font-medium text-ink mb-2.5"
        style={{
          fontSize: "28px",
          letterSpacing: "-0.015em",
          fontVariationSettings: '"opsz" 48, "SOFT" 30',
        }}
      >
        {node.name}
      </div>
      <div
        className="font-body text-ink-mute"
        style={{ fontSize: "14.5px", lineHeight: 1.55 }}
      >
        {node.description}
      </div>
      <div
        className="font-mono uppercase text-accent mt-4 pt-3.5 border-t border-rule"
        style={{ fontSize: "10px", letterSpacing: "0.1em" }}
      >
        {node.regulator}
      </div>
    </div>
  );
}

function Vertebra({
  label,
  active,
  revealed,
  index,
}: {
  label: string;
  active: boolean;
  revealed: boolean;
  index: number;
}) {
  return (
    <div
      className={`relative z-[2] w-9 h-9 rounded-full flex items-center justify-center font-display italic font-medium border-2 transition-all duration-300 ${
        active
          ? "bg-accent text-parchment border-accent"
          : "bg-paper text-ink border-ink"
      }`}
      style={{
        fontSize: "13px",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "scale(1)" : "scale(0.6)",
        transition: `opacity 300ms ease ${600 + index * 80}ms, transform 300ms ease ${600 + index * 80}ms`,
      }}
    >
      {/* Inner ring */}
      <span
        aria-hidden="true"
        className={`absolute inset-1 rounded-full border ${
          active ? "border-accent-soft" : "border-rule-strong"
        }`}
      />
      <span className="relative">{label}</span>
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section className="relative overflow-hidden bg-paper border-y border-rule z-[2]">
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-40">
        {/* Intro - centered */}
        <div className="text-center max-w-[720px] mx-auto mb-20 md:mb-24">
          <p
            className="font-body font-medium uppercase text-ink-mute inline-flex items-center gap-2.5 mb-5"
            style={{ fontSize: "11px", letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="w-6 h-px bg-accent" />
            The architecture
            <span aria-hidden="true" className="w-6 h-px bg-accent" />
          </p>
          <h2
            className="font-display font-normal text-ink mx-auto mb-8"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 96, "SOFT" 30',
            }}
          >
            One platform. Four artifacts. A single spine.
          </h2>
          <p
            className="font-display italic text-ink-mute mx-auto"
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              fontVariationSettings: '"opsz" 36, "SOFT" 30',
            }}
          >
            Every AI decision flows through one capture layer. From there,
            four product surfaces share evidence, share schema and produce
            regulator-ready artifacts without manual stitching.
          </p>
        </div>

        {/* Spine stage */}
        <div ref={ref} className="relative max-w-[1080px] mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_140px_1fr] items-stretch gap-6 md:gap-6">
            {/* Left side */}
            <div className="flex flex-col gap-7 justify-center">
              <SpineNode node={LEFT_NODES[0]} side="left" revealed={revealed} delay={0} />
              <SpineNode node={LEFT_NODES[1]} side="left" revealed={revealed} delay={200} />
            </div>

            {/* Spine bone with vertebrae - desktop only */}
            <div className="hidden md:flex flex-col items-center justify-around py-3 relative">
              {/* Vertical bone - SVG line that draws on reveal per design system §6 */}
              {revealed && (
                <svg
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 text-ink overflow-visible"
                  width="2"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 2 400"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="400"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="spine-draw"
                  />
                </svg>
              )}
              {/* Top label */}
              <span
                className="absolute left-1/2 -top-3 -translate-x-1/2 bg-paper px-2 py-1 border border-rule font-mono uppercase text-ink-mute z-[3] whitespace-nowrap"
                style={{ fontSize: "9px", letterSpacing: "0.2em" }}
              >
                audit&nbsp;log
              </span>
              {VERTEBRAE.map((v, idx) => (
                <Vertebra
                  key={`${v.label}-${idx}`}
                  label={v.label}
                  active={v.active}
                  revealed={revealed}
                  index={idx}
                />
              ))}
              {/* Bottom label */}
              <span
                className="absolute left-1/2 -bottom-3 -translate-x-1/2 bg-paper px-2 py-1 border border-rule font-mono uppercase text-ink-mute z-[3] whitespace-nowrap"
                style={{ fontSize: "9px", letterSpacing: "0.2em" }}
              >
                spine
              </span>
            </div>

            {/* Right side */}
            <div className="flex flex-col gap-7 justify-center">
              <SpineNode node={RIGHT_NODES[0]} side="right" revealed={revealed} delay={100} />
              <SpineNode node={RIGHT_NODES[1]} side="right" revealed={revealed} delay={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
