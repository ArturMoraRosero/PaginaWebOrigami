"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function CaseGraphic({ variant }: { variant: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full text-white transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
    >
      {variant === 0 ? (
        <>
          <polygon points="100,20 180,80 140,180 60,180 20,80" fill="transparent" stroke="currentColor" strokeWidth="1" className="opacity-30 animate-[spin_40s_linear_infinite]" />
          <polygon points="100,20 180,80 140,180 60,180 20,80" fill="transparent" stroke="#7DC242" strokeWidth="1" className="opacity-40 animate-[spin_40s_linear_infinite_reverse]" />
          <g>
            <polygon points="100,40 160,85 130,160 70,160 40,85" fill="currentColor" className="opacity-10" />
            <polygon points="100,40 160,85 100,105" fill="currentColor" className="opacity-40" />
            <polygon points="100,40 40,85 100,105" fill="#7DC242" className="opacity-60" />
            <polygon points="40,85 70,160 100,105" fill="currentColor" className="opacity-30" />
            <polygon points="160,85 130,160 100,105" fill="#5A9E2F" className="opacity-50" />
            <polygon points="70,160 130,160 100,105" fill="currentColor" className="opacity-20" />
          </g>
        </>
      ) : variant === 1 ? (
        <>
          <circle cx="100" cy="100" r="80" fill="transparent" stroke="currentColor" strokeWidth="1" className="opacity-30 animate-[spin_30s_linear_infinite]" />
          <polygon points="100,10 190,100 100,190 10,100" fill="transparent" stroke="#7DC242" strokeWidth="1" className="opacity-40 animate-[spin_50s_linear_infinite_reverse]" />
          <g>
            <polygon points="100,30 170,100 100,170 30,100" fill="currentColor" className="opacity-20" />
            <polygon points="100,30 170,100 100,100" fill="currentColor" className="opacity-40" />
            <polygon points="170,100 100,170 100,100" fill="#7DC242" className="opacity-60" />
            <polygon points="100,170 30,100 100,100" fill="#5A9E2F" className="opacity-40" />
            <polygon points="30,100 100,30 100,100" fill="currentColor" className="opacity-30" />
          </g>
        </>
      ) : (
        <>
          <polygon points="100,5 195,50 195,150 100,195 5,150 5,50" fill="transparent" stroke="currentColor" strokeWidth="1" className="opacity-30 animate-[spin_60s_linear_infinite]" />
          <g>
            <polygon points="100,20 180,65 180,135 100,180 20,135 20,65" fill="currentColor" className="opacity-10" />
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
  );
}

export default function StrategicCase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { t } = useLanguage();

  const CASES_DATA = t.cases.items.map((item, index) => ({
    id: `0${index + 1}`,
    ...item
  }));

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
            {t.cases.tag}
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-5xl text-navy max-w-3xl leading-tight">
            {t.cases.title}
          </h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CASES_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.15 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[24px] overflow-hidden bg-[radial-gradient(circle_at_top_right,#1E3D7A,#0D1B35)] border border-navy/10 p-10 md:p-12 flex flex-col min-h-[360px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-green/50 interactive cursor-default"
            >
              {/* Ghost Number */}
              <div className="absolute top-6 left-8 opacity-5 pointer-events-none">
                <span className="font-syne font-bold text-[120px] leading-none text-white">{item.id}</span>
              </div>

              {/* Background Graphic */}
              <div className="absolute -bottom-12 -right-12 w-[220px] h-[220px] opacity-[0.18] group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                <CaseGraphic variant={index % 3} />
              </div>

              {/* Soft glow */}
              <div className="absolute bottom-0 right-0 w-[160px] h-[160px] bg-green opacity-10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <span className="self-start inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                  {item.category}
                </span>

                <h3 className="font-syne font-bold text-3xl lg:text-4xl text-white mb-4">
                  {item.title}
                </h3>

                <p className="font-sans text-white/70 text-base leading-relaxed mb-8 max-w-md flex-grow">
                  {item.description}
                </p>

                <a href="#contacto" className="relative inline-flex items-center gap-2 font-syne font-bold text-green tracking-wide group/link self-start mt-auto">
                  {t.cases.viewCase}
                  <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-green transition-all duration-300 group-hover/link:w-full" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
