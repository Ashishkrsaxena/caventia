import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogFrontmatter } from "./blog-types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getMdxFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
}

function parsePost(slug: string, fileContent: string): BlogPost {
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogFrontmatter;
  const stats = readingTime(content);
  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    author: frontmatter.author,
    category: frontmatter.category,
    tags: frontmatter.tags ?? [],
    featured: frontmatter.featured ?? false,
    readTime: frontmatter.readTime ?? Math.max(1, Math.ceil(stats.minutes)),
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const files = getMdxFiles();
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    return parsePost(slug, raw);
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return parsePost(slug, raw);
}
