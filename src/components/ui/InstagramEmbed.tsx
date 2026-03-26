"use client";

import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScript = () => {
      if (document.getElementById("instagram-embed-script")) {
        // Script already exists, just process embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
        return;
      }

      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadScript();
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center"
      style={{ minHeight: "380px" }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "20px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "0",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "100%",
        }}
      />
    </div>
  );
}
