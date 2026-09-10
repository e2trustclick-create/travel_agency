import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function TourDetailLoading() {
  return (
    <div className="pb-24 pt-8 sm:pt-10">
      <Container>
        <Skeleton className="h-4 w-40" />
        <Skeleton className="mt-4 h-[380px] w-full rounded-2xl" />
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-9 w-2/3" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="mt-6 h-24 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
          <Skeleton className="h-96 w-full rounded-[1.75rem]" />
        </div>
      </Container>
    </div>
  );
}
