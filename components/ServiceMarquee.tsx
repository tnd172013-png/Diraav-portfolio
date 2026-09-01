"use client";

const slides = [
  "/gallery/casa-studio.png",
  "/gallery/casa-studio-1.png",
  "/gallery/christian-wedding-boutique.png",
  "/gallery/hhc-brandkit.png",
  "/gallery/hhc-brandkit-2.png",
  "/gallery/la-dart-1.png",
  "/gallery/maree-brandkit.png",
  "/gallery/norde-atelier.png",
  "/gallery/nom.png",
  "/gallery/nom-1.png",
  "/gallery/roma-27.png",
  "/gallery/roma-27-1.png",
  "/gallery/seori-skincare.png",
  "/gallery/zelo-drinks-1.png",
  "/gallery/zelo-drinks-2.png",
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
