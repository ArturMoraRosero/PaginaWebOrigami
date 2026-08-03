import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — Origami Consulting Group, firma boutique de estrategia en Quito",
  description:
    "Origami Consulting Group S.A.S. es una firma boutique de consultoría estratégica con sede en Quito, Ecuador. Quiénes somos, dónde operamos, cómo trabajamos y con qué empresas.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/nosotros",
  },
  keywords: [
    "Origami Consulting Group",
    "Origami Consulting Group Quito",
    "Origami Consulting Group Ecuador",
    "consultora boutique estrategia Quito",
    "firma de consultoría estratégica Ecuador",
  ],
  openGraph: {
    title: "Nosotros — Origami Consulting Group (Quito, Ecuador)",
    description:
      "Firma boutique de consultoría estratégica con sede en Quito. Estructuramos el crecimiento comercial B2B de empresas medianas y grandes en Ecuador y Latinoamérica.",
    url: "https://www.oriconsultoria.com/nosotros",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
