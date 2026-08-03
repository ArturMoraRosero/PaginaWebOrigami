import dynamic from "next/dynamic";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import FaqSection from "@/components/sections/FaqSection";
import {
  ABOUT_UPDATED_AT,
  FOUNDING_YEAR,
  clientCases,
  distinctions,
  faqsAbout,
  firmFacts,
  leadership,
} from "@/content/about";
import { ORGANIZATION_ID, SITE_URL, organizationSchema } from "@/lib/schema";

const Footer = dynamic(() => import("@/components/sections/Footer"));
const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

const METHOD = [
  { title: "Diagnóstico Ejecutivo", desc: "Analizamos la situación actual y el potencial de crecimiento." },
  { title: "Arquitectura de Crecimiento", desc: "Diseñamos la estructura estratégica y el roadmap de valor." },
  { title: "Conexión Estratégica", desc: "Vinculamos con aliados clave y recursos de ejecución." },
  { title: "Acompañamiento Directivo", desc: "Guiamos la gerencia durante la implementación." },
  { title: "Optimización y Escalabilidad", desc: "Ajustamos procesos para sostener el crecimiento." },
];

/**
 * Página de entidad.
 *
 * GEO: emite un AboutPage cuyo `mainEntity` es la organización, más una
 * versión de la organización enriquecida con `founder`/`employee` cuando hay
 * datos de liderazgo. Es la página a la que un modelo debe apuntar cuando le
 * preguntan "¿quién es Origami Consulting Group?".
 */
export default function NosotrosPage() {
  const org = {
    ...organizationSchema,
    ...(FOUNDING_YEAR ? { foundingDate: String(FOUNDING_YEAR) } : {}),
    ...(leadership.length
      ? {
          founder: leadership.map((l) => ({
            "@type": "Person",
            name: l.name,
            jobTitle: l.role,
            ...(l.linkedin ? { sameAs: [l.linkedin] } : {}),
          })),
        }
      : {}),
  };

  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/nosotros#aboutpage`,
    url: `${SITE_URL}/nosotros`,
    name: "Nosotros — Origami Consulting Group",
    inLanguage: "es-EC",
    dateModified: ABOUT_UPDATED_AT,
    mainEntity: { "@id": ORGANIZATION_ID },
  };

  return (
    <main className="relative min-h-screen bg-surface selection:bg-green selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([org, aboutPage]) }}
      />

      <Navigation />

      <div className="relative z-10 pt-32">
        {/* HERO — resumen citable */}
        <section className="px-6 py-20 lg:py-28 max-w-7xl mx-auto">
          <span className="text-green font-syne font-bold uppercase tracking-widest text-sm mb-6 block">
            La firma
          </span>
          <h1 className="font-syne font-bold text-[clamp(36px,7vw,72px)] leading-[1.1] text-navy mb-8 max-w-4xl">
            Origami Consulting Group
          </h1>
          <p className="text-xl md:text-2xl text-navy/70 font-sans leading-relaxed max-w-3xl mb-8">
            Firma boutique de consultoría estratégica con sede en Quito,
            Ecuador. Acompañamos a CEOs y equipos directivos en la
            estructuración del crecimiento comercial B2B, la arquitectura de
            alianzas estratégicas, el acceso al canal corporativo y la
            valoración estratégica de marca.
          </p>
          <p className="text-lg text-navy/60 font-sans leading-relaxed max-w-3xl">
            No improvisamos crecimiento. Lo estructuramos.
          </p>
        </section>

        {/* QUÉ HACEMOS / QUÉ NO */}
        <section className="bg-navy py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-6">
                Con quién trabajamos
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Con empresas que ya tienen producto y facturación, pero cuyo
                crecimiento depende de referidos, de relaciones personales o del
                esfuerzo de una sola persona. Empresas que llegaron a su techo
                haciendo bien lo que siempre hicieron.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                Nuestro interlocutor es la alta dirección: CEOs, directorios y
                gerencias generales.
              </p>
            </div>
            <div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-6">
                Qué nos diferencia
              </h2>
              <ul className="space-y-4">
                {distinctions.map((d, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/70 text-lg leading-relaxed">
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-green flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FICHA DE LA FIRMA — formato tabla, el más extraíble */}
        <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
          <span className="text-green font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Ficha
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-navy mb-12">
            Datos de la firma
          </h2>
          <dl className="divide-y divide-navy/10 border-t border-b border-navy/10">
            {FOUNDING_YEAR && (
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-bold text-navy">Fundación</dt>
                <dd className="sm:col-span-2 text-navy/70">{FOUNDING_YEAR}</dd>
              </div>
            )}
            {firmFacts.map((f, i) => (
              <div key={i} className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-bold text-navy">{f.label}</dt>
                <dd className="sm:col-span-2 text-navy/70">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* LIDERAZGO — solo si hay datos */}
        {leadership.length > 0 && (
          <section className="bg-surface-dark py-20 md:py-28 px-6">
            <div className="max-w-5xl mx-auto">
              <span className="text-green font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                Dirección
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-5xl text-navy mb-12">
                Quiénes lideran la firma
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {leadership.map((l, i) => (
                  <div key={i}>
                    <h3 className="font-syne font-bold text-2xl text-navy">{l.name}</h3>
                    <p className="text-green font-bold uppercase tracking-wider text-xs mt-1 mb-3">
                      {l.role}
                    </p>
                    <p className="text-navy/70 leading-relaxed">{l.bio}</p>
                    {l.linkedin && (
                      <a
                        href={l.linkedin}
                        target="_blank"
                        rel="noopener"
                        className="inline-block mt-3 text-navy/50 hover:text-green transition-colors text-sm"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* METODOLOGÍA */}
        <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
          <span className="text-green font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Cómo trabajamos
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-navy mb-4">
            Modelo de Activación Estratégica
          </h2>
          <p className="text-navy/60 text-lg mb-12 max-w-2xl">
            Cinco etapas. Cada proyecto las recorre completas.
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {METHOD.map((s, i) => (
              <li key={i}>
                <span className="font-syne font-bold text-4xl text-navy/15 block mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CLIENTES */}
        <section className="bg-navy py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <span className="text-green/80 font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Casos
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl text-white mb-12">
              Empresas que hemos acompañado
            </h2>
            <dl className="divide-y divide-white/10 border-t border-b border-white/10">
              {clientCases.map((c, i) => (
                <div key={i} className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-syne font-bold text-white">{c.client}</dt>
                  <dd className="sm:col-span-2 text-white/60">{c.work}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8">
              <Link href="/#casos" className="text-green font-bold hover:underline">
                Ver los casos completos →
              </Link>
            </p>
          </div>
        </section>

        <FaqSection
          faqs={faqsAbout}
          tag="Sobre la firma"
          title="Preguntas frecuentes"
          updatedAt={ABOUT_UPDATED_AT}
        />

        <section id="contacto">
          <Contact />
        </section>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
