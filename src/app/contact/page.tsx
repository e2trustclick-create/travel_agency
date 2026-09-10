import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactPageBody } from "@/components/contact/ContactPageBody";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our local team for custom itineraries, group bookings or general questions.",
};

export default function ContactPage() {
  return (
    <div className="pb-24 pt-10 sm:pt-14">
      <Container>
        <ContactPageBody />
      </Container>
    </div>
  );
}
