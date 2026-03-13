"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InsightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  // Simulate loading internal data for skeleton effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const articles = t.insights.items.map((item, index) => ({
    id: index + 1,
    ...item
  }));

  return (
    <section 
      id="insights" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative"
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
            {t.insights.tag}
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-navy max-w-3xl leading-tight">
            {t.insights.title}
          </h2>
        </motion.div>

        {/* 3-Col Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loading ? (
            // Skeleton Loaders
            Array.from({ length: 3 }).map((_, i) => (
              <div key={`skel-${i}`} className="bg-surface rounded-2xl p-8 h-64 animate-pulse border border-navy/5">
                <div className="w-24 h-6 bg-navy/10 rounded-full mb-6" />
                <div className="w-full h-6 bg-navy/10 rounded mb-3" />
                <div className="w-[80%] h-6 bg-navy/10 rounded" />
                <div className="w-8 h-8 bg-navy/10 rounded-full mt-auto absolute bottom-8 right-8" />
              </div>
            ))
          ) : (
            // Real Cards
            articles.map((article, index) => (
              <motion.a
                key={article.id}
                href="#"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="group flex flex-col h-full bg-white border border-navy/10 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 interactive relative"
              >
                <div className="mb-6">
                  <span className="inline-block bg-green/10 text-green-dk font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {article.tag}
                  </span>
                </div>
                
                <h3 className="font-syne font-bold text-xl text-navy leading-snug mb-12 group-hover:text-green-dk transition-colors">
                  {article.title}
                </h3>
                
                <div className="mt-auto self-end w-10 h-10 rounded-full bg-surface group-hover:bg-green flex items-center justify-center transition-colors">
                  <ArrowRight size={18} className="text-navy group-hover:text-white transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            ))
          )}
        </div>
        
     </div>
    </section>
  );
}
