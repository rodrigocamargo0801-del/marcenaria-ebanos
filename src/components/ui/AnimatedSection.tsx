"use client";

// AnimatedSection: envolve qualquer bloco e aplica animação de entrada
// quando o elemento entra no viewport (lazy animation via IntersectionObserver).
// Evita dependência de framer-motion para casos simples.

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;       // delay em ms (ex: 200 para 0.2s)
  animation?: "fade-up" | "fade-in" | "slide-left";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Pequeno delay opcional para efeito cascata entre cards
          const timer = setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Mapeia a prop de animação para as classes CSS definidas em globals.css
  const animClass = visible
    ? animation === "fade-up"
      ? "animate-fade-in-up"
      : animation === "slide-left"
      ? "animate-slide-in-left"
      : "animate-fade-in"
    : "opacity-0";

  return (
    <div ref={ref} className={`${animClass} ${className}`}>
      {children}
    </div>
  );
}
