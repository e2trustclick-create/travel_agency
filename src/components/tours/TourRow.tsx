import { Tour } from "@/types";
import { TourCard } from "@/components/tours/TourCard";

export function TourRow({ tours }: { tours: Tour[] }) {
  return (
    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
      {tours.map((tour) => (
        <TourCard
          key={tour.slug}
          tour={tour}
          className="w-[78vw] shrink-0 snap-start sm:w-auto sm:shrink"
        />
      ))}
    </div>
  );
}
