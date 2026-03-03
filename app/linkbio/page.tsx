"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HouseHeart,
  MessageCircle,
  MapPin,
  MapPinPen,
  Heart,
  Instagram,
  Star,
} from "lucide-react";

export default function LinkBioPage() {
  const logoSrc = "/images/logotipo.jpeg";

  const links = [
    {
      icon: HouseHeart,
      label: "Conheça nossa clínica",
      href: "https://renovaclinicb.com.br/home",
      color: "text-primary",
    },
    {
      icon: MessageCircle,
      label: "CHAME NO WHATSAPP",
      href: "https://api.whatsapp.com/send/?phone=+555196490632&text=Oiee+Vim+do+Instagram+pode+me+ajudar!",
      color: "text-primary",
    },
    {
      imageSrc: "/images/ice-icon.png",
      label: "Veja se a Criolipolise é para você",
      href: "https://renovaclinicb.com.br",
      color: "text-primary",
    },
    {
      icon: Heart,
      label: "Feedbacks de nossas clientes",
      href: "https://renovaclinicb.com.br/feedback",
      color: "text-primary",
    },
    {
      icon: Star,
      label: "Deixe sua avaliação no GOOGLE",
      href: "https://g.page/r/CRg1mj-whZ0pEBM/review",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-secondary flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="flex justify-center mb-4">
            <Image
              src={logoSrc}
              alt="Renova Clinic logo"
              width={400}
              height={10}
              className="rounded-full"
            />
          </div>

          <p className="text-sm md:text-base text-muted-foreground">
            Não desista de sua Melhor Versão,agende hoje sua avaliação
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 mb-8">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white border-2 border-primary rounded-full p-4 flex items-center justify-center gap-4 transition-all duration-300 hover:bg-primary hover:shadow-lg transform hover:scale-105">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    {link.imageSrc ? (
                      <div
                        className={`${link.color} group-hover:text-primary-foreground transition-colors w-6 h-6`}
                        style={{
                          WebkitMaskImage: `url(${link.imageSrc})`,
                          WebkitMaskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: `url(${link.imageSrc})`,
                          maskSize: "contain",
                          maskRepeat: "no-repeat",
                          backgroundColor: "currentColor",
                        }}
                      />
                    ) : (
                      <Icon
                        className={`w-6 h-6 ${link.color} group-hover:text-primary-foreground transition-colors`}
                      />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                    {link.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t-2 border-primary/20">
          <p className="text-xs text-center text-muted-foreground uppercase tracking-wider mb-4">
            Nos siga nas redes
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/renova.clinicb"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </div>
            </a>
            <a
              href="https://maps.app.goo.gl/RknWxf9cmr4a1E8D7"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                {/* using MapPinPen icon for consistency with location button */}
                <MapPinPen className="w-5 h-5" />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@renova.clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                {/* TikTok brand svg */}
                <Image
                  src="/images/tiktok-icon.png"
                  alt="tiktok"
                  width={30}
                  height={30}
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086553007390"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                {/* using face icon svg */}
                <Image
                  src="/images/face-icon.png"
                  alt="face icon"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 text-center text-xs text-muted-foreground space-y-2">
          <p>© 2024 Renova Clinic</p>
          <p>Camp Bom & Santo Antonio da Patrulha RS</p>
        </div>
      </div>
    </div>
  );
}
