"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function BrandValuationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            className="lg:col-span-7 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-syne font-bold text-3xl md:text-5xl text-navy mb-6 leading-tight">
              ¿Cuánto vale realmente su marca?
            </h2>
            
            <p className="font-sans text-lg md:text-xl text-text leading-relaxed mb-8">
              Determinamos el valor estratégico de su empresa con metodología ejecutiva para que pueda vender, fusionarse o atraer inversores desde una posición de fortaleza y con respaldo técnico.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Valoración para venta de empresa",
                "Presentación ante inversionistas",
                "Estructuración de alianzas y fusiones"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green shrink-0 mt-0.5" />
                  <span className="font-sans font-medium text-navy/80">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex bg-green text-navy px-8 py-4 rounded-full font-bold tracking-wide hover:scale-[1.02] hover:shadow-[0_4px_14px_rgba(125,194,66,0.3)] transition-all duration-300 interactive"
            >
              Iniciar valoración →
            </a>
          </motion.div>

          {/* Abstract Visual / Decorative */}
          <motion.div 
            className="lg:col-span-5 relative hidden md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-full aspect-square max-w-[400px] mx-auto relative flex items-center justify-center">
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-green/5 rounded-full blur-3xl mix-blend-multiply" />
              
              {/* Hexagon/Diamond Geometric arrangement for Valuation concept */}
              <div className="relative w-full h-full flex items-center justify-center text-navy/5">
                <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_40s_linear_infinite]">
                  <polygon points="100,10 180,50 180,150 100,190 20,150 20,50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                  <polygon points="100,50 140,80 140,120 100,150 60,120 60,80" fill="none" stroke="#7DC242" strokeWidth="1" className="opacity-60" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-green opacity-20">
                  <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 animate-[spin_20s_linear_infinite_reverse]">
                    <rect x="25" y="25" width="50" height="50" fill="currentColor" transform="rotate(45 50 50)" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
