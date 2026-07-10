import { Quote } from 'lucide-react';
import type { DepoimentosContent } from '../data/defaultContent';

export function Depoimentos({ content }: { content: DepoimentosContent }) {
  return (
    <section id="depoimentos" className="py-20 bg-orange-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-300 text-sm font-semibold uppercase tracking-wide">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {content.titulo}
          </h2>
          <p className="text-orange-200 max-w-xl mx-auto">
            {content.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map(d => (
            <div
              key={d.nome}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <Quote className="w-6 h-6 text-orange-300 shrink-0" />
              <p className="text-orange-50 text-sm leading-relaxed flex-1">"{d.texto}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{d.nome}</p>
                <p className="text-orange-300 text-xs">{d.cargo} — {d.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
