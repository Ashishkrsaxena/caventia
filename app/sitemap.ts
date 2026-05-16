import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/platform", priority: 0.9 },
    { path: "/sr117", priority: 0.9 },
    { path: "/fda", priority: 0.9 },
    { path: "/design-partners", priority: 0.9 },
    { path: "/blog", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/research", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/legal/privacy", priority: 0.3 },
    { path: "/legal/terms", priority: 0.3 },
  ];

  const staticEntries = routes.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
