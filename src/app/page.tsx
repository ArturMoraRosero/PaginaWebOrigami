import Scene from "@/components/Scene";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import PracticeAreas from "@/components/sections/PracticeAreas";
import MethodologySection from "@/components/sections/MethodologySection";
import StrategicCase from "@/components/sections/StrategicCase";
import Distinctions from "@/components/sections/Distinctions";
import QuoteSection from "@/components/sections/QuoteSection";
import InsightsSection from "@/components/sections/InsightsSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      {/* 3D Scene Background mapped to scroll progress */}
      <Scene />
      
      {/* Global Navigation */}
      <Navigation />

      {/* Pages Container */}
      <div className="relative z-10">
        <Hero />
        <ProblemSection />
        <PracticeAreas />
        <MethodologySection />
        <StrategicCase />
        <Distinctions />
        <QuoteSection />
        <InsightsSection />
        <Contact />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main >
  );
}
