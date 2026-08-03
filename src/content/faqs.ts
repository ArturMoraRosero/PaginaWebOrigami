import type { Faq } from "@/lib/schema";

/**
 * Preguntas frecuentes por landing.
 *
 * Criterio GEO: cada pregunta está escrita como la formula un CEO en un motor
 * de búsqueda o en un chat con IA. Cada respuesta abre respondiendo — sin
 * preámbulo — y es autosuficiente fuera de contexto, porque un modelo la va a
 * citar sola.
 *
 * Registro: entregables y web (ejecutivo, austero, voz activa).
 */

/** Fecha de última revisión editorial de los bloques FAQ. */
export const FAQ_UPDATED_AT = "2026-08-02";

export const faqsHome: Faq[] = [
  {
    q: "¿Qué hace Origami Consulting Group?",
    a: "Origami Consulting Group es una firma boutique de consultoría estratégica con base en Quito, Ecuador. Estructuramos el crecimiento comercial B2B de empresas medianas y grandes en cuatro frentes: modelo comercial, alianzas estratégicas, acceso al canal corporativo y valoración estratégica de marca. Acompañamos a CEOs y alta dirección desde el diagnóstico hasta la implementación.",
  },
  {
    q: "¿En qué se diferencia una firma boutique de una consultora grande?",
    a: "En quién ejecuta. En una consultora grande, el socio que vende rara vez es el que trabaja el proyecto, y el entregable suele terminar en un diagnóstico. En Origami el equipo que diseña la estrategia es el que la acompaña hasta la implementación. Menos clientes simultáneos, atención directa de socios y responsabilidad sobre el resultado, no sobre el documento.",
  },
  {
    q: "¿Con qué tipo de empresas trabaja Origami?",
    a: "Trabajamos con empresas que ya tienen producto y facturación, pero cuyo crecimiento depende de referidos, relaciones personales o del esfuerzo de una persona. Principalmente tecnología y software, industria y manufactura, firmas de servicios profesionales y corporaciones en expansión regional, con operación en Ecuador.",
  },
  {
    q: "¿Origami atiende fuera de Quito?",
    a: "Sí. La base estratégica está en Quito, donde se concentran los centros de decisión corporativa del país, y acompañamos procesos en todo Ecuador y en expansión regional en Latinoamérica. El trabajo combina sesiones presenciales con acompañamiento remoto.",
  },
  {
    q: "¿Cómo empieza un proyecto con Origami?",
    a: "Empieza con una conversación estratégica sin costo. En esa sesión revisamos la situación comercial actual, identificamos dónde se rompe el crecimiento y definimos si hay un caso de trabajo. Si lo hay, sigue un Diagnóstico Ejecutivo: la primera de las cinco etapas del Modelo de Activación Estratégica.",
  },
];

export const faqsQuito: Faq[] = [
  {
    q: "¿Cuánto cuesta una consultoría comercial B2B en Quito?",
    a: "El costo depende del alcance y de la duración del acompañamiento, no de una tarifa por hora. En el mercado ecuatoriano un proyecto de estructuración comercial con acompañamiento en la implementación se cotiza por retainer mensual o por proyecto con hitos. Origami define el rango en la conversación inicial, después de entender el tamaño del equipo comercial y la meta de facturación.",
  },
  {
    q: "¿Cuándo conviene contratar una consultoría comercial en lugar de un gerente comercial?",
    a: "Conviene cuando el problema es de arquitectura, no de ejecución diaria. Un gerente comercial opera un sistema que ya existe. Una consultoría diseña ese sistema cuando aún no existe o dejó de funcionar. En la práctica, muchas empresas contratan gerentes que heredan un modelo comercial sin estructura y rotan en menos de un año.",
  },
  {
    q: "¿Cuánto tarda en verse resultados una consultoría comercial B2B?",
    a: "Los cambios de proceso se ven en 30 a 60 días: pipeline visible, cadencia de contacto y métricas de gestión. El impacto en facturación depende del ciclo de venta de cada industria; en B2B ecuatoriano ese ciclo suele ir de 3 a 9 meses, de modo que el efecto en ingresos se mide a partir del segundo trimestre de trabajo.",
  },
  {
    q: "¿Qué empresas de Quito necesitan consultoría comercial B2B?",
    a: "Las que tienen ciclos de venta largos y sin previsibilidad, dependencia de referidos, o un equipo comercial que compite por precio en lugar de por margen. Es habitual en empresas de tecnología y software, industria y manufactura, y firmas de servicios profesionales que crecieron por relaciones y llegaron a su techo.",
  },
];

export const faqsEstrategiaVentas: Faq[] = [
  {
    q: "¿Qué es una estrategia de ventas B2B y qué debe incluir?",
    a: "Una estrategia de ventas B2B define a quién se le vende, con qué argumento, por qué canal y con qué cadencia. Debe incluir cuatro piezas: perfil de cliente ideal con criterios de calificación, propuesta de valor diferenciada por segmento, arquitectura de pipeline con etapas y criterios de avance, y métricas de gestión que anticipen el resultado en lugar de reportarlo tarde.",
  },
  {
    q: "¿Por qué falla la estrategia comercial de muchas empresas en Ecuador?",
    a: "Porque confunden esfuerzo con sistema. El error más común es depender exclusivamente de referidos y relaciones personales sin un mecanismo de prospección directa que sea predecible. Cuando el mercado se contrae o la persona que tenía las relaciones se va, la facturación cae con ella.",
  },
  {
    q: "¿Se puede tener un pipeline predecible con un equipo comercial pequeño?",
    a: "Sí. La predictibilidad depende de la disciplina del proceso, no del tamaño del equipo. Un equipo de dos o tres personas con perfil de cliente definido, cadencia de contacto documentada y etapas de pipeline con criterios claros produce proyecciones más confiables que un equipo grande sin estructura.",
  },
  {
    q: "¿Qué métricas comerciales debe revisar un CEO cada semana?",
    a: "Cuatro: número de conversaciones nuevas iniciadas, valor del pipeline por etapa, tasa de conversión entre etapas y tiempo promedio de ciclo. Las tres primeras anticipan la facturación de los próximos meses. Revisar solo ventas cerradas es revisar el pasado.",
  },
];

