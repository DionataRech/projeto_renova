import { Shield, UserCheck, Award, Eye, Heart } from "lucide-react"

const safetyPoints = [
  { icon: UserCheck, text: "Avaliação individual" },
  { icon: Heart, text: "Indicação personalizada" },
  { icon: Award, text: "Profissional capacitada" },
  { icon: Eye, text: "Acompanhamento" },
  { icon: Shield, text: "Transparência" },
]

export function SafetySection() {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 lg:mb-14 text-balance">
            Segurança e cuidado em cada etapa
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 mb-8 lg:mb-14">
            {safetyPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors duration-300"
              >
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </span>
                <span className="text-xs sm:text-sm lg:text-base text-foreground text-center leading-relaxed">
                  {point.text}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-base lg:text-xl text-foreground font-medium">
            Sem promessas milagrosas. Apenas o que realmente funciona para o seu corpo.
          </p>
        </div>
      </div>
    </section>
  )
}
