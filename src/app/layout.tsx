import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileBookingBar } from "@/components/layout/MobileBookingBar";
import { AppStateProvider } from "@/context/AppStateContext";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gjelber.al"),
  manifest: "/manifest.webmanifest",
  title: {
    default: "Shala River Trip — Discover Albania Differently",
    template: "%s | Shala River Trip",
  },
  description:
    "Handpicked tours, day trips and adventures across Albania. Local experts, small groups, easy online booking.",
  keywords: [
    "Albania tours",
    "Albania travel agency",
    "Theth tour",
    "Shala River",
    "Blue Eye Albania",
    "Albania adventure travel",
  ],
  openGraph: {
    title: "Shala River Trip — Discover Albania Differently",
    description:
      "Handpicked tours, day trips and adventures across Albania. Local experts, small groups, easy online booking.",
    url: "https://www.gjelber.al",
    siteName: "Shala River Trip",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#276a87",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal-900 font-sans">
        <AppStateProvider>
          <Navbar />
          <main className="flex-1 pb-20 sm:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileBookingBar />
        </AppStateProvider>
      </body>
    </html>
  );
}
