"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import Scene from "@/components/Scene";
import { Lock, User, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple mock authentication for high-fidelity demo
    setTimeout(() => {
      if (username === "admin" && password === "origami2026") {
        localStorage.setItem("origami_auth", "true");
        router.push("/valoracion/formulario");
      } else {
        setError("Credenciales no válidas. Intente con admin / origami2026");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <Scene />
      <Navigation />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_40px_100px_rgba(26,46,90,0.08)] border border-navy/[0.03] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green to-green-dk" />
            
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-green">
                <ShieldCheck size={32} />
              </div>
            </div>

            <div className="text-center mb-10">
              <h1 className="font-syne font-bold text-3xl text-navy mb-3">Acceso Seguro</h1>
              <p className="font-sans text-text/60">Ingrese sus credenciales para continuar con la valoración técnica.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy/70 ml-1">Usuario</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30 group-focus-within:text-green transition-colors" size={20} />
                  <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-surface border border-navy/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-green/30 focus:ring-4 focus:ring-green/5 transition-all font-sans"
                    placeholder="Ingrese su usuario"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy/70 ml-1">Contraseña</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30 group-focus-within:text-green transition-colors" size={20} />
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface border border-navy/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-green/30 focus:ring-4 focus:ring-green/5 transition-all font-sans"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-red-500 text-sm text-center font-medium"
                >
                  {error}
                </motion.p>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-navy text-white py-4 rounded-2xl font-bold tracking-wide hover:bg-navy/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 interactive"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Autenticar Acceso <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-xs text-text/40 font-sans">
              Si no tiene credenciales, contacte a su consultor estratégico.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
