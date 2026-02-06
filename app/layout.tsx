import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renova Clinic | Criolipólise e Tratamento Estético",
  description:
    "Renova Clinic - Criolipólise em Campo Bom: tratamento estético não invasivo para reduzir gordura localizada com protocolo personalizado. Agende avaliação e resultados comprovados.",
  keywords: [
    "criolipólise campo bom",
    "clínica de criolipólise campo bom",
    "criolipólise gordura localizada",
    "tratamento gordura localizada campo bom",
    "eliminar gordura localizada sem cirurgia",
    "criolipólise abdômen campo bom",
    "criolipólise flancos campo bom",
    "criolipólise culote campo bom",
    "clínica estética campo bom criolipólise",
    "criolipólise funciona",
    "preço criolipólise campo bom",
    "orçamento criolipólise campo bom",
    "criolipólise sem cirurgia",
    "procedimento para gordura localizada",
    "estética corporal campo bom",
    "clínica estética para emagrecimento",
    "tratamento estético gordura localizada",
    "redução de medidas com criolipólise",
    "agendar criolipólise campo bom",
    "especialista em criolipólise campo bom",
  ],
  metadataBase: new URL("https://www.renovaclinicb.com.br"),
  alternates: {
    canonical: "https://www.renovaclinicb.com.br",
  },
  openGraph: {
    type: "website",
    url: "https://www.renovaclinicb.com.br",
    title: "Renova Clinic | Criolipólise e Tratamento Estético",
    description:
      "Renova Clinic - Criolipólise em Campo Bom: tratamento estético não invasivo para reduzir gordura localizada com protocolo personalizado. Agende avaliação e resultados comprovados.",
    siteName: "Renova Clinic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V16G1DTXP3"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-V16G1DTXP3');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
