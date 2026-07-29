// Motor de contenido / Insights de Origami Consulting Group.
// Agregar un artículo = agregar un objeto a `posts`. Nada más.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD)
  tag: string;
  keywords: string[];
  excerpt: string;
  readingMinutes: number;
  // CTA interno hacia la landing que convierte
  related: { label: string; href: string };
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "como-vender-al-canal-corporativo-ecuador",
    title: "Cómo vender tus productos o servicios al canal corporativo en Ecuador",
    description:
      "Guía para introducir tu producto o servicio en el canal corporativo de Ecuador: cómo llegar a gerentes, compras y recursos humanos que deciden, y por qué el acceso pesa más que el esfuerzo comercial.",
    date: "2026-07-29",
    tag: "Canal Corporativo",
    keywords: [
      "vender al canal corporativo Ecuador",
      "canal corporativo B2B",
      "cómo llegar a gerentes de compras",
      "proveedores corporativos Ecuador",
    ],
    excerpt:
      "El canal corporativo es el más rentable de Ecuador. También el más cerrado. No se abre con más esfuerzo comercial, se abre con acceso a quien decide.",
    readingMinutes: 5,
    related: {
      label: "Conoce cómo abrimos el canal corporativo",
      href: "/acceso-canal-corporativo-b2b-ecuador",
    },
    body: [
      { type: "p", text: "El canal corporativo es el más rentable de Ecuador. También el más cerrado." },
      { type: "p", text: "No se abre con más esfuerzo comercial. Se abre con acceso a quien decide." },
      { type: "p", text: "Este artículo explica cómo introducir tu producto o servicio en las empresas que compran a escala. Y por qué el punto de partida no es tu oferta, sino tu llegada." },

      { type: "h2", text: "Qué es el canal corporativo y por qué es distinto" },
      { type: "p", text: "El canal corporativo son las empresas que compran de forma estructurada: con presupuesto, comité y proceso." },
      { type: "p", text: "No compran por impulso. Compran por aprobación." },
      { type: "p", text: "Venderle a una corporación no se parece a venderle a un consumidor. Cambian el interlocutor, el ciclo y el criterio." },
      {
        type: "ul",
        items: [
          "Quien usa tu producto casi nunca es quien lo aprueba.",
          "La decisión pasa por gerencia, compras o recursos humanos.",
          "El ciclo es más largo, pero el ticket y la recurrencia son mayores.",
        ],
      },

      { type: "h2", text: "El error más común: empujar la oferta antes que el acceso" },
      { type: "p", text: "Muchas empresas creen que un buen producto abre puertas por sí solo." },
      { type: "p", text: "No lo hace." },
      { type: "p", text: "Un correo frío rara vez llega a gerencia. Un formulario de contacto, tampoco." },
      { type: "p", text: "Sin una vía hacia el tomador de decisión, la mejor oferta se queda en la bandeja de entrada de quien no decide." },
      { type: "quote", text: "No tienes un problema de producto. Tienes un problema de acceso." },

      { type: "h2", text: "Quién decide realmente en una empresa" },
      { type: "p", text: "Antes de vender, hay que mapear quién firma." },
      { type: "p", text: "En el canal corporativo, casi nunca es una sola persona." },
      {
        type: "ul",
        items: [
          "Gerencia o dirección: aprueba el presupuesto y la relación estratégica.",
          "Compras o procurement: valida condiciones, precio y proveedor.",
          "Recursos humanos: decide en beneficios, capacitación y bienestar.",
          "El área usuaria: recomienda, pero no aprueba.",
        ],
      },
      { type: "p", text: "Vender sin saber a cuál de ellos te diriges es hablarle a la puerta equivocada." },

      { type: "h2", text: "Cómo se abre el canal corporativo, paso a paso" },
      { type: "p", text: "Abrir el canal no es cuestión de suerte. Es una secuencia." },
      {
        type: "ul",
        items: [
          "Define tu cliente corporativo ideal: sector, tamaño y tipo de compra.",
          "Identifica al decisor correcto dentro de esa empresa.",
          "Llega con una introducción, no con una venta.",
          "Estructura la relación hasta que tu oferta entra al portafolio de proveedores.",
          "Sostén el vínculo: el canal corporativo premia la constancia, no la insistencia.",
        ],
      },

      { type: "h2", text: "Por qué las relaciones ya construidas valen más que cualquier campaña" },
      { type: "p", text: "En el mundo corporativo, la confianza no se compra con publicidad." },
      { type: "p", text: "Se hereda de quien ya la tiene." },
      { type: "p", text: "Una introducción de alguien con vínculo real acorta meses de prospección en frío." },
      { type: "p", text: "Ese es el activo que define quién entra al canal y quién sigue tocando puertas." },

      { type: "h2", text: "Cuánto tarda y qué esperar" },
      { type: "p", text: "El canal corporativo no da resultados de un día para otro. Da resultados sostenidos." },
      {
        type: "ul",
        items: [
          "Reuniones con tomadores de decisión reales, no con intermediarios.",
          "Tu oferta dentro del portafolio de proveedores corporativos.",
          "Un ciclo comercial más corto y predecible con cada cuenta que abres.",
        ],
      },

      { type: "h2", text: "En resumen" },
      { type: "p", text: "Si tienes un buen producto o servicio y te falta la puerta de entrada, el problema no es tu oferta. Es el acceso." },
      { type: "p", text: "Y el acceso se estructura." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
