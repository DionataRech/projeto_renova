import { Check } from "lucide-react"

const situations = [
  "Dieta e academia, mas a barriga não some",
  "Emagrece, mas os flancos continuam",
  "Gordura localizada que insiste em ficar",
  "Faz tudo certo, mas o corpo não responde",
  "Medo de gastar dinheiro e não funcionar",
]

export function IdentificationSection() {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 lg:mb-14 text-balance">
            Você se identifica com alguma dessas situações?
          </h2>
          
          <ul className="space-y-3 lg:space-y-5 text-left max-w-xl mx-auto mb-8 lg:mb-14">
            {situations.map((situation, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              >
                <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </span>
                <span className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed">
                  {situation}
                </span>
              </li>
            ))}
          </ul>
          
          <p className="text-base lg:text-xl text-primary font-medium">
            Se você se viu aqui, continue lendo.
          </p>
        </div>
      </div>
    </section>
  )
}
