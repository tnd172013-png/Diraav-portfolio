"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 40,
  stagger = 0,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const targets = stagger ? ref.current.children : ref.current;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger || 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
