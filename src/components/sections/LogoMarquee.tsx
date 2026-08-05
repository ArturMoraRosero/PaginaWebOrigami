"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Treatment = "invert" | "mono" | "original";

type Logo = { name: string; src: string; treatment: Treatment; wide?: boolean };

// `wide`: wordmarks de proporción muy alargada (ratio > 8:1). Se limitan por
// ancho en vez de por alto para que no invadan la franja completa en móvil.
const LOGOS: Logo[] = [
  { name: "KIYÚ", src: "/logos/kiyu.png", treatment: "mono" },
  { name: "UMCO", src: "/logos/umco.png", treatment: "original" },
  { name: "HEDGEHOG BRAND", src: "/logos/hedgehog.png", treatment: "mono" },
  { name: "BOA ESTRATEGIA", src: "/logos/boa.png", treatment: "mono" },
  { name: "GRUPO CAM", src: "/logos/cam.png", treatment: "mono" },
  { name: "ALOHA ECUADOR", src: "/logos/aloha.png", treatment: "mono" },
  { name: "ALTIDAT", src: "/logos/altidat.png", treatment: "invert" },
  { name: "CLICKHOME", src: "/logos/clickhome.png", treatment: "invert" },
  { name: "METALTRONIC GROUP", src: "/logos/metaltronic.png", treatment: "invert" },
  { name: "HIPERTRONICS", src: "/logos/hipertronics.png", treatment: "invert", wide: true },
];

// Los hovers se limitan a dispositivos con puntero real: en táctil el :hover
// se queda "pegado" tras un tap y deja logos congelados o atenuados.
const TREATMENT_CLASSES: Record<Treatment, string> = {
  invert:
    "brightness-0 invert opacity-80 md:opacity-40 [@media(hover:hover)]:group-hover/logo:brightness-100 [@media(hover:hover)]:group-hover/logo:invert-0 [@media(hover:hover)]:group-hover/logo:opacity-100",
  mono: "brightness-0 invert opacity-80 md:opacity-40 [@media(hover:hover)]:group-hover/logo:opacity-90",
  original:
    "opacity-90 md:opacity-60 saturate-[0.3] [@media(hover:hover)]:group-hover/logo:opacity-100 [@media(hover:hover)]:group-hover/logo:saturate-100",
};

function LogoItem({ name, src, treatment, wide }: Logo) {
  const [failed, setFailed] = useState(false);
  const box = wide
    ? "max-h-6 md:max-h-7 max-w-[190px] md:max-w-[260px]"
    : "max-h-9 md:max-h-11 max-w-[180px]";

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
          loading="eager"
          decoding="async"
          draggable={false}
          onError={() => setFailed(true)}
          className={`h-auto w-auto ${box} object-contain transition-all duration-500 [transform:translateZ(0)] [backface-visibility:hidden] [@media(hover:hover)]:group-hover/logo:scale-110 ${TREATMENT_CLASSES[treatment]}`}
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
        <div className="flex w-max animate-[marquee_35s_linear_infinite] will-change-transform [transform:translateZ(0)] [backface-visibility:hidden] [@media(hover:hover)]:group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
