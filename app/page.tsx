import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhyAndare } from "@/components/sections/WhyAndare";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { ItalySpotlight } from "@/components/sections/ItalySpotlight";
import { Services } from "@/components/sections/Services";
import { TravelStyles } from "@/components/sections/TravelStyles";
import { PlanningProcess } from "@/components/sections/PlanningProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ, faqs } from "@/components/sections/FAQ";
import { BookACall } from "@/components/sections/BookACall";
import { services } from "@/lib/data";

const siteUrl = "https://www.andaretravel.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom European Travel Planning",
  provider: {
    "@type": "TravelAgency",
    name: "Andare Travel",
  },
  areaServed: "Europe",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Planning Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "USD",
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Hero />
      <SocialProof />
      <WhyAndare />
      <FeaturedDestinations />
      <ItalySpotlight />
      <Services />
      <TravelStyles />
      <PlanningProcess />
      <Testimonials />
      <FAQ />
      <BookACall />
    </>
  );
}
