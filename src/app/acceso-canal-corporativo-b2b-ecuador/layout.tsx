import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceso al Canal Corporativo B2B en Ecuador",
  description: "Introduzca su producto o servicio en el canal corporativo de Ecuador. Conectamos su oferta con gerentes, compras y recursos humanos que toman decisiones. Conozca más.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/acceso-canal-corporativo-b2b-ecuador",
  },
  keywords: ["acceso al canal corporativo Ecuador", "introducir productos al canal corporativo", "contactos gerentes y recursos humanos", "tomadores de decisión B2B Ecuador", "venta al canal corporativo Quito"],
  openGraph: {
    title: "Acceso al Canal Corporativo B2B en Ecuador | Origami Consulting",
    description: "Introduzca su producto o servicio en el canal corporativo de Ecuador. Conectamos su oferta con gerentes, compras y recursos humanos que toman decisiones. Conozca más.",
    url: "https://www.oriconsultoria.com/acceso-canal-corporativo-b2b-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
