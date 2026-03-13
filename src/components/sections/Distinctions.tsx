"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Distinctions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  const items = t.distinctions.items;

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0A1628] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Panel - Headline */}
          <div className="w-full lg:w-1/2 flex items-center">
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              {t.distinctions.titleLine1}<br/>
              <span className="text-green relative inline-block mt-2">
                {t.distinctions.titleLine2}
                <motion.span 
                  className="absolute bottom-1 left-0 w-full h-2 bg-green/20 -z-10"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                />
              </span>
            </motion.h2>
          </div>

          {/* Right Panel - Animated List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
                className="group flex items-center gap-6 py-6 border-b border-white/10 relative hover:bg-white/[0.03] transition-colors duration-300 interactive px-4 -mx-4 rounded-xl cursor-default"
              >
                {/* Custom Checkmark Icon */}
                <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center shrink-0 group-hover:bg-green group-hover:scale-110 transition-all duration-300">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green group-hover:text-white transition-colors duration-300 transform group-hover:rotate-[-5deg]">
                    <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <span className="font-sans text-xl md:text-2xl text-white/80 font-medium tracking-tight group-hover:text-green transition-colors duration-300">
                  {item}
                </span>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
