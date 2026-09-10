"use client";

import Image from "next/image";
import { BlogPost, Tour } from "@/types";
import { Container } from "@/components/ui/Container";
import { TourRow } from "@/components/tours/TourRow";
import { BlogCard } from "@/components/ui/BlogCard";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function BlogDetailView({
  post,
  relatedTours,
  morePosts,
}: {
  post: BlogPost;
  relatedTours: Tour[];
  morePosts: BlogPost[];
}) {
  const { t, locale } = useT();
  const title = L(post.title, locale);

  return (
    <div className="pb-24">
      <section className="relative flex h-[48vh] min-h-[340px] items-end overflow-hidden">
        <Image src={post.image} alt={title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/15 to-transparent" />
        <Container className="relative z-10 pb-10">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-800">
            {L(post.category, locale)}
          </span>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-3xl font-medium text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-white/70">
            {L(post.date, locale)} · {L(post.readTime, locale)}
          </p>
        </Container>
      </section>

      <Container className="mt-10">
        <div className="mx-auto max-w-2xl">
          {L(post.content, locale).map((paragraph, i) => (
            <p key={i} className="mt-5 leading-relaxed text-charcoal-700 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedTours.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-medium text-charcoal-900">
              {t.blogDetail.turnIntoTrip}
            </h2>
            <div className="mt-6">
              <TourRow tours={relatedTours} />
            </div>
          </section>
        )}

        <section className="mt-16">
          <h2 className="font-display text-2xl font-medium text-charcoal-900">{t.blogDetail.moreFromGuide}</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {morePosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
