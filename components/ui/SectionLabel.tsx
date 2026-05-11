import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  numeral?: string; // e.g. "I.", "II."
  className?: string;
};

export function SectionLabel({ children, numeral, className = "" }: Props) {
  return (
    <span className={`type-label inline-flex items-baseline gap-3 ${className}`}>
      {numeral && (
        <span className="font-body text-[12px] font-medium tracking-[0.32em] text-ink-mute">
          {numeral}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
