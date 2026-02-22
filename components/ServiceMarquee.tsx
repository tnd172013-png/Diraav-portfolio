"use client";

const words = [
  "Strategy",
  "Vision",
  "Growth",
  "Purpose",
  "Design",
  "Impact",
  "Clarity",
  "Direction",
];

export default function ServiceMarquee() {
  const items = [...words, ...words, ...words, ...words];

  return (
    <div className="w-full overflow-hidden py-8 border-y border-snow/10 bg-dark">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-4 md:mx-8 text-snow/60 font-heading text-2xl md:text-4xl font-medium tracking-tight"
          >
            {word}
            <span className="mx-4 md:mx-8 text-teal/40 text-lg">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
