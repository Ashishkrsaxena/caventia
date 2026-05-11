import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "About - Ashish K. Saxena, founder",
  description:
    "Caventia is founded by Ashish K. Saxena: Amazon FinTech alum, Amazon-bestselling author of two books on AI ethics, IJSR peer reviewer, h-index 8 with 226 citations on Google Scholar and the 2024 Best Technical Researcher of AI award.",
};

const CREDENTIALS = [
  "Amazon FinTech: 40% fraud reduction and 75% processing-error reduction at scale; 20% false-positive reduction",
  "Hospital management AI research: 30% wait-time reduction and 20% equipment utilization gain",
  'Author: "Society and the Machine" (2024 London Book Festival first place) and "The Ethics of Artificial Intelligence" - Amazon bestsellers in the US and UK',
  "h-index 8 on Google Scholar; 226 total citations spanning fraud detection, healthcare AI, AI policy and machine learning",
  "Peer reviewer at the International Journal of Science and Research (IJSR); 42 papers reviewed",
  "IEEE TEMSCON ASPAC and IEEE ISTAS 2024 contributor",
  '2024 "Best Technical Researcher of AI", Business Innovation Awards · Marquis Who\'s Who',
  "Founder, MindBytesAI. Creator, ImpactLens AI. Fifty-plus AI professionals mentored.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule">
        <Marginalia numeral="IV" position="top-right" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <SectionLabel>About</SectionLabel>
          <h1
            className="font-display font-normal text-ink mt-6 max-w-[920px]"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 120, "SOFT" 30',
            }}
          >
            Caventia is the work of one founder with a specific track record
            and a specific argument.
          </h1>
        </div>
      </section>

      {/* Founder card with photo, credentials list and contact links */}
      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-20 items-start">
            <div
              className="relative w-[200px] md:w-[260px] aspect-square rounded-[2px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #C4B8A0, #948876)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] tracking-[0.15em] uppercase text-white/50">
                photo
              </div>
            </div>

            <div>
              <p className="type-label mb-3">Founder & CEO</p>
              <h2 className="font-display text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] mb-2 text-ink">
                Ashish K. Saxena
              </h2>
              <p className="font-display italic text-[20px] md:text-[22px] text-ink-mute mb-8 leading-[1.4]">
                Amazon FinTech alum. Bestselling AI ethics author. IJSR peer
                reviewer. Two hundred and twenty-six citations across the
                literature.
              </p>

              <ul className="space-y-1 mb-8">
                {CREDENTIALS.map((cred) => (
                  <li
                    key={cred}
                    className="relative pl-6 font-body text-[16px] leading-[1.9] text-ink"
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

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
                >
                  LinkedIn →
                </Link>
                <a
                  href="mailto:ashish@caventia.com"
                  className="font-body text-[14px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
                >
                  ashish@caventia.com
                </a>
                <Link
                  href="/research"
                  className="font-body text-[14px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
                >
                  Research →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biographical statement - ported from the SR 11-7 whitepaper's
          "About the Author" section. Citation-specific, awards-specific. */}
      <section className="bg-parchment border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="I.">Biographical statement</SectionLabel>

          <div className="mt-12 max-w-[720px] mx-auto md:mx-0 font-body text-[17px] text-ink leading-[1.75] space-y-6">
            <p>
              Ashish K. Saxena is the founder of Caventia. He has fifteen
              years of AI deployment experience, including financial fraud
              detection at Amazon (40% fraud reduction, 75% processing-error
              reduction) and AI-driven hospital resource allocation research
              (30% wait-time reduction, 20% equipment utilization gain).
            </p>
            <p>
              He is the author of{" "}
              <em className="italic">Society and the Machine</em> (winner,
              2024 London Book Festival; second place Non-Fiction Education
              at the 2024 PenCraft Book Awards) and{" "}
              <em className="italic">The Ethics of Artificial Intelligence</em>.
              He serves as a reviewer for the International Journal of
              Science and Research (IJSR), has peer-reviewed 42 research
              papers and received the 2024 &ldquo;Best Technical Researcher
              of AI&rdquo; award at the Business Innovation Awards.
            </p>
            <p>
              His published research spans machine learning fraud detection
              (Emerging Trends in Machine Intelligence and Big Data, 2019),
              healthcare AI (an LSTM resource-allocation paper in the
              International Journal of Applied Health Care Analytics, 2022)
              and AI policy. His paper on AI integration
              (&ldquo;Decoding Socioeconomic Influence on AI Integration
              and Trust in the U.S.&rdquo;) was accepted at the 2024 IEEE
              TEMSCON ASPAC. His work on bias measurement in AI-generated
              content was presented at the 2024 IEEE International Symposium
              on Technology and Society (ISTAS). Google Scholar reports an
              h-index of eight with two hundred and twenty-six citations
              across the literature.
            </p>
          </div>
        </div>
      </section>

      {/* "Why Caventia exists" - personal essay with drop cap */}
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32">
          <SectionLabel numeral="II.">Why Caventia exists</SectionLabel>

          <div className="mt-12 max-w-[720px] mx-auto md:mx-0">
            <p className="dropcap font-body text-[19px] md:text-[20px] text-ink leading-[1.65] mb-6">
              At Amazon FinTech I watched smart engineers ship models that
              moved billions of dollars in payments and I watched the model
              risk function struggle to keep up. We were good at the
              engineering. We were not great at the documentation an
              examiner expects under SR 11-7. The gap kept widening.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              Then generative AI arrived. Suddenly every business unit
              wanted an agent. Suddenly every agent was making decisions
              that touched fair-lending, fraud, KYC and clinical care. The
              horizontal AI governance vendors that sprang up in 2023 and
              2024 (Credo, Fiddler, Arthur) were doing useful work, but
              none of them were shipping the artifact a Federal Reserve
              examiner asks for. The language did not match. The schema did
              not match. The mental model did not match.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              Caventia exists because the next decade of AI inside
              regulated industries needs a platform whose first principle
              is not &ldquo;make AI safe&rdquo; but &ldquo;make AI legible
              to the specific regulator who is going to read it.&rdquo;
              That is a vertical problem. SR 11-7 is not the same as the
              FDA&apos;s 510(k). 510(k) is not the same as ECOA. The
              artifact your OCC examiner expects is not the artifact your
              IRB expects. We built the platform around the artifact, not
              the other way around.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75]">
              The bet is simple: in the regulated half of the AI market,
              the winning platform will be the one whose evidence ledger is
              examiner-ready by construction. Caventia is that ledger.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
          <h2 className="type-display-md max-w-[620px] mx-auto">
            Want to talk to the founder directly?
          </h2>
          <div className="mt-10 flex flex-col xs:flex-row gap-4 justify-center">
            <LinkButton href="/contact" variant="primary">
              Talk to the founder
            </LinkButton>
            <LinkButton href="/sr117" variant="secondary">
              Read the SR 11-7 whitepaper
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
