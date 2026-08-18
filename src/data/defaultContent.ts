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
