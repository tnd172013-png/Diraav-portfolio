"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  useGSAP(
    () => {
      if (!sectionRef.current || !formRef.current) return;

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="contact" className="pt-16 md:pt-24 lg:pt-32 pb-8 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <TextReveal
          as="h2"
          className="font-heading text-snow text-[clamp(2rem,5vw,3.5rem)] tracking-tight mb-4"
        >
          Let&apos;s Build Something Intentional
        </TextReveal>
        <p className="text-mist font-body text-base md:text-lg max-w-xl mb-10 md:mb-12">
          If you&apos;re ready to build with clarity and structure, we&apos;d love to hear from you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          style={{ opacity: 0 }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-snow/20 text-snow font-body text-base py-4 px-0 placeholder:text-mist focus:border-teal focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-snow/20 text-snow font-body text-base py-4 px-0 placeholder:text-mist focus:border-teal focus:outline-none transition-colors"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-snow/20 text-snow font-body text-base py-4 px-0 placeholder:text-mist focus:border-teal focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-teal text-snow font-body text-sm font-medium px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-teal/80 transition-colors duration-300 mt-4"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="border-t border-snow/5 mt-12 md:mt-16 pt-6 pb-2 max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-mist font-body text-xs text-center">
          &copy; 2026 Diraav
        </p>
      </div>
    </section>
  );
}
