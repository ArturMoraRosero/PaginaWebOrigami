"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, TrendingUp, Zap, Target, Users, ShieldCheck, BarChart3, MapPin, MessageCircle, FileText, PieChart, ArrowRight } from "lucide-react";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Scene from "@/components/Scene";
import Contact from "@/components/sections/Contact";

const Gem = ({ className }: { className?: string }) => <Zap className={className} />;

// SEO Content for the B2B Sales Strategy Page in Ecuador
const content = {
  title: "Estrategia de Ventas B2B en Ecuador | Origami Consulting",
  h1: "Estrategia de Ventas B2B en Ecuador",
  intro: {
    tag: "Motor de Crecimiento",
    text: "En el competitivo mercado de Ecuador, una estrategia de ventas B2B clara es el motor que impulsa el crecimiento sostenible y la escalabilidad empresarial. Resolvemos problemas de ventas estancadas, falta de procesos y la dificultad para escalar en entornos de alta exigencia.",
  },
  definition: {
    title: "¿Qué es una estrategia de ventas B2B?",
    text: "No es simplemente vender a otras empresas; es el diseño de un ecosistema de procesos, tácticas y herramientas estructuradas para establecer relaciones comerciales duraderas y de alto valor. Es la hoja de ruta que transforma la incertidumbre en resultados proyectables."
  },
  components: [
    { title: "Definición de Cliente Ideal", desc: "Segmentación precisa para enfocar esfuerzos en cuentas con mayor potencial de rentabilidad.", icon: Target },
    { title: "Propuesta de Valor", desc: "Articulación del diferencial competitivo que hace que su empresa sea la opción lógica.", icon: Gem },
    { title: "Proceso Comercial", desc: "Estandarización de etapas comerciales, desde la prospección hasta el cierre exitoso.", icon: Network },
    { title: "Pipeline de Ventas", desc: "Gestión visual y estratégica de cada oportunidad para maximizar la tasa de conversión.", icon: BarChart3 },
    { title: "Métricas y Seguimiento", desc: "Análisis de KPIs críticos para la toma de decisiones basada en datos reales.", icon: PieChart }
  ],
  problems: {
    title: "Problemas que Resolvemos",
    items: [
      { title: "Empresas sin Estructura Comercial", desc: "Organizamos el caos para crear un modelo de ventas repetible." },
      { title: "Ventas Inconsistentes", desc: "Eliminamos los picos y valles, asegurando un flujo de ingresos constante." },
      { title: "Equipos sin Dirección Clara", desc: "Dotamos a su fuerza de ventas de objetivos y tácticas precisas." },
      { title: "Falta de Crecimiento Sostenible", desc: "Construimos las bases para escalar sin perder calidad ni eficiencia." }
    ]
  },
  focus: {
    title: "Nuestro Enfoque Estratégico",
    text: "En Origami Consulting no entregamos manuales genéricos. Diseñamos estrategias adaptadas a la realidad de cada empresa ecuatoriana, combinando un análisis profundo con ejecución táctica y acompañamiento directo en la implementación."
  },
  results: {
    title: "Resultados de Alto Impacto",
    items: [
      "Incremento medible en la facturación B2B",
      "Mayor claridad y control del embudo comercial",
      "Mejora significativa en las tasas de cierre",
      "Estructura comercial lista para la expansión regional"
    ]
  },
  coverage: {
    title: "Cobertura en Todo el Ecuador",
    desc: "Acompañamos a organizaciones en Guayaquil, Quito, Cuenca y las principales zonas industriales y comerciales del país, elevando su competitividad a estándares globales."
  }
};

const SectionHeader = ({ tag, title, dark = false }: { tag: string; title: string; dark?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-16"
    >
      <span className={`font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block ${dark ? 'text-green/80' : 'text-green'}`}>
        {tag}
      </span>
      <h2 className={`font-syne font-bold text-3xl md:text-5xl leading-tight ${dark ? 'text-white' : 'text-navy'} max-w-3xl`}>
        {title}
      </h2>
    </motion.div>
  );
};

