"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/ui/Navigation";
import dynamic from "next/dynamic";
import Footer from "@/components/sections/Footer";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
import { BarChart3, ShieldCheck, ArrowRight } from "lucide-react";

export default function ValuationPage() {
  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      {/* 3D Scene Background - Works as an ambient layer */}
      <Scene />
      
      {/* Navigation */}
      <Navigation />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section Alignment: Light Surface, Navy Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-syne font-bold text-4xl md:text-6xl text-navy mb-8 leading-tight">
                Valoración <span className="text-green">Estratégica</span> de Clientes
              </h1>
              <p className="font-sans text-xl text-text mb-10 leading-relaxed max-w-xl">
                Inicie el proceso técnico para determinar el valor real de su marca o empresa. 
                Nuestra metodología combina datos financieros con proyecciones estratégicas de mercado.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/valoracion/login"
                  className="bg-green text-navy px-8 py-4 rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_4px_14px_rgba(125,194,66,0.3)] transition-all flex items-center gap-2 interactive"
                >
                  Valoración Técnica <ArrowRight size={20} />
                </a>
                <a 
                  href="/valoracion/calculadora"
                  className="border border-navy/10 text-navy px-8 py-4 rounded-full font-bold tracking-wide hover:bg-navy/5 transition-all flex items-center gap-2 interactive"
                >
                  <BarChart3 size={20} className="text-green" /> ¿Cuánto vale mi empresa?
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="aspect-square rounded-3xl bg-white border border-navy/[0.05] shadow-[0_20px_50px_rgba(26,46,90,0.05)] p-4 flex items-center justify-center relative overflow-hidden group">
                {/* Generated Premium Visual */}
                <Image 
                  src="/brand-valuation-premium.png" 
                  alt="Valoración de Marca Estratégica" 
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Overlay and Floating Elements */}
                <div className="absolute inset-0 bg-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-navy/5 shadow-xl animate-bounce-slow pointer-events-none">
                  <BarChart3 className="text-green" />
                </div>
                <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-navy/5 shadow-xl animate-bounce-slow pointer-events-none" style={{ animationDelay: '1s' }}>
                  <ShieldCheck className="text-green" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Info / Placeholder for the App - Light Theme */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white border border-navy/[0.05] rounded-[40px] p-8 md:p-16 text-center shadow-[0_30px_60px_rgba(26,46,90,0.03)]"
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-navy mb-6">
              Módulo de Recolección de Datos
            </h2>
            <p className="font-sans text-lg text-text/60 mb-12 max-w-2xl mx-auto">
              Este espacio está reservado para la conexión con nuestra aplicación inteligente de valoración. 
              Próximamente, podrá cargar su información estructurada aquí para recibir un diagnóstico preliminar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Datos de Marca", desc: "Posicionamiento, reputación y capital intelectual." },
                { title: "Proyecciones", desc: "Escenarios de crecimiento y rentabilidad esperada." },
                { title: "Activos", desc: "Evaluación técnica de activos tangibles e intangibles." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-surface/50 rounded-2xl border border-navy/[0.03] group hover:border-green/30 transition-colors">
                  <h3 className="text-green font-bold mb-2">{item.title}</h3>
                  <p className="text-text/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
