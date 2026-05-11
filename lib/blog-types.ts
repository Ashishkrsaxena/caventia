export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  // One of the slugs in BLOG_CATEGORIES below.
  category: string;
  tags?: string[];
  // Set readTime explicitly to override the reading-time calculation
  // (useful for short posts where the auto-estimate rounds to zero).
  readTime?: number;
  featured?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
  readTime: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

// Caventia blog categories. Restrained list. The taxonomy mirrors the
// platform itself: each regulator framework gets a category, plus a
// generic "Frameworks" bucket for cross-cutting posts and a "Notes"
// bucket for founder commentary.
export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: "sr11-7", name: "SR 11-7", slug: "sr11-7" },
  { id: "fda", name: "FDA", slug: "fda" },
  { id: "ecoa", name: "ECOA & fair lending", slug: "ecoa" },
  { id: "frameworks", name: "Frameworks", slug: "frameworks" },
  { id: "notes", name: "Founder notes", slug: "notes" },
];

export function getCategory(id: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.id === id);
}
