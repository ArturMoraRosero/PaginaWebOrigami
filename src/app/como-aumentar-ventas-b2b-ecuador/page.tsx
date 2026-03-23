"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, AlertCircle, CheckCircle2, TrendingUp, Users, Target, BarChart, Settings, MessageCircle, ChevronRight, ArrowRight } from "lucide-react";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Scene from "@/components/Scene";
import Contact from "@/components/sections/Contact";

// SEO Content for the B2B Sales Blog Page in Ecuador
const content = {
  title: "Cómo aumentar ventas B2B en Ecuador | Guía práctica",
  h1: "Cómo aumentar ventas B2B en Ecuador",
  intro: {
    tag: "Guía Estratégica",
    text: "Escalar las ventas B2B en Ecuador exige una combinación de estrategia local, procesos técnicos y una ejecución impecable. En un mercado altamente relacional pero cada vez más profesionalizado, el crecimiento real no proviene de la suerte, sino de la estructura.",
  },
  problems: {
    title: "Principales Obstáculos en el Mercado Local",
    items: [
      { title: "Falta de Leads Cualificados", desc: "No contar con un sistema recurrente de generación de prospectos de alto valor.", icon: Target },
      { title: "Baja Tasa de Cierre", desc: "Perder oportunidades en las etapas finales por falta de una metodología de seguimiento.", icon: BarChart },
      { title: "Dependencia de Referidos", desc: "Un modelo de crecimiento reactivo que no se puede controlar ni escalar.", icon: Users },
      { title: "Procesos Comerciales Débiles", desc: "Equipos que operan por intuición individual en lugar de seguir procesos técnicos.", icon: Settings }
    ]
  },
  strategies: {
    title: "Estrategias para Multiplicar sus Ventas B2B",
    items: [
      { 
        title: "Definir su Perfil de Cliente Ideal (ICP)", 
        desc: "No todos los prospectos merecen el mismo esfuerzo. Enfoque sus recursos en las cuentas con mayor potencial de rentabilidad y encaje estratégico." 
      },
      { 
        title: "Optimizar su Propuesta de Valor", 
        desc: "Articule con total claridad por qué su solución es la mejor opción frente a la competencia en el contexto ecuatoriano." 
      },
      { 
        title: "Estructurar su Proceso Comercial", 
        desc: "Mapee cada etapa del viaje del cliente, desde el primer contacto hasta el cierre de la cuenta y el acompañamiento posterior." 
      },
      { 
        title: "Implementación de Herramientas (CRM)", 
        desc: "Centralice la información comercial para tomar decisiones basadas en datos y asegurar que ningún lead quede en el olvido." 
      },
      { 
        title: "Seguimiento Comercial Estratégico", 
        desc: "La mayoría de las ventas B2B en Ecuador se cierran después del quinto contacto. La persistencia inteligente es su mayor activo." 
      }
    ]
  },
  errors: {
    title: "Errores Comunes que Frenan el Crecimiento",
    items: [
      "No medir los resultados de cada etapa del embudo comercial.",
      "Operar sin una estrategia clara de prospección directa.",
      "Postergar la inversión en transformación y profesionalización comercial."
    ]
  },
  conclusion: {
    text: "El aumento de ventas B2B en Ecuador es un proceso de evolución constante. La clave del éxito radica en pasar de un modelo de ventas reactivo y basado únicamente en relaciones, a uno proactivo, técnico y altamente escalable."
  }
};

const SectionHeader = ({ tag, title, centered = false }: { tag: string; title: string; centered?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <span className="text-green font-syne font-bold uppercase tracking-widest text-sm mb-4 block">
        {tag}
      </span>
      <h2 className="font-syne font-bold text-3xl md:text-5xl text-navy leading-tight">
        {title}
      </h2>
    </motion.div>
  );
};

export default function B2BSalesBlogPage() {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Cómo aumentar ventas B2B en Ecuador | Guía práctica",
            "description": "Descubra estrategias efectivas para escalar el rendimiento comercial de su empresa en el mercado B2B ecuatoriano.",
            "author": {
              "@type": "Organization",
              "name": "Origami Consulting Group"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Origami Consulting Group"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://oriconsultoria.com/como-aumentar-ventas-b2b-ecuador"
            }
          })
        }}
      />

      <Scene />
      <Navigation />

      <div className="relative z-10 pt-32">
        {/* ARTICLE HERO */}
        <section className="px-6 py-20 lg:py-32 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <span className="bg-green/10 text-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {content.intro.tag}
               </span>
               <span className="text-navy/40 text-sm font-medium italic">LECTURA DE 8 MINUTOS</span>
            </div>
            <h1 className="font-syne font-bold text-[clamp(36px,6vw,70px)] leading-[1.2] text-navy mb-10">
              {content.h1}
            </h1>
            <p className="text-xl md:text-2xl text-navy/70 font-sans leading-relaxed">
              {content.intro.text}
            </p>
          </motion.div>
        </section>

        {/* PROBLEMS SECTION */}
        <section className="bg-navy py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader tag="El Diagnóstico" title={content.problems.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.problems.items.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-green/50 transition-colors">
                  <item.icon className="w-8 h-8 text-green mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIES SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
          <SectionHeader tag="La Solución" title={content.strategies.title} text-center />
          <div className="space-y-8">
            {content.strategies.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl hover:bg-surface-dark transition-colors border border-transparent hover:border-navy/5"
              >
                <div className="text-4xl font-syne font-bold text-green/20 shrink-0">0{i+1}</div>
                <div>
                   <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                   <p className="text-lg text-navy/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ERRORS SECTION */}
        <section className="bg-surface-dark py-24 md:py-32 px-6">
           <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <SectionHeader tag="Alertas" title={content.errors.title} />
                 <div className="space-y-6">
                    {content.errors.items.map((error, i) => (
                       <div key={i} className="flex gap-4 items-start text-navy/70 text-lg">
                          <AlertCircle className="w-6 h-6 text-red-500/50 shrink-0 mt-1" />
                          {error}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 bg-navy p-12 rounded-[40px] text-center">
                 <BookOpen className="w-16 h-16 text-green mx-auto mb-8" />
                 <h3 className="text-white font-syne font-bold text-2xl mb-6">¿Desea transformar su departamento comercial?</h3>
                 <a href="#contacto" className="inline-flex items-center gap-3 bg-green text-navy px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Solicitar Diagnóstico
                    <ArrowRight className="w-5 h-5" />
                 </a>
              </div>
           </div>
        </section>

        {/* CONCLUSION */}
        <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
           <div className="text-center">
              <SectionHeader tag="Conclusión" title="El Camino hacia el Liderazgo Comercial" centered />
              <p className="text-2xl font-sans text-navy/80 leading-relaxed italic border-y border-navy/5 py-12">
                 &quot;{content.conclusion.text}&quot;
              </p>
              <div className="mt-20">
                 <p className="text-navy/50 font-bold tracking-widest uppercase mb-8">Nuestros Servicios de Consultoría</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="https://wa.me/593984180800" target="_blank" className="flex items-center justify-center gap-2 bg-green text-navy px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all">
                       <MessageCircle className="w-6 h-6" />
                       Hablar con un Experto
                    </a>
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
