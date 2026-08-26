"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Settings, Target, XCircle, MapPin, MessageCircle, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import FaqSection from "@/components/sections/FaqSection";
import RelatedLinks from "@/components/sections/RelatedLinks";
import { faqsRedisenoComercial, FAQ_UPDATED_AT } from "@/content/faqs";
import { serviceSchema, SITE_URL } from "@/lib/schema";

const Footer = dynamic(() => import("@/components/sections/Footer"));
const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp"));
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"));

// SEO Content for the Commercial System Redesign Page in Ecuador
const content = {
  title: "Rediseño del Sistema Comercial en Ecuador | Origami Consulting",
  h1: "Su equipo comercial no tiene un problema de esfuerzo. Tiene un problema de estructura.",
  intro: {
    tag: "Arquitectura Comercial",
    text: "Cuando el equipo comercial no cumple la meta, la respuesta más común es exigir más esfuerzo: más llamadas, más visitas, más horas. Rara vez funciona, porque el esfuerzo no compensa un sistema mal diseñado. Rediseñamos la estructura que hace que un equipo comercial venda de forma predecible — no la motivación con la que trabaja.",
  },
  services: [
    {
      title: "Diseño de Roles y Territorios",
      desc: "Definimos quién vende qué, a quién y con qué cuenta, para que dos vendedores no compitan por la misma cuenta ni dejen segmentos sin cubrir.",
      icon: Users
    },
    {
      title: "Arquitectura del Proceso Comercial",
      desc: "Etapas, criterios de paso entre etapas y cadencia de seguimiento. El proceso decide el resultado, no la voluntad individual del vendedor.",
      icon: Settings
    },
    {
      title: "Sistema de Incentivos",
      desc: "Metas y comisiones que refuerzan el comportamiento correcto —prospección, calidad de cuenta, retención— no solo el cierre del mes.",
      icon: Target
    }
  ],
  notThis: {
    title: "Qué no es esto",
    items: [
      { title: "No es capacitación", desc: "Una capacitación mejora habilidades individuales. Si la estructura está rota, un equipo mejor entrenado sigue vendiendo de forma inconsistente." },
      { title: "No es un taller de motivación", desc: "La motivación se agota en semanas. El resultado comercial no depende del ánimo del equipo, depende del diseño del sistema." },
      { title: "No es contratar más vendedores", desc: "Sumar personas a un proceso sin diseño multiplica el problema, no el resultado. Primero se estructura, después se escala." }
    ]
  },
  target: {
    title: "Empresas Cuyo Equipo Comercial Creció Sin Diseño",
    sectors: ["Empresas de Tecnología y Software", "Industria y Manufactura", "Constructoras y Grupos Empresariales", "Firmas de Servicios Profesionales"]
  },
  problems: {
    title: "Señales de que el Problema es de Estructura",
    items: [
      { title: "Depende de una o dos personas", desc: "El resultado del mes depende de quién esté motivado, no de un proceso repetible." },
      { title: "Cada vendedor vende distinto", desc: "No hay una forma estándar de calificar, presentar o cerrar. Cada resultado es una excepción." },
      { title: "La rotación golpea el pipeline", desc: "Cuando un vendedor se va, se va también el conocimiento del proceso, porque nunca estuvo documentado." }
    ]
  },
  methodology: {
    title: "Cómo Rediseñamos el Sistema Comercial",
    steps: [
      { title: "Diagnóstico Estructural", desc: "Mapeamos roles, procesos e incentivos actuales, y dónde exactamente se rompe el resultado." },
      { title: "Arquitectura del Sistema", desc: "Diseñamos la estructura nueva —roles, proceso, incentivos— a la medida del ciclo de venta real de la empresa." },
      { title: "Acompañamiento en la Implementación", desc: "Acompañamos la puesta en marcha hasta que el equipo opera el sistema sin depender de nosotros." }
    ]
  },
  results: {
    title: "Resultados Estructurales Esperados",
    items: ["Resultado comercial que no depende de una sola persona", "Ciclo de venta con etapas y criterios claros", "Rotación del equipo con menor impacto en el pipeline"]
  },
  coverage: {
    title: "Presencia en Quito y Cobertura Nacional",
    desc: "Nuestra base estratégica se encuentra en Quito, permitiéndonos una conexión directa con el centro de decisión corporativa del país, mientras acompañamos procesos de rediseño comercial en todo el territorio ecuatoriano."
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

export default function RedisenoSistemaComercialPage() {

  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Rediseño del Sistema Comercial en Ecuador",
              serviceType: "Estructuración de equipos comerciales B2B",
              areaServed: "Ecuador",
              url: `${SITE_URL}/rediseno-sistema-comercial-ecuador`,
              description:
                "Rediseño de la estructura del equipo comercial de empresas B2B en Ecuador: roles y territorios, arquitectura del proceso comercial y sistema de incentivos. No es capacitación ni contratación de más vendedores.",
            })
          )
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
            <h1 className="font-syne font-bold text-[clamp(36px,7vw,72px)] leading-[1.15] text-navy mb-8 max-w-4xl">
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

        {/* SERVICES SECTION */}
        <section className="bg-navy py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader tag="Nuestra Solución" title="Las Tres Capas del Sistema Comercial" dark />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-green/50 transition-colors group"
                >
                  <service.icon className="w-10 h-10 text-green mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-syne font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 font-sans leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* QUÉ NO ES (DESLINDE) */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <SectionHeader tag="Deslinde" title={content.notThis.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.notThis.items.map((item, i) => (
              <div key={i} className="bg-surface-dark p-8 rounded-2xl border border-navy/5">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-navy/40 flex-shrink-0" />
                  <h3 className="font-syne font-bold text-lg text-navy">{item.title}</h3>
                </div>
                <p className="text-navy/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TARGET & PROBLEMS */}
        <section className="bg-surface-dark py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader tag="A quién ayudamos" title={content.target.title} />
              <div className="space-y-4">
                {content.target.sectors.map((sector, i) => (
                  <div key={i} className="flex items-center gap-4 text-navy/80 text-lg">
                    <div className="w-2 h-2 rounded-full bg-green" />
                    {sector}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-navy/5">
              <h3 className="font-syne font-bold text-2xl text-navy mb-8">{content.problems.title}</h3>
              <div className="space-y-8">
                {content.problems.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                    <p className="text-navy/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <SectionHeader tag="Metodología" title={content.methodology.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.methodology.steps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-syne font-bold text-navy/5 absolute -top-10 -left-6">0{i + 1}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                  <p className="text-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESULTS & COVERAGE */}
        <section className="bg-surface-dark py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader tag="Impacto" title="Resultados Estructurales Esperados" />
              <ul className="space-y-6">
                {content.results.items.map((result, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-lg text-navy/80 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy p-12 rounded-[40px] relative overflow-hidden">
              <MapPin className="absolute top-10 right-10 w-32 h-32 text-white/5" />
              <div className="relative z-10">
                <h3 className="text-white font-syne font-bold text-3xl mb-6">{content.coverage.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">{content.coverage.desc}</p>
                <div className="w-full h-px bg-white/20 mb-8" />
                <p className="text-green font-bold text-xl italic uppercase tracking-wider">No improvisamos crecimiento. Lo estructuramos.</p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqsRedisenoComercial} updatedAt={FAQ_UPDATED_AT} />

        <RelatedLinks path="/rediseno-sistema-comercial-ecuador" />

        <section id="contacto">
          <Contact />
        </section>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
