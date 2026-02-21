"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsCarouselProps {
  images: string[];
}

export function TestimonialsCarousel({ images }: TestimonialsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mounted, setMounted] = useState(false);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [mounted]);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.6;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full">
      <div className="relative">
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full sm:w-96 lg:w-[22rem] snap-center"
            >
              <div className="rounded-2xl shadow-md bg-white p-3 h-80 sm:h-64 flex items-center justify-center transition-transform duration-300 transform md:hover:scale-105 md:hover:z-20">
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Depoimento ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center -translate-x-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center translate-x-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
