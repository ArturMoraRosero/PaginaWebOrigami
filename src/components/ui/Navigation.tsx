"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Práctica", href: "/#practica" },
    { name: "Modelo", href: "/#modelo" },
    { name: "Casos", href: "/#casos" },
    { name: "Insights", href: "/#insights" },
    { name: "Valoración Clientes", href: "/valoracion" },
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
          <a 
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
          </a>

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

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/#contacto"
              onClick={(e) => handleNavClick(e, "/#contacto")}
              className="hidden md:inline-flex bg-green text-navy px-5 py-2 rounded-full font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_15px_rgba(125,194,66,0.4)] transition-all duration-300 interactive"
            >
              Iniciar conversación
            </a>
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
              <a
                href="/#contacto"
                onClick={(e) => handleNavClick(e, "/#contacto")}
                className="mt-4 bg-green text-navy px-8 py-4 rounded-full font-bold text-lg tracking-wide interactive"
              >
                Iniciar conversación
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
