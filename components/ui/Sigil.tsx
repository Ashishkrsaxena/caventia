type Props = {
  width?: number;
  height?: number;
  className?: string;
  // CSS color for the column parts (capital, base, flutes). Defaults to currentColor.
  color?: string;
  // CSS color for the central vertical shaft (the "spine"). Pompeii red by default,
  // override to terracotta `--sigil-accent: #C4948E` on dark backgrounds.
  accentColor?: string;
};

/**
 * Caventia sigil - architectural column motif.
 *
 * Top + bottom horizontals form the capital and base of a classical
 * column. The central vertical shaft in Pompeii red is the spine motif
 * (the audit-trail spine, in logo form). Two thin flute lines flank the
 * shaft for restrained fluting.
 *
 * NOT a copyright symbol - the original C-with-vertical-bar mark read
 * exactly like © at small sizes; this column reads as architecture.
 *
 * Colors use `currentColor` and `var(--sigil-accent)` so the sigil
 * inherits per-context: ink on parchment in nav, parchment + terracotta
 * shaft in the deep-ink footer.
 */
export function Sigil({
  width = 14,
  height = 22,
  className = "",
  color,
  accentColor,
}: Props) {
  return (
    <span
      className={`inline-block align-middle shrink-0 ${className}`}
      style={{
        width,
        height,
        color,
        // @ts-expect-error - CSS custom prop
        "--sigil-accent": accentColor,
      }}
      aria-hidden="true"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Capital - top horizontal */}
        <rect x="0" y="0" width="18" height="2" fill="currentColor" />
        {/* Column shaft - the spine motif in accent */}
        <line
          x1="9"
          y1="3"
          x2="9"
          y2="21"
          stroke="var(--sigil-accent, #8B2C2C)"
          strokeWidth="2"
          strokeLinecap="square"
        />
        {/* Fluting */}
        <line
          x1="6"
          y1="4"
          x2="6"
          y2="20"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <line
          x1="12"
          y1="4"
          x2="12"
          y2="20"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {/* Base - bottom horizontal */}
        <rect x="0" y="22" width="18" height="2" fill="currentColor" />
      </svg>
    </span>
  );
}
