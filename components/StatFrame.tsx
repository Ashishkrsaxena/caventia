type Props = {
  number: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
};

/**
 * v2 stat frame — 2px ink rules top and bottom with ❦ ornaments at
 * center-top and center-bottom. Massive 200px display numeral on the
 * left, headline + italic caption on the right. Reads as a document
 * specimen page rather than a marketing stat.
 */
export default function StatFrame({ number, title, body }: Props) {
  return (
    <section className="relative z-[2] bg-parchment">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div
          className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-20 items-center max-w-[920px] mx-auto"
          style={{
            padding: "64px 0",
            borderTop: "2px solid var(--color-ink)",
            borderBottom: "2px solid var(--color-ink)",
          }}
        >
          {/* ❦ ornaments */}
          <span
            aria-hidden="true"
            className="absolute font-display text-accent bg-parchment px-3"
            style={{
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "20px",
            }}
          >
            ❦
          </span>
          <span
            aria-hidden="true"
            className="absolute font-display text-accent bg-parchment px-3"
            style={{
              bottom: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "20px",
            }}
          >
            ❦
          </span>

          <div
            className="font-display font-normal text-accent text-center md:text-left"
            style={{
              fontSize: "clamp(96px, 16vw, 200px)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            {number}
          </div>
          <div className="text-center md:text-left">
            <h3
              className="font-display font-medium text-ink mb-4"
              style={{
                fontSize: "28px",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
              }}
            >
              {title}
            </h3>
            <p
              className="font-display italic text-ink-mute"
              style={{
                fontSize: "16px",
                lineHeight: 1.5,
                fontVariationSettings: '"opsz" 24, "SOFT" 50',
              }}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
