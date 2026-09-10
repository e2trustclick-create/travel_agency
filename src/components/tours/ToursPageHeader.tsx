"use client";

import { useT } from "@/i18n/useT";

export function ToursPageHeader() {
  const { t } = useT();
  return (
    <div className="mb-10 max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
        {t.toursPage.eyebrow}
      </span>
      <h1 className="mt-3 font-display text-4xl font-medium text-charcoal-900 sm:text-5xl">
        {t.toursPage.title}
      </h1>
      <p className="mt-3 text-lg text-charcoal-500">{t.toursPage.subtitle}</p>
    </div>
  );
}
