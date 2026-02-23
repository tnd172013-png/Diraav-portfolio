"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      if (!sectionRef.current || !infoRef.current || !formRef.current) return;

      gsap.fromTo(
        infoRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

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
    <section ref={sectionRef} id="contact" className="pt-24 md:pt-32 pb-8 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <TextReveal
          as="h2"
          className="font-heading text-snow text-[clamp(2rem,4vw,3.5rem)] tracking-tight mb-16"
        >
          Let&apos;s Build Something Together
        </TextReveal>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <p className="text-snow/40 font-body text-xs tracking-[0.2em] uppercase mb-3">
                Address
              </p>
              <p className="text-snow/80 font-body text-base">
                Valvan, Lonavala, Pune - 410403
              </p>
            </div>

            <div>
              <p className="text-snow/40 font-body text-xs tracking-[0.2em] uppercase mb-3">
                Phone
              </p>
              <a
                href="tel:+917823082963"
                className="text-snow/80 font-body text-base hover:text-teal transition-colors"
              >
                +91 7823082963
              </a>
            </div>

            <div>
              <p className="text-snow/40 font-body text-xs tracking-[0.2em] uppercase mb-3">
                Email
              </p>
              <a
                href="mailto:diraav.com@gmail.com"
                className="text-snow/80 font-body text-base hover:text-teal transition-colors"
              >
                diraav.com@gmail.com
              </a>
            </div>

            <div>
              <p className="text-snow/40 font-body text-xs tracking-[0.2em] uppercase mb-3">
                Follow Us
              </p>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "Behance"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-snow/60 font-body text-sm hover:text-teal transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
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
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-snow/20 text-snow font-body text-base py-4 px-0 placeholder:text-snow/30 focus:border-teal focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-snow/20 text-snow font-body text-base py-4 px-0 placeholder:text-snow/30 focus:border-teal focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-snow/20 text-snow font-body text-base py-4 px-0 placeholder:text-snow/30 focus:border-teal focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-snow/20 text-snow font-body text-base py-4 px-0 placeholder:text-snow/30 focus:border-teal focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-teal text-snow font-body text-sm font-medium px-10 py-4 rounded-full hover:bg-teal/80 transition-colors duration-300 mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-snow/5 mt-16 pt-6 pb-2 max-w-7xl mx-auto px-6">
        <p className="text-snow/20 font-body text-xs text-center">
          &copy; 2026 Diraav
        </p>
      </div>
    </section>
  );
}
