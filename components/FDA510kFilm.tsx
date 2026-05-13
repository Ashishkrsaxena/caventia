import Link from "next/link";

export default function FDA510kFilm() {
  return (
    <section id="fda-510k-film" className="relative bg-paper border-b border-rule scroll-mt-24">
      <div className="relative max-w-[1080px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center max-w-[720px] mx-auto mb-12 md:mb-16">
          <p
            className="font-body font-medium uppercase text-ink-mute inline-flex items-center gap-2.5 mb-5"
            style={{ fontSize: "11px", letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="w-6 h-px bg-accent" />
            The argument in forty seconds
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
            Substantial equivalence,{" "}
            <em
              className="italic text-accent"
              style={{
                fontVariationSettings:
                  '"opsz" 96, "SOFT" 100, "WONK" 1',
              }}
            >
              held still.
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
            The 510(k) pathway clears a new device by showing substantial
            equivalence to a cleared predicate. The framework was written for
            devices with fixed specifications. Watch what AI changes and what
            it takes to hold the comparison still.
          </p>
        </div>

        <figure className="max-w-[960px] mx-auto">
          <div className="border border-rule bg-ink overflow-hidden">
            <video
              className="block w-full h-auto"
              src="/animations/fda-510k/fda-510k.mp4"
              poster="/animations/fda-510k/fda-510k-poster.jpg"
              controls
              preload="metadata"
              playsInline
              aria-label="Substantial equivalence held still: how Caventia pins the FDA 510(k) comparison for AI-enabled medical devices"
              aria-describedby="fda-510k-transcript-link"
            >
              Your browser does not support embedded video. The animation
              compares a cleared predicate device with a new AI-enabled device
              across indication, technology, performance and safety, shows
              where the comparison strains because model weights update
              quarterly and then shows Caventia pinning the device to a
              specific model version with real-world performance evidence
              attached.
            </video>
          </div>
          <a
            id="fda-510k-transcript-link"
            href="/animations/fda-510k/fda-510k.vtt"
            className="sr-only focus:not-sr-only focus:underline text-accent text-xs"
          >
            Read transcript (Substantial equivalence held still, WebVTT)
          </a>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-mute">
            <span>One version pinned. One comparison held still.</span>
            <span aria-hidden="true">0:38</span>
          </figcaption>
        </figure>

        <div className="text-center mt-14">
          <Link
            href="#whitepaper-gate"
            className="font-body text-[14px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
          >
            Get the full FDA whitepaper →
          </Link>
        </div>
      </div>
    </section>
  );
}
