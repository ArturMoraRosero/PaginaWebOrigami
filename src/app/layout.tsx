import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/ui/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";

const syne = Syne({
  variable: "--font-syne", 
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oriconsultoria.com'),
  title: {
    default: "Origami Consulting Group | Consultoría Estratégica",
    template: "%s | Origami Strategy",
  },
  description: "Firma boutique de consultoría estratégica en Ecuador. Acompañamos a CEOs en expansión comercial, alianzas B2B y valoración de marca. Agende su sesión hoy.",
  keywords: ["consultoría estratégica", "firma boutique estrategia", "alianzas comerciales B2B", "expansión empresarial", "consultor estratégico CEO", "valoración de marca Ecuador", "desarrollo de negocios Latinoamérica"],
  authors: [{ name: "Origami Consulting Group" }],
  creator: "Origami Consulting Group",
  publisher: "Origami Consulting Group",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.oriconsultoria.com",
    siteName: "Origami Consulting Group",
    title: "Origami Consulting Group | Consultoría Estratégica Boutique",
    description: "Firma boutique de consultoría estratégica en Ecuador. Expansión comercial y valoración de marca. Agende su sesión hoy.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Origami Consulting Group - Premium Strategy Boutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Origami Consulting Group | Consultoría Estratégica",
    description: "Acompañamos a CEOs en expansión y valoración estratégica.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${syne.variable} ${inter.variable} font-sans`}>
        <LanguageProvider>
          <CustomCursor />
          <SmoothScrolling>{children}</SmoothScrolling>
        </LanguageProvider>
      </body>
    </html>
  );
}
