import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(amount: number, currency: "EUR" | "ALL" = "EUR") {
  if (currency === "ALL") {
    return `${Math.round(amount * 100).toLocaleString("en-US")} L`;
  }
  return `€${amount}`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
