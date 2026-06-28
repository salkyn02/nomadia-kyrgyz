"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../Container";
import { useTranslations } from "next-intl";

const experiences = [
  {
    titleKey: "experiences.horseback.title",
    descKey: "experiences.horseback.desc",
    tagKey: "experiences.tags.adventure",
    image: "/photo1.jpg",
  },
  {
    titleKey: "experiences.yurts.title",
    descKey: "experiences.yurts.desc",
    tagKey: "experiences.tags.culture",
    image: "/photo2.jpg",
  },
  {
    titleKey: "experiences.hiking.title",
    descKey: "experiences.hiking.desc",
    tagKey: "experiences.tags.adventure",
    image: "/photo3.jpg",
  },
  {
    titleKey: "experiences.eagle.title",
    descKey: "experiences.eagle.desc",
    tagKey: "experiences.tags.culture",
    image: "/photo4.jpg",
  },
  {
    titleKey: "experiences.camping.title",
    descKey: "experiences.camping.desc",
    tagKey: "experiences.tags.nature",
    image: "/photo5.jpg",
  },
];

export const Experiences = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

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
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide ">
            {t("experiences.heading")}
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
                  alt={t(item.titleKey)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Description Section */}
              <div className="p-4 bg-background flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{t(item.titleKey)}</h3>

                <p className="text-sm text-muted-foreground">
                  {t(item.descKey)}
                </p>

                {/* Tag */}
                <div className="mt-2 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {t(item.tagKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
