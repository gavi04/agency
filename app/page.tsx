import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFab from "@/components/WhatsAppFab";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks"; // Section 2 as requested
import Pain from "@/components/sections/Pain"; // Pick your business
import Services from "@/components/sections/Services"; // What we automate & Connected to books
import BeforeAfter from "@/components/sections/BeforeAfter"; // Two promises
import Security from "@/components/sections/Security"; // Your data stays yours
import Faq from "@/components/sections/Faq"; // Questions owners usually ask
import FinalCta from "@/components/sections/FinalCta"; // Free 3-day trial form
import Footer from "@/components/sections/Footer";
import { faqs, site } from "@/content/site";

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
        "Minus Zero automates repetitive daily chores for CA firms, service businesses, traders, and factories, connecting them directly to accounting software. Enter data once. Never twice.",
      sameAs: [site.linkedin, site.github],
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
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: Four simple steps ("From this takes forever to it just happens") */}
        <HowItWorks />
        {/* Section 3: Pick your business */}
        <Pain />
        {/* Section 4: What we automate & Connected to books */}
        <Services />
        {/* Section 5: Two promises */}
        <BeforeAfter />
        {/* Section 6: Security */}
        <Security />
        {/* Section 7: FAQs */}
        <Faq />
        {/* Section 8: Final CTA */}
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
