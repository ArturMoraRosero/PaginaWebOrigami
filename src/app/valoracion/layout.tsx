import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valoración Estratégica de Marca",
  description: "Determine el valor real de su marca o empresa con nuestra metodología de valoración estratégica. Herramientas técnicas para CEOs y alta dirección en Ecuador.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/valoracion",
  },
  keywords: ["valoración de marca Ecuador", "cuánto vale mi empresa", "valuación estratégica", "activos intangibles", "consultoría financiera estratégica"],
  openGraph: {
    title: "Valoración Estratégica de Marca | Origami Strategy",
    description: "Metodología técnica para determinar el valor real de su empresa y potenciar su capital intelectual.",
    url: "https://www.oriconsultoria.com/valoracion",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
