"use client";

import Image from "next/image";
import { CloudSun, MapPin, Sparkles } from "lucide-react";
import { Destination, Tour } from "@/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TourRow } from "@/components/tours/TourRow";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function DestinationDetailView({
  destination,
  relatedTours,
}: {
  destination: Destination;
  relatedTours: Tour[];
}) {
  const { t, locale } = useT();
  const name = L(destination.name, locale);

  return (
    <div className="pb-24">
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
        <Image src={destination.image} alt={name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />
        <Container className="relative z-10 pb-10">
          <p className="flex items-center gap-1.5 text-sm text-white/80">
            <MapPin size={14} /> {L(destination.region, locale)}
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium text-white sm:text-5xl">{name}</h1>
        </Container>
      </section>

      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-charcoal-600">
              {L(destination.longDescription, locale)}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {destination.gallery.map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={src} alt={name} fill sizes="240px" className="object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="flex items-center gap-2 font-display text-xl font-medium text-charcoal-900">
                <Sparkles size={18} className="text-forest-600" /> {t.destinationDetail.highlights}
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {L(destination.highlights, locale).map((h) => (
                  <li
                    key={h}
                    className="rounded-xl bg-charcoal-50 px-4 py-3 text-sm font-medium text-charcoal-700"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-sand-50 p-6 sm:p-7">
            <h3 className="flex items-center gap-2 font-display text-lg font-medium text-charcoal-900">
              <CloudSun size={18} className="text-sand-600" /> {t.destinationDetail.weatherTiming}
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-charcoal-500">{t.destinationDetail.bestMonths}</dt>
                <dd className="font-semibold text-charcoal-900">{L(destination.weather.bestMonths, locale)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-charcoal-500">{t.destinationDetail.summerAvg}</dt>
                <dd className="font-semibold text-charcoal-900">{destination.weather.avgTempSummer}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-charcoal-500">{t.destinationDetail.winterAvg}</dt>
                <dd className="font-semibold text-charcoal-900">{destination.weather.avgTempWinter}</dd>
              </div>
            </dl>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-white p-4">
              <div>
                <p className="text-xs text-charcoal-500">{t.destinationDetail.experiencesFrom}</p>
                <p className="font-display text-xl font-medium text-charcoal-900">€{destination.priceFrom}</p>
              </div>
              <ButtonLink href={`/tours?destination=${destination.slug}`} size="sm">
                {t.destinationDetail.viewTours}
              </ButtonLink>
            </div>
          </div>
        </div>

        {relatedTours.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-medium text-charcoal-900">
              {t.destinationDetail.experiencesIn} {name}
            </h2>
            <div className="mt-6">
              <TourRow tours={relatedTours} />
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
