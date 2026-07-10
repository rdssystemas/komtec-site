import { useEffect, useRef, useState } from 'react';
import { getIcon } from '../data/iconMap';
import type { ModulosContent } from '../data/defaultContent';

function ModuloItem({ m, index }: { m: ModulosContent['items'][0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const Icon = getIcon(m.icone);
  const slides = m.slides && m.slides.length > 1 ? m.slides : null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!slides) return;
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setSlide(s => (s + 1) % slides.length);
        setFading(false);
      }, 400);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides]);

  const goTo = (i: number) => {
    if (i === slide) return;
    setFading(true);
    setTimeout(() => { setSlide(i); setFading(false); }, 400);
  };

  const titulo = slides ? slides[slide].titulo : m.nome;
  const descricao = slides ? slides[slide].descricao : m.descricao;
  const imagemAtual = slides ? slides[slide].imagem : m.imagem;

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: 'clamp(280px, 40vw, 480px)' }}>
      <img
        src={imagemAtual}
        alt={titulo}
        loading={index < 2 ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transition: 'opacity 0.4s ease, transform 8s ease',
          transform: visible ? 'scale(1)' : 'scale(1.05)',
          opacity: fading ? 0 : 1,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div
        className="absolute top-6 left-6 md:left-16 lg:left-24 text-6xl md:text-8xl font-black text-white/5 select-none leading-none transition-all duration-1000 ease-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-60px)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-xl">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-white/20 backdrop-blur-sm transition-all duration-700 ease-out"
            style={{ background: 'rgba(194,65,12,0.35)', transitionDelay: '100ms', opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-60px)' }}
          >
            <Icon className="w-6 h-6 text-orange-200" />
          </div>

          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight transition-all duration-700 ease-out"
            style={{
              transitionDelay: visible ? '220ms' : '0ms',
              opacity: visible ? (fading ? 0 : 1) : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            }}
          >
            {titulo}
          </h3>

          <div
            className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent mb-4 transition-all duration-700 ease-out"
            style={{ transitionDelay: '320ms', opacity: visible ? 1 : 0, width: visible ? '120px' : '0px' }}
          />

          <p
            className="text-orange-400 text-sm md:text-base leading-relaxed max-w-md bg-gray-950/3 backdrop-blur-md rounded-xl px-3 py-2 transition-opacity duration-400 ease-out"
            style={{
              textShadow: '0 1px 4px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.35)',
              opacity: visible ? (fading ? 0 : 1) : 0,
              transitionDelay: visible ? '0ms' : '380ms',
            }}
          >
            {descricao}
          </p>

          {slides && (
            <div
              className="flex gap-1.5 mt-4 transition-all duration-700 ease-out"
              style={{ transitionDelay: '460ms', opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-60px)' }}
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === slide ? '20px' : '8px',
                    height: '8px',
                    background: i === slide ? 'rgba(251,146,60,0.9)' : 'rgba(255,255,255,0.4)',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Modulos({ content }: { content: ModulosContent }) {
  return (
    <section id="modulos" className="bg-orange-600">
      <div className="py-16 md:py-20 text-center px-4">
        <span className="text-orange-200 text-sm font-semibold uppercase tracking-widest">Módulos</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
          {content.titulo}
        </h2>
        <p className="text-orange-100 max-w-xl mx-auto text-sm md:text-base">
          {content.subtitulo}
        </p>
      </div>

      <div className="flex flex-col gap-3 px-4 md:px-8 lg:px-12">
        {content.items.map((m, i) => (
          <div key={m.nome} className="rounded-2xl overflow-hidden">
            <ModuloItem m={m} index={i} />
          </div>
        ))}
      </div>

      <div className="h-16 bg-gradient-to-b from-orange-600 to-gray-50" />
    </section>
  );
}
