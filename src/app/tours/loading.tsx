import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ToursLoading() {
  return (
    <div className="pt-10 pb-20 sm:pt-14">
      <Container>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="mt-4 h-10 w-72" />
        <Skeleton className="mt-3 h-5 w-96" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="aspect-[4/3] w-full" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
