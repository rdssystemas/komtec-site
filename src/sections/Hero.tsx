import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import type { HeroContent } from '../data/defaultContent';

const INTERVALO = 5500;

export function Hero({ content }: { content: HeroContent }) {
  const [atual, setAtual] = useState(0);
  const [saindo, setSaindo] = useState(false);
  const pausado = useRef(false);

  const goTo = useCallback((index: number) => {
    setSaindo(true);
    setTimeout(() => {
      setAtual(index);
      setSaindo(false);
    }, 350);
  }, []);

  const proximo = useCallback(() => {
    goTo((atual + 1) % content.slides.length);
  }, [atual, goTo, content.slides.length]);

  const anterior = useCallback(() => {
    goTo((atual - 1 + content.slides.length) % content.slides.length);
  }, [atual, goTo, content.slides.length]);

  useEffect(() => {
    const t = setInterval(() => { if (!pausado.current) proximo(); }, INTERVALO);
    return () => clearInterval(t);
  }, [proximo]);

  // garante índice válido quando slides mudam
  const slideIndex = Math.min(atual, content.slides.length - 1);
  const slide = content.slides[slideIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
      onMouseEnter={() => { pausado.current = true; }}
      onMouseLeave={() => { pausado.current = false; }}
    >
      {content.slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== slideIndex}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === slideIndex ? 1 : 0 }}
        >
          <img
            src={s.imagem}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover"
            style={{ objectPosition: '65% center' }}
          />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950/85 to-transparent pointer-events-none" />

      <div className="relative flex flex-col min-h-[100svh] pt-20 pb-8">
        <div className="flex-1 flex items-start lg:items-center px-6 md:px-14 lg:px-24 pt-6 lg:pt-0">
          <div
            className="bg-gray-950/3 backdrop-blur-md rounded-2xl p-6 md:p-9 w-full max-w-[480px] border border-white/10 shadow-2xl transition-all duration-500"
            style={{
              opacity: saindo ? 0 : 1,
              transform: saindo ? 'translateY(16px)' : 'translateY(0)',
              transitionDelay: saindo ? '0ms' : '150ms',
            }}
          >
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">
              {slide.etiqueta}
            </p>

            <h1
              className="font-black text-white leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.8rem)' }}
            >
              {slide.titulo.split('\n').map((linha, i) => (
                <span key={i} className="block">{linha}</span>
              ))}
            </h1>

            <div className="h-0.5 w-14 bg-gradient-to-r from-orange-500 to-transparent mb-4" />

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {slide.descricao}
            </p>

            {slide.cta && (
              <div className="mt-6">
                <ul className="flex flex-col gap-1.5 mb-6">
                  {content.destaques.map(d => (
                    <li key={d} className="flex items-center gap-2 text-orange-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#experimente"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors text-sm shadow-lg shadow-orange-900/40"
                  >
                    Experimentar grátis
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#modulos"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
                  >
                    Ver módulos
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 md:px-14 lg:px-24 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {content.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === slideIndex ? 'w-7 h-2 bg-orange-400' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <span className="text-white/40 text-sm tabular-nums">
            {String(slideIndex + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(content.slides.length).padStart(2, '0')}
          </span>

          <div className="ml-auto flex gap-2">
            <button onClick={anterior} aria-label="Slide anterior" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={proximo} aria-label="Próximo slide" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div
          key={`${slideIndex}-progress`}
          className="h-full bg-orange-400"
          style={{ animation: `hero-progress ${INTERVALO}ms linear forwards` }}
        />
      </div>
    </section>
  );
}
