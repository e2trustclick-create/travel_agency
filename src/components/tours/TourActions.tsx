"use client";

import { useState } from "react";
import { Heart, Share2, Check } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/useT";

export function TourActions({ slug, name }: { slug: string; name: string }) {
  const { isWishlisted, toggleWishlist } = useAppState();
  const { t } = useT();
  const [copied, setCopied] = useState(false);
  const wishlisted = isWishlisted(slug);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ title: name, url });
        return;
      } catch {
        /* user cancelled, fall through */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleShare}
        className="flex items-center gap-1.5 rounded-full border border-charcoal-200 px-4 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50"
      >
        {copied ? <Check size={15} /> : <Share2 size={15} />}
        {copied ? t.tourDetail.copied : t.tourDetail.share}
      </button>
      <button
        onClick={() => toggleWishlist(slug)}
        className="flex items-center gap-1.5 rounded-full border border-charcoal-200 px-4 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50"
      >
        <Heart size={15} className={cn(wishlisted && "fill-red-500 text-red-500")} />
        {wishlisted ? t.tourDetail.saved : t.tourDetail.save}
      </button>
    </div>
  );
}
