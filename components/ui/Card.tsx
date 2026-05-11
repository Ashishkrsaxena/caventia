import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function Card({ children, className = "", as: Component = "div" }: CardProps) {
  return (
    <Component
      className={`bg-paper border border-rule rounded-[2px] p-8 ${className}`}
    >
      {children}
    </Component>
  );
}

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`font-display text-[24px] font-medium text-ink leading-tight mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export function CardHook({ children, className = "" }: CardTitleProps) {
  return (
    <p
      className={`font-mono text-[11px] tracking-[0.06em] uppercase text-accent mb-3 ${className}`}
    >
      {children}
    </p>
  );
}

export function CardDescription({ children, className = "" }: CardTitleProps) {
  return (
    <p className={`text-[15px] text-ink-mute leading-[1.55] font-body ${className}`}>
      {children}
    </p>
  );
}
