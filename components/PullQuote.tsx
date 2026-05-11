type Props = {
  children: React.ReactNode;
  cite: string;
};

/**
 * Editorial pull quote. Sits between sections as a hairline-bordered break,
 * giving a memorable line magazine-feature weight. Two accent rules — one
 * above, one below — frame the quote.
 */
export default function PullQuote({ children, cite }: Props) {
  return (
    <div className="relative z-[2] bg-parchment">
      <div className="max-w-[980px] mx-auto px-6 md:px-10 py-24 md:py-40 text-center">
        <span
          aria-hidden="true"
          className="block w-20 h-px bg-accent mx-auto mb-12"
        />
        <blockquote
          className="font-display font-normal text-ink"
          style={{
            fontSize: "clamp(24px, 4vw, 44px)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            fontVariationSettings: '"opsz" 96, "SOFT" 40',
          }}
        >
          {children}
        </blockquote>
        <span
          aria-hidden="true"
          className="block w-20 h-px bg-accent mx-auto mt-12"
        />
        <cite
          className="block not-italic font-body uppercase text-ink-mute mt-8"
          style={{ fontSize: "12px", letterSpacing: "0.18em" }}
        >
          {cite}
        </cite>
      </div>
    </div>
  );
}
