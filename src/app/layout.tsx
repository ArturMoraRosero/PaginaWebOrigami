import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/ui/CustomCursor";

const syne = Syne({
  variable: "--font-syne", 
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Origami Consulting Group | Consultoría Estratégica Boutique en Ecuador",
  description: "Firma boutique de consultoría estratégica. Acompañamos a CEOs y alta dirección en expansión comercial, alianzas estratégicas y valoración de marca en Ecuador y Latinoamérica.",
  keywords: "consultoría estratégica Ecuador, firma boutique estrategia, alianzas comerciales B2B, expansión empresarial Ecuador, consultor estratégico CEO, valoración de marca Ecuador, desarrollo de negocios Latinoamérica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${syne.variable} ${inter.variable} font-sans`}>
        <CustomCursor />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
