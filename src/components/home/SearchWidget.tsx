"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MapPin, CalendarDays, Users, Search, Minus, Plus } from "lucide-react";
import { destinations } from "@/data/destinations";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function SearchWidget() {
  const router = useRouter();
  const { t, locale } = useT();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [guestsOpen, setGuestsOpen] = useState(false);

  function handleSearch() {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    if (guests) params.set("guests", String(guests));
    router.push(`/tours?${params.toString()}`);
  }

  return (
    <div className="glass w-full max-w-4xl rounded-[1.75rem] p-2.5 shadow-elevated sm:rounded-full sm:p-2">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-1">
        <div className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 sm:rounded-full sm:px-5">
          <MapPin size={18} className="shrink-0 text-ocean-700" />
          <div className="flex flex-1 flex-col">
            <label className="text-[0.7rem] font-medium uppercase tracking-wide text-charcoal-500">
              {t.search.whereTo}
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-charcoal-900 outline-none"
            >
              <option value="">{t.search.anywhere}</option>
              {destinations.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {L(d.name, locale)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="hidden h-8 w-px bg-charcoal-200 sm:block" />

        <div className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 sm:rounded-full sm:px-5">
          <CalendarDays size={18} className="shrink-0 text-ocean-700" />
          <div className="flex flex-1 flex-col">
            <label className="text-[0.7rem] font-medium uppercase tracking-wide text-charcoal-500">
              {t.search.when}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-charcoal-900 outline-none"
            />
          </div>
        </div>

        <div className="hidden h-8 w-px bg-charcoal-200 sm:block" />

        <div className="relative flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 sm:rounded-full sm:px-5">
          <Users size={18} className="shrink-0 text-ocean-700" />
          <button
            type="button"
            onClick={() => setGuestsOpen((v) => !v)}
            className="flex flex-1 flex-col text-left"
          >
            <span className="text-[0.7rem] font-medium uppercase tracking-wide text-charcoal-500">
              {t.search.travelers}
            </span>
            <span className="text-sm font-medium text-charcoal-900">
              {guests} {guests === 1 ? t.search.guest : t.search.guests}
            </span>
          </button>

          {guestsOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-56 rounded-2xl bg-white p-4 shadow-elevated">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-charcoal-800">{t.search.travelers}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-600 hover:bg-charcoal-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold">{guests}</span>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(16, g + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-600 hover:bg-charcoal-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setGuestsOpen(false)}
                className="mt-3 w-full rounded-full bg-charcoal-900 py-2 text-xs font-medium text-white"
              >
                {t.search.done}
              </button>
            </div>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-2xl bg-ocean-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-800 sm:rounded-full"
        >
          <Search size={17} />
          <span>{t.search.searchExperiences}</span>
        </button>
      </div>
    </div>
  );
}
