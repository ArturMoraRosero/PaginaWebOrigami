import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";

// Lazy load below-the-fold components
const Scene = dynamic(() => import("@/components/Scene"));
const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp"));
const ProblemSection = dynamic(() => import("@/components/sections/ProblemSection"));
const PracticeAreas = dynamic(() => import("@/components/sections/PracticeAreas"));
const BrandValuationSection = dynamic(() => import("@/components/sections/BrandValuationSection"));
const MethodologySection = dynamic(() => import("@/components/sections/MethodologySection"));
const StrategicCase = dynamic(() => import("@/components/sections/StrategicCase"));
const Distinctions = dynamic(() => import("@/components/sections/Distinctions"));
const QuoteSection = dynamic(() => import("@/components/sections/QuoteSection"));
const SocialInsights = dynamic(() => import("@/components/sections/SocialInsights"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      {/* JSON-LD Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Origami Consulting Group",
            "url": "https://www.oriconsultoria.com",
            "logo": "https://www.oriconsultoria.com/logo-header-light.png",
            "image": "https://www.oriconsultoria.com/brand-valuation-premium.png",
            "description": "Firma boutique de consultoría estratégica en Quito. Acompañamos a CEOs en expansión comercial, alianzas B2B y valoración estratégica.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Eloy Alfaro y Pasaje A, Edificio Murano",
              "addressLocality": "Quito",
              "addressRegion": "Pichincha",
              "postalCode": "170102",
              "addressCountry": "EC"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -0.1703472,
              "longitude": -78.470309
            },
            "telephone": "+593985141999",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "18:30"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "10"
            },
            "sameAs": [
              "https://www.linkedin.com/company/origami-consulting-group-sas/"
            ]
          })
        }}
      />
      
      {/* 3D Scene Background mapped to scroll progress */}
      <Scene />
      
      {/* Global Navigation */}
      <Navigation />

      {/* Pages Container */}
      <div className="relative z-10">
        <Hero />
        <ProblemSection />
        <PracticeAreas />
        <BrandValuationSection />
        <MethodologySection />
        <StrategicCase />
        <Distinctions />
        <QuoteSection />
        <SocialInsights />
        <Contact />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main >
  );
}
