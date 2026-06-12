"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../Container";

const destinations = [
  {
    name: "Issyk-Kul Lake",
    type: "Nature",
    image: "/photo1.jpg",
  },
  {
    name: "Ala-Archa",
    type: "Nature",
    image: "/photo2.jpg",
  },
  {
    name: "Bishkek City",
    type: "Culture",
    image: "/photo3.jpg",
  },
  {
    name: "Song-Kul Lake",
    type: "Nomadic Life",
    image: "/photo4.jpg",
  },
  {
    name: "Naryn",
    type: "Nomadic Life",
    image: "/photo5.jpg",
  },
  {
    name: "Too Jailoo",
    type: "Nomadic Life",
    image: "/photo6.jpg",
  },
];

export const TopDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide whitespace-nowrap">
            TOP DESTINATIONS
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
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm opacity-90">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
