import Link from "next/link";

export default function ThreeLinesFilm() {
  return (
    <section id="three-lines" className="relative bg-paper border-b border-rule scroll-mt-24">
      <div className="relative max-w-[1080px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center max-w-[720px] mx-auto mb-12 md:mb-16">
          <p
            className="font-body font-medium uppercase text-ink-mute inline-flex items-center gap-2.5 mb-5"
            style={{ fontSize: "11px", letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="w-6 h-px bg-accent" />
            The argument in one minute
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
            Three lines.{" "}
            <em
              className="italic text-accent"
              style={{
                fontVariationSettings:
                  '"opsz" 96, "SOFT" 100, "WONK" 1',
              }}
            >
              One spine.
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
            The three-lines-of-defense framework has governed bank risk for
            fifteen years. The framework survives the move to AI agents. The
            workflows do not. Watch where it breaks, and what Caventia adds.
          </p>
        </div>

        <figure className="max-w-[960px] mx-auto">
          <div className="border border-rule bg-ink overflow-hidden">
            <video
              className="block w-full h-auto"
              src="/animations/three-lines/three-lines.mp4"
              poster="/animations/three-lines/three-lines-poster.jpg"
              controls
              preload="metadata"
              playsInline
              aria-label="Three lines, one spine: where the three-lines-of-defense framework strains under AI agents, and what Caventia bridges"
              aria-describedby="three-lines-transcript-link"
            >
              Your browser does not support embedded video. The animation walks
              through the three lines of defense as they govern traditional
              models, where each line strains under AI agents (first-line
              documentation, second-line validation, third-line audit), and how
              Caventia&apos;s audit-trail spine produces the artifact each line
              needs to keep working.
            </video>
          </div>
          <a
            id="three-lines-transcript-link"
            href="/animations/three-lines/three-lines.vtt"
            className="sr-only focus:not-sr-only focus:underline text-accent text-xs"
          >
            Read transcript (Three lines, one spine, WebVTT)
          </a>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-mute">
            <span>Three lines of defense, held together by one spine</span>
            <span aria-hidden="true">1:15</span>
          </figcaption>
        </figure>

        <div className="text-center mt-14">
          <Link
            href="#whitepaper-gate"
            className="font-body text-[14px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
          >
            Get the full whitepaper →
          </Link>
        </div>
      </div>
    </section>
  );
}
