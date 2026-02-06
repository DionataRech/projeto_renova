import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";

const images = [
  "/images/testmonials/1.webp",
  "/images/testmonials/2.webp",
  "/images/testmonials/3.webp",
  "/images/testmonials/4.webp",
  "/images/testmonials/5.webp",
  "/images/testmonials/6.webp",
  "/images/testmonials/7.webp",
  "/images/testmonials/8.webp",
];

export function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 text-balance">
            Depoimentos reais (prints de WhatsApp)
          </h2>

          <TestimonialsCarousel images={images} />

          <p className="text-center text-sm text-muted-foreground mt-6">
            Prints reais (nomes removidos por privacidade). Entre em contato
            para ver conversas completas.
          </p>
        </div>
      </div>
    </section>
  );
}
