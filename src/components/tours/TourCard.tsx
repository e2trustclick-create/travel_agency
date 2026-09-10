"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Clock, Gauge } from "lucide-react";
import { Tour } from "@/types";
import { Rating } from "@/components/ui/Rating";
import { useAppState } from "@/context/AppStateContext";
import { getCategory } from "@/data/categories";
import { cn, formatPrice } from "@/lib/utils";
import { L, difficultyLabels } from "@/lib/i18n";
import { useT } from "@/i18n/useT";
import { useState } from "react";

export function TourCard({ tour, className }: { tour: Tour; className?: string }) {
  const { isWishlisted, toggleWishlist, currency } = useAppState();
  const { t, locale } = useT();
  const [popping, setPopping] = useState(false);
  const wishlisted = isWishlisted(tour.slug);
  const primaryCategory = getCategory(tour.categories[0]);

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-charcoal-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elevated",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={tour.images[0]}
          alt={L(tour.name, locale)}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          {primaryCategory ? (
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-800 backdrop-blur-sm">
              {L(primaryCategory.name, locale)}
            </span>
          ) : (
            <span />
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setPopping(true);
              toggleWishlist(tour.slug);
              setTimeout(() => setPopping(false), 450);
            }}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wishlisted}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
          >
            <Heart
              size={17}
              className={cn(
                popping && "animate-heart-pop",
                wishlisted ? "fill-red-500 text-red-500" : "text-charcoal-700"
              )}
            />
          </button>
        </div>
        {tour.popular && (
          <span className="absolute bottom-3 left-3 rounded-full bg-forest-600 px-3 py-1 text-xs font-medium text-white">
            {t.tourCard.popular}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-1.5 text-xs text-charcoal-400">
          <MapPin size={13} />
          {L(tour.location, locale)}
        </div>
        <h3 className="font-display text-lg font-medium leading-snug text-charcoal-900 line-clamp-2">
          {L(tour.name, locale)}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {L(tour.durationLabel, locale)}
          </span>
          <span className="flex items-center gap-1">
            <Gauge size={13} /> {difficultyLabels[locale][tour.difficulty]}
          </span>
        </div>

        <div className="mt-1">
          <Rating rating={tour.rating} reviewCount={tour.reviewCount} />
        </div>

        <div className="mt-auto flex items-baseline justify-between pt-2">
          <div>
            <span className="text-xs text-charcoal-400">{t.common.from} </span>
            <span className="text-lg font-semibold text-charcoal-900">
              {formatPrice(tour.priceFrom, currency)}
            </span>
            <span className="text-xs text-charcoal-400"> {t.common.perPerson}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
