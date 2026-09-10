import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  rating,
  reviewCount,
  size = "sm",
  className,
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const starSize = size === "sm" ? 14 : 16;
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="inline-flex items-center gap-0.5 text-sand-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={starSize}
            className={i < Math.round(rating) ? "fill-sand-500 text-sand-500" : "fill-charcoal-200 text-charcoal-200"}
          />
        ))}
      </span>
      <span className="text-sm font-semibold text-charcoal-800">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-sm text-charcoal-400">({reviewCount})</span>
      )}
    </span>
  );
}
