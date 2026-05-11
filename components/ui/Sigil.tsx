type Props = {
  size?: number;
  className?: string;
  // For dark backgrounds, the outer circle + C glyph need to be light.
  inverse?: boolean;
};

/**
 * Caventia sigil — circle, lowercase "C" glyph, vertical Pompeii red spine
 * bar through the middle. The spine bar is the visual handshake to the
 * audit-trail spine metaphor that runs through the rest of the brand.
 */
export function Sigil({ size = 24, className = "", inverse = false }: Props) {
  const strokeColor = inverse ? "#F5F1E8" : "#14110D";
  return (
    <span
      className={`inline-block align-middle ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeOpacity={inverse ? 0.85 : 1}
        />
        <path
          d="M 17 6 A 7 7 0 1 0 17 18"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="square"
        />
        <line
          x1="12"
          y1="2"
          x2="12"
          y2="22"
          stroke="#8B2C2C"
          strokeWidth="1.4"
        />
      </svg>
    </span>
  );
}
