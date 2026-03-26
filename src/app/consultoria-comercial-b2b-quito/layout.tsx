import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría Comercial B2B en Quito",
  description: "Líderes en consultoría comercial B2B en Quito. Ayudamos a empresas a escalar su facturación mediante estrategias de ventas y expansión regional. Contáctenos.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/consultoria-comercial-b2b-quito",
  },
  keywords: ["consultoría comercial B2B Quito", "estrategia de ventas B2B Ecuador", "expansión comercial Quito", "desarrollo de negocios B2B"],
  openGraph: {
    title: "Consultoría Comercial B2B en Quito | Origami Strategy",
    description: "Líderes en consultoría comercial B2B en Quito. Ayudamos a empresas a escalar su facturación mediante estrategias de ventas y expansión regional. Contáctenos.",
    url: "https://www.oriconsultoria.com/consultoria-comercial-b2b-quito",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
