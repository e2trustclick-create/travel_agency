"use client";

import Link from "next/link";
import { Compass, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { useT } from "@/i18n/useT";
import { L } from "@/lib/i18n";
import { tours } from "@/data/tours";

const popularTourSlugs = [
  "theth-blue-eye-adventure",
  "shala-river-boat-tour",
  "ksamil-islands-boat-trip",
  "accursed-mountains-3-day-trek",
];

export function Footer() {
  const { t, locale } = useT();

  const popularTours = popularTourSlugs
    .map((slug) => tours.find((tr) => tr.slug === slug))
    .filter((tr): tr is NonNullable<typeof tr> => Boolean(tr));

  const columns = [
    {
      title: t.footer.exploreTitle,
      links: [
        { href: "/tours", label: t.footer.linkTours },
        { href: "/destinations", label: t.footer.linkDestinations },
        { href: "/trip-planner", label: t.footer.linkTripPlanner },
        { href: "/travel-guide", label: t.footer.linkTravelGuide },
      ],
    },
    {
      title: t.footer.companyTitle,
      links: [
        { href: "/about", label: t.footer.linkAbout },
        { href: "/contact", label: t.footer.linkContact },
        { href: "/travel-guide", label: t.footer.linkBlog },
      ],
    },
    {
      title: t.footer.popularToursTitle,
      links: popularTours.map((tour) => ({
        href: `/tours/${tour.slug}`,
        label: L(tour.name, locale),
      })),
    },
  ];

  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean-600 text-white">
                <Compass size={18} strokeWidth={2.4} />
              </span>
              <span className="font-display text-xl font-medium text-white">Gjelbër</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-400">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[InstagramIcon, FacebookIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800 text-charcoal-200 transition-colors hover:bg-ocean-600 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {t.footer.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                +355 69 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                hello@gjelber.al
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-charcoal-800 pt-8 text-xs text-charcoal-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Gjelbër Travel. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-charcoal-300">
              {t.footer.privacy}
            </Link>
            <Link href="/contact" className="hover:text-charcoal-300">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
