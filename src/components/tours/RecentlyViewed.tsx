"use client";

import { useAppState } from "@/context/AppStateContext";
import { getTour } from "@/data/tours";
import { TourRow } from "@/components/tours/TourRow";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useT } from "@/i18n/useT";

export function RecentlyViewed({ exclude }: { exclude?: string }) {
  const { recentlyViewed } = useAppState();
  const { t } = useT();
  const tours = recentlyViewed
    .filter((slug) => slug !== exclude)
    .map((slug) => getTour(slug))
    .filter((tr): tr is NonNullable<typeof tr> => Boolean(tr));

  if (tours.length === 0) return null;

  return (
    <section className="py-16">
      <Container>
        <SectionHeading eyebrow={t.recentlyViewed.eyebrow} title={t.recentlyViewed.title} />
        <div className="mt-8">
          <TourRow tours={tours} />
        </div>
      </Container>
    </section>
  );
}
