import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "Research on AI Governance, AI Ethics and Model Risk",
  description:
    "Books, papers and field notes on AI governance, AI ethics and model risk. 226 citations across machine learning, fraud detection, healthcare AI, AI ethics and policy. Two Amazon bestsellers. h-index 8 on Google Scholar.",
  keywords: [
    "AI governance research",
    "AI ethics research",
    "AI model risk research",
    "Ashish K. Saxena",
    "AI ethics books",
    "AI policy research",
    "responsible AI research",
  ],
  alternates: {
    canonical: "/research",
  },
};

const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=4x5gOa4AAAAJ&hl=en";

type Paper = {
  title: string;
  venue: string;
  year: number;
  citations?: number;
  type: "paper" | "book" | "article" | "conference";
  href: string;
};

// Source: Google Scholar profile. Citation counts as reported by Scholar.
const FEATURED: Paper[] = [
  {
    title:
      "An LSTM Neural Network Approach to Resource Allocation in Hospital Management Systems",
    venue: "International Journal of Applied Health Care Analytics",
    year: 2022,
    citations: 29,
    type: "paper",
    href: SCHOLAR_URL,
  },
  {
    title:
      "The Influence of AI: The Revolutionary Effects of Artificial Intelligence in Healthcare",
    venue: "Journal of Engineering Research and Reports",
    year: 2024,
    citations: 27,
    type: "paper",
    href: SCHOLAR_URL,
  },
  {
    title:
      "Machine Learning and Big Data Analytics for Fraud Detection in the U.S. FinTech Industry",
    venue: "Emerging Trends in Machine Intelligence and Big Data",
    year: 2019,
    citations: 19,
    type: "paper",
    href: SCHOLAR_URL,
  },
];

const BOOKS: Paper[] = [
  {
    title: "Society and the Machine",
    venue:
      "2024 London Book Festival, first place. PenCraft Book Awards, second place Non-Fiction Education.",
    year: 2024,
    type: "book",
    href: "https://www.amazon.com/dp/B0CWDTZZVH",
  },
  {
    title: "The Ethics of Artificial Intelligence",
    venue: "Independent press. Bestseller status on Amazon US and UK.",
    year: 2024,
    type: "book",
    href: "https://www.amazon.com/dp/B0CWCGN2R3",
  },
];

const SELECTED: Paper[] = [
  {
    title:
      "IITD-IBMIRL System for Question Answering Using Pattern Matching, Semantic Type and Semantic Category Recognition",
    venue: "Text REtrieval Conference (TREC)",
    year: 2007,
    citations: 30,
    type: "conference",
    href: SCHOLAR_URL,
  },
  {
    title:
      "Evaluating the Regulatory and Policy Recommendations for Promoting Information Diversity in the Digital Age",
    venue: "International Journal of Responsible Artificial Intelligence",
    year: 2021,
    citations: 24,
    type: "paper",
    href: SCHOLAR_URL,
  },
  {
    title:
      "Balancing Privacy, Personalization and Human Rights in the Digital Age",
    venue: "Eigenpub Review of Science and Technology",
    year: 2020,
    citations: 20,
    type: "paper",
    href: SCHOLAR_URL,
  },
  {
    title:
      "Structure, Objectives and Operational Framework for Ethical Integration of AI in Education",
    venue: "Sage Science Review of Educational Technology",
    year: 2023,
    citations: 17,
    type: "paper",
    href: SCHOLAR_URL,
  },
  {
    title: "AI in Governance and Policy Making",
    venue: "International Journal of Science and Research",
    year: 2024,
    citations: 14,
    type: "paper",
    href: SCHOLAR_URL,
  },
  {
    title:
      "Decoding Socioeconomic Influence on AI Integration and Trust in the U.S.",
    venue: "IEEE TEMSCON ASPAC, accepted 2024",
    year: 2024,
    type: "conference",
    href: SCHOLAR_URL,
  },
  {
    title: "Quantitative Measurement of Bias in AI-Generated Content",
    venue: "IEEE International Symposium on Technology and Society (ISTAS)",
    year: 2024,
    citations: 4,
    type: "conference",
    href: SCHOLAR_URL,
  },
  {
    title:
      "Enhancing Data Anonymization: A Semantic K-Anonymity Framework with ML and NLP Integration",
    venue: "Sage Science Review of Applied Machine Learning",
    year: 2022,
    citations: 7,
    type: "paper",
    href: SCHOLAR_URL,
  },
  {
    title:
      "Optimizing Electric Vehicle Energy Management with a Hybrid LSTM-CNN Architecture",
    venue: "Tensorgate Journal of Sustainable Technology and Infrastructure",
    year: 2022,
    citations: 4,
    type: "paper",
    href: SCHOLAR_URL,
  },
];

