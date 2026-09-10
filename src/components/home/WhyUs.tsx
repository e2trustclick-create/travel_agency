"use client";

import { Compass, Users, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useT } from "@/i18n/useT";

export function WhyUs() {
  const { t } = useT();

  const points = [
    { icon: Compass, title: t.whyUs.localExperts, description: t.whyUs.localExpertsDesc },
    { icon: Users, title: t.whyUs.smallGroups, description: t.whyUs.smallGroupsDesc },
    { icon: Sparkles, title: t.whyUs.authentic, description: t.whyUs.authenticDesc },
    { icon: ShieldCheck, title: t.whyUs.easyBooking, description: t.whyUs.easyBookingDesc },
  ];

  const stats = [
    { value: 500, suffix: "+", label: t.whyUs.travelers },
    { value: 50, suffix: "+", label: t.whyUs.experiences },
    { value: 10, suffix: "+", label: t.whyUs.destinationsStat },
  ];

  return (
    <section className="bg-forest-950 py-16 text-white sm:py-24">
      <Container>
        <SectionHeading eyebrow={t.whyUs.eyebrow} title={t.whyUs.title} dark />
        <p className="mt-3 max-w-xl text-base text-forest-100/80 sm:text-lg">{t.whyUs.subtitle}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <point.icon size={24} className="text-sand-300" />
              <h3 className="mt-4 font-display text-lg font-medium">{point.title}</h3>
              <p className="mt-1.5 text-sm text-forest-100/70">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-medium sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-forest-100/70">{stat.label}</div>
            </div>
          ))}
          <div>
            <div className="font-display text-3xl font-medium sm:text-4xl">4.9/5</div>
            <div className="mt-1 text-sm text-forest-100/70">{t.whyUs.avgRating}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
