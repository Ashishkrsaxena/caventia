import { ImageResponse } from "next/og";

export const runtime = "edge";

// NOTE: OG image currently renders with Satori's default sans-serif.
// To match the brand exactly (Fraunces + Newsreader), drop the .ttf
// files into /public/fonts and fetch via `new URL(...)` then pass to
// the `fonts` array on ImageResponse. Skipping for MVP — system sans
// still renders parchment + Pompeii red on-brand at a glance.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Caventia";
  const desc =
    searchParams.get("desc") ??
    "The audit-trail spine for regulated AI agents.";

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
        }}
      >
        {/* Top hairline + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 16, height: 2, background: "#8B2C2C" }} />
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
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
              fontSize: 78,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
              fontWeight: 500,
            }}
          >
            {title}
          </div>
          {desc && (
            <div
              style={{
                fontSize: 28,
                fontWeight: 300,
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
    }
  );
}
