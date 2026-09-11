import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { Search } from 'lucide-react';
import { AJUDA_CONTENT } from '../data/ajudaContent';

function normalizar(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function AjudaIndex() {
  const [busca, setBusca] = useState('');

  const artigosEncontrados = busca.trim()
    ? AJUDA_CONTENT.artigos.filter(a => {
        const t = normalizar(busca);
        return (
          normalizar(a.titulo).includes(t) ||
          a.tags.some(tag => normalizar(tag).includes(t))
        );
      })
    : [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← Voltar ao início</a>
          <span className="block text-xs font-semibold text-orange-300 uppercase tracking-widest mt-6">
            Central de Ajuda
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-2xl leading-tight">
            Como podemos ajudar?
          </h1>
          <p className="text-orange-200/80 mt-4 max-w-xl text-base md:text-lg">
            Passo a passo de cada módulo do ERP KomTec Pro, organizado do jeito que você usa no dia a dia.
          </p>

          <div className="relative max-w-lg mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-300" />
            <input
              type="text"
              value={busca}
              onChange={e => setBusca(e.target.value)}
              placeholder="Pesquisar um assunto (ex: boleto, NF-e, estoque...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-orange-200/60
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white/15 transition-colors"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        {busca.trim() ? (
          <div>
            <p className="text-sm text-gray-500 mb-6">
              {artigosEncontrados.length === 0
                ? `Nenhum artigo encontrado para "${busca}".`
                : `${artigosEncontrados.length} artigo${artigosEncontrados.length === 1 ? '' : 's'} encontrado${artigosEncontrados.length === 1 ? '' : 's'}`}
            </p>
            <ul className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
              {artigosEncontrados.map(a => (
                <li key={a.id}>
                  <a
                    href={`/ajuda/${a.categoria}/${a.id}`}
                    className="block px-5 py-4 hover:bg-orange-50 transition-colors text-sm font-medium text-gray-800 hover:text-orange-700"
                  >
                    {a.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AJUDA_CONTENT.categorias.map(c => {
              const qtd = AJUDA_CONTENT.artigos.filter(a => a.categoria === c.id).length;
              return (
                <a
                  key={c.id}
                  href={`/ajuda/${c.id}`}
                  className="group block border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-100 transition-colors">
                    {c.icone}
                  </div>
                  <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-2.5 py-1 mb-3">
                    {qtd} {qtd === 1 ? 'artigo' : 'artigos'}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-orange-700 transition-colors">
                    {c.label}
                  </h2>
                  <p className="text-sm text-gray-500">{c.descricao}</p>
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
