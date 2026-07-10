import { getIcon } from '../data/iconMap';
import type { DiferenciaisContent } from '../data/defaultContent';

export function Diferenciais({ content }: { content: DiferenciaisContent }) {
  return (
    <section
      id="diferenciais"
      className="py-24"
      style={{ background: 'linear-gradient(to bottom, #5c1a06 0%, #2d0d03 40%, #100400 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/10 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-500/20 mb-5">
            Por que escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.titulo.includes('ERP KomTec Pro') ? (
              <>
                {content.titulo.split('ERP KomTec Pro')[0]}
                <span className="text-orange-400">ERP KomTec Pro</span>
                {content.titulo.split('ERP KomTec Pro')[1]}
              </>
            ) : content.titulo}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            {content.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.items.map(item => {
            const Icon = getIcon(item.icone);
            return (
              <div
                key={item.titulo}
                className="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-default"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center border backdrop-blur-sm ${item.destaque}`}>
                    <Icon className={`w-5 h-5 ${item.iconeCorTexto}`} />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
