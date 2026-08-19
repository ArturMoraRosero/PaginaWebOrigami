"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import { type Post, formatDate } from "@/content/posts";

const Footer = dynamic(() => import("@/components/sections/Footer"));
const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp"));

export default function ArticleView({ post }: { post: Post }) {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white">
      <Navigation />

      <article className="relative z-10 pt-36 md:pt-44 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-navy/50 hover:text-green transition-colors text-sm font-medium mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a Insights
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 text-sm mb-6">
              <span className="text-green font-syne font-bold uppercase tracking-[0.18em]">
                {post.tag}
              </span>
              <span className="text-navy/30">•</span>
              <span className="text-navy/50">{formatDate(post.date)}</span>
              <span className="text-navy/30">•</span>
              <span className="text-navy/50">{post.readingMinutes} min de lectura</span>
            </div>
            <h1 className="font-syne font-bold text-navy text-[clamp(30px,5vw,52px)] leading-[1.12] mb-8">
              {post.title}
            </h1>
          </motion.div>

          {/* Body */}
          <div className="mt-4">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="font-syne font-bold text-navy text-2xl md:text-3xl leading-tight mt-14 mb-5"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "p") {
                return (
                  <p key={i} className="text-navy/75 font-sans text-lg leading-relaxed mb-5">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-green pl-6 my-10 text-2xl font-syne font-bold text-navy leading-snug"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              // ul
              return (
                <ul key={i} className="my-6 space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-navy/75 text-lg leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>

          {/* Related CTA */}
          <div className="mt-16 rounded-[24px] bg-gradient-to-br from-navy to-[#0A1628] p-8 md:p-10 overflow-hidden relative">
            <div className="absolute -top-16 -right-12 w-56 h-56 bg-green/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-green font-syne font-bold uppercase tracking-widest text-xs mb-2">
                  {post.tag}
                </p>
                <p className="text-white text-xl font-syne font-bold max-w-md leading-snug">
                  {post.related.label}
                </p>
              </div>
              <Link
                href={post.related.href}
                className="shrink-0 inline-flex items-center gap-2 bg-green text-navy px-7 py-3.5 rounded-full font-bold tracking-wide hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(125,194,66,0.35)] transition-all"
              >
                Ver servicio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Enlaces secundarios a otros servicios (reparto de autoridad interna) */}
          {post.alsoSee && post.alsoSee.length > 0 && (
            <div className="mt-10">
              <p className="font-syne font-bold uppercase tracking-[0.15em] text-xs text-navy/40 mb-4">
                También puede interesarle
              </p>
              <ul className="divide-y divide-navy/10 border-t border-b border-navy/10">
                {post.alsoSee.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between gap-6 py-4"
                    >
                      <span className="font-syne font-bold text-base text-navy transition-colors group-hover:text-green">
                        {link.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-green shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact nudge */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contacto"
              className="bg-navy text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-navy/90 transition-all text-center"
            >
              Iniciar una conversación
            </Link>
            <a
              href="https://wa.me/593984180800"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-white border border-navy/10 text-navy px-8 py-4 rounded-full font-medium hover:border-green transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
