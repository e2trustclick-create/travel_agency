"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { img } from "@/lib/images";
import { useT } from "@/i18n/useT";

const moments = [
  { src: img.thethLake, span: "row-span-2" },
  { src: img.ksamilBeach, span: "" },
  { src: img.beratStone, span: "" },
  { src: img.himareCliffs, span: "row-span-2" },
  { src: img.shalaRiver, span: "" },
  { src: img.gjirokastraRoofs, span: "" },
  { src: img.mountainPeakClouds, span: "row-span-2" },
  { src: img.korcaTown, span: "" },
];

export function TravelMoments() {
  const { t } = useT();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
            <InstagramIcon width={14} height={14} /> {t.travelMoments.follow}
          </span>
          <h2 className="font-display text-3xl font-medium text-charcoal-900 sm:text-4xl">
            @gjelbertravel
          </h2>
          <p className="max-w-md text-charcoal-500">
            {t.travelMoments.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[140px] sm:gap-4">
          {moments.map((m, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${m.span || "aspect-square sm:aspect-auto"}`}
            >
              <Image
                src={m.src}
                alt="Travel moment in Albania"
                fill
                sizes="300px"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
