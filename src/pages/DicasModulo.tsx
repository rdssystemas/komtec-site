import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { getIcon } from '../data/iconMap';
import type { DicasContent } from '../data/dicasContent';

interface Props {
  content: DicasContent;
  moduloId: string;
}

export function DicasModulo({ content, moduloId }: Props) {
  const modulo = content.modulos.find(m => m.id === moduloId);
  const dicas = modulo?.dicas.filter(d => d.publicado) ?? [];

  if (!modulo) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 pt-40 pb-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Módulo não encontrado</h1>
          <p className="text-gray-500 mb-6">Esse conteúdo pode ter sido removido ou o link está incorreto.</p>
          <a href="/dicas" className="text-orange-600 font-medium hover:underline">← Ver todas as dicas</a>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = getIcon(modulo.icone);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/dicas" className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← Central de Dicas</a>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-xl bg-orange-600/90 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-orange-300 uppercase tracking-widest">
              Dicas & Novidades
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 max-w-2xl leading-tight">
            {modulo.nome}
          </h1>
          <p className="text-orange-200/80 mt-4 max-w-xl text-base md:text-lg">
            {modulo.descricao}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        {dicas.length === 0 ? (
          <p className="text-gray-400 text-sm">Nenhuma dica publicada para este módulo no momento.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dicas.map(d => (
              <a
                key={d.slug}
                href={`/dicas/${modulo.id}/${d.slug}`}
                className="block border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-md transition-all"
              >
                <img src={d.imagem} alt={d.titulo} className="w-full aspect-[16/9] object-cover" />
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{d.titulo}</h2>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{d.resumo}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{d.data}</span>
                    <span>·</span>
                    <span>{d.tempoLeitura}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
