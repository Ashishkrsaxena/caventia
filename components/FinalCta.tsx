import Link from "next/link";

type Props = {
  eyebrow?: string;
  numeral?: string;
  heading: React.ReactNode;
  sub: React.ReactNode;
  ctaHref: string;
  ctaLabel: string;
};

export default function FinalCta({
  eyebrow = "Design Partners",
  numeral = "V.",
  heading,
  sub,
  ctaHref,
  ctaLabel,
}: Props) {
  return (
    <section className="bg-deep text-parchment border-t border-parchment/10 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-32 md:py-40 text-center">
        <p className="type-label text-parchment/50 mb-6">
          <span className="font-display italic text-accent-soft mr-2">
            {numeral}
          </span>
          {eyebrow}
        </p>
        <h2 className="font-display text-[36px] md:text-[56px] leading-[1.1] font-normal tracking-[-0.025em] max-w-[760px] mx-auto mb-8">
          {heading}
        </h2>
        <p className="font-body font-light text-[16px] md:text-[18px] text-parchment/60 max-w-[540px] mx-auto mb-14 leading-[1.55]">
          {sub}
        </p>
        <Link
          href={ctaHref}
          className="inline-block bg-parchment text-ink px-10 py-[18px] font-body text-[16px] font-medium rounded-[2px] transition-colors hover:bg-accent hover:text-parchment"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
