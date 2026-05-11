import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center px-7 py-[14px] text-[15px] font-medium tracking-[0.01em] rounded-[2px] transition-colors duration-200 ease-out leading-none whitespace-nowrap";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-parchment hover:bg-link-hover focus-visible:outline-offset-4",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-parchment",
  ghost:
    "bg-transparent text-ink hover:text-accent underline decoration-1 underline-offset-[6px] decoration-rule-strong hover:decoration-accent px-0 py-2",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

export function LinkButton({
  href,
  external,
  variant = "primary",
  className = "",
  children,
}: LinkButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
