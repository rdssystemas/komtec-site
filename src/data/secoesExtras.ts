// ─────────────────────────────────────────────────────────────────────────────
// SEÇÕES EXTRAS DO SITE — edite aqui para adicionar, reordenar ou ocultar
// seções personalizadas sem tocar no código dos componentes.
//
// Para adicionar uma nova seção:
//   1. Copie um bloco existente no array SECOES_EXTRAS
//   2. Troque o `id` (deve ser único, kebab-case)
//   3. Escolha o `tipo`: 'texto-imagem' | 'cards' | 'banner-cta'
//   4. Preencha o conteúdo e coloque `visivel: true`
//   5. Salve — a seção aparece automaticamente no site
//
// Tipos disponíveis:
//   texto-imagem  → parágrafo + bullets de um lado, imagem do outro
//   cards         → grade de cards com ícone/título/texto
//   banner-cta    → faixa chamativa com botão de ação
// ─────────────────────────────────────────────────────────────────────────────

export type TipoSecaoExtra = 'texto-imagem' | 'cards' | 'banner-cta';

export interface ItemSecao {
  titulo: string;
  descricao?: string;
  icone?: string; // nome do ícone do iconMap (ex: 'ClipboardList', 'Wrench', 'FileText')
}

export interface SecaoExtra {
  id: string;              // âncora HTML — aparece como /#id na URL
  tipo: TipoSecaoExtra;
  visivel: boolean;        // false = oculto sem precisar apagar o bloco

  // Sequência — menor número aparece mais acima na página
  ordem: number;

  // Texto principal
  etiqueta?: string;       // tag pequena colorida acima do título
  titulo: string;          // pode usar \n para quebrar linha no texto-imagem
  subtitulo?: string;
  texto?: string;          // parágrafo descritivo

  // Imagem (texto-imagem)
  imagem?: string;         // caminho relativo ao /public (ex: '/screenshots/komtec_os.webp')
  imagemAlt?: string;      // texto alternativo para acessibilidade e SEO
  imagemLado?: 'esquerda' | 'direita'; // padrão: 'direita'

  // Lista de bullets (texto-imagem) ou cards (cards)
  itens?: ItemSecao[];

  // Call-to-action
  ctaLabel?: string;
  ctaUrl?: string;
  ctaLabel2?: string;
  ctaUrl2?: string;

  // Visual
  fundoEscuro?: boolean;   // true = fundo marrom escuro como a seção Diferenciais
}

// ─────────────────────────────────────────────────────────────────────────────
// SUAS SEÇÕES — adicione quantas quiser aqui
// ─────────────────────────────────────────────────────────────────────────────

