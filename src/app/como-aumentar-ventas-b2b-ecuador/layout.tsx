import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo aumentar ventas B2B en Ecuador | Guía práctica | Origami Consulting",
  description: "Descubra estrategias efectivas sobre cómo aumentar ventas B2B en Ecuador. Guía completa con tácticas de prospección, procesos comerciales y optimización de cierres.",
  alternates: {
    canonical: "https://oriconsultoria.com/como-aumentar-ventas-b2b-ecuador",
  },
  keywords: ["cómo aumentar ventas B2B en Ecuador", "estrategas comerciales B2B", "incrementar facturación empresas Ecuador", "procesos de venta técnica", "consultoría de ventas B2B"],
  openGraph: {
    title: "Cómo aumentar ventas B2B en Ecuador | Guía práctica",
    description: "Estrategias accionables para elevar el rendimiento comercial de su empresa en el mercado regional.",
    url: "https://oriconsultoria.com/como-aumentar-ventas-b2b-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "article",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
