"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface BeforeAfterComparisonProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: "3/4" | "4/3" | "1/1" | "16/9";
  showLabels?: boolean;
}

export function BeforeAfterComparison({
  beforeSrc,
  afterSrc,
  beforeAlt = "Antes",
  afterAlt = "Depois",
  aspectRatio = "4/3",
  showLabels = true,
}: BeforeAfterComparisonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mounted, setMounted] = useState(false);

  const aspectRatioClass: Record<string, string> = {
    "3/4": "aspect-[3/4]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "16/9": "aspect-video",
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const updatePosition = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectRatioClass[aspectRatio]} rounded-2xl overflow-hidden shadow-lg bg-background cursor-col-resize select-none`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover pointer-events-none"
          priority
        />
        {showLabels && (
          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
            ANTES
          </div>
        )}
      </div>

      {/* After Image (clipped by slider) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative w-full h-full"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover pointer-events-none"
            priority
          />
          {showLabels && (
            <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
              DEPOIS
            </div>
          )}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 right-0 h-full w-1 bg-white shadow-lg transition-opacity"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19l7-7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Mobile hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-sm md:hidden">
        Deslize para comparar
      </div>
    </div>
  );
}