function PaperRow({ paper }: { paper: Paper }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-10 py-7 border-b border-rule last:border-b-0">
      <div>
        <h3 className="font-display text-[20px] md:text-[22px] font-medium leading-[1.3] text-ink mb-2">
          {paper.title}
        </h3>
        <p className="font-mono text-[12px] tracking-[0.04em] uppercase text-ink-mute">
          {paper.venue} · {paper.year}
          {typeof paper.citations === "number" && paper.citations > 0 && (
            <> · {paper.citations} citations</>
          )}
        </p>
      </div>
      <Link
        href={paper.href}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start md:self-center font-body text-[14px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors whitespace-nowrap"
      >
        Read the {paper.type} →
      </Link>
    </article>
  );
}

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <Marginalia numeral="III" position="top-right" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <SectionLabel>Research</SectionLabel>
          <h1
            className="font-display font-normal text-ink mt-6 max-w-[920px]"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 120, "SOFT" 30',
            }}
          >
            The published record behind the platform.
          </h1>
          <p className="type-body-lg mt-8 max-w-[640px] text-ink-mute font-light">
            Peer-reviewed research and books spanning machine learning,
            fraud detection, healthcare AI, AI ethics, AI policy and
            natural language processing. Citation counts are reported by
            Google Scholar.
          </p>
        </div>
      </section>

      {/* Citation metrics block */}
      <section className="bg-paper border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 max-w-[1080px] mx-auto">
            {[
              { number: "226", label: "Total citations across the literature" },
              { number: "8", label: "h-index per Google Scholar" },
              { number: "8", label: "i10-index per Google Scholar" },
            ].map(({ number, label }) => (
              <div key={label} className="text-center md:text-left">
                <p
                  className="font-display font-normal text-accent leading-none mb-3"
                  style={{
                    fontSize: "clamp(64px, 8vw, 120px)",
                    letterSpacing: "-0.04em",
                    fontVariationSettings: '"opsz" 144, "SOFT" 30',
                  }}
                >
                  {number}
                </p>
                <p className="font-body text-[14px] tracking-[0.04em] uppercase text-ink-mute">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center md:text-left font-mono text-[12px] tracking-[0.06em] text-ink-light max-w-[1080px] mx-auto">
            Last verified 2026.{" "}
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent border-b border-accent"
            >
              View Google Scholar profile
            </a>
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-parchment">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="I.">Featured</SectionLabel>
          <h2 className="type-display-md mt-6 mb-12 max-w-[640px]">
            Three to start with.
          </h2>
          <div>
            {FEATURED.map((p) => (
              <PaperRow key={p.title} paper={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="II.">Books</SectionLabel>
          <h2 className="type-display-md mt-6 mb-12 max-w-[640px]">
            On AI ethics and the social contract.
          </h2>
          <div>
            {BOOKS.map((p) => (
              <PaperRow key={p.title} paper={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Selected */}
      <section className="bg-parchment border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="III.">Selected papers</SectionLabel>
          <h2 className="type-display-md mt-6 mb-12 max-w-[640px]">
            Recent and historical work.
          </h2>
          <div>
            {SELECTED.map((p) => (
              <PaperRow key={p.title} paper={p} />
            ))}
          </div>

          <p className="mt-12 font-mono text-[12px] tracking-[0.06em] text-ink-light">
            Complete bibliography on{" "}
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent border-b border-accent"
            >
              Google Scholar
            </a>
            . Email for DOIs of any specific paper or the unpublished
            preprints.
          </p>
        </div>
      </section>
    </>
  );
}
