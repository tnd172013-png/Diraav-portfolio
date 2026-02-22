"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 50,
  scale = true,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) return;

      gsap.fromTo(
        imageRef.current,
        {
          yPercent: -speed / 2,
          scale: scale ? 0.95 : 1,
        },
        {
          yPercent: speed / 2,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
      />
    </div>
  );
}
