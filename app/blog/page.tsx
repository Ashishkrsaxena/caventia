import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Marginalia from "@/components/Marginalia";
import { getAllPosts } from "@/lib/mdx";
import { getCategory } from "@/lib/blog-types";

export const metadata: Metadata = {
  title: "Notes - Vertical AI governance, written down",
  description:
    "Founder notes and frameworks on the 2026 MRM Guidance, FDA, ECOA and the vertical AI governance work behind Caventia.",
  alternates: { canonical: "/blog" },
};

// Frontmatter dates are already ISO (YYYY-MM-DD). Display as-is to avoid
// timezone-shift bugs and to keep dates locale-stable.
function formatDate(dateStr: string): string {
  return dateStr;
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <Marginalia numeral="VIII" position="top-right" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <SectionLabel>Notes</SectionLabel>
          <h1
            className="font-display font-normal text-ink mt-6 max-w-[920px]"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 120, "SOFT" 30',
            }}
          >
            Vertical AI governance, written down.
          </h1>
          <p className="type-body-lg mt-8 max-w-[640px] text-ink-mute font-light">
            Frameworks, regulator-specific working notes and founder
            commentary on the slow problem of making AI legible to the
            people who read it for a living.
          </p>
        </div>
      </section>

      {/* Posts list */}
      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28">
          {posts.length === 0 ? (
            <p className="font-mono text-[13px] tracking-[0.06em] uppercase text-ink-mute">
              First posts shipping shortly. Watch this space.
            </p>
          ) : (
            <ul className="space-y-12 max-w-[820px] mx-auto md:mx-0">
              {posts.map((post) => {
                const cat = getCategory(post.category);
                return (
                  <li
                    key={post.slug}
                    className="border-b border-rule pb-12 last:border-b-0 last:pb-0"
                  >
                    {cat && (
                      <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent mb-4">
                        {cat.name}
                      </p>
                    )}
                    <h2 className="font-display text-[28px] md:text-[36px] font-medium leading-[1.15] tracking-[-0.02em] text-ink mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="font-body text-[17px] text-ink-mute leading-[1.6] mb-5 max-w-[640px]">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 font-mono text-[12px] tracking-[0.04em] uppercase text-ink-light">
                      <span>{formatDate(post.date)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime} min read</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.author}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
