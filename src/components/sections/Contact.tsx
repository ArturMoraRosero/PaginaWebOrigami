"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";


export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    
    // Basic validation
    if (!formState.name) newErrors.name = true;
    if (!formState.company) newErrors.company = true;
    if (!formState.email || !/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = true;
    if (!formState.message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Real API call to FormSubmit
    fetch("https://formsubmit.co/ajax/alianzas@oriconsultoria.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Nombre: formState.name,
        Empresa: formState.company,
        Email: formState.email,
        Mensaje: formState.message,
        _subject: "Nuevo mensaje de contacto web - Origami Consulting",
      })
    })
    .then(response => response.json())
    .then(data => {
        setIsSubmitting(false);
        if(data.success) {
          setShowSuccess(true);
        } else {
          alert(t.contact.form.errorSend);
        }
    })
    .catch(error => {
        setIsSubmitting(false);
        alert(t.contact.form.errorConn);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-[radial-gradient(circle_at_bottom_left,#1E3D7A,#0D1B35)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* Left Panel */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-green font-syne font-bold uppercase tracking-widest text-sm mb-4 block">
            {t.contact.tag}
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t.contact.title}
          </h2>
          <p className="font-sans text-white/70 text-lg leading-relaxed max-w-md">
            {t.contact.description}
          </p>
          
          <div className="mt-12 lg:mt-16 space-y-6">
             <a href="mailto:alianzas@oriconsultoria.com" className="inline-block text-white hover:text-green text-xl font-light transition-colors interactive">
                alianzas@oriconsultoria.com
             </a>
             <p className="text-white/50 text-sm">
                Quito, Ecuador
             </p>
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            {showSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-syne font-bold text-white mb-3">{t.contact.successTitle}</h3>
                <p className="text-white/70 font-sans">
                  {t.contact.successMessage}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-sans text-white/60 ml-2">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full bg-navy/40 border ${errors.name ? 'border-red-500/50 animate-[shake_0.5s_ease-in-out]' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-green focus:bg-white/5 transition-all interactive`}
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-sans text-white/60 ml-2">{t.contact.form.company}</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className={`w-full bg-navy/40 border ${errors.company ? 'border-red-500/50 animate-[shake_0.5s_ease-in-out]' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-green focus:bg-white/5 transition-all interactive`}
                    placeholder={t.contact.form.companyPlaceholder}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-sans text-white/60 ml-2">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full bg-navy/40 border ${errors.email ? 'border-red-500/50 animate-[shake_0.5s_ease-in-out]' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-green focus:bg-white/5 transition-all interactive`}
                    placeholder="ejemplo@empresa.com"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-2">
                  <label htmlFor="message" className="text-sm font-sans text-white/60 ml-2">{t.contact.form.message}</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full min-h-[120px] resize-none bg-navy/40 border ${errors.message ? 'border-red-500/50 animate-[shake_0.5s_ease-in-out]' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-green focus:bg-white/5 transition-all interactive`}
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green text-navy font-bold text-lg py-4 rounded-xl hover:bg-green-dk active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-navy transition-all interactive relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full"
                      />
                      {t.contact.form.submitting}
                    </span>
                  ) : (
                    t.contact.form.submit
                  )}
                </button>
              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
