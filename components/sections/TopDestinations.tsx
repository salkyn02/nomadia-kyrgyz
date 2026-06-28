"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../Container";
import { useTranslations } from "next-intl";

const destinations = [
  {
    nameKey: "destinations.items.issyk_kul.name",
    typeKey: "destinations.tags.nature",
    image: "/photo1.jpg",
  },
  {
    nameKey: "destinations.items.ala_archa.name",
    typeKey: "destinations.tags.nature",
    image: "/photo2.jpg",
  },
  {
    nameKey: "destinations.items.bishkek.name",
    typeKey: "destinations.tags.culture",
    image: "/photo3.jpg",
  },
  {
    nameKey: "destinations.items.song_kul.name",
    typeKey: "destinations.tags.nomadic_life",
    image: "/photo4.jpg",
  },
  {
    nameKey: "destinations.items.naryn.name",
    typeKey: "destinations.tags.nomadic_life",
    image: "/photo5.jpg",
  },
  {
    nameKey: "destinations.items.too_jailoo.name",
    typeKey: "destinations.tags.nomadic_life",
    image: "/photo6.jpg",
  },
];

export const TopDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="destinations" className="w-full py-16 scroll-mt-24">
      <Container className="w-full">
        {/* Header */}
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide ">
            {t("destinations.heading")}
          </h2>

          {/* Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {destinations.map((item, i) => (
            <div
              key={i}
              className="
        relative
        shrink-0
        w-[80%] sm:w-[60%] md:w-1/2 lg:w-1/4
        h-85
        rounded-2xl
        overflow-hidden
        group
      "
            >
              <Image
                src={item.image}
                alt={t(item.nameKey)}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{t(item.nameKey)}</h3>
                <p className="text-sm opacity-90">{t(item.typeKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
