"use client";

import { ResultsGridCarousel } from "@/components/ui/results-grid-carousel";

const results = [
  {
    before: "/images/2.webp",
    after: "/images/1.webp",
    alt: "Abdominal e Flancos - antes e depois 1",
  },
  {
    before: "/images/3.webp",
    after: "/images/4.webp",
    alt: "Resultado do tratamento - antes e depois 2",
  },
  {
    before: "/images/6.webp",
    after: "/images/7.webp",
    alt: "Resultado do tratamento - antes e depois 3",
  },
  {
    before: "/images/9.webp",
    after: "/images/8.webp",
    alt: "Resultado do tratamento - antes e depois 4",
  },
  {
    before: "/images/10.webp",
    after: "/images/11.webp",
    alt: "Resultado do tratamento - antes e depois 5",
  },
  {
    before: "/images/12.webp",
    after: "/images/13.webp",
    alt: "Resultado do tratamento - antes e depois 6",
  },
];

export function ResultsSection() {
  return (
    <section className="py-12 lg:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-8 lg:mb-14 text-balance">
            Resultados reais de mulheres que também já tinham tentado de tudo
          </h2>

          {/* Results Grid Carousel */}
          <div className="mb-8 lg:mb-12 px-4 sm:px-6">
            <ResultsGridCarousel slides={results} />
          </div>

          <p className="text-center text-sm sm:text-base lg:text-lg text-muted-foreground italic px-4">
            Resultados reais, respeitando o tempo e o organismo de cada pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}
