import type { Article } from "./content";
import { siteConfig } from "./site-config";

export function buildCitation(article: Article): string {
  const year = new Date(article.publishedDate).getFullYear();
  const surnameFirst = article.author
    .split(" ")
    .reverse()
    .join(", ");
  const doiPart = article.doi ? ` https://doi.org/${article.doi.replace(/^https?:\/\/doi\.org\//, "")}` : "";
  return `${surnameFirst} (${year}). ${article.title}. ${siteConfig.name}.${doiPart}`;
}

export function buildBibtex(article: Article): string {
  const year = new Date(article.publishedDate).getFullYear();
  const key = `${article.author.split(" ").pop()?.toLowerCase()}${year}${article.slug.split("-")[0]}`;
  return [
    `@misc{${key},`,
    `  author = {${article.author}},`,
    `  title = {${article.title}},`,
    `  year = {${year}},`,
    `  publisher = {${siteConfig.name}},`,
    article.doi ? `  doi = {${article.doi}},` : undefined,
    `  url = {${siteConfig.url}/writing/${article.slug}}`,
    `}`,
  ]
    .filter(Boolean)
    .join("\n");
}
