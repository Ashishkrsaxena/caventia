import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import PullQuote from "@/components/PullQuote";
import SpineDiagram from "@/components/SpineDiagram";
import SpineInMotion from "@/components/SpineInMotion";
import FounderBlock from "@/components/FounderBlock";
import LatestNotes from "@/components/LatestNotes";
import StatFrame from "@/components/StatFrame";
import LetterFromFounder from "@/components/LetterFromFounder";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <PullQuote
        cite="From AI Agent Governance After SR 11-7 · Ashish K. Saxena"
      >
        &quot;The audit log isn&apos;t a feature. It&apos;s the{" "}
        <em
          className="italic text-accent"
          style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1' }}
        >
          spine
        </em>
        . Every other artifact regulators require - model cards,
        disparate-impact reports, 510(k) submissions - hangs off it&quot;.
      </PullQuote>
      <SpineDiagram />
      <SpineInMotion />
      <FounderBlock />
      <LatestNotes />
      <StatFrame
        number="226"
        title="Peer-reviewed citations. h-index 8. Two bestselling books on AI ethics."
        body="Spanning fraud detection at Amazon, LSTM hospital systems, AI policy and TRiSM frameworks. The kind of credentials banks ask for and rarely find in an AI infrastructure founder."
      />
      <LetterFromFounder />
    </>
  );
}
