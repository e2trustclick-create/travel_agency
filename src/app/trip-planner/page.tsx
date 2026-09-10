import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TripPlannerPageBody } from "@/components/trip-planner/TripPlannerPageBody";

export const metadata: Metadata = {
  title: "Trip Planner",
  description: "Tell us what you're looking for and get a personalized Albania itinerary in seconds.",
};

export default function TripPlannerPage() {
  return (
    <div className="pb-24 pt-10 sm:pt-14">
      <Container>
        <TripPlannerPageBody />
      </Container>
    </div>
  );
}
