import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import { getToursByDestination } from "@/data/tours";
import { DestinationDetailView } from "@/components/destinations/DestinationDetailView";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return {
    title: destination.name.en,
    description: destination.description.en,
    openGraph: { images: [destination.image] },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();
  const relatedTours = getToursByDestination(destination.slug);

  return <DestinationDetailView destination={destination} relatedTours={relatedTours} />;
}
