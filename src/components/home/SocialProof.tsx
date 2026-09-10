"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";
import { useT } from "@/i18n/useT";

export function SocialProof() {
  const { t } = useT();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.socialProof.eyebrow}
          title={t.socialProof.title}
          action={
            <div className="flex items-center gap-2 rounded-2xl bg-charcoal-50 px-4 py-3 ring-1 ring-charcoal-100">
              <span className="flex items-center gap-0.5 text-sand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-sand-500 text-sand-500" />
                ))}
              </span>
              <span className="text-sm font-semibold text-charcoal-900">4.9</span>
              <span className="text-sm text-charcoal-400">{t.socialProof.googleReviews}</span>
            </div>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
