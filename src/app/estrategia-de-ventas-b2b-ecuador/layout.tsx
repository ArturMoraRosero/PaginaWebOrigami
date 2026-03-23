import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estrategia de Ventas B2B en Ecuador | Origami Consulting",
  description: "Diseñamos estrategias de ventas B2B efectivas para empresas en Ecuador. Optimización de procesos comerciales, pipeline y KPIs para un crecimiento sostenible.",
  alternates: {
    canonical: "https://oriconsultoria.com/estrategia-de-ventas-b2b-ecuador",
  },
  keywords: ["estrategia de ventas B2B en Ecuador", "procesos comerciales B2B", "pipeline de ventas Ecuador", "consultoría comercial estratégica"],
  openGraph: {
    title: "Estrategia de Ventas B2B en Ecuador | Origami Consulting",
    description: "Estructurando el éxito comercial de empresas B2B en todo el Ecuador.",
    url: "https://oriconsultoria.com/estrategia-de-ventas-b2b-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
