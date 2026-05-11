"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { depoimentos } from "@/lib/data";

// Componente de estrelas reutilizável
function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação: ${nota} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < nota ? "text-amber-400 fill-amber-400" : "text-stone-300"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function DepoimentosSection() {
  const [atual, setAtual] = useState(0);

  const anterior = () =>
    setAtual((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  const proximo = () =>
    setAtual((prev) => (prev + 1) % depoimentos.length);

  const dep = depoimentos[atual];

  return (
    <section
      className="py-20 lg:py-28 bg-stone-900"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="Clientes felizes"
            titulo="O que dizem sobre nós"
            subtitulo="Mais de 1.200 famílias da Grande São Paulo confiaram em nós para transformar sua casa."
            light
            id="depoimentos-titulo"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* ── Carrossel de depoimento principal ── */}
          <AnimatedSection animation="slide-left">
            <div className="relative bg-stone-800 rounded-2xl p-8 lg:p-10">
              {/* Aspas decorativas */}
              <Quote
                size={40}
                className="text-amber-600/40 mb-4"
                aria-hidden="true"
              />

              {/* Texto do depoimento com transição */}
              <blockquote>
                <p className="text-stone-200 text-lg leading-relaxed italic mb-6 min-h-[80px]">
                  &ldquo;{dep.texto}&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={dep.avatar}
                      alt={`Foto de ${dep.nome}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-white text-sm">
                      {dep.nome}
                    </cite>
                    <p className="text-stone-400 text-xs">{dep.bairro}</p>
                    <Estrelas nota={dep.nota} />
                  </div>
                  <span className="ml-auto text-xs text-amber-500 font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">
                    {dep.ambiente}
                  </span>
                </footer>
              </blockquote>

              {/* Navegação do carrossel */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={anterior}
                  className="p-2 rounded-lg bg-stone-700 hover:bg-amber-800 text-stone-300 hover:text-white transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                {/* Indicadores */}
                <div className="flex gap-1.5" role="tablist" aria-label="Depoimentos">
                  {depoimentos.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === atual}
                      onClick={() => setAtual(i)}
                      aria-label={`Depoimento de ${depoimentos[i].nome}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === atual ? "w-6 bg-amber-500" : "w-2 bg-stone-600 hover:bg-stone-500"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={proximo}
                  className="p-2 rounded-lg bg-stone-700 hover:bg-amber-800 text-stone-300 hover:text-white transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Cards de depoimentos fixos (os demais) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {depoimentos.map((d, i) => (
              <AnimatedSection key={d.id} delay={i * 100}>
                <button
                  onClick={() => setAtual(i)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 card-hover ${
                    i === atual
                      ? "border-amber-600 bg-amber-900/20"
                      : "border-stone-700 bg-stone-800/50 hover:border-stone-600"
                  }`}
                  aria-current={i === atual ? "true" : undefined}
                >
                  <Estrelas nota={d.nota} />
                  <p className="text-stone-300 text-sm mt-2 mb-3 line-clamp-2 leading-relaxed">
                    &ldquo;{d.texto}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={d.avatar}
                        alt={`Foto de ${d.nome}`}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{d.nome}</p>
                      <p className="text-stone-500 text-xs">{d.bairro}</p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Nota média geral */}
        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-800 rounded-full">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white font-bold">5.0</span>
              <span className="text-stone-400 text-sm">baseado em 1.200+ projetos</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
