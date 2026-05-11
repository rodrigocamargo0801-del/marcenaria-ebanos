// Cabeçalho de seção reutilizável com linha decorativa
// Centraliza o pattern de título + subtítulo usado em todas as seções

interface SectionHeaderProps {
  tag?: string;          // Pré-título em destaque (ex: "Nossos Serviços")
  titulo: string;
  subtitulo?: string;
  center?: boolean;
  light?: boolean;       // Versão para fundos escuros
  className?: string;
  id?: string;           // id para aria-labelledby nas seções
}

export default function SectionHeader({
  tag,
  titulo,
  subtitulo,
  center = true,
  light = false,
  className = "",
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={`${center ? "text-center" : ""} ${className}`}
    >
      {tag && (
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
            light
              ? "bg-amber-400/20 text-amber-300"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        id={id}
        className={`font-[var(--font-playfair)] text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-stone-900"
        }`}
      >
        {titulo}
      </h2>
      {/* Linha decorativa */}
      <div
        className={`mt-4 mb-5 ${center ? "mx-auto" : ""} flex items-center gap-2 ${
          center ? "justify-center" : ""
        }`}
      >
        <div className={`h-0.5 w-12 ${light ? "bg-amber-400" : "bg-amber-700"}`} />
        <div className={`h-1.5 w-1.5 rounded-full ${light ? "bg-amber-400" : "bg-amber-700"}`} />
        <div className={`h-0.5 w-4 ${light ? "bg-amber-400" : "bg-amber-700"}`} />
      </div>
      {subtitulo && (
        <p
          className={`text-base lg:text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-stone-300" : "text-stone-600"}`}
        >
          {subtitulo}
        </p>
      )}
    </div>
  );
}
