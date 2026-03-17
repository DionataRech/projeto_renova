import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Instagram,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Emagrecedor Natural Vale dos Sinos | Linha Turbo Black da Renova Clinic",
  description:
    "Protocolo exclusivo Turbo Black para mulheres: queima calórica, controle de apetite e saúde no Vale dos Sinos.",
  keywords: [
    "Emagrecimento Campo Bom",
    "Novo Hamburgo",
    "Santo Antônio da Patrulha",
    "Suplemento Natural para Mulheres",
    "Turbo Black Fusion",
    "Clínica de Estética Vale dos Sinos",
  ],
  openGraph: {
    title:
      "Emagrecedor Natural Vale dos Sinos | Linha Turbo Black da Renova Clinic",
    description:
      "Protocolo exclusivo Turbo Black para mulheres: queima calórica, controle de apetite e saúde no Vale dos Sinos.",
    type: "website",
    url: "https://renovaclinicb.com.br/encapsulados",
    images: [
      {
        url: "https://renovaclinicb.com.br/images/modelo.jpg",
        alt: "Modelo Turbo Black - Renova Clinic",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emagrecedor Natural Vale dos Sinos | Linha Turbo Black da Renova Clinic",
    description:
      "Protocolo exclusivo Turbo Black para mulheres: queima calórica, controle de apetite e saúde no Vale dos Sinos.",
    images: ["https://renovaclinicb.com.br/images/modelo.jpg"],
  },
};

type FeatureCardProps = {
  title: string;
  description: string;
  accent: string;
  img: string;
};

const FeatureCard = ({ title, description, accent, img }: FeatureCardProps) => (
  <article
    className={`rounded-2xl border ${accent} p-6 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
  >
    <h3 className="text-xl font-bold text-[#0f172a]">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
    <div className="mt-4 flex items-center justify-center">
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  </article>
);

export default function EncapsuladosPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/linkbio"
            className="relative h-10 w-56 inline-block"
            aria-label="Ir para LinkBio"
          >
            <Image
              src="/images/logotipo.jpeg"
              alt="Renova Clinic"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=+555196490632&text=Vim+do+Google+e+gostaria+de+comprar&type=phone_number&app_absent=0&gad_source=1&gad_campaignid=23441772904&gbraid=0AAAABB9h1o5NHB9PRcQydQ8fy-1dwk9C7&gclid=Cj0KCQiA1czLBhDhARIsAIEc7uheOXfxqc9_FOQICnqtwpa4Q5D7l2acqaq5zzkL7WH9wDv9UuTbVgYaAlIHEALw_wcB"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#C9A063] bg-[#C9A063]/20 px-5 py-2.5 text-sm font-semibold text-[#1f2937] transition hover:bg-[#C9A063] hover:text-white"
          >
            Falar com Especialista
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl text-slate-900">
              <span className="bg-gradient-to-r from-[#C9A063] via-[#D4AF37] to-[#FFB533] bg-clip-text text-transparent">
                A Ciência da Estética em Cápsulas:
              </span>{" "}
              Transforme seu corpo com a Linha Turbo Black
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              O protocolo exclusivo da Renova Clinic para mulheres que buscam
              queima calórica e controle de apetite sem perder a saúde.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#produto"
                className="rounded-xl bg-[#C9A063] px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg"
              >
                Ver Produtos
              </a>
              <a
                href="#faq"
                className="rounded-xl border border-[#C9A063] px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-slate-100"
              >
                Dúvidas Respondidas
              </a>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px]">
            <div className="absolute -right-10 top-10 h-[520px] w-[92%] rounded-3xl border border-[#C9A063]/30 bg-[#fde9c7]/20 shadow-md" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <Image
                src="/images/modelo.jpg"
                alt="Modelo com emagrecedores Turbo Black"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="produto" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37]/90">
            Pink-Fusion | Black-Extreme | Blue-Mounjaro
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            O trio de impacto para resultados de alta performance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Escolha a fórmula ideal para o seu objetivo de emagrecimento, cada
            produto possui uma atuação metabólica específica.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Fusion - Rosa"
            description="Drenagem & Metabolismo. O fim do inchaço matinal e a aceleração que seu corpo precisa."
            accent="border-[#FF007F]"
            img="/images/fusion.jpeg"
          />
          <FeatureCard
            title="Extreme - Preto"
            description="Queima Máxima & Inibição. O controle total da ansiedade alimentar e foco extremo no emagrecimento."
            accent="border-[#1A1A1A]"
            img="/images/extreme.jpeg"
          />
          <FeatureCard
            title="Mounjaro - Blue"
            description="Linha Blue foi desenvolvido para ajudar emagrecer com controle e disposição no dia a dia."
            accent="border-[#007BFF]"
            img="/images/blue.jpeg"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Atendimento local
            </h3>
            <p className="mt-3 text-lg text-slate-600">
              Atendimento presencial em Campo Bom, Novo Hamburgo e Santo Antônio
              da Patrulha. Entregas rápidas para todo o Vale dos Sinos.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { city: "Campo Bom", icon: MapPin },
                { city: "Novo Hamburgo", icon: MapPin },
                { city: "Santo Antônio da Patrulha", icon: MapPin },
              ].map((item) => (
                <div
                  key={item.city}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <item.icon className="h-5 w-5 text-[#C9A063]" />
                  <span className="text-sm text-slate-700">{item.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-14">
        <h3 className="text-3xl font-bold text-slate-900">
          Perguntas frequentes
        </h3>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-semibold text-[#C9A063]">
              Posso tomar treinando?
            </h4>
            <p className="mt-2 text-sm text-slate-700">
              Sim, potencializa: Turbo Black foi desenvolvido para elevar a
              performance na academia e ampliar o gasto calórico com segurança.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-semibold text-[#C9A063]">
              Tem efeito rebote?
            </h4>
            <p className="mt-2 text-sm text-slate-700">
              Fórmula clínica segura e balanceada, com ingredientes que
              respeitam o metabolismo e evitam rebounds quando usado conforme
              protocolo.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-semibold text-[#C9A063]">
              Sou de [Cidade], quanto tempo para chegar?
            </h4>
            <p className="mt-2 text-sm text-slate-700">
              Envio imediato via motoboy no Vale dos Sinos. Em até 2h | resto do
              BR em até 3 dias úteis.
            </p>
          </article>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 text-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Siga nossas redes
            </h4>
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://instagram.com/renova.clinicb"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Instagram"
            >
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#1f2937] transition hover:border-[#C9A063] hover:bg-[#fce8d7] hover:text-[#C9A063]">
                <Image
                  src="/images/icons8-instagram-50.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
            </a>
            <a
              href="https://g.page/r/CRg1mj-whZ0pEBM"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Google Meu Negócio"
            >
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#1f2937] transition hover:border-[#C9A063] hover:bg-[#fce8d7] hover:text-[#C9A063]">
                <Image
                  src="/images/icons8-google-meu-negócio-50.png"
                  alt="Google Meu Negócio"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086553007390"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Facebook"
            >
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#1f2937] transition hover:border-[#C9A063] hover:bg-[#fce8d7] hover:text-[#C9A063]">
                <Image
                  src="/images/face-icon.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@renova.clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="TikTok"
            >
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#1f2937] transition hover:border-[#C9A063] hover:bg-[#fce8d7] hover:text-[#C9A063]">
                <Image
                  src="/images/tiktok-icon.png"
                  alt="TikTok"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
            </a>
          </div>
          <div className="text-center">
            <a
              href="/feedback"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C9A063] bg-[#C9A063]/10 px-4 py-2 text-sm font-semibold text-[#0f172a] transition hover:bg-[#C9A063]/20"
            >
              <MessageCircle className="h-4 w-4" />
              Feedback de Clientes
            </a>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>© 2024 Renova Clinic</p>
            <p>Campo Bom - Novo Hamburgo - Santo Antônio da Patrulha</p>
          </div>
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send/?phone=+555196490632&text=Vim+do+Google+e+gostaria+de+comprar&type=phone_number&app_absent=0&gad_source=1&gad_campaignid=23441772904&gbraid=0AAAABB9h1o5NHB9PRcQydQ8fy-1dwk9C7&gclid=Cj0KCQiA1czLBhDhARIsAIEc7uheOXfxqc9_FOQICnqtwpa4Q5D7l2acqaq5zzkL7WH9wDv9UuTbVgYaAlIHEALw_wcB"
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
