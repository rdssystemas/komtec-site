import { useState } from 'react';

const telas = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    arquivo: '/screenshots/Dashboard.png',
    descricao: 'Visão geral do negócio em tempo real — vendas, estoque e financeiro num só painel.',
  },
  {
    id: 'orcamento',
    label: 'Orçamentos',
    arquivo: '/screenshots/orcamento.png',
    descricao: 'Crie orçamentos profissionais em segundos e converta em venda com um clique.',
  },
  {
    id: 'produtos',
    label: 'Produtos',
    arquivo: '/screenshots/produto.png',
    descricao: 'Gerencie seu catálogo de produtos, preços e estoque em um único lugar.',
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    arquivo: '/screenshots/financeiro.png',
    descricao: 'Controle contas a pagar e receber, parcelas e vencimentos com clareza.',
  },
];

export function Screenshots() {
  const [ativa, setAtiva] = useState(telas[0]);

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wide">Sistema</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Veja o sistema por dentro
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Interface moderna, intuitiva e pensada para o dia a dia do seu negócio.
          </p>
        </div>

        {/* Abas */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {telas.map(t => (
            <button
              key={t.id}
              onClick={() => setAtiva(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                ativa.id === t.id
                  ? 'bg-brand-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Screenshot ativa */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
          {/* Barra de navegador fictícia */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 max-w-xs">
              app.erpkomtec.com.br
            </div>
          </div>

          <img
            src={ativa.arquivo}
            alt={`Tela de ${ativa.label}`}
            className="w-full object-cover object-top"
            style={{ maxHeight: '520px' }}
          />
        </div>

        {/* Descrição da tela ativa */}
        <p className="text-center text-gray-500 text-sm mt-4">{ativa.descricao}</p>
      </div>
    </section>
  );
}
