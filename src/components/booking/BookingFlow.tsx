"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, ChevronLeft, Minus, Plus, ShieldCheck } from "lucide-react";
import { Tour } from "@/types";
import { cn, formatPrice } from "@/lib/utils";
import { useAppState } from "@/context/AppStateContext";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function BookingFlow({ tour }: { tour: Tour }) {
  const searchParams = useSearchParams();
  const { currency } = useAppState();
  const { t, locale } = useT();
  const steps = t.booking.steps;
  const pickupOptions = L(tour.pickupOptions, locale);
  const tourName = L(tour.name, locale);
  const dateLocale = locale === "sq" ? "sq-AL" : "en-US";

  const [step, setStep] = useState(0);
  const [date, setDate] = useState(
    searchParams.get("date") ?? tour.availability.find((a) => a.status !== "full")?.date ?? ""
  );
  const [guests, setGuests] = useState(Number(searchParams.get("guests") ?? 2));
  const [pickup, setPickup] = useState(searchParams.get("pickup") ?? pickupOptions[0]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [confirmed, setConfirmed] = useState(false);

  const total = tour.priceFrom * guests;
  const availableDates = tour.availability.slice(0, 12);

  function next() {
    setStep((s) => Math.min(steps.length - 1, s + 1));
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  if (confirmed) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center rounded-[1.75rem] bg-forest-50 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-600 text-white">
          <Check size={28} />
        </span>
        <h2 className="mt-5 font-display text-2xl font-medium text-charcoal-900">
          {t.booking.bookingConfirmed}
        </h2>
        <p className="mt-2 text-charcoal-600">
          {t.booking.confirmationSentTo} <strong>{form.email || "—"}</strong>. {t.booking.guideContact}
        </p>
        <div className="mt-6 w-full rounded-2xl bg-white p-5 text-left">
          <p className="font-display text-lg font-medium text-charcoal-900">{tourName}</p>
          <div className="mt-3 space-y-1.5 text-sm text-charcoal-600">
            <p>
              {t.booking.dateLabel}:{" "}
              {new Date(date).toLocaleDateString(dateLocale, { weekday: "long", month: "long", day: "numeric" })}
            </p>
            <p>{t.booking.travelersLabel}: {guests}</p>
            <p>{t.booking.pickupLabel}: {pickup}</p>
            <p className="font-semibold text-charcoal-900">{t.booking.totalPaid}: {formatPrice(total, currency)}</p>
          </div>
        </div>
        <Link href="/tours" className="mt-6 text-sm font-medium text-ocean-700">
          {t.booking.exploreMoreTours}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <Link href={`/tours/${tour.slug}`} className="inline-flex items-center gap-1.5 text-sm text-charcoal-500 hover:text-charcoal-800">
          <ChevronLeft size={16} /> {t.booking.backToTour}
        </Link>

        <div className="mt-6 flex items-center gap-2">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 flex-col items-center gap-2">
              <span
                className={cn(
                  "h-1.5 w-full rounded-full transition-colors",
                  i <= step ? "bg-ocean-700" : "bg-charcoal-100"
                )}
              />
              <span className={cn("hidden text-[0.7rem] font-medium sm:block", i === step ? "text-ocean-700" : "text-charcoal-400")}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-white p-6 ring-1 ring-charcoal-100 sm:p-8">
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl font-medium text-charcoal-900">{t.booking.chooseDate}</h2>
              <div className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                {availableDates.map((a) => {
                  const d = new Date(a.date);
                  const active = date === a.date;
                  return (
                    <button
                      key={a.date}
                      disabled={a.status === "full"}
                      onClick={() => setDate(a.date)}
                      className={cn(
                        "flex flex-col items-center rounded-xl border py-3 text-sm transition-colors",
                        active
                          ? "border-ocean-700 bg-ocean-50 text-ocean-800"
                          : a.status === "full"
                          ? "cursor-not-allowed border-charcoal-100 text-charcoal-300"
                          : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                      )}
                    >
                      <span className="font-semibold">{d.getDate()}</span>
                      <span className="text-xs">{d.toLocaleDateString(dateLocale, { month: "short" })}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl font-medium text-charcoal-900">{t.booking.howManyTravelers}</h2>
              <div className="mt-5 flex items-center justify-between rounded-xl border border-charcoal-200 px-5 py-4">
                <span className="text-charcoal-800">{t.booking.guests}</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-200 hover:bg-charcoal-100"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-5 text-center font-semibold">{guests}</span>
                  <button
                    onClick={() => setGuests((g) => Math.min(tour.groupSize, g + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-200 hover:bg-charcoal-100"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
              <p className="mt-3 text-xs text-charcoal-400">{t.booking.maxGroupSize} {tour.groupSize}</p>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl font-medium text-charcoal-900">{t.booking.pickupLocationTitle}</h2>
              <div className="mt-5 flex flex-col gap-3">
                {pickupOptions.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPickup(p)}
                    className={cn(
                      "rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors",
                      pickup === p
                        ? "border-ocean-700 bg-ocean-50 text-ocean-800"
                        : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl font-medium text-charcoal-900">{t.booking.yourDetails}</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-charcoal-800">{t.booking.fullName}</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-600"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal-800">{t.booking.email}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-600"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal-800">{t.booking.phone}</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-charcoal-800">{t.booking.notesOptional}</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-600"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl font-medium text-charcoal-900">{t.booking.reviewConfirm}</h2>
              <div className="mt-5 space-y-3 rounded-xl bg-charcoal-50 p-5 text-sm">
                <div className="flex justify-between"><span className="text-charcoal-500">{t.booking.dateLabel}</span><span className="font-medium text-charcoal-900">{date}</span></div>
                <div className="flex justify-between"><span className="text-charcoal-500">{t.booking.travelersLabel}</span><span className="font-medium text-charcoal-900">{guests}</span></div>
                <div className="flex justify-between"><span className="text-charcoal-500">{t.booking.pickupLabel}</span><span className="font-medium text-charcoal-900">{pickup}</span></div>
                <div className="flex justify-between"><span className="text-charcoal-500">{t.booking.nameLabel}</span><span className="font-medium text-charcoal-900">{form.name || "—"}</span></div>
                <div className="flex justify-between"><span className="text-charcoal-500">{t.booking.emailLabel}</span><span className="font-medium text-charcoal-900">{form.email || "—"}</span></div>
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-charcoal-400">
                <ShieldCheck size={13} /> {t.booking.paymentSimulated}
              </p>
            </div>
          )}

          <div className="mt-8 flex gap-3">
            {step > 0 && (
              <Button variant="ghost" onClick={back}>
                {t.booking.back}
              </Button>
            )}
            {step < steps.length - 1 ? (
              <Button className="flex-1" onClick={next} disabled={step === 0 && !date}>
                {t.booking.continue}
              </Button>
            ) : (
              <Button className="flex-1" onClick={() => setConfirmed(true)}>
                {t.booking.confirmBooking}
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-charcoal-100">
          <div className="relative aspect-[16/10] w-full">
            <Image src={tour.images[0]} alt={tourName} fill sizes="480px" className="object-cover" />
          </div>
          <div className="bg-white p-5">
            <p className="font-display text-lg font-medium text-charcoal-900">{tourName}</p>
            <p className="mt-1 text-sm text-charcoal-500">{L(tour.location, locale)}</p>
            <div className="mt-4 flex items-center justify-between border-t border-charcoal-100 pt-4 text-sm">
              <span className="text-charcoal-500">{formatPrice(tour.priceFrom, currency)} × {guests}</span>
              <span className="font-display text-lg font-medium text-charcoal-900">{formatPrice(total, currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
