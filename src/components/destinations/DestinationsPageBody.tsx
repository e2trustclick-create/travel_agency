"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function DestinationsPageBody() {
  const { t, locale } = useT();

  return (
    <>
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
          {t.destinationsPage.eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-medium text-charcoal-900 sm:text-5xl">
          {t.destinationsPage.title}
        </h1>
        <p className="mt-3 text-lg text-charcoal-500">{t.destinationsPage.subtitle}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={d.image}
              alt={L(d.name, locale)}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/70">{L(d.region, locale)}</p>
                <h2 className="font-display text-2xl font-medium text-white">{L(d.name, locale)}</h2>
                <p className="mt-1 text-sm text-white/80">
                  {d.tourCount} {t.destinationsPage.experiences} · {t.destinationsPage.from} €{d.priceFrom}
                </p>
              </div>
              <span className="flex translate-y-2 items-center gap-1 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
