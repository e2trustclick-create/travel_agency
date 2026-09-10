"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { img } from "@/lib/images";
import { useT } from "@/i18n/useT";

export function FinalCTA() {
  const { t } = useT();
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-charcoal-950">
      <Image
        src={img.heroValley}
        alt="Sunrise over the Albanian mountains"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal-950/60" />
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-24 text-center">
        <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          {t.finalCta.title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/tours" size="lg">
            {t.common.exploreTours}
          </ButtonLink>
          <ButtonLink href="/trip-planner" size="lg" variant="outline">
            {t.common.planMyTrip}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
