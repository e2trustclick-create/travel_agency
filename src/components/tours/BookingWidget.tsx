"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, MapPin, ShieldCheck } from "lucide-react";
import { Tour } from "@/types";
import { useAppState } from "@/context/AppStateContext";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function BookingWidget({ tour }: { tour: Tour }) {
  const router = useRouter();
  const { currency } = useAppState();
  const { t, locale } = useT();
  const pickupOptions = L(tour.pickupOptions, locale);
  const [date, setDate] = useState(tour.availability.find((a) => a.status !== "full")?.date ?? "");
  const [guests, setGuests] = useState(2);
  const [pickup, setPickup] = useState(pickupOptions[0]);

  const selectedAvailability = tour.availability.find((a) => a.date === date);
  const total = tour.priceFrom * guests;

  const nextDates = useMemo(() => tour.availability.slice(0, 8), [tour.availability]);
  const dateLocale = locale === "sq" ? "sq-AL" : "en-US";

  function handleReserve() {
    const params = new URLSearchParams({ date, guests: String(guests), pickup });
    router.push(`/booking/${tour.slug}?${params.toString()}`);
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-elevated ring-1 ring-charcoal-100 sm:p-7">
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-2xl font-medium text-charcoal-900">
          {formatPrice(tour.priceFrom, currency)}
        </span>
        <span className="text-sm text-charcoal-400">{t.bookingWidget.perPerson}</span>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
          {t.bookingWidget.chooseDate}
        </label>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {nextDates.map((a) => {
            const d = new Date(a.date);
            const active = date === a.date;
            return (
              <button
                key={a.date}
                disabled={a.status === "full"}
                onClick={() => setDate(a.date)}
                className={cn(
                  "flex flex-col items-center rounded-xl border py-2 text-xs transition-colors",
                  active
                    ? "border-ocean-700 bg-ocean-50 text-ocean-800"
                    : a.status === "full"
                    ? "cursor-not-allowed border-charcoal-100 text-charcoal-300"
                    : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                )}
              >
                <span className="font-semibold">{d.getDate()}</span>
                <span>{d.toLocaleDateString(dateLocale, { month: "short" })}</span>
              </button>
            );
          })}
        </div>
        {selectedAvailability && selectedAvailability.status === "limited" && (
          <p className="mt-2 text-xs font-medium text-sand-700">
            {t.bookingWidget.spotsLeftPrefix} {selectedAvailability.spotsLeft} {t.bookingWidget.spotsLeftSuffix}
          </p>
        )}
        {selectedAvailability && selectedAvailability.status === "available" && (
          <p className="mt-2 text-xs font-medium text-forest-700">{t.bookingWidget.availableSpots}</p>
        )}
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
          {t.bookingWidget.travelers}
        </label>
        <div className="mt-2 flex items-center justify-between rounded-xl border border-charcoal-200 px-4 py-2.5">
          <span className="text-sm text-charcoal-800">
            {guests} {guests === 1 ? t.bookingWidget.guest : t.bookingWidget.guests}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-charcoal-200 hover:bg-charcoal-100"
            >
              <Minus size={13} />
            </button>
            <span className="w-4 text-center text-sm font-semibold">{guests}</span>
            <button
              onClick={() => setGuests((g) => Math.min(tour.groupSize, g + 1))}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-charcoal-200 hover:bg-charcoal-100"
            >
              <Plus size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
          {t.bookingWidget.pickupLocation}
        </label>
        <div className="relative mt-2">
          <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400" />
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full appearance-none rounded-xl border border-charcoal-200 py-2.5 pl-9 pr-4 text-sm text-charcoal-800 outline-none focus:border-ocean-600"
          >
            {pickupOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-charcoal-100 pt-4">
        <span className="text-sm text-charcoal-500">
          {formatPrice(tour.priceFrom, currency)} × {guests}
        </span>
        <span className="font-display text-lg font-medium text-charcoal-900">
          {formatPrice(total, currency)}
        </span>
      </div>

      <Button className="mt-5 w-full" size="lg" onClick={handleReserve} disabled={!date}>
        {t.bookingWidget.reserveNow}
      </Button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-charcoal-400">
        <ShieldCheck size={13} /> {t.bookingWidget.freeCancellation}
      </p>
    </div>
  );
}
