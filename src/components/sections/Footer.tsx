import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-20 px-6 relative z-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Brand */}
        <div>
          <Image 
            src="/logotipo-origami-horizontal.png" 
            alt="Origami Consulting" 
            width={320} 
            height={80} 
            className="h-16 md:h-20 w-auto object-contain mb-8" 
          />
          <p className="font-sans text-white/50 text-sm max-w-sm">
            Estrategia & Valor. Consultoría empresarial, comprometida con el impacto. Quito-Ecuador
          </p>
          <div className="font-sans text-sm text-white/70 space-y-2">
            <p className="hover:text-accent-green transition-colors cursor-pointer w-fit">oriconsultoria.com</p>
            <p className="hover:text-accent-green transition-colors cursor-pointer w-fit">+593 98 514 1999</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:justify-end gap-x-16 gap-y-6">
          <nav className="flex flex-col space-y-5 font-sans text-white/70">
            <a href="#" className="hover:text-white transition-colors w-fit">Servicios</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Metodología</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Sobre nosotros</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Contacto</a>
          </nav>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center font-sans text-white/40 text-xs tracking-wider uppercase">
        © {new Date().getFullYear()} Origami Consulting Group.
      </div>
    </footer>
  );
}
