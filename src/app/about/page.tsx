import type { Metadata } from "next";
import { AboutPageBody } from "@/components/about/AboutPageBody";

export const metadata: Metadata = {
  title: "About Us",
  description: "A small team of local guides and planners building Albania's most trusted tour experiences.",
};

export default function AboutPage() {
  return <AboutPageBody />;
}
