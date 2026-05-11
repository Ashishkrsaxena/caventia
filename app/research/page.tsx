import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Marginalia from "@/components/Marginalia";

export const metadata: Metadata = {
  title: "Research - Peer-reviewed papers and books by the founder",
  description:
    "A curated list of Ashish K. Saxena's published work: peer-reviewed papers on fraud detection, LSTM hospital systems, AI ethics and TRiSM frameworks.",
};

type Paper = {
  title: string;
  venue: string;
  year: number;
  citations?: number;
  type: "paper" | "book" | "article";
  href: string;
};

const FEATURED: Paper[] = [
  {
    title:
      "Machine Learning and Big Data Analytics for Fraud Detection in the U.S. FinTech Industry",
    venue: "International Journal of Scientific Research",
    year: 2023,
    citations: 37,
    type: "paper",
    href: "#",
  },
  {
    title:
      "LSTM Neural Network Approach to Resource Allocation in Hospital Management Systems",
    venue: "International Journal of Scientific Research",
    year: 2023,
    citations: 18,
    type: "paper",
    href: "#",
  },
  {
    title: "Beyond Code: How TRiSM Redefines AI's Promise",
    venue: "Medium",
    year: 2024,
    type: "article",
    href: "#",
  },
];

const BOOKS: Paper[] = [
  {
    title: "The Ethics of Artificial Intelligence",
    venue: "Independent press",
    year: 2024,
    type: "book",
    href: "#",
  },
  {
    title: "Society and the Machine",
    venue: "Independent press",
    year: 2023,
    type: "book",
    href: "#",
  },
];

const SELECTED: Paper[] = [
  {
    title:
      "Federated Learning for Privacy-Preserving Credit Risk Models",
    venue: "International Journal of Scientific Research",
    year: 2024,
    citations: 9,
    type: "paper",
    href: "#",
  },
  {
    title:
      "Explainability Constraints in Clinical Decision Support Systems",
    venue: "IEEE TEMSCON Proceedings",
    year: 2024,
    citations: 7,
    type: "paper",
    href: "#",
  },
  {
    title:
      "Algorithmic Fairness Under ECOA: A Practitioner's Framework",
    venue: "Working paper",
    year: 2024,
    type: "paper",
    href: "#",
  },
  {
    title:
      "Audit Logging Architectures for Generative AI in Production",
    venue: "IEEE ISTAS",
    year: 2024,
    citations: 5,
    type: "paper",
    href: "#",
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
          {typeof paper.citations === "number" && paper.citations >= 5 && (
            <> · {paper.citations} citations</>
          )}
        </p>
      </div>
      <Link
        href={paper.href}
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
            Forty-two peer-reviewed papers and two books across fraud
            detection, fair lending, clinical AI, federated learning and AI
            ethics. A curated selection follows.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-paper">
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
      <section className="bg-parchment border-t border-rule">
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
      <section className="bg-paper border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          <SectionLabel numeral="III.">Selected papers</SectionLabel>
          <h2 className="type-display-md mt-6 mb-12 max-w-[640px]">
            Recent work, abbreviated.
          </h2>
          <div>
            {SELECTED.map((p) => (
              <PaperRow key={p.title} paper={p} />
            ))}
          </div>

          <p className="mt-12 font-mono text-[12px] tracking-[0.06em] text-ink-light">
            The full list runs to 42. Email for the complete bibliography or
            DOIs for any specific paper.
          </p>
        </div>
      </section>
    </>
  );
}
