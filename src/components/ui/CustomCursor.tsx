"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports hover (ignores mobile/touch)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    // Use a small timeout to avoid synchronous setState during effect
    setTimeout(() => setIsVisible(true), 10);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over an interactive element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide original cursor by adding a class to body when CustomCursor is active
    document.body.classList.add("cursor-none");

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[100] rounded-full mix-blend-difference md:block hidden ${
        isHovering ? "bg-green" : "bg-white"
      }`}
      animate={{
        width: isHovering ? 40 : 8,
        height: isHovering ? 40 : 8,
        x: position.x - (isHovering ? 20 : 4),
        y: position.y - (isHovering ? 20 : 4),
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
        mass: 0.1,
      }}
    />
  );
}
