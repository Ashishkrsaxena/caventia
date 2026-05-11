import Link from "next/link";

type Variant = "nav" | "display" | "footer";

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
};

/**
 * Caventia wordmark.
 *
 * - `nav`: small caps in Newsreader at 14px, accent rule above the first letter.
 *   This is the variant used in the top navigation per design system §5.1.
 * - `display`: lowercase Fraunces at display weight, used on `/about` hero and the footer.
 *   Accent rule appears above the "c".
 * - `footer`: parchment-colored display variant for the deep-ink footer.
 */
export function Wordmark({ variant = "nav", href = "/", className = "" }: Props) {
  const isNav = variant === "nav";
  const isFooter = variant === "footer";

  const content = isNav ? (
    <span
      className={`relative inline-block font-body text-[14px] font-medium tracking-[0.18em] uppercase text-ink ${className}`}
    >
      <span aria-hidden="true" className="absolute -top-[6px] left-0 w-[12px] h-[1.5px] bg-accent" />
      caventia
    </span>
  ) : (
    <span
      className={`relative inline-block font-display font-medium tracking-[-0.02em] ${
        isFooter ? "text-parchment" : "text-ink"
      } ${className}`}
      style={{ fontSize: variant === "display" ? "clamp(40px, 5vw, 56px)" : "32px" }}
    >
      <span
        aria-hidden="true"
        className={`absolute -top-[10px] left-0 w-[14px] h-[2px] ${
          isFooter ? "bg-accent-soft" : "bg-accent"
        }`}
      />
      caventia
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Caventia — home" className="inline-block">
      {content}
    </Link>
  );
}
