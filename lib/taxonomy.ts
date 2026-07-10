export const PUBLICATION_TYPES = [
  "literature-review",
  "commentary",
  "case-report",
  "essay",
  "educational-guide",
  "scientific-article",
] as const;

export type PublicationType = (typeof PUBLICATION_TYPES)[number];

export const PUBLICATION_TYPE_LABEL: Record<PublicationType, string> = {
  "literature-review": "Literature Review",
  commentary: "Commentary",
  "case-report": "Case Report",
  essay: "Essay",
  "educational-guide": "Educational Guide",
  "scientific-article": "Scientific Article",
};

export const PUBLICATION_TYPE_ARCHIVE_ROUTE: Partial<Record<PublicationType, string>> = {
  "literature-review": "/literature-reviews",
  commentary: "/commentaries",
  "case-report": "/case-reports",
};

export const PEER_REVIEW_STATUSES = [
  "independent-not-peer-reviewed",
  "preprint",
  "peer-reviewed",
] as const;

export type PeerReviewStatus = (typeof PEER_REVIEW_STATUSES)[number];

export const PEER_REVIEW_STATUS_LABEL: Record<PeerReviewStatus, string> = {
  "independent-not-peer-reviewed": "Independent — Not Peer-Reviewed",
  preprint: "Preprint",
  "peer-reviewed": "Peer-Reviewed",
};

export const PUBLICATION_STATUSES = ["draft", "published", "revised"] as const;
export type PublicationStatus = (typeof PUBLICATION_STATUSES)[number];

export const TOPICS = [
  { slug: "cardiovascular-medicine", label: "Cardiovascular Medicine" },
  { slug: "human-biology", label: "Human Biology" },
  { slug: "public-health", label: "Public Health" },
  { slug: "medical-ethics", label: "Medical Ethics" },
  { slug: "health-policy", label: "Health Policy" },
  { slug: "science-and-society", label: "Science and Society" },
] as const;

export type TopicSlug = (typeof TOPICS)[number]["slug"];

export function topicLabel(slug: string): string {
  return TOPICS.find((t) => t.slug === slug)?.label ?? slug;
}
