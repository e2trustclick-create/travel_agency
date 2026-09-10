import { AvailabilityDay } from "@/types";

/** Deterministic pseudo-availability generator so SSR/CSR output matches. */
export function generateAvailability(seed: number, days = 45): AvailabilityDay[] {
  const result: AvailabilityDay[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 1; i <= days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const hash = (seed * 31 + i * 17) % 11;
    let spotsLeft: number;
    let status: AvailabilityDay["status"];

    if (hash === 0) {
      spotsLeft = 0;
      status = "full";
    } else if (hash < 4) {
      spotsLeft = hash;
      status = "limited";
    } else {
      spotsLeft = Math.min(8, hash);
      status = "available";
    }

    result.push({ date: date.toISOString().slice(0, 10), spotsLeft, status });
  }
  return result;
}
