"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Compass, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { useAppState } from "@/context/AppStateContext";
import { useT } from "@/i18n/useT";
import { Locale } from "@/types";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(usePathname());
  const pathname = usePathname();
  const { currency, setCurrency, locale, setLocale } = useAppState();
  const { t } = useT();

  const links = [
    { href: "/tours", label: t.nav.tours },
    { href: "/destinations", label: t.nav.destinations },
    { href: "/trip-planner", label: t.nav.tripPlanner },
    { href: "/travel-guide", label: t.nav.travelGuide },
    { href: "/about", label: t.nav.about },
  ];

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  function selectLocale(l: Locale) {
    setLocale(l);
    setLangOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
        solid ? "py-2" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-300 ease-out",
          solid
            ? "mx-4 sm:mx-8 lg:mx-10 glass shadow-soft h-16"
            : "mx-4 sm:mx-8 lg:mx-10 bg-transparent h-16"
        )}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              solid ? "bg-ocean-700 text-white" : "bg-white/95 text-ocean-700"
            )}
          >
            <Compass size={18} strokeWidth={2.4} />
          </span>
          <span
            className={cn(
              "font-display text-base font-medium tracking-tight transition-colors sm:text-lg",
              solid ? "text-charcoal-900" : "text-white"
            )}
          >
            Shala River Trip
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-charcoal-700 hover:bg-charcoal-100 hover:text-charcoal-900"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                solid ? "text-charcoal-700 hover:bg-charcoal-100" : "text-white/90 hover:bg-white/15"
              )}
              aria-label="Change language"
            >
              {locale === "en" ? "EN" : "SQ"}
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-xl bg-white py-1 shadow-elevated">
                <button
                  onClick={() => selectLocale("en")}
                  className={cn(
                    "block w-full px-4 py-2 text-left text-sm hover:bg-charcoal-50",
                    locale === "en" ? "font-semibold text-ocean-700" : "text-charcoal-700"
                  )}
                >
                  {t.language.en}
                </button>
                <button
                  onClick={() => selectLocale("sq")}
                  className={cn(
                    "block w-full px-4 py-2 text-left text-sm hover:bg-charcoal-50",
                    locale === "sq" ? "font-semibold text-ocean-700" : "text-charcoal-700"
                  )}
                >
                  {t.language.sq}
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setCurrency(currency === "EUR" ? "ALL" : "EUR")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors",
              solid ? "text-charcoal-700 hover:bg-charcoal-100" : "text-white/90 hover:bg-white/15"
            )}
            aria-label="Toggle currency"
          >
            {currency}
          </button>
          <ButtonLink href="/tours" size="sm" variant={solid ? "primary" : "secondary"}>
            {t.nav.bookNow}
          </ButtonLink>
        </div>

        <button
          className={cn(
            "lg:hidden flex h-10 w-10 items-center justify-center rounded-full",
            solid ? "text-charcoal-900 hover:bg-charcoal-100" : "text-white hover:bg-white/15"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 rounded-3xl glass shadow-elevated p-4 animate-fade-up">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal-800 hover:bg-charcoal-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-2 px-1">
            <button
              onClick={() => selectLocale(locale === "en" ? "sq" : "en")}
              className="flex items-center gap-1.5 rounded-full border border-charcoal-200 px-3 py-2 text-sm font-medium text-charcoal-700"
            >
              {locale === "en" ? "EN" : "SQ"}
            </button>
            <button
              onClick={() => setCurrency(currency === "EUR" ? "ALL" : "EUR")}
              className="flex items-center gap-1.5 rounded-full border border-charcoal-200 px-3 py-2 text-sm font-medium text-charcoal-700"
            >
              {currency}
            </button>
            <ButtonLink href="/tours" size="sm" className="flex-1">
              {t.nav.bookNow}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
