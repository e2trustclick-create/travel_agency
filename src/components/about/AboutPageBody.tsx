"use client";

import Image from "next/image";
import { Compass, Users, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/Button";
import { img } from "@/lib/images";
import { useT } from "@/i18n/useT";

export function AboutPageBody() {
  const { t } = useT();

  const values = [
    { icon: Compass, title: t.aboutPage.valueLocalExperts, description: t.aboutPage.valueLocalExpertsDesc },
    { icon: Users, title: t.aboutPage.valueSmallGroups, description: t.aboutPage.valueSmallGroupsDesc },
    { icon: Sparkles, title: t.aboutPage.valueAuthentic, description: t.aboutPage.valueAuthenticDesc },
    { icon: ShieldCheck, title: t.aboutPage.valueEasy, description: t.aboutPage.valueEasyDesc },
  ];

  const stats = [
    { value: 500, suffix: "+", label: t.aboutPage.statTravelers },
    { value: 50, suffix: "+", label: t.aboutPage.statExperiences },
    { value: 10, suffix: "+", label: t.aboutPage.statDestinations },
    { value: 8, suffix: "", label: t.aboutPage.statYears },
  ];

  return (
    <div className="pb-24">
      <section className="relative flex h-[52vh] min-h-[380px] items-center overflow-hidden">
        <Image src={img.heroCanyon} alt="Albanian canyon landscape" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-charcoal-950/55" />
        <Container className="relative z-10">
          <h1 className="max-w-xl text-balance font-display text-4xl font-medium text-white sm:text-5xl">
            {t.aboutPage.heroTitle}
          </h1>
        </Container>
      </section>

      <Container className="mt-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
              {t.aboutPage.storyEyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-charcoal-900">
              {t.aboutPage.storyTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal-600">{t.aboutPage.storyP1}</p>
            <p className="mt-4 leading-relaxed text-charcoal-600">{t.aboutPage.storyP2}</p>
            <ButtonLink href="/tours" className="mt-6">
              {t.aboutPage.seeOurTours}
            </ButtonLink>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem]">
            <Image src={img.hikers} alt="Guide leading a hiking group" fill sizes="500px" className="object-cover" />
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow={t.aboutPage.howWeWorkEyebrow} title={t.aboutPage.howWeWorkTitle} align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-charcoal-50 p-6">
                <v.icon size={22} className="text-ocean-700" />
                <h3 className="mt-4 font-display text-lg font-medium text-charcoal-900">{v.title}</h3>
                <p className="mt-1.5 text-sm text-charcoal-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 rounded-[1.75rem] bg-forest-950 p-10 text-white sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-medium sm:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-forest-100/70">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
