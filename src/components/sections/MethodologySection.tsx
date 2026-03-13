"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function MethodologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { t } = useLanguage();

  // Line drawing animation connected to scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });
  
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = t.methodology.steps;

  return (
    <section 
      id="modelo" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-navy text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <motion.div 
          className="mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl mb-4 text-white">
            {t.methodology.title}
          </h2>
          <p className="font-sans text-xl text-green md:ml-2">{t.methodology.subtitle}</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-24 xl:mt-32">
          
          {/* Connecting Line Component */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-white/10 z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-green origin-left"
              style={{ scaleX: pathLength }}
            />
          </div>
          <div className="md:hidden absolute top-[5%] bottom-[5%] left-[28px] w-[2px] bg-white/10 z-0">
             <motion.div 
              className="absolute top-0 left-0 w-full bg-green origin-top"
              style={{ scaleY: pathLength }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.15), ease: "easeOut" }}
                className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-8 flex-1 group"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                
                {/* Node */}
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-syne font-bold text-xl border-[2px] transition-all duration-300 z-10 shrink-0
                    ${activeStep === index 
                      ? 'bg-green border-green text-navy shadow-[0_0_20px_rgba(125,194,66,0.5)] scale-110' 
                      : 'bg-navy border-white/20 text-white/50 group-hover:border-green group-hover:text-white'
                    }`}
                >
                  0{index + 1}
                </div>

                {/* Content Card */}
                <div className="md:text-center mt-2 md:mt-0 flex flex-col w-full">
                  <h3 className={`font-syne font-bold text-lg leading-tight transition-colors duration-300 mb-3
                    ${activeStep === index ? 'text-green' : 'text-white/90'}
                  `}>
                    {step.title}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${activeStep === index ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0 md:max-h-0 md:-translate-y-4'}
                  `}>
                    <p className="text-white/60 text-sm font-sans leading-relaxed pt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
