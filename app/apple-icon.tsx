import { ImageResponse } from "next/og";

// Apple touch icon, 180×180. Full column sigil with flutes visible at
// this size. Sigil at 90×128 centered on parchment, giving generous
// margin that still reads as iconographic rather than wordmark-y.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          width="90"
          height="128"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Capital */}
          <rect x="0" y="0" width="18" height="2" fill="#14110D" />
          {/* Shaft in Pompeii red */}
          <line
            x1="9"
            y1="3"
            x2="9"
            y2="21"
            stroke="#8B2C2C"
            strokeWidth="2"
            strokeLinecap="square"
          />
          {/* Fluting */}
          <line
            x1="6"
            y1="4"
            x2="6"
            y2="20"
            stroke="#14110D"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <line
            x1="12"
            y1="4"
            x2="12"
            y2="20"
            stroke="#14110D"
            strokeWidth="0.5"
            opacity="0.4"
          />
          {/* Base */}
          <rect x="0" y="22" width="18" height="2" fill="#14110D" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
