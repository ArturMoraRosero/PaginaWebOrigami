"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import { posts, formatDate } from "@/content/posts";

const Footer = dynamic(() => import("@/components/sections/Footer"));
const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp"));

export default function InsightsHub() {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white">
      <Navigation />

      <div className="relative z-10 pt-36 md:pt-44 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 max-w-2xl"
          >
            <span className="text-green font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Insights
            </span>
            <h1 className="font-syne font-bold text-navy text-[clamp(34px,6vw,64px)] leading-[1.1] mb-6">
              Perspectivas para liderar.
            </h1>
            <p className="text-xl text-navy/60 font-sans leading-relaxed">
              Estrategia comercial, canal corporativo, alianzas y crecimiento B2B. Ideas accionables, sin relleno.
            </p>
          </motion.div>

          {/* Post list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.a
                key={post.slug}
                href={`/insights/${post.slug}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col bg-white border border-navy/10 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-green transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 text-xs mb-5">
                  <span className="text-green font-syne font-bold uppercase tracking-widest">
                    {post.tag}
                  </span>
                  <span className="text-navy/30">•</span>
                  <span className="text-navy/40">{formatDate(post.date)}</span>
                </div>
                <h2 className="font-syne font-bold text-navy text-xl md:text-2xl leading-snug mb-4 pr-6 group-hover:text-green-dk transition-colors">
                  {post.title}
                </h2>
                <p className="text-navy/55 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-green font-bold text-sm">
                  Leer artículo
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
