import { LinkButton } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-20 md:pb-28">
        <p className="type-label anim-fade-in delay-100">
          Vertical AI Governance · For Regulated Industries
        </p>

        <h1 className="type-display-xl mt-8 max-w-[920px] anim-fade-up delay-200">
          The audit-trail spine for{" "}
          <em className="italic text-accent font-display">
            regulated AI agents.
          </em>
        </h1>

        <p className="type-body-lg mt-8 max-w-[640px] text-ink-mute font-light anim-fade-up delay-400">
          SR 11-7 model risk artifacts for banks. FDA 510(k)-ready governance
          for health systems. Built by the people who deploy AI in regulated
          industries, not by horizontal AI platforms.
        </p>

        <div className="mt-12 flex flex-col xs:flex-row gap-4 anim-fade-up delay-600 items-stretch xs:items-start">
          {/* Design system §8.5: primary CTA ~80% width on mobile, centered */}
          <LinkButton
            href="/contact"
            variant="primary"
            className="w-[80%] xs:w-auto self-center xs:self-auto"
          >
            Talk to the founder
          </LinkButton>
          <LinkButton
            href="/sr117"
            variant="secondary"
            className="w-[80%] xs:w-auto self-center xs:self-auto"
          >
            Read the SR 11-7 whitepaper
          </LinkButton>
        </div>
      </div>

      {/* Subtle bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-rule pointer-events-none" />
    </section>
  );
}
