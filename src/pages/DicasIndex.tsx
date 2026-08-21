import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { getIcon } from '../data/iconMap';
import type { DicasContent } from '../data/dicasContent';

interface Props {
  content: DicasContent;
}

export function DicasIndex({ content }: Props) {
  const modulos = content.modulos.filter(m => m.dicas.some(d => d.publicado));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← Voltar ao início</a>
          <span className="block text-xs font-semibold text-orange-300 uppercase tracking-widest mt-6">
            Dicas & Novidades
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-2xl leading-tight">
            Tire mais proveito de cada módulo do sistema
          </h1>
          <p className="text-orange-200/80 mt-4 max-w-xl text-base md:text-lg">
            Dicas práticas, organizadas por módulo, para o seu time aproveitar melhor o que o KomTec já oferece.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        {modulos.length === 0 ? (
          <p className="text-gray-400 text-sm">Nenhuma dica publicada no momento.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modulos.map(m => {
              const Icon = getIcon(m.icone);
              const qtd = m.dicas.filter(d => d.publicado).length;
              return (
                <a
                  key={m.id}
                  href={`/dicas/${m.id}`}
                  className="group block border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/9]">
                    <img src={m.imagem} alt={m.nome} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-orange-600/90 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-2.5 py-1 mb-3">
                      {qtd} {qtd === 1 ? 'dica' : 'dicas'}
                    </span>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-orange-700 transition-colors">
                      {m.nome}
                    </h2>
                    <p className="text-sm text-gray-500">{m.descricao}</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
