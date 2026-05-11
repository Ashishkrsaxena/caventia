import { ImageResponse } from "next/og";

export const runtime = "edge";

// Fonts are served as static assets from /public/fonts and fetched at request
// time. The Edge runtime caches the response so the network hit only happens
// on cold start.

async function loadFont(req: Request, path: string): Promise<ArrayBuffer> {
  const origin = new URL(req.url).origin;
  const res = await fetch(`${origin}${path}`);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.arrayBuffer();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Caventia";
  const desc =
    searchParams.get("desc") ??
    "The audit-trail spine for regulated AI agents.";

  let fonts:
    | Array<{
        name: string;
        data: ArrayBuffer;
        style?: "normal" | "italic";
        weight?: 400 | 500;
      }>
    | undefined;

  try {
    const [fraunces, newsreader] = await Promise.all([
      loadFont(request, "/fonts/Fraunces-Regular.ttf"),
      loadFont(request, "/fonts/Newsreader-Regular.ttf"),
    ]);
    fonts = [
      { name: "Fraunces", data: fraunces, style: "normal", weight: 400 },
      { name: "Newsreader", data: newsreader, style: "normal", weight: 400 },
    ];
  } catch {
    // If fonts fail to load (e.g. local preview without fonts in /public),
    // fall back to system sans rather than 500.
    fonts = undefined;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F4ED",
          padding: "80px 96px",
          color: "#0F1116",
          fontFamily: fonts ? "Newsreader" : undefined,
        }}
      >
        {/* Top hairline + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 16, height: 2, background: "#8B2C2C" }} />
          <div
            style={{
              fontFamily: fonts ? "Newsreader" : undefined,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            caventia
          </div>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: fonts ? "Fraunces" : undefined,
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
              fontWeight: 400,
            }}
          >
            {title}
          </div>
          {desc && (
            <div
              style={{
                fontFamily: fonts ? "Newsreader" : undefined,
                fontSize: 28,
                fontWeight: 400,
                color: "#5C5852",
                marginTop: 36,
                maxWidth: 900,
                lineHeight: 1.4,
              }}
            >
              {desc}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: fonts ? "Newsreader" : undefined,
            fontSize: 16,
            color: "#5C5852",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderTop: "1px solid #D4CFC4",
            paddingTop: 24,
          }}
        >
          <span>Vertical AI Governance</span>
          <span>caventia.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(fonts ? { fonts } : {}),
    }
  );
}
