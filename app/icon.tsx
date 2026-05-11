import { ImageResponse } from "next/og";

// Next.js App Router favicon convention. 32×32 PNG rendered with the
// column sigil - the same architectural mark used in the nav wordmark.
// Flutes are dropped at this size (sub-pixel) and stroke widths bumped
// so the column shape reads cleanly at favicon scale.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F1E8",
        }}
      >
        <svg
          width="18"
          height="26"
          viewBox="0 0 18 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Capital */}
          <rect x="0" y="0" width="18" height="3" fill="#14110D" />
          {/* Shaft in Pompeii red */}
          <line
            x1="9"
            y1="4"
            x2="9"
            y2="22"
            stroke="#8B2C2C"
            strokeWidth="3"
            strokeLinecap="square"
          />
          {/* Base */}
          <rect x="0" y="23" width="18" height="3" fill="#14110D" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
