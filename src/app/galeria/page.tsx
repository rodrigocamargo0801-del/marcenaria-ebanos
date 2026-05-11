"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { portfolio, ambientes, type ProjetoPortfolio } from "@/lib/data";

// ── Modal antes/depois ─────────────────────────────────────
function ModalProjeto({
  projeto,
  onFechar,
  onAnterior,
  onProximo,
}: {
  projeto: ProjetoPortfolio;
  onFechar: () => void;
  onAnterior: () => void;
  onProximo: () => void;
}) {
  const [aba, setAba] = useState<"antes" | "depois">("depois");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-galeria-titulo"
    >
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onFechar}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Botão fechar */}
        <button
          onClick={onFechar}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
          aria-label="Fechar visualização"
        >
          <X size={18} />
        </button>

        {/* Setas de navegação */}
        <button
          onClick={onAnterior}
          className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow transition-colors"
          aria-label="Projeto anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onProximo}
          className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow transition-colors"
          aria-label="Próximo projeto"
        >
          <ChevronRight size={20} />
        </button>

        {/* Imagem */}
        <div className="relative h-72 sm:h-96">
          <Image
            src={aba === "depois" ? projeto.depois : projeto.antes}
            alt={`${projeto.titulo} — ${aba}`}
            fill
            className="object-cover rounded-t-2xl transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-black/60 text-white text-xs rounded-full capitalize">
            {aba === "depois" ? "Depois" : "Antes"}
          </span>
        </div>

        {/* Toggle antes/depois */}
        <div className="flex border-b border-stone-100">
          {(["depois", "antes"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setAba(t)}
              className={`flex-1 py-3 text-sm font-semibold capitalize transition-colors ${
                aba === t
                  ? "border-b-2 border-amber-700 text-amber-800"
                  : "text-stone-500 hover:text-stone-700"
              }`}
              aria-pressed={aba === t}
            >
              {t === "depois" ? "Depois" : "Antes"}
            </button>
          ))}
        </div>

        <div className="p-6">
          <span className="text-amber-700 text-xs font-semibold uppercase tracking-widest">
            {projeto.ambiente} · {projeto.ano}
          </span>
          <h2
            id="modal-galeria-titulo"
            className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mt-1 mb-3"
          >
            {projeto.titulo}
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm">{projeto.descricao}</p>
        </div>
      </div>
    </div>
  );
}

// ── Card de projeto ────────────────────────────────────────
function CardProjeto({
  projeto,
  onAbrir,
}: {
  projeto: ProjetoPortfolio;
  onAbrir: () => void;
}) {
  return (
    <article
      className="card-hover group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm cursor-pointer"
      onClick={onAbrir}
      onKeyDown={(e) => e.key === "Enter" && onAbrir()}
      tabIndex={0}
      role="button"
      aria-label={`Ver projeto: ${projeto.titulo}`}
    >
      {/* Imagem "depois" como prévia */}
      <div className="img-zoom-container relative h-52">
        <Image
          src={projeto.depois}
          alt={`Resultado final: ${projeto.titulo}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Overlay com ícone de lupa */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <Eye
            size={28}
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
        <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-amber-700 text-white text-xs font-semibold rounded-full">
          Antes & Depois
        </span>
      </div>
      <div className="p-4">
        <span className="text-amber-700 text-xs font-semibold uppercase tracking-wide">
          {projeto.ambiente} · {projeto.ano}
        </span>
        <h3 className="font-[var(--font-playfair)] text-base font-bold text-stone-900 mt-0.5 mb-1">
          {projeto.titulo}
        </h3>
        <p className="text-stone-500 text-xs leading-snug line-clamp-2">{projeto.descricao}</p>
      </div>
    </article>
  );
}

// ── Página ─────────────────────────────────────────────────
export default function GaleriaPage() {
  const [filtro, setFiltro] = useState("todos");
  const [projetoAtivo, setProjetoAtivo] = useState<number | null>(null);

  const projetosFiltrados =
    filtro === "todos"
      ? portfolio
      : portfolio.filter((p) => p.ambienteId === filtro);

  const fechar = () => setProjetoAtivo(null);
  const anterior = () =>
    setProjetoAtivo((prev) =>
      prev !== null ? (prev - 1 + projetosFiltrados.length) % projetosFiltrados.length : 0
    );
  const proximo = () =>
    setProjetoAtivo((prev) =>
      prev !== null ? (prev + 1) % projetosFiltrados.length : 0
    );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 bg-amber-600/30 text-amber-300 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Projetos realizados
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4">
              Galeria & Portfólio
            </h1>
            <p className="text-stone-300 text-lg max-w-xl mx-auto">
              Veja a transformação real dos ambientes de nossos clientes. Clique em cada projeto para ver o antes e depois.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filtros */}
      <nav
        className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm"
        aria-label="Filtrar portfólio por ambiente"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3">
            <button
              onClick={() => setFiltro("todos")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filtro === "todos"
                  ? "bg-amber-800 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
              aria-pressed={filtro === "todos"}
            >
              Todos
            </button>
            {ambientes.map((a) => (
              <button
                key={a.id}
                onClick={() => setFiltro(a.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filtro === a.id
                    ? "bg-amber-800 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
                aria-pressed={filtro === a.id}
              >
                {a.nome}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Grid de projetos */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16" aria-live="polite">
        <AnimatedSection>
          <SectionHeader
            tag={`${projetosFiltrados.length} projetos`}
            titulo="Transformações Reais"
            subtitulo="Cada projeto é único. Clique para ver o comparativo antes e depois."
          />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projetosFiltrados.map((projeto, idx) => (
            <AnimatedSection key={projeto.id} delay={idx * 80}>
              <CardProjeto
                projeto={projeto}
                onAbrir={() => setProjetoAtivo(idx)}
              />
            </AnimatedSection>
          ))}
        </div>

        {projetosFiltrados.length === 0 && (
          <p className="text-center text-stone-500 py-20">
            Nenhum projeto encontrado para este filtro.
          </p>
        )}
      </section>

      {/* Modal */}
      {projetoAtivo !== null && projetosFiltrados[projetoAtivo] && (
        <ModalProjeto
          projeto={projetosFiltrados[projetoAtivo]}
          onFechar={fechar}
          onAnterior={anterior}
          onProximo={proximo}
        />
      )}
    </>
  );
}
