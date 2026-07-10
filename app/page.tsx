import { getFeaturedArticle, getLatestArticles } from "@/lib/content";
import { Hero } from "@/components/home/hero";
import { LatestWriting } from "@/components/home/latest-writing";
import { BrowseByType } from "@/components/home/browse-by-type";
import { BrowseByTopic } from "@/components/home/browse-by-topic";
import { FeaturedSeries } from "@/components/home/featured-series";
import { AboutAuthorSection } from "@/components/home/about-author";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(6, featured?.slug);

  return (
    <>
      {featured && <Hero article={featured} />}
      <LatestWriting articles={latest} />
      <BrowseByType />
      <BrowseByTopic />
      <FeaturedSeries />
      <AboutAuthorSection />
      <NewsletterSection />
    </>
  );
}
