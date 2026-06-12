"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../Container";

const experiences = [
  {
    title: "Horseback Adventure",
    desc: "Ride through breathtaking mountain landscapes",
    tag: "Adventure",
    image: "/photo1.jpg",
  },
  {
    title: "Yurts Stay",
    desc: "Experience authentic nomadic lifestyle",
    tag: "Culture",
    image: "/photo2.jpg",
  },
  {
    title: "Hiking & Trekking",
    desc: "Explore alpine trails and valleys",
    tag: "Adventure",
    image: "/photo3.jpg",
  },
  {
    title: "Eagle Hunting",
    desc: "Discover ancient Kyrgyz traditions",
    tag: "Culture",
    image: "/photo4.jpg",
  },
  {
    title: "Lake Camping",
    desc: "Sleep under stars near Issyk-Kul",
    tag: "Nature",
    image: "/photo5.jpg",
  },
];

export const Experiences = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = 340;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="experience" className="w-full py-16 scroll-mt-24">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide whitespace-nowrap">
            TOP EXPERIENCES
          </h2>

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

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {experiences.map((item, i) => (
            <div
              key={i}
              className="
                shrink-0
                w-[85%] sm:w-[60%] md:w-1/2 lg:w-1/4
                rounded-2xl
                border border-primary
                bg-background
                overflow-hidden
                flex flex-col
               "
            >
              {/* Image */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Section */}
              <div className="p-4 bg-background flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="text-sm text-muted-foreground">{item.desc}</p>

                {/* Tag */}
                <div className="mt-2 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
