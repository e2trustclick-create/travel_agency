import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://www.gjelber.al";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tours",
    "/destinations",
    "/trip-planner",
    "/about",
    "/travel-guide",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const tourRoutes = tours.map((t) => ({
    url: `${BASE_URL}/tours/${t.slug}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${BASE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${BASE_URL}/travel-guide/${b.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...tourRoutes, ...destinationRoutes, ...blogRoutes];
}
