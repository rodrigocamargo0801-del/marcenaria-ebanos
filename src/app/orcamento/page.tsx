"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { empresa, ambientes } from "@/lib/data";

// Tipo do formulário
type FormData = {
  nome: string;
  email: string;
  telefone: string;
  ambiente: string;
  descricao: string;
  prazo: string;
  comoConheceu: string;
};

const PRAZO_OPTIONS = [
  "Até 1 mês",
  "1 a 3 meses",
  "3 a 6 meses",
  "Sem pressa — planejando",
];

const COMO_CONHECEU = [
  "Indicação de amigo/familiar",
  "Instagram",
  "Google",
  "Facebook",
  "Outros",
];

export default function OrcamentoPage() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    ambiente: "",
    descricao: "",
    prazo: "",
    comoConheceu: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erros, setErros] = useState<Partial<FormData>>({});

  // Máscara simples de telefone
  const mascaraTelefone = (v: string) => {
    const nums = v.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return `(${nums}`;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "telefone" ? mascaraTelefone(value) : value,
    }));
    // Limpa erro do campo ao editar
    if (erros[name as keyof FormData]) {
      setErros((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validar = (): boolean => {
    const novosErros: Partial<FormData> = {};
    if (!form.nome.trim()) novosErros.nome = "Informe seu nome.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      novosErros.email = "E-mail inválido.";
    if (form.telefone.replace(/\D/g, "").length < 10)
      novosErros.telefone = "Telefone incompleto.";
    if (!form.ambiente) novosErros.ambiente = "Selecione um ambiente.";
    if (!form.descricao.trim() || form.descricao.trim().length < 20)
      novosErros.descricao = "Descreva seu projeto com pelo menos 20 caracteres.";
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    setEnviando(true);
    // Simula envio (em produção: POST para API route ou serviço de e-mail)
    await new Promise((res) => setTimeout(res, 1500));
    setEnviando(false);
    setEnviado(true);
  };

  // Monta link do WhatsApp com dados do formulário pré-preenchidos
  const whatsappUrl = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
    `Olá! Me chamo ${form.nome || "..."} e gostaria de um orçamento para ${form.ambiente || "meu projeto"}. ${form.descricao || ""}`
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-amber-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1493787039806-2edcbe808750?w=1600&q=80"
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
              Grátis e sem compromisso
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4">
              Solicite seu Orçamento
            </h1>
            <p className="text-amber-100 text-lg max-w-xl mx-auto">
              Preencha o formulário e nossa equipe retorna em até 24 horas com o projeto personalizado para você.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* ── Formulário ─────────────────────────── */}
        <div className="lg:col-span-2">
          <AnimatedSection animation="slide-left">
            {enviado ? (
              // Estado de sucesso
              <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                <CheckCircle2
                  size={56}
                  className="text-green-600 mx-auto mb-5"
                  aria-hidden="true"
                />
                <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mb-3">
                  Orçamento recebido!
                </h2>
                <p className="text-stone-600 max-w-md mx-auto mb-6">
                  Obrigado, <strong>{form.nome}</strong>! Nossa equipe vai analisar seu projeto e entrar em contato em até 24 horas pelo e-mail <em>{form.email}</em>.
                </p>
                <p className="text-stone-500 text-sm mb-6">
                  Prefere uma resposta mais rápida? Fale diretamente no WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Continuar pelo WhatsApp
                </a>
              </div>
            ) : (
              // Formulário
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulário de solicitação de orçamento"
                className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8 space-y-6"
              >
                <SectionHeader
                  tag="Formulário"
                  titulo="Conte sobre seu projeto"
                  center={false}
                />

                {/* Linha 1: Nome + Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-stone-700 mb-1">
                      Nome completo <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="João Silva"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                        erros.nome
                          ? "border-red-400 bg-red-50"
                          : "border-stone-200 focus:border-amber-600 bg-stone-50 focus:bg-white"
                      }`}
                      aria-invalid={!!erros.nome}
                      aria-describedby={erros.nome ? "erro-nome" : undefined}
                    />
                    {erros.nome && (
                      <p id="erro-nome" className="text-red-500 text-xs mt-1" role="alert">
                        {erros.nome}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-stone-700 mb-1">
                      Telefone / WhatsApp <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(19) 99999-8888"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                        erros.telefone
                          ? "border-red-400 bg-red-50"
                          : "border-stone-200 focus:border-amber-600 bg-stone-50 focus:bg-white"
                      }`}
                      aria-invalid={!!erros.telefone}
                      aria-describedby={erros.telefone ? "erro-telefone" : undefined}
                    />
                    {erros.telefone && (
                      <p id="erro-telefone" className="text-red-500 text-xs mt-1" role="alert">
                        {erros.telefone}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    E-mail <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="joao@email.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                      erros.email
                        ? "border-red-400 bg-red-50"
                        : "border-stone-200 focus:border-amber-600 bg-stone-50 focus:bg-white"
                    }`}
                    aria-invalid={!!erros.email}
                    aria-describedby={erros.email ? "erro-email" : undefined}
                  />
                  {erros.email && (
                    <p id="erro-email" className="text-red-500 text-xs mt-1" role="alert">
                      {erros.email}
                    </p>
                  )}
                </div>

                {/* Linha 2: Ambiente + Prazo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ambiente" className="block text-sm font-medium text-stone-700 mb-1">
                      Ambiente <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="ambiente"
                      name="ambiente"
                      required
                      value={form.ambiente}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                        erros.ambiente
                          ? "border-red-400 bg-red-50"
                          : "border-stone-200 focus:border-amber-600 bg-stone-50 focus:bg-white"
                      }`}
                      aria-invalid={!!erros.ambiente}
                    >
                      <option value="">Selecione...</option>
                      {ambientes.map((a) => (
                        <option key={a.id} value={a.nome}>
                          {a.nome}
                        </option>
                      ))}
                      <option value="Outros">Outros / Vários ambientes</option>
                    </select>
                    {erros.ambiente && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {erros.ambiente}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="prazo" className="block text-sm font-medium text-stone-700 mb-1">
                      Prazo desejado
                    </label>
                    <select
                      id="prazo"
                      name="prazo"
                      value={form.prazo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-600 bg-stone-50 focus:bg-white text-sm outline-none transition-colors"
                    >
                      <option value="">Selecione...</option>
                      {PRAZO_OPTIONS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Descrição */}
                <div>
                  <label htmlFor="descricao" className="block text-sm font-medium text-stone-700 mb-1">
                    Descreva seu projeto <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="descricao"
                    name="descricao"
                    required
                    rows={5}
                    value={form.descricao}
                    onChange={handleChange}
                    placeholder="Ex: Preciso de um guarda-roupa com 6 portas para quarto de 4x4m, cor branca, com espelho. Também gostaria de um criado-mudo suspenso..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors resize-none ${
                      erros.descricao
                        ? "border-red-400 bg-red-50"
                        : "border-stone-200 focus:border-amber-600 bg-stone-50 focus:bg-white"
                    }`}
                    aria-invalid={!!erros.descricao}
                    aria-describedby={erros.descricao ? "erro-descricao" : undefined}
                  />
                  {erros.descricao && (
                    <p id="erro-descricao" className="text-red-500 text-xs mt-1" role="alert">
                      {erros.descricao}
                    </p>
                  )}
                </div>

                {/* Como conheceu */}
                <div>
                  <label htmlFor="comoConheceu" className="block text-sm font-medium text-stone-700 mb-1">
                    Como nos conheceu?
                  </label>
                  <select
                    id="comoConheceu"
                    name="comoConheceu"
                    value={form.comoConheceu}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-600 bg-stone-50 focus:bg-white text-sm outline-none transition-colors"
                  >
                    <option value="">Selecione...</option>
                    {COMO_CONHECEU.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Botão submit */}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-amber-800 hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-base"
                  aria-busy={enviando}
                >
                  {enviando ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
                      Solicitar Orçamento Grátis
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-stone-400">
                  Seus dados estão protegidos e não serão compartilhados com terceiros.
                </p>

                {/* WhatsApp alternativo */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-stone-200" />
                  <span className="text-xs text-stone-400">ou</span>
                  <div className="flex-1 h-px bg-stone-200" />
                </div>
                <a
                  href={`https://wa.me/${empresa.whatsapp}?text=Olá! Gostaria de um orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Prefiro pelo WhatsApp
                </a>
              </form>
            )}
          </AnimatedSection>
        </div>

        {/* ── Sidebar de contato ────────────────── */}
        <aside className="space-y-6">
          {/* Informações */}
          <AnimatedSection delay={200}>
            <div className="bg-stone-900 text-white rounded-2xl p-7">
              <h2 className="font-[var(--font-playfair)] text-xl font-bold mb-6">
                Informações de Contato
              </h2>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <address className="not-italic text-stone-300 leading-snug">
                    {empresa.endereco}
                  </address>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone size={18} className="text-amber-400 shrink-0" aria-hidden="true" />
                  <a href={`tel:${empresa.telefone}`} className="text-stone-300 hover:text-amber-300 transition-colors">
                    {empresa.telefone}
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={18} className="text-amber-400 shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${empresa.email}?subject=${encodeURIComponent("Solicitação de Orçamento — Ebanos Planejados")}&body=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para móveis planejados.\n\nNome: \nTelefone: \nAmbiente desejado: \nDescrição do projeto: ")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const subject = encodeURIComponent("Solicitação de Orçamento — Ebanos Planejados");
                      const body = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para móveis planejados.\n\nNome: \nTelefone: \nAmbiente desejado: \nDescrição do projeto: ");
                      const mailtoUrl = `mailto:${empresa.email}?subject=${subject}&body=${body}`;
                      // Tenta abrir no Outlook via protocolo ms-outlook:
                      const outlookUrl = `ms-outlook:compose?to=${empresa.email}&subject=${subject}&body=${body}`;
                      const popup = window.open(outlookUrl, "_blank");
                      // Se o protocolo ms-outlook não for suportado, cai para mailto:
                      setTimeout(() => {
                        if (!popup || popup.closed || typeof popup.closed === "undefined") {
                          window.location.href = mailtoUrl;
                        }
                      }, 500);
                    }}
                    className="text-stone-300 hover:text-amber-300 transition-colors break-all"
                  >
                    {empresa.email}
                  </a>
                </li>
                <li className="flex gap-3 items-start">
                  <Clock size={18} className="text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-stone-300">{empresa.horario}</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Mapa embed (Google Maps) */}
          <AnimatedSection delay={300}>
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
              <iframe
                title="Localização da Ebanos Planejados no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Por que orçar conosco */}
          <AnimatedSection delay={400}>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-semibold text-stone-900 mb-4 text-sm">
                Por que solicitar seu orçamento aqui?
              </h3>
              <ul className="space-y-2.5 text-sm text-stone-600">
                {[
                  "Orçamento 100% gratuito e sem compromisso",
                  "Resposta em até 24 horas úteis",
                  "Visita técnica gratuita em Limeira-SP",
                  "Projeto em 3D antes de executar",
                  "Garantia de 5 anos em todos os móveis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </aside>
      </div>
    </>
  );
}
