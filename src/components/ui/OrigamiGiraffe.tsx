"use client";

import { motion } from "framer-motion";

export default function OrigamiGiraffe({ className = "" }: { className?: string }) {
  // Jirafa estática: sin animación de ensamblaje/explosión.
  // El único movimiento es la flotación suave del contenedor.
  // Imagen ligera (13 KB) en todos los dispositivos → mejor LCP que el video de ~1.2 MB.
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Resplandor trasero sutil dentro del mismo blend mode */}
      <div className="absolute inset-0 bg-green/10 blur-[60px] rounded-full scale-125 transform-gpu" />

      <div className="relative w-full h-[120%] flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Jirafa_Premium_3D.webp"
          alt="Jirafa de origami 3D - Origami Consulting Group"
          width={640}
          height={640}
          loading="eager"
          fetchPriority="high"
          className="object-contain w-full h-full transform scale-110"
        />
      </div>
    </motion.div>
  );
}
