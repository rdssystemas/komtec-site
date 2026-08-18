import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import type { InformacoesContent } from '../data/defaultContent';

interface Props {
  content: InformacoesContent;
  slug: string;
}

function slugificar(texto: string) {
  return texto
    .toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Renderiza o campo `conteudo` (markdown leve: "## " = título de seção,
 * "- " = item de lista, linha em branco = novo parágrafo) sem depender de
 * biblioteca externa de markdown.
 */
function ConteudoArtigo({ texto }: { texto: string }) {
  const blocos = texto.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
      {blocos.map((bloco, i) => {
        if (bloco.startsWith('## ')) {
          const titulo = bloco.replace(/^##\s+/, '');
          return (
            <h2 key={i} id={slugificar(titulo)} className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-2 first:mt-0 scroll-mt-28">
              {titulo}
            </h2>
          );
        }
        const linhas = bloco.split('\n').filter(Boolean);
        if (linhas.every(l => l.startsWith('- '))) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-2">
              {linhas.map((l, j) => <li key={j}>{l.replace(/^-\s+/, '')}</li>)}
            </ul>
          );
        }
        return <p key={i}>{bloco}</p>;
      })}
    </div>
  );
}

export function InformacaoDetalhe({ content, slug }: Props) {
  const artigo = content.items.find(a => a.slug === slug && a.publicado);

  if (!artigo) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 pt-40 pb-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Artigo não encontrado</h1>
          <p className="text-gray-500 mb-6">Esse conteúdo pode ter sido removido ou o link está incorreto.</p>
          <a href="/informacoes" className="text-orange-600 font-medium hover:underline">← Ver todos os artigos</a>
        </main>
        <Footer />
      </div>
    );
  }

  const topicos = artigo.conteudo
    .split('\n')
    .filter(l => l.startsWith('## '))
    .map(l => l.replace(/^##\s+/, ''));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header full-width */}
      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <a href="/informacoes" className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← Central de Informações</a>
          <span className="inline-block text-xs font-semibold text-orange-200 bg-white/10 rounded-full px-3 py-1 mt-6 mb-4">
            {artigo.categoria}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl">{artigo.titulo}</h1>
          <div className="flex items-center gap-2 text-sm text-orange-300/80 mt-5">
            <span>{artigo.data}</span>
            <span>·</span>
            <span>{artigo.tempoLeitura}</span>
          </div>
        </div>
      </header>

      {artigo.imagem && (
        <div className="max-w-4xl mx-auto px-4 -mt-14 md:-mt-16">
          <img
            src={artigo.imagem}
            alt={artigo.titulo}
            className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl border border-white/20"
          />
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-14">
          {/* Conteúdo */}
          <article className="max-w-2xl">
            <ConteudoArtigo texto={artigo.conteudo} />

            {artigo.aviso && (
              <div className="mt-10 border border-amber-200 bg-amber-50 rounded-lg p-4 text-sm text-amber-800">
                {artigo.aviso}
              </div>
            )}

            {artigo.fontes.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Fontes</h3>
                <ul className="space-y-2">
                  {artigo.fontes.map((f, i) => (
                    <li key={i} className="text-sm">
                      <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                        {f.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {topicos.length > 0 && (
              <div className="sticky top-24 border border-gray-200 rounded-xl p-5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Neste artigo</h3>
                <nav className="space-y-2">
                  {topicos.map((t, i) => (
                    <a
                      key={i}
                      href={`#${slugificar(t)}`}
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors leading-snug"
                    >
                      {t}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">
                    Quer ver como o KomTec já acompanha essas mudanças no seu dia a dia?
                  </p>
                  <a
                    href="/#experimente"
                    className="block text-center w-full px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Solicitar Demo
                  </a>
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
