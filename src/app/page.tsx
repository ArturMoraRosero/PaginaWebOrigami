import Scene from "@/components/Scene";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import PracticeAreas from "@/components/sections/PracticeAreas";
import BrandValuationSection from "@/components/sections/BrandValuationSection";
import MethodologySection from "@/components/sections/MethodologySection";
import StrategicCase from "@/components/sections/StrategicCase";
import Distinctions from "@/components/sections/Distinctions";
import QuoteSection from "@/components/sections/QuoteSection";
import SocialInsights from "@/components/sections/SocialInsights";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

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
