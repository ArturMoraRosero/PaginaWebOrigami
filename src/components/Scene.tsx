"use client";

import Image from "next/image";

export default function Scene() {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Static placeholder image for the Origami Giraffe */}
      <Image
        src="/Jirafa_Premium_3D.png"
        alt="Origami Giraffe"
        width={800}
        height={800}
        className="object-contain"
        priority={false}
      />
    </div>
  );
}
