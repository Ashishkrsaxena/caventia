import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "About - The AI Audit-Trail Company for Regulated AI Agents",
  description:
    "Caventia is the audit-trail spine for regulated AI agents. Founded by Ashish K. Saxena: Amazon FinTech alum, two Amazon-bestselling books on AI ethics, h-index 8 with 226 Google Scholar citations, Best Technical Researcher of AI awardee. Delaware C-Corp. Ten design-partner conversations open.",
  keywords: [
    "Caventia AI audit trail",
    "AI governance company",
    "Ashish K. Saxena founder",
    "AI audit trail company",
    "regulated AI agents company",
    "AI ethics author",
    "AI model risk founder",
  ],
  alternates: {
    canonical: "/about",
  },
};

const CREDENTIALS = [
  "Amazon FinTech: led Project Vault (payment platform handling up to $250B in transactions), Project Orion (financial communications platform supporting billions of events per day) and the Intercompany Engine (automated pricing and tax across 1,450 global entities). 40% fraud reduction, 75% processing-error reduction at scale.",
  "Earlier: Morgan Stanley, IT and Risk.",
  "IEEE Senior Member (top 10% of 400,000 IEEE members) and British Computer Society Fellow. Editorial review board member for an international computer science journal; peer reviewer with 42 papers reviewed across international research venues.",
  'Author of "Society and the Machine" (first place, London Book Festival; second place, PenCraft Book Awards) and "The Ethics of Artificial Intelligence". Both Amazon bestsellers in the US and UK.',
  "h-index 8 on Google Scholar; 226 citations across fraud detection, healthcare AI, AI policy and machine learning. Published in Q2 and Q3 SCOPUS-indexed journals, including Intellectual Economics (Q2).",
  "Best Technical Researcher of AI. Marquis Who's Who.",
  "Judge: ASJA Writing Awards, Stratus Cloud Computing Awards and the Sustainability Awards. Speaker, Data Science Salon San Francisco.",
  "Fifty-plus AI professionals mentored.",
];

type StandingCategory = {
  label: string;
  items: { primary: string; sub?: string }[];
};

const STANDING: StandingCategory[] = [
  {
    label: "Professional memberships",
    items: [
      { primary: "IEEE Senior Member", sub: "Top 10% of 400,000 IEEE members" },
      { primary: "British Computer Society Fellow", sub: "UK chartered institute for IT" },
      { primary: "IEEE Computational Intelligence Society" },
      { primary: "IEEE Society on Social Implications of Technology" },
      { primary: "American Society of Journalists and Authors (ASJA), Associate" },
      { primary: "National Association of Science Writers (NASW)" },
      { primary: "Editorial review board, international CS journal" },
    ],
  },
  {
    label: "Awards and recognition",
    items: [
      { primary: "Best Technical Researcher of AI" },
      { primary: "London Book Festival winner, General Nonfiction", sub: "for Society and the Machine" },
      { primary: "PenCraft Book Awards, second place (Non-Fiction Education)" },
      { primary: "Page Turner Book Awards, finalist" },
      { primary: "Marquis Who's Who" },
      { primary: "American Library Association Featured Author Catalog" },
    ],
  },
  {
    label: "Judging and review",
    items: [
      { primary: "ASJA Writing Awards, judge" },
      { primary: "Stratus Cloud Computing Awards, judge" },
      { primary: "Sustainability Awards, judge" },
      { primary: "Peer reviewer, international research journal (42 papers reviewed)" },
      { primary: "Editorial review board, international CS journal" },
      { primary: "Global Research Gateway, recognized reviewer in ethical AI" },
    ],
  },
  {
    label: "Speaking and press",
    items: [
      { primary: "Data Science Salon, San Francisco, expert panel" },
      { primary: "IEEE TEMSCON ASPAC (paper accepted)" },
      { primary: "IEEE ISTAS (paper presented)" },
      { primary: "Ritz Herald, Hudson Weekly, International Business Times India" },
      { primary: "Joel's Top 8+ AI Ethics Books" },
    ],
  },
];

type SelectedWork = {
  title: string;
  venue: string;
  meta: string;
  italic?: boolean;
  href?: string;
};

