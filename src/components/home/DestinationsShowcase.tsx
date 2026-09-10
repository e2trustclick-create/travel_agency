"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { destinations } from "@/data/destinations";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

const featuredSlugs = [
  "theth",
  "shala-river",
  "ksamil",
  "berat",
  "gjirokaster",
  "koman-lake",
];

export function DestinationsShowcase() {
  const { t, locale } = useT();
  const items = destinations.filter((d) => featuredSlugs.includes(d.slug));

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.destinationsShowcase.eyebrow}
          title={t.destinationsShowcase.title}
          description={t.destinationsShowcase.description}
          action={
            <ButtonLink href="/destinations" variant="outline">
              {t.common.allDestinations}
            </ButtonLink>
          }
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {items.map((d, i) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 aspect-[16/9] lg:col-span-1 lg:aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={d.image}
                alt={L(d.name, locale)}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent transition-opacity group-hover:from-charcoal-950/90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/70">{L(d.region, locale)}</p>
                  <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
                    {L(d.name, locale)}
                  </h3>
                </div>
                <span className="flex translate-y-2 items-center gap-1 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {t.common.explore} <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
