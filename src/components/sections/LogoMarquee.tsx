"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Treatment = "invert" | "mono" | "original";

const LOGOS: { name: string; src: string; treatment: Treatment }[] = [
  { name: "KIYÚ", src: "/logos/kiyu.png", treatment: "mono" },
  { name: "UMCO", src: "/logos/umco.png", treatment: "original" },
  { name: "HEDGEHOG BRAND", src: "/logos/hedgehog.png", treatment: "mono" },
  { name: "BOA ESTRATEGIA", src: "/logos/boa.png", treatment: "mono" },
  { name: "GRUPO CAM", src: "/logos/cam.png", treatment: "mono" },
  { name: "ALOHA ECUADOR", src: "/logos/aloha.png", treatment: "mono" },
  { name: "ALTIDAT", src: "/logos/altidat.png", treatment: "invert" },
  { name: "CLICKHOME", src: "/logos/clickhome.png", treatment: "invert" },
];

const TREATMENT_CLASSES: Record<Treatment, string> = {
  invert: "brightness-0 invert opacity-40 group-hover/logo:brightness-100 group-hover/logo:invert-0 group-hover/logo:opacity-100",
  mono: "brightness-0 invert opacity-40 group-hover/logo:opacity-90",
  original: "opacity-60 saturate-[0.3] group-hover/logo:opacity-100 group-hover/logo:saturate-100",
};

function LogoItem({ name, src, treatment }: { name: string; src: string; treatment: Treatment }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center justify-center shrink-0 px-10 md:px-14 h-20 group/logo interactive cursor-default">
      {failed ? (
        <span className="font-syne font-bold text-xl md:text-2xl text-white/40 tracking-wide whitespace-nowrap transition-colors duration-500 group-hover/logo:text-green">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-9 md:h-11 w-auto max-w-[180px] object-contain transition-all duration-500 group-hover/logo:scale-110 ${TREATMENT_CLASSES[treatment]}`}
        />
      )}
    </div>
  );
}

export default function LogoMarquee() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0D1B35] py-14 md:py-16 overflow-hidden border-b border-white/5">
      <p className="text-center font-syne font-bold uppercase tracking-widest text-xs text-white/40 mb-10">
        {t.trusted.label}
      </p>

      <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} src={logo.src} treatment={logo.treatment} />
          ))}
        </div>
      </div>
    </section>
  );
}
