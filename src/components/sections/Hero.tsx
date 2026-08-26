"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineLines = t.hero.headline;

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
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="currentColor" />
        </svg>
      </motion.div>

      {/* 2. Video — right side, mask-blended seamlessly */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_132328_5f9029c8-218f-4489-82b6-29ff2849920e.png"
          className="absolute top-0 right-0 w-full h-full object-cover object-center"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 45%, black 60%)",
            maskImage: "linear-gradient(to right, transparent 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 45%, black 60%)"
          }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_133255_956f653f-5d80-4b06-abd5-0f46c98b60fa.mp4"
            type="video/mp4"
          />
        </video>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-36 z-10 bg-gradient-to-t from-[#0A1628] to-transparent" />
        {/* Top subtle fade */}
        <div className="absolute top-0 left-0 right-0 h-20 z-10 bg-gradient-to-b from-[#0D1B35]/40 to-transparent" />
      </div>

      {/* 3. Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pb-20 z-10">
        
        {/* Left: Text Content */}
        <div className="w-full max-w-[680px] relative z-20 text-center lg:text-left mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 font-syne font-bold text-green/90 tracking-[0.2em] uppercase text-sm"
          >
            {t.hero.tag}
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
                      {line.replace(t.hero.headlineHighlight, "").trim()}{" "}
                      <span className="bg-gradient-to-r from-white to-green bg-clip-text text-transparent">
                        {t.hero.headlineHighlight}
                      </span>
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
            className="text-lg md:text-xl text-white/80 font-sans leading-relaxed mb-12 max-w-[600px] mx-auto lg:mx-0"
          >
            {t.hero.description}
            <br /><br />
            <strong className="font-semibold text-green/90 italic">{t.hero.quote}</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contacto"
              className="bg-green text-navy px-9 py-4 rounded-full font-bold tracking-wide hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(125,194,66,0.3)] transition-all duration-300 text-center interactive"
            >
              {t.hero.ctaStart}
            </a>
            <a
              href="#practica"
              className="bg-transparent text-white border border-white/30 px-9 py-4 rounded-full font-medium hover:border-green hover:text-green transition-all duration-300 text-center interactive"
            >
              {t.hero.ctaServices}
            </a>
            <a
              href="/acceso-canal-corporativo-b2b-ecuador"
              className="bg-transparent text-green/90 border border-green/40 px-9 py-4 rounded-full font-medium hover:bg-green/10 hover:text-green transition-all duration-300 text-center interactive"
            >
              {t.hero.ctaChannel}
            </a>
          </motion.div>
        </div>

      </div>

      {/* 4. Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0A1628] z-[5] pointer-events-none" />

    </section>
  );
}
