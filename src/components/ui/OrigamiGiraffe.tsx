"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OrigamiGiraffe({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      // Animación de flotación
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Resplandor trasero sutil dentro del mismo blend mode */}
      <div className="absolute inset-0 bg-green/10 blur-[60px] rounded-full scale-125 transform-gpu" />
      
      {/* 
        Contenedor de la imagen sin sombras que rompan el blend
      */}
      <div className="relative w-full h-[120%] flex justify-center items-center">
        <Image 
          src="/Jirafa_Premium_3D.png" 
          alt="Origami Giraffe 3D" 
          width={800} 
          height={800}
          className="object-contain w-full h-full transform scale-110"
          priority
        />
      </div>
    </motion.div>
  );
}

