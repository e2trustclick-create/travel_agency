"use client";

import Image from "next/image";
import { ItineraryDay } from "@/types";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function ItineraryTimeline({ itinerary }: { itinerary: ItineraryDay[] }) {
  const { t, locale } = useT();

  return (
    <div className="flex flex-col gap-12">
      {itinerary.map((day) => (
        <div key={day.day}>
          {itinerary.length > 1 && (
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean-700 text-sm font-semibold text-white">
                {day.day}
              </span>
              <h3 className="font-display text-xl font-medium text-charcoal-900">
                {t.tourDetail.day} {day.day} — {L(day.title, locale)}
              </h3>
            </div>
          )}
          <ol className="relative flex flex-col gap-8 border-l border-charcoal-200 pl-6 sm:pl-8">
            {day.stops.map((stop, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-white bg-ocean-700 sm:-left-[37px]" />
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                  {stop.image && (
                    <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-32">
                      <Image
                        src={stop.image}
                        alt={L(stop.title, locale)}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-ocean-700">
                      {stop.time}
                    </span>
                    <h4 className="mt-1 font-display text-base font-medium text-charcoal-900">
                      {L(stop.title, locale)}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-500">
                      {L(stop.description, locale)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
