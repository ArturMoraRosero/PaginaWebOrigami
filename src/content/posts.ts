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
    slug: "por-que-el-equipo-comercial-no-cumple-la-meta",
    title: "Por qué su equipo comercial no cumple la meta (aunque trabaja duro)",
    description:
      "Cuando el equipo comercial no cumple la meta mes tras mes, el problema casi nunca es el esfuerzo. Las cuatro causas estructurales más comunes en empresas B2B de Ecuador y cómo identificar la suya.",
    date: "2026-10-11",
    tag: "Sistema Comercial",
    keywords: [
      "por qué mi equipo comercial no cumple la meta",
      "equipo de ventas no cumple la meta",
      "bajo rendimiento equipo comercial B2B",
      "estructura comercial Ecuador",
    ],
    excerpt:
      "Cuando la meta no se cumple, la reacción típica es exigir más esfuerzo. Funciona un mes. El problema casi nunca es la voluntad del equipo. Es la estructura que lo sostiene.",
    readingMinutes: 6,
    related: {
      label: "Conozca cómo rediseñamos el sistema comercial",
      href: "/rediseno-sistema-comercial-ecuador",
    },
    alsoSee: [
      { label: "Estrategia de ventas B2B en Ecuador", href: "/estrategia-de-ventas-b2b-ecuador" },
      { label: "Consultoría comercial B2B en Quito", href: "/consultoria-comercial-b2b-quito" },
    ],
    body: [
      { type: "p", text: "Respuesta corta: casi nunca es falta de esfuerzo. Es falta de estructura." },
      { type: "p", text: "Cuando un equipo comercial no cumple la meta mes tras mes, la falla suele estar en una de cuatro capas: la meta, los roles, el proceso o los incentivos." },
      { type: "p", text: "Este artículo explica cómo identificar cuál está fallando antes de exigir más llamadas." },

      { type: "h2", text: "La reacción habitual: pedir más esfuerzo" },
      { type: "p", text: "Muchas empresas responden a una meta incumplida con presión: más visitas, más llamadas, más reportes." },
      { type: "p", text: "Funciona un mes. Después el resultado vuelve al mismo nivel." },
      { type: "p", text: "El esfuerzo no compensa un sistema mal diseñado. Solo lo desgasta." },
      { type: "quote", text: "Su equipo no tiene un problema de esfuerzo. Tiene un problema de estructura." },

      { type: "h2", text: "Causa 1: la meta no se construyó desde el pipeline" },
      { type: "p", text: "Muchas metas se fijan desde arriba: lo que se vendió el año pasado más un porcentaje." },
      { type: "p", text: "Una meta útil se construye al revés. Parte del cierre esperado y calcula cuántas oportunidades hacen falta en cada etapa para llegar." },
      {
        type: "ul",
        items: [
          "Si la meta exige más oportunidades de las que el equipo puede generar, no es una meta. Es un deseo.",
          "Si nadie conoce la tasa de conversión entre etapas, la meta no tiene base.",
        ],
      },

      { type: "h2", text: "Causa 2: los roles están mezclados" },
      { type: "p", text: "Un mismo vendedor prospecta, cotiza, cierra, cobra y atiende reclamos." },
      { type: "p", text: "El resultado es predecible. Atiende lo urgente, que es la cuenta actual, y abandona lo importante, que es la cuenta nueva." },
      { type: "p", text: "La prospección es lo primero que se sacrifica. Y es lo que llena el pipeline de los próximos meses." },

      { type: "h2", text: "Causa 3: no hay un proceso, hay estilos" },
      { type: "p", text: "Cuando cada vendedor califica, presenta y hace seguimiento a su manera, el resultado depende de quién atienda la cuenta." },
      { type: "p", text: "Eso explica por qué una o dos personas sostienen el mes y el resto no." },
      { type: "p", text: "Sin etapas definidas y criterios claros para pasar de una a otra, no hay forma de saber dónde se pierden las ventas." },

      { type: "h2", text: "Causa 4: los incentivos premian otra cosa" },
      { type: "p", text: "El equipo hace lo que el esquema de compensación premia." },
      { type: "p", text: "Si la comisión solo paga el cierre del mes, nadie invierte tiempo en cuentas que cerrarán en seis meses. Si paga volumen sin mirar margen, el equipo descuenta para cerrar." },
      { type: "p", text: "Un incentivo mal diseñado no desmotiva. Dirige el esfuerzo hacia el lugar equivocado." },

      { type: "h2", text: "Cómo saber cuál es su caso" },
      { type: "p", text: "Cuatro preguntas para la alta dirección:" },
      {
        type: "ul",
        items: [
          "¿Puede explicar con números de dónde sale la meta de este mes?",
          "¿Cuántas horas a la semana dedica cada vendedor a prospectar cuentas nuevas?",
          "¿En qué etapa del proceso se pierde la mayoría de oportunidades?",
          "¿Qué comportamiento paga hoy su esquema de comisiones, además del cierre?",
        ],
      },
      { type: "p", text: "Si alguna respuesta es 'no lo sé', ahí empieza el diagnóstico." },

      { type: "h2", text: "En resumen" },
      { type: "p", text: "Un equipo que no cumple la meta rara vez necesita más presión, más capacitación o más vendedores." },
      { type: "p", text: "Necesita una estructura que haga el resultado predecible." },
      { type: "p", text: "Origami Consulting Group acompaña a empresas B2B en Ecuador en el rediseño de su sistema comercial: roles, proceso e incentivos." },
    ],
  },
  {
    slug: "como-estructurar-un-equipo-comercial-b2b-en-ecuador",
    title: "Cómo estructurar un equipo comercial B2B en Ecuador",
    description:
      "Guía para estructurar un equipo comercial B2B en Ecuador en tres capas: roles y territorios, proceso comercial e incentivos. Qué decidir en cada una, en qué orden y qué errores evitar.",
    date: "2026-10-11",
    tag: "Sistema Comercial",
    keywords: [
      "cómo estructurar un equipo comercial B2B",
      "estructura de equipo de ventas Ecuador",
      "organizar área comercial B2B",
      "roles equipo comercial",
    ],
    excerpt:
      "Un equipo comercial B2B se estructura en tres capas: roles, proceso e incentivos. Se diseñan juntas. Cambiar una sin las otras dos genera fricción.",
    readingMinutes: 7,
    related: {
      label: "Conozca cómo rediseñamos el sistema comercial",
      href: "/rediseno-sistema-comercial-ecuador",
    },
    alsoSee: [
      { label: "Estrategia de ventas B2B en Ecuador", href: "/estrategia-de-ventas-b2b-ecuador" },
      { label: "Cómo aumentar ventas B2B en Ecuador", href: "/como-aumentar-ventas-b2b-ecuador" },
    ],
    body: [
      { type: "p", text: "Un equipo comercial B2B se estructura en tres capas: roles y territorios, proceso comercial e incentivos." },
      { type: "p", text: "Las tres se diseñan juntas. Cambiar una sin las otras dos genera fricción." },
      { type: "p", text: "Esta guía explica qué decidir en cada capa y en qué orden." },

      { type: "h2", text: "Antes de estructurar: definir a quién se le vende" },
      { type: "p", text: "Ninguna estructura funciona si el equipo le vende a cualquiera que responda." },
      { type: "p", text: "El punto de partida es el cliente ideal: sector, tamaño, tipo de compra y quién decide." },
      { type: "p", text: "De ahí salen el número de cuentas por vendedor, el perfil que hace falta y la duración real del ciclo." },

      { type: "h2", text: "Capa 1: roles y territorios" },
      { type: "p", text: "La primera decisión es quién hace qué." },
      { type: "p", text: "En un equipo B2B pequeño o mediano, la separación mínima suele ser entre quien abre cuentas nuevas y quien desarrolla las existentes." },
      {
        type: "ul",
        items: [
          "Apertura: prospecta, califica y abre cuentas nuevas.",
          "Desarrollo de cuentas: mantiene, amplía y renueva la cartera actual.",
          "Soporte comercial: cotizaciones, seguimiento administrativo y datos.",
        ],
      },
      { type: "p", text: "Después vienen los territorios. La división geográfica sola rara vez basta en B2B: dos vendedores en la misma ciudad terminan compitiendo por la misma cuenta." },
      { type: "p", text: "Combinarla con sector o tamaño de cuenta evita ese cruce. La regla básica: cada cuenta tiene un solo responsable." },

      { type: "h2", text: "Capa 2: proceso comercial" },
      { type: "p", text: "El proceso define las etapas por las que pasa una oportunidad y qué tiene que ocurrir para avanzar." },
      {
        type: "ul",
        items: [
          "Prospecto identificado.",
          "Primer contacto con quien decide.",
          "Necesidad calificada.",
          "Propuesta presentada.",
          "Negociación.",
          "Cierre o pérdida, con el motivo registrado.",
        ],
      },
      { type: "p", text: "Lo importante no son los nombres de las etapas. Son los criterios de paso: qué evidencia hace falta para mover una oportunidad a la siguiente." },
      { type: "p", text: "Con criterios claros, el pipeline deja de ser una lista de esperanzas. Se convierte en un pronóstico." },

      { type: "h2", text: "Capa 3: incentivos" },
      { type: "p", text: "El esquema de compensación debe pagar el comportamiento que el proceso necesita." },
      {
        type: "ul",
        items: [
          "Una parte fija que permita invertir tiempo en ciclos largos.",
          "Una parte variable atada al cierre y al margen, no solo al volumen.",
          "Un componente por hitos cuando el ciclo es largo: cuentas nuevas abiertas, oportunidades calificadas.",
        ],
      },
      { type: "p", text: "Si el proceso pide prospectar y la comisión solo paga el cierre, gana la comisión." },

      { type: "h2", text: "En qué orden implementarlo" },
      {
        type: "ul",
        items: [
          "Diagnosticar la estructura actual: los roles, el proceso y los incentivos reales, no los del organigrama.",
          "Diseñar las tres capas a la medida del ciclo de venta de la empresa.",
          "Probar con una parte del equipo o una línea de producto.",
          "Ajustar y desplegar al resto del equipo.",
          "Revisar indicadores cada trimestre.",
        ],
      },

      { type: "h2", text: "Errores frecuentes" },
      {
        type: "ul",
        items: [
          "Copiar la estructura de una empresa grande a un equipo de cinco personas.",
          "Diseñar el proceso en una presentación y no en la herramienta que el equipo usa a diario.",
          "Cambiar las comisiones sin aviso ni periodo de transición.",
          "Contratar antes de tener el proceso definido.",
        ],
      },

      { type: "h2", text: "En resumen" },
      { type: "p", text: "Estructurar un equipo comercial es decidir quién vende qué, con qué proceso y bajo qué incentivos." },
      { type: "p", text: "Primero la estructura. Después la escala." },
      { type: "p", text: "Origami Consulting Group acompaña a empresas B2B en Ecuador en el rediseño de su sistema comercial, desde el diagnóstico hasta la implementación." },
    ],
  },
  {
    slug: "incentivos-comerciales-que-si-funcionan-b2b",
    title: "Incentivos comerciales que sí funcionan en ventas B2B",
    description:
      "Por qué la comisión pura por cierre falla en ventas B2B y cómo diseñar un esquema de incentivos comerciales que pague el comportamiento correcto: margen, prospección y cuentas nuevas.",
    date: "2026-10-11",
    tag: "Sistema Comercial",
    keywords: [
      "incentivos comerciales B2B",
      "esquema de comisiones vendedores",
      "comisiones equipo de ventas Ecuador",
      "compensación variable ventas",
    ],
    excerpt:
      "Un buen esquema de incentivos no es el que paga más. Es el que paga el comportamiento correcto. En B2B, comisionar solo el cierre del mes suele producir el efecto contrario.",
    readingMinutes: 6,
    related: {
      label: "Conozca cómo rediseñamos el sistema comercial",
      href: "/rediseno-sistema-comercial-ecuador",
    },
    alsoSee: [
      { label: "Estrategia de ventas B2B en Ecuador", href: "/estrategia-de-ventas-b2b-ecuador" },
      { label: "Consultoría comercial B2B en Quito", href: "/consultoria-comercial-b2b-quito" },
    ],
    body: [
      { type: "p", text: "Un buen esquema de incentivos no es el que paga más. Es el que paga el comportamiento correcto." },
      { type: "p", text: "En ventas B2B, con ciclos largos y pocas cuentas grandes, comisionar solo el cierre del mes suele producir el efecto contrario al buscado." },

      { type: "h2", text: "Por qué la comisión pura por cierre falla en B2B" },
      { type: "p", text: "En la venta al consumidor, el ciclo es corto y el esfuerzo se refleja rápido en el cierre." },
      { type: "p", text: "En B2B, una cuenta puede tardar meses en cerrar. Si solo se paga el cierre, el vendedor prioriza lo que cierra este mes." },
      {
        type: "ul",
        items: [
          "Abandona la prospección, que paga dentro de un semestre.",
          "Descuenta para adelantar cierres y erosiona el margen.",
          "Disputa cuentas con sus compañeros en lugar de abrir nuevas.",
        ],
      },
      { type: "quote", text: "El equipo no hace lo que se le pide. Hace lo que se le paga." },

      { type: "h2", text: "Cinco principios de un esquema que funciona" },
      {
        type: "ul",
        items: [
          "Alinear con la estrategia: si el objetivo es abrir cuentas nuevas, la cuenta nueva debe pagar más que la renovación.",
          "Pagar margen, no solo volumen: una venta con descuento excesivo no debería comisionar igual que una a precio completo.",
          "Combinar resultado y actividad cuando el ciclo es largo: reconocer oportunidades calificadas, no solo cierres.",
          "Mantenerlo simple: si el vendedor no puede calcular su comisión en un minuto, el esquema no dirige su conducta.",
          "Medir por persona y por equipo: el componente colectivo reduce la competencia interna por cuentas.",
        ],
      },

      { type: "h2", text: "Una estructura de referencia" },
      { type: "p", text: "No existe una fórmula universal. Un punto de partida razonable para equipos B2B tiene tres componentes:" },
      {
        type: "ul",
        items: [
          "Fijo: cubre el tiempo que exige un ciclo de venta largo.",
          "Variable por resultado: atado a ventas cerradas y ajustado por margen.",
          "Variable por hitos: cuentas nuevas activadas u oportunidades que llegan a propuesta.",
        ],
      },
      { type: "p", text: "La proporción entre fijo y variable depende de la duración del ciclo. Cuanto más largo el ciclo, más peso necesita el fijo." },

      { type: "h2", text: "Señales de que su esquema actual está mal diseñado" },
      {
        type: "ul",
        items: [
          "La prospección cae cada vez que se acerca el cierre de mes.",
          "Los descuentos se concentran en los últimos días del mes.",
          "Dos vendedores reclaman la misma cuenta.",
          "Una o dos personas cumplen siempre y el resto nunca se acerca a la meta.",
        ],
      },

      { type: "h2", text: "Cómo cambiar el esquema sin romper el equipo" },
      {
        type: "ul",
        items: [
          "Diseñar el nuevo esquema junto con el proceso comercial, no por separado.",
          "Simular con datos de los últimos meses cuánto habría ganado cada vendedor.",
          "Comunicar con anticipación y explicar el porqué.",
          "Aplicar un periodo de transición antes del esquema definitivo.",
        ],
      },

      { type: "h2", text: "En resumen" },
      { type: "p", text: "Los incentivos no motivan. Dirigen." },
      { type: "p", text: "Diseñarlos es decidir hacia dónde va el esfuerzo del equipo comercial." },
      { type: "p", text: "Origami Consulting Group diseña esquemas de incentivos como parte del rediseño del sistema comercial de empresas B2B en Ecuador." },
    ],
  },
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
