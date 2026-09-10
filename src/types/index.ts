export type Locale = "en" | "sq";
export type Localized<T = string> = { en: T; sq: T };

export type Difficulty = "Easy" | "Moderate" | "Challenging";
export type TourType = "Group" | "Private" | "Both";

export interface CategoryRef {
  slug: string;
  name: string;
}

export interface Category {
  slug: string;
  name: Localized;
  description: Localized;
  image: string;
  icon: string; // lucide icon name
}

export interface ItineraryStop {
  time: string;
  title: Localized;
  description: Localized;
  image?: string;
}

export interface ItineraryDay {
  day: number;
  title: Localized;
  stops: ItineraryStop[];
}

export interface Review {
  id: string;
  tourSlug?: string;
  author: string;
  country: string;
  countryFlag: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface AvailabilityDay {
  date: string; // ISO date
  spotsLeft: number;
  status: "available" | "limited" | "full";
}

export interface Tour {
  slug: string;
  name: Localized;
  tagline: Localized;
  destinationSlug: string;
  location: Localized;
  categories: string[]; // category slugs
  images: string[];
  priceFrom: number;
  currency: "EUR";
  durationLabel: Localized;
  durationDays: number;
  halfDay?: boolean;
  difficulty: Difficulty;
  groupSize: number;
  type: TourType;
  rating: number;
  reviewCount: number;
  description: Localized;
  highlights: Localized<string[]>;
  included: Localized<string[]>;
  excluded: Localized<string[]>;
  pickupOptions: Localized<string[]>;
  itinerary: ItineraryDay[];
  featured?: boolean;
  popular?: boolean;
  availability: AvailabilityDay[];
}

export interface Destination {
  slug: string;
  name: Localized;
  region: Localized;
  image: string;
  gallery: string[];
  description: Localized;
  longDescription: Localized;
  tourCount: number;
  priceFrom: number;
  coordinates: { x: number; y: number }; // percentage position on the stylised map
  weather: {
    bestMonths: Localized;
    avgTempSummer: string;
    avgTempWinter: string;
  };
  highlights: Localized<string[]>;
}

export interface BlogPost {
  slug: string;
  title: Localized;
  excerpt: Localized;
  image: string;
  category: Localized;
  readTime: Localized;
  date: Localized;
  featured?: boolean;
  content: Localized<string[]>;
  relatedDestinationSlug?: string;
}
