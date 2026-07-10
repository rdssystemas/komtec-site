// Conteúdo padrão do site — usado como fallback quando o backend não responde

// ── Hero ──────────────────────────────────────────────────────────────────────
export interface HeroSlide {
  id: string;
  etiqueta: string;
  titulo: string;
  descricao: string;
  imagem: string;
  cta?: boolean;
}

export interface HeroContent {
  destaques: string[];
  slides: HeroSlide[];
}

export const DEFAULT_HERO: HeroContent = {
  destaques: [
    'Nota Fiscal Eletrônica integrada',
    'Multi-empresa com dados isolados',
    'Acesso via navegador, sem instalação',
  ],
  slides: [
    {
      id: 'intro',
      etiqueta: 'ERP KomTec Pro · Sistema 100% Online',
      titulo: 'Gerencie sua empresa com\nsimplicidade e eficiência',
      descricao: 'Vendas, compras, estoque, financeiro e emissão de NF-e em um único sistema — fácil de usar, seguro e acessível de qualquer lugar.',
      imagem: '/screenshots/komtec_bi.webp',
      cta: true,
    },
    {
      id: 'cotacao',
      etiqueta: 'Módulo · Vendas & Orçamentos',
      titulo: 'Do orçamento\nà venda em segundos',
      descricao: 'Crie propostas profissionais, converta em vendas e envie PDFs por e-mail automaticamente.',
      imagem: '/screenshots/komtec_cotacao.webp',
    },
    {
      id: 'nfe',
      etiqueta: 'Módulo · Nota Fiscal Eletrônica',
      titulo: 'NF-e integrada\ndiretamente à SEFAZ',
      descricao: 'Emita, cancele e consulte notas fiscais com cálculo automático de impostos e envio do DANFE.',
      imagem: '/screenshots/komtec_nfe.webp',
    },
    {
      id: 'relatorios',
      etiqueta: 'Módulo · Dashboard e Relatórios',
      titulo: 'Decisões baseadas\nem dados reais',
      descricao: 'Acompanhe indicadores de vendas, estoque e financeiro em tempo real. Relatórios exportáveis em PDF.',
      imagem: '/screenshots/komtec_relatorios.webp',
    },
    {
      id: 'suporte',
      etiqueta: 'Recurso · Suporte com Inteligência Artificial',
      titulo: 'Suporte inteligente\npara sua equipe',
      descricao: 'Central de ajuda com IA integrada ao sistema para resolver dúvidas com agilidade.',
      imagem: '/screenshots/komtec_suporte_ia.webp',
    },
    {
      id: 'promo',
      etiqueta: 'Recurso · Promoções e Campanhas',
      titulo: 'Aumente suas vendas\ncom promoções automáticas',
      descricao: 'Crie campanhas, defina regras de desconto e acompanhe o desempenho das promoções.',
      imagem: '/screenshots/komtec_promo.webp',
    },
    {
      id: 'parceiros',
      etiqueta: 'Módulo · Clientes e Fornecedores',
      titulo: 'Gestão completa\nde clientes e parceiros',
      descricao: 'Cadastre PF e PJ, gerencie endereços, contatos, histórico de compras e documentos.',
      imagem: '/screenshots/komtec_parceiros.webp',
    },
  ],
};

// ── Módulos ───────────────────────────────────────────────────────────────────
export interface ModuloSlide {
  imagem: string;
  titulo: string;
  descricao: string;
}

export interface ModuloItem {
  nome: string;
  descricao: string;
  imagem: string;
  slides?: ModuloSlide[];
  icone: string;
}

export interface ModulosContent {
  titulo: string;
  subtitulo: string;
  items: ModuloItem[];
}

