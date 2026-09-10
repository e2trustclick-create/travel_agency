"use client";

import { TripPlannerQuiz } from "@/components/trip-planner/TripPlannerQuiz";
import { useT } from "@/i18n/useT";

export function TripPlannerPageBody() {
  const { t } = useT();
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
          {t.tripPlannerPage.eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-medium text-charcoal-900 sm:text-5xl">
          {t.tripPlannerPage.title}
        </h1>
        <p className="mt-3 text-lg text-charcoal-500">{t.tripPlannerPage.subtitle}</p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl">
        <TripPlannerQuiz />
      </div>
    </>
  );
}