export const faqsAlianzas: Faq[] = [
  {
    q: "¿Qué es una alianza estratégica B2B?",
    a: "Es un acuerdo entre dos organizaciones para acceder a mercados, canales o capacidades que ninguna alcanza sola con la misma eficiencia. A diferencia de un acuerdo comercial puntual, una alianza estratégica define aporte de cada parte, gobierno de la relación, métricas compartidas y condiciones de salida.",
  },
  {
    q: "¿Cómo identificar al aliado correcto para expandir un negocio?",
    a: "El aliado correcto le vende al mismo cliente que usted quiere, sin competir por el mismo presupuesto. El criterio de selección es la complementariedad: audiencia compartida, oferta no sustituta y capacidad real de ejecución. Un aliado con buena marca pero sin capacidad de ejecutar produce una alianza de anuncio, no de resultado.",
  },
  {
    q: "¿Por qué fracasan la mayoría de alianzas comerciales?",
    a: "Porque se firman sin estructura. Fracasan cuando no hay un responsable con nombre en cada organización, no hay métricas compartidas y no hay una cadencia de revisión. La alianza queda en un memorando y sin operación. La estructura es lo que convierte la intención en volumen.",
  },
  {
    q: "¿Cuánto tarda en producir resultados una alianza estratégica?",
    a: "El diseño y la negociación toman entre 4 y 12 semanas según el tamaño del contraparte. Los primeros resultados comerciales aparecen normalmente en el segundo o tercer trimestre desde la firma, cuando ya hay operación conjunta y no solo acuerdo.",
  },
];

export const faqsCanalCorporativo: Faq[] = [
  {
    q: "¿Cómo vender un producto o servicio al canal corporativo en Ecuador?",
    a: "Se vende accediendo a quien decide, no a quien atiende. En el canal corporativo ecuatoriano el ingreso se estructura en tres pasos: identificar la gerencia que tiene el presupuesto —normalmente compras, recursos humanos o la gerencia de la unidad—, presentar la oferta en el formato que esa gerencia evalúa, y sostener la relación durante un ciclo de decisión que rara vez baja de tres meses.",
  },
  {
    q: "¿Cómo llegar a gerentes de compras y de recursos humanos de grandes empresas?",
    a: "Por referencia estructurada o por una propuesta que resuelva un indicador que esa gerencia ya está midiendo. Los gerentes de compras responden a costo total y continuidad de suministro; los de recursos humanos, a rotación, clima y beneficio percibido por el colaborador. Un mensaje genérico no pasa el primer filtro; uno que nombre su indicador, sí.",
  },
  {
    q: "¿Qué requisitos pide una empresa grande para incorporar un nuevo proveedor?",
    a: "Habitualmente: calificación como proveedor con documentación legal y tributaria al día, capacidad demostrable de volumen, condiciones de crédito, referencias de clientes comparables y, en muchos casos, cumplimiento de políticas de seguridad y de compliance. El cuello de botella no suele ser el precio: es la calificación.",
  },
  {
    q: "¿Qué ventaja da un intermediario estratégico para entrar al canal corporativo?",
    a: "Acceso y tiempo. Un intermediario con relaciones ya construidas acorta el ciclo de la primera conversación, presenta la oferta en el lenguaje de la gerencia que decide y evita el desgaste de una prospección en frío que en corporativo tiene tasas de respuesta muy bajas. El costo se compara contra los meses de equipo comercial que ahorra.",
  },
];

export const faqsAumentarVentas: Faq[] = [
  {
    q: "¿Cómo aumentar las ventas B2B sin contratar más vendedores?",
    a: "Aumentando la conversión del pipeline que ya existe. Tres palancas ordenadas por retorno: concentrar el esfuerzo en el perfil de cliente más rentable en lugar de atender todo; documentar la cadencia de seguimiento, porque la mayor pérdida de negocios en B2B ocurre por falta de contacto y no por precio; y elevar el ticket promedio con oferta estructurada por segmento. Contratar más vendedores sobre un sistema sin estructura multiplica el costo, no los ingresos.",
  },
  {
    q: "¿Cuál es el error más común en las ventas B2B en Ecuador?",
    a: "Depender exclusivamente de referidos y relaciones personales sin un sistema escalable de prospección directa. Funciona mientras el mercado crece y la persona con las relaciones sigue en la empresa. Deja de funcionar exactamente cuando más se necesita.",
  },
  {
    q: "¿Sirve un CRM para aumentar las ventas B2B?",
    a: "Sirve como consecuencia, no como causa. Un CRM ordena y hace visible un proceso comercial que ya está definido. Implementarlo sin haber definido etapas, criterios de avance y responsables produce una base de datos cara que nadie actualiza. Primero la arquitectura, después la herramienta.",
  },
  {
    q: "¿Cómo dejar de competir por precio en una venta B2B?",
    a: "Cambiando el criterio de comparación. Mientras la conversación gire sobre el producto, el comprador compara precio. Cuando gira sobre el costo total, el riesgo de operación o el indicador que esa gerencia debe cumplir, la comparación cambia y el precio deja de ser la única variable. Esto exige una propuesta de valor construida por segmento, no un descuento.",
  },
];
