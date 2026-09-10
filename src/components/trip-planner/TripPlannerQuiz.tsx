"use client";

import { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import {
  Mountain,
  Waves,
  Landmark,
  UtensilsCrossed,
  Leaf,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { tours } from "@/data/tours";
import { TourRow } from "@/components/tours/TourRow";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/useT";

const interestOptions = [
  { key: "adventure", icon: Mountain },
  { key: "beach", icon: Waves },
  { key: "culture", icon: Landmark },
  { key: "food-wine", icon: UtensilsCrossed },
  { key: "nature", icon: Leaf },
  { key: "nightlife", icon: Moon },
] as const;

const dayOptions = ["1–2", "3–5", "6–10", "10+"];
const styleOptions = ["Relaxed", "Balanced", "Adventurous"] as const;

export function TripPlannerQuiz() {
  const { t } = useT();
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState<string[]>([]);
  const [days, setDays] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function toggleInterest(key: string) {
    setInterests((prev) =>
      prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
    );
  }

  function recommend() {
    let results = tours.filter((tr) =>
      interests.length ? tr.categories.some((c) => interests.includes(c)) : true
    );

    if (style === "Adventurous") {
      results = results.filter((tr) => tr.difficulty !== "Easy").concat(results.filter((tr) => tr.difficulty === "Easy"));
    } else if (style === "Relaxed") {
      results = results.filter((tr) => tr.difficulty === "Easy").concat(results.filter((tr) => tr.difficulty !== "Easy"));
    }

    if (days === "1–2") results = results.filter((tr) => tr.durationDays <= 2).concat(results.filter((tr) => tr.durationDays > 2));
    if (days === "6–10" || days === "10+") {
      results = results.filter((tr) => tr.durationDays >= 2).concat(results.filter((tr) => tr.durationDays < 2));
    }

    return results.slice(0, 4);
  }

  function reset() {
    setStep(0);
    setInterests([]);
    setDays(null);
    setStyle(null);
    setSubmitted(false);
  }

  if (submitted) {
    const results = recommend();
    const interestLabels = interests
      .map((key) => t.tripPlanner.interests[key as keyof typeof t.tripPlanner.interests])
      .join(", ");
    const styleLabel = style ? t.tripPlanner.styles[style as keyof typeof t.tripPlanner.styles] : null;

    return (
      <div className="animate-fade-up">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ocean-50 p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-700 text-white">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-charcoal-900">{t.tripPlanner.yourPicks}</p>
              <p className="text-xs text-charcoal-500">
                {t.tripPlanner.basedOn} {interestLabels || t.tripPlanner.anyLength} · {days ?? t.tripPlanner.anyLength} · {styleLabel ?? t.tripPlanner.anyStyle}
              </p>
            </div>
          </div>
          <button
            onClick={reset}
            className="flex items-center gap-1.5 rounded-full border border-charcoal-200 px-4 py-2 text-xs font-medium text-charcoal-700 hover:bg-white"
          >
            <RotateCcw size={13} /> {t.tripPlanner.startOver}
          </button>
        </div>
        <div className="mt-6">
          <TourRow tours={results} />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-6 ring-1 ring-charcoal-100 sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              i <= step ? "bg-ocean-700" : "bg-charcoal-100"
            )}
          />
        ))}
      </div>

      {step === 0 && (
        <div className="animate-fade-in">
          <h3 className="font-display text-xl font-medium text-charcoal-900">
            {t.tripPlanner.interestsQuestion}
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {interestOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => toggleInterest(opt.key)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-medium transition-colors",
                  interests.includes(opt.key)
                    ? "border-ocean-700 bg-ocean-50 text-ocean-800"
                    : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                )}
              >
                <opt.icon size={20} />
                {t.tripPlanner.interests[opt.key]}
              </button>
            ))}
          </div>
          <Button className="mt-6 w-full" onClick={() => setStep(1)} disabled={interests.length === 0}>
            {t.tripPlanner.continue}
          </Button>
        </div>
      )}

      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="font-display text-xl font-medium text-charcoal-900">{t.tripPlanner.daysQuestion}</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {dayOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setDays(opt)}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-sm font-medium transition-colors",
                  days === opt
                    ? "border-ocean-700 bg-ocean-50 text-ocean-800"
                    : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                )}
              >
                {opt} {t.tripPlanner.daysSuffix}
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="ghost" onClick={() => setStep(0)}>
              {t.tripPlanner.back}
            </Button>
            <Button className="flex-1" onClick={() => setStep(2)} disabled={!days}>
              {t.tripPlanner.continue}
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <h3 className="font-display text-xl font-medium text-charcoal-900">{t.tripPlanner.styleQuestion}</h3>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {styleOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setStyle(opt)}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-sm font-medium transition-colors",
                  style === opt
                    ? "border-ocean-700 bg-ocean-50 text-ocean-800"
                    : "border-charcoal-200 text-charcoal-600 hover:border-charcoal-300"
                )}
              >
                {t.tripPlanner.styles[opt]}
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="ghost" onClick={() => setStep(1)}>
              {t.tripPlanner.back}
            </Button>
            <Button className="flex-1" onClick={() => setSubmitted(true)} disabled={!style}>
              {t.tripPlanner.buildMyTrip}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
