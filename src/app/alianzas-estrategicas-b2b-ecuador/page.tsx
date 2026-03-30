"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, ShieldCheck, MapPin, MessageCircle, Handshake, Globe, Rocket, Layers, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";

const Footer = dynamic(() => import("@/components/sections/Footer"));
const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp"));
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"));

// SEO Content for the B2B Strategic Alliances Page in Ecuador
const content = {
  title: "Alianzas Estratégicas B2B en Ecuador | Origami Consulting",
  h1: "Alianzas Estratégicas B2B en Ecuador",
  intro: {
    tag: "Catalizador de Crecimiento",
    text: "Las alianzas estratégicas son el catalizador del crecimiento exponencial en el mercado B2B. Permiten a las empresas acceder a nuevos mercados, compartir recursos clave y generar oportunidades comerciales constantes sin depender exclusivamente de sus equipos internos de ventas.",
  },
  definition: {
    title: "¿Qué son las alianzas estratégicas B2B?",
    text: "Es un acuerdo colaborativo entre organizaciones que buscan un beneficio mutuo, aprovechando fortalezas complementarias para alcanzar objetivos estratégicos que por separado serían inalcanzables. Una alianza bien estructurada no es solo un contrato; es un motor de valor compartido."
  },
  benefits: [
    { title: "Acceso a Nuevos Clientes", desc: "Llegue a audiencias ya consolidadas por sus partners estratégicos.", icon: Users },
    { title: "Expansión de Mercado", desc: "Escale geográficamente o por sectores con un riesgo controlado.", icon: Globe },
    { title: "Reducción de Costos", desc: "Optimice su gasto comercial mediante el aprovechamiento de canales compartidos.", icon: Layers },
    { title: "Crecimiento Acelerado", desc: "Multiplique su alcance comercial sin incrementar proporcionalmente su estructura.", icon: Rocket }
  ],
  problems: {
    title: "Desafíos que Resolvemos",
    items: [
      { title: "Dependencia del Equipo de Ventas", desc: "Diversificamos sus fuentes de generación de demanda." },
      { title: "Dificultad para Abrir Mercados", desc: "Facilitamos la entrada en nuevos sectores mediante partners locales." },
      { title: "Falta de Contactos Clave", desc: "Conectamos su negocio con decisores de alto nivel en Ecuador." },
      { title: "Crecimiento Lento", desc: "Inyectamos velocidad a su estrategia comercial mediante sinergias." }
    ]
  },
  focus: {
    title: "Nuestro Enfoque en Alianzas",
    text: "En Origami Consulting identificamos, estructuramos y gestionamos alianzas estratégicas que realmente generan impacto. No nos limitamos a la firma de acuerdos; aseguramos la ejecución y el seguimiento necesario para que la alianza se traduzca en facturación real."
  },
  examples: [
    { title: "Empresas Complementarias", desc: "Unión de firmas que ofrecen servicios que se potencian entre sí." },
    { title: "Redes de Distribuidores", desc: "Estructuración de canales de distribución para productos industriales." },
    { title: "Canales Comerciales", desc: "Apertura de nuevos puntos de contacto mediante aliados de negocio." },
    { title: "Partners Estratégicos", desc: "Alianzas tecnológicas o de servicios que elevan su propuesta de valor." }
  ],
  results: {
    title: "Resultados Estratégicos",
    items: [
      "Generación recurrente de nuevas oportunidades de negocio",
      "Incremento sostenido en la facturación B2B",
      "Expansión comercial verificable en múltiples regiones",
      "Posicionamiento de liderazgo en su sector"
    ]
  },
  coverage: {
    title: "Gestión de Alianzas en Todo el Ecuador",
    desc: "Nuestra red y experiencia nos permiten gestionar alianzas estratégicas con alcance nacional, conectando empresas en los principales centros económicos del país."
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

export default function B2BAlliancesPage() {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Alianzas Estratégicas B2B en Ecuador",
            "provider": {
              "@type": "Organization",
              "name": "Origami Consulting Group"
            },
            "areaServed": "Ecuador",
            "description": "Servicios de consultoría para la identificación, estructuración y gestión de alianzas estratégicas B2B en Ecuador."
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
        <section className="bg-navy py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeader tag="Colaboración" title={content.definition.title} dark />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <p className="text-2xl text-white/80 leading-relaxed font-sans italic border-l-4 border-green pl-8">
                  &quot;{content.definition.text}&quot;
                </p>
                <div className="flex justify-center">
                   <Handshake className="w-48 h-48 text-green/20" />
                </div>
             </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <SectionHeader tag="Valor" title="Beneficios de las Alianzas Estratégicas" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-navy/5 p-8 rounded-2xl hover:border-green transition-all group shadow-sm hover:shadow-md"
              >
                <benefit.icon className="w-10 h-10 text-green mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-syne font-bold text-navy mb-4">{benefit.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROBLEMS SECTION */}
        <section className="bg-surface-dark py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <SectionHeader tag="Desafíos" title={content.problems.title} />
                <p className="text-lg text-navy/60 mb-12">Muchas empresas ven limitado su crecimiento al depender únicamente de su equipo comercial directo. Nosotros rompemos ese techo.</p>
              </div>
              <div className="space-y-6">
                {content.problems.items.map((item, i) => (
                  <div key={i} className="bg-white p-7 rounded-2xl border border-navy/5 flex items-start gap-4">
                     <ShieldCheck className="w-6 h-6 text-green mt-1" />
                     <div>
                        <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                        <p className="text-navy/50 text-sm">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OUR FOCUS SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-20">
               <SectionHeader tag="Acción" title={content.focus.title} />
               <p className="text-xl text-navy/70 leading-relaxed font-sans">{content.focus.text}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {content.examples.map((ex, i) => (
                  <div key={i} className="relative p-8 rounded-2xl border border-navy/5 bg-white group overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-green transform -translate-x-full group-hover:translate-x-0 transition-transform" />
                     <h3 className="text-lg font-bold text-navy mb-3">{ex.title}</h3>
                     <p className="text-sm text-navy/50">{ex.desc}</p>
                  </div>
               ))}
            </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="bg-navy py-24 md:py-32 px-6">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <SectionHeader tag="Impacto" title={content.results.title} dark />
                <div className="space-y-4">
                   {content.results.items.map((res, i) => (
                      <div key={i} className="flex items-center gap-4 text-white/80">
                         <ChevronRight className="w-5 h-5 text-green" />
                         <span className="text-lg font-medium">{res}</span>
                      </div>
                   ))}
                </div>
              </div>
              <div className="lg:w-1/2 bg-white/5 p-12 rounded-[40px] border border-white/10">
                 <MapPin className="text-green w-10 h-10 mb-6" />
                 <h3 className="text-white font-syne font-bold text-2xl mb-4">{content.coverage.title}</h3>
                 <p className="text-white/60 text-lg leading-relaxed">{content.coverage.desc}</p>
                 <div className="mt-8 pt-8 border-t border-white/10">
                    <span className="text-green font-bold tracking-widest uppercase text-xs">Estrategia Global | Ejecución Local</span>
                 </div>
              </div>
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
