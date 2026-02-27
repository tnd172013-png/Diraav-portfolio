"use client";

const slides = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=560&fit=crop&q=80",
];

export default function ServiceMarquee() {
  const items = [...slides, ...slides, ...slides];

  return (
    <div className="w-full py-10 md:py-14 bg-dark border-y border-snow/10 overflow-hidden">
      <div
        className="animate-marquee-left flex items-center gap-4 md:gap-5"
        style={{ width: "max-content" }}
      >
        {items.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-[160px] sm:w-[220px] md:w-[280px] h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden cursor-pointer group"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-[filter,transform] duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
