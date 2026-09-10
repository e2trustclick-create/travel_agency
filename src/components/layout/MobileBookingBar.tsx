"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { getTour } from "@/data/tours";
import { useAppState } from "@/context/AppStateContext";
import { useT } from "@/i18n/useT";
import { formatPrice } from "@/lib/utils";

export function MobileBookingBar() {
  const pathname = usePathname();
  const { currency } = useAppState();
  const { t } = useT();

  if (pathname.startsWith("/booking")) return null;

  const tourMatch = pathname.match(/^\/tours\/([^/]+)$/);
  const tour = tourMatch ? getTour(tourMatch[1]) : undefined;

  if (tour) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-charcoal-100 bg-white/95 px-5 py-3 backdrop-blur-md sm:hidden">
        <div className="flex flex-col">
          <span className="text-xs text-charcoal-400">{t.mobileBar.from}</span>
          <span className="text-base font-semibold text-charcoal-900">
            {formatPrice(tour.priceFrom, currency)}
            <span className="text-xs font-normal text-charcoal-400"> {t.common.perPerson}</span>
          </span>
        </div>
        <ButtonLink href={`/booking/${tour.slug}`} size="md">
          {t.mobileBar.reserveNow}
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-charcoal-100 bg-white/95 px-5 py-3 backdrop-blur-md sm:hidden">
      <div className="flex flex-col">
        <span className="text-xs text-charcoal-400">{t.mobileBar.readyForAdventure}</span>
        <span className="text-sm font-semibold text-charcoal-900">{t.mobileBar.exploreAlbaniaTours}</span>
      </div>
      <ButtonLink href="/tours" size="md">
        {t.nav.bookNow}
      </ButtonLink>
    </div>
  );
}
