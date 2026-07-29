"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CorporateChannelSection() {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();
  const c = t.corporateChannel;

  return (
    <section className="py-24 md:py-32 px-6 bg-surface relative">
      <div className="max-w-7xl mx-auto">
        <motion.a
          ref={ref}
          href="/acceso-canal-corporativo-b2b-ecuador"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group block relative overflow-hidden rounded-[28px] bg-navy border border-white/10 p-10 md:p-16"
        >
          {/* Decorative polygon */}
          <div className="absolute -top-16 -right-16 w-72 h-72 border border-green/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-10 w-80 h-80 border border-white/5 rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full border border-green/20 bg-green/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-green" strokeWidth={1.5} />
                </div>
                <span className="text-green font-syne font-bold uppercase tracking-[0.2em] text-sm">
                  {c.tag}
                </span>
              </div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
                {c.title}
              </h2>
              <p className="text-lg text-white/70 font-sans leading-relaxed max-w-xl">
                {c.text}
              </p>
            </div>

            <div className="lg:pl-8">
              <ul className="space-y-4 mb-10">
                {c.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85">
                    <Check className="w-5 h-5 text-green mt-0.5 shrink-0" />
                    <span className="text-base md:text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 bg-green text-navy px-8 py-4 rounded-full font-bold tracking-wide group-hover:scale-[1.03] group-hover:shadow-[0_0_20px_rgba(125,194,66,0.3)] transition-all duration-300">
                {c.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
