"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { VideoThumbnail } from "@/components/ui/video-thumbnail";
import { GoogleReviewCard } from "@/components/ui/google-review-card";
import { SectionHeader } from "@/components/ui/section-header";

export default function FeedbackPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=+555196490632&text=Vim+do+feedback+e+gostaria+de+agendar+uma+avaliação";

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: "/images/testmonials/1.webp",
      title: "Resultado Transformador",
      name: "Maria Silva",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      thumbnail: "/images/testmonials/2.webp",
      title: "Experiência Incrível",
      name: "Ana Costa",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      thumbnail: "/images/testmonials/3.webp",
      title: "Muito Satisfeita",
      name: "Juliana Martins",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      thumbnail: "/images/testmonials/4.webp",
      title: "Recomendo!",
      name: "Carolina Dias",
      videoUrl: "https://www.instagram.com/p/DUVyAQlALpo/",
    },
  ];

  const instagramPosts = [
    { id: 1, url: "https://www.instagram.com/p/DUVyAQlALpo/" },
    { id: 2, url: "https://www.instagram.com/p/DQxZBfLCYuS/" },
    { id: 3, url: "https://www.instagram.com/p/DPFYIzKiZqK/" },
    { id: 4, url: "https://www.instagram.com/p/DNs5iSgwFdR/" },
    { id: 4, url: "https://www.instagram.com/p/DNWiuL0NzA3/" },
    { id: 4, url: "https://www.instagram.com/p/DKkw2wpS_QS/" },
    { id: 4, url: "https://www.instagram.com/p/DFq78xptW2F/" },
    { id: 4, url: "https://www.instagram.com/p/C_1AUl2SaLy/" },
  ];

  const googleReviews = [
    {
      id: 1,
      author: "Camila Loch",
      text: "Melhor experiência e referência em estética da região! Talia tem mãos de fada! Super recomendo ✨",
      rating: 5,
      date: "Há 2 semanas",
      profilePic: "/images/profiles/camilaloch.png",
    },
    {
      id: 2,
      author: "Adriana Potura",
      text: "Melhor lugar para quem decide cuidar do seu corpo Profissionais capacitadas, queridas, as melhores! Ambiente acolhedor. Sempre nos recebem com sorriso no rosto.Super indico pra você que quer virar a chave e fazer alguma coisa por você!!!E o melhor sempre tem uma promoção, aproveitem !! ❤️.",
      rating: 5,
      date: "Há 4 semanas",
      profilePic: "/images/profiles/letra.png",
    },
    {
      id: 3,
      author: "Berenice Taques",
      text: "Clinica maravilhosaaaa...atendimento espetacular...super indico !!",
      rating: 4,
      date: "Há 1 mês",
      profilePic: "/images/profiles/amanda.web.png",
    },
  ];
  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-[45vh] bg-gradient-to-b from-secondary/30 to-background flex items-center  lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Image
              src="/images/logotipo.jpeg"
              alt="Renova Clinic"
              width={120}
              height={400}
              className="h-auto w-auto mx-auto rounded-full animate-fade-in"
            />

            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Vidas transformadas pela confiança na Renova Clinic
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Confira os depoimentos de clientes que já alcançaram seus
              objetivos estéticos e recuperaram a confiança no corpo.
            </p>

            <div
              className="pt-4 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Comece sua transformação
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="  bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {instagramPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <iframe
                    src={`${post.url}embed`}
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div className="text-center animate-fade-in">
              <a
                href="https://www.instagram.com/renova.clinicb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Ver mais no Instagram
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 lg:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16">
            <SectionHeader
              tag="🎥 Assista"
              title="Depoimentos em vídeo"
              subtitle="Histórias reais de clientes que confiaram em nós"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((video, index) => (
                <div
                  key={video.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <VideoThumbnail
                    thumbnail={video.thumbnail}
                    title={video.title}
                    name={video.name}
                    onClick={() => setSelectedVideo(video.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={
                videoTestimonials.find((v) => v.id === selectedVideo)?.videoUrl
              }
              title="Depoimento em vídeo"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Text Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="O que nossos clientes dizem no Google"
              subtitle="Confira avaliações da nossa clínica"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {googleReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <GoogleReviewCard {...review} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://g.page/r/CXJwq8F5lX3SEAI/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-8"
                >
                  Ver todas as avaliações
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Pronto para sua transformação?
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Agende uma avaliação sem compromisso com nossos especialistas e
              descubra as melhores opções para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 px-8"
                >
                  Agendar Avaliação
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href="https://maps.app.goo.gl/RknWxf9cmr4a1E8D7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-8"
                >
                  Localização
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              📍 Campo Bom & Santo Antônio da Patrulha - RS
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-serif text-lg mb-4">Renova Clinic</h3>
                <p className="text-sm text-background/70">
                  Clínica estética especializada em criolipólise e tratamentos
                  inovadores.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm text-background/70">
                  <li>
                    <a
                      href="https://renovaclinicb.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-background transition-colors"
                    >
                      Site Principal
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/renova.clinicb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-background transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-background transition-colors"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Horário</h4>
                <p className="text-sm text-background/70">
                  Segunda a Sábado
                  <br />
                  09:00 - 18:00
                </p>
              </div>
            </div>

            <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
              <p>© 2024 Renova Clinic. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
