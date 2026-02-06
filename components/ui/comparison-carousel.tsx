"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BeforeAfterComparison } from "@/components/ui/before-after-comparison";

interface ComparisonSlide {
  before: string;
  after: string;
  alt: string;
}

interface ComparisonCarouselProps {
  slides: ComparisonSlide[];
}

export function ComparisonCarousel({ slides }: ComparisonCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mounted, setMounted] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || !mounted) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length, mounted]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-3xl">
        <div className="relative w-full transition-opacity duration-500">
          <BeforeAfterComparison
            beforeSrc={slides[currentIndex].before || "/placeholder.svg"}
            afterSrc={slides[currentIndex].after || "/placeholder.svg"}
            beforeAlt="Antes"
            afterAlt="Depois"
            aspectRatio="4/3"
            showLabels={true}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-foreground hover:bg-white transition-all active:scale-95"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-foreground hover:bg-white transition-all active:scale-95"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
          {currentIndex + 1} / {slides.length}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-6 lg:mt-8">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all ${
              idx === currentIndex
                ? "w-8 h-3 bg-primary rounded-full"
                : "w-3 h-3 bg-primary/30 rounded-full hover:bg-primary/50"
            }`}
            aria-label={`Ir para resultado ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Info */}
      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
        Resultado {currentIndex + 1} de {slides.length}
      </p>
    </div>
  );
}
