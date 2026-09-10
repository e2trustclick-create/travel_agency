"use client";

import Link from "next/link";
import {
  Clock,
  Gauge,
  Users,
  MapPin,
  Check,
  X as XIcon,
  ChevronRight,
} from "lucide-react";
import { Tour, Destination, Review } from "@/types";
import { Rating } from "@/components/ui/Rating";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { TourCard } from "@/components/tours/TourCard";
import { ImageGallery } from "@/components/tours/ImageGallery";
import { BookingWidget } from "@/components/tours/BookingWidget";
import { ItineraryTimeline } from "@/components/tours/ItineraryTimeline";
import { TourActions } from "@/components/tours/TourActions";
import { useT } from "@/i18n/useT";
import { L, difficultyLabels } from "@/lib/i18n";

export function TourDetailView({
  tour,
  destination,
  reviews,
  related,
}: {
  tour: Tour;
  destination?: Destination;
  reviews: Review[];
  related: Tour[];
}) {
  const { t, locale } = useT();
  const tourName = L(tour.name, locale);

  return (
    <>
      <div className="mb-4 flex items-center gap-1.5 text-sm text-charcoal-400">
        <Link href="/tours" className="hover:text-charcoal-600">
          {t.tourDetail.breadcrumbTours}
        </Link>
        <ChevronRight size={14} />
        <span className="text-charcoal-600">{tourName}</span>
      </div>

      <ImageGallery images={tour.images} alt={tourName} />

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-sm text-charcoal-500">
                <MapPin size={14} /> {L(tour.location, locale)}
              </div>
              <h1 className="mt-1 font-display text-3xl font-medium text-charcoal-900 sm:text-4xl">
                {tourName}
              </h1>
              <div className="mt-3 flex items-center gap-4">
                <Rating rating={tour.rating} reviewCount={tour.reviewCount} size="md" />
              </div>
            </div>
            <TourActions slug={tour.slug} name={tourName} />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-charcoal-50 p-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-1 text-center">
              <Clock size={18} className="text-ocean-700" />
              <span className="text-xs text-charcoal-500">{t.tourDetail.duration}</span>
              <span className="text-sm font-semibold text-charcoal-900">{L(tour.durationLabel, locale)}</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-charcoal-200 text-center">
              <Gauge size={18} className="text-ocean-700" />
              <span className="text-xs text-charcoal-500">{t.tourDetail.difficulty}</span>
              <span className="text-sm font-semibold text-charcoal-900">
                {difficultyLabels[locale][tour.difficulty]}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Users size={18} className="text-ocean-700" />
              <span className="text-xs text-charcoal-500">{t.tourDetail.groupSize}</span>
              <span className="text-sm font-semibold text-charcoal-900">
                {t.tourDetail.upTo} {tour.groupSize}
              </span>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="font-display text-xl font-medium text-charcoal-900">{t.tourDetail.overview}</h2>
            <p className="mt-3 leading-relaxed text-charcoal-600">{L(tour.description, locale)}</p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {L(tour.highlights, locale).map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-charcoal-700">
                  <Check size={16} className="mt-0.5 shrink-0 text-forest-600" />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-medium text-charcoal-900">{t.tourDetail.itinerary}</h2>
            <div className="mt-6">
              <ItineraryTimeline itinerary={tour.itinerary} />
            </div>
          </section>

          <section className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-medium text-charcoal-900">{t.tourDetail.included}</h3>
              <ul className="mt-3 space-y-2">
                {L(tour.included, locale).map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal-600">
                    <Check size={15} className="mt-0.5 shrink-0 text-forest-600" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-charcoal-900">{t.tourDetail.notIncluded}</h3>
              <ul className="mt-3 space-y-2">
                {L(tour.excluded, locale).map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal-600">
                    <XIcon size={15} className="mt-0.5 shrink-0 text-charcoal-400" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {destination && (
            <section className="mt-10">
              <h2 className="font-display text-xl font-medium text-charcoal-900">{t.tourDetail.goodToKnow}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 rounded-2xl bg-sand-50 p-5 sm:grid-cols-3">
                <div>
                  <span className="text-xs text-charcoal-500">{t.tourDetail.bestMonths}</span>
                  <p className="text-sm font-semibold text-charcoal-900">{L(destination.weather.bestMonths, locale)}</p>
                </div>
                <div>
                  <span className="text-xs text-charcoal-500">{t.tourDetail.summerAvg}</span>
                  <p className="text-sm font-semibold text-charcoal-900">{destination.weather.avgTempSummer}</p>
                </div>
                <div>
                  <span className="text-xs text-charcoal-500">{t.tourDetail.winterAvg}</span>
                  <p className="text-sm font-semibold text-charcoal-900">{destination.weather.avgTempWinter}</p>
                </div>
              </div>
            </section>
          )}

          {reviews.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-xl font-medium text-charcoal-900">
                {t.tourDetail.travelerReviews}
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {reviews.map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <BookingWidget tour={tour} />
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-medium text-charcoal-900">
            {t.tourDetail.youMightAlsoLike}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((tr) => (
              <TourCard key={tr.slug} tour={tr} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
