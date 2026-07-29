import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights B2B | Estrategia, Ventas y Crecimiento",
  description: "Perspectivas de Origami Consulting Group sobre estrategia comercial, canal corporativo, alianzas y crecimiento B2B en Ecuador. Ideas accionables para CEOs y alta dirección.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/insights",
  },
  keywords: ["insights B2B Ecuador", "estrategia comercial B2B", "crecimiento B2B", "canal corporativo", "consultoría estratégica Ecuador"],
  openGraph: {
    title: "Insights B2B | Origami Consulting Group",
    description: "Perspectivas sobre estrategia comercial, canal corporativo, alianzas y crecimiento B2B en Ecuador.",
    url: "https://www.oriconsultoria.com/insights",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