const SELECTED_WORK: SelectedWork[] = [
  {
    title: "The Ethics of Artificial Intelligence: Challenges and Opportunities",
    venue: "Book, 2024",
    meta: "Amazon",
    italic: true,
    href: "https://www.amazon.com/dp/B0CWCGN2R3",
  },
  {
    title: "Society and the Machine: Navigating Ethics in the Age of Artificial Intelligence",
    venue: "Book, 2024",
    meta: "Amazon",
    italic: true,
    href: "https://www.amazon.com/dp/B0CWDTZZVH",
  },
  {
    title:
      "Impact of Industry 4.0 on green intellectual capital and sustainable development: the moderating role of managerial emotional intelligence",
    venue: "Intellectual Economics (Q2 SCOPUS), 2024",
    meta: "Vol. 18, 7-33",
  },
  {
    title:
      "An LSTM Neural Network Approach to Resource Allocation in Hospital Management Systems",
    venue: "IJAHCA, 2022",
    meta: "29 citations",
  },
  {
    title:
      "The Influence of AI: The Revolutionary Effects of Artificial Intelligence in the Healthcare Sector",
    venue: "JERR, 2024",
    meta: "27 citations",
  },
  {
    title:
      "Machine Learning and Big Data Analytics for Fraud Detection in the U.S. FinTech Industry",
    venue: "ETMIBD, 2019",
    meta: "19 citations",
  },
  {
    title:
      "Decoding Socioeconomic Influence on AI Integration and Trust in the U.S.: A Decadal Perspective",
    venue: "IEEE TEMSCON ASPAC, 2024",
    meta: "accepted",
  },
  {
    title:
      "Quantitative Measurement of Bias in AI-Generated Content: A Comprehensive Narrative Literature Review",
    venue: "IEEE ISTAS, 2024",
    meta: "presented",
  },
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
                Fifteen years shipping AI inside large institutions. Two
                Amazon-bestselling books on AI ethics. IEEE Senior Member.
                BCS Fellow.
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
                  href="https://www.linkedin.com/in/ashish-k-saxena/"
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
              Ashish K. Saxena is the founder of Caventia. His career has
              been a single thread, deploying AI inside institutions that
              cannot afford to be wrong about it, and writing about what
              that experience taught him about the gap between AI
              capability and AI accountability.
            </p>
            <p>
              He spent eleven years at Amazon, leading the platform
              engineering behind some of the company&apos;s largest
              financial systems. Project Vault, a scalable payment
              processing platform built on Amazon EC2, SQS and S3, handles
              up to $250 billion in transactions with advanced fraud
              detection. Project Orion, a global financial communications
              platform built on AWS, supports billions of events per day.
              The Intercompany Engine automated pricing and tax calculations
              across 1,450 global Amazon entities, taking compliance error
              and operational risk out of a process that used to consume
              teams of accountants. The fraud detection systems he
              developed cut financial fraud by 40 percent and processing
              errors by 75 percent at scale.
            </p>
            <p>
              Before Amazon, he was at Morgan Stanley in IT and Risk,
              working on the kind of model-and-control problems that became
              the early shape of what is now SR 11-7 model risk management.
              His academic foundation goes back to the IITD-IBMIRL
              question-answering system, which placed ninth worldwide at
              the 2007 Text REtrieval Conference (TREC).
            </p>
            <p>
              He is the author of{" "}
              <a
                href="https://www.amazon.com/dp/B0CWDTZZVH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent border-b border-accent pb-[1px] hover:text-link-hover hover:border-link-hover transition-colors"
              >
                <em className="italic">Society and the Machine</em>
              </a>{" "}
              (first place, General Nonfiction, London Book Festival;
              second place, Non-Fiction Education, PenCraft Book Awards;
              finalist, Page Turner Book Awards) and{" "}
              <a
                href="https://www.amazon.com/dp/B0CWCGN2R3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent border-b border-accent pb-[1px] hover:text-link-hover hover:border-link-hover transition-colors"
              >
                <em className="italic">
                  The Ethics of Artificial Intelligence: Challenges and
                  Opportunities
                </em>
              </a>
              . Both have been Amazon bestsellers in the US and UK. He has
              also written a sci-fi series,{" "}
              <em className="italic">Ava&apos;s New World</em>, whose
              screenplay adaptation has been a finalist at the Indo Dubai
              International Film Festival, the Swedish International Film
              Festival and the FrameFusion International Film Festival in
              Glasgow.
            </p>
            <p>
              His peer-reviewed work appears in IEEE conferences (TEMSCON
              ASPAC and ISTAS) and in SCOPUS-indexed journals at the
              Q2 and Q3 tiers. His Q2 paper,{" "}
              <em className="italic">
                Impact of Industry 4.0 on green intellectual capital and
                sustainable development: the moderating role of managerial
                emotional intelligence
              </em>
              , appears in{" "}
              <em className="italic">Intellectual Economics</em>, Vol. 18,
              Issue 1, pages 7-33. Other work appears in{" "}
              <em className="italic">
                Emerging Trends in Machine Intelligence and Big Data
              </em>{" "}
              and the{" "}
              <em className="italic">
                International Journal of Applied Health Care Analytics
              </em>
              . Google Scholar reports an h-index of 8 with 226 citations
              across machine-learning fraud detection, healthcare AI, AI
              policy and bias measurement.
            </p>
            <p>
              He is an IEEE Senior Member, a distinction held by only the
              top 10 percent of IEEE&apos;s 400,000 members globally, and a
              Fellow of the British Computer Society, the UK&apos;s
              chartered institute for IT professionals. He serves on the
              editorial review board of an international computer science
              journal and has peer-reviewed 42 papers across international
              research venues. He judges the ASJA Writing Awards, the
              Stratus Cloud Computing Awards and the Sustainability Awards.
              He has been recognized as Best Technical Researcher of AI.
              His work has been featured in Ritz Herald, Hudson Weekly,
              International Business Times India and Joel&apos;s Top 8+ AI
              Ethics Books list.
            </p>
            <p>
              He has mentored more than fifty AI professionals and spoken
              at the Data Science Salon in San Francisco on the
              intersection of AI capability and ethical deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Standing in the field - 4-card grid of memberships, awards,
          judging, speaking + press */}
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="II.">Standing in the field</SectionLabel>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {STANDING.map((cat) => (
              <div key={cat.label} className="border-t border-ink pt-5">
                <p
                  className="font-body font-medium uppercase text-accent mb-3"
                  style={{ fontSize: "11px", letterSpacing: "0.18em" }}
                >
                  {cat.label}
                </p>
                <ul className="space-y-0">
                  {cat.items.map((item) => (
                    <li
                      key={item.primary}
                      className="font-body text-[15px] leading-[1.55] text-ink py-[7px] border-b border-rule last:border-b-0"
                    >
                      {item.primary}
                      {item.sub && (
                        <span className="block font-body italic text-[14px] text-ink-mute mt-[2px]">
                          {item.sub}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work - books + most-cited / most-recent papers */}
      <section className="bg-parchment border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="III.">Selected work</SectionLabel>

          <div className="mt-12 max-w-[920px]">
            {SELECTED_WORK.map((work) => (
              <div
                key={work.title}
                className="grid grid-cols-1 md:grid-cols-[1fr_10em_9em] gap-x-6 gap-y-1 py-3 border-b border-rule"
              >
                <span className="font-display text-[16px] md:text-[17px] text-ink leading-[1.4]">
                  {work.italic ? (
                    <em className="italic">{work.title}</em>
                  ) : (
                    work.title
                  )}
                </span>
                <span
                  className="font-body text-ink-mute leading-[1.4]"
                  style={{ fontSize: "12px" }}
                >
                  {work.venue}
                </span>
                <span
                  className="font-body font-medium text-accent leading-[1.4] md:text-right"
                  style={{ fontSize: "12px" }}
                >
                  {work.href ? (
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-accent pb-[1px] hover:text-link-hover hover:border-link-hover transition-colors"
                    >
                      {work.meta} -&gt;
                    </a>
                  ) : (
                    work.meta
                  )}
                </span>
              </div>
            ))}
            <p className="mt-8 font-body italic text-[14px] text-ink-mute">
              Full publication list and citation graph on{" "}
              <Link
                href="/research"
                className="text-accent border-b border-accent pb-[1px] hover:text-link-hover hover:border-link-hover transition-colors not-italic"
              >
                Research
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* "Why Caventia exists" - personal essay with drop cap */}
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-24 md:py-32">
          <SectionLabel numeral="IV.">Why Caventia exists</SectionLabel>

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
