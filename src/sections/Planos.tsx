import { CheckCircle } from 'lucide-react';

const planos = [
  {
    nome: 'Starter',
    preco: 'Consulte',
    descricao: 'Ideal para pequenas empresas iniciando a gestão digital.',
    destaque: false,
    recursos: [
      'Até 2 usuários',
      'Vendas e Orçamentos',
      'Controle de Estoque',
      'Cadastro de Clientes',
      'Suporte por e-mail',
    ],
  },
  {
    nome: 'Profissional',
    preco: 'Consulte',
    descricao: 'Para empresas que precisam de gestão completa e integrada.',
    destaque: true,
    recursos: [
      'Até 10 usuários',
      'Todos os módulos Starter',
      'Emissão de NF-e',
      'Módulo Financeiro',
      'Importação de PDF/XML',
      'Suporte prioritário',
    ],
  },
  {
    nome: 'Empresarial',
    preco: 'Consulte',
    descricao: 'Para grupos com múltiplas empresas e alto volume.',
    destaque: false,
    recursos: [
      'Usuários ilimitados',
      'Multi-empresa',
      'Todos os módulos',
      'Dashboard Super Admin',
      'Catálogo de Peças',
      'Suporte dedicado',
    ],
  },
];

export function Planos() {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wide">Planos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Planos flexíveis que crescem com a sua empresa. Entre em contato para um orçamento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {planos.map(p => (
            <div
              key={p.nome}
              className={`rounded-2xl p-6 border ${
                p.destaque
                  ? 'bg-brand-700 border-brand-700 text-white shadow-xl scale-105'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              {p.destaque && (
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                  Mais popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${p.destaque ? 'text-white' : 'text-gray-900'}`}>
                {p.nome}
              </h3>
              <p className={`text-sm mb-4 ${p.destaque ? 'text-blue-100' : 'text-gray-500'}`}>
                {p.descricao}
              </p>
              <p className={`text-2xl font-bold mb-6 ${p.destaque ? 'text-white' : 'text-gray-900'}`}>
                {p.preco}
              </p>

              <ul className="space-y-2.5 mb-6">
                {p.recursos.map(r => (
                  <li key={r} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 shrink-0 ${p.destaque ? 'text-blue-200' : 'text-brand-600'}`} />
                    <span className={p.destaque ? 'text-blue-50' : 'text-gray-600'}>{r}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                  p.destaque
                    ? 'bg-white text-brand-700 hover:bg-blue-50'
                    : 'bg-brand-700 text-white hover:bg-brand-800'
                }`}
              >
                Falar com um consultor
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
