import type { ReactNode } from "react";

type Props = {
  number: ReactNode;
  label: ReactNode;
  className?: string;
};

export function PullStat({ number, label, className = "" }: Props) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span
        className="font-display text-accent leading-none tracking-[-0.04em] font-normal"
        style={{ fontSize: "clamp(64px, 9vw, 96px)" }}
      >
        {number}
      </span>
      <span className="block text-[15px] text-ink-mute font-body max-w-[320px] mt-4 leading-[1.45]">
        {label}
      </span>
    </div>
  );
}
