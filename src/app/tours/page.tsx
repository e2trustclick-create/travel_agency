import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ToursExplorer } from "@/components/tours/ToursExplorer";
import { ToursPageHeader } from "@/components/tours/ToursPageHeader";

export const metadata: Metadata = {
  title: "All Tours & Experiences",
  description:
    "Browse day trips, multi-day treks, private tours and adventures across Albania. Filter by destination, price, duration and difficulty.",
};

export default function ToursPage() {
  return (
    <div className="pt-10 pb-20 sm:pt-14">
      <Container>
        <ToursPageHeader />
        <Suspense>
          <ToursExplorer />
        </Suspense>
      </Container>
    </div>
  );
}
