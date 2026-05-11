import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Design partner inquiry",
  description:
    "Caventia is taking 10 design partners in 2026. US banks $10B+ AUM, Series B+ fintechs, and health systems planning clinical AI rollouts. Conversations are with the founder directly.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel numeral="0.">Talk to us</SectionLabel>
          <h1 className="type-display-lg mt-6 max-w-[820px]">
            Conversations are with the founder. Not a sales team.
          </h1>
          <p className="type-body-lg mt-8 max-w-[640px] text-ink-mute font-light">
            We&apos;re taking ten design partners in 2026. If you are a Chief
            Model Risk Officer, Chief Medical Information Officer, or a
            founder shipping AI into a regulated workflow — write to us.
            Thirty-minute discovery calls; no decks.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-20">
          <aside>
            <p className="type-label mb-3">What to expect</p>
            <ul className="space-y-3 mb-10">
              {[
                "Reply within two business days, from the founder directly.",
                "Thirty minutes, video or audio, your choice.",
                "Specific to your regulator framework. SR 11-7 for banks, 510(k)/PCCP for health systems.",
                "No NDA required for the first conversation.",
              ].map((line) => (
                <li
                  key={line}
                  className="relative pl-5 font-body text-[14px] leading-[1.65] text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[6px] w-[8px] h-px bg-accent"
                  />
                  {line}
                </li>
              ))}
            </ul>

            <p className="type-label mb-3">Direct line</p>
            <a
              href="mailto:ashish@caventia.com"
              className="font-mono text-[14px] text-accent border-b border-accent inline-block pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
            >
              ashish@caventia.com
            </a>
          </aside>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
