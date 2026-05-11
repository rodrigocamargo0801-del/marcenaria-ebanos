import {
  Award, Ruler, ShieldCheck, Palette, Truck, Leaf,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { diferenciais } from "@/lib/data";

// Mapa de ícones: string do data.ts → componente Lucide
const iconeMap: Record<string, React.ReactNode> = {
  award:         <Award size={28} aria-hidden="true" />,
  ruler:         <Ruler size={28} aria-hidden="true" />,
  "shield-check":<ShieldCheck size={28} aria-hidden="true" />,
  palette:       <Palette size={28} aria-hidden="true" />,
  truck:         <Truck size={28} aria-hidden="true" />,
  leaf:          <Leaf size={28} aria-hidden="true" />,
};

export default function DiferenciaisSection() {
  return (
    <section
      id="diferenciais"
      className="py-20 lg:py-28 bg-stone-50"
      aria-labelledby="diferenciais-titulo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="Por que nos escolher"
            titulo="Nossos Diferenciais"
            subtitulo="Cada detalhe do nosso processo foi pensado para garantir móveis excepcionais e uma experiência sem preocupações."
            id="diferenciais-titulo"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, idx) => (
            <AnimatedSection key={item.icone} delay={idx * 80}>
              <article className="card-hover group bg-white rounded-2xl p-7 border border-stone-100 shadow-sm h-full">
                {/* Ícone com fundo colorido */}
                <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-amber-800 group-hover:text-white transition-colors duration-300">
                  {iconeMap[item.icone] ?? <Award size={28} aria-hidden="true" />}
                </div>
                <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-stone-900 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.descricao}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Destaque: consulta grátis */}
        <AnimatedSection delay={500}>
          <div className="mt-12 rounded-2xl bg-amber-800 text-white p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-200 mb-1">
                Serviço exclusivo
              </p>
              <h3 className="font-[var(--font-playfair)] text-2xl lg:text-3xl font-bold">
                Consulta de Design Grátis
              </h3>
              <p className="text-amber-100 mt-2 max-w-lg">
                Nosso designer vai até a sua casa, mede o ambiente, apresenta a proposta em 3D e entrega o orçamento — sem custo algum.
              </p>
            </div>
            <a
              href={`https://wa.me/5519999998888?text=Quero agendar a consulta de design grátis!`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-3.5 bg-white text-amber-900 font-bold rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
            >
              Agendar Agora
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
