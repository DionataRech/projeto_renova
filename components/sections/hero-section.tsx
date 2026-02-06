"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=+555196490632&text=Vim+do+Google+e+gostaria+de+agendar&type=phone_number&app_absent=0&gad_source=1&gad_campaignid=23441772904&gbraid=0AAAABB9h1o5NHB9PRcQydQ8fy-1dwk9C7&gclid=Cj0KCQiA1czLBhDhARIsAIEc7uheOXfxqc9_FOQICnqtwpa4Q5D7l2acqaq5zzkL7WH9wDv9UuTbVgYaAlIHEALw_wcB";

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">
          {/* Mobile: Content first, centered */}
          <div className="w-full text-center lg:text-left space-y-6 lg:space-y-8 order-1">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-foreground text-balance">
              A gordura localizada que não sai com dieta e academia pode
              finalmente diminuir
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mesmo que você já tenha emagrecido, algumas regiões do corpo
              simplesmente não respondem. A criolipólise é um tratamento não
              invasivo, indicado para gordura localizada — sem cirurgia e sem
              promessas irreais.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  (window as any).gtag?.("event", "whatsapp_click", {
                    method: "hero",
                  })
                }
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base lg:text-lg px-6 sm:px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Descubra se a criolipólise é indicada para o seu caso
                </Button>
              </a>
              <p className="text-sm text-muted-foreground">
                (Avaliação individual e sem compromisso)
              </p>
            </div>
          </div>

          {/* Image - Below CTA on mobile */}
          <div className="relative w-full order-2">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/crio2.webp"
                alt="Mulher confiante após tratamento estético"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Elements - hidden on small mobile */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 bg-primary/10 rounded-full -z-10" />
            <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
