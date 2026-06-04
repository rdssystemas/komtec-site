import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const telas = [
  {
    id: 'comercial',
    label: 'Módulo Comercial',
    arquivo: '/screenshots/komtec_comercial.webp',
    descricao: 'Gerencie vendas, orçamentos e pedidos de forma integrada e eficiente.',
  },
  {
    id: 'nfe',
    label: 'Nota Fiscal Eletrônica',
    arquivo: '/screenshots/komtec_nfe.webp',
    descricao: 'Emita, cancele e consulte NF-e com integração direta à SEFAZ.',
  },
  {
    id: 'relatorios',
    label: 'Relatórios',
    arquivo: '/screenshots/komtec_relatorios.webp',
    descricao: 'Dezenas de relatórios para análise completa do seu negócio.',
  },
  {
    id: 'bi',
    label: 'Business Intelligence',
    arquivo: '/screenshots/komtec_bi.webp',
    descricao: 'Dashboards interativos para tomada de decisões estratégicas.',
  },
  {
    id: 'cotacao',
    label: 'Cotação de Preços',
    arquivo: '/screenshots/komtec_cotacao.webp',
    descricao: 'Compare preços de fornecedores e agilize suas compras com cotação integrada.',
  },
  {
    id: 'promo',
    label: 'Promoções',
    arquivo: '/screenshots/komtec_promo.webp',
    descricao: 'Crie e gerencie campanhas promocionais e descontos especiais.',
  },
  {
    id: 'parceiros',
    label: 'Rede de Parceiros',
    arquivo: '/screenshots/komtec_parceiros.webp',
    descricao: 'Gerencie sua rede de parceiros, distribuidores e representantes.',
  },
  {
    id: 'suporte_ia',
    label: 'Suporte com IA',
    arquivo: '/screenshots/komtec_suporte_ia.webp',
    descricao: 'Suporte inteligente com assistência por inteligência artificial integrada.',
  },
  {
    id: 'api',
    label: 'API & Integrações',
    arquivo: '/screenshots/komtec_api.webp',
    descricao: 'Integre o ERP com outros sistemas e plataformas via API REST.',
  },
  {
    id: 'backup',
    label: 'Backup Automático',
    arquivo: '/screenshots/komtec_backup.webp',
    descricao: 'Seus dados protegidos com backup automático e restauração simplificada.',
  },
  {
    id: 'faq',
    label: 'Central de Ajuda',
    arquivo: '/screenshots/komtec_faq.webp',
    descricao: 'Base de conhecimento completa para autoatendimento e aprendizado.',
  },
  {
    id: 'download',
    label: 'Central de Downloads',
    arquivo: '/screenshots/komtec_download.webp',
    descricao: 'Acesse manuais, catálogos e atualizações diretamente pelo sistema.',
  },
  {
    id: 'tradicao',
    label: 'Nossa Tradição',
    arquivo: '/screenshots/komtec_tradicao.webp',
    descricao: 'Anos de experiência no setor de autopeças e máquinas pesadas.',
  },
];

export function Screenshots() {
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const goTo = useCallback((index: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setAtivo(index);
      setTransitioning(false);
    }, 180);
  }, []);

  const proximo = useCallback(() => {
    goTo((ativo + 1) % telas.length);
  }, [ativo, goTo]);

  const anterior = useCallback(() => {
    goTo((ativo - 1 + telas.length) % telas.length);
  }, [ativo, goTo]);

  useEffect(() => {
    if (pausado) return;
    timeoutRef.current = setTimeout(proximo, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [ativo, pausado, proximo]);

  const tela = telas[ativo];

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wide">Sistema</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Veja o sistema por dentro
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Interface moderna, intuitiva e pensada para o dia a dia do seu negócio.
          </p>
        </div>

        {/* Carrossel */}
        <div
          className="relative"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          {/* Moldura de browser */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-gray-50">
            {/* Barra de navegador fictícia */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200 select-none">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 max-w-xs">
                app.erpkomtec.com.br
              </div>
              <span className="text-xs text-gray-400 ml-auto">
                {ativo + 1} / {telas.length}
              </span>
            </div>

            {/* Imagem */}
            <div className="relative bg-gray-100" style={{ minHeight: '380px' }}>
              <img
                src={tela.arquivo}
                alt={`Tela: ${tela.label}`}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover object-top transition-opacity duration-200 ${
                  transitioning ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ maxHeight: '520px' }}
              />

              {/* Seta esquerda */}
              <button
                onClick={anterior}
                aria-label="Slide anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg border border-gray-200 text-gray-700 hover:text-brand-700 transition-all hover:scale-110 z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Seta direita */}
              <button
                onClick={proximo}
                aria-label="Próximo slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg border border-gray-200 text-gray-700 hover:text-brand-700 transition-all hover:scale-110 z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Legenda */}
          <div
            className={`text-center mt-5 transition-opacity duration-200 ${
              transitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <p className="font-semibold text-gray-800 text-base">{tela.label}</p>
            <p className="text-gray-500 text-sm mt-1">{tela.descricao}</p>
          </div>

          {/* Dots de navegação */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {telas.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === ativo
                    ? 'w-6 h-2 bg-brand-700'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Abas de módulos — scroll horizontal no mobile */}
          <div className="mt-6 overflow-x-auto pb-1 -mx-4 px-4">
            <div className="flex gap-2 w-max mx-auto">
              {telas.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => goTo(i)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    i === ativo
                      ? 'bg-brand-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
