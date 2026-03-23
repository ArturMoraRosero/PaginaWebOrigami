import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alianzas Estratégicas B2B en Ecuador | Origami Consulting",
  description: "Potencie su crecimiento empresarial mediante alianzas estratégicas B2B en Ecuador. Identificación, estructuración y gestión de partners estratégicos.",
  alternates: {
    canonical: "https://oriconsultoria.com/alianzas-estrategicas-b2b-ecuador",
  },
  keywords: ["alianzas estratégicas B2B en Ecuador", "gestión de partners", "expansión comercial estratégica", "partners B2B Ecuador", "estrategia de canales comerciales"],
  openGraph: {
    title: "Alianzas Estratégicas B2B en Ecuador | Origami Consulting",
    description: "Multiplique su alcance y capacidad comercial mediante alianzas estratégicas de alto nivel.",
    url: "https://oriconsultoria.com/alianzas-estrategicas-b2b-ecuador",
    siteName: "Origami Consulting Group",
    locale: "es_EC",
    type: "website",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
