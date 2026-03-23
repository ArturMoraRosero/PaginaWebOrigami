import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría Comercial B2B en Quito | Origami Consulting",
  description: "Especialistas en consultoría comercial B2B en Quito. Ayudamos a empresas industriales y de servicios a escalar su facturación y alianzas estratégicas.",
  alternates: {
    canonical: "https://oriconsultoria.com/consultoria-comercial-b2b-quito",
  },
  keywords: ["consultoría comercial B2B Quito", "estrategia de ventas B2B Ecuador", "expansión comercial Quito", "desarrollo de negocios B2B"],
  openGraph: {
    title: "Consultoría Comercial B2B en Quito | Origami Consulting",
    description: "Estrategias de alto impacto para el crecimiento comercial B2B en Quito.",
    url: "https://oriconsultoria.com/consultoria-comercial-b2b-quito",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
