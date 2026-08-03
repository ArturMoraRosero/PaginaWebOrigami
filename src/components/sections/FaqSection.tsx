import { faqSchema, type Faq } from "@/lib/schema";

/**
 * Bloque de preguntas frecuentes.
 *
 * GEO: el texto de las respuestas se renderiza VISIBLE en el HTML (no solo en
 * JSON-LD) porque los motores generativos citan párrafos del cuerpo de la
 * página. Se usa <details>/<summary> nativo para que el contenido exista en el
 * HTML servido sin depender de JavaScript.
 */
export default function FaqSection({
  faqs,
  title = "Preguntas frecuentes",
  tag = "Respuestas directas",
  updatedAt,
}: {
  faqs: Faq[];
  title?: string;
  tag?: string;
  /** Fecha ISO (YYYY-MM-DD) de última actualización del contenido. */
  updatedAt?: string;
}) {
  return (
    <section className="py-24 md:py-32 px-6" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto">
        <span className="font-syne font-bold uppercase tracking-[0.2em] text-sm mb-4 block text-green">
          {tag}
        </span>
        <h2
          id="faq-title"
          className="font-syne font-bold text-3xl md:text-5xl leading-tight text-navy mb-12"
        >
          {title}
        </h2>

        <div className="divide-y divide-navy/10 border-t border-b border-navy/10">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-6" open={i === 0}>
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="font-syne font-bold text-lg md:text-xl text-navy">
                  {faq.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="text-green text-2xl leading-none flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-navy/70 leading-relaxed text-lg max-w-3xl">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {updatedAt && (
          <p className="mt-8 text-sm text-navy/40">
            Contenido revisado por Origami Consulting Group · Última
            actualización:{" "}
            <time dateTime={updatedAt}>
              {new Date(`${updatedAt}T12:00:00`).toLocaleDateString("es-EC", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
    </section>
  );
}
