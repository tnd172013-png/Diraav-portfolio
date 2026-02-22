"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

const blogs = [
  {
    category: "Web Design",
    title: "5 Website Essentials Every Service Brand Needs to Convert in 2025",
    excerpt:
      "In 2025, your website is more than just your digital business card — it's your first impression, your sales pitch, and your silent salesperson.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    category: "Social Media",
    title: "Why Your Social Media Engagement Is Dropping in 2025",
    excerpt:
      "You're posting consistently. Your content looks better than ever. But your likes, comments, saves, and reach? They're steadily slipping.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
  },
  {
    category: "Tools & Resources",
    title: "8 Free Tools That Run Our Small Marketing Agency in 2025",
    excerpt:
      "Running a small business in 2025 isn't about having the most tools — it's about having the right ones.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export default function Blog() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".blog-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: gridRef }
  );

  return (
    <section id="blog" className="py-24 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <TextReveal
          as="h2"
          className="font-heading text-snow text-[clamp(2rem,4vw,3.5rem)] tracking-tight mb-4"
        >
          The Journal
        </TextReveal>
        <p className="text-snow/40 font-body text-lg max-w-xl mb-16">
          Thoughts, insights, and resources for purpose-driven brands.
        </p>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="blog-card group rounded-2xl overflow-hidden border border-snow/10 bg-snow/5 hover:border-teal/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal/5"
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              {/* Blog Image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
              </div>

              <div className="p-6">
                <span className="text-teal font-body text-xs tracking-[0.15em] uppercase font-medium">
                  {blog.category}
                </span>
                <h3 className="font-heading text-snow text-lg mt-3 mb-3 leading-snug group-hover:text-teal transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-snow/40 font-body text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <span className="text-teal font-body text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-teal font-body text-sm font-medium border border-teal/30 px-8 py-3 rounded-full hover:bg-teal hover:text-snow transition-all duration-300"
          >
            Explore All Blogs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
