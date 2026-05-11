import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Next.js App Router favicon convention. 32x32 PNG generated on demand
// from the locally-bundled Fraunces 144pt Regular TTF so the favicon
// matches the wordmark.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F4ED",
          color: "#0F1116",
          fontFamily: fontData ? "Fraunces" : "serif",
          fontSize: 30,
          fontWeight: 400,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          paddingBottom: 2,
        }}
      >
        c
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
