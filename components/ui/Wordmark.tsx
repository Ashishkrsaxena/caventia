import Link from "next/link";
import { Sigil } from "@/components/ui/Sigil";

type Variant = "nav" | "display" | "footer";

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
};

/**
 * Caventia wordmark. v3 pairs the architectural-column sigil with
 * lowercase Fraunces "caventia."
 *
 * - `nav` - sigil 14×22 + 22px Fraunces, gap 12px. Ink color.
 * - `display` - sigil 24×38 + clamp(40-56px) Fraunces. For oversized
 *    presentations (currently unused but kept symmetrical).
 * - `footer` - sigil 18×28 + 28px Fraunces, gap 14px. Parchment color
 *    on the deep-ink footer with terracotta sigil shaft for visibility.
 */
export function Wordmark({ variant = "nav", href = "/", className = "" }: Props) {
  if (variant === "footer") {
    const inner = (
      <span
        className={`inline-flex items-center gap-[14px] font-display font-medium tracking-[-0.02em] ${className}`}
        style={{
          fontSize: "28px",
          lineHeight: 1,
          color: "rgba(245,241,232,0.85)",
          fontVariationSettings: '"opsz" 48, "SOFT" 40',
        }}
      >
        <Sigil
          width={18}
          height={28}
          accentColor="#C4948E"
        />
        <span>caventia</span>
      </span>
    );
    return href ? (
      <Link href={href} aria-label="Caventia - home" className="inline-flex">
        {inner}
      </Link>
    ) : (
      inner
    );
  }

  if (variant === "display") {
    const inner = (
      <span
        className={`inline-flex items-center gap-[14px] font-display font-medium tracking-[-0.02em] text-ink ${className}`}
        style={{
          fontSize: "clamp(40px, 5vw, 56px)",
          lineHeight: 1,
          fontVariationSettings: '"opsz" 96, "SOFT" 40',
        }}
      >
        <Sigil width={24} height={38} />
        <span>caventia</span>
      </span>
    );
    return href ? (
      <Link href={href} aria-label="Caventia - home" className="inline-flex">
        {inner}
      </Link>
    ) : (
      inner
    );
  }

  // nav (default)
  const inner = (
    <span
      className={`inline-flex items-center gap-3 font-display font-medium tracking-[-0.02em] text-ink ${className}`}
      style={{
        fontSize: "22px",
        lineHeight: 1,
        fontVariationSettings: '"opsz" 36, "SOFT" 40',
      }}
    >
      <Sigil width={14} height={22} />
      <span>caventia</span>
    </span>
  );
  return href ? (
    <Link href={href} aria-label="Caventia - home" className="inline-flex">
      {inner}
    </Link>
  ) : (
    inner
  );
}
