import Link from "next/link";
import Marginalia from "@/components/Marginalia";

export default function Hero() {
  return (
    <section className="relative overflow-hidden z-[2]">
      <Marginalia numeral="I" position="top-right-hero" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-24 md:pb-32">
        {/* Latin epigraph */}
        <div
          className="anim-fade-in delay-100 relative pl-6 max-w-[540px] mb-12 md:mb-14"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "15px",
            color: "var(--color-ink-mute)",
            letterSpacing: "0.01em",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-px bg-accent"
          />
          <span
            className="text-accent mr-2 font-body uppercase font-medium not-italic"
            style={{ fontSize: "12px", letterSpacing: "0.15em" }}
          >
            Caventia · f.pl.
          </span>
          from Latin <i>cavēns, cavēre</i> — to be on guard, to take heed.
        </div>

        {/* Massive headline */}
        <h1
          className="anim-fade-up delay-200 font-display font-normal relative max-w-[1100px] mb-12 md:mb-12"
          style={{
            fontSize: "clamp(40px, 11vw, 144px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            color: "var(--color-ink)",
            fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 0',
          }}
        >
          The audit-trail&nbsp;spine
          <br />
          for{" "}
          <em
            className="text-accent"
            style={{
              fontStyle: "italic",
              fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
            }}
          >
            regulated
            <br />
            AI&nbsp;agents.
          </em>
        </h1>

        {/* Hero meta — For FinTech / For Healthcare */}
        <div
          className="anim-fade-in delay-600 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-[880px] mt-16 md:mt-20 pt-10 md:pt-12 border-t border-rule"
        >
          {[
            {
              label: "For FinTech",
              body: "SR 11-7 model risk documentation, ECOA disparate impact reporting, OCC-examiner-ready artifacts.",
            },
            {
              label: "For Healthcare",
              body: "FDA 510(k) submission assist, PCCP-aware governance, HIPAA-architected from day zero.",
            },
          ].map(({ label, body }) => (
            <div key={label}>
              <h4
                className="font-body font-medium uppercase mb-4 text-ink-mute"
                style={{ fontSize: "11px", letterSpacing: "0.18em" }}
              >
                {label}
              </h4>
              <p
                className="font-display text-ink"
                style={{
                  fontSize: "19px",
                  lineHeight: 1.5,
                  fontVariationSettings: '"opsz" 24, "SOFT" 30',
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="anim-fade-in delay-800 flex flex-col xs:flex-row gap-4 mt-14">
          <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center gap-[10px] bg-accent text-parchment px-9 py-[18px] font-body font-medium text-[15px] tracking-[0.01em] rounded-[2px] transition-colors group"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-accent-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            />
            <span className="relative">Talk to the founder</span>
            <span aria-hidden="true" className="relative">→</span>
          </Link>
          <Link
            href="/sr117"
            className="inline-flex items-center gap-[10px] border border-ink text-ink hover:bg-ink hover:text-parchment px-8 py-[18px] font-body font-medium text-[15px] tracking-[0.01em] rounded-[2px] transition-colors"
          >
            <span>Read the SR 11-7 whitepaper</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
