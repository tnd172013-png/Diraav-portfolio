"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

const services = [
  {
    title: "Marketing Strategy",
    desc: "Direction before distribution. We design structured growth pathways tailored to your business model, audience, and long-term goals.",
  },
  {
    title: "Brand Positioning & Strategy",
    desc: "Clarity in how you are understood. We define your market position, messaging architecture, and differentiation.",
  },
  {
    title: "Consulting",
    desc: "Strategic guidance for founders and teams. From audits to growth recalibration, we support decision-making with structured insight.",
  },
  {
    title: "Market Research",
    desc: "Insight before assumption. We analyse industry landscapes, competitors, and audience behaviour to inform confident strategy.",
  },
  {
    title: "Website Development",
    desc: "Digital infrastructure built with intention. Conversion-focused, structured websites designed to support visibility and scalability.",
  },
  {
    title: "SaaS Strategy",
    desc: "From idea to structured product. We help founders map positioning, user flow, and go-to-market direction for scalable digital platforms.",
  },
];

// Abstract circle icons — on hover all elements collapse to a single center circle
function ServiceIcon({ index }: { index: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (!wrapRef.current) return;
    const circles = wrapRef.current.querySelectorAll("circle");
    circles.forEach((c) => {
      gsap.to(c, {
        attr: { cx: 24, cy: 24, r: 12 },
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
  };

  const handleLeave = () => {
    if (!wrapRef.current) return;
    const circles = wrapRef.current.querySelectorAll("circle");
    circles.forEach((c) => {
      gsap.to(c, {
        attr: {
          cx: parseFloat(c.dataset.cx!),
          cy: parseFloat(c.dataset.cy!),
          r: parseFloat(c.dataset.r!),
        },
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
  };

  const icons = [
    // 0: Concentric circles
    <svg key="0" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle data-cx="24" data-cy="24" data-r="20" cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="24" data-cy="24" data-r="12" cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="24" data-cy="24" data-r="4" cx="24" cy="24" r="4" fill="currentColor" />
    </svg>,
    // 1: Overlapping circles
    <svg key="1" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle data-cx="18" data-cy="24" data-r="14" cx="18" cy="24" r="14" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="30" data-cy="24" data-r="14" cx="30" cy="24" r="14" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // 2: Circle with orbiting dot
    <svg key="2" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle data-cx="24" data-cy="24" data-r="20" cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="32" data-cy="16" data-r="3" cx="32" cy="16" r="3" fill="currentColor" />
    </svg>,
    // 3: Three overlapping circles
    <svg key="3" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle data-cx="20" data-cy="20" data-r="12" cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="28" data-cy="20" data-r="12" cx="28" cy="20" r="12" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="24" data-cy="28" data-r="12" cx="24" cy="28" r="12" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // 4: Circle with dashed inner ring
    <svg key="4" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle data-cx="24" data-cy="24" data-r="20" cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="24" data-cy="24" data-r="10" cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
    </svg>,
    // 5: Target circles
    <svg key="5" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle data-cx="24" data-cy="24" data-r="20" cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="24" data-cy="24" data-r="14" cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" />
      <circle data-cx="24" data-cy="24" data-r="8" cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" />
    </svg>,
  ];

  return (
    <div
      ref={wrapRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="cursor-pointer"
    >
      {icons[index % icons.length]}
    </div>
  );
}

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const items = gridRef.current.querySelectorAll(".service-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: gridRef }
  );

  return (
    <section id="services" className="py-24 md:py-32 bg-dark">
      {/* Services — Frysta style: heading left, grid right */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          {/* Left — Heading */}
          <div>
            <TextReveal
              as="h2"
              className="font-heading text-snow text-[clamp(2rem,5vw,3.5rem)] tracking-tight mb-4"
            >
              What We Do
            </TextReveal>
            <p className="text-snow/40 font-body text-sm leading-relaxed">
              We design the thinking before we build the execution.
            </p>
          </div>

          {/* Right — 3-column service grid */}
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-8 md:gap-y-14">
            {services.map((service, i) => (
              <div key={i} className="service-item" style={{ opacity: 0, transform: "translateY(30px)" }}>
                <div className="text-snow/30 mb-6">
                  <ServiceIcon index={i} />
                </div>
                <h3 className="font-heading text-snow text-xl md:text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-snow/50 font-body text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
