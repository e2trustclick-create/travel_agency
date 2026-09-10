"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TripPlannerQuiz } from "@/components/trip-planner/TripPlannerQuiz";
import { useT } from "@/i18n/useT";

export function TripPlannerSection() {
  const { t } = useT();

  return (
    <section className="bg-sand-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.tripPlanner.eyebrow}
          title={t.tripPlanner.title}
          description={t.tripPlanner.subtitle}
          align="center"
        />
        <div className="mx-auto mt-10 max-w-2xl">
          <TripPlannerQuiz />
        </div>
      </Container>
    </section>
  );
}
