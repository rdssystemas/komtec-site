import { ArrowRight } from 'lucide-react';
import type { InformacoesContent } from '../data/defaultContent';

interface Props {
  content: InformacoesContent;
}

export function InformacoesDestaque({ content }: Props) {
  const artigos = content.items.filter(a => a.publicado).slice(0, 3);
  if (artigos.length === 0) return null;

  return (
    <section id="informacoes" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Central de Informações</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              Conteúdo para ajudar na gestão da sua empresa
            </h2>
          </div>
          <a
            href="/informacoes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 shrink-0"
          >
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artigos.map(artigo => (
            <a
              key={artigo.slug}
              href={`/informacoes/${artigo.slug}`}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-2.5 py-1 mb-3">
                {artigo.categoria}
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{artigo.titulo}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-3">{artigo.resumo}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{artigo.data}</span>
                <span>·</span>
                <span>{artigo.tempoLeitura}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
