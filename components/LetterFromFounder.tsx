import Link from "next/link";

/**
 * Letter from the founder - replaces the generic dark-block CTA on the
 * home page. Reads as personal correspondence: dated stamp, italic
 * salutation, body with italic accent, fine print, handwritten Caveat
 * signature with meta block, CTA with overlay-fill hover. A massive
 * "CAVE" marginalia sits faded in the background.
 */
export default function LetterFromFounder() {
  return (
    <section className="relative z-[2] bg-deep text-parchment overflow-hidden">
      {/* Background marginalia "CAVE" */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none select-none font-display italic font-light leading-[0.85] tracking-[-0.05em] hidden md:block"
        style={{
          fontSize: "clamp(220px, 36vw, 480px)",
          top: "40px",
          left: "-40px",
          color: "rgba(245,241,232,0.025)",
          fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
        }}
      >
        CAVE
      </span>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-32 md:py-40 pb-20">
        <div className="max-w-[720px] mx-auto">
          {/* Stamp */}
          <div
            className="inline-flex items-center gap-3 font-mono uppercase mb-8 py-2 px-3.5 border"
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "rgba(245,241,232,0.5)",
              borderColor: "rgba(245,241,232,0.15)",
            }}
          >
            <span
              aria-hidden="true"
              className="block w-1.5 h-1.5 rounded-full bg-accent-bright"
            />
            Year One · Design Partners
          </div>

          {/* Salutation */}
          <p
            className="font-display italic text-accent-soft mb-8"
            style={{
              fontSize: "22px",
              fontVariationSettings: '"opsz" 36, "SOFT" 60',
            }}
          >
            To the model risk officer reading this -
          </p>

          {/* Body */}
          <p
            className="font-display font-normal text-parchment mb-10"
            style={{
              fontSize: "clamp(20px, 3vw, 36px)",
              lineHeight: 1.35,
              letterSpacing: "-0.015em",
              fontVariationSettings: '"opsz" 60, "SOFT" 30',
            }}
          >
            Caventia is taking{" "}
            <em
              className="italic text-accent-soft"
              style={{
                fontVariationSettings: '"opsz" 60, "SOFT" 100, "WONK" 1',
              }}
            >
              ten design partners
            </em>{" "}
            in 2026. US banks at $10B+ AUM. Series B+ fintechs with lending or
            fraud products. Health systems planning clinical AI rollouts.
          </p>

          {/* Fine print */}
          <p
            className="font-body mb-14 max-w-[580px]"
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "rgba(245,241,232,0.7)",
            }}
          >
            The conversations are with me directly. There is no sales team. We
            will spend thirty minutes on your specific SR 11-7 exam, your
            specific model inventory or your specific FDA Q-Sub timeline -
            and figure out together whether the platform we&apos;re building
            fits your gauntlet. If not, you&apos;ll leave with a one-page
            framework you can use anyway.
          </p>

          {/* Signature row */}
          <div className="flex items-end gap-8 mb-12">
            <div
              className="font-script font-medium text-accent-soft"
              style={{
                fontSize: "48px",
                lineHeight: 1,
                transform: "rotate(-3deg)",
              }}
            >
              A.&nbsp;Saxena
            </div>
            <div
              className="font-body pl-5 border-l"
              style={{
                fontSize: "13px",
                lineHeight: 1.5,
                color: "rgba(245,241,232,0.6)",
                borderLeftColor: "rgba(245,241,232,0.2)",
              }}
            >
              <strong
                className="block font-medium mb-1 text-parchment"
                style={{ fontWeight: 500 }}
              >
                Ashish K. Saxena
              </strong>
              Founder, Caventia Inc.
              <br />
              Reaching out: ashish@caventia.com
            </div>
          </div>

          {/* CTA with horizontal overlay-fill hover */}
          <Link
            href="/contact"
            className="group relative overflow-hidden inline-flex items-center gap-3.5 bg-parchment text-ink px-9 py-5 font-body font-medium rounded-[2px] transition-colors"
            style={{ fontSize: "16px" }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
            />
            <span className="relative group-hover:text-parchment transition-colors">
              Start a conversation
            </span>
            <span
              aria-hidden="true"
              className="relative group-hover:text-parchment transition-colors"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
