"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.practice, href: "/#practica" },
    { name: t.nav.model, href: "/#modelo" },
    { name: t.nav.cases, href: "/#casos" },
    { name: t.nav.insights, href: "/#insights-social" },
    { name: t.nav.valuation, href: "/valoracion" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = window.location.pathname === "/";
    
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (isHomePage) {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Allow default link behavior to navigate to homepage anchor
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-300 pointer-events-none"
        animate={{
          scale: isScrolled ? 0.97 : 1,
          y: isScrolled ? -4 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass rounded-[100px] px-6 py-4 flex items-center justify-between pointer-events-auto border border-white/10 shadow-lg">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group interactive" 
            onClick={(e) => { 
              if (window.location.pathname === "/") {
                e.preventDefault(); 
                window.scrollTo({top: 0, behavior:"smooth"});
              }
            }}
          >
            <Image 
              src="/logotipo-origami-horizontal.png" 
              alt="Origami Consulting Group Logo - Consultoría Estratégica en Ecuador" 
              width={260} 
              height={70} 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide group interactive"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Desktop CTA & Language Toggle */}
          <div className="flex items-center gap-4">
            
            {/* Language Toggle */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
              <button 
                onClick={() => setLanguage('es')}
                className={`text-xs font-bold transition-colors interactive ${language === 'es' ? 'text-green' : 'text-white/50 hover:text-white'}`}
              >
                ES
              </button>
              <span className="text-white/20 text-xs">|</span>
              <button 
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold transition-colors interactive ${language === 'en' ? 'text-green' : 'text-white/50 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <Link
              href="/#contacto"
              onClick={(e) => handleNavClick(e, "/#contacto")}
              className="hidden md:inline-flex bg-green text-navy px-5 py-2 rounded-full font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_15px_rgba(125,194,66,0.4)] transition-all duration-300 interactive"
            >
              {t.nav.start}
            </Link>
            <button
              className="md:hidden text-white interactive"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center pointer-events-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <button
              className="absolute top-8 right-8 text-white interactive"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8 text-2xl font-syne font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white hover:text-green transition-colors interactive"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-4 mt-2">
                <button 
                  onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }}
                  className={`text-lg font-bold transition-colors interactive ${language === 'es' ? 'text-green' : 'text-white/50'}`}
                >
                  ES
                </button>
                <span className="text-white/20 text-lg">|</span>
                <button 
                  onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                  className={`text-lg font-bold transition-colors interactive ${language === 'en' ? 'text-green' : 'text-white/50'}`}
                >
                  EN
                </button>
              </div>

              <Link
                href="/#contacto"
                onClick={(e) => handleNavClick(e, "/#contacto")}
                className="mt-4 bg-green text-navy px-8 py-4 rounded-full font-bold text-lg tracking-wide interactive"
              >
                {t.nav.start}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
