"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import Scene from "@/components/Scene";
import { 
  Building2, 
  TrendingUp, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  DollarSign,
  Download,
  FileText,
  Users
} from "lucide-react";

const STEPS = [
  { id: 1, title: "Institucional", icon: Building2 },
  { id: 2, title: "Finanzas", icon: DollarSign },
  { id: 3, title: "Marca", icon: Globe2 },
  { id: 4, title: "Descarga", icon: Download }
];

export default function FormularioPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("origami_auth") === "true";
    if (!isAuthenticated) {
      router.push("/valoracion/login");
    }
  }, [router]);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsSending(true);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/send', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Mostrar el mensaje específico de Resend si existe
        const msg = errorData.error || 'Error al enviar el archivo';
        throw new Error(msg);
      }
      
      setIsSent(true);
    } catch (error) {
      console.error('Upload error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      alert(`Error: ${errorMessage}\n\nPosibles causas:\n1. La API Key en Vercel es incorrecta.\n2. Resend solo permite enviar a tu propio correo hasta que verifiques tu dominio.\n3. El archivo es demasiado grande.`);
    } finally {
      setIsSending(false);
    }
  };
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-navy mb-6">Información Institucional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Empresa evaluada" placeholder="Nombre legal" />
              <InputField label="Responsable de entrega" placeholder="Nombre completo" />
              <InputField label="Cargo" placeholder="Ej. Gerente Financiero" />
              <InputField label="Fecha de entrega" placeholder="DD/MM/AAAA" />
              <InputField label="Contacto / Correo" placeholder="usuario@empresa.com" />
              <InputField label="Proyecto / Referencia" placeholder="Nombre del proyecto" />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-navy mb-6">Información Financiera</h2>
            <div className="space-y-3">
              <p className="text-sm text-text/50 mb-2">Marque el estado de los documentos requeridos:</p>
              <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                 <DocumentRow label="Estados financieros auditados (P&G, Balance, Flujo) — últimos 5 años" />
                 <DocumentRow label="EBITDA histórico y ajustado" />
                 <DocumentRow label="Proyecciones financieras a 3-5 años" />
                 <DocumentRow label="Deuda financiera estructurada y con terceros" />
                 <DocumentRow label="Inventario de activos fijos y estado (maquinaria, inmuebles...)" />
                 <DocumentRow label="Capital de trabajo promedio" />
                 <DocumentRow label="Política de dividendos histórica" />
                 <DocumentRow label="Ventas totales y utilidad bruta — últimos 5 años" />
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-navy mb-6">Marca y Posicionamiento</h2>
            <div className="space-y-3">
              <p className="text-sm text-text/50 mb-2">Marque la disponibilidad de activos intangibles:</p>
              <div className="grid grid-cols-1 gap-3">
                 <DocumentRow label="Manual de identidad corporativa y brand book" />
                 <DocumentRow label="Estudios de mercado o Top of Mind previos" />
                 <DocumentRow label="Registro de marcas y patentes (IEPI/SENADI)" />
                 <DocumentRow label="Inversión en pauta publicitaria histórica" />
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {isSent ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center text-green mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">¡Formulario Enviado!</h2>
                <p className="text-text/60 mb-8">Gracias. Hemos recibido tu información técnica y comenzaremos la valoración de inmediato.</p>
                <button 
                  onClick={() => router.push('/')}
                  className="bg-navy text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all"
                >
                  Volver al Inicio
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-navy mb-12 flex items-center gap-3">
                  <Download className="text-green" /> Descarga del Formulario Especializado
                </h2>
                <div className="bg-surface rounded-3xl p-8 border border-green/20 border-dashed text-center">
                  <FileText size={48} className="mx-auto text-green/40 mb-6" />
                  <h3 className="text-xl font-bold text-navy mb-4">Formulario de Levantamiento de Información</h3>
                  <p className="text-text/60 mb-8 max-w-md mx-auto">
                    Este documento técnico contiene todas las secciones requeridas. Complételo y envíelo a <strong className="text-navy">alianzas@oriconsultoria.com</strong> o cárguelo directamente debajo.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                    <a 
                      href="/formulario_valoracion_origami.docx"
                      download
                      className="inline-flex bg-green text-navy px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all items-center gap-2 interactive"
                    >
                      <Download size={20} /> Descargar Formulario (.DOCX)
                    </a>
                  </div>

                  <div className="pt-8 border-t border-navy/5">
                    <h4 className="text-navy font-bold mb-4">Enviar Formulario Completado</h4>
                    <div className="space-y-4 max-w-sm mx-auto">
                      <div className="relative group">
                        <input 
                          type="file" 
                          id="file-upload"
                          onChange={handleFileChange}
                          accept=".doc,.docx,.pdf"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <label 
                          htmlFor="file-upload"
                          className={`flex items-center justify-center gap-3 w-full bg-surface border-2 border-dashed rounded-2xl py-6 px-4 transition-all ${selectedFile ? 'border-green bg-green/5' : 'border-navy/10 group-hover:border-green group-hover:bg-green/5'}`}
                        >
                          <Users className={selectedFile ? 'text-green' : 'text-navy/30 group-hover:text-green'} />
                          <span className={`${selectedFile ? 'text-navy' : 'text-navy/60'} font-medium group-hover:text-navy truncate px-2 text-sm`}>
                            {selectedFile ? selectedFile.name : 'Seleccionar archivo'}
                          </span>
                        </label>
                      </div>
                      <button 
                        onClick={handleUpload}
                        disabled={!selectedFile || isSending}
                        className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl ${!selectedFile || isSending ? 'bg-navy/20 cursor-not-allowed text-navy/40' : 'bg-navy text-white hover:bg-navy/90'}`}
                      >
                        {isSending ? (
                          <>Enviando...</>
                        ) : (
                          <>Enviar a Origami <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden pb-20">
      <Scene />
      <Navigation />

      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-syne font-bold text-navy mb-4 tracking-tight">Levantamiento de Información</h1>
            <p className="text-text/60">Gestión de datos para Valoración Integral de Empresa y Marca.</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-navy/5 -translate-y-1/2 -z-10" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-green -translate-y-1/2 -z-10 transition-all duration-500" 
            style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
          />
          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-3">
              <div 
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                  currentStep >= step.id 
                  ? 'bg-green border-green text-navy shadow-[0_0_15px_rgba(125,194,66,0.3)]' 
                  : 'bg-white border-navy/10 text-navy/30'
                }`}
              >
                <step.icon size={20} />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${currentStep >= step.id ? 'text-navy' : 'text-navy/30'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(26,46,90,0.05)] border border-navy/[0.03]">
          <div className="min-h-[350px] flex flex-col justify-between">
            <div>
              {renderCurrentStep()}
            </div>

            <div className="flex justify-between items-center mt-12 pt-8 border-t border-navy/5">
              <button 
                type="button" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 font-bold transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-navy/40 hover:text-navy'} interactive`}
              >
                <ArrowLeft size={20} /> Atrás
              </button>
              
              {currentStep < STEPS.length && (
                <button 
                  onClick={nextStep}
                  className="bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-navy/90 transition-all flex items-center gap-2 group interactive"
                >
                  Continuar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}


function InputField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-navy/70 ml-1">{label}</label>
      <input 
        type={type}
        className="w-full bg-surface border border-navy/5 rounded-2xl py-4 px-6 outline-none focus:border-green/30 focus:ring-4 focus:ring-green/5 transition-all font-sans"
        placeholder={placeholder}
      />
    </div>
  );
}

function DocumentRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-surface/50 rounded-2xl border border-navy/[0.03] group hover:border-green/20 transition-all">
      <span className="text-navy text-sm font-medium pr-4">{label}</span>
      <div className="flex gap-4 shrink-0">
        {['Disponible', 'En proceso'].map((status) => (
          <label key={status} className="flex items-center gap-2 cursor-pointer group/label">
            <div className="w-5 h-5 rounded-md border border-navy/10 bg-white group-hover/label:border-green transition-colors flex items-center justify-center overflow-hidden">
               <input type="radio" name={label} className="peer hidden" />
               <div className="w-full h-full bg-green scale-0 peer-checked:scale-100 transition-transform" />
            </div>
            <span className="text-[10px] uppercase font-bold text-navy/40 group-hover/label:text-navy transition-colors">{status}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
