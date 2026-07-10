export type SeriesMeta = {
  slug: string;
  title: string;
  description: string;
};

export const SERIES: SeriesMeta[] = [
  {
    slug: "understanding-the-cardiovascular-system",
    title: "Understanding the Cardiovascular System",
    description:
      "An ongoing series translating core cardiovascular physiology and disease mechanisms for students and general readers.",
  },
];

export function getSeriesMeta(slug: string): SeriesMeta | undefined {
  return SERIES.find((s) => s.slug === slug);
}
