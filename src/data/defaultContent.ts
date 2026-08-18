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
          imagem: '/komtec_comboio_manutencao_v3.webp',
          titulo: 'Manutenção Preventiva',
          descricao: 'Programe revisões por horímetro ou quilometragem e receba alertas automáticos quando o equipamento se aproxima do prazo. O comboio de manutenção controla o estoque de combustível, lubrificantes e outros fluidos direto no campo.',
        },
        {
          imagem: '/komtec_comboio_dia.webp',
          titulo: 'Comboio de Manutenção em Campo',
          descricao: 'Cada veículo de comboio tem um responsável e tanques com saldo controlado por tipo de fluido. Todo abastecimento é registrado por equipamento atendido — sua equipe atende a frota onde ela estiver, sem perder o histórico.',
        },
        {
          imagem: '/screenshots/komtec_gestao_motoniveladora.jpg',
          titulo: 'Histórico de Intervenções',
          descricao: 'Cada manutenção registrada com peças trocadas, mão de obra, custo e responsável. Rastreabilidade total do ciclo de vida de cada máquina — do primeiro abastecimento à última revisão.',
        },
      ],
    },
    { icone: 'ClipboardList', nome: 'Ordens de Serviço',      descricao: 'Abra, acompanhe e encerre ordens de serviço com técnico responsável, peças utilizadas e assinatura do cliente. Emita a NFS-e direto da ordem finalizada.', imagem: '/ordens-de-servico-oficina.webp' },
    { icone: 'ShoppingCart', nome: 'Vendas e Orçamentos',    descricao: 'Crie orçamentos profissionais, converta em vendas e envie por e-mail em PDF com um clique. Controle status, histórico e desempenho da equipe de vendas.', imagem: '/komtec_cotacao.webp' },
    { icone: 'Truck',        nome: 'Compras',                descricao: 'Registre pedidos de compra e importe notas fiscais de fornecedores via XML — inclusive de fornecedores MEI. Gerencie aprovações, prazos e controle de entrada no estoque.', imagem: '/komtec_comercial.webp' },
    { icone: 'Package',      nome: 'Estoque',                descricao: 'Controle entradas, saídas, movimentações e inventário em tempo real. Alertas de estoque mínimo, rastreabilidade por lote e histórico completo de movimentações.', imagem: '/komtec_backup.webp' },
    { icone: 'Warehouse',    nome: 'Almoxarifado',           descricao: 'Centralize requisições de material entre setores, gere solicitações de compra automáticas e acompanhe o custo por centro de custo.', imagem: '/almoxarifado-inventario-holografico.webp' },
    { icone: 'Archive',      nome: 'Patrimônio',             descricao: 'Cadastre e rastreie os bens da empresa com etiqueta própria, movimentações entre setores e inspeções de aporte/desaporte.', imagem: '/patrimonio.webp' },
    { icone: 'Factory',      nome: 'Ficha Técnica / Produção', descricao: 'Cadastre a ficha técnica de produtos manufaturados com insumos e mão de obra, e o sistema calcula sozinho o custo e a capacidade de produção.', imagem: '/ficha-tecnica-producao-holografica.webp' },
    { icone: 'DollarSign',   nome: 'Financeiro',             descricao: 'Gerencie contas a pagar e receber, parcelas, vencimentos e fluxo de caixa. Concilie lançamentos e acompanhe a saúde financeira da sua empresa em tempo real.', imagem: '/komtec_bi.webp' },
    { icone: 'FileText',     nome: 'Nota Fiscal Eletrônica', descricao: 'Emita, cancele e consulte NF-e com integração direta à SEFAZ. Cálculo automático de impostos, geração de XML e envio do DANFE por e-mail ao cliente.', imagem: '/komtec_nfe.webp' },
    { icone: 'Store', nome: 'Marketplace', descricao: 'Integre com Mercado Livre e Shopee para vender em múltiplos canais sem sair do sistema — do anúncio ao pedido, tudo sincronizado com seu estoque. Atende qualquer segmento, de peças a moda.', imagem: '/marketplace-pecas-automotivas.webp' },
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
  items: [],
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

