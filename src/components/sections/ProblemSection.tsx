"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";


export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { t } = useLanguage();

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col justify-center relative z-10 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 pointer-events-auto">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-agrandir text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue leading-tight mb-8">
            {t.problem.title}
          </h2>
          <div className="w-20 h-2 bg-accent-green rounded-full mb-8" />
        </motion.div>

        <div className="flex flex-col justify-center space-y-6">
          {t.problem.items.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, ease: "easeOut" }}
              className="bg-white/60 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl p-8 flex items-center space-x-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-bg flex items-center justify-center text-primary-blue font-bold text-xl border border-primary-blue/10">
                0{idx + 1}
              </div>
              <p className="font-sans text-xl text-text-gray font-medium">
                {problem}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
