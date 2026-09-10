"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { TourRow } from "@/components/tours/TourRow";
import { tours } from "@/data/tours";
import { useT } from "@/i18n/useT";

export function FeaturedExperiences() {
  const { t } = useT();
  const featured = tours.filter((tr) => tr.featured).slice(0, 8);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.featured.eyebrow}
          title={t.featured.title}
          description={t.featured.description}
          action={
            <ButtonLink href="/tours" variant="outline">
              {t.common.viewAllTours}
            </ButtonLink>
          }
        />
        <div className="mt-10">
          <TourRow tours={featured} />
        </div>
      </Container>
    </section>
  );
}
