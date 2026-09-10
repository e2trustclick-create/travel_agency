"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ItineraryTimeline } from "@/components/tours/ItineraryTimeline";
import { getTour } from "@/data/tours";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function ItineraryShowcase() {
  const { t, locale } = useT();
  const tour = getTour("theth-blue-eye-adventure");
  if (!tour) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={t.itineraryShowcase.eyebrow}
              title={t.itineraryShowcase.title}
              description={t.itineraryShowcase.description}
            />
            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem]">
              <Image src={tour.images[0]} alt={L(tour.name, locale)} fill sizes="600px" className="object-cover" />
            </div>
            <ButtonLink href={`/tours/${tour.slug}`} className="mt-6">
              {t.itineraryShowcase.seeFullItinerary} <ArrowRight size={16} className="ml-1" />
            </ButtonLink>
          </div>

          <div className="rounded-[1.75rem] bg-sand-50 p-6 sm:p-10">
            <ItineraryTimeline itinerary={tour.itinerary} />
          </div>
        </div>
      </Container>
    </section>
  );
}
