import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import type { InformacoesContent } from '../data/defaultContent';

interface Props {
  content: InformacoesContent;
}

export function CentralInformacoes({ content }: Props) {
  const artigos = content.items.filter(a => a.publicado);
  const [destaque, ...resto] = artigos;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header full-width */}
      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← Voltar ao início</a>
          <span className="block text-xs font-semibold text-orange-300 uppercase tracking-widest mt-6">
            Central de Informações
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-2xl leading-tight">
            Conteúdo para ajudar na gestão da sua empresa
          </h1>
          <p className="text-orange-200/80 mt-4 max-w-xl text-base md:text-lg">
            Assuntos fiscais, tributários e de gestão explicados em linguagem simples —
            sempre com as fontes oficiais indicadas.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        {artigos.length === 0 ? (
          <p className="text-gray-400 text-sm">Nenhum artigo publicado no momento.</p>
        ) : (
          <>
            {/* Artigo em destaque */}
            <a
              href={`/informacoes/${destaque.slug}`}
              className="group grid md:grid-cols-5 gap-8 items-center border border-gray-200 rounded-2xl p-6 md:p-10 mb-14 hover:border-orange-300 hover:shadow-xl transition-all"
            >
              <div className="md:col-span-3">
                <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-3 py-1 mb-4">
                  {destaque.categoria}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-orange-700 transition-colors">
                  {destaque.titulo}
                </h2>
                <p className="text-gray-500 mb-5 text-base leading-relaxed">{destaque.resumo}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{destaque.data}</span>
                  <span>·</span>
                  <span>{destaque.tempoLeitura}</span>
                </div>
              </div>
              <div className="md:col-span-2 hidden md:flex items-center justify-center">
                {destaque.imagem ? (
                  <img
                    src={destaque.imagem}
                    alt={destaque.titulo}
                    className="w-full aspect-square object-cover rounded-xl border border-orange-100"
                  />
                ) : (
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-100 flex items-center justify-center">
                    <span className="text-6xl font-bold text-orange-200 select-none">§</span>
                  </div>
                )}
              </div>
            </a>

            {resto.length > 0 && (
              <>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-6">Mais artigos</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resto.map(artigo => (
                    <a
                      key={artigo.slug}
                      href={`/informacoes/${artigo.slug}`}
                      className="block border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-md transition-all"
                    >
                      {artigo.imagem && (
                        <img src={artigo.imagem} alt={artigo.titulo} className="w-full aspect-[16/9] object-cover" />
                      )}
                      <div className="p-6">
                        <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-2.5 py-1 mb-3">
                          {artigo.categoria}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{artigo.titulo}</h4>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-3">{artigo.resumo}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span>{artigo.data}</span>
                          <span>·</span>
                          <span>{artigo.tempoLeitura}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
