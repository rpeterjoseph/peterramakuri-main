import { z } from "zod";
import { PEER_REVIEW_STATUSES, PUBLICATION_STATUSES, PUBLICATION_TYPES } from "./taxonomy";

export const versionHistoryEntrySchema = z.object({
  version: z.string(),
  date: z.string(),
  note: z.string(),
});

export const frontmatterSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  abstract: z.string(),
  author: z.string().default("Peter Ramakuri"),
  orcid: z.string().optional(),
  publicationType: z.enum(PUBLICATION_TYPES),
  topics: z.array(z.string()).default([]),
  keywords: z.array(z.string()).default([]),
  publishedDate: z.string(),
  revisedDate: z.string().optional(),
  version: z.string().default("1.0"),
  doi: z.string().optional(),
  zenodoUrl: z.string().optional(),
  pdfUrl: z.string().optional(),
  peerReviewStatus: z.enum(PEER_REVIEW_STATUSES).default("independent-not-peer-reviewed"),
  publicationStatus: z.enum(PUBLICATION_STATUSES).default("published"),
  disclosureStatement: z
    .string()
    .default("The author declares no financial or personal conflicts of interest relevant to this work."),
  featuredImage: z.string().optional(),
  featuredImageAlt: z.string().optional(),
  series: z.string().optional(),
  seriesOrder: z.number().optional(),
  featured: z.boolean().default(false),
  versionHistory: z.array(versionHistoryEntrySchema).default([]),
  consentStatement: z.string().optional(),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;
