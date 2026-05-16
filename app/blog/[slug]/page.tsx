import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { LinkButton } from "@/components/ui/Button";
import Vignette from "@/components/Vignette";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { getCategory } from "@/lib/blog-types";

const mdxComponents = { Vignette };

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = `/api/og?title=${encodeURIComponent(post.title)}&desc=${encodeURIComponent(
    post.description.slice(0, 120)
  )}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${SITE_URL}/blog/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

// Frontmatter dates are already ISO (YYYY-MM-DD). Display as-is to avoid
// timezone-shift bugs and to keep dates locale-stable.
function formatDate(dateStr: string): string {
  return dateStr;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cat = getCategory(post.category);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Caventia",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-[820px] mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-ink-mute mb-10"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Notes
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink-light truncate">{post.title}</span>
        </nav>

        {/* Category */}
        {cat && (
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent mb-5">
            {cat.name}
          </p>
        )}

        {/* Title */}
        <h1
          className="font-display font-normal text-ink mb-6"
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            fontVariationSettings: '"opsz" 96, "SOFT" 30',
          }}
        >
          {post.title}
        </h1>

        {/* Description */}
        <p className="font-display italic text-[20px] md:text-[22px] text-ink-mute leading-[1.4] mb-10">
          {post.description}
        </p>

        {/* Byline */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-[12px] tracking-[0.04em] uppercase text-ink-mute pb-8 border-b border-rule mb-12">
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime} min read</span>
          <span aria-hidden="true">·</span>
          <span>{post.author}</span>
        </div>

        {/* MDX body */}
        <div className="prose-caventia">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {/* Footer: discovery-call CTA, the only conversion the blog
            should drive while the content compounds. */}
        <div className="mt-20 pt-12 border-t border-rule">
          <p className="font-mono text-[12px] tracking-[0.06em] uppercase text-ink-mute mb-4">
            From the founder
          </p>
          <h2 className="font-display text-[28px] md:text-[36px] font-medium leading-[1.15] tracking-[-0.02em] text-ink mb-6 max-w-[640px]">
            If this resonates, talk to the founder directly.
          </h2>
          <p className="font-body text-[17px] text-ink-mute leading-[1.65] mb-8 max-w-[600px]">
            Caventia is taking five design partners in 2026. Conversations are
            with Ashish K. Saxena, not a sales team. Thirty minutes, your
            specific regulator gap, no purchase obligation.
          </p>
          <div className="flex flex-col xs:flex-row gap-4">
            <LinkButton href="/contact" variant="primary">
              Talk to the founder
            </LinkButton>
            <LinkButton href="/blog" variant="secondary">
              ← All notes
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
}
