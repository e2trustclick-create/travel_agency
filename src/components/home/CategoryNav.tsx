"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function CategoryNav() {
  const { t, locale } = useT();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow={t.categoryNav.eyebrow} title={t.categoryNav.title} />
        <div className="mt-10 -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/tours?category=${category.slug}`}
              className="group relative w-32 shrink-0 overflow-hidden rounded-2xl sm:w-auto"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={category.image}
                  alt={L(category.name, locale)}
                  fill
                  sizes="180px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent" />
              </div>
              <span className="absolute inset-x-0 bottom-3 px-3 text-center text-sm font-medium text-white">
                {L(category.name, locale)}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
