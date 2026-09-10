"use client";

import { useAppState } from "@/context/AppStateContext";
import { dictionaries } from "@/i18n/ui";

export function useT() {
  const { locale } = useAppState();
  return { t: dictionaries[locale], locale };
}
