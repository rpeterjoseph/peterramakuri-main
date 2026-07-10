import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";
import { SERIES } from "@/lib/series";
import { TOPICS } from "@/lib/taxonomy";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/writing",
    "/literature-reviews",
    "/commentaries",
    "/case-reports",
    "/topics",
    "/about",
    "/cv",
    "/contact",
    "/search",
    "/policies/citation",
    "/policies/editorial",
    "/policies/privacy",
    "/policies/medical-disclaimer",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const articleRoutes = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/writing/${article.slug}`,
    lastModified: new Date(article.revisedDate ?? article.publishedDate),
  }));

  const topicRoutes = TOPICS.map((topic) => ({
    url: `${siteConfig.url}/topics/${topic.slug}`,
    lastModified: new Date(),
  }));

  const seriesRoutes = SERIES.map((series) => ({
    url: `${siteConfig.url}/series/${series.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes, ...topicRoutes, ...seriesRoutes];
}
