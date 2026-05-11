import Link from "next/link";
import Marginalia from "@/components/Marginalia";

type Credential = {
  num: string;
  text: React.ReactNode;
  meta: string;
};

const CREDENTIALS: Credential[] = [
  {
    num: "I.",
    text: "Amazon FinTech - 40% fraud reduction, 75% processing-error reduction at scale",
    meta: "Amazon",
  },
  {
    num: "II.",
    text: (
      <>
        Author, <em className="italic">Society and the Machine</em> and{" "}
        <em className="italic">The Ethics of Artificial Intelligence</em>{" "}
        - Amazon bestsellers, London Book Festival 2024 first place
      </>
    ),
    meta: "2024",
  },
  {
    num: "III.",
    text: "h-index 8 with 226 citations on Google Scholar across machine learning, healthcare AI and AI policy",
    meta: "Verified",
  },
  {
    num: "IV.",
    text: "IJSR peer reviewer (42 papers reviewed) · IEEE TEMSCON ASPAC and ISTAS 2024 contributor",
    meta: "Ongoing",
  },
  {
    num: "V.",
    text: 'Best Technical Researcher of AI 2024, Business Innovation Awards · Marquis Who\'s Who',
    meta: "2024",
  },
];

export default function FounderBlock() {
  return (
    <section className="relative overflow-hidden z-[2]">
      <Marginalia numeral="IV" position="top-left" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-40">
        <p
          className="font-body font-medium uppercase text-ink-mute inline-flex items-center gap-2.5 mb-5"
          style={{ fontSize: "11px", letterSpacing: "0.18em" }}
        >
          <span aria-hidden="true" className="w-6 h-px bg-accent" />
          The founder
        </p>

        <h2
          className="font-display font-normal text-ink max-w-[880px] mb-16 md:mb-20"
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontVariationSettings: '"opsz" 96, "SOFT" 30',
          }}
        >
          Credibility that pre-sells the platform.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-start">
          {/* Photo block with caption row */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] rounded-[2px] relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #C4B8A0 0%, #948876 70%, #6F5F4A 100%)",
              }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center font-mono uppercase text-white/40"
                style={{ fontSize: "11px", letterSpacing: "0.25em" }}
              >
                PHOTO
              </div>
            </div>
            <div
              className="font-mono uppercase mt-3 pt-3 border-t border-rule text-ink-mute flex justify-between"
              style={{ fontSize: "10px", letterSpacing: "0.15em" }}
            >
              <span>Ashish K. Saxena</span>
              <span>Founder · 2026</span>
            </div>
          </div>

          {/* Founder content with drop cap */}
          <div className="pt-3">
            <div
              className="font-body font-medium uppercase text-ink-mute mb-4 pb-4 border-b border-rule"
              style={{ fontSize: "11px", letterSpacing: "0.18em" }}
            >
              Founder &amp; CEO
            </div>
            <h3
              className="font-display font-normal text-ink mb-2"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                fontVariationSettings: '"opsz" 96, "SOFT" 30',
              }}
            >
              Ashish K. Saxena
            </h3>
            <p
              className="font-display italic font-normal text-ink-mute mb-10"
              style={{
                fontSize: "20px",
                fontVariationSettings: '"opsz" 36, "SOFT" 50',
              }}
            >
              Amazon FinTech alum · Bestselling AI ethics author · IJSR peer reviewer · 226 citations
            </p>

            <p
              className="dropcap-v2 font-body text-ink mb-8"
              style={{ fontSize: "18px", lineHeight: 1.55 }}
            >
              Caventia exists because the people building AI in banks and
              hospitals don&apos;t have what they need from horizontal AI
              platforms. After fifteen years deploying machine learning in
              regulated industries - at Amazon FinTech, in hospital management
              systems and in published frameworks read by the field - the
              gap became impossible to ignore.
            </p>

            <ul className="list-none p-0 m-0 pt-8 border-t border-rule">
              {CREDENTIALS.map((cred) => (
                <li
                  key={cred.num}
                  className="relative grid grid-cols-[1fr_auto] gap-5 items-baseline pl-10 py-3.5 border-b border-rule-soft last:border-b-0 font-body text-ink"
                  style={{ fontSize: "15px", lineHeight: 1.45 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-3.5 font-display italic text-accent w-7"
                    style={{ fontSize: "13px", letterSpacing: "0.05em" }}
                  >
                    {cred.num}
                  </span>
                  <span>{cred.text}</span>
                  <span
                    className="font-mono uppercase text-ink-light whitespace-nowrap"
                    style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                  >
                    {cred.meta}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 mt-8 font-body font-medium text-accent border-b border-accent pb-1 hover:gap-4 transition-all duration-200"
              style={{ fontSize: "15px" }}
            >
              Full bio and research
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
