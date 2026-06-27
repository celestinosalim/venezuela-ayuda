import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Hanken_Grotesk } from "next/font/google";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Venezuela: Ayuda Verificada · Guía de fuentes reales · Terremoto 2026",
  description:
    "Guía verificada tras el terremoto de Venezuela (24 jun 2026): dónde donar sin estafas, ayuda en el terreno, buscar familiares e info oficial. Actividad sísmica en vivo (USGS).",
  openGraph: {
    title: "Venezuela: Ayuda Verificada — guía de fuentes reales",
    description:
      "Una sola página confiable: dónde donar sin estafas, ayuda en el terreno, buscar familiares e info oficial. Solo fuentes verificadas.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={sans.variable} suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
