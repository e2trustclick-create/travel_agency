"use client";

import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { useT } from "@/i18n/useT";

export function ContactPageBody() {
  const { t } = useT();

  return (
    <>
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
          {t.contactPage.eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-medium text-charcoal-900 sm:text-5xl">
          {t.contactPage.title}
        </h1>
        <p className="mt-3 text-lg text-charcoal-500">{t.contactPage.subtitle}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/355691234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-forest-50 p-5 transition-colors hover:bg-forest-100"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-600 text-white">
              <MessageCircle size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-charcoal-900">{t.contactPage.whatsapp}</p>
              <p className="text-sm text-charcoal-500">{t.contactPage.whatsappDesc}</p>
            </div>
          </a>
          <a
            href="tel:+355691234567"
            className="flex items-center gap-4 rounded-2xl bg-charcoal-50 p-5 transition-colors hover:bg-charcoal-100"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-900 text-white">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-charcoal-900">+355 69 123 4567</p>
              <p className="text-sm text-charcoal-500">{t.contactPage.phoneHours}</p>
            </div>
          </a>
          <a
            href="mailto:hello@gjelber.al"
            className="flex items-center gap-4 rounded-2xl bg-charcoal-50 p-5 transition-colors hover:bg-charcoal-100"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-900 text-white">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-charcoal-900">hello@gjelber.al</p>
              <p className="text-sm text-charcoal-500">{t.contactPage.generalEnquiries}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl bg-charcoal-50 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-900 text-white">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-charcoal-900">{t.footer.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-sand-50 p-5 text-sm text-charcoal-600">
            <Clock size={16} className="mt-0.5 shrink-0 text-sand-700" />
            <p>
              <span className="font-semibold text-charcoal-900">{t.contactPage.emergencyTitle}</span>{" "}
              {t.contactPage.emergencyDesc}
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
