"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white py-20 px-6 relative z-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-14 items-start">

        {/* Brand */}
        <div className="md:col-span-5">
          <Image
            src="/logotipo-origami-horizontal.png"
            alt="Origami Consulting Group - Firma Boutique de Estrategia B2B"
            width={320}
            height={80}
            className="h-16 md:h-20 w-auto object-contain mb-8"
          />
          <p className="font-sans text-white/50 text-sm max-w-sm mb-6">
            {t.footer.description}<br/>
            Cumbayá, Quito - Ecuador<br/>
            <span className="text-white/30 text-[10px] mt-2 block">
              Cobertura estratégica: Quito, Guayaquil, Cuenca y expansión regional.
            </span>
          </p>
          <div className="font-sans text-sm text-white/70 space-y-2">
            <p className="hover:text-accent-green transition-colors cursor-pointer w-fit">www.oriconsultoria.com</p>
            <p className="hover:text-accent-green transition-colors cursor-pointer w-fit">+593 98 514 1999</p>
          </div>
        </div>

        {/* Servicios B2B (SEO landing pages) */}
        <nav className="md:col-span-4 flex flex-col">
          <span className="text-green/70 text-[11px] font-syne font-bold uppercase tracking-[0.18em] mb-5">
            {t.footer.b2bHeading}
          </span>
          <div className="flex flex-col space-y-3 font-sans text-sm text-white/60">
            <a href="/acceso-canal-corporativo-b2b-ecuador" className="hover:text-green transition-colors w-fit">{t.footer.links.corporateChannel}</a>
            <a href="/consultoria-comercial-b2b-quito" className="hover:text-green transition-colors w-fit">{t.footer.links.commercialConsulting}</a>
            <a href="/estrategia-de-ventas-b2b-ecuador" className="hover:text-green transition-colors w-fit">{t.footer.links.salesStrategy}</a>
            <a href="/alianzas-estrategicas-b2b-ecuador" className="hover:text-green transition-colors w-fit">{t.footer.links.strategicAlliances}</a>
            <a href="/como-aumentar-ventas-b2b-ecuador" className="hover:text-green transition-colors w-fit">{t.footer.links.increaseSales}</a>
          </div>
        </nav>

        {/* Navegación del sitio */}
        <nav className="md:col-span-3 flex flex-col">
          <span className="text-green/70 text-[11px] font-syne font-bold uppercase tracking-[0.18em] mb-5">
            {t.footer.navHeading}
          </span>
          <div className="flex flex-col space-y-3 font-sans text-sm text-white/60">
            <a href="#practica" className="hover:text-green transition-colors w-fit">{t.footer.links.services}</a>
            <a href="#modelo" className="hover:text-green transition-colors w-fit">{t.footer.links.methodology}</a>
            <a href="/valoracion" className="hover:text-green transition-colors w-fit">{t.footer.links.valuation}</a>
            <a href="#contacto" className="hover:text-green transition-colors w-fit">{t.footer.links.contact}</a>
            <div className="flex items-center gap-4 mt-3 pt-4 border-t border-white/10">
              <a
                href="https://www.linkedin.com/company/origami-consulting-group-sas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/origamiconsultingroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </nav>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center font-sans text-white/40 text-xs tracking-wider uppercase">
        © {new Date().getFullYear()} Origami Consulting Group.
      </div>
    </footer>
  );
}
