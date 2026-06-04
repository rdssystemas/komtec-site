import { useEffect, useRef, useState } from 'react';
import {
  ShoppingCart, Package, FileText, DollarSign,
  Truck, Users, BarChart3, BookOpen,
} from 'lucide-react';

const modulos = [
  {
    icone: ShoppingCart,
    nome: 'Vendas e Orçamentos',
    descricao: 'Crie orçamentos profissionais, converta em vendas e envie por e-mail em PDF com um clique. Controle status, histórico e desempenho da equipe de vendas.',
    imagem: '/komtec_cotacao.webp',
  },
  {
    icone: Truck,
    nome: 'Compras',
    descricao: 'Registre pedidos de compra e importe notas fiscais de fornecedores automaticamente via XML. Gerencie aprovações, prazos e controle de entrada no estoque.',
    imagem: '/komtec_comercial.webp',
  },
  {
    icone: Package,
    nome: 'Estoque',
    descricao: 'Controle entradas, saídas, movimentações e inventário em tempo real. Alertas de estoque mínimo, rastreabilidade por lote e histórico completo de movimentações.',
    imagem: '/komtec_backup.webp',
  },
  {
    icone: DollarSign,
    nome: 'Financeiro',
    descricao: 'Gerencie contas a pagar e receber, parcelas, vencimentos e fluxo de caixa. Concilie lançamentos e acompanhe a saúde financeira da sua empresa em tempo real.',
    imagem: '/komtec_bi.webp',
  },
  {
    icone: FileText,
    nome: 'Nota Fiscal Eletrônica',
    descricao: 'Emita, cancele e consulte NF-e com integração direta à SEFAZ. Cálculo automático de impostos, geração de XML e envio do DANFE por e-mail ao cliente.',
    imagem: '/komtec_nfe.webp',
  },
  {
    icone: Users,
    nome: 'Clientes e Fornecedores',
    descricao: 'Cadastre pessoas físicas e jurídicas com endereços, contatos, histórico de compras e documentos. Consulta automática de CNPJ e validação de CPF integrada.',
    imagem: '/komtec_parceiros.webp',
  },
  {
    icone: BookOpen,
    nome: 'Catálogo de Peças',
    descricao: 'Importe catálogos em PDF, visualize diagramas interativos e localize peças por código com precisão. Ideal para revendas de peças agrícolas e máquinas pesadas.',
    imagem: '/komtec_download.webp',
  },
  {
    icone: BarChart3,
    nome: 'Dashboard e Relatórios',
    descricao: 'Acompanhe os indicadores da sua empresa em tempo real com gráficos por período. Relatórios de vendas, estoque, financeiro e muito mais — exportáveis em PDF.',
    imagem: '/komtec_relatorios.webp',
  },
];

function ModuloItem({ m, index }: { m: typeof modulos[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = m.icone;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: 'clamp(280px, 40vw, 480px)' }}>
      {/* Imagem de fundo */}
      <img
        src={m.imagem}
        alt={m.nome}
        loading={index < 2 ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{
          transition: 'transform 8s ease',
          transform: visible ? 'scale(1)' : 'scale(1.05)',
        }}
      />

      {/* Gradiente overlay: escuro na esquerda, transparente na direita */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/75 to-gray-950/10" />

      {/* Linha divisória sutil no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      {/* Número do módulo */}
      <div
        className="absolute top-6 left-6 md:left-16 lg:left-24 text-6xl md:text-8xl font-black text-white/5 select-none leading-none transition-all duration-1000 ease-out"
        style={{
          transitionDelay: '0ms',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-60px)',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Conteúdo animado */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-xl">
          {/* Ícone */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-white/20 backdrop-blur-sm transition-all duration-700 ease-out"
            style={{
              background: 'rgba(194,65,12,0.35)',
              transitionDelay: '100ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            }}
          >
            <Icon className="w-6 h-6 text-orange-200" />
          </div>

          {/* Título */}
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight transition-all duration-700 ease-out"
            style={{
              transitionDelay: '220ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            }}
          >
            {m.nome}
          </h3>

          {/* Linha decorativa */}
          <div
            className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent mb-4 transition-all duration-700 ease-out"
            style={{
              transitionDelay: '320ms',
              opacity: visible ? 1 : 0,
              width: visible ? '120px' : '0px',
            }}
          />

          {/* Descrição */}
          <p
            className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md transition-all duration-700 ease-out"
            style={{
              transitionDelay: '380ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            }}
          >
            {m.descricao}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Modulos() {
  return (
    <section id="modulos" className="bg-orange-600">
      {/* Cabeçalho da seção */}
      <div className="py-16 md:py-20 text-center px-4">
        <span className="text-orange-200 text-sm font-semibold uppercase tracking-widest">Módulos</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
          Tudo o que sua empresa precisa
        </h2>
        <p className="text-orange-100 max-w-xl mx-auto text-sm md:text-base">
          Módulos integrados que cobrem todas as áreas do seu negócio, do orçamento à nota fiscal.
        </p>
      </div>

      {/* Cards full-width empilhados */}
      <div className="flex flex-col gap-3 px-4 md:px-8 lg:px-12">
        {modulos.map((m, i) => (
          <div key={m.nome} className="rounded-2xl overflow-hidden">
            <ModuloItem m={m} index={i} />
          </div>
        ))}
      </div>

      {/* Rodapé da seção */}
      <div className="h-16 bg-gradient-to-b from-orange-600 to-gray-50" />
    </section>
  );
}
