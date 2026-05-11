import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { empresa, socios, diferenciais, materiais } from "@/lib/data";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a história da Ebanos Planejados: 15 anos de experiência em móveis residenciais personalizados em São Paulo. Missão, visão, valores e equipe.",
};

const missaoVisaoValores = [
  {
    titulo: "Missão",
    texto:
      "Transformar ambientes residenciais através de móveis artesanais personalizados, unindo qualidade, funcionalidade e beleza para criar lares que reflitam a personalidade de cada cliente.",
  },
  {
    titulo: "Visão",
    texto:
      "Ser a marcenaria de referência na Grande São Paulo, reconhecida pela excelência artesanal, inovação no design e pelo compromisso com a sustentabilidade.",
  },
  {
    titulo: "Valores",
    texto:
      "Qualidade sem concessões, honestidade nas relações, respeito ao meio ambiente, prazos cumpridos e satisfação total do cliente em cada projeto entregue.",
  },
];

const linha_do_tempo = [
  { ano: "2009", evento: "Fundação da Ebanos Planejados por Carlos e Fernanda Silva" },
  { ano: "2012", evento: "Expansão do ateliê e contratação dos primeiros marceneiros" },
  { ano: "2015", evento: "Implantação de CNC e ferramentas de design 3D" },
  { ano: "2018", evento: "Certificação de madeira sustentável pelo IBAMA" },
  { ano: "2021", evento: "Prêmio Top Marcenaria SP — categoria Melhor Personalização" },
  { ano: "2024", evento: "Mais de 1.200 projetos entregues na Grande São Paulo" },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* ── Hero da página ── */}
      <section className="relative pt-32 pb-20 bg-stone-900 overflow-hidden" aria-label="Quem somos — Ebanos Planejados">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1493787039806-2edcbe808750?w=1600&q=80"
            alt="Marceneiro trabalhando em peça de madeira artesanal"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 bg-amber-600/30 text-amber-300 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Nossa história
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5">
              Quem Somos
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              15 anos transformando madeira em memórias afetivas dentro dos lares de São Paulo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── História da empresa ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="historia-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slide-left">
            <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80"
                alt="Ateliê da Ebanos Planejados com ferramentas e madeiras"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <SectionHeader
              tag="Nossa história"
              titulo="Raízes no Artesanato, Alma no Design"
              center={false}
              id="historia-titulo"
            />
            <div className="space-y-4 text-stone-600 leading-relaxed text-[15px]">
              <p>
                A Ebanos Planejados nasceu em 2009 de um sonho simples: criar móveis que as pessoas amassem de verdade. Carlos Silva, mestre marceneiro com 30 anos de ofício, e Fernanda Silva, arquiteta apaixonada por design de interiores, fundaram um pequeno ateliê no bairro Vila Móvel, em São Paulo.
              </p>
              <p>
                Nos primeiros anos, cada peça saía das mãos do Carlos com o cuidado de quem assina uma obra de arte. Com o tempo, a fama do trabalho impecável se espalhou pelo boca a boca — e o ateliê foi crescendo, sem jamais perder a essência artesanal.
              </p>
              <p>
                Hoje, com uma equipe de 18 profissionais e tecnologia CNC de ponta, entregamos mais de 150 projetos por ano, sempre com o mesmo compromisso: cada móvel é único, feito sob medida, pensado para a sua vida.
              </p>
            </div>
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-amber-800 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
            >
              Solicitar orçamento
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Missão, Visão, Valores ── */}
      <section className="py-20 bg-stone-50" aria-labelledby="mvv-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              tag="Identidade"
              titulo="Missão, Visão e Valores"
              id="mvv-titulo"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {missaoVisaoValores.map((item, i) => (
              <AnimatedSection key={item.titulo} delay={i * 120}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 h-full">
                  <div className="w-10 h-1 bg-amber-700 mb-5 rounded-full" aria-hidden="true" />
                  <h3 className="font-[var(--font-playfair)] text-xl font-bold text-stone-900 mb-3">
                    {item.titulo}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{item.texto}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sócios / Equipe ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="socios-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              tag="Quem faz acontecer"
              titulo="Nossos Fundadores"
              id="socios-titulo"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {socios.map((socio, i) => (
              <AnimatedSection key={socio.nome} delay={i * 150}>
                <div className="text-center card-hover bg-stone-50 rounded-2xl p-8 border border-stone-100">
                  <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-amber-200">
                    <Image
                      src={socio.avatar}
                      alt={`Foto de ${socio.nome}`}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-xl font-bold text-stone-900">
                    {socio.nome}
                  </h3>
                  <p className="text-amber-700 text-sm font-medium mb-3">{socio.cargo}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{socio.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Linha do tempo ── */}
      <section className="py-20 bg-amber-900 text-white" aria-labelledby="timeline-titulo">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              tag="Nossa trajetória"
              titulo="15 Anos de História"
              light
              id="timeline-titulo"
            />
          </AnimatedSection>
          <ol className="mt-14 relative border-l border-amber-700 space-y-8 pl-8">
            {linha_do_tempo.map((item, i) => (
              <AnimatedSection key={item.ano} delay={i * 100}>
                <li className="relative">
                  <div
                    className="absolute -left-[2.6rem] w-5 h-5 bg-amber-400 rounded-full border-4 border-amber-900 mt-0.5"
                    aria-hidden="true"
                  />
                  <time className="text-amber-300 text-xs font-bold uppercase tracking-widest block mb-1">
                    {item.ano}
                  </time>
                  <p className="text-stone-200 text-[15px]">{item.evento}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Materiais utilizados ── */}
      <section className="py-20 bg-stone-50" aria-labelledby="materiais-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              tag="Qualidade garantida"
              titulo="Materiais que Utilizamos"
              subtitulo="Trabalhamos apenas com materiais certificados e fornecedores homologados para garantir durabilidade e acabamento premium."
              id="materiais-titulo"
            />
          </AnimatedSection>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {materiais.map((mat, i) => (
              <AnimatedSection key={mat} delay={i * 80}>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-stone-100 shadow-sm text-sm text-stone-700">
                  <CheckCircle2 size={18} className="text-amber-700 shrink-0" aria-hidden="true" />
                  {mat}
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-stone-900 mb-4">
              Pronto para criar o ambiente dos seus sonhos?
            </h2>
            <p className="text-stone-600 mb-8">
              Agende uma visita gratuita e veja como podemos transformar sua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="px-8 py-3.5 bg-amber-800 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors"
              >
                Solicitar Orçamento Grátis
              </Link>
              <Link
                href="/galeria"
                className="px-8 py-3.5 border-2 border-amber-800 text-amber-900 font-semibold rounded-xl hover:bg-amber-50 transition-colors"
              >
                Ver Portfólio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
