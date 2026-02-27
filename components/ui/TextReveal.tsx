"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  scrollTrigger?: boolean;
}

export default function TextReveal({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.08,
  scrollTrigger = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { y: "110%" },
        {
          y: "0%",
          duration: 0.9,
          ease: "power3.out",
          stagger,
          delay,
          scrollTrigger: scrollTrigger
            ? {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              }
            : undefined,
        }
      );
    },
    { scope: containerRef }
  );

  const words = children.split(" ");

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.25em] pb-[0.15em] align-bottom"
          >
            <span
              className="word inline-block"
              style={{ transform: "translateY(110%)" }}
            >
              {word}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
