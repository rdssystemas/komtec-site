import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqContent } from '../data/defaultContent';

export function Faq({ content }: { content: FaqContent }) {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            {content.titulo}
          </h2>
          <p className="text-gray-500">{content.subtitulo}</p>
        </div>

        <div className="space-y-2">
          {content.items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setAberto(aberto === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm pr-4">{item.pergunta}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    aberto === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {aberto === i && (
                <div className="px-5 pb-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
