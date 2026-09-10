"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";
import { useT } from "@/i18n/useT";

export function TravelGuideSection() {
  const { t } = useT();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.travelGuideSection.eyebrow}
          title={t.travelGuideSection.title}
          description={t.travelGuideSection.description}
          action={
            <ButtonLink href="/travel-guide" variant="outline">
              {t.common.readTheGuide}
            </ButtonLink>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
