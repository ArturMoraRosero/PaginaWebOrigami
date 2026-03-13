"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const { t } = useLanguage();

  const line1 = t.quote.line1.split(" ");
  const line2 = t.quote.line2.split(" ");

  return (
    <section 
      ref={sectionRef}
      className="py-32 md:py-48 bg-[radial-gradient(ellipse_at_top,#1E3D7A,#0D1B35)] relative overflow-hidden flex items-center justify-center"
    >
      {/* Decorative Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M14 11H19L17 19H12L14 11ZM6 11H11L9 19H4L6 11Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="font-syne text-[clamp(32px,5vw,72px)] leading-[1.15] text-white">
          
          <div className="font-light mb-2 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {line1.map((word, index) => (
              <motion.span
                key={`line1-${index}`}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <div className="font-bold flex flex-wrap justify-center gap-x-3 gap-y-2">
            {line2.map((word, index) => (
              <motion.span
                key={`line2-${index}`}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.6, delay: (line1.length * 0.06) + (index * 0.06) }}
                className="inline-block relative"
              >
                <span className="bg-gradient-to-r from-green to-white bg-clip-text text-transparent">
                  {word}
                </span>
              </motion.span>
            ))}
          </div>

        </h2>
      </div>
    </section>
  );
}
