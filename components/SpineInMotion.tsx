export default function SpineInMotion() {
  return (
    <section className="relative bg-parchment border-b border-rule">
      <div className="relative max-w-[1080px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
          <p
            className="font-body font-medium uppercase text-ink-mute inline-flex items-center gap-2.5 mb-5"
            style={{ fontSize: "11px", letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="w-6 h-px bg-accent" />
            Watch the spine work
            <span aria-hidden="true" className="w-6 h-px bg-accent" />
          </p>
          <h2
            className="font-display font-normal text-ink mx-auto mb-6"
            style={{
              fontSize: "clamp(30px, 4.5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontVariationSettings: '"opsz" 96, "SOFT" 30',
            }}
          >
            One decision.{" "}
            <em
              className="italic text-accent"
              style={{
                fontVariationSettings:
                  '"opsz" 96, "SOFT" 100, "WONK" 1',
              }}
            >
              Four artifacts.
            </em>
          </h2>
          <p
            className="font-display italic text-ink-mute mx-auto"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              fontVariationSettings: '"opsz" 36, "SOFT" 30',
            }}
          >
            Forty seconds. Watch a single agent decision become four
            regulator-ready documents through the audit-trail spine.
          </p>
        </div>

        <figure className="max-w-[920px] mx-auto">
          <div className="border border-rule bg-ink overflow-hidden">
            <video
              className="block w-full h-auto"
              src="/animations/spine/spine-in-motion.mp4"
              poster="/animations/spine/spine-in-motion-poster.jpg"
              controls
              preload="metadata"
              playsInline
              aria-label="The spine in motion: one agent decision becomes four examiner-ready artifacts"
              aria-describedby="spine-in-motion-transcript-link"
            >
              Your browser does not support embedded video. The animation shows
              an agent processing a loan application, the decision landing as a
              row in the audit-trail spine, and four artifacts assembling from
              that single row: model card, validation report, NIST AI RMF
              mapping and examiner pack.
            </video>
          </div>
          <a
            id="spine-in-motion-transcript-link"
            href="/animations/spine/spine-in-motion.vtt"
            className="sr-only focus:not-sr-only focus:underline text-accent text-xs"
          >
            Read transcript (Spine in motion, WebVTT)
          </a>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-mute">
            <span>One decision becomes four artifacts</span>
            <span aria-hidden="true">0:38</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
