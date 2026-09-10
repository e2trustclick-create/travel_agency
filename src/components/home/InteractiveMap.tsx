"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";
import { getToursByDestination } from "@/data/tours";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function InteractiveMap() {
  const { t, locale } = useT();
  const [activeSlug, setActiveSlug] = useState(destinations[3].slug);
  const active = destinations.find((d) => d.slug === activeSlug) ?? destinations[0];
  const tourCount = getToursByDestination(active.slug).length || active.tourCount;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow={t.interactiveMap.eyebrow} title={t.interactiveMap.title} />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Map panel */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ocean-50 via-sand-50 to-forest-50 ring-1 ring-charcoal-100 sm:aspect-[5/4]">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full opacity-[0.35]"
            >
              <path
                d="M30 4 C 22 10, 34 16, 26 24 C 18 30, 30 36, 24 44 C 18 52, 34 58, 30 68 C 26 78, 40 82, 36 92 C 44 96, 54 90, 50 80 C 58 74, 50 64, 58 56 C 66 50, 56 42, 62 34 C 68 26, 56 18, 60 8 C 50 2, 38 8, 30 4 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                className="text-forest-600"
              />
            </svg>

            {destinations.map((d) => (
              <button
                key={d.slug}
                onClick={() => setActiveSlug(d.slug)}
                style={{ left: `${d.coordinates.x}%`, top: `${d.coordinates.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={`Show ${L(d.name, locale)} on map`}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white transition-all duration-200",
                    activeSlug === d.slug
                      ? "scale-125 bg-ocean-700"
                      : "bg-forest-600 group-hover:scale-110"
                  )}
                >
                  {activeSlug === d.slug && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-ocean-700/50" />
                  )}
                </span>
                <span
                  className={cn(
                    "absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-medium text-charcoal-800 shadow-soft transition-opacity",
                    activeSlug === d.slug ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                >
                  {L(d.name, locale)}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="flex flex-col overflow-hidden rounded-[1.75rem] ring-1 ring-charcoal-100">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={active.image}
                alt={L(active.name, locale)}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-1.5 text-white">
                <MapPin size={15} />
                <span className="text-sm font-medium">{L(active.region, locale)}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 bg-white p-6 sm:p-8">
              <h3 className="font-display text-2xl font-medium text-charcoal-900">
                {L(active.name, locale)}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal-500">{L(active.description, locale)}</p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="block font-semibold text-charcoal-900">{tourCount}</span>
                  <span className="text-charcoal-400">{t.interactiveMap.experiences}</span>
                </div>
                <div>
                  <span className="block font-semibold text-charcoal-900">€{active.priceFrom}</span>
                  <span className="text-charcoal-400">{t.interactiveMap.startingPrice}</span>
                </div>
              </div>
              <Link
                href={`/destinations/${active.slug}`}
                className="mt-auto inline-flex items-center gap-2 rounded-full bg-ocean-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-800"
              >
                {t.common.explore} {L(active.name, locale)} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
