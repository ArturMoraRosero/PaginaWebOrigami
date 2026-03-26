"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Users, ShieldCheck, MapPin, MessageCircle, TrendingUp, Zap } from "lucide-react";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Scene from "@/components/Scene";
import Contact from "@/components/sections/Contact";

// SEO Content for the B2B Consulting Page in Quito
const content = {
  title: "Consultoría Comercial B2B en Quito | Origami Consulting",
  h1: "Consultoría Comercial B2B en Quito",
  intro: {
    tag: "Estrategia & Crecimiento",
    text: "En el dinámico ecosistema empresarial de Quito, una estrategia comercial B2B sólida no es solo una ventaja competitiva: es la estructura fundamental para el liderazgo sostenido. Acompañamos a organizaciones que deciden dejar de improvisar su crecimiento para empezar a construirlo.",
  },
  services: [
    {
      title: "Arquitectura de Prospección B2B",
      desc: "Diseñamos sistemas de identificación de clientes potenciales de alto valor, optimizando el alcance en mercados industriales y de servicios.",
      icon: Network
    },
    {
      title: "Optimización del Ciclo de Venta",
      desc: "Reducimos la fricción en cierres complejos, estructurando etapas claras que aceleran la conversión y el retorno de inversión.",
      icon: Zap
    },
    {
      title: "Estructuración de Equipos Comerciales",
      desc: "Alineamos el talento humano con procesos técnicos, transformando equipos de ventas en consultores estratégicos de alto nivel.",
      icon: Users
    }
  ],
  target: {
    title: "Empresas en Quito que Deciden Evolucionar",
    sectors: ["Empresas de Tecnología y Software", "Industrias y Manufactureras", "Firmas de Servicios Profesionales", "Corporaciones en Expansión Regional"]
  },
  problems: {
    title: "Desafíos que Resolvemos",
    items: [
      { title: "Ciclos de venta extensos", desc: "Acortamos el tiempo de cierre mediante procesos de decisión estructurados." },
      { title: "Inconsistencia en Leads", desc: "Generamos una tubería de ventas predecible y de mayor calidad." },
      { title: "Falta de Diferenciación", desc: "Elevamos la propuesta de valor para competir por margen y no por precio." }
    ]
  },
  methodology: {
    title: "Nuestro Enfoque Boutique",
    steps: [
      { title: "Diagnóstico Profundo", desc: "Entendemos la realidad comercial de su empresa en el contexto de Quito." },
      { title: "Diseño Estratégico", desc: "Creamos un roadmap a medida, alejado de fórmulas genéricas." },
      { title: "Ejecución y Acompañamiento", desc: "No solo entregamos un plan; supervisamos su implementación exitosa." }
    ]
  },
  results: {
    title: "Resultados de Impacto Directo",
    items: ["Incremento en la tasa de cierre de propuestas", "Aumento del ticket promedio de venta B2B", "Escalabilidad comercial proyectable y sostenible"]
  },
  coverage: {
    title: "Presencia Local en Quito y Cobertura Nacional",
    desc: "Nuestra base estratégica se encuentra en la capital, permitiéndonos una conexión directa con el centro de negocios del país, mientras acompañamos procesos de expansión en todo el territorio ecuatoriano."
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

export default function B2BQuitoPage() {
  
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Consultoría Comercial B2B en Quito",
            "provider": {
              "@type": "Organization",
              "name": "Origami Consulting Group"
            },
            "areaServed": "Quito, Ecuador",
            "description": "Servicios especializados de consultoría comercial B2B para empresas que buscan escalar su facturación y alianzas estratégicas en Quito."
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

        {/* SERVICES SECTION */}
        <section className="bg-navy py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader tag="Nuestra Solución" title="Servicios de Consultoría Comercial B2B" dark />
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

        {/* TARGET & PROBLEMS */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
            <div className="bg-surface-dark p-10 rounded-3xl border border-navy/5">
              <h3 className="font-syne font-bold text-2xl text-navy mb-8">{content.problems.title}</h3>
              <div className="space-y-8">
                {content.problems.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                       <ShieldCheck className="w-5 h-5 text-green" />
                       {item.title}
                    </h4>
                    <p className="text-navy/60 pl-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="bg-surface-dark py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader tag="Metodología" title={content.methodology.title} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {content.methodology.steps.map((step, i) => (
                <div key={i} className="relative">
                  <span className="text-6xl font-syne font-bold text-navy/5 absolute -top-10 -left-6">0{i+1}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                    <p className="text-navy/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS & COVERAGE */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader tag="Impacto" title="Resultados Estratégicos Esperados" />
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
                  <p className="text-green font-bold text-xl italic uppercase tracking-wider">Compromiso con el crecimiento regional.</p>
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
