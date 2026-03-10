"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineLines = [
    "Consultoría estratégica",
    "para empresas que",
    "deciden evolucionar.",
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center bg-[radial-gradient(circle_at_center,#1E3D7A,#0D1B35)] overflow-hidden pt-36 md:pt-40"
    >
      {/* 1. Animated Geometric Background & Noise */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Abstract Polygons */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_120s_linear_infinite]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] border border-green/5 rounded-full animate-[spin_90s_linear_infinite_reverse]" />
        
        {/* SVG Polygon Shape */}
        <svg className="absolute top-[20%] right-[10%] w-[400px] h-[400px] text-white/[0.04] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* 2. Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-[680px]">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 font-syne font-bold text-green/90 tracking-[0.2em] uppercase text-sm"
          >
            Firma boutique de consultoría estratégica
          </motion.div>

          <h1 className="font-syne font-bold text-[clamp(24px,8.5vw,96px)] md:text-[clamp(44px,6vw,96px)] leading-[1.1] text-white mb-10 tracking-tight">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden pb-4 -mb-4">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {i === 2 ? (
                    <span>
                      deciden <span className="bg-gradient-to-r from-white to-green bg-clip-text text-transparent">evolucionar.</span>
                    </span>
                  ) : (
                    line
                  )}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 font-sans leading-relaxed mb-12 max-w-[600px]"
          >
            Acompañamos a CEOs y alta dirección en procesos de expansión, posicionamiento y alianzas estratégicas de alto valor.
            <br/><br/>
            <strong className="font-semibold text-green/90 italic">No improvisamos crecimiento. Lo estructuramos.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="bg-green text-navy px-9 py-4 rounded-full font-bold tracking-wide hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(125,194,66,0.3)] transition-all duration-300 text-center interactive"
            >
              Iniciar conversación
            </a>
            <a
              href="#practica"
              className="bg-transparent text-white border border-white/30 px-9 py-4 rounded-full font-medium hover:border-green hover:text-green transition-all duration-300 text-center interactive"
            >
              Ver servicios
            </a>
          </motion.div>

        </div>
      </div>

      {/* 3. Bottom Gradient Fade & Scroll Indicator */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0A1628] z-[5] pointer-events-none" />
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase font-syne">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-green to-transparent"
        />
      </motion.div>

    </section>
  );
}
