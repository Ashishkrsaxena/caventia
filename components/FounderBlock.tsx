import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PullStat } from "@/components/ui/PullStat";

const CREDENTIALS = [
  "Amazon FinTech — 40% fraud reduction, 75% processing-error reduction at scale",
  "Author, The Ethics of Artificial Intelligence & Society and the Machine",
  "42 peer-reviewed papers · 37 citations on flagship FinTech fraud-detection paper",
  "IJSR reviewer · IEEE TEMSCON & ISTAS contributor",
  "Best Technical Researcher of AI 2024 · London Book Festival winner 2024",
];

export default function FounderBlock() {
  return (
    <section className="bg-paper border-y border-rule">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32">
        <SectionLabel numeral="IV.">The founder</SectionLabel>

        <h2 className="type-display-md mt-6 max-w-[820px]">
          The credibility that pre-sells the platform.
        </h2>

        <p className="type-body-lg mt-6 max-w-[640px] text-ink-mute font-light">
          Caventia is founded by someone who has shipped AI in production at
          scale in both verticals — and who has published the ethics and risk
          frameworks the industry is now scrambling to adopt.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start py-12 border-y border-rule">
          {/* Photo placeholder — replace with /public/founder.jpg when provided */}
          <div className="relative w-40 h-40 md:w-[220px] md:h-[220px] overflow-hidden rounded-[2px]" style={{
            background:
              "linear-gradient(135deg, #C4B8A0, #948876)",
          }}>
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] tracking-[0.15em] uppercase text-white/50">
              photo
            </div>
          </div>

          <div>
            <p className="type-label mb-3">Founder & CEO</p>
            <h3 className="font-display text-[28px] md:text-[36px] font-medium leading-[1.15] tracking-[-0.02em] mb-6 text-ink">
              Ashish K. Saxena
            </h3>
            <ul className="space-y-1 mb-6">
              {CREDENTIALS.map((cred) => (
                <li
                  key={cred}
                  className="relative pl-6 font-body text-[15px] md:text-[16px] leading-[1.9] text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[2px] text-accent text-[28px] leading-none"
                  >
                    ·
                  </span>
                  {cred}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block font-body text-[15px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
            >
              Full bio and research →
            </Link>
          </div>
        </div>

        {/* Pull stat */}
        <div className="mt-20 md:mt-24 max-w-[720px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
          <PullStat
            number="42"
            label={
              <>
                peer-reviewed papers spanning fraud detection, LSTM hospital
                systems, AI ethics, and TRiSM frameworks.{" "}
                <em className="italic font-display text-[18px] text-ink-mute">
                  The kind of credentials banks ask for and rarely find.
                </em>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
