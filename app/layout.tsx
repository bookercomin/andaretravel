import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const siteUrl = "https://www.andaretravel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andare Travel | Custom Italy & Europe Travel Design",
    template: "%s | Andare Travel",
  },
  description:
    "Andare Travel designs custom European adventures with a specialty in Italy — honeymoon planning, Amalfi Coast and Tuscany itineraries, and full concierge trip design built around how you actually want to travel.",
  keywords: [
    "Italy travel planner",
    "Italy honeymoon planner",
    "European honeymoon travel advisor",
    "custom Italy itineraries",
    "luxury Italy travel",
    "Italy travel expert",
    "Europe travel designer",
    "Amalfi Coast honeymoon",
    "Tuscany honeymoon",
    "Lake Como travel planner",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Andare Travel",
    title: "Andare Travel | Custom Italy & Europe Travel Design",
    description:
      "Custom European adventures designed around your story — with a specialty in Italy. Honeymoons, family trips, and fully concierge-planned journeys.",
    images: [
      {
        url: "/images/amalfi-coast-positano.jpg",
        width: 1600,
        height: 2100,
        alt: "Aerial view of the Amalfi Coast above Positano, Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andare Travel | Custom Italy & Europe Travel Design",
    description:
      "Custom European adventures designed around your story — with a specialty in Italy.",
    images: ["/images/amalfi-coast-positano.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Andare Travel",
  description:
    "Andare Travel designs custom European adventures with a specialty in Italy, including honeymoon planning, concierge itinerary design, and fully bespoke luxury trips.",
  url: siteUrl,
  logo: `${siteUrl}/images/milan-duomo.jpg`,
  image: `${siteUrl}/images/amalfi-coast-positano.jpg`,
  areaServed: {
    "@type": "Place",
    name: "Europe",
  },
  sameAs: ["https://www.instagram.com/", "https://www.pinterest.com/"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Andare Travel",
  description: "Boutique travel design company specializing in custom Italy and Europe itineraries.",
  url: siteUrl,
  priceRange: "$50 - $2,500+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
