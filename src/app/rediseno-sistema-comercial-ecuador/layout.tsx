import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rediseño del Sistema Comercial en Ecuador",
  description: "Rediseñamos la estructura del equipo comercial: roles, procesos e incentivos. No es capacitación ni motivación — es arquitectura comercial para empresas B2B en Ecuador.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/rediseno-sistema-comercial-ecuador",
  },
  keywords: ["rediseño del sistema comercial", "estructura de equipo comercial B2B", "por qué mi equipo comercial no cumple la meta", "arquitectura comercial Ecuador", "estructurar equipo de ventas Ecuador"],
  openGraph: {
    title: "Rediseño del Sistema Comercial en Ecuador | Origami Consulting",
    description: "Rediseñamos la estructura del equipo comercial: roles, procesos e incentivos. No es capacitación ni motivación — es arquitectura comercial para empresas B2B en Ecuador.",
    url: "https://www.oriconsultoria.com/rediseno-sistema-comercial-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
