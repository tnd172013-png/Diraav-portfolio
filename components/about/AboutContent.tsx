"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const philosophy = [
  { num: "01", text: "Less clutter, more meaning" },
  { num: "02", text: "Purpose-led design" },
  { num: "03", text: "Strategy before aesthetics" },
  { num: "04", text: "Growth with integrity" },
];

const approach = [
  {
    step: "01",
    title: "Listen Deeply",
    desc: "We begin with conversations, not assumptions.",
  },
  {
    step: "02",
    title: "Build Strategically",
    desc: "Every step is rooted in brand purpose and growth clarity.",
  },
  {
    step: "03",
    title: "Create Thoughtfully",
    desc: "From messaging to visuals, everything we craft is minimal, aligned, and built to last.",
  },
  {
    step: "04",
    title: "Grow with You",
    desc: "Our role doesn't end at launch. We offer ongoing consulting and collaboration as your brand evolves.",
  },
];

const testimonials = [
  {
    name: "Deluxe Enterprises",
    quote:
      "Working with Diraav was a game-changer. They built our website from scratch, showcasing our products with an aesthetic flair that perfectly matches our brand.",
  },
  {
    name: "Fiesta Hospitality",
    quote:
      "Diraav crafted a professional and compelling company profile that left a lasting impression on our investors. Outstanding work!",
  },
  {
    name: "Shreya",
    quote:
      "Vinita has been a fantastic collaborator. She helped thoughtfully, effectively and patiently as we designed a website for our manufacturing unit.",
  },
  {
    name: "Habot",
    quote:
      "Vinita has been an invaluable asset to our market research team. She completed our research ahead of time with detailed information. Highly recommended!",
  },
  {
    name: "Ek Prayaas",
    quote:
      "The site is clean, modern, and easy to navigate. You really understood our vision and brought it to life.",
  },
];

function AnimatedImage({
  src,
  alt,
  className,
  aspect = "aspect-[4/5]",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
      }
    );
  }, { scope: ref });

  return (
    <div ref={ref} className={`relative ${aspect} rounded-2xl overflow-hidden ${className || ""}`} style={{ opacity: 0 }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
    </div>
  );
}

