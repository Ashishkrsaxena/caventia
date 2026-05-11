import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SpineDiagram from "@/components/SpineDiagram";
import FounderBlock from "@/components/FounderBlock";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SpineDiagram />
      <FounderBlock />
      <FinalCta
        numeral="V."
        eyebrow="Year One — Design Partners"
        heading={
          <>
            We&apos;re taking{" "}
            <em className="italic text-accent-soft font-display">
              ten design partners
            </em>{" "}
            in 2026.
          </>
        }
        sub="US banks $10B+ AUM. Series B+ fintechs with lending or fraud products. Health systems planning clinical AI rollouts. Conversations are with the founder directly — not a sales team."
        ctaHref="/contact"
        ctaLabel="Start a conversation →"
      />
    </>
  );
}
