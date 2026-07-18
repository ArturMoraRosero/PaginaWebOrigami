"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OrigamiGiraffe({ className = "" }: { className?: string }) {
  const [phase, setPhase] = useState<"intro" | "loop">("intro");
  // Safari no soporta canal alfa en WebM → mantiene la imagen estática
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      setUseVideo(false);
      return;
    }
    // Precargar el loop mientras corre el intro para evitar el salto
    const v = document.createElement("video");
    v.preload = "auto";
    v.src = "/jirafa-loop.webm";
  }, []);

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      // Animación de flotación
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Resplandor trasero sutil dentro del mismo blend mode */}
      <div className="absolute inset-0 bg-green/10 blur-[60px] rounded-full scale-125 transform-gpu" />

      <div className="relative w-full h-[120%] flex justify-center items-center">
        {useVideo ? (
          <video
            key={phase}
            autoPlay
            muted
            playsInline
            loop={phase === "loop"}
            poster="/Jirafa_Premium_3D.webp"
            width={1080}
            height={1084}
            onEnded={() => {
              if (phase === "intro") setPhase("loop");
            }}
            aria-label="Jirafa de origami 3D - Origami Consulting Group"
            className="object-contain w-full h-full transform scale-110"
          >
            <source src={`/jirafa-${phase}.webm`} type="video/webm" />
          </video>
        ) : (
          <Image
            src="/Jirafa_Premium_3D.webp"
            alt="Origami Giraffe 3D"
            width={800}
            height={800}
            className="object-contain w-full h-full transform scale-110"
            priority
          />
        )}
      </div>
    </motion.div>
  );
}
