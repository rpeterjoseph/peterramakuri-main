import GithubSlugger from "github-slugger";

export type TocEntry = {
  id: string;
  text: string;
  depth: 2 | 3;
};

const HEADING_RE = /^(#{2,3})\s+(.*)$/gm;

export function extractToc(markdown: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const entries: TocEntry[] = [];
  const withoutCode = markdown.replace(/```[\s\S]*?```/g, "");

  for (const match of withoutCode.matchAll(HEADING_RE)) {
    const depth = match[1].length as 2 | 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    const id = slugger.slug(text);
    entries.push({ id, text, depth });
  }

  return entries;
}
