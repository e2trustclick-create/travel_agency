"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/useT";

export function ContactForm() {
  const { t } = useT();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[1.75rem] bg-forest-50 p-12 text-center">
        <CheckCircle2 size={40} className="text-forest-600" />
        <h3 className="mt-4 font-display text-xl font-medium text-charcoal-900">
          {t.contactPage.messageSent}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-charcoal-500">{t.contactPage.messageSentDesc}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] bg-charcoal-50 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-charcoal-800">{t.contactPage.formName}</label>
          <input
            required
            type="text"
            className="mt-1.5 w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ocean-600"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-charcoal-800">{t.contactPage.formEmail}</label>
          <input
            required
            type="email"
            className="mt-1.5 w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ocean-600"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-charcoal-800">{t.contactPage.formSubject}</label>
        <select className="mt-1.5 w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ocean-600">
          <option>{t.contactPage.subjectGeneral}</option>
          <option>{t.contactPage.subjectCustom}</option>
          <option>{t.contactPage.subjectGroup}</option>
          <option>{t.contactPage.subjectExisting}</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-charcoal-800">{t.contactPage.formMessage}</label>
        <textarea
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ocean-600"
        />
      </div>
      <Button type="submit" className="mt-5 w-full" size="lg">
        {t.contactPage.sendMessage}
      </Button>
    </form>
  );
}
