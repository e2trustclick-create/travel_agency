import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { tours, getTour } from "@/data/tours";
import { Container } from "@/components/ui/Container";
import { BookingFlow } from "@/components/booking/BookingFlow";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export const metadata: Metadata = {
  title: "Complete Your Booking",
};

export default async function BookingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  return (
    <div className="pb-24 pt-10 sm:pt-14">
      <Container>
        <Suspense>
          <BookingFlow tour={tour} />
        </Suspense>
      </Container>
    </div>
  );
}
