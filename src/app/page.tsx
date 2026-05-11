import HeroSection from "@/components/home/HeroSection";
import AmbientesSection from "@/components/home/AmbientesSection";
import DiferenciaisSection from "@/components/home/DiferenciaisSection";
import DepoimentosSection from "@/components/home/DepoimentosSection";
import CtaSection from "@/components/home/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcenaria Silva | Móveis Feitos à Mão, Feitos com Amor",
  description:
    "Móveis residenciais personalizados na Grande São Paulo. 15 anos de experiência. Consulta de design grátis. Solicite seu orçamento agora.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DiferenciaisSection />
      <AmbientesSection />
      <DepoimentosSection />
      <CtaSection />
    </>
  );
}
