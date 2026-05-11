import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "About — Ashish K. Saxena, founder",
  description:
    "Caventia is founded by Ashish K. Saxena: Amazon FinTech alum, author of The Ethics of Artificial Intelligence, IJSR reviewer, 42 peer-reviewed papers.",
};

const CREDENTIALS = [
  "Amazon FinTech — 40% fraud reduction, 75% processing-error reduction at scale",
  "Author, The Ethics of Artificial Intelligence (2024) & Society and the Machine",
  "42 peer-reviewed papers · 37 citations on flagship FinTech fraud-detection paper",
  "IJSR (International Journal of Scientific Research) reviewer",
  "IEEE TEMSCON & ISTAS contributor",
  "Best Technical Researcher of AI 2024",
  "London Book Festival winner 2024 · Marquis Who's Who",
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
            Caventia is the work of one founder with a specific résumé and a
            specific argument.
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-20 items-start">
            {/* Photo placeholder */}
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
                Amazon FinTech alum. Author. IJSR reviewer. Forty-two peer-reviewed papers.
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

      {/* "Why Caventia exists" — long form with drop cap */}
      <section className="bg-parchment border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32">
          <SectionLabel numeral="I.">Why Caventia exists</SectionLabel>

          <div className="mt-12 max-w-[720px] mx-auto md:mx-0">
            <p className="dropcap font-body text-[19px] md:text-[20px] text-ink leading-[1.65] mb-6">
              At Amazon FinTech I watched smart engineers ship models that
              moved billions of dollars in payments, and I watched the model
              risk function struggle to keep up. We were good at the
              engineering. We were not great at the documentation an examiner
              expects under SR 11-7. The gap kept widening.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              Then generative AI arrived. Suddenly every business unit wanted
              an agent. Suddenly every agent was making decisions that touched
              fair-lending, fraud, KYC, and clinical care. The horizontal AI
              governance vendors that sprang up in 2023 and 2024 — Credo,
              Fiddler, Arthur — were doing useful work, but none of them were
              shipping the artifact a Federal Reserve examiner asks for. The
              language did not match. The schema did not match. The mental
              model did not match.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75] mb-6">
              Caventia exists because the next decade of AI inside regulated
              industries needs a platform whose first principle is not “make
              AI safe” but “make AI legible to the specific regulator who is
              going to read it.” That is a vertical problem. SR 11-7 is not
              the same as the FDA&apos;s 510(k) is not the same as ECOA. The
              artifact your OCC examiner expects is not the artifact your IRB
              expects. We built the platform around the artifact, not the
              other way around.
            </p>
            <p className="font-body text-[17px] text-ink leading-[1.75]">
              The bet is simple: in the regulated half of the AI market, the
              winning platform will be the one whose evidence ledger is
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
