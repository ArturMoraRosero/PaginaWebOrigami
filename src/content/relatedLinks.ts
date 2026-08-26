/**
 * Mapa de enlazado interno entre landings de servicio y artículos de Insights.
 *
 * SEO: hasta agosto de 2026 las cinco landings comerciales no se enlazaban
 * entre sí — el único puente era el footer, que Google pondera bajo por ser
 * sitewide. Eso dejaba cinco páginas compitiendo por autoridad en vez de
 * acumularla. Este mapa centraliza los enlaces contextuales para que el texto
 * de anclaje sea descriptivo (no "ver más") y la distribución quede pareja:
 * cada landing recibe al menos un enlace editorial desde otra.
 *
 * Regla al agregar una landing nueva: darla de alta aquí Y agregarla como
 * destino en al menos dos entradas existentes. Una landing que solo enlaza
 * hacia afuera no acumula autoridad.
 */

export type RelatedLink = {
  /** Texto de anclaje. Debe describir el destino, nunca "ver más" o "aquí". */
  label: string;
  href: string;
  /** Una línea de contexto. Da señal semántica al enlace. */
  desc: string;
};

export type RelatedGroup = {
  services: RelatedLink[];
  insights: RelatedLink[];
};

const L = {
  quito: {
    label: "Consultoría comercial B2B en Quito",
    href: "/consultoria-comercial-b2b-quito",
    desc: "Arquitectura de prospección y estructuración del área comercial para empresas con operación en Quito.",
  },
  estrategia: {
    label: "Estrategia de ventas B2B en Ecuador",
    href: "/estrategia-de-ventas-b2b-ecuador",
    desc: "Diseño del proceso comercial: perfil de cliente, etapas de pipeline e indicadores de gestión.",
  },
  alianzas: {
    label: "Alianzas estratégicas B2B en Ecuador",
    href: "/alianzas-estrategicas-b2b-ecuador",
    desc: "Estructuramos partners que generan demanda sin depender del equipo de ventas directo.",
  },
  aumentar: {
    label: "Cómo aumentar ventas B2B en Ecuador",
    href: "/como-aumentar-ventas-b2b-ecuador",
    desc: "Qué revisar antes de ampliar el equipo: procesos, pipeline y criterios de calificación.",
  },
  canal: {
    label: "Acceso al canal corporativo B2B",
    href: "/acceso-canal-corporativo-b2b-ecuador",
    desc: "Conectamos su oferta con los tomadores de decisión de las grandes empresas del país.",
  },
  rediseno: {
    label: "Rediseño del sistema comercial en Ecuador",
    href: "/rediseno-sistema-comercial-ecuador",
    desc: "Estructura de roles, proceso comercial e incentivos para equipos B2B. No es capacitación.",
  },
} as const satisfies Record<string, RelatedLink>;

const I = {
  canalCorporativo: {
    label: "Cómo vender al canal corporativo en Ecuador",
    href: "/insights/como-vender-al-canal-corporativo-ecuador",
    desc: "Los cinco filtros que atraviesa una propuesta antes de llegar a quien decide.",
  },
  gerentes: {
    label: "Cómo llegar a gerentes de compras y de RR. HH.",
    href: "/insights/como-llegar-a-gerentes-de-compras-y-rrhh",
    desc: "Rutas de entrada a las gerencias que aprueban presupuesto en empresas grandes.",
  },
  sinVendedores: {
    label: "Cómo aumentar las ventas B2B sin contratar más vendedores",
    href: "/insights/aumentar-ventas-b2b-sin-contratar-vendedores",
    desc: "Primero la estructura. Después el equipo. Nunca al revés.",
  },
} as const satisfies Record<string, RelatedLink>;

/** Enlaces relacionados por ruta de landing (sin barra final). */
export const relatedByPath: Record<string, RelatedGroup> = {
  "/consultoria-comercial-b2b-quito": {
    services: [L.estrategia, L.canal, L.rediseno],
    insights: [I.sinVendedores],
  },
  "/estrategia-de-ventas-b2b-ecuador": {
    services: [L.quito, L.aumentar, L.rediseno],
    insights: [I.sinVendedores],
  },
  "/rediseno-sistema-comercial-ecuador": {
    services: [L.quito, L.estrategia],
    insights: [I.sinVendedores],
  },
  "/alianzas-estrategicas-b2b-ecuador": {
    services: [L.canal, L.quito],
    insights: [I.canalCorporativo],
  },
  "/como-aumentar-ventas-b2b-ecuador": {
    services: [L.estrategia, L.alianzas],
    insights: [I.gerentes],
  },
  "/acceso-canal-corporativo-b2b-ecuador": {
    services: [L.alianzas, L.quito],
    insights: [I.canalCorporativo, I.gerentes],
  },
};

export function getRelated(path: string): RelatedGroup | undefined {
  return relatedByPath[path];
}
