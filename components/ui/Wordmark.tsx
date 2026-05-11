import Link from "next/link";
import { Sigil } from "@/components/ui/Sigil";

type Variant = "nav" | "display" | "footer";

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
};

/**
 * Caventia wordmark. v2 pairs a custom geometric sigil (circle + C +
 * Pompeii red spine bar) with lowercase Fraunces "caventia."
 *
 * - `nav` — small (sigil 22px + 22px Fraunces text).
 * - `display` — large (sigil 32px + clamp(40px, 5vw, 56px) text), used on /about hero.
 * - `footer` — parchment-tinted variant for the deep-ink footer (sigil 28px + 28px text).
 */
export function Wordmark({ variant = "nav", href = "/", className = "" }: Props) {
  let sigilSize = 22;
  let textSize = "22px";
  let textColor = "text-ink";

  if (variant === "display") {
    sigilSize = 32;
    textSize = "clamp(40px, 5vw, 56px)";
    textColor = "text-ink";
  } else if (variant === "footer") {
    sigilSize = 28;
    textSize = "28px";
    textColor = "text-parchment/85";
  }

  const inner = (
    <span
      className={`inline-flex items-center gap-[10px] font-display font-medium tracking-[-0.02em] ${textColor} ${className}`}
      style={{ fontSize: textSize, lineHeight: 1 }}
    >
      <Sigil size={sigilSize} inverse={variant === "footer"} />
      <span>caventia</span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label="Caventia — home" className="inline-flex">
      {inner}
    </Link>
  );
}
