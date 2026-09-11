import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { ArrowRight } from 'lucide-react';
import { AJUDA_CONTENT } from '../data/ajudaContent';

interface Props {
  categoriaId: string;
}

export function AjudaModulo({ categoriaId }: Props) {
  const categoria = AJUDA_CONTENT.categorias.find(c => c.id === categoriaId);
  const artigos = AJUDA_CONTENT.artigos.filter(a => a.categoria === categoriaId);

  if (!categoria) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 pt-40 pb-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Módulo não encontrado</h1>
          <p className="text-gray-500 mb-6">Esse conteúdo pode ter sido removido ou o link está incorreto.</p>
          <a href="/ajuda" className="text-orange-600 font-medium hover:underline">← Ver toda a Central de Ajuda</a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/ajuda" className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← Central de Ajuda</a>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-xl bg-orange-600/90 flex items-center justify-center text-xl">
              {categoria.icone}
            </div>
            <span className="text-xs font-semibold text-orange-300 uppercase tracking-widest">
              Central de Ajuda
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 max-w-2xl leading-tight">
            {categoria.label}
          </h1>
          <p className="text-orange-200/80 mt-4 max-w-xl text-base md:text-lg">
            {categoria.descricao}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-14 md:py-20">
        {artigos.length === 0 ? (
          <p className="text-gray-400 text-sm">Nenhum artigo publicado para este módulo no momento.</p>
        ) : (
          <ul className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
            {artigos.map(a => (
              <li key={a.id}>
                <a
                  href={`/ajuda/${categoria.id}/${a.id}`}
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-orange-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-gray-800 group-hover:text-orange-700">
                    {a.titulo}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