// ── Central de Informações ──────────────────────────────────────────────────────
export interface FonteArtigo {
  label: string;
  url: string;
}

export interface InformacaoArtigo {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  tempoLeitura: string;
  // Caminho relativo a /public (ex: '/informacoes-reforma-tributaria.webp'). Vazio = usa o
  // placeholder visual no lugar da capa.
  imagem?: string;
  // Corpo do artigo em markdown leve: linha começando com "## " vira título de
  // seção, linha começando com "- " vira item de lista, linha em branco separa
  // parágrafos. Sem suporte a negrito/links dentro do texto.
  conteudo: string;
  fontes: FonteArtigo[];
  aviso?: string;
  publicado: boolean;
}

export interface InformacoesContent {
  items: InformacaoArtigo[];
}

export const DEFAULT_INFORMACOES: InformacoesContent = {
  items: [
    {
      slug: 'reforma-tributaria-ibs-cbs',
      titulo: 'Reforma Tributária: o que é IBS/CBS e o que muda para a sua empresa',
      resumo:
        'Entenda de forma simples o que são o IBS e a CBS, o que já aparece nas notas fiscais hoje, e o que é o Simples Híbrido — a opção que chega em 2027 para micro e pequenas empresas.',
      categoria: 'Fiscal',
      data: 'Agosto de 2026',
      tempoLeitura: '6 min de leitura',
      imagem: '/reforma-tributaria-capa.webp',
      conteudo: `## O que é a Reforma Tributária, em resumo

A Reforma Tributária (Emenda Constitucional nº 132/2023, regulamentada pela Lei Complementar nº 214/2025) está substituindo, aos poucos, cinco tributos que incidem sobre o consumo — PIS, COFINS, IPI, ICMS e ISS — por apenas dois novos: o IBS (Imposto sobre Bens e Serviços, de estados e municípios) e a CBS (Contribuição sobre Bens e Serviços, federal). Existe também o Imposto Seletivo, que incide só sobre alguns produtos específicos (como cigarros e bebidas).

Essa troca não acontece de uma vez. Há um período de transição que vai de 2026 até 2033, com os tributos antigos e os novos convivendo em proporções que mudam ano a ano, até os antigos serem extintos por completo. 2026 é o "ano de teste": CBS começa em 0,9% e IBS em 0,1%, principalmente para calibrar os sistemas antes das alíquotas cheias.

## O que já aparece nas notas fiscais hoje

Desde 2026, fornecedores que já estão na fase de testes da reforma começaram a emitir notas fiscais (NF-e) com os campos de IBS, CBS e Imposto Seletivo preenchidos, além dos tributos tradicionais.

No KomTec, quando você importa uma nota de compra cujo fornecedor já emite nesse formato, o sistema captura automaticamente esses valores e mostra tanto no total da compra quanto em cada item — sem trabalho manual. Notas de fornecedores que ainda não estão na reforma continuam funcionando normalmente, só sem esses campos preenchidos (o que é esperado).

## O Simples Híbrido, a partir de 2027

A partir de 2027, micro e pequenas empresas do Simples Nacional passam a ter a opção de aderir ao chamado Simples Híbrido — um regime que pode mudar bastante o planejamento fiscal do negócio.

Na prática, quem optar pelo Simples Híbrido continua recolhendo os demais tributos pela guia única (o DAS), mas passa a apurar o IBS e a CBS separadamente, pelo regime regular — fora da guia única. A vantagem é poder aproveitar e transferir crédito integral desses tributos aos clientes, algo que o Simples tradicional não permite (nele, o crédito repassado é bem menor).

A janela para decidir foi definida pela Receita Federal (Resolução CGSN nº 186/2026): a opção é feita em setembro de cada ano (a primeira janela foi 1 a 30/09/2026), vale a partir de 1º de janeiro do ano seguinte, e pode ser cancelada até o último dia útil de novembro do mesmo ano — depois disso, fica valendo o ano todo.

## Vale a pena migrar? Depende do seu tipo de cliente

A escolha pelo Simples Híbrido não é só uma conta de matemática tributária — ela depende muito do perfil de quem compra de você:

- Vende para outras empresas (B2B): tende a ser mais beneficiada. Como gera crédito integral de IBS/CBS, seus produtos ficam mais atraentes para compradores que também querem aproveitar esse crédito para reduzir os próprios tributos.
- Vende direto para o consumidor final (B2C): a transferência de crédito perde relevância, porque o consumidor final não aproveita crédito nenhum. Nesses casos, o Simples tradicional costuma continuar sendo mais simples e vantajoso.

## O que isso exige da sua gestão

Optar pelo Simples Híbrido tende a aumentar o custo operacional e exigir mais organização: escrituração fiscal mais detalhada, controle mais rígido das notas de entrada e saída, e sistemas de gestão atualizados para lidar com essas informações. Também vale considerar uma assessoria contábil que já domine o assunto, para reduzir o risco de erros e aproveitar os créditos corretamente.

É exatamente para isso que o KomTec já está capturando os dados de IBS/CBS desde a importação da nota de compra: quanto mais organizado esse histórico estiver dentro do sistema, mais fácil fica para o seu contador fazer a apuração — seja você optando pelo Simples tradicional, pelo Híbrido, ou pelo regime regular.

## Em resumo

A Reforma Tributária é grande e vai se estender por vários anos. O KomTec já está acompanhando essa transição: hoje, capturando os valores de IBS/CBS que já vêm nas notas fiscais de compra. À medida que a reforma avança, o sistema continuará evoluindo para apoiar a apuração e o compliance fiscal do seu negócio.`,
      fontes: [
        { label: 'Emenda Constitucional nº 132/2023 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm' },
        { label: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
        { label: 'CGSN define prazos de opção pelo Simples Nacional e pelo regime híbrido de IBS/CBS (Receita Federal)', url: 'https://www8.receita.fazenda.gov.br/simplesnacional/noticias/NoticiaCompleta.aspx?id=c739e03c-8482-473f-8e82-f38ec3b13637' },
        { label: 'Reforma Tributária — Regulamentação (Ministério da Fazenda)', url: 'https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria' },
      ],
      aviso:
        'Este conteúdo tem caráter informativo e não substitui a orientação do seu contador. A decisão sobre regime tributário (Simples tradicional, Simples Híbrido ou regime regular) deve ser tomada com apoio de um profissional de contabilidade, considerando a realidade específica do seu negócio.',
      publicado: true,
    },
    {
      slug: 'cronograma-reforma-tributaria-2026-2033',
      titulo: 'Reforma Tributária: o cronograma completo, ano a ano, até 2033',
      resumo:
        'A reforma não muda tudo de uma vez. Veja o que acontece em cada ano da transição — de 2026 (fase de teste) até 2033 (sistema definitivo) — sem precisar decorar tudo de uma vez.',
      categoria: 'Fiscal',
      data: 'Agosto de 2026',
      tempoLeitura: '5 min de leitura',
      imagem: '/cronograma-transicao-reforma-tributaria.webp',
      conteudo: `## Por que a transição é tão longa

Trocar cinco tributos (PIS, COFINS, IPI, ICMS, ISS) por um sistema novo de uma hora para outra quebraria a economia — preços, contratos e sistemas de todo mundo precisam de tempo para se ajustar. Por isso a Emenda Constitucional nº 132/2023 espalhou a mudança ao longo de 8 anos, com os tributos antigos e os novos convivendo em proporções que mudam ano a ano.

## 2026 — ano de teste

CBS começa em 0,9% e IBS em 0,1% (total de 1%) — uma alíquota simbólica, criada só para testar se os sistemas de emissão de nota e de arrecadação estão funcionando. Na prática, esse valor pode ser compensado com o PIS/COFINS que a empresa já deve, então não é para pesar no bolso ainda.

## 2027-2028 — CBS entra em vigor de verdade

A CBS passa a valer com a alíquota real (estimativa de referência em torno de 8,4%) e substitui PIS e COFINS por completo. O IPI é zerado para a maioria dos produtos (exceção: itens da Zona Franca de Manaus, que mantêm incentivo até 2033). É também em 2027 que o Imposto Seletivo entra em vigor.

## 2029-2032 — o IBS sobe, o ICMS e o ISS descem

Começa a transição gradual dos tributos estaduais/municipais: ICMS e ISS caem para 90% do valor atual em 2029, 80% em 2030, 70% em 2031 e 60% em 2032 — enquanto o IBS assume a fatia que vai sobrando a cada ano.

## 2033 — sistema pleno

PIS, COFINS, IPI, ICMS e ISS são extintos de vez. A partir daqui, só existem três tributos sobre consumo no Brasil: IBS, CBS e Imposto Seletivo.

## O que isso significa para o seu dia a dia

Não é preciso memorizar todos os percentuais — o importante é não confundir "ano de teste" (2026) com "já vale para valer", e ficar atento às duas datas que mais mexem com o bolso: 2027 (CBS/Imposto Seletivo em vigor cheio) e 2033 (fim definitivo do sistema antigo). O KomTec acompanha essa transição junto com você, capturando os dados fiscais conforme cada fase entra em vigor.`,
      fontes: [
        { label: 'Emenda Constitucional nº 132/2023 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm' },
        { label: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
        { label: 'Reforma Tributária — Regulamentação (Ministério da Fazenda)', url: 'https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria' },
      ],
      aviso:
        'Os percentuais e datas apresentados são de referência, conforme a legislação vigente até a publicação deste artigo. Prazos e alíquotas podem ser ajustados por leis complementares futuras — confirme sempre a versão mais atual com seu contador.',
      publicado: true,
    },
    {
      slug: 'split-payment-ibs-cbs',
      titulo: 'Split Payment: o novo jeito de recolher IBS e CBS no pagamento',
      resumo:
        'A partir da reforma, o imposto pode ser separado automaticamente no momento em que o cliente paga — antes mesmo do dinheiro cair na sua conta. Entenda o que muda no fluxo de caixa.',
      categoria: 'Fiscal',
      data: 'Agosto de 2026',
      tempoLeitura: '5 min de leitura',
      imagem: '/split_payment_reforma_tributaria.webp',
      conteudo: `## O que é o Split Payment

Hoje, quando você vende algo, recebe o valor total na conta e recolhe o imposto depois — até a data de vencimento, o dinheiro do tributo fica "de passagem" no seu caixa. Com o Split Payment, o próprio meio de pagamento (Pix, cartão, boleto) separa automaticamente a parcela de IBS e CBS no momento em que o pagamento é liquidado, e manda esse valor direto para o governo. A empresa recebe só o valor líquido, já sem o imposto.

## Como funciona por trás dos panos

Em junho de 2026, a Receita Federal e o Comitê Gestor do IBS publicaram o Manual de Integração e a documentação técnica (Swagger) da Plataforma Pública do Split Payment. Ela funciona como um "hub" de comunicação entre bancos/instituições de pagamento e os órgãos arrecadadores — é essa infraestrutura que vai fazer a separação automática do imposto em cada transação eletrônica.

## O que muda no seu fluxo de caixa

- Você deixa de contar com o dinheiro do imposto entre a venda e o vencimento — o chamado "float" tributário desaparece aos poucos, na medida em que o mecanismo entra em vigor.
- Por outro lado, ganha previsibilidade: nunca mais falta caixa para pagar um imposto que já foi gasto em outra coisa, porque ele já sai separado na hora.
- A conciliação bancária pode confundir no começo — o extrato vai mostrar um valor líquido menor do que o total da nota fiscal emitida, e isso precisa estar refletido no financeiro da empresa.

## Quem sente primeiro

A implementação acompanha o cronograma geral da reforma (veja nosso artigo sobre o cronograma completo) — o mecanismo vai entrando em operação aos poucos, junto com a virada de 2027, quando a CBS passa a valer com a alíquota cheia.

## Em resumo

O Split Payment não é uma cobrança nova — é uma forma diferente de recolher o imposto que você já paga, só que automatizada no momento do pagamento. O ponto de atenção real é o planejamento de capital de giro: quem hoje usa esse "fôlego" do imposto precisa se preparar para não contar mais com ele.`,
      fontes: [
        { label: 'Receita Federal e Comitê Gestor do IBS publicam documentação técnica da Plataforma Pública do Split Payment (Ministério da Fazenda)', url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/junho/receita-federal-e-comite-gestor-do-ibs-publicam-documentacao-tecnica-da-plataforma-publica-do-split-payment' },
        { label: 'Receita Federal e CGIBS publicam documentação técnica da Plataforma Pública do Split Payment (Receita Federal)', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/junho/receita-federal-e-cgibs-publicaram-hoje-a-documentacao-tecnica-da-plataforma-publica-do-split-payment' },
        { label: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
      ],
      aviso:
        'O Split Payment ainda está em fase de implementação técnica. Detalhes de prazo e funcionamento podem mudar conforme novos atos normativos forem publicados — acompanhe as atualizações com seu contador ou instituição financeira.',
      publicado: true,
    },
    {
      slug: 'o-que-nao-muda-reforma-tributaria',
      titulo: 'Reforma Tributária: o que NÃO muda (evite confusão)',
      resumo:
        'Com tanta notícia sobre IBS, CBS e Simples Híbrido, é fácil achar que "tudo" mudou. Veja quais impostos e obrigações continuam exatamente como sempre foram.',
      categoria: 'Fiscal',
      data: 'Agosto de 2026',
      tempoLeitura: '4 min de leitura',
      imagem: '/o_que_nao_muda.webp',
      conteudo: `## A reforma tem um escopo bem definido

A Emenda Constitucional nº 132/2023 mexe especificamente nos tributos sobre o consumo de bens e serviços — é aí que entram PIS, COFINS, IPI, ICMS e ISS, substituídos por IBS, CBS e Imposto Seletivo. Tributos que não incidem sobre consumo continuam funcionando exatamente como antes.

## O que continua igual

- Imposto de Renda (Pessoa Física e Jurídica) — inclusive o Lucro Presumido e o Lucro Real continuam existindo como opções de regime, sem relação direta com a reforma do consumo.
- INSS e demais contribuições sobre a folha de pagamento.
- IPVA (imposto sobre veículos).
- IPTU (imposto sobre imóveis urbanos).
- ITBI (transmissão de imóveis) e ITCMD (herança e doação).
- Simples Nacional continua existindo como regime — a novidade é só a opção de tratar IBS/CBS separadamente a partir de 2027 (o "Simples Híbrido"), não a extinção do regime.

## Por que essa confusão acontece

A reforma é tão comentada que vira sinônimo de "mudança tributária geral" na conversa do dia a dia — mas o texto da EC 132/2023 e da LC 214/2025 é específico sobre tributos de consumo. Discussões sobre outras reformas (como a do Imposto de Renda) tramitam em projetos completamente separados, com cronogramas próprios.

## Por que isso importa para o seu planejamento

Separar o que muda do que não muda ajuda a não se planejar para o problema errado. Se sua preocupação é IPVA da frota, IPTU do imóvel da empresa ou o Imposto de Renda anual, essas obrigações seguem no calendário e nas regras de sempre — o que exige atenção nova é especificamente a nota fiscal, o cálculo de IBS/CBS e (se aplicável) a decisão sobre o Simples Híbrido.`,
      fontes: [
        { label: 'Emenda Constitucional nº 132/2023 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm' },
        { label: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
      ],
      publicado: true,
    },
    {
      slug: 'credito-icms-acumulado-transicao',
      titulo: 'Crédito de ICMS acumulado: o que fazer com o saldo na virada para o IBS',
      resumo:
        'Quem compra e vende mercadorias costuma acumular saldo credor de ICMS. Entenda como esse crédito é aproveitado na transição para o novo sistema — e por que vale a pena começar a se organizar cedo.',
      categoria: 'Fiscal',
      data: 'Agosto de 2026',
      tempoLeitura: '5 min de leitura',
      imagem: '/credito_icms_acumulado.webp',
      conteudo: `## Por que isso importa para quem revende produtos

Empresas que compram e vendem mercadorias (comércio, distribuidoras, revendas de peças) frequentemente acumulam saldo credor de ICMS — situações em que o crédito das compras é maior que o débito das vendas em determinado período. Com a extinção do ICMS prevista para 2033, esse saldo precisa de uma regra de transição clara.

## Como funciona o aproveitamento

A Lei Complementar nº 214/2025 prevê que, ao final da transição (31 de dezembro de 2032), todo o saldo de ICMS ainda existente passa por um processo de homologação pelos entes federativos (estados). A partir de 1º de janeiro de 2033, as empresas podem protocolar o pedido de homologação desse saldo.

## O prazo é longo — e sem correção até 2033

O crédito acumulado homologado pode ser aproveitado em até 240 parcelas mensais (o equivalente a 20 anos), compensado com o IBS devido, ou ainda ressarcido. A partir de fevereiro de 2033, os valores passam a ser corrigidos pelo IPCA — mas até lá (ou seja, até 2032), não há correção monetária sobre o saldo parado.

## O que isso significa na prática

- Quanto maior o saldo credor acumulado hoje, maior o "capital parado" que só será recuperado ao longo de duas décadas — vale considerar isso no planejamento financeiro de médio prazo.
- A lei também restringe a transferência de créditos de IBS/CBS para terceiros sem personalidade jurídica própria — ou seja, não é possível simplesmente "vender" o crédito informalmente.
- Manter a escrituração de ICMS organizada agora facilita (e muito) o processo de homologação lá na frente — histórico bagunçado é a principal causa de saldo credor contestado ou glosado pelo fisco.

## O que fazer agora

Se sua empresa tem saldo credor relevante de ICMS, o momento de conversar com o contador é agora, não em 2032. Entender a origem desse saldo (crédito simples de operações normais vs. crédito acumulado por anomalias do sistema, como substituição tributária) já ajuda a antecipar como ele vai ser tratado na homologação.`,
      fontes: [
        { label: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
        { label: 'Emenda Constitucional nº 132/2023 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm' },
      ],
      aviso:
        'As regras de homologação e aproveitamento de créditos acumulados de ICMS ainda podem receber regulamentação complementar até 2033. Este conteúdo é informativo — consulte seu contador para avaliar a situação específica do saldo credor da sua empresa.',
      publicado: true,
    },
    {
      slug: 'nfe-mudancas-tecnicas-ibs-cbs',
      titulo: 'Nota Fiscal Eletrônica: o que muda no XML com a Reforma Tributária',
      resumo:
        'A NF-e ganhou campos novos e obrigatórios para IBS, CBS e Imposto Seletivo. Entenda o que mudou tecnicamente e o que isso significa para quem emite (e recebe) notas fiscais.',
      categoria: 'Fiscal',
      data: 'Agosto de 2026',
      tempoLeitura: '4 min de leitura',
      imagem: '/nfe-mudancas-tecnicas-xml.webp',
      conteudo: `## A Nota Técnica que mudou o layout da NF-e

A Nota Técnica 2025.002, publicada no Portal Nacional da NF-e, define as adequações necessárias nos layouts da NF-e (modelo 55) e da NFC-e (modelo 65) para incluir os novos tributos da Reforma Tributária. Na prática, isso significa novos grupos de campos dentro do XML da nota, além dos campos tradicionais de ICMS, IPI e PIS/COFINS.

## Os dois campos mais importantes

- **CST-IBS/CBS** (Código de Situação Tributária): identifica a situação tributária da operação em relação ao novo sistema — equivalente ao que o CST/CSOSN já faz hoje para ICMS.
- **cClassTrib** (Código de Classificação Tributária): detalha o enquadramento da operação dentro das regras de IBS/CBS — imunidades, reduções de alíquota, regimes específicos, entre outros.

## Prazos de adaptação

A adaptação dos sistemas emissores passou a ser obrigatória a partir de 3 de agosto de 2026 para empresas do Lucro Presumido e Lucro Real, e até 4 de janeiro de 2027 para empresas do Simples Nacional e MEI — depois desses prazos, notas emitidas sem os campos corretos correm risco de rejeição pela SEFAZ.

## E o DANFE (o PDF da nota)?

Até a publicação deste artigo, a Receita Federal ainda não definiu um layout oficial para exibir os valores de IBS, CBS e Imposto Seletivo no DANFE (o documento impresso/PDF da nota) — os documentos auxiliares seguem em estudo. Por enquanto, essas informações ficam visíveis apenas no XML da nota, não no PDF.

## O que o KomTec já faz com isso

Quando você importa o XML de uma compra cujo fornecedor já emite com esses campos preenchidos, o sistema captura os valores de IBS, CBS e Imposto Seletivo automaticamente — sem precisar digitar nada manualmente. Assim que a Receita definir o layout oficial do DANFE com esses campos, o sistema será atualizado para exibi-los também no PDF.`,
      fontes: [
        { label: 'Nota Técnica 2025.002 (Portal Nacional da NF-e)', url: 'https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=04BIflQt1aY%3D' },
        { label: 'Reforma Tributária do Consumo — Adequações NF-e/NFC-e (Portal Nacional da NF-e)', url: 'https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=AklZnck3o6I%3D' },
        { label: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
      ],
      publicado: true,
    },
    {
      slug: 'imposto-seletivo-o-que-e',
      titulo: 'Imposto Seletivo: o "imposto do pecado" da Reforma Tributária',
      resumo:
        'Além do IBS e da CBS, a reforma criou um terceiro tributo — que incide só sobre produtos considerados prejudiciais à saúde ou ao meio ambiente. Veja o que é e quem é afetado.',
      categoria: 'Fiscal',
      data: 'Agosto de 2026',
      tempoLeitura: '3 min de leitura',
      imagem: '/imposto_seletivo.webp',
      conteudo: `## O que é o Imposto Seletivo

O Imposto Seletivo (IS) é o terceiro tributo criado pela Reforma Tributária, ao lado do IBS e da CBS. Diferente dos outros dois — que incidem de forma ampla sobre o consumo — o IS incide só sobre bens e serviços considerados prejudiciais à saúde ou ao meio ambiente, o que rendeu o apelido popular de "imposto do pecado".

## Quando começa

O Imposto Seletivo entra em vigor em 1º de janeiro de 2027, junto com a virada em que a CBS passa a valer com a alíquota cheia.

## O que ele substitui

Na prática, o Imposto Seletivo assume boa parte do papel hoje ocupado pelo IPI, que vai sendo zerado para a maioria dos produtos a partir de 2027 (com exceção dos itens fabricados na Zona Franca de Manaus, que mantêm o incentivo até 2033).

## Quais produtos entram na lista

Os exemplos mais citados são cigarros e bebidas alcoólicas — mas a regulamentação também prevê a possibilidade de alcançar bens que causem dano ao meio ambiente. As alíquotas específicas ainda estão em regulamentação: as estimativas de referência apontam uma alíquota padrão entre 25% e 26,5% quando o sistema estiver totalmente implementado (2033), mas a legislação complementar segue em debate.

## Isso afeta a sua empresa?

Para a maioria dos negócios de comércio, distribuição de peças e prestação de serviços, o Imposto Seletivo não se aplica diretamente — ele é seletivo por natureza, atingindo uma lista específica de produtos. Vale ficar de olho apenas se sua empresa comercializa algum dos itens que entrarem na lista final regulamentada.`,
      fontes: [
        { label: 'Emenda Constitucional nº 132/2023 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm' },
        { label: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
      ],
      aviso:
        'As alíquotas e a lista definitiva de produtos sujeitos ao Imposto Seletivo ainda dependem de regulamentação complementar e podem mudar. Consulte seu contador se sua empresa comercializa itens que possam ser enquadrados.',
      publicado: true,
    },
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
  descricao: 'Montamos o plano ideal para o seu negócio — fale com nossa equipe ou peça uma demonstração gratuita e sem compromisso.',
  btn1Label: 'Falar com um especialista',
  btn2Label: 'Solicitar demo gratuita',
};
