import { Review } from "@/types";
import { img } from "@/lib/images";

export const reviews: Review[] = [
  {
    id: "r1",
    tourSlug: "theth-blue-eye-adventure",
    author: "Emma Clarke",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    date: "August 2026",
    rating: 5,
    text: "Genuinely one of the best days of our entire trip. Our guide knew every viewpoint and the lunch with the local family was unforgettable.",
    avatar: img.avatar1,
  },
  {
    id: "r2",
    tourSlug: "shala-river-boat-tour",
    author: "Marco Bianchi",
    country: "Italy",
    countryFlag: "🇮🇹",
    date: "July 2026",
    rating: 5,
    text: "The water colour has to be seen to be believed. Small group, relaxed pace, and the picnic lunch was a nice surprise.",
    avatar: img.avatar2,
  },
  {
    id: "r3",
    tourSlug: "ksamil-islands-boat-trip",
    author: "Sophie Dubois",
    country: "France",
    countryFlag: "🇫🇷",
    date: "September 2026",
    rating: 5,
    text: "Booking was effortless and the boat trip around the islands was magical. Would book again in a heartbeat.",
    avatar: img.avatar3,
  },
  {
    id: "r4",
    tourSlug: "accursed-mountains-3-day-trek",
    author: "Jonas Weber",
    country: "Germany",
    countryFlag: "🇩🇪",
    date: "June 2026",
    rating: 5,
    text: "Challenging but so rewarding. The guesthouses were warm and welcoming, and the pass crossing was the highlight of my year.",
    avatar: img.avatar4,
  },
  {
    id: "r5",
    tourSlug: "berat-heritage-walk",
    author: "Anna Kowalski",
    country: "Poland",
    countryFlag: "🇵🇱",
    date: "May 2026",
    rating: 5,
    text: "Our guide's stories about the city made all the difference. Loved the wine tasting at the end.",
    avatar: img.avatar5,
  },
  {
    id: "r6",
    tourSlug: "himare-riviera-hike",
    author: "David Park",
    country: "USA",
    countryFlag: "🇺🇸",
    date: "August 2026",
    rating: 5,
    text: "Gjipe Beach at the end of the hike was worth every step. Never seen water that colour outside of a screensaver.",
    avatar: img.avatar6,
  },
];

export function getReviewsForTour(slug: string) {
  return reviews.filter((r) => r.tourSlug === slug);
}
