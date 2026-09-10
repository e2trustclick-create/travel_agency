import Image from "next/image";
import { Review } from "@/types";
import { Rating } from "@/components/ui/Rating";
import { cn } from "@/lib/utils";

export function ReviewCard({ review, className }: { review: Review; className?: string }) {
  return (
    <div className={cn("flex h-full flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-charcoal-100", className)}>
      <Rating rating={review.rating} />
      <p className="flex-1 text-[0.95rem] leading-relaxed text-charcoal-700">“{review.text}”</p>
      <div className="flex items-center gap-3 pt-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image src={review.avatar} alt={review.author} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-charcoal-900">{review.author}</p>
          <p className="text-xs text-charcoal-400">
            {review.countryFlag} {review.country} · {review.date}
          </p>
        </div>
      </div>
    </div>
  );
}
