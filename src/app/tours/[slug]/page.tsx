import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours, getTour, getRelatedTours } from "@/data/tours";
import { getDestination } from "@/data/destinations";
import { getReviewsForTour } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { RecordView } from "@/components/tours/RecordView";
import { RecentlyViewed } from "@/components/tours/RecentlyViewed";
import { TourDetailView } from "@/components/tours/TourDetailView";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    title: tour.name.en,
    description: tour.tagline.en,
    openGraph: {
      title: tour.name.en,
      description: tour.tagline.en,
      images: [tour.images[0]],
    },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const destination = getDestination(tour.destinationSlug);
  const reviews = getReviewsForTour(tour.slug);
  const related = getRelatedTours(tour, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name.en,
    description: tour.description.en,
    image: tour.images,
    touristType: tour.type,
    offers: {
      "@type": "Offer",
      price: tour.priceFrom,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviewCount,
    },
  };

  return (
    <div className="pb-24 pt-8 sm:pt-10">
      <RecordView slug={tour.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        <TourDetailView tour={tour} destination={destination} reviews={reviews} related={related} />
      </Container>

      <RecentlyViewed exclude={tour.slug} />
    </div>
  );
}
