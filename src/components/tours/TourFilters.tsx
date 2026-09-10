"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { categories } from "@/data/categories";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";
import { Difficulty, TourType } from "@/types";
import { useT } from "@/i18n/useT";
import { L, difficultyLabels, tourTypeLabels } from "@/lib/i18n";

export interface FiltersState {
  destination: string;
  categorySlugs: string[];
  maxPrice: number;
  durations: string[];
  difficulty: Difficulty | "Any";
  groupType: TourType | "Any";
  minRating: number;
}

export const defaultFilters: FiltersState = {
  destination: "",
  categorySlugs: [],
  maxPrice: 400,
  durations: [],
  difficulty: "Any",
  groupType: "Any",
  minRating: 0,
};

const durationOptions = ["Half Day", "1 Day", "Multi-Day"] as const;
const difficultyOptions: Difficulty[] = ["Easy", "Moderate", "Challenging"];
const groupOptions: TourType[] = ["Group", "Private"];

function FilterBody({
  filters,
  setFilters,
}: {
  filters: FiltersState;
  setFilters: (f: FiltersState) => void;
}) {
  const { t, locale } = useT();

  return (
    <div className="flex flex-col gap-7">
      <div>
        <label className="text-sm font-semibold text-charcoal-900">{t.filters.destination}</label>
        <select
          value={filters.destination}
          onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
          className="mt-2 w-full rounded-xl border border-charcoal-200 px-3 py-2.5 text-sm text-charcoal-800 outline-none focus:border-ocean-600"
        >
          <option value="">{t.filters.any}</option>
          {destinations.map((d) => (
            <option key={d.slug} value={d.slug}>
              {L(d.name, locale)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-charcoal-900">{t.filters.category}</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = filters.categorySlugs.includes(c.slug);
            return (
              <button
                key={c.slug}
                onClick={() =>
                  setFilters({
                    ...filters,
                    categorySlugs: active
                      ? filters.categorySlugs.filter((s) => s !== c.slug)
                      : [...filters.categorySlugs, c.slug],
                  })
                }
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "border-ocean-700 bg-ocean-700 text-white"
                    : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                )}
              >
                {L(c.name, locale)}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-charcoal-900">{t.filters.maxPrice}</label>
          <span className="text-sm text-charcoal-500">€{filters.maxPrice}</span>
        </div>
        <input
          type="range"
          min={20}
          max={400}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="mt-3 w-full accent-ocean-700"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-charcoal-900">{t.filters.duration}</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {durationOptions.map((d) => {
            const active = filters.durations.includes(d);
            return (
              <button
                key={d}
                onClick={() =>
                  setFilters({
                    ...filters,
                    durations: active
                      ? filters.durations.filter((s) => s !== d)
                      : [...filters.durations, d],
                  })
                }
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "border-ocean-700 bg-ocean-700 text-white"
                    : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                )}
              >
                {t.filters.durationOptions[d]}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-charcoal-900">{t.filters.difficulty}</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {(["Any", ...difficultyOptions] as const).map((d) => (
            <button
              key={d}
              onClick={() => setFilters({ ...filters, difficulty: d })}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                filters.difficulty === d
                  ? "border-ocean-700 bg-ocean-700 text-white"
                  : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
              )}
            >
              {d === "Any" ? t.filters.any : difficultyLabels[locale][d]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-charcoal-900">{t.filters.groupType}</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {(["Any", ...groupOptions] as const).map((g) => (
            <button
              key={g}
              onClick={() => setFilters({ ...filters, groupType: g })}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                filters.groupType === g
                  ? "border-ocean-700 bg-ocean-700 text-white"
                  : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
              )}
            >
              {g === "Any" ? t.filters.any : tourTypeLabels[locale][g]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-charcoal-900">{t.filters.minRating}</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {[0, 4, 4.5, 4.8].map((r) => (
            <button
              key={r}
              onClick={() => setFilters({ ...filters, minRating: r })}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                filters.minRating === r
                  ? "border-ocean-700 bg-ocean-700 text-white"
                  : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
              )}
            >
              {r === 0 ? t.filters.any : `${r}+`}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setFilters(defaultFilters)}
        className="text-left text-sm font-medium text-ocean-700 hover:text-ocean-800"
      >
        {t.filters.clearAll}
      </button>
    </div>
  );
}

export function DesktopFilters({
  filters,
  setFilters,
}: {
  filters: FiltersState;
  setFilters: (f: FiltersState) => void;
}) {
  const { t } = useT();
  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="sticky top-28 rounded-2xl bg-charcoal-50 p-6">
        <h2 className="mb-5 flex items-center gap-2 font-display text-lg font-medium text-charcoal-900">
          <SlidersHorizontal size={17} /> {t.filters.title}
        </h2>
        <FilterBody filters={filters} setFilters={setFilters} />
      </div>
    </aside>
  );
}

export function MobileFilterSheet({
  open,
  onClose,
  filters,
  setFilters,
  resultCount,
}: {
  open: boolean;
  onClose: () => void;
  filters: FiltersState;
  setFilters: (f: FiltersState) => void;
  resultCount: number;
}) {
  const { t } = useT();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-charcoal-950/50" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 flex max-h-[88vh] flex-col rounded-t-3xl bg-white p-6 animate-fade-up">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-medium text-charcoal-900">{t.filters.title}</h2>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-charcoal-100">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pb-4">
          <FilterBody filters={filters} setFilters={setFilters} />
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-full bg-ocean-700 py-3.5 text-sm font-semibold text-white"
        >
          {t.filters.showTours} {resultCount} {t.filters.tours}
        </button>
      </div>
    </div>
  );
}
