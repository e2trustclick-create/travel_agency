import { Category } from "@/types";
import { img } from "@/lib/images";

export const categories: Category[] = [
  {
    slug: "adventure",
    name: { en: "Adventure", sq: "Aventurë" },
    description: {
      en: "Hiking, rafting and off-the-grid trails.",
      sq: "Ecje malore, rafting dhe shtigje larg turizmit masiv.",
    },
    image: img.hikerView,
    icon: "Mountain",
  },
  {
    slug: "beach",
    name: { en: "Beach", sq: "Plazh" },
    description: {
      en: "The turquoise Albanian Riviera.",
      sq: "Riviera shqiptare me ujë tirkiz.",
    },
    image: img.ksamilBeach,
    icon: "Waves",
  },
  {
    slug: "mountains",
    name: { en: "Mountains", sq: "Male" },
    description: {
      en: "The Accursed Mountains and beyond.",
      sq: "Bjeshkët e Namuna dhe më tej.",
    },
    image: img.thethPeaks,
    icon: "Tent",
  },
  {
    slug: "culture",
    name: { en: "Culture", sq: "Kulturë" },
    description: {
      en: "Ottoman towns and ancient ruins.",
      sq: "Qytete otomane dhe rrënoja të lashta.",
    },
    image: img.beratStone,
    icon: "Landmark",
  },
  {
    slug: "food-wine",
    name: { en: "Food & Wine", sq: "Ushqim & Verë" },
    description: {
      en: "Local flavours and family vineyards.",
      sq: "Shije lokale dhe vreshta familjare.",
    },
    image: img.foodSpread,
    icon: "UtensilsCrossed",
  },
  {
    slug: "private-tours",
    name: { en: "Private Tours", sq: "Turne Private" },
    description: {
      en: "Tailored trips at your own pace.",
      sq: "Udhëtime të personalizuara në ritmin tuaj.",
    },
    image: img.vloreCoast,
    icon: "UserRound",
  },
  {
    slug: "multi-day",
    name: { en: "Multi-Day", sq: "Shumë Ditë" },
    description: {
      en: "Immersive multi-day journeys.",
      sq: "Udhëtime gjithëpërfshirëse shumëditore.",
    },
    image: img.komanLake,
    icon: "CalendarRange",
  },
  {
    slug: "hidden-gems",
    name: { en: "Hidden Gems", sq: "Xhevahire të Fshehura" },
    description: {
      en: "Places most visitors never see.",
      sq: "Vende që shumica e vizitorëve nuk i shohin kurrë.",
    },
    image: img.shalaRiver,
    icon: "Sparkles",
  },
  {
    slug: "nature",
    name: { en: "Nature", sq: "Natyrë" },
    description: {
      en: "Rivers, canyons and glacial lakes.",
      sq: "Lumenj, kanione dhe liqene akullnajore.",
    },
    image: img.shalaValley,
    icon: "Leaf",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
