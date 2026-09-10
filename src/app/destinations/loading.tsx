import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function DestinationsLoading() {
  return (
    <div className="pb-24 pt-10 sm:pt-14">
      <Container>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="mt-4 h-10 w-64" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="aspect-[4/5] w-full" />
          ))}
        </div>
      </Container>
    </div>
  );
}
