"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=+555196490632&text=Vim+do+Google+e+gostaria+de+agendar&type=phone_number&app_absent=0&gad_source=1&gad_campaignid=23441772904&gbraid=0AAAABB9h1o5NHB9PRcQydQ8fy-1dwk9C7&gclid=Cj0KCQiA1czLBhDhARIsAIEc7uheOXfxqc9_FOQICnqtwpa4Q5D7l2acqaq5zzkL7WH9wDv9UuTbVgYaAlIHEALw_wcB";

  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-5 lg:mb-8 text-balance">
            Descubra se a criolipólise é indicada para você
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-10 max-w-2xl mx-auto">
            A avaliação é individual, sem compromisso, e serve para entender se
            esse tratamento realmente faz sentido para o seu caso.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              (window as any).gtag?.("event", "whatsapp_click", {
                method: "cta",
              })
            }
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base lg:text-lg px-8 sm:px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Quero saber se a criolipólise é ideal para mim
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
