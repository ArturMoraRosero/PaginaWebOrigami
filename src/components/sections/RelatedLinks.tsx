import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getRelated, type RelatedLink } from "@/content/relatedLinks";

/**
 * Bloque de enlazado interno al pie de cada landing de servicio.
 *
 * SEO: usa <Link> (no <a>) para que Next precargue, y texto de anclaje
 * descriptivo en un <h3>, porque el anclaje es la señal principal que Google
 * usa para entender de qué trata la página destino. La descripción de una
 * línea aporta el contexto semántico alrededor del enlace.
 */
function LinkCard({ link, dark }: { link: RelatedLink; dark: boolean }) {
  return (
    <Link
      href={link.href}
      className={`group flex flex-col justify-between gap-4 p-7 rounded-2xl border transition-all duration-300 ${
        dark
          ? "border-white/15 hover:border-green/60 hover:bg-white/[0.04]"
          : "border-navy/10 hover:border-green/60 hover:bg-navy/[0.02]"
      }`}
    >
      <div>
        <h3
          className={`font-syne font-bold text-lg leading-snug mb-3 ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {link.label}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            dark ? "text-white/60" : "text-navy/60"
          }`}
        >
          {link.desc}
        </p>
      </div>
      <ArrowUpRight
        aria-hidden="true"
        className="w-5 h-5 text-green shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

export default function RelatedLinks({
  path,
  dark = false,
}: {
  /** Ruta de la landing actual, sin barra final. Debe existir en relatedByPath. */
  path: string;
  dark?: boolean;
}) {
  const related = getRelated(path);
  if (!related) return null;

  const { services, insights } = related;

  return (
    <section
      className={`py-24 md:py-28 px-6 ${dark ? "bg-navy" : ""}`}
      aria-labelledby="relacionados-title"
    >
      <div className="max-w-6xl mx-auto">
        <span className="font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block text-green">
          Continuar
        </span>
        <h2
          id="relacionados-title"
          className={`font-syne font-bold text-3xl md:text-4xl leading-tight mb-12 ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          Servicios y lecturas relacionadas
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((link) => (
            <LinkCard key={link.href} link={link} dark={dark} />
          ))}
        </div>

        {insights.length > 0 && (
          <div className="mt-12">
            <p
              className={`font-syne font-bold uppercase tracking-[0.15em] text-xs mb-5 ${
                dark ? "text-white/40" : "text-navy/40"
              }`}
            >
              Desde Insights
            </p>
            <ul
              className={`divide-y ${
                dark ? "divide-white/10" : "divide-navy/10"
              } border-t border-b ${
                dark ? "border-white/10" : "border-navy/10"
              }`}
            >
              {insights.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline justify-between gap-6 py-5"
                  >
                    <span
                      className={`font-syne font-bold text-base md:text-lg leading-snug transition-colors ${
                        dark
                          ? "text-white group-hover:text-green"
                          : "text-navy group-hover:text-green"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-green shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