export const DEFAULT_MODULOS: ModulosContent = {
  titulo: 'Tudo o que sua empresa precisa',
  subtitulo: 'Módulos integrados que cobrem todas as áreas do seu negócio, do orçamento à nota fiscal.',
  items: [
    {
      icone: 'Wrench',
      nome: 'Gestão de Equipamentos',
      descricao: 'Controle toda a frota de máquinas e veículos com abastecimento, manutenção e alertas automáticos.',
      imagem: '/screenshots/komtec_gestao_maquinas_pesadas.jpg',
      slides: [
        {
          imagem: '/screenshots/komtec_gestao_maquinas_pesadas.jpg',
          titulo: 'Gestão de Equipamentos',
          descricao: 'Controle toda a frota de máquinas e veículos: abastecimento diário, horímetro, componentes em árvore e histórico completo por equipamento. Ideal para agropecuária e frotas de máquinas pesadas.',
        },
        {
          imagem: '/screenshots/komtec_gestao_trator_esteiras.jpg',
          titulo: 'Manutenção Preventiva',
          descricao: 'Programe revisões por horímetro ou quilometragem. O sistema alerta automaticamente quando o equipamento se aproxima do prazo — evite paradas inesperadas no campo e reduza o custo de corretivas.',
        },
        {
          imagem: '/screenshots/komtec_gestao_motoniveladora.jpg',
          titulo: 'Histórico de Intervenções',
          descricao: 'Cada manutenção registrada com peças trocadas, mão de obra, custo e responsável. Rastreabilidade total do ciclo de vida de cada máquina — do primeiro abastecimento à última revisão.',
        },
      ],
    },
    { icone: 'ShoppingCart', nome: 'Vendas e Orçamentos',    descricao: 'Crie orçamentos profissionais, converta em vendas e envie por e-mail em PDF com um clique. Controle status, histórico e desempenho da equipe de vendas.', imagem: '/komtec_cotacao.webp' },
    { icone: 'Truck',        nome: 'Compras',                descricao: 'Registre pedidos de compra e importe notas fiscais de fornecedores via XML — inclusive de fornecedores MEI. Gerencie aprovações, prazos e controle de entrada no estoque.', imagem: '/komtec_comercial.webp' },
    { icone: 'Package',      nome: 'Estoque',                descricao: 'Controle entradas, saídas, movimentações e inventário em tempo real. Alertas de estoque mínimo, rastreabilidade por lote e histórico completo de movimentações.', imagem: '/komtec_backup.webp' },
    { icone: 'DollarSign',   nome: 'Financeiro',             descricao: 'Gerencie contas a pagar e receber, parcelas, vencimentos e fluxo de caixa. Concilie lançamentos e acompanhe a saúde financeira da sua empresa em tempo real.', imagem: '/komtec_bi.webp' },
    { icone: 'FileText',     nome: 'Nota Fiscal Eletrônica', descricao: 'Emita, cancele e consulte NF-e com integração direta à SEFAZ. Cálculo automático de impostos, geração de XML e envio do DANFE por e-mail ao cliente.', imagem: '/komtec_nfe.webp' },
    { icone: 'Users',        nome: 'Clientes e Fornecedores',descricao: 'Cadastre pessoas físicas e jurídicas com endereços, contatos, histórico de compras e documentos. Consulta automática de CNPJ e validação de CPF integrada.', imagem: '/komtec_parceiros.webp' },
    { icone: 'BookOpen',     nome: 'Catálogo de Peças',      descricao: 'Importe catálogos em PDF, visualize diagramas interativos e localize peças por código com precisão. Ideal para revendas de peças agrícolas e máquinas pesadas.', imagem: '/komtec_download.webp' },
    { icone: 'BarChart3',    nome: 'Dashboard e Relatórios', descricao: 'Acompanhe os indicadores da sua empresa em tempo real com gráficos por período. Relatórios de vendas, estoque, financeiro e muito mais — exportáveis em PDF.', imagem: '/komtec_relatorios.webp' },
  ],
};

// ── Diferenciais ──────────────────────────────────────────────────────────────
export interface DiferencialItem {
  titulo: string;
  descricao: string;
  imagem: string;
  icone: string;
  gradiente: string;
  destaque: string;
  iconeCorFundo: string;
  iconeCorTexto: string;
}

export interface DiferenciaisContent {
  titulo: string;
  subtitulo: string;
  items: DiferencialItem[];
}

