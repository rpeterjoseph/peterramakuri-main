import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { frontmatterSchema, type Frontmatter } from "./schema";
import type { PublicationType } from "./taxonomy";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type Article = Frontmatter & {
  slug: string;
  content: string;
  readingTimeMinutes: number;
};

function readArticleFile(filename: string): Article {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.parse(data);
  const stats = readingTime(content);
  return {
    ...parsed,
    slug,
    content,
    readingTimeMinutes: Math.max(1, Math.ceil(stats.minutes)),
  };
}

let cache: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (cache) return cache;
  if (!fs.existsSync(ARTICLES_DIR)) {
    cache = [];
    return cache;
  }
  const filenames = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  const articles = filenames
    .map(readArticleFile)
    .filter((a) => a.publicationStatus !== "draft")
    .sort((a, b) => +new Date(b.publishedDate) - +new Date(a.publishedDate));
  cache = articles;
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticlesByType(type: PublicationType): Article[] {
  return getAllArticles().filter((a) => a.publicationType === type);
}

export function getArticlesByTopic(topicSlug: string): Article[] {
  return getAllArticles().filter((a) => a.topics.includes(topicSlug));
}

export function getFeaturedArticle(): Article | undefined {
  const featured = getAllArticles().find((a) => a.featured);
  return featured ?? getAllArticles()[0];
}

export function getLatestArticles(limit = 6, excludeSlug?: string): Article[] {
  return getAllArticles().filter((a) => a.slug !== excludeSlug).slice(0, limit);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const others = getAllArticles().filter((a) => a.slug !== article.slug);
  const scored = others.map((candidate) => {
    const sharedTopics = candidate.topics.filter((t) => article.topics.includes(t)).length;
    const sameType = candidate.publicationType === article.publicationType ? 1 : 0;
    const sameSeries = article.series && candidate.series === article.series ? 5 : 0;
    return { candidate, score: sharedTopics * 2 + sameType + sameSeries };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.candidate);
}

export function getArticlesBySeries(seriesSlug: string): Article[] {
  return getAllArticles()
    .filter((a) => a.series === seriesSlug)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
}

export function getAllTopicsInUse(): string[] {
  const set = new Set<string>();
  getAllArticles().forEach((a) => a.topics.forEach((t) => set.add(t)));
  return Array.from(set);
}
