import { Hero } from "@/components/home/Hero";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { CategoryNav } from "@/components/home/CategoryNav";
import { WhyUs } from "@/components/home/WhyUs";
import { DestinationsShowcase } from "@/components/home/DestinationsShowcase";
import { InteractiveMap } from "@/components/home/InteractiveMap";
import { TripPlannerSection } from "@/components/home/TripPlannerSection";
import { ItineraryShowcase } from "@/components/home/ItineraryShowcase";
import { SocialProof } from "@/components/home/SocialProof";
import { TravelMoments } from "@/components/home/TravelMoments";
import { TravelGuideSection } from "@/components/home/TravelGuideSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiences />
      <CategoryNav />
      <WhyUs />
      <DestinationsShowcase />
      <InteractiveMap />
      <TripPlannerSection />
      <ItineraryShowcase />
      <SocialProof />
      <TravelMoments />
      <TravelGuideSection />
      <FinalCTA />
    </>
  );
}
