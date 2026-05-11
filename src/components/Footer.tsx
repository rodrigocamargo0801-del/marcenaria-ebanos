import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { empresa } from "@/lib/data";

const navSections = [
  {
    titulo: "Navegação",
    links: [
      { href: "/", label: "Início" },
      { href: "/quem-somos", label: "Quem Somos" },
      { href: "/moveis", label: "Nossos Móveis" },
      { href: "/galeria", label: "Galeria / Portfólio" },
      { href: "/orcamento", label: "Orçamento" },
    ],
  },
  {
    titulo: "Ambientes",
    links: [
      { href: "/moveis#sala", label: "Sala de Estar" },
      { href: "/moveis#quarto", label: "Quarto" },
      { href: "/moveis#cozinha", label: "Cozinha" },
      { href: "/moveis#homeoffice", label: "Home Office" },
      { href: "/moveis#banheiro", label: "Banheiro" },
    ],
  },
];

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${empresa.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`;

  return (
    <footer className="bg-stone-900 text-stone-300" role="contentinfo">
      {/* ── Banda de CTA ── */}
      <div className="bg-amber-800 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-[var(--font-playfair)] text-2xl lg:text-3xl font-bold text-white">
              Consulta de Design Grátis
            </h2>
            <p className="text-amber-100 mt-1 text-sm">
              Nosso designer vai até você e apresenta o projeto em 3D sem custo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/orcamento"
              className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg border border-white/30 transition-colors text-sm"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </div>

      {/* ── Corpo do footer ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Coluna 1: Marca */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-4" aria-label="Página inicial">
            <span className="font-[var(--font-playfair)] text-xl font-bold text-white">
              Ebanos Planejados
            </span>
          </Link>
          <p className="text-sm text-stone-400 leading-relaxed mb-5">
            {empresa.descricao}
          </p>
          {/* Redes sociais */}
          <div className="flex gap-3">
            <a
              href={empresa.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Ebanos Planejados"
              className="p-2 bg-stone-800 hover:bg-amber-800 rounded-lg transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={empresa.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Ebanos Planejados"
              className="p-2 bg-stone-800 hover:bg-amber-800 rounded-lg transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={empresa.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest da Ebanos Planejados"
              className="p-2 bg-stone-800 hover:bg-amber-800 rounded-lg transition-colors"
            >
              {/* Ícone Pinterest SVG inline (não existe no Lucide) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Colunas 2 e 3: Links de navegação */}
        {navSections.map((section) => (
          <div key={section.titulo}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {section.titulo}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Coluna 4: Contato */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Contato
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic text-stone-400 leading-snug">
                {empresa.endereco}
              </address>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-amber-500 shrink-0" aria-hidden="true" />
              <a
                href={`tel:${empresa.telefone}`}
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                {empresa.telefone}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-amber-500 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${empresa.email}`}
                className="text-stone-400 hover:text-amber-400 transition-colors break-all"
              >
                {empresa.email}
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <Clock size={16} className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-stone-400">{empresa.horario}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Rodapé inferior ── */}
      <div className="border-t border-stone-800 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            &copy; {anoAtual} Ebanos Planejados. Todos os direitos reservados.{" "}
            <span className="text-stone-600">CNPJ {empresa.cnpj}</span>
          </p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="hover:text-stone-300 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-stone-300 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
