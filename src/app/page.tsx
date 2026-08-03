import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import FaqSection from "@/components/sections/FaqSection";
import { faqsHome, FAQ_UPDATED_AT } from "@/content/faqs";
import { organizationSchema, websiteSchema } from "@/lib/schema";

// Lazy load below-the-fold components
const Scene = dynamic(() => import("@/components/Scene"));
const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp"));
const LogoMarquee = dynamic(() => import("@/components/sections/LogoMarquee"));
const ProblemSection = dynamic(() => import("@/components/sections/ProblemSection"));
const PracticeAreas = dynamic(() => import("@/components/sections/PracticeAreas"));
const CorporateChannelSection = dynamic(() => import("@/components/sections/CorporateChannelSection"));
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
      {/* JSON-LD: entidad Origami + sitio web (fuente única en src/lib/schema.ts) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema])
        }}
      />
      
      {/* 3D Scene Background mapped to scroll progress */}
      <Scene />
      
      {/* Global Navigation */}
      <Navigation />

      {/* Pages Container */}
      <div className="relative z-10">
        <Hero />
        <LogoMarquee />
        <ProblemSection />
        <PracticeAreas />
        <CorporateChannelSection />
        <BrandValuationSection />
        <MethodologySection />
        <StrategicCase />
        <Distinctions />
        <QuoteSection />
        <SocialInsights />
        <FaqSection faqs={faqsHome} updatedAt={FAQ_UPDATED_AT} />
        <Contact />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main >
  );
}
