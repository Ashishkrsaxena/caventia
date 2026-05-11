import type { CSSProperties } from "react";

type Props = {
  numeral: string;
  position: "top-left" | "top-right" | "top-right-hero";
  className?: string;
};

/**
 * Massive faded italic Roman numeral used as section marginalia. Sits in
 * the gutter, breaks the grid, gives each section the feel of a numbered
 * chapter in a document. Pure decoration - pointer-events disabled,
 * user-select disabled.
 *
 * Sizes scale down on mobile so we don't blow out the layout. Parent
 * container should be `relative` and ideally `overflow-hidden`.
 */
export default function Marginalia({ numeral, position, className = "" }: Props) {
  const base: CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 300,
    fontStyle: "italic",
    lineHeight: 0.85,
    letterSpacing: "-0.05em",
    color: "var(--color-rule-soft)",
    pointerEvents: "none",
    userSelect: "none",
    position: "absolute",
    fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
  };

  let placement: CSSProperties = {};
  let sizeClass = "";

  if (position === "top-right-hero") {
    placement = { top: "60px", right: "-40px" };
    // Hero numeral is bigger: 260px on mobile → 480px on desktop
    sizeClass = "text-[260px] md:text-[360px] lg:text-[480px]";
  } else if (position === "top-right") {
    placement = { top: "60px", right: "-60px" };
    sizeClass = "text-[220px] md:text-[280px] lg:text-[360px]";
  } else {
    // top-left
    placement = { top: "60px", left: "-60px" };
    sizeClass = "text-[220px] md:text-[280px] lg:text-[360px]";
  }

  return (
    <span
      aria-hidden="true"
      style={{ ...base, ...placement }}
      className={`${sizeClass} ${className}`}
    >
      {numeral}
    </span>
  );
}
