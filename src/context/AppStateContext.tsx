"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Locale } from "@/types";

type Currency = "EUR" | "ALL";

interface AppStateValue {
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  recentlyViewed: string[];
  addRecentlyViewed: (slug: string) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const AppStateContext = createContext<AppStateValue | null>(null);

const WISHLIST_KEY = "gjelber:wishlist";
const RECENT_KEY = "gjelber:recently-viewed";
const CURRENCY_KEY = "gjelber:currency";
const LOCALE_KEY = "gjelber:locale";

function readStorage(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [currency, setCurrencyState] = useState<Currency>("EUR");
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hydrated, setHydrated] = useState(false);

  // One-time hydration from localStorage, unavailable during SSR.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setWishlist(readStorage(WISHLIST_KEY));
    setRecentlyViewed(readStorage(RECENT_KEY));
    try {
      const c = window.localStorage.getItem(CURRENCY_KEY);
      if (c === "EUR" || c === "ALL") setCurrencyState(c);
      const l = window.localStorage.getItem(LOCALE_KEY);
      if (l === "en" || l === "sq") setLocaleState(l);
    } catch {
      /* noop */
    }
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch {
      /* noop */
    }
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(RECENT_KEY, JSON.stringify(recentlyViewed));
    } catch {
      /* noop */
    }
  }, [recentlyViewed, hydrated]);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }, []);

  const isWishlisted = useCallback((slug: string) => wishlist.includes(slug), [wishlist]);

  const addRecentlyViewed = useCallback((slug: string) => {
    setRecentlyViewed((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, 8));
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    try {
      window.localStorage.setItem(CURRENCY_KEY, c);
    } catch {
      /* noop */
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(LOCALE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* noop */
    }
  }, []);

  const value = useMemo(
    () => ({
      wishlist,
      toggleWishlist,
      isWishlisted,
      recentlyViewed,
      addRecentlyViewed,
      currency,
      setCurrency,
      locale,
      setLocale,
    }),
    [
      wishlist,
      toggleWishlist,
      isWishlisted,
      recentlyViewed,
      addRecentlyViewed,
      currency,
      setCurrency,
      locale,
      setLocale,
    ]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
