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
  /**
   * Enlaces secundarios hacia otras landings de servicio.
   * SEO: el CTA `related` es uno solo por artículo, lo que dejaba a
   * /estrategia-de-ventas-b2b-ecuador y /alianzas-estrategicas-b2b-ecuador sin
   * ningún enlace editorial entrante. Estos enlaces de texto reparten esa
   * autoridad sin tocar el CTA principal.
   */
  alsoSee?: { label: string; href: string }[];
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
    alsoSee: [
      { label: "Alianzas estratégicas B2B en Ecuador", href: "/alianzas-estrategicas-b2b-ecuador" },
      { label: "Estrategia de ventas B2B en Ecuador", href: "/estrategia-de-ventas-b2b-ecuador" },
    ],
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
  {
    slug: "como-llegar-a-gerentes-de-compras-y-rrhh",
    title: "Cómo llegar a gerentes de compras y de recursos humanos de grandes empresas",
    description:
      "Cómo contactar a los tomadores de decisión del canal corporativo en Ecuador: por qué compras, RR.HH. y gerencia deciden distinto, y cuáles son las vías reales de acceso.",
    date: "2026-07-29",
    tag: "Canal Corporativo",
    keywords: [
      "cómo llegar a gerentes de compras",
      "contactar tomadores de decisión B2B",
      "acceso a recursos humanos empresas",
      "prospección canal corporativo Ecuador",
    ],
    excerpt:
      "Tienes el producto y el precio, pero el correo nunca llega a quien decide. El muro del canal corporativo no es tu oferta, es el acceso.",
    readingMinutes: 5,
    related: {
      label: "Conoce cómo abrimos el canal corporativo",
      href: "/acceso-canal-corporativo-b2b-ecuador",
    },
    alsoSee: [
      { label: "Estrategia de ventas B2B en Ecuador", href: "/estrategia-de-ventas-b2b-ecuador" },
      { label: "Consultoría comercial B2B en Quito", href: "/consultoria-comercial-b2b-quito" },
    ],
    body: [
      { type: "p", text: "Tienes el producto. Tienes el precio. Pero el correo nunca llega a quien decide." },
      { type: "p", text: "Ese es el muro real del canal corporativo: no la oferta, sino el acceso." },
      { type: "p", text: "Llegar a gerentes de compras y de recursos humanos no es cuestión de insistir más. Es cuestión de entrar por la puerta correcta." },

      { type: "h2", text: "Por qué el decisor es tan difícil de alcanzar" },
      { type: "p", text: "Un gerente de compras recibe decenas de propuestas por semana." },
      { type: "p", text: "Su trabajo no es leerlas todas. Es filtrarlas." },
      { type: "p", text: "El correo frío, la llamada sin contexto y el mensaje genérico se descartan antes de abrirse." },
      { type: "p", text: "No porque tu oferta sea mala. Porque no le diste una razón para prestarte atención." },

      { type: "h2", text: "El primer error: tratar a compras y a RR.HH. por igual" },
      { type: "p", text: "Compras y recursos humanos deciden cosas distintas, con criterios distintos." },
      {
        type: "ul",
        items: [
          "Compras evalúa proveedor, condiciones y riesgo. Le hablas de eficiencia y cumplimiento.",
          "Recursos humanos evalúa el impacto en las personas. Le hablas de talento, bienestar y clima.",
          "Gerencia evalúa el retorno estratégico. Le hablas de crecimiento y resultado.",
        ],
      },
      { type: "p", text: "El mismo mensaje para los tres no le habla bien a ninguno." },

      { type: "h2", text: "Cómo entrar por la puerta correcta" },
      { type: "p", text: "Hay tres vías reales de acceso, en orden de efectividad:" },
      {
        type: "ul",
        items: [
          "Introducción de un tercero de confianza: la más corta. Hereda la credibilidad de quien presenta.",
          "Referencia de un caso conocido: entras validado por un resultado, no por una promesa.",
          "Contacto directo con contexto: si va solo, que sea específico, breve y sobre un problema real del decisor.",
        ],
      },
      { type: "p", text: "Lo que casi nunca funciona: el mensaje masivo sin contexto." },

      { type: "h2", text: "Qué decir cuando llegas" },
      { type: "p", text: "El primer contacto no es para vender. Es para ganar la segunda conversación." },
      { type: "p", text: "Habla del problema del decisor, no de tu catálogo." },
      { type: "p", text: "Sé breve. Un gerente decide en segundos si vale la pena responder." },
      { type: "quote", text: "Nadie compra en el primer correo. Pero muchos descartan en el primero." },

      { type: "h2", text: "Por qué las relaciones existentes cambian el juego" },
      { type: "p", text: "Una introducción de alguien con vínculo real salta la fila." },
      { type: "p", text: "El decisor no te abre la puerta por tu mensaje. Se la abre a quien te presenta." },
      { type: "p", text: "Por eso el acceso al canal corporativo se construye sobre relaciones, no sobre volumen de envíos." },

      { type: "h2", text: "En resumen" },
      { type: "p", text: "Si tu oferta es buena pero no llega a quien decide, no necesitas más insistencia. Necesitas acceso." },
    ],
  },
  {
    slug: "aumentar-ventas-b2b-sin-contratar-vendedores",
    title: "Cómo aumentar las ventas B2B sin contratar más vendedores",
    description:
      "Cuando las ventas se estancan, contratar más vendedores rara vez es la solución. Cómo aumentar las ventas B2B en Ecuador estructurando el sistema comercial, no ampliando el equipo.",
    date: "2026-07-29",
    tag: "Crecimiento Comercial",
    keywords: [
      "aumentar ventas B2B",
      "vender más sin contratar vendedores",
      "arquitectura comercial B2B",
      "estrategia de ventas Ecuador",
    ],
    excerpt:
      "Cuando las ventas bajan, la reacción típica es contratar más vendedores. Casi nunca es la solución. El problema no es la cantidad de gente, es la arquitectura.",
    readingMinutes: 5,
    related: {
      label: "Descubre cómo estructuramos tu crecimiento comercial",
      href: "/como-aumentar-ventas-b2b-ecuador",
    },
    alsoSee: [
      { label: "Consultoría comercial B2B en Quito", href: "/consultoria-comercial-b2b-quito" },
      { label: "Alianzas estratégicas B2B en Ecuador", href: "/alianzas-estrategicas-b2b-ecuador" },
    ],
    body: [
      { type: "p", text: "Cuando las ventas se estancan, la reacción típica es contratar más vendedores." },
      { type: "p", text: "Casi nunca es la solución." },
      { type: "p", text: "El problema rara vez es la cantidad de gente. Es la arquitectura que la sostiene." },

      { type: "h2", text: "Más vendedores no arreglan un sistema roto" },
      { type: "p", text: "Sumar un vendedor a un proceso sin estructura no multiplica ventas. Multiplica el ruido." },
      { type: "p", text: "Cada vendedor nuevo improvisa su propio método, su propio discurso y su propio criterio." },
      { type: "p", text: "El resultado no es más ventas. Es más inconsistencia." },
      { type: "quote", text: "No tienes un problema de equipo. Tienes un problema de arquitectura." },

      { type: "h2", text: "Qué revisar antes de contratar" },
      { type: "p", text: "Antes de sumar personas, revisa el sistema. Tres preguntas:" },
      {
        type: "ul",
        items: [
          "¿Está definido tu cliente ideal, o le vendes a cualquiera que responda?",
          "¿Existe un proceso repetible, o cada venta se cierra de forma distinta?",
          "¿Sabes por qué ganas y por qué pierdes, o es pura intuición?",
        ],
      },
      { type: "p", text: "Si alguna respuesta es 'no', el cuello de botella no es el tamaño del equipo." },

      { type: "h2", text: "Las tres palancas que sí aumentan las ventas" },
      { type: "p", text: "El crecimiento comercial sostenible se apoya en estructura, no en esfuerzo." },
      {
        type: "ul",
        items: [
          "Foco: concentrar el esfuerzo en el cliente correcto, no en todos.",
          "Proceso: un sistema repetible que cualquier vendedor pueda ejecutar igual.",
          "Medición: saber qué funciona para repetirlo y qué no para corregirlo.",
        ],
      },
      { type: "p", text: "Con esas tres, el mismo equipo vende más. Sin ellas, diez vendedores más solo aceleran el desorden." },

      { type: "h2", text: "Cuándo sí conviene contratar" },
      { type: "p", text: "Contratar tiene sentido cuando el sistema ya funciona y el único límite es la capacidad." },
      { type: "p", text: "Ahí, cada vendedor nuevo entra a un proceso probado y produce rápido." },
      { type: "p", text: "Primero la estructura. Después el equipo. Nunca al revés." },

      { type: "h2", text: "En resumen" },
      { type: "p", text: "Si tus ventas no crecen, la pregunta no es cuántos vendedores te faltan. Es qué estructura te falta." },
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
