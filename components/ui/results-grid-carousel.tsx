"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BeforeAfterComparison } from "@/components/ui/before-after-comparison";

interface ComparisonSlide {
  before: string;
  after: string;
  alt: string;
}

interface ResultsGridCarouselProps {
  slides: ComparisonSlide[];
}

export function ResultsGridCarousel({ slides }: ResultsGridCarouselProps) {
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
      const scrollAmount = 400;
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
      {/* Carousel Container */}
      <div className="relative">
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 min-h-[300px]"
            >
              <div className="h-full">
                <BeforeAfterComparison
                  beforeSrc={slide.before || "/placeholder.svg"}
                  afterSrc={slide.after || "/placeholder.svg"}
                  beforeAlt="Antes"
                  afterAlt="Depois"
                  aspectRatio="4/3"
                  showLabels={true}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all active:scale-95 -translate-x-4 sm:-translate-x-6"
            aria-label="Scroll para esquerda"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all active:scale-95 translate-x-4 sm:translate-x-6"
            aria-label="Scroll para direita"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Info */}
      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6">
        {slides.length} resultados para você explorar
      </p>
    </div>
  );
}
