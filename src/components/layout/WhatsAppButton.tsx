"use client";

import { MessageCircle } from "lucide-react";
import { useT } from "@/i18n/useT";

export function WhatsAppButton() {
  const { t } = useT();
  return (
    <a
      href="https://wa.me/355691234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-forest-600 text-white shadow-elevated transition-transform hover:scale-105 sm:bottom-6"
      aria-label={t.whatsapp.ariaLabel}
    >
      <MessageCircle size={26} />
    </a>
  );
}
