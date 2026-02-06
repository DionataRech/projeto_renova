import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  "Não invasivo",
  "Indicado para gordura localizada",
  "Sessão personalizada",
  "Procedimento seguro",
  "Resultados progressivos",
];

export function TreatmentSection() {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - First on mobile */}
          <div className="space-y-5 lg:space-y-8 text-center lg:text-left">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground text-balance">
              Como a criolipólise atua na gordura localizada
            </h2>

            <div className="space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                A criolipólise é um tratamento estético não invasivo que atua
                diretamente nas células de gordura localizada, ajudando o corpo
                a eliminá-las de forma gradual e natural.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed font-medium">
                Sem cortes, sem cirurgia e com acompanhamento profissional.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3 lg:space-y-4 pt-2 max-w-sm mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-left">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg text-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image - Below content on mobile */}
          <div className="relative w-full">
            <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/crio.webp"
                alt="Equipamento de criolipólise moderno"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element - hidden on mobile */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
