"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Ruler, Package, X } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ambientes, type Movel } from "@/lib/data";

// ── Modal de detalhe do móvel ──────────────────────────────
function ModalMovel({
  movel,
  onFechar,
}: {
  movel: Movel;
  onFechar: () => void;
}) {
  const whatsapp = `https://wa.me/5519999998888?text=Olá! Tenho interesse no móvel: ${movel.nome}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onFechar}
        aria-hidden="true"
      />
      {/* Painel */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onFechar}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
          aria-label="Fechar detalhes do móvel"
        >
          <X size={18} />
        </button>

        {/* Imagem */}
        <div className="relative h-60 sm:h-72">
          <Image
            src={movel.imagem}
            alt={movel.nome}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          {movel.destaque && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">
              Destaque
            </span>
          )}
        </div>

        <div className="p-6">
          <h2 id="modal-titulo" className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mb-2">
            {movel.nome}
          </h2>
          <p className="text-3xl font-bold text-amber-800 mb-4">
            R$ {movel.preco.toLocaleString("pt-BR")}
            <span className="text-sm font-normal text-stone-500 ml-2">preço base*</span>
          </p>
          <p className="text-stone-600 leading-relaxed mb-5">{movel.descricao}</p>

          {/* Detalhes */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-amber-800 mb-2">
                <Ruler size={16} aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wide">Dimensões</span>
              </div>
              <p className="text-sm text-stone-700">{movel.dimensoes}</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-amber-800 mb-2">
                <Package size={16} aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wide">Materiais</span>
              </div>
              <ul className="text-sm text-stone-700 space-y-0.5">
                {movel.materiais.map((m) => (
                  <li key={m} className="truncate">· {m}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs text-stone-400 mb-5">
            * Preço base sem personalização. O valor final depende das dimensões, materiais e acabamentos escolhidos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir pelo WhatsApp
            </a>
            <Link
              href="/orcamento"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-800 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors"
            >
              <ShoppingBag size={16} aria-hidden="true" />
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card de móvel ──────────────────────────────────────────
function CardMovel({
  movel,
  onAbrir,
}: {
  movel: Movel;
  onAbrir: (m: Movel) => void;
}) {
  return (
    <article className="card-hover bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm flex flex-col h-full">
      {/* Imagem com lazy loading */}
      <div className="img-zoom-container relative h-52">
        <Image
          src={movel.imagem}
          alt={movel.nome}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {movel.destaque && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-amber-600 text-white text-xs font-bold rounded-full shadow">
            Destaque
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-[var(--font-playfair)] text-lg font-bold text-stone-900 mb-1">
          {movel.nome}
        </h4>
        <p className="text-stone-500 text-sm leading-snug mb-3 line-clamp-2 flex-1">
          {movel.descricao}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100">
          <span className="text-amber-800 font-bold text-lg">
            R$ {movel.preco.toLocaleString("pt-BR")}
          </span>
          <button
            onClick={() => onAbrir(movel)}
            className="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors"
            aria-label={`Ver detalhes de ${movel.nome}`}
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}

// ── Página principal ───────────────────────────────────────
export default function MoveisPage() {
  const [movelAtivo, setMovelAtivo] = useState<Movel | null>(null);
  const [ambienteFiltro, setAmbienteFiltro] = useState<string>("todos");

  const ambientesFiltrados =
    ambienteFiltro === "todos"
      ? ambientes
      : ambientes.filter((a) => a.id === ambienteFiltro);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-amber-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Catálogo completo
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4">
              Nossos Móveis
            </h1>
            <p className="text-amber-100 text-lg max-w-xl mx-auto">
              Explore nossa coleção de móveis artesanais para cada ambiente. Tudo pode ser personalizado para o seu espaço.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Filtro por ambiente ── */}
      <nav
        className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm"
        aria-label="Filtrar por ambiente"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => setAmbienteFiltro("todos")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                ambienteFiltro === "todos"
                  ? "bg-amber-800 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
              aria-pressed={ambienteFiltro === "todos"}
            >
              Todos os ambientes
            </button>
            {ambientes.map((a) => (
              <button
                key={a.id}
                onClick={() => setAmbienteFiltro(a.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  ambienteFiltro === a.id
                    ? "bg-amber-800 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
                aria-pressed={ambienteFiltro === a.id}
              >
                {a.nome}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Listagem por ambiente ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {ambientesFiltrados.map((ambiente, aIdx) => (
          <section
            key={ambiente.id}
            id={ambiente.id}
            aria-labelledby={`titulo-${ambiente.id}`}
          >
            <AnimatedSection delay={aIdx * 80}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-amber-700 text-xs font-semibold uppercase tracking-widest block mb-1">
                    Ambiente
                  </span>
                  <h2
                    id={`titulo-${ambiente.id}`}
                    className="font-[var(--font-playfair)] text-3xl font-bold text-stone-900"
                  >
                    {ambiente.nome}
                  </h2>
                  <p className="text-stone-500 text-sm mt-1">{ambiente.descricao}</p>
                </div>
                <span className="shrink-0 text-sm text-stone-400">
                  {ambiente.moveis.length} produtos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {ambiente.moveis.map((movel, mIdx) => (
                  <AnimatedSection key={movel.id} delay={mIdx * 80}>
                    <CardMovel movel={movel} onAbrir={setMovelAtivo} />
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </section>
        ))}
      </div>

      {/* CTA inferior */}
      <section className="py-16 bg-stone-50 text-center">
        <AnimatedSection>
          <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mb-3">
            Não encontrou o que procura?
          </h2>
          <p className="text-stone-500 mb-6 max-w-md mx-auto">
            Criamos qualquer móvel sob medida. Entre em contato e conte sobre o seu projeto.
          </p>
          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-800 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors"
          >
            Solicitar projeto personalizado
          </Link>
        </AnimatedSection>
      </section>

      {/* Modal de detalhe */}
      {movelAtivo && (
        <ModalMovel
          movel={movelAtivo}
          onFechar={() => setMovelAtivo(null)}
        />
      )}
    </>
  );
}
