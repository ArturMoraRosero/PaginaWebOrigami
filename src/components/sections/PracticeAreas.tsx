"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Gem, TrendingUp, Zap, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PracticeAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const { t } = useLanguage();

  const servicesIcons = [Network, Gem, TrendingUp, Zap];

  const services = t.practice.services.map((service, index) => ({
    id: `0${index + 1}`,
    ...service,
    icon: servicesIcons[index],
  }));

  return (
    <section 
      id="practica" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-green font-syne font-bold uppercase tracking-widest text-sm mb-4 block">
            {t.practice.tag}
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl text-navy max-w-3xl leading-tight">
            {t.practice.title[0]}
            <br />
            {t.practice.title[1]}
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-navy/10 rounded-[16px] p-8 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 interactive cursor-default"
            >
              {/* Animated Left Accent Bar Reveal (Clip Path) */}
              <div className="absolute top-0 left-0 h-full w-1 border-l-[3px] border-green transition-all" />
              <div 
                className="absolute inset-x-0 w-[5px] top-0 bottom-0 bg-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 rounded-l-[16px]" 
              />

              {/* Ghost Number Container */}
              <div className="absolute top-0 right-0 p-8 origin-top-right transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                <span className="text-[120px] font-syne font-bold text-navy/[0.03] leading-none pointer-events-none">
                  {service.id}
                </span>
              </div>

              {/* Card Content container z-index to stay above background fills */}
              <div className="relative z-10 flex flex-col h-full">
                
                <div className="w-12 h-12 rounded-full border border-green/20 bg-green/5 flex items-center justify-center mb-12 group-hover:bg-green/10 transition-colors">
                  <service.icon className="w-6 h-6 text-green" strokeWidth={1.5} aria-label={`${service.title} - Consultoría en Quito`} />
                </div>
                
                <div className="mt-auto">
                  <span className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-3 block group-hover:text-green/80 transition-colors">
                    {service.tag}
                  </span>
                  
                  <h3 className="text-2xl font-syne font-bold text-navy mb-4 pr-8 group-hover:text-green-dk transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text font-sans leading-relaxed">
                    {service.body}
                  </p>
                  {service.id === "02" && (
                    <p className="mt-3 text-[13px] text-green font-medium">
                      {t.practice.valuationNote}
                    </p>
                  )}
                </div>

              </div>

            </motion.div>
          ))}

          {/* Featured clickable card → Corporate Channel landing */}
          <motion.a
            href="/acceso-canal-corporativo-b2b-ecuador"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: services.length * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative md:col-span-2 block bg-gradient-to-br from-navy to-[#0A1628] rounded-[16px] p-8 md:p-10 overflow-hidden shadow-lg ring-2 ring-green/40 hover:ring-green transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(125,194,66,0.25)] interactive"
          >
            {/* Decorative glow + polygon */}
            <div className="absolute -top-20 -right-16 w-64 h-64 bg-green/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-10 w-72 h-72 border border-green/10 rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border border-green/40 bg-green/15 flex items-center justify-center group-hover:bg-green/25 transition-colors">
                  <Building2 className="w-6 h-6 text-green" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-bold text-green uppercase tracking-widest mb-2 block">
                    {t.practice.channelCard.tag}
                  </span>
                  <h3 className="text-2xl font-syne font-bold text-white mb-2 transition-colors">
                    {t.practice.channelCard.title}
                  </h3>
                  <p className="text-white/70 font-sans leading-relaxed max-w-2xl">
                    {t.practice.channelCard.body}
                  </p>
                </div>
              </div>
              <span className="shrink-0 inline-flex items-center gap-2 bg-green text-navy px-7 py-3.5 rounded-full font-bold tracking-wide whitespace-nowrap group-hover:scale-[1.04] group-hover:shadow-[0_0_20px_rgba(125,194,66,0.4)] transition-all">
                {t.practice.channelCard.cta}
              </span>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
