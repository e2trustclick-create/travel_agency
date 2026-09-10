"use client";

import Image from "next/image";
import { img } from "@/lib/images";
import { ButtonLink } from "@/components/ui/Button";
import { SearchWidget } from "@/components/home/SearchWidget";
import { useT } from "@/i18n/useT";

export function Hero() {
  const { t } = useT();

  return (
    <section className="relative -mt-[104px] flex min-h-[92vh] w-full items-end overflow-hidden bg-charcoal-900 sm:min-h-[100vh]">
      <Image
        src={img.heroTheth}
        alt="Alpine lake in the Albanian Alps"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/35 to-charcoal-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-40 sm:px-8 sm:pb-8 sm:pt-48 lg:px-10">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/90 ring-1 ring-white/20">
            {t.hero.badge}
          </span>
          <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-balance text-lg text-white/85 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/tours" size="lg">
              {t.common.exploreTours}
            </ButtonLink>
            <ButtonLink href="/trip-planner" size="lg" variant="outline">
              {t.common.planMyTrip}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}
