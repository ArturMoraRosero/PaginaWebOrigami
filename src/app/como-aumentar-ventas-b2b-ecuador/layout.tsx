import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo aumentar ventas B2B en Ecuador",
  description: "Aprenda cómo aumentar ventas B2B en Ecuador con nuestra guía práctica. Tácticas de prospección, procesos comerciales y cierre de negocios de alto impacto.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/como-aumentar-ventas-b2b-ecuador",
  },
  keywords: ["cómo aumentar ventas B2B en Ecuador", "estrategas comerciales B2B", "incrementar facturación empresas Ecuador", "procesos de venta técnica", "consultoría de ventas B2B"],
  openGraph: {
    title: "Cómo aumentar ventas B2B en Ecuador | Origami Strategy",
    description: "Aprenda cómo aumentar ventas B2B en Ecuador con nuestra guía práctica. Tácticas de prospección, procesos comerciales y cierre de negocios de alto impacto.",
    url: "https://www.oriconsultoria.com/como-aumentar-ventas-b2b-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "article",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
