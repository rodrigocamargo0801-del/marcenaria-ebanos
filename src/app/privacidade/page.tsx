import type { Metadata } from "next";
import { empresa } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados da Ebanos Planejados.",
};

export default function PrivacidadePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="font-[var(--font-playfair)] text-4xl font-bold text-stone-900 mb-6">
        Política de Privacidade
      </h1>
      <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4 text-[15px]">
        <p>
          A Ebanos Planejados respeita sua privacidade e está comprometida com a proteção dos
          dados pessoais coletados neste site, em conformidade com a Lei Geral de Proteção de
          Dados (LGPD — Lei nº 13.709/2018).
        </p>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mt-8">
          Dados coletados
        </h2>
        <p>
          Coletamos apenas os dados fornecidos voluntariamente no formulário de orçamento: nome,
          e-mail, telefone e descrição do projeto. Esses dados são utilizados exclusivamente para
          retornar seu contato e apresentar uma proposta comercial.
        </p>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mt-8">
          Compartilhamento
        </h2>
        <p>
          Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins de
          marketing. Podemos compartilhar informações apenas com prestadores de serviços
          diretamente envolvidos na execução do seu projeto.
        </p>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-stone-900 mt-8">
          Seus direitos (LGPD)
        </h2>
        <p>
          Você pode solicitar a qualquer momento: acesso aos seus dados, correção de dados
          incorretos, exclusão dos seus dados ou portabilidade. Entre em contato pelo e-mail{" "}
          <a href={`mailto:${empresa.email}`} className="text-amber-700 underline">
            {empresa.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
