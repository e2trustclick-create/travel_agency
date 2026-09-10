"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/tours/TourCard";
import {
  DesktopFilters,
  MobileFilterSheet,
  FiltersState,
  defaultFilters,
} from "@/components/tours/TourFilters";
import { useT } from "@/i18n/useT";

type SortKey = "recommended" | "price-asc" | "price-desc" | "rating" | "popular";

function durationBucket(days: number, halfDay?: boolean) {
  if (halfDay) return "Half Day";
  if (days >= 2) return "Multi-Day";
  return "1 Day";
}

export function ToursExplorer() {
  const { t } = useT();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FiltersState>(() => ({
    ...defaultFilters,
    destination: searchParams.get("destination") ?? "",
    categorySlugs: searchParams.get("category") ? [searchParams.get("category")!] : [],
  }));
  const [sort, setSort] = useState<SortKey>("recommended");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let results = tours.filter((tr) => {
      if (filters.destination && tr.destinationSlug !== filters.destination) return false;
      if (filters.categorySlugs.length && !tr.categories.some((c) => filters.categorySlugs.includes(c)))
        return false;
      if (tr.priceFrom > filters.maxPrice) return false;
      if (filters.durations.length && !filters.durations.includes(durationBucket(tr.durationDays, tr.halfDay)))
        return false;
      if (filters.difficulty !== "Any" && tr.difficulty !== filters.difficulty) return false;
      if (filters.groupType !== "Any" && tr.type !== filters.groupType && tr.type !== "Both") return false;
      if (tr.rating < filters.minRating) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        results = [...results].sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case "price-desc":
        results = [...results].sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case "rating":
        results = [...results].sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        results = [...results].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        results = [...results].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }

    return results;
  }, [filters, sort]);

  return (
    <div className="flex gap-10">
      <DesktopFilters filters={filters} setFilters={setFilters} />

      <div className="flex-1">
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-charcoal-500">
            <span className="font-semibold text-charcoal-900">{filtered.length}</span>{" "}
            {t.toursPage.resultsFound}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-1.5 rounded-full border border-charcoal-200 px-4 py-2 text-sm font-medium text-charcoal-700 lg:hidden"
            >
              <SlidersHorizontal size={15} /> {t.filters.filtersButton}
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="appearance-none rounded-full border border-charcoal-200 px-4 py-2 pr-9 text-sm font-medium text-charcoal-700 outline-none focus:border-ocean-600"
              >
                <option value="recommended">{t.filters.sort.recommended}</option>
                <option value="price-asc">{t.filters.sort.priceAsc}</option>
                <option value="price-desc">{t.filters.sort.priceDesc}</option>
                <option value="rating">{t.filters.sort.rating}</option>
                <option value="popular">{t.filters.sort.popular}</option>
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400" />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-charcoal-50 p-12 text-center">
            <p className="font-display text-lg text-charcoal-700">{t.filters.noResults}</p>
            <button
              onClick={() => setFilters(defaultFilters)}
              className="mt-3 text-sm font-medium text-ocean-700"
            >
              {t.filters.clearFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        )}
      </div>

      <MobileFilterSheet
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        filters={filters}
        setFilters={setFilters}
        resultCount={filtered.length}
      />
    </div>
  );
}
