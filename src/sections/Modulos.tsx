import {
  ShoppingCart, Package, FileText, DollarSign,
  Truck, Users, BarChart3, BookOpen,
} from 'lucide-react';

const modulos = [
  {
    icone: ShoppingCart,
    nome: 'Vendas e Orçamentos',
    descricao: 'Crie orçamentos, converta em vendas e envie por e-mail em PDF com um clique.',
  },
  {
    icone: Truck,
    nome: 'Compras',
    descricao: 'Registre pedidos de compra e importe notas fiscais de fornecedores automaticamente.',
  },
  {
    icone: Package,
    nome: 'Estoque',
    descricao: 'Controle entradas e saídas, movimentações e inventário em tempo real.',
  },
  {
    icone: DollarSign,
    nome: 'Financeiro',
    descricao: 'Gerencie contas a pagar e receber, parcelas, vencimentos e fluxo de caixa.',
  },
  {
    icone: FileText,
    nome: 'Nota Fiscal Eletrônica',
    descricao: 'Emita, cancele e consulte NF-e diretamente no sistema, com envio automático à SEFAZ.',
  },
  {
    icone: Users,
    nome: 'Clientes e Fornecedores',
    descricao: 'Cadastre pessoas físicas e jurídicas com endereços, contatos e histórico completo.',
  },
  {
    icone: BookOpen,
    nome: 'Catálogo de Peças',
    descricao: 'Importe catálogos em PDF, visualize diagramas e localize peças por código.',
  },
  {
    icone: BarChart3,
    nome: 'Dashboard e Relatórios',
    descricao: 'Acompanhe os indicadores da sua empresa em tempo real com visão por período.',
  },
];

export function Modulos() {
  return (
    <section id="modulos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wide">Módulos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Tudo o que sua empresa precisa
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Módulos integrados que cobrem todas as áreas do seu negócio, desde o orçamento até a nota fiscal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modulos.map(m => {
            const Icon = m.icone;
            return (
              <div
                key={m.nome}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <Icon className="w-5 h-5 text-brand-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{m.nome}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
