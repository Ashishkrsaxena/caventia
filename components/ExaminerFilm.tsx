import Link from "next/link";

export default function ExaminerFilm() {
  return (
    <section className="relative bg-ink text-parchment border-t border-ink overflow-hidden">
      <div className="relative max-w-[1080px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center max-w-[720px] mx-auto mb-12 md:mb-16">
          <p
            className="font-body font-medium uppercase inline-flex items-center gap-2.5 mb-5"
            style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#C4948E" }}
          >
            <span aria-hidden="true" className="w-6 h-px" style={{ background: "#C4948E" }} />
            The closing argument
            <span aria-hidden="true" className="w-6 h-px" style={{ background: "#C4948E" }} />
          </p>
          <h2
            className="font-display font-normal mx-auto mb-6"
            style={{
              fontSize: "clamp(30px, 4.5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontVariationSettings: '"opsz" 96, "SOFT" 30',
              color: "#F5F1E8",
            }}
          >
            What the examiner{" "}
            <em
              className="italic"
              style={{
                fontVariationSettings:
                  '"opsz" 96, "SOFT" 100, "WONK" 1',
                color: "#C4948E",
              }}
            >
              sees.
            </em>
          </h2>
          <p
            className="font-display italic mx-auto"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              fontVariationSettings: '"opsz" 36, "SOFT" 30',
              color: "rgba(245, 241, 232, 0.72)",
            }}
          >
            Same incident, two artifacts. The OCC examiner walks in and asks
            how the agent decided. What you hand them tells the whole story.
          </p>
        </div>

        <figure className="max-w-[960px] mx-auto">
          <div className="border overflow-hidden" style={{ borderColor: "#3D362C", background: "#0A0907" }}>
            <video
              className="block w-full h-auto"
              src="/animations/examiner/examiner-sees.mp4"
              poster="/animations/examiner/examiner-sees-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="The examiner walks in: chat transcript bounces, Caventia decision record gets stamped"
              aria-describedby="examiner-sees-transcript-link"
            >
              Your browser does not support embedded video. The fifteen-second
              animation contrasts what an OCC examiner reviews today (a chat
              transcript with no metadata) with what they review when Caventia
              is in place (a decision record with prompt hash, version,
              behavioral envelope and tool-call trace).
            </video>
          </div>
          <a
            id="examiner-sees-transcript-link"
            href="/animations/examiner/examiner-sees.vtt"
            className="sr-only focus:not-sr-only focus:underline text-[#C4948E] text-xs"
          >
            Read transcript (What the examiner sees, WebVTT)
          </a>
          <figcaption
            className="mt-4 flex items-baseline justify-between gap-4 font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.16em", color: "rgba(245, 241, 232, 0.55)" }}
          >
            <span>Same incident, two artifacts</span>
            <span aria-hidden="true">0:15 <span style={{ color: "rgba(245, 241, 232, 0.32)" }}>· silent loop</span></span>
          </figcaption>
        </figure>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-[10px] border px-8 py-[16px] font-body font-medium text-[15px] tracking-[0.01em] rounded-[2px] transition-colors"
            style={{
              borderColor: "rgba(245, 241, 232, 0.4)",
              color: "#F5F1E8",
            }}
          >
            <span>Talk to the founder</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
