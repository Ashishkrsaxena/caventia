import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Apple touch icon, 180x180. Includes the Pompeii red accent rule
// above the wordmark "c" — visible at this size where the favicon
// version omits it for legibility.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fontPath = join(process.cwd(), "public", "fonts", "Fraunces-Regular.ttf");
  let fontData: Buffer | undefined;
  try {
    fontData = await readFile(fontPath);
  } catch {
    // Fallback to system serif if font missing.
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F4ED",
          color: "#0F1116",
          fontFamily: fontData ? "Fraunces" : "serif",
        }}
      >
        {/* Accent rule */}
        <div
          style={{
            width: 24,
            height: 4,
            background: "#8B2C2C",
            marginBottom: 14,
          }}
        />
        {/* Wordmark "c" */}
        <div
          style={{
            fontSize: 130,
            fontWeight: 400,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            paddingBottom: 16,
          }}
        >
          c
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Fraunces",
                data: fontData,
                style: "normal",
                weight: 400,
              },
            ],
          }
        : {}),
    }
  );
}