export default function AboutContent() {
  const heroRef = useRef<HTMLElement>(null);
  const philRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  // Hero entrance
  useGSAP(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline({ delay: 0.3 });
    const h = heroRef.current.querySelector(".hero-h");
    const line = heroRef.current.querySelector(".hero-line");
    const p1 = heroRef.current.querySelector(".hero-p1");
    const p2 = heroRef.current.querySelector(".hero-p2");

    if (h) tl.fromTo(h, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.4");
    if (p1) tl.fromTo(p1, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
    if (p2) tl.fromTo(p2, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
  }, { scope: heroRef });

  // Philosophy
  useGSAP(() => {
    if (!philRef.current) return;
    gsap.fromTo(philRef.current.querySelectorAll(".phil-item"), { opacity: 0, x: -30 }, {
      opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
      scrollTrigger: { trigger: philRef.current, start: "top 80%", toggleActions: "play none none none" },
    });
  }, { scope: philRef });

  // Approach
  useGSAP(() => {
    if (!approachRef.current) return;
    gsap.fromTo(approachRef.current.querySelectorAll(".approach-card"), { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
      scrollTrigger: { trigger: approachRef.current, start: "top 80%", toggleActions: "play none none none" },
    });
  }, { scope: approachRef });

  // Testimonials
  useGSAP(() => {
    if (!testRef.current) return;
    gsap.fromTo(testRef.current.querySelectorAll(".test-card"), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
      scrollTrigger: { trigger: testRef.current, start: "top 85%", toggleActions: "play none none none" },
    });
  }, { scope: testRef });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-end bg-dark pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="font-body text-snow/30 text-xs tracking-[0.2em] uppercase mb-6">About Diraav</p>
              <h1 className="hero-h font-heading text-snow text-[clamp(2.5rem,8vw,5.5rem)] tracking-tight leading-[0.95] mb-8" style={{ opacity: 0 }}>
                Grounded in Purpose,<br />Built for Visionaries
              </h1>
              <div className="hero-line h-px bg-snow/20 origin-left mb-6" style={{ transform: "scaleX(0)" }} />
              <p className="hero-p1 font-body text-snow/60 text-base md:text-lg leading-relaxed max-w-xl mb-4" style={{ opacity: 0 }}>
                At Diraav, we believe that every brand holds a soul &mdash; an essence that goes beyond logos, colors, or campaigns. It&apos;s the why behind what you do, the story waiting to be told.
              </p>
              <p className="hero-p2 font-body text-snow/50 text-sm md:text-base leading-relaxed max-w-xl" style={{ opacity: 0 }}>
                We&apos;re not just a service provider &mdash; we&apos;re your thought partner, your creative sounding board, and your brand&apos;s quiet strength.
              </p>
            </div>

            <div className="md:col-span-5 relative">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80"
                alt="Team collaboration"
                aspect="aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-20 md:py-28 bg-dark border-t border-snow/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 relative">
              <AnimatedImage
                src="/portfolio/Untitled design (13).png"
                alt="Vinita — Founder"
                aspect="aspect-[3/4]"
              />
            </div>
            <div className="md:col-span-7 md:pl-8">
              <p className="font-body text-teal text-xs tracking-[0.2em] uppercase mb-6">Meet the Founder</p>
              <h2 className="font-heading text-snow text-[clamp(2rem,4vw,3rem)] tracking-tight leading-[1.1] mb-6">
                Vinita
              </h2>
              <p className="font-body text-snow/60 text-base leading-relaxed mb-4">
                From strategy to storytelling, every step we take is collaborative and intentional. Because we don&apos;t just build brands &mdash; we co-create dream projects that feel deeply aligned, rooted in purpose, and ready to grow.
              </p>
              <p className="font-body text-snow/50 text-sm leading-relaxed">
                Whether you&apos;re building from scratch or seeking clarity in the chaos, we bring a grounded approach to branding, content, and growth &mdash; so your brand feels as intentional as the vision behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-dark border-t border-snow/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="font-body text-snow/30 text-xs tracking-[0.2em] uppercase mb-4">Our Philosophy</p>
              <h2 className="font-heading text-snow text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight">
                What we believe in
              </h2>
            </div>
            <div ref={philRef} className="md:col-span-8 grid sm:grid-cols-2 gap-8">
              {philosophy.map((item, i) => (
                <div key={i} className="phil-item border-l-2 border-teal/30 pl-6 py-2" style={{ opacity: 0 }}>
                  <span className="font-body text-teal/50 text-xs tracking-wider block mb-2">{item.num}</span>
                  <p className="font-heading text-snow text-xl md:text-2xl">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1600&h=800&fit=crop&q=80"
            alt="Creative team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="font-heading text-white text-[clamp(1.5rem,3vw,2.5rem)] text-center italic max-w-2xl px-6">
            &ldquo;We don&apos;t just build brands &mdash; we co-create dream projects that feel deeply aligned.&rdquo;
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-snow/30 text-xs tracking-[0.2em] uppercase mb-4">Our Approach</p>
            <h2 className="font-heading text-snow text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight max-w-lg">
              We don&apos;t believe in one-size-fits-all
            </h2>
          </div>

          <div ref={approachRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item) => (
              <div key={item.step} className="approach-card group" style={{ opacity: 0 }}>
                <span className="font-heading text-teal/20 text-6xl font-semibold block mb-4 group-hover:text-teal/40 transition-colors duration-300">
                  {item.step}
                </span>
                <h3 className="font-heading text-snow text-xl mb-3 group-hover:text-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-snow/50 font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace images strip */}
      <section className="py-12 md:py-16 bg-dark overflow-hidden">
        <div className="flex gap-4 md:gap-6 px-6">
          {[
            { src: "/portfolio/Untitled design (11).png", alt: "Creative process" },
            { src: "/portfolio/Untitled design (12).png", alt: "Workspace" },
            { src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&q=80", alt: "Strategy session" },
          ].map((img, i) => (
            <div key={i} className="flex-1 min-w-0 relative">
              <AnimatedImage src={img.src} alt={img.alt} aspect="aspect-[3/2]" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-dark border-t border-snow/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-snow/30 text-xs tracking-[0.2em] uppercase mb-4">What Our Clients Say</p>
          <h2 className="font-heading text-snow text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight mb-14">
            Trusted by brands with purpose
          </h2>

          <div ref={testRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="test-card rounded-2xl p-8 border border-snow/10 bg-snow/[0.03] hover:border-teal/20 transition-colors duration-300"
                style={{ opacity: 0 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-snow/60 font-body text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="font-heading text-snow text-base">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark border-t border-snow/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-snow/40 text-xs tracking-[0.2em] uppercase mb-6">Ready to start?</p>
          <h2 className="font-heading text-snow text-[clamp(2rem,5vw,4rem)] tracking-tight mb-8">
            Let&apos;s turn your idea<br />into a dream project.
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-snow border border-snow/20 px-8 py-4 rounded-full hover:bg-snow hover:text-dark transition-all duration-300"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
