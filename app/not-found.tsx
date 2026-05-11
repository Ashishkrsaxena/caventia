import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section>
      <div className="max-w-[820px] mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-24 md:pb-32">
        <SectionLabel numeral="404.">Page not found</SectionLabel>

        <h1 className="type-display-lg mt-6 mb-8">
          That page isn&apos;t here.
        </h1>

        <p className="type-body-lg text-ink-mute font-light mb-12 max-w-[620px]">
          The URL may be stale, mistyped, or pointing to a page that hasn&apos;t
          been built yet. The rest of the site is below.
        </p>

        <div className="flex flex-col xs:flex-row gap-4 mb-16">
          <LinkButton href="/" variant="primary">
            Back to home
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Talk to the founder
          </LinkButton>
        </div>

        <div className="pt-12 border-t border-rule">
          <p className="type-label mb-6">Common destinations</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/platform", label: "Platform - four products" },
              { href: "/sr117", label: "SR 11-7 whitepaper" },
              { href: "/about", label: "About the founder" },
              { href: "/research", label: "Research" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-[15px] text-ink hover:text-accent transition-colors border-b border-rule hover:border-accent inline-block pb-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