export const SECOES_EXTRAS: SecaoExtra[] = [

  // ── EXEMPLO 1: Ordem de Serviço ───────────────────────────────────────────
  {
    id: 'ordem-de-servico',
    tipo: 'texto-imagem',
    visivel: true,
    ordem: 1,
    etiqueta: 'Módulo · Ordens de Serviço',
    titulo: 'Controle total das\nOrdens de Serviço',
    subtitulo: 'Do chamado à entrega — tudo registrado e rastreável',
    texto: 'Abra, acompanhe e encerre ordens de serviço com histórico completo de peças utilizadas, técnico responsável, tempo de execução e custos. Integrado ao estoque, financeiro e emissão de NFS-e.',
    // Troque pelo screenshot real da tela de OS quando tiver
    imagem: '/screenshots/komtec_comercial.webp',
    imagemAlt: 'Tela de Ordem de Serviço do ERP KomTec',
    imagemLado: 'direita',
    itens: [
      { titulo: 'Abertura e acompanhamento em tempo real',    icone: 'ClipboardList' },
      { titulo: 'Atribuição de técnico responsável',          icone: 'Wrench' },
      { titulo: 'Controle de peças e serviços por OS',        icone: 'Package' },
      { titulo: 'Histórico completo por equipamento/cliente', icone: 'History' },
      { titulo: 'Emissão de NFS-e diretamente da OS',         icone: 'FileText' },
      { titulo: 'Relatório de produtividade por técnico',     icone: 'BarChart3' },
    ],
    fundoEscuro: false,
  },

  // ── Gestão de Pneus ────────────────────────────────────────────────────────
  {
    id: 'gestao-de-pneus',
    tipo: 'texto-imagem',
    visivel: true,
    ordem: 2,
    etiqueta: 'Módulo · Gestão de Pneus',
    titulo: 'Cada pneu, uma ficha\ncompleta e rastreável',
    subtitulo: 'Da compra à recauchutagem — controle total da vida útil',
    texto: 'Cadastre cada pneu com número de fogo, DOT, dimensão e marca. Acompanhe a posição instalada em cada equipamento, registre inspeções de sulco e pressão, e tenha o custo real por hora, quilômetro e tonelada rodada — essencial para frotas e operações agrícolas.',
    imagem: '/komtec_gestao_pneus_v2.webp',
    imagemAlt: 'Ficha digital de pneu com análise de custos e inspeção no ERP KomTec Pro',
    itens: [
      { titulo: 'Ficha completa por pneu',        descricao: 'Número de fogo, DOT, dimensão e marca — rastreável desde a compra.',                icone: 'FileText' },
      { titulo: 'Mapa de posição no equipamento', descricao: 'Saiba exatamente qual pneu está instalado em cada posição da máquina ou veículo.', icone: 'MapPin' },
      { titulo: 'Inspeção de sulco e pressão',    descricao: 'Registre medições a cada inspeção e acompanhe o desgaste ao longo do tempo.',       icone: 'Gauge' },
      { titulo: 'Histórico de reformas',          descricao: 'Controle recauchutagens e consertos, com vida útil (1ª, 2ª, 3ª vida) de cada pneu.', icone: 'RefreshCw' },
      { titulo: 'Custo por hora, km e tonelada',  descricao: 'Análise financeira real de cada pneu ao longo de sua vida útil.',                    icone: 'DollarSign' },
      { titulo: 'Laudo de exame em PDF',          descricao: 'Gere um relatório completo do pneu para auditoria ou repasse ao cliente.',            icone: 'ClipboardList' },
    ],
    fundoEscuro: true,
  },

  // ── Gestão de Pneus — qualquer equipamento ────────────────────────────────
  {
    id: 'gestao-de-pneus-qualquer-equipamento',
    tipo: 'texto-imagem',
    visivel: true,
    ordem: 3,
    etiqueta: 'Módulo · Gestão de Pneus',
    titulo: 'Do caminhão à\nmotoniveladora, o mesmo controle',
    subtitulo: 'Uma ficha digital para cada pneu, em cada tipo de equipamento',
    texto: 'Não importa a máquina — caminhão, motoniveladora, trator ou pá carregadeira. Cada pneu tem sua própria ficha, com medida, sulco e pressão registrados a cada inspeção, para sua frota nunca parar por um problema que poderia ter sido previsto.',
    imagem: '/komtec_gestao_pneus_dia_v2.webp',
    imagemAlt: 'Ficha digital de pneu de motoniveladora com inspeção de sulco e pressão no ERP KomTec Pro',
    imagemLado: 'esquerda',
    itens: [
      { titulo: 'Funciona em qualquer equipamento', descricao: 'Motoniveladoras, tratores, caminhões e pás carregadeiras — a mesma ficha digital para qualquer máquina.', icone: 'Truck' },
      { titulo: 'Status sempre atualizado',          descricao: 'Novo, em uso, em estoque, recapando ou descartado — acompanhe o ciclo de vida completo do pneu.',        icone: 'History' },
      { titulo: 'Fotos e observações por pneu',      descricao: 'Registre até três fotos e observações — útil para documentar avarias ou desgastes.',                     icone: 'Info' },
    ],
    fundoEscuro: true,
  },

  // ── EXEMPLO 2 (desativado): Banner de chamada ─────────────────────────────
  // Para ativar: mude visivel para true
  {
    id: 'cta-os',
    tipo: 'banner-cta',
    visivel: false,
    ordem: 4,
    titulo: 'Sua equipe de campo merece um sistema que acompanha o ritmo',
    texto: 'Experimente o módulo de OS gratuitamente por 14 dias.',
    ctaLabel: 'Experimentar grátis',
    ctaUrl: 'https://erpkomtec.com.br/#experimenta',
    ctaLabel2: 'Falar com especialista',
    ctaUrl2: 'https://wa.me/5562993256370',
    fundoEscuro: true,
  },

  // ── TEMPLATE: copie e preencha para criar novas seções ───────────────────
  // {
  //   id: 'minha-nova-secao',
  //   tipo: 'texto-imagem',
  //   visivel: false,
  //   ordem: 3,
  //   etiqueta: 'Módulo · Nome do Módulo',
  //   titulo: 'Título principal\nda seção',
  //   subtitulo: 'Subtítulo curto',
  //   texto: 'Descrição mais longa do que o módulo faz e como ajuda o usuário.',
  //   imagem: '/screenshots/komtec_xxxxx.webp',
  //   imagemAlt: 'Tela do módulo XXX',
  //   imagemLado: 'esquerda',
  //   itens: [
  //     { titulo: 'Recurso 1', icone: 'Shield' },
  //     { titulo: 'Recurso 2', icone: 'Zap' },
  //   ],
  //   fundoEscuro: false,
  // },
];
