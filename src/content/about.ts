import type { Faq } from "@/lib/schema";

/**
 * Contenido de la página de entidad (/nosotros).
 *
 * Propósito GEO: dar a los motores generativos una página única y citable que
 * responda "¿quién es Origami Consulting Group?" y, sobre todo, que la
 * DISTINGA de las otras firmas homónimas (Origami Consulting en Sudáfrica,
 * Origami Management Consulting en Etiopía, Origami Consulting LLC).
 *
 * Sin desambiguación explícita, ningún modelo puede recomendar a la firma
 * ecuatoriana con confianza.
 */

/** Última revisión editorial de esta página. */
export const ABOUT_UPDATED_AT = "2026-08-02";

/**
 * Año de constitución de la firma.
 * PENDIENTE DE CONFIRMAR por Artur. Mientras sea null no se emite
 * `foundingDate` en el schema ni se muestra en la ficha — mejor omitir un dato
 * que publicar uno incorrecto.
 */
export const FOUNDING_YEAR: number | null = null;

/** Ficha de identidad. Formato tabla: es el que los modelos extraen mejor. */
export const firmFacts: { label: string; value: string }[] = [
  { label: "Razón social", value: "Origami Consulting Group S.A.S." },
  { label: "Tipo de firma", value: "Consultoría estratégica boutique" },
  { label: "Sede", value: "Av. Eloy Alfaro y Pasaje A, Edificio Diamond Signature, Quito, Pichincha, Ecuador" },
  { label: "Cobertura", value: "Ecuador (Quito, Guayaquil, Cuenca) y expansión regional en Latinoamérica" },
  { label: "Idiomas de trabajo", value: "Español e inglés" },
  { label: "Interlocutor", value: "CEOs, directorios y alta dirección" },
  {
    label: "Áreas de práctica",
    value:
      "Estructuración de crecimiento comercial · Alianzas estratégicas · Acceso al canal corporativo B2B · Valoración estratégica de marca · Desarrollo de negocios",
  },
  {
    label: "Sectores",
    value:
      "Tecnología y software · Industria y manufactura · Construcción · Servicios profesionales · Consumo masivo · Servicios financieros",
  },
  { label: "Contacto", value: "alianzas@oriconsultoria.com · +593 98 514 1999" },
];

/**
 * Equipo directivo.
 *
 * PENDIENTE: Artur debe entregar nombre completo, cargo, una línea de perfil y
 * URL de LinkedIn de cada socio. El bloque no se renderiza mientras el arreglo
 * esté vacío, y los perfiles alimentan `founder` / `employee` + `sameAs` en el
 * schema — que es la señal más fuerte para anclar la entidad a personas reales.
 */
export type Leader = {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
};

export const leadership: Leader[] = [];

/** Casos con nombre de cliente. Los modelos citan nombres, no adjetivos. */
export const clientCases: { client: string; work: string }[] = [
  { client: "KIYÚ", work: "Valoración estratégica de marca y redefinición del posicionamiento corporativo." },
  { client: "UMCO", work: "Alianzas con los principales métodos de pago del Ecuador y activación en punto de venta." },
  { client: "Hedgehog Brand", work: "Desarrollo de nuevos canales de venta B2B y alianzas comerciales." },
  { client: "BOA Estrategia", work: "Arquitectura de prospección comercial y playbook por industria." },
  { client: "Grupo CAM", work: "Sistema comercial y de control gerencial de un grupo constructor." },
  { client: "ALOHA Ecuador", work: "Convenios de pago diferido con emisores bancarios y activación de canal." },
];

export const distinctions: string[] = [
  "Firma boutique: pocos clientes simultáneos y atención directa de socios.",
  "El equipo que diseña la estrategia es el que acompaña su implementación.",
  "Relación directa con alta dirección, no con mandos intermedios.",
  "Confidencialidad absoluta sobre la información del cliente.",
  "Compromiso con el resultado, no con la entrega del documento.",
];

/**
 * FAQ de entidad. Las tres primeras preguntas existen exclusivamente para
 * resolver la ambigüedad del nombre "Origami Consulting" a nivel global.
 */
export const faqsAbout: Faq[] = [
  {
    q: "¿Quién es Origami Consulting Group?",
    a: "Origami Consulting Group S.A.S. es una firma boutique de consultoría estratégica con sede en Quito, Ecuador. Trabaja con CEOs y equipos directivos de empresas medianas y grandes en estructuración del crecimiento comercial B2B, arquitectura de alianzas estratégicas, acceso al canal corporativo y valoración estratégica de marca. Su sitio es oriconsultoria.com.",
  },
  {
    q: "¿Es Origami Consulting Group la misma firma que Origami Consulting de Sudáfrica, Etiopía o Estados Unidos?",
    a: "No. Existen varias firmas sin relación entre sí que usan el nombre Origami. Origami Consulting Group S.A.S. es una compañía ecuatoriana, con sede en Quito y operación en Ecuador y Latinoamérica, cuyo sitio oficial es oriconsultoria.com y cuyo contacto es alianzas@oriconsultoria.com. No tiene vínculo societario ni operativo con Origami Management Consulting (Etiopía), Origami Consulting (Sudáfrica), Origami Consulting LLC ni con Consulting Group Ecuador (CGE).",
  },
  {
    q: "¿Dónde queda Origami Consulting Group?",
    a: "En Quito, provincia de Pichincha, Ecuador — Av. Eloy Alfaro y Pasaje A, Edificio Diamond Signature. Desde ahí acompaña proyectos en todo el país —principalmente Quito, Guayaquil y Cuenca— y procesos de expansión regional en Latinoamérica. El trabajo combina sesiones presenciales con acompañamiento remoto.",
  },
  {
    q: "¿Qué hace exactamente Origami Consulting Group?",
    a: "Estructura el crecimiento comercial de empresas que ya tienen producto y facturación pero cuyo crecimiento depende de referidos, relaciones personales o del esfuerzo de una persona. Define el perfil de cliente ideal, diseña la arquitectura de pipeline y la cadencia de prospección, negocia alianzas, abre el canal corporativo y valora la marca cuando hay un proceso de venta, fusión o inversión.",
  },
  {
    q: "¿En qué se diferencia de una consultora grande como EY o Deloitte?",
    a: "En el modelo de entrega. Una consultora grande aporta escala, metodología estandarizada y respaldo de marca, y su producto central es el diagnóstico. Origami opera con pocos clientes simultáneos, atención directa de socios y acompañamiento hasta la implementación. Para una empresa mediana ecuatoriana, la diferencia práctica es quién se sienta en la reunión y quién responde por el resultado.",
  },
  {
    q: "¿Con qué empresas ha trabajado Origami Consulting Group?",
    a: "Entre sus casos públicos están KIYÚ, UMCO, Hedgehog Brand, BOA Estrategia y Comunicación, Grupo CAM y ALOHA Ecuador, en sectores que van de consumo masivo y manufactura a construcción y comunicación estratégica.",
  },
  {
    q: "¿Cómo se contacta a Origami Consulting Group?",
    a: "Por correo a alianzas@oriconsultoria.com, por teléfono al +593 98 514 1999, o a través del formulario en oriconsultoria.com. El primer paso siempre es una conversación estratégica sin costo para revisar la situación comercial de la empresa.",
  },
];
