"use client";

const slides = [
  "/marquee/maree-1.jpg",
  "/marquee/maree-2.jpg",
  "/marquee/matai-1.jpg",
  "/marquee/matai-2.jpg",
  "/marquee/viya-1.jpg",
  "/marquee/viya-2.jpg",
  "/marquee/diraav-design.png",
  "/marquee/zelo-1.jpg",
  "/marquee/zelo-2.jpg",
  "/marquee/zelo-3.jpg",
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
