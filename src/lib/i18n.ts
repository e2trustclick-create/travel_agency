import { Locale, Localized } from "@/types";

export function L<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export const difficultyLabels: Localized<Record<string, string>> = {
  en: { Easy: "Easy", Moderate: "Moderate", Challenging: "Challenging" },
  sq: { Easy: "Lehtë", Moderate: "Mesatare", Challenging: "Sfiduese" },
};

export const tourTypeLabels: Localized<Record<string, string>> = {
  en: { Group: "Group", Private: "Private", Both: "Group or Private" },
  sq: { Group: "Grup", Private: "Privat", Both: "Grup ose Privat" },
};
