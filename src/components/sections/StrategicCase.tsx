"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CASES_DATA = [
  {
    id: "01",
    category: "Valoración Estratégica de Marca",
    title: "KIYÚ",
    description: "Redefinición del posicionamiento corporativo y estructuración de la propuesta de valor para maximizar el equity brand en el mercado regional."
  },
  {
    id: "02",
    category: "EXPANSIÓN COMERCIAL & ACTIVACIÓN",
    title: "UMCO",
    description: "Estructuración de alianzas comerciales con los principales métodos de pago del Ecuador y diseño de campañas de activación en puntos de venta para incrementar volumen de ventas y visibilidad de marca."
  },
  {
    id: "03",
    category: "EXPANSIÓN B2B & DESARROLLO COMERCIAL",
    title: "HEDGEHOG BRAND",
    description: "Identificación y desarrollo de nuevos canales de venta B2B y estructuración de alianzas comerciales estratégicas para expandir el alcance de la marca hacia mercados y socios de alto valor."
  }
];

export default function StrategicCase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="casos" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green font-syne font-bold uppercase tracking-widest text-sm mb-4 block">
            Casos Estratégicos
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-5xl text-navy max-w-3xl leading-tight">
            Experiencias reales donde la estrategia se convierte en valor.
          </h2>
        </motion.div>

        {/* Featured Case Cards */}
        <div className="flex flex-col gap-12">
          {CASES_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2), ease: [0.16, 1, 0.3, 1] }}
              className="group w-full rounded-[24px] overflow-hidden bg-[radial-gradient(circle_at_top_right,#1E3D7A,#0D1B35)] border border-navy/10 flex flex-col md:flex-row relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-green/50 interactive cursor-default"
            >
              {/* Left Panel - Text */}
              <div className="w-full md:w-[60%] p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
                {/* Ghost Number */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-5 pointer-events-none">
                  <span className="font-syne font-bold text-[180px] leading-none text-white">{item.id}</span>
                </div>

                <div className="relative z-10">
                  <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                    {item.category}
                  </span>
                  
                  <h3 className="font-syne font-bold text-4xl lg:text-5xl text-white mb-6">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
                    {item.description}
                  </p>
                  
                  <a href="#contacto" className="inline-flex items-center gap-2 font-syne font-bold text-green tracking-wide group/link">
                    Ver caso completo
                    <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                    {/* Underline animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-green transition-all duration-300 group-hover/link:w-full" />
                  </a>
                </div>
              </div>

              {/* Right Panel - Visual */}
              <div className="w-full md:w-[40%] min-h-[300px] md:min-h-full relative overflow-hidden bg-navy/20 flex items-center justify-center p-8">
                {/* Soft glow behind SVG */}
                <div className="absolute w-[200px] h-[200px] bg-green opacity-20 blur-[80px] rounded-full mix-blend-screen" />
                
                {/* Animated SVG Graphic */}
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full max-w-[300px] text-white opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
                >
                  {/* Origami/Geometric Abstract Folded Shape */}
                  {index % 3 === 0 ? (
                    // Graphic for KIYU
                    <>
                      <polygon points="100,20 180,80 140,180 60,180 20,80" fill="transparent" stroke="currentColor" strokeWidth="1" className="opacity-30 animate-[spin_40s_linear_infinite]" />
                      <polygon points="100,20 180,80 140,180 60,180 20,80" fill="transparent" stroke="#7DC242" strokeWidth="1" className="opacity-40 animate-[spin_40s_linear_infinite_reverse]" />
                      <g className="transition-all duration-700 ease-in-out origin-center">
                        <polygon points="100,40 160,85 130,160 70,160 40,85" fill="currentColor" className="opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                        <polygon points="100,40 160,85 100,105" fill="currentColor" className="opacity-40" />
                        <polygon points="100,40 40,85 100,105" fill="#7DC242" className="opacity-60" />
                        <polygon points="40,85 70,160 100,105" fill="currentColor" className="opacity-30" />
                        <polygon points="160,85 130,160 100,105" fill="#5A9E2F" className="opacity-50" />
                        <polygon points="70,160 130,160 100,105" fill="currentColor" className="opacity-20" />
                      </g>
                    </>
                  ) : index % 3 === 1 ? (
                    // Graphic for UMCO
                    <>
                      <circle cx="100" cy="100" r="80" fill="transparent" stroke="currentColor" strokeWidth="1" className="opacity-30 animate-[spin_30s_linear_infinite]" />
                      <polygon points="100,10 190,100 100,190 10,100" fill="transparent" stroke="#7DC242" strokeWidth="1" className="opacity-40 animate-[spin_50s_linear_infinite_reverse]" />
                      <g className="transition-all duration-700 ease-in-out origin-center">
                        <polygon points="100,30 170,100 100,170 30,100" fill="currentColor" className="opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                        <polygon points="100,30 170,100 100,100" fill="currentColor" className="opacity-40" />
                        <polygon points="170,100 100,170 100,100" fill="#7DC242" className="opacity-60" />
                        <polygon points="100,170 30,100 100,100" fill="#5A9E2F" className="opacity-40" />
                        <polygon points="30,100 100,30 100,100" fill="currentColor" className="opacity-30" />
                      </g>
                    </>
                  ) : (
                    // Graphic for HEDGEHOG
                    <>
                      <polygon points="100,5 195,50 195,150 100,195 5,150 5,50" fill="transparent" stroke="currentColor" strokeWidth="1" className="opacity-30 animate-[spin_60s_linear_infinite]" />
                      <g className="transition-all duration-700 ease-in-out origin-center">
                        <polygon points="100,20 180,65 180,135 100,180 20,135 20,65" fill="currentColor" className="opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                        <polygon points="100,20 180,65 100,100" fill="currentColor" className="opacity-40" />
                        <polygon points="180,65 180,135 100,100" fill="#7DC242" className="opacity-60" />
                        <polygon points="180,135 100,180 100,100" fill="#5A9E2F" className="opacity-50" />
                        <polygon points="100,180 20,135 100,100" fill="currentColor" className="opacity-20" />
                        <polygon points="20,135 20,65 100,100" fill="#7DC242" className="opacity-30" />
                        <polygon points="20,65 100,20 100,100" fill="currentColor" className="opacity-30" />
                      </g>
                    </>
                  )}
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
