import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  // v2: section labels lead with a 24px accent rule. `numeral` is kept for
  // backward compatibility but is now optional - marginalia handles the
  // chapter feel on most pages.
  numeral?: string;
  centered?: boolean;
  className?: string;
};

export function SectionLabel({
  children,
  numeral,
  centered = false,
  className = "",
}: Props) {
  return (
    <span
      className={`type-label inline-flex items-center gap-2.5 ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      <span aria-hidden="true" className="block w-6 h-px bg-accent" />
      {numeral && (
        <span
          className="font-body text-[12px] font-medium tracking-[0.32em] text-ink-mute"
        >
          {numeral}
        </span>
      )}
      <span>{children}</span>
      {centered && <span aria-hidden="true" className="block w-6 h-px bg-accent" />}
    </span>
  );
}
