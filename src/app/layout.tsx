import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Tipografia: Playfair para headings, Inter para corpo ──
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ── SEO Metadata ──
export const metadata: Metadata = {
  title: {
    default: "Ebanos Planejados | Móveis Feitos à Mão, Feitos com Amor",
    template: "%s | Ebanos Planejados",
  },
  description:
    "Móveis residenciais personalizados com 15 anos de experiência. Sala, quarto, cozinha, home office e banheiro. Consulta de design grátis. Atendemos Limeira-SP e região.",
  keywords: [
    "marcenaria",
    "móveis planejados",
    "móveis sob medida",
    "marcenaria Limeira-SP",
    "móveis personalizados",
    "cozinha planejada",
    "guarda-roupa sob medida",
    "Ebanos Planejados",
  ],
  authors: [{ name: "Ebanos Planejados", url: "https://marcenaria-silva.com.br" }],
  creator: "Ebanos Planejados",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcenaria-silva.com.br",
    siteName: "Ebanos Planejados",
    title: "Ebanos Planejados | Móveis Feitos à Mão, Feitos com Amor",
    description:
      "Móveis residenciais personalizados com 15 anos de experiência em Limeira-SP. Consulta de design grátis.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sala de estar com móveis da Ebanos Planejados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebanos Planejados | Móveis Feitos à Mão",
    description: "Móveis residenciais personalizados. Consulta de design grátis em Limeira-SP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-[var(--font-inter)]">
        {/* Link de acessibilidade: pula para o conteúdo principal */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
