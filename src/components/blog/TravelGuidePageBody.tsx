"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function TravelGuidePageBody() {
  const { t, locale } = useT();
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
          {t.travelGuidePage.eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-medium text-charcoal-900 sm:text-5xl">
          {t.travelGuidePage.title}
        </h1>
        <p className="mt-3 text-lg text-charcoal-500">{t.travelGuidePage.subtitle}</p>
      </div>

      {featured && (
        <Link
          href={`/travel-guide/${featured.slug}`}
          className="group mt-10 grid grid-cols-1 gap-6 overflow-hidden rounded-[1.75rem] bg-charcoal-50 sm:grid-cols-2"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-auto">
            <Image src={featured.image} alt={L(featured.title, locale)} fill sizes="600px" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wide text-ocean-700">
              {L(featured.category, locale)}
            </span>
            <h2 className="mt-2 font-display text-2xl font-medium text-charcoal-900 sm:text-3xl">
              {L(featured.title, locale)}
            </h2>
            <p className="mt-3 text-charcoal-600">{L(featured.excerpt, locale)}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-900">
              {t.common.readTheGuide}{" "}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      )}

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
