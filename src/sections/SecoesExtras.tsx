import { getIcon } from '../data/iconMap';
import { SECOES_EXTRAS } from '../data/secoesExtras';
import type { SecaoExtra } from '../data/secoesExtras';

// ── Seção: Texto + Imagem ─────────────────────────────────────────────────────

function SecaoTextoImagem({ s }: { s: SecaoExtra }) {
  const imagemEsquerda = s.imagemLado === 'esquerda';

  const bg = s.fundoEscuro
    ? 'bg-gradient-to-b from-amber-950 to-stone-950'
    : 'bg-white';
  const headingColor   = s.fundoEscuro ? 'text-white'      : 'text-gray-900';
  const subtitleColor  = s.fundoEscuro ? 'text-gray-400'   : 'text-gray-500';
  const bodyColor      = s.fundoEscuro ? 'text-gray-300'   : 'text-gray-600';
  const itemColor      = s.fundoEscuro ? 'text-gray-100'   : 'text-gray-800';
  const checkCls       = s.fundoEscuro
    ? 'bg-amber-500/20 text-amber-400'
    : 'bg-amber-100 text-amber-600';

  const textBlock = (
    <div className="flex flex-col justify-center">
      {s.etiqueta && (
        <span className="inline-block self-start bg-amber-500/10 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20 mb-5">
          {s.etiqueta}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 whitespace-pre-line ${headingColor}`}>
        {s.titulo}
      </h2>
      {s.subtitulo && (
        <p className={`text-base font-medium mb-4 ${subtitleColor}`}>{s.subtitulo}</p>
      )}
      {s.texto && (
        <p className={`text-sm leading-relaxed mb-6 ${bodyColor}`}>{s.texto}</p>
      )}
      {s.itens && s.itens.length > 0 && (
        <ul className="space-y-3 mb-8">
          {s.itens.map((it, i) => {
            const Icon = getIcon(it.icone ?? 'CheckCircle2');
            return (
              <li key={i} className="flex items-start gap-3">
                <span className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${checkCls}`}>
                  <Icon size={13} />
                </span>
                <div>
                  <span className={`text-sm font-medium ${itemColor}`}>{it.titulo}</span>
                  {it.descricao && (
                    <p className={`text-xs mt-0.5 ${bodyColor}`}>{it.descricao}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {s.ctaLabel && (
        <div className="flex gap-3 flex-wrap">
          <a
            href={s.ctaUrl ?? '#contato'}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-full transition-colors shadow-lg shadow-amber-500/25"
          >
            {s.ctaLabel}
          </a>
          {s.ctaLabel2 && (
            <a
              href={s.ctaUrl2 ?? '#contato'}
              className={`inline-flex items-center gap-2 px-5 py-2.5 border text-sm font-semibold rounded-full transition-colors ${
                s.fundoEscuro
                  ? 'border-amber-500/40 text-amber-400 hover:bg-amber-500/10'
                  : 'border-amber-400 text-amber-600 hover:bg-amber-50'
              }`}
            >
              {s.ctaLabel2}
            </a>
          )}
        </div>
      )}
    </div>
  );

  const imageBlock = s.imagem ? (
    <div className="relative flex items-center justify-center">
      <div className={`absolute inset-0 rounded-2xl -rotate-1 ${
        s.fundoEscuro ? 'bg-amber-500/5' : 'bg-amber-50'
      }`} />
      <img
        src={s.imagem}
        alt={s.imagemAlt ?? s.titulo}
        loading="lazy"
        decoding="async"
        className="relative rounded-2xl shadow-2xl w-full object-cover object-top max-h-[440px]"
      />
    </div>
  ) : null;

  return (
    <section id={s.id} className={`py-20 ${bg}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {imagemEsquerda ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
        </div>
      </div>
    </section>
  );
}

// ── Seção: Cards ──────────────────────────────────────────────────────────────

function SecaoCards({ s }: { s: SecaoExtra }) {
  const bg = s.fundoEscuro ? 'bg-gradient-to-b from-stone-900 to-stone-950' : 'bg-gray-50';
  const headingColor  = s.fundoEscuro ? 'text-white'    : 'text-gray-900';
  const subtitleColor = s.fundoEscuro ? 'text-gray-400' : 'text-gray-500';
  const bodyColor     = s.fundoEscuro ? 'text-gray-400' : 'text-gray-500';
  const cardCls = s.fundoEscuro
    ? 'bg-white/5 border-white/10 hover:border-amber-500/30 text-white'
    : 'bg-white border-gray-200 hover:border-amber-400 hover:shadow-lg text-gray-900';

  return (
    <section id={s.id} className={`py-20 ${bg}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          {s.etiqueta && (
            <span className="inline-block bg-amber-500/10 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20 mb-4">
              {s.etiqueta}
            </span>
          )}
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${headingColor}`}>{s.titulo}</h2>
          {s.subtitulo && (
            <p className={`text-base max-w-xl mx-auto ${subtitleColor}`}>{s.subtitulo}</p>
          )}
        </div>
        {s.itens && s.itens.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.itens.map((it, i) => {
              const Icon = getIcon(it.icone ?? 'CheckCircle2');
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border transition-all hover:-translate-y-1 cursor-default ${cardCls}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-amber-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{it.titulo}</h3>
                  {it.descricao && (
                    <p className={`text-xs leading-relaxed ${bodyColor}`}>{it.descricao}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// ── Seção: Banner CTA ─────────────────────────────────────────────────────────

function SecaoBannerCta({ s }: { s: SecaoExtra }) {
  const bg = s.fundoEscuro
    ? 'bg-gradient-to-r from-amber-900 to-stone-900'
    : 'bg-gradient-to-r from-amber-600 to-orange-600';
  const textColor = 'text-white';
  const bodyColor = s.fundoEscuro ? 'text-gray-300' : 'text-white/85';

  return (
    <section id={s.id} className={`py-16 ${bg}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {s.etiqueta && (
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
            {s.etiqueta}
          </span>
        )}
        <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${textColor}`}>{s.titulo}</h2>
        {s.texto && (
          <p className={`text-base mb-8 max-w-xl mx-auto ${bodyColor}`}>{s.texto}</p>
        )}
        <div className="flex gap-4 justify-center flex-wrap">
          {s.ctaLabel && (
            <a
              href={s.ctaUrl ?? '#contato'}
              className="px-7 py-3 bg-white text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-colors shadow-lg"
            >
              {s.ctaLabel}
            </a>
          )}
          {s.ctaLabel2 && (
            <a
              href={s.ctaUrl2 ?? '#contato'}
              className="px-7 py-3 border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              {s.ctaLabel2}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Exportação principal ──────────────────────────────────────────────────────

export function SecoesExtras({ secoes: secoesProp }: { secoes?: SecaoExtra[] }) {
  const fonte = secoesProp ?? SECOES_EXTRAS;
  const visiveis = [...fonte]
    .filter(s => s.visivel)
    .sort((a, b) => a.ordem - b.ordem);

  if (visiveis.length === 0) return null;

  return (
    <>
      {visiveis.map(s => {
        switch (s.tipo) {
          case 'texto-imagem': return <SecaoTextoImagem key={s.id} s={s} />;
          case 'cards':        return <SecaoCards       key={s.id} s={s} />;
          case 'banner-cta':   return <SecaoBannerCta   key={s.id} s={s} />;
          default:             return null;
        }
      })}
    </>
  );
}
