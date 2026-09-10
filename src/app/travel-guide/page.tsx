import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TravelGuidePageBody } from "@/components/blog/TravelGuidePageBody";

export const metadata: Metadata = {
  title: "Travel Guide",
  description: "Practical guides, itineraries and field notes for planning your trip to Albania.",
};

export default function TravelGuidePage() {
  return (
    <div className="pb-24 pt-10 sm:pt-14">
      <Container>
        <TravelGuidePageBody />
      </Container>
    </div>
  );
}
