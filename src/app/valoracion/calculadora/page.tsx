"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import Scene from "@/components/Scene";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Info,
  ChevronRight,
  RefreshCcw,
  Scale,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function CalculadoraPage() {
  const [ventas, setVentas] = useState<string>("");
  const [costos, setCostos] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<{
    utilidadBruta: number;
    valorBajo: number;
    valorMedio: number;
    valorAlto: number;
    ebitdaRef: number;
  } | null>(null);

  const calculateValuation = () => {
    const v = parseFloat(ventas.replace(/[^0-9.]/g, ""));
    const c = parseFloat(costos.replace(/[^0-9.]/g, ""));

    if (isNaN(v) || isNaN(c)) return;

    const utilidadBruta = v - c;
    const ebitdaRef = utilidadBruta - (v * 0.20);

    setResults({
      utilidadBruta,
      valorBajo: utilidadBruta * 1.5,
      valorMedio: utilidadBruta * 2.5,
      valorAlto: utilidadBruta * 3.5,
      ebitdaRef: Math.max(0, ebitdaRef)
    });
    setShowResult(true);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <Scene />
      <Navigation />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy text-sm font-bold mb-6"
            >
              <BarChart3 size={16} className="text-green" />
              ESTIMACIÓN ESTRATÉGICA
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-syne font-bold text-navy mb-6 leading-tight"
            >
              ¿Cuánto vale <span className="text-green">mi empresa?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text/60 max-w-2xl mx-auto font-sans"
            >
              Obtenga una referencia inmediata del valor de su empresa basada en el modelo de utilidad bruta de Origami Consulting.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Inputs Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-12"
            >
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(26,46,90,0.06)] border border-navy/[0.03]">
                {!showResult ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-sm font-bold text-navy/70 ml-1">
                        <TrendingUp size={18} className="text-green" />
                        Ventas Promedio (Últimos 5 años)
                      </label>
                      <div className="relative group">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/30 font-bold">$</span>
                        <input 
                          type="text"
                          value={ventas}
                          onChange={(e) => setVentas(e.target.value)}
                          placeholder="Ej: 500,000"
                          className="w-full bg-surface border border-navy/5 rounded-2xl py-6 pl-12 pr-6 outline-none focus:border-green/30 focus:ring-4 focus:ring-green/5 transition-all font-syne text-2xl font-bold text-navy"
                        />
                      </div>
                      <p className="text-xs text-text/40 ml-1 italic">Considere el promedio anual facturado desde 2019.</p>
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-sm font-bold text-navy/70 ml-1">
                        <DollarSign size={18} className="text-green" />
                        Costo de Producción / Servicio
                      </label>
                      <div className="relative group">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/30 font-bold">$</span>
                        <input 
                          type="text"
                          value={costos}
                          onChange={(e) => setCostos(e.target.value)}
                          placeholder="Ej: 200,000"
                          className="w-full bg-surface border border-navy/5 rounded-2xl py-6 pl-12 pr-6 outline-none focus:border-green/30 focus:ring-4 focus:ring-green/5 transition-all font-syne text-2xl font-bold text-navy"
                        />
                      </div>
                      <p className="text-xs text-text/40 ml-1 italic">Incluya insumos, mano de obra directa y logística.</p>
                    </div>

                    <div className="md:col-span-2 pt-6">
                      <button 
                        onClick={calculateValuation}
                        disabled={!ventas || !costos}
                        className="w-full bg-navy text-white py-6 rounded-2xl font-bold text-lg hover:bg-navy/90 transition-all flex items-center justify-center gap-3 group disabled:opacity-30"
                      >
                        Calcular Valor Origami <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-10"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-navy/5 pb-10">
                        <div>
                          <h2 className="text-3xl font-syne font-bold text-navy mb-2">Resultados de Estimación</h2>
                          <p className="text-text/60">Basado en sus indicadores financieros actuales.</p>
                        </div>
                        <button 
                          onClick={() => setShowResult(false)}
                          className="flex items-center gap-2 text-navy/40 hover:text-green transition-colors font-bold uppercase text-xs tracking-widest"
                        >
                          <RefreshCcw size={16} /> RECALCULAR
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Escenario Base */}
                        <div className="bg-surface rounded-3xl p-8 border border-navy/5 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                             <Scale size={40} />
                           </div>
                           <p className="text-xs font-bold text-navy/40 mb-2 tracking-widest uppercase">Escenario Conservador (1.5x)</p>
                           <h3 className="text-3xl font-syne font-bold text-navy">{formatCurrency(results!.valorBajo)}</h3>
                        </div>

                        {/* Escenario Medio */}
                        <div className="bg-green/5 rounded-3xl p-8 border border-green/20 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 text-green/20 group-hover:scale-110 transition-transform">
                             <TrendingUp size={40} />
                           </div>
                           <p className="text-xs font-bold text-green mb-2 tracking-widest uppercase">Valoración Media (2.5x)</p>
                           <h3 className="text-3xl font-syne font-bold text-navy">{formatCurrency(results!.valorMedio)}</h3>
                        </div>

                        {/* Escenario Alto */}
                        <div className="bg-navy text-white rounded-3xl p-8 shadow-xl shadow-navy/10 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                             <ArrowRight size={40} />
                           </div>
                           <p className="text-xs font-bold text-white/40 mb-2 tracking-widest uppercase">Potencial Máximo (3.5x)</p>
                           <h3 className="text-3xl font-syne font-bold text-green">{formatCurrency(results!.valorAlto)}</h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                        <div className="bg-surface p-8 rounded-[2rem] border border-navy/5">
                           <div className="flex items-start gap-4 mb-4">
                             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-navy shadow-sm">
                               <Calculator size={20} />
                             </div>
                             <div>
                               <p className="text-sm font-bold text-navy/70">Utilidad Bruta Calculada</p>
                               <h4 className="text-xl font-syne font-bold text-navy">{formatCurrency(results!.utilidadBruta)}</h4>
                             </div>
                           </div>
                           <p className="text-xs text-text/40 leading-relaxed font-sans">
                             Utilidad promedio anual resultante de la resta de costos directos sobre las ventas históricas de los últimos 5 años.
                           </p>
                        </div>

                        <div className="bg-surface p-8 rounded-[2rem] border border-navy/5">
                           <div className="flex items-start gap-4 mb-4">
                             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-navy shadow-sm">
                               <Info size={20} />
                             </div>
                             <div>
                               <p className="text-sm font-bold text-navy/70">Referencia EBITDA (Est.)</p>
                               <h4 className="text-xl font-syne font-bold text-navy">{formatCurrency(results!.ebitdaRef)}</h4>
                             </div>
                           </div>
                           <p className="text-xs text-text/40 leading-relaxed font-sans">
                             Estimación restando un 20% de gastos operativos proyectados sobre el volumen de ventas promedio ingresado.
                           </p>
                        </div>
                      </div>

                      <div className="bg-navy/5 p-8 rounded-[2rem] border border-navy/10 flex flex-col md:flex-row items-center justify-between gap-6">
                         <div className="max-w-md">
                           <h4 className="font-syne font-bold text-xl text-navy mb-2">¿Desea una valoración experta?</h4>
                           <p className="text-sm text-text/60">Esta estimación es solo referencial. Para una valoración certificada con fundamentos técnicos, utilice nuestra plataforma segura.</p>
                         </div>
                         <Link 
                           href="/valoracion/login"
                           className="bg-green text-navy px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
                         >
                           Iniciar Valoración Técnica <ChevronRight size={20} />
                         </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </motion.div>
          </div>

          {/* Methodology Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg text-green">1</div>
              <p className="text-sm font-bold text-navy">Histórico 5 Años</p>
              <p className="text-xs text-text/50">Analizamos el comportamiento de ventas para normalizar picos atípicos.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg text-green">2</div>
              <p className="text-sm font-bold text-navy">Fórmula Origami</p>
              <p className="text-xs text-text/50">Multiplicadores exclusivos ajustados a la realidad del mercado regional.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg text-green">3</div>
              <p className="text-sm font-bold text-navy">Proyección OPEX</p>
              <p className="text-xs text-text/50">Consideramos un 20% de carga operativa promedio para mayor precisión.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