export const DEFAULT_DIFERENCIAIS: DiferenciaisContent = {
  titulo: 'Diferenciais do ERP KomTec Pro',
  subtitulo: 'Desenvolvido especialmente para empresas brasileiras que precisam de um sistema simples, seguro e completo.',
  items: [
    { icone: 'Building2',      titulo: 'Multi-empresa',          descricao: 'Cada empresa tem seus dados completamente isolados. Ideal para grupos com várias filiais ou negócios.',                                              imagem: '/komtec_multi_empresa.png',  gradiente: 'from-orange-500/60 via-amber-600/40 to-transparent',   destaque: 'bg-orange-500/20 border-orange-400/30 text-orange-300', iconeCorFundo: 'bg-orange-500/20',  iconeCorTexto: 'text-orange-300' },
    { icone: 'Shield',         titulo: 'Segurança total',        descricao: 'Autenticação com JWT, controle de acesso por perfil e auditoria completa de todas as operações.',                                                     imagem: '/komtec_seguranca.png',      gradiente: 'from-indigo-500/60 via-blue-600/40 to-transparent',    destaque: 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300', iconeCorFundo: 'bg-indigo-500/20',  iconeCorTexto: 'text-indigo-300' },
    { icone: 'Globe',          titulo: 'Acesso de qualquer lugar',descricao: 'Sistema 100% web — acesse do computador, tablet ou celular, sem instalar nada.',                                                                      imagem: '/komtec_acesso_remoto.png',  gradiente: 'from-emerald-500/60 via-teal-600/40 to-transparent',   destaque: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300', iconeCorFundo: 'bg-emerald-500/20', iconeCorTexto: 'text-emerald-300' },
    { icone: 'Zap',            titulo: 'Rápido e moderno',       descricao: 'Interface ágil e responsiva, desenvolvida com tecnologia de ponta para máxima produtividade.',                                                         imagem: '/komtec_rapido_moderno.png', gradiente: 'from-yellow-500/60 via-orange-500/40 to-transparent',  destaque: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-300', iconeCorFundo: 'bg-yellow-500/20',  iconeCorTexto: 'text-yellow-300' },
    { icone: 'RefreshCw',      titulo: 'Sempre atualizado',      descricao: 'Novas funcionalidades entregues continuamente, sem necessidade de atualização manual.',                                                               imagem: '/komtec_atualizado.png',     gradiente: 'from-violet-500/60 via-purple-600/40 to-transparent',  destaque: 'bg-violet-500/20 border-violet-400/30 text-violet-300', iconeCorFundo: 'bg-violet-500/20',  iconeCorTexto: 'text-violet-300' },
    { icone: 'HeadphonesIcon', titulo: 'Suporte especializado',  descricao: 'Atendimento direto com a equipe técnica por WhatsApp e e-mail, com resposta rápida.',                                                                  imagem: '/komtec_suporte.png',        gradiente: 'from-cyan-500/60 via-sky-600/40 to-transparent',       destaque: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300',       iconeCorFundo: 'bg-cyan-500/20',    iconeCorTexto: 'text-cyan-300' },
  ],
};

// ── Depoimentos ───────────────────────────────────────────────────────────────
export interface DepoimentoItem {
  nome: string;
  empresa: string;
  cargo: string;
  texto: string;
}

export interface DepoimentosContent {
  titulo: string;
  subtitulo: string;
  items: DepoimentoItem[];
}

export const DEFAULT_DEPOIMENTOS: DepoimentosContent = {
  titulo: 'O que nossos clientes dizem',
  subtitulo: 'Empresas que transformaram sua gestão com o ERP KomTec Pro.',
  items: [
    { nome: 'Jales Junior',     empresa: 'A G M Peças',                cargo: 'Proprietário', texto: 'O KomTec resolveu o que a gente mais precisava: controle de estoque e emissão de nota fiscal no mesmo lugar. Simples de usar e o suporte atende na hora.' },
    { nome: 'William Carvalho', empresa: 'Ancora Reposição de Peças',  cargo: 'Proprietário', texto: 'Antes era tudo no papel e planilha. Com o KomTec a gente faz orçamento, venda e nota fiscal sem complicação. Mudou bastante a rotina aqui na loja.' },
    { nome: 'Mariano Henrique', empresa: 'Maq Filtro',                 cargo: 'Proprietário', texto: 'Sistema completo e fácil de entender. O que mais gosto é poder acessar de qualquer lugar — fico de olho no movimento mesmo quando não estou na loja.' },
    { nome: 'Roberson Santos',  empresa: 'KomTec Peças',               cargo: 'Proprietário', texto: 'Desenvolvemos o sistema para resolver os problemas que a gente mesmo enfrentava no dia a dia. Hoje usamos na nossa própria loja e não abrimos mão.' },
  ],
};

// ── FAQ ───────────────────────────────────────────────────────────────────────
export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface FaqContent {
  titulo: string;
  subtitulo: string;
  items: FaqItem[];
}

export const DEFAULT_FAQ: FaqContent = {
  titulo: 'Perguntas frequentes',
  subtitulo: 'Tire suas dúvidas antes de falar com a nossa equipe.',
  items: [
    { pergunta: 'Preciso instalar algum programa para usar o sistema?',     resposta: 'Não. O ERP KomTec Pro é 100% web — basta ter um navegador (Chrome, Edge, Firefox) e acesso à internet. Funciona no computador, tablet e celular, sem instalação.' },
    { pergunta: 'O sistema emite Nota Fiscal Eletrônica (NF-e)?',           resposta: 'Sim. O sistema possui módulo completo de NF-e integrado à SEFAZ, permitindo emitir, cancelar e consultar notas fiscais diretamente, sem precisar de outro programa.' },
    { pergunta: 'Os dados da minha empresa ficam misturados com os de outras?', resposta: 'Não. Cada empresa tem seus dados completamente isolados em um ambiente exclusivo. Nenhuma empresa acessa ou visualiza informações de outra.' },
    { pergunta: 'Quantos usuários posso ter no sistema?',                   resposta: 'O número de usuários depende do plano contratado. Temos planos para pequenas empresas (até 2 usuários) até planos empresariais com usuários ilimitados. Consulte-nos para o plano ideal.' },
    { pergunta: 'Como funciona o suporte técnico?',                         resposta: 'Oferecemos suporte por WhatsApp e e-mail. O atendimento é feito diretamente pela equipe técnica que desenvolveu o sistema, garantindo respostas rápidas e precisas.' },
    { pergunta: 'É possível importar meus dados de outro sistema?',         resposta: 'Sim. O sistema suporta importação de produtos via Excel, PDF e XML (NF-e). Para migrações mais complexas, nossa equipe oferece suporte dedicado no processo.' },
    { pergunta: 'O sistema funciona para qualquer segmento de empresa?',    resposta: 'Sim. O ERP KomTec Pro atende comércio, distribuidoras, prestadores de serviço e indústrias. Os módulos são flexíveis e podem ser configurados conforme a necessidade do seu negócio.' },
  ],
};

// ── Planos ────────────────────────────────────────────────────────────────────
export interface PlanosDiferencial {
  titulo: string;
  descricao: string;
  icone: string;
}

export interface PlanosContent {
  titulo: string;
  subtitulo: string;
  texto: string;
  diferenciais: PlanosDiferencial[];
}

export const DEFAULT_PLANOS: PlanosContent = {
  titulo: 'Proposta personalizada para o seu negócio',
  subtitulo: 'Investimento',
  texto: 'Não acreditamos em tabela de preços genérica. Queremos entender a sua empresa para oferecer o plano certo — com os módulos que você realmente precisa e um investimento que caiba no seu orçamento.',
  diferenciais: [
    { icone: 'Users',    titulo: 'Cada empresa é única',    descricao: 'O número de usuários, módulos e necessidades varia. Por isso criamos uma proposta sob medida para o seu perfil.' },
    { icone: 'Settings', titulo: 'Implantação assistida',   descricao: 'Nossa equipe acompanha a configuração do sistema e o treinamento da sua equipe desde o primeiro dia.' },
    { icone: 'TrendingUp', titulo: 'Cresce com você',       descricao: 'Comece com o essencial e adicione módulos conforme sua empresa cresce — sem trocar de sistema.' },
  ],
};

// ── CTA Banner ────────────────────────────────────────────────────────────────
export interface CtaBannerContent {
  etiqueta: string;
  titulo: string;
  descricao: string;
  btn1Label: string;
  btn2Label: string;
}

export const DEFAULT_CTABANNER: CtaBannerContent = {
  etiqueta: 'Sem fidelidade · Cancele quando quiser',
  titulo: 'Pronto para simplificar a gestão\nda sua empresa?',
  descricao: 'Escolha um plano e comece hoje — ou fale com nossa equipe para uma demonstração personalizada e gratuita.',
  btn1Label: 'Falar com um especialista',
  btn2Label: 'Solicitar demo gratuita',
};
