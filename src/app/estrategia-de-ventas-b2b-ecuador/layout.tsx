import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estrategia de Ventas B2B en Ecuador",
  description: "Diseñamos estrategias de ventas B2B de alto rendimiento en Ecuador. Optimice sus procesos, pipeline y KPIs para lograr un crecimiento sostenible. Agende ahora.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/estrategia-de-ventas-b2b-ecuador",
  },
  keywords: ["estrategia de ventas B2B en Ecuador", "procesos comerciales B2B", "pipeline de ventas Ecuador", "consultoría comercial estratégica"],
  openGraph: {
    title: "Estrategia de Ventas B2B en Ecuador | Origami Strategy",
    description: "Diseñamos estrategias de ventas B2B de alto rendimiento en Ecuador. Optimice sus procesos, pipeline y KPIs para lograr un crecimiento sostenible. Agende ahora.",
    url: "https://www.oriconsultoria.com/estrategia-de-ventas-b2b-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
