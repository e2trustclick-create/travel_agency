"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";

export function BlogCard({ post, className }: { post: BlogPost; className?: string }) {
  const { locale } = useT();

  return (
    <Link
      href={`/travel-guide/${post.slug}`}
      className={cn("group flex flex-col overflow-hidden rounded-2xl", className)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={post.image}
          alt={L(post.title, locale)}
          fill
          sizes="(max-width: 640px) 90vw, 400px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-800">
          {L(post.category, locale)}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <h3 className="font-display text-lg font-medium leading-snug text-charcoal-900 group-hover:text-ocean-800">
            {L(post.title, locale)}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-charcoal-500">{L(post.excerpt, locale)}</p>
          <p className="mt-2 text-xs text-charcoal-400">
            {L(post.date, locale)} · {L(post.readTime, locale)}
          </p>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-charcoal-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal-900"
        />
      </div>
    </Link>
  );
}