export default function B2BSalesStrategyPage() {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Estrategia de Ventas B2B en Ecuador",
            "provider": {
              "@type": "Organization",
              "name": "Origami Consulting Group"
            },
            "areaServed": "Ecuador",
            "description": "Consultoría especializada en el diseño e implementación de estrategias de ventas B2B para empresas ecuatorianas."
          })
        }}
      />

      <Scene />
      <Navigation />

      <div className="relative z-10 pt-32">
        {/* HERO SECTION */}
        <section className="px-6 py-20 lg:py-32 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green font-syne font-bold uppercase tracking-widest text-sm mb-6 block">
              {content.intro.tag}
            </span>
            <h1 className="font-syne font-bold text-[clamp(40px,8vw,80px)] leading-[1.1] text-navy mb-8 max-w-4xl">
              {content.h1}
            </h1>
            <p className="text-xl md:text-2xl text-navy/70 font-sans leading-relaxed max-w-3xl mb-12">
              {content.intro.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-green text-navy px-9 py-4 rounded-full font-bold tracking-wide hover:scale-[1.03] transition-all duration-300 text-center">
                Agendar Asesoría
              </a>
              <a href="https://wa.me/593984180800" target="_blank" className="flex items-center justify-center gap-2 bg-white border border-navy/10 text-navy px-9 py-4 rounded-full font-medium hover:border-green transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </section>

        {/* DEFINITION SECTION */}
        <section className="bg-surface-dark py-24 md:py-32 px-6 border-y border-navy/5">
          <div className="max-w-7xl mx-auto text-center">
             <SectionHeader tag="Concepto" title={content.definition.title} />
             <p className="text-xl text-navy/70 max-w-4xl mx-auto leading-relaxed font-sans italic">
                &quot;{content.definition.text}&quot;
             </p>
          </div>
        </section>

        {/* COMPONENTS SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <SectionHeader tag="Estructura" title="¿Qué incluye una estrategia de ventas efectiva?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.components.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-navy/5 rounded-2xl p-10 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-green/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-green/10 transition-colors">
                  <comp.icon className="w-7 h-7 text-green" />
                </div>
                <h3 className="text-xl font-syne font-bold text-navy mb-4">{comp.title}</h3>
                <p className="text-navy/60 leading-relaxed font-sans">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROBLEMS SECTION */}
        <section className="bg-navy py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader tag="Desafíos" title={content.problems.title} dark />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.problems.items.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR FOCUS SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="bg-surface-dark p-12 md:p-20 rounded-[40px] border border-navy/5 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <SectionHeader tag="Diferencial" title={content.focus.title} />
               <p className="text-xl text-navy/70 leading-relaxed mb-8">{content.focus.text}</p>
               <div className="flex flex-wrap gap-4">
                  {["Análisis", "Ejecución", "Acompañamiento"].map((word, i) => (
                    <span key={i} className="bg-green/10 text-green px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase">
                       {word}
                    </span>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                  <BarChart3 className="w-8 h-8 text-green mb-4" />
                  <span className="block font-bold text-3xl text-navy">95%</span>
                  <span className="text-xs text-navy/40 uppercase font-bold tracking-tighter">Claridad Comercial</span>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm translate-y-8">
                  <TrendingUp className="w-8 h-8 text-green mb-4" />
                  <span className="block font-bold text-3xl text-navy">+30%</span>
                  <span className="text-xs text-navy/40 uppercase font-bold tracking-tighter">Cierre de Ventas</span>
               </div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="bg-surface-dark py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeader tag="Impacto Real" title={content.results.title} />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.results.items.map((res, i) => (
                   <div key={i} className="flex items-center gap-6 bg-white p-8 rounded-2xl border border-navy/5">
                      <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center flex-shrink-0">
                         <ArrowRight className="w-6 h-6 text-navy" />
                      </div>
                      <span className="text-lg font-bold text-navy">{res}</span>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* COVERAGE SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <SectionHeader tag="Alcance" title={content.coverage.title} />
              <p className="text-xl text-navy/60 max-w-3xl mx-auto">{content.coverage.desc}</p>
           </div>
           <div className="flex justify-center gap-12 flex-wrap pb-20">
              {["Guayaquil", "Quito", "Cuenca", "Manta", "Ambato"].map((city, i) => (
                <div key={i} className="flex items-center gap-2 text-navy/40 font-syne font-bold uppercase tracking-widest hover:text-green transition-colors cursor-default">
                   <MapPin className="w-4 h-4" />
                   {city}
                </div>
              ))}
           </div>
        </section>

        <section id="contacto">
          <Contact />
        </section>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
