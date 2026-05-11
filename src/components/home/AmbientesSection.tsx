import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ambientes } from "@/lib/data";

export default function AmbientesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="ambientes-titulo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="Especialidades"
            titulo="Móveis para Cada Ambiente"
            subtitulo="Projetamos e fabricamos móveis sob medida para todos os ambientes da sua casa, com materiais premium e acabamento artesanal."
            id="ambientes-titulo"
          />
        </AnimatedSection>

        {/*
          Grid assimétrico para desktop:
          – Primeiro card ocupa 2 colunas (destaque)
          – Demais dividem o espaço igualmente
        */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ambientes.map((ambiente, idx) => (
            <AnimatedSection
              key={ambiente.id}
              delay={idx * 100}
              className={idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                href={`/moveis#${ambiente.id}`}
                className="group block relative rounded-2xl overflow-hidden shadow-md h-72 lg:h-80 card-hover"
                aria-label={`Ver móveis para ${ambiente.nome}`}
              >
                {/* Imagem de fundo com lazy loading */}
                <div className="img-zoom-container absolute inset-0">
                  <Image
                    src={ambiente.imagem}
                    alt={`${ambiente.nome} com móveis sob medida`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={idx < 2 ? "eager" : "lazy"}
                  />
                </div>

                {/* Overlay gradiente */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Conteúdo do card */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest mb-1">
                    {ambiente.moveis.length} produtos disponíveis
                  </p>
                  <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white mb-1">
                    {ambiente.nome}
                  </h3>
                  <p className="text-stone-300 text-sm leading-snug mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {ambiente.descricao}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-amber-300 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Ver móveis
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA para a página completa de móveis */}
        <AnimatedSection delay={600}>
          <div className="mt-10 text-center">
            <Link
              href="/moveis"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-amber-800 text-amber-900 font-semibold rounded-xl hover:bg-amber-800 hover:text-white transition-all duration-200"
            >
              Ver todos os móveis
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
