import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do site da Marcenaria Silva.",
};

export default function TermosPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="font-[var(--font-playfair)] text-4xl font-bold text-stone-900 mb-6">
        Termos de Uso
      </h1>
      <div className="space-y-4 text-stone-600 leading-relaxed text-[15px]">
        <p>
          Ao utilizar o site da Marcenaria Silva, você concorda com os presentes termos. O site é
          disponibilizado para fins informativos e comerciais relacionados aos serviços de
          marcenaria e móveis planejados.
        </p>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mt-8">
          Propriedade intelectual
        </h2>
        <p>
          Todo o conteúdo deste site — textos, imagens, logotipo e design — é de propriedade
          exclusiva da Marcenaria Silva e protegido por lei. É proibida a reprodução sem
          autorização prévia e expressa.
        </p>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mt-8">
          Orçamentos
        </h2>
        <p>
          Os preços apresentados no site são valores de referência e podem variar conforme
          dimensões, materiais e acabamentos escolhidos. O valor final é definido após visita
          técnica e apresentação de proposta formal.
        </p>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mt-8">
          Limitação de responsabilidade
        </h2>
        <p>
          A Marcenaria Silva não se responsabiliza por danos decorrentes do uso inadequado das
          informações deste site. As informações são fornecidas sem garantia de completude ou
          precisão absoluta.
        </p>
      </div>
    </div>
  );
}
