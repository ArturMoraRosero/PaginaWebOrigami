"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Instagram, ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import InstagramEmbed from "@/components/ui/InstagramEmbed";

// ============================================================
// ✏️  ACTUALIZA ESTOS LINKS: Mantén máximo 2 posts (el más nuevo arriba)
// ============================================================
const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DWO3XVmEUFF/",
  "https://www.instagram.com/p/DVGpEYjkfEl/",
].slice(0, 2); 
// ============================================================

const linkedinPost = {
  tag: "Estrategia B2B",
  author: "Origami Consulting Group",
  role: "Firma Boutique de Consultoría Estratégica · Quito, Ecuador",
  text: "El crecimiento real no es suerte, es estructura. En mercados complejos como el de Ecuador, la diferencia entre una empresa que sobrevive y una que lidera es su capacidad de formar alianzas de alto valor.",
  stats: { likes: "128", comments: "34" },
  link: "https://www.linkedin.com/company/origami-consulting-group-sas/",
};

export default function SocialInsights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section
      id="insights-social"
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green font-syne font-bold uppercase tracking-widest text-sm mb-4 block">
              Social Feed
            </span>
            <h2 className="font-syne font-bold text-4xl md:text-6xl text-navy max-w-xl leading-tight">
              Insights & <span className="text-green italic">Conexiones</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-navy/60 font-sans max-w-sm text-lg"
          >
            Perspectivas semanales sobre estrategia, mercado y crecimiento desde nuestras redes sociales.
          </motion.p>
        </div>

        {/* Main Grid: LinkedIn card + Instagram embeds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — LinkedIn Card */}
          <motion.a
            href={linkedinPost.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col bg-white border border-navy/5 rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#0077b5]/10 rounded-2xl flex items-center justify-center">
                  <Linkedin className="w-7 h-7 text-[#0077b5]" />
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{linkedinPost.author}</p>
                  <p className="text-navy/40 text-xs mt-0.5">{linkedinPost.role}</p>
                </div>
              </div>
              <ArrowUpRight className="text-navy/20 group-hover:text-green transition-colors flex-shrink-0 mt-1" />
            </div>

            {/* Tag */}
            <span className="bg-green/10 text-green px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-6">
              {linkedinPost.tag}
            </span>

            {/* Quote */}
            <blockquote className="font-sans text-navy/80 text-lg leading-relaxed border-l-4 border-green/30 pl-6 italic flex-grow mb-8">
              &ldquo;{linkedinPost.text}&rdquo;
            </blockquote>

            {/* Stats footer */}
            <div className="pt-6 border-t border-navy/5 flex items-center gap-8 text-navy/40 text-sm">
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                {linkedinPost.stats.likes} reactions
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {linkedinPost.stats.comments} comments
              </span>
            </div>
          </motion.a>

          {/* RIGHT — Instagram Embeds */}
          <div className="flex flex-col gap-8">
            {INSTAGRAM_POSTS.map((url, i) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-[540px] mx-auto">
                  <div className="flex items-center gap-2 mb-4 ml-1">
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                    <span className="text-navy/40 text-xs font-bold uppercase tracking-widest">
                      @origamiconsultingroup
                    </span>
                  </div>
                  <InstagramEmbed url={url} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <p className="text-navy/30 font-syne font-bold uppercase tracking-[0.3em] text-[10px]">
            Síguenos en redes
          </p>
          <div className="flex gap-4 relative z-20">
            <a
              href="https://www.linkedin.com/company/origami-consulting-group-sas/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300 interactive scale-100 hover:scale-110"
              aria-label="LinkedIn de Origami Consulting"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/origamiconsultingroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:bg-[#E1306C] hover:text-white hover:border-transparent transition-all duration-300 interactive scale-100 hover:scale-110"
              aria-label="Instagram de Origami Consulting"
            >
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
