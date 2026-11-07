import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFab from "@/components/WhatsAppFab";
import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import HowItWorks from "@/components/sections/HowItWorks";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";
import Proof from "@/components/sections/Proof";
import Founder from "@/components/sections/Founder";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import { faqs, founder, services, site } from "@/content/site";

// Structured data for search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#org`,
      name: site.name,
      slogan: site.tagline,
      url: site.url,
      email: site.email,
      telephone: site.phoneHref.replace("tel:", ""),
      areaServed: { "@type": "Country", name: "India" },
      description:
        "Done-for-you automation for Chartered Accountant firms, finance teams, and modern businesses: document collection, compliance alerts, invoice and bank statement extraction, and live client dashboards.",
      founder: { "@type": "Person", name: founder.name, jobTitle: "Founder" },
      sameAs: [site.linkedin, site.github],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Automation services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#org` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-lift"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Pain />
        <Services />
        <BeforeAfter />
        <HowItWorks />
        <Security />
        <Pricing />
        <Proof />
        <Founder />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
