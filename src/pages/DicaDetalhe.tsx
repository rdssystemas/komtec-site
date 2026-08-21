import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { ConteudoMarkdown, slugificar } from '../components/ConteudoMarkdown';
import type { DicasContent } from '../data/dicasContent';

interface Props {
  content: DicasContent;
  moduloId: string;
  slug: string;
}

export function DicaDetalhe({ content, moduloId, slug }: Props) {
  const modulo = content.modulos.find(m => m.id === moduloId);
  const dica = modulo?.dicas.find(d => d.slug === slug && d.publicado);

  if (!modulo || !dica) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 pt-40 pb-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dica não encontrada</h1>
          <p className="text-gray-500 mb-6">Esse conteúdo pode ter sido removido ou o link está incorreto.</p>
          <a href="/dicas" className="text-orange-600 font-medium hover:underline">← Ver todas as dicas</a>
        </main>
        <Footer />
      </div>
    );
  }

  const topicos = dica.conteudo
    .split('\n')
    .filter(l => l.startsWith('## '))
    .map(l => l.replace(/^##\s+/, ''));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <a href={`/dicas/${modulo.id}`} className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← {modulo.nome}</a>
          <span className="inline-block text-xs font-semibold text-orange-200 bg-white/10 rounded-full px-3 py-1 mt-6 mb-4">
            {modulo.nome}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl">{dica.titulo}</h1>
          <div className="flex items-center gap-2 text-sm text-orange-300/80 mt-5">
            <span>{dica.data}</span>
            <span>·</span>
            <span>{dica.tempoLeitura}</span>
          </div>
        </div>
      </header>

      {dica.imagem && (
        <div className="max-w-4xl mx-auto px-4 -mt-14 md:-mt-16">
          <img
            src={dica.imagem}
            alt={dica.titulo}
            className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl border border-white/20"
          />
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-14">
          <article className="max-w-2xl">
            <ConteudoMarkdown texto={dica.conteudo} />
          </article>

          <aside className="space-y-6">
            {topicos.length > 0 && (
              <div className="sticky top-24 border border-gray-200 rounded-xl p-5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Nesta dica</h3>
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
                    Quer ver o módulo de {modulo.nome} funcionando no seu dia a dia?
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
