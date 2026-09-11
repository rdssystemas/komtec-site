import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { ArrowRight } from 'lucide-react';
import { AJUDA_CONTENT } from '../data/ajudaContent';

interface Props {
  categoriaId: string;
  artigoId: string;
}

function Passo({ texto }: { texto: string }) {
  const partes = texto.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {partes.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function AjudaArtigo({ categoriaId, artigoId }: Props) {
  const categoria = AJUDA_CONTENT.categorias.find(c => c.id === categoriaId);
  const artigo = AJUDA_CONTENT.artigos.find(a => a.id === artigoId && a.categoria === categoriaId);

  if (!categoria || !artigo) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 pt-40 pb-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Artigo não encontrado</h1>
          <p className="text-gray-500 mb-6">Esse conteúdo pode ter sido removido ou o link está incorreto.</p>
          <a href="/ajuda" className="text-orange-600 font-medium hover:underline">← Ver toda a Central de Ajuda</a>
        </main>
        <Footer />
      </div>
    );
  }

  const outrosDoModulo = AJUDA_CONTENT.artigos
    .filter(a => a.categoria === categoriaId && a.id !== artigoId)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-orange-300">
            <a href="/ajuda" className="hover:text-white transition-colors">Central de Ajuda</a>
            <span>/</span>
            <a href={`/ajuda/${categoria.id}`} className="hover:text-white transition-colors">{categoria.label}</a>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-4 leading-tight">
            {artigo.titulo}
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-14 md:py-16">
        <ol className="space-y-4">
          {artigo.passos.map((passo, i) => {
            const isSubItem = passo.startsWith('  ');
            const texto = isSubItem ? passo.trim() : passo;

            const isAviso = texto.startsWith('⚠️');
            const isDica = texto.startsWith('💡');
            const isOk = texto.startsWith('✅');
            const isInfo = isAviso || isDica || isOk;

            if (isInfo) {
              return (
                <li
                  key={i}
                  className={`text-sm md:text-base leading-relaxed px-4 py-3 rounded-lg border ${
                    isAviso ? 'bg-orange-50 text-orange-800 border-orange-200' : ''
                  } ${isDica ? 'bg-blue-50 text-blue-800 border-blue-200' : ''} ${
                    isOk ? 'bg-green-50 text-green-800 border-green-200' : ''
                  }`}
                >
                  <Passo texto={texto} />
                </li>
              );
            }

            if (isSubItem) {
              return (
                <li key={i} className="text-sm md:text-base text-gray-600 pl-9 -mt-2">
                  <Passo texto={texto} />
                </li>
              );
            }

            return (
              <li key={i} className="flex gap-4 text-sm md:text-base text-gray-700">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-sm font-bold mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed pt-0.5">
                  <Passo texto={texto} />
                </span>
              </li>
            );
          })}
        </ol>

        {outrosDoModulo.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Outros artigos de {categoria.label}
            </p>
            <ul className="space-y-1">
              {outrosDoModulo.map(a => (
                <li key={a.id}>
                  <a
                    href={`/ajuda/${categoria.id}/${a.id}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-700 py-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-orange-500 shrink-0" />
                    {a.titulo}
                  </a>
                </li>
              ))}
            </ul>
            <a href={`/ajuda/${categoria.id}`} className="inline-block mt-4 text-sm font-medium text-orange-600 hover:underline">
              Ver todos os artigos de {categoria.label} →
            </a>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
