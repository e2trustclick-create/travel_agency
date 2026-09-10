"use client";

import { useEffect } from "react";
import { useAppState } from "@/context/AppStateContext";

export function RecordView({ slug }: { slug: string }) {
  const { addRecentlyViewed } = useAppState();
  useEffect(() => {
    addRecentlyViewed(slug);
  }, [slug, addRecentlyViewed]);
  return null;
}
