import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { DestinationsPageBody } from "@/components/destinations/DestinationsPageBody";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "From the Albanian Alps to the Riviera coast — explore every destination we run tours to.",
};

export default function DestinationsPage() {
  return (
    <div className="pb-24 pt-10 sm:pt-14">
      <Container>
        <DestinationsPageBody />
      </Container>
    </div>
  );
}
