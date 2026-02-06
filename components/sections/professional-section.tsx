import Image from "next/image";

export function ProfessionalSection() {
  return (
    <section className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image - First on mobile (centered) */}
          <div className="relative w-full order-1">
            <div className="relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl max-w-xs sm:max-w-sm mx-auto lg:mx-0 bg-white">
              <Image
                src="/images/talia.png"
                alt="Profissional de estética especializada"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element - hidden on mobile */}
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-5 lg:space-y-8 order-2 text-center lg:text-left">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground text-balance">
              Por que você pode confiar no meu trabalho
            </h2>

            <div className="space-y-4 lg:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Eu sei como é frustrante se esforçar, cuidar da alimentação,
                treinar e mesmo assim não ver certas áreas do corpo mudarem.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed">
                Por isso, trabalho com protocolos personalizados, respeitando
                cada corpo, cada fase e cada objetivo.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed font-medium">
                Aqui, você não recebe promessas irreais — recebe orientação
                profissional e honesta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
