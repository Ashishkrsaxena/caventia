import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { getCategory } from "@/lib/blog-types";

// Frontmatter dates are already ISO (YYYY-MM-DD). Display as-is to avoid
// timezone-shift bugs from `new Date(...)` parsing UTC midnight as the
// previous local day. Also keeps dates locale-stable.
function formatDate(dateStr: string): string {
  return dateStr;
}

/**
 * Home-page teaser for the latest two blog posts. Sits between
 * FounderBlock and StatFrame so the page flow reads:
 *   credentials -> recent writing -> citation stat -> personal letter.
 *
 * Reads MDX files on the server; no client bundle.
 */
export default function LatestNotes() {
  const posts = getAllPosts().slice(0, 2);
  if (posts.length === 0) return null;

  return (
    <section className="relative bg-parchment border-y border-rule z-[2]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <p
          className="font-body font-medium uppercase text-ink-mute inline-flex items-center gap-2.5 mb-5"
          style={{ fontSize: "11px", letterSpacing: "0.18em" }}
        >
          <span aria-hidden="true" className="w-6 h-px bg-accent" />
          Notes from the founder
        </p>

        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-12 md:mb-16">
          <h2
            className="font-display font-normal text-ink max-w-[640px]"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontVariationSettings: '"opsz" 96, "SOFT" 30',
            }}
          >
            Recently published.
          </h2>
          <Link
            href="/blog"
            className="font-body text-[15px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors whitespace-nowrap"
          >
            All notes →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {posts.map((post) => {
            const cat = getCategory(post.category);
            return (
              <article key={post.slug} className="border-t border-rule pt-8">
                {cat && (
                  <p
                    className="font-mono uppercase text-accent mb-3"
                    style={{ fontSize: "11px", letterSpacing: "0.12em" }}
                  >
                    {cat.name}
                  </p>
                )}
                <h3
                  className="font-display font-medium text-ink mb-3 leading-[1.15] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="font-body text-[16px] text-ink-mute leading-[1.6] mb-5">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.04em] uppercase text-ink-light mb-5">
                  <span>{formatDate(post.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime} min read</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-body text-[14px] font-medium text-accent border-b border-accent pb-[2px] hover:text-link-hover hover:border-link-hover transition-colors"
                >
                  Read the note
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
