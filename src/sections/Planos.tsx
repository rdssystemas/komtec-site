import { CheckCircle } from 'lucide-react';

const planos = [
  {
    nome: 'MEI',
    preco: 'Em breve',
    descricao: 'Para MEI e autônomos. Gestão completa com NF-e desde o plano inicial.',
    destaque: false,
    porte: 'Faturamento até R$ 81 mil/ano',
    recursos: [
      '1 usuário',
      'Emissão de NF-e',
      'Módulo Financeiro',
      'Vendas e Orçamentos',
      'Controle de Estoque',
      'Importação de XML',
      'Suporte por e-mail',
    ],
  },
  {
    nome: 'Profissional',
    preco: 'Em breve',
    descricao: 'Para micro e pequenas empresas com equipe e volume maiores.',
    destaque: true,
    porte: 'Faturamento até R$ 360 mil/ano',
    recursos: [
      'Até 5 usuários',
      'Tudo do plano MEI',
      'Clientes e Fornecedores',
      'Compras com importação NF-e (XML/PDF)',
      'Relatórios gerenciais',
      'Suporte prioritário',
    ],
  },
  {
    nome: 'Empresarial',
    preco: 'Em breve',
    descricao: 'Para empresas de médio porte e grupos com múltiplas filiais.',
    destaque: false,
    porte: 'Faturamento acima de R$ 360 mil/ano',
    recursos: [
      'Até 20 usuários',
      'Tudo do plano Profissional',
      'Multi-empresa',
      'Catálogo de Peças interativo',
      'Dashboard Super Admin',
      'Suporte dedicado',
    ],
  },
];

export function Planos() {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Planos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Todos os planos incluem NF-e e módulo financeiro. A diferença está no porte da sua empresa e no número de usuários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {planos.map(p => (
            <div
              key={p.nome}
              className={`rounded-2xl p-6 border ${
                p.destaque
                  ? 'bg-orange-600 border-orange-600 text-white shadow-xl scale-105'
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
              <p className={`text-xs font-medium mb-2 ${p.destaque ? 'text-orange-200' : 'text-orange-600'}`}>
                {p.porte}
              </p>
              <p className={`text-sm mb-4 ${p.destaque ? 'text-orange-100' : 'text-gray-500'}`}>
                {p.descricao}
              </p>
              <p className={`text-2xl font-bold mb-6 ${p.destaque ? 'text-white' : 'text-gray-900'}`}>
                {p.preco}
              </p>

              <ul className="space-y-2.5 mb-6">
                {p.recursos.map(r => (
                  <li key={r} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 shrink-0 ${p.destaque ? 'text-orange-200' : 'text-orange-500'}`} />
                    <span className={p.destaque ? 'text-orange-50' : 'text-gray-600'}>{r}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                  p.destaque
                    ? 'bg-white text-orange-600 hover:bg-orange-50'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
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
