import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alianzas Estratégicas B2B en Ecuador",
  description: "Potencie su crecimiento con alianzas estratégicas B2B en Ecuador. Estructuramos y gestionamos sus partners para una expansión comercial escalable. Conozca más.",
  alternates: {
    canonical: "https://www.oriconsultoria.com/alianzas-estrategicas-b2b-ecuador",
  },
  keywords: ["alianzas estratégicas B2B en Ecuador", "gestión de partners", "expansión comercial estratégica", "partners B2B Ecuador", "estrategia de canales comerciales"],
  openGraph: {
    title: "Alianzas Estratégicas B2B en Ecuador | Origami Strategy",
    description: "Potencie su crecimiento con alianzas estratégicas B2B en Ecuador. Estructuramos y gestionamos sus partners para una expansión comercial escalable. Conozca más.",
    url: "https://www.oriconsultoria.com/alianzas-estrategicas-b2b-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
