// Gerado a partir de komtec-frontend/src/data/ajuda.json em 2026-09-11.
// Ao atualizar a Central de Ajuda do sistema, sincronizar aqui também (ver CLAUDE.md).

export interface AjudaArtigo {
  id: string;
  categoria: string;
  titulo: string;
  tags: string[];
  passos: string[];
}

export interface AjudaCategoria {
  id: string;
  label: string;
  icone: string;
  descricao: string;
}

export interface AjudaContent {
  categorias: AjudaCategoria[];
  artigos: AjudaArtigo[];
}

export const AJUDA_CONTENT: AjudaContent = {
  "categorias": [
    {
      "id": "configuracoes",
      "label": "Configurações",
      "icone": "⚙️",
      "descricao": "Usuários, permissões, dados da empresa e segurança da conta."
    },
    {
      "id": "produtos",
      "label": "Produtos e Estoque",
      "icone": "📦",
      "descricao": "Cadastro de produtos, categorias, preços e controle de estoque."
    },
    {
      "id": "clientes",
      "label": "Clientes",
      "icone": "👥",
      "descricao": "Cadastro, histórico e crédito dos seus clientes."
    },
    {
      "id": "fornecedores",
      "label": "Fornecedores",
      "icone": "🏭",
      "descricao": "Cadastro de fornecedores e transportadoras."
    },
    {
      "id": "vendas",
      "label": "Orçamentos e Vendas",
      "icone": "💼",
      "descricao": "Orçamentos, vendas e tudo que envolve fechar negócio com o cliente."
    },
    {
      "id": "compras",
      "label": "Compras",
      "icone": "🛒",
      "descricao": "Registro de compras e importação de notas de fornecedor."
    },
    {
      "id": "financeiro",
      "label": "Financeiro",
      "icone": "💰",
      "descricao": "Contas a pagar, a receber, boletos e cobrança."
    },
    {
      "id": "nfe",
      "label": "Nota Fiscal (NF-e)",
      "icone": "📄",
      "descricao": "Emissão, cancelamento e consulta de notas fiscais eletrônicas."
    },
    {
      "id": "nfse",
      "label": "NFS-e (Nota de Serviço)",
      "icone": "🧾",
      "descricao": "Emissão de nota fiscal de serviço (NFS-e) direto da Ordem de Serviço."
    },
    {
      "id": "catalogos",
      "label": "Catálogos de Peças",
      "icone": "📚",
      "descricao": "Como usar e localizar peças no catálogo."
    },
    {
      "id": "importacao",
      "label": "Importação de Dados",
      "icone": "📥",
      "descricao": "Importação de dados de outros sistemas, planilhas e cotações."
    },
    {
      "id": "relatorios",
      "label": "Relatórios",
      "icone": "📊",
      "descricao": "Indicadores, DRE, curva ABC e outros relatórios gerenciais."
    },
    {
      "id": "servicos",
      "label": "Serviços e Manutenção",
      "icone": "🔧",
      "descricao": "Configuração de técnicos, veículos e o módulo de serviços."
    },
    {
      "id": "ordens-servico",
      "label": "Ordens de Serviço",
      "icone": "📋",
      "descricao": "Abertura, faturamento e acompanhamento de Ordens de Serviço."
    },
    {
      "id": "equipamentos",
      "label": "Gestão de Equipamentos",
      "icone": "🚜",
      "descricao": "Controle de máquinas paradas e manutenção."
    },
    {
      "id": "pneus",
      "label": "Controle de Pneus",
      "icone": "🔵",
      "descricao": "Cadastro, instalação e histórico de pneus."
    },
    {
      "id": "marketplace",
      "label": "Marketplaces",
      "icone": "🛍️",
      "descricao": "Integração com Shopee, Mercado Livre e Amazon."
    },
    {
      "id": "almoxarifado",
      "label": "Almoxarifado",
      "icone": "🧰",
      "descricao": "Painel do almoxarifado e solicitação de compra."
    },
    {
      "id": "patrimonio",
      "label": "Patrimônio",
      "icone": "🏷️",
      "descricao": "Cadastro e controle de bens patrimoniais."
    }
  ],
  "artigos": [
    {
      "id": "configuracoes-permissoes",
      "categoria": "configuracoes",
      "titulo": "Como definir o que cada tipo de usuário pode fazer no sistema?",
      "tags": [
        "permissão",
        "permissões",
        "perfil",
        "acesso",
        "ver criar editar excluir",
        "restringir tela",
        "quem pode ver",
        "vendedor",
        "financeiro",
        "estoque"
      ],
      "passos": [
        "Acesse **Configurações → Permissões** (só visível para Administrador da Empresa e Administrador do Sistema).",
        "Escolha o **perfil** que você quer ajustar (ex: Vendedor, Financeiro, Estoque) na lista de botões no topo.",
        "Clique em **Editar** para liberar os campos, e marque ou desmarque **Ver**, **Criar**, **Editar** e **Excluir** para cada tela do sistema.",
        "Clique em **Salvar permissões** para aplicar, ou em **Cancelar** para desfazer as mudanças feitas nessa edição.",
        "⚠️ Administrador da Empresa e Administrador do Sistema sempre têm acesso total — essas permissões não afetam esses dois perfis.",
        "✅ A mudança vale imediatamente: se você tirar o \"Ver\" de Financeiro para o Vendedor, o menu Financeiro some do sistema dele na próxima vez que ele carregar a página."
      ]
    },
    {
      "id": "configuracoes-empresas-grupo",
      "categoria": "configuracoes",
      "titulo": "Como acessar mais de uma empresa com o mesmo login?",
      "tags": [
        "empresas do grupo",
        "grupo econômico",
        "trocar de empresa",
        "múltiplas empresas",
        "vincular empresa",
        "multi-empresa",
        "acesso compartilhado"
      ],
      "passos": [
        "Clique no seu nome no canto superior direito e escolha **Empresas do Grupo** (visível para o Administrador da Empresa).",
        "Clique em **Vincular empresa** e informe o **e-mail do administrador** da outra empresa que você quer acessar.",
        "💡 O administrador da outra empresa recebe um e-mail e precisa confirmar o vínculo — sem essa confirmação, nenhum acesso é liberado.",
        "✅ Depois de confirmado, o nome da empresa no topo do sistema vira um seletor: clique nele para trocar entre as empresas vinculadas, sem precisar sair e fazer login de novo.",
        "⚠️ Para desfazer o acesso a qualquer momento, volte em **Empresas do Grupo** e clique em **Revogar** no vínculo desejado."
      ]
    },
    {
      "id": "vendas-dashboard-vendedor",
      "categoria": "vendas",
      "titulo": "Como funciona o painel do Vendedor e o comparativo entre vendedores?",
      "tags": [
        "dashboard vendedor",
        "painel do vendedor",
        "comparativo de vendedores",
        "ranking de vendas",
        "carteira de clientes",
        "meu faturamento"
      ],
      "passos": [
        "Quem tem o perfil **Vendedor** vê, ao entrar no sistema, um painel próprio — com as vendas e orçamentos apenas dele, nunca o faturamento total da empresa.",
        "O painel mostra vendas de hoje e do mês, quantidade de clientes na carteira, situação dos orçamentos (abertos, aprovados, perdidos) e o faturamento próprio dos últimos 12 meses em gráfico.",
        "💡 Administrador, Gerente e Financeiro podem comparar todos os vendedores: no Dashboard geral, use o botão de comparativo para ver vendas, orçamentos e carteira lado a lado, por mês.",
        "✅ \"Vendas fora da carteira\" no comparativo mostra quando um vendedor vendeu para um cliente que está na carteira de outro vendedor."
      ]
    },
    {
      "id": "clientes-historico",
      "categoria": "clientes",
      "titulo": "Como ver tudo que um cliente já comprou ou cotou?",
      "tags": [
        "histórico do cliente",
        "compras anteriores",
        "itens comprados",
        "orçamentos do cliente",
        "financeiro do cliente",
        "ficha do cliente"
      ],
      "passos": [
        "Na ficha do cliente (ou a partir de um orçamento, venda ou NF-e dele), clique no botão **Histórico**.",
        "A aba **Itens** lista tudo que o cliente já comprou ou cotou, com data, referência (venda ou orçamento) e valor — clique numa linha para abrir o documento de origem.",
        "A aba **Orçamentos** mostra todos os orçamentos do cliente, com status e o número da NF-e quando já foi emitida a partir de uma venda gerada.",
        "A aba **Financeiro** mostra os títulos (a receber/a pagar) do cliente — só aparece para quem tem permissão de ver o Financeiro (ver **Configurações → Permissões**).",
        "💡 Use o filtro de **Período** no topo para restringir o histórico a um mês/ano específico; o padrão é mostrar tudo."
      ]
    },
    {
      "id": "clientes-endereco-apelido-cnae",
      "categoria": "clientes",
      "titulo": "Como identificar endereços e o CNAE de uma empresa cliente?",
      "tags": [
        "apelido do endereço",
        "múltiplos endereços",
        "cnae",
        "cnae principal",
        "cnae secundário",
        "atividade econômica",
        "endereço de entrega"
      ],
      "passos": [
        "No cadastro do cliente, ao adicionar ou editar um endereço, preencha o campo **Apelido (opcional)** — por exemplo \"Filial Norte\" ou \"Clínica Esperança\" — para diferenciar endereços quando o cliente tem mais de um.",
        "💡 O apelido aparece no lugar do logradouro na lista de endereços, facilitando encontrar o endereço certo na hora de gerar uma venda ou orçamento.",
        "Para cliente Pessoa Jurídica, os campos **CNAE Principal** e **CNAEs Secundários** são preenchidos automaticamente ao buscar os dados pelo CNPJ.",
        "✅ Ambos os campos de CNAE podem ser editados livremente depois de preenchidos — úteis quando a atividade cadastrada na junta comercial está desatualizada."
      ]
    },
    {
      "id": "compras-reforma-tributaria-ibs-cbs",
      "categoria": "compras",
      "titulo": "Como funcionam os campos de IBS/CBS (Reforma Tributária) nas compras?",
      "tags": [
        "reforma tributária",
        "ibs",
        "cbs",
        "imposto seletivo",
        "reprocessar",
        "cst ibs cbs"
      ],
      "passos": [
        "Ao importar o XML de uma compra cujo fornecedor já emite na Reforma Tributária, os campos de **IBS**, **CBS** e **Imposto Seletivo** são preenchidos automaticamente na compra e nos itens.",
        "💡 Para uma compra antiga (importada antes desses campos existirem), abra a compra e clique no botão de reprocessar ao lado do XML — o sistema relê o XML já salvo e preenche os valores, sem mudar estoque ou financeiro.",
        "✅ Para atualizar várias compras de uma vez, use o botão **Reforma Tributária** na lista de Compras — ele reprocessa todas as compras que têm XML salvo mas ainda não têm esses campos preenchidos."
      ]
    },
    {
      "id": "contador-envio-automatico",
      "categoria": "nfe",
      "titulo": "Como enviar as notas fiscais para o contador automaticamente todo mês?",
      "tags": [
        "contador",
        "contabilidade",
        "enviar notas para contador",
        "e-mail mensal",
        "xml",
        "danfe",
        "danfse",
        "nfe",
        "nfse"
      ],
      "passos": [
        "Acesse **Fiscal → Contador** no menu (dentro de Vendas ou Serviços, em Configurações).",
        "Preencha o **nome** e o **e-mail** do seu contador ou escritório de contabilidade.",
        "Escolha o **dia do mês** em que o envio deve acontecer (por exemplo, dia 5).",
        "Ative a chave **Envio mensal ativo** e clique em **Salvar Configuração**.",
        "✅ A partir daí, todo dia configurado o sistema busca sozinho todas as NF-e e NFS-e autorizadas no mês anterior, monta um arquivo .zip com o PDF (DANFE/DANFSe) de cada uma, e envia por e-mail para o contador.",
        "💡 Use o botão **Enviar agora (teste)** para disparar o envio na hora, sem esperar o dia configurado — útil para conferir se o e-mail está chegando certinho antes de deixar no automático.",
        "⚠️ Se nenhuma nota fiscal foi emitida no mês, o e-mail ainda é enviado, avisando que não houve notas no período."
      ]
    },
    {
      "id": "config-empresa",
      "categoria": "configuracoes",
      "titulo": "Como configurar os dados da minha empresa?",
      "tags": [
        "empresa",
        "cnpj",
        "endereço",
        "configuração",
        "logo"
      ],
      "passos": [
        "No menu superior direito, clique no seu nome e selecione **Minha Empresa**.",
        "Preencha os dados da empresa: razão social, nome fantasia, CNPJ, endereço completo e e-mail.",
        "Configure o **Regime Tributário** (Simples Nacional, MEI, Lucro Presumido ou Lucro Real).",
        "Se for emitir Nota Fiscal, preencha também a seção **Configurações Fiscais**: ambiente (use Homologação para testes), série e número inicial da NF-e.",
        "💡 Preencha a **Política de troca/devolução por defeito** (ex: \"Peças com defeito: até 90 dias para troca\") para que ela apareça automaticamente nas Informações Complementares de toda NF-e emitida.",
        "Clique em **Salvar** para confirmar as alterações.",
        "⚠️ Sem os dados da empresa corretamente preenchidos, não é possível emitir notas fiscais."
      ]
    },
    {
      "id": "config-certificado",
      "categoria": "configuracoes",
      "titulo": "Como instalar o certificado digital para emitir notas?",
      "tags": [
        "certificado",
        "digital",
        "nfe",
        "a1",
        "pfx",
        "senha"
      ],
      "passos": [
        "Acesse **Minha Empresa** pelo menu superior direito.",
        "Role até a seção **Certificado Digital**.",
        "Clique em **Enviar Certificado** e selecione o arquivo do certificado (extensão .pfx ou .p12).",
        "Informe a **senha** do certificado no campo correspondente.",
        "Clique em **Salvar**. O sistema valida o certificado e exibe a data de validade.",
        "✅ Com o certificado instalado, você já pode transmitir notas fiscais ao SEFAZ.",
        "⚠️ Guarde a senha do certificado em local seguro — ela não pode ser recuperada pelo sistema."
      ]
    },
    {
      "id": "config-usuario",
      "categoria": "configuracoes",
      "titulo": "Como criar um novo usuário no sistema?",
      "tags": [
        "usuário",
        "acesso",
        "senha",
        "perfil",
        "funcionário"
      ],
      "passos": [
        "Acesse **Configurações → Usuários** pelo menu superior direito.",
        "Clique em **Novo Usuário**.",
        "Preencha o nome completo, e-mail e escolha um perfil de acesso:",
        "  - **Admin da Empresa**: acesso total a todas as funções.",
        "  - **Gerente**: acesso a vendas, compras e relatórios, sem configurações.",
        "  - **Financeiro**: acesso ao módulo financeiro e notas fiscais.",
        "  - **Fiscal**: acesso apenas ao módulo de notas fiscais.",
        "  - **Vendedor**: acesso a orçamentos e vendas.",
        "Defina uma senha provisória para o usuário.",
        "Clique em **Salvar**. O usuário já pode acessar o sistema com as credenciais criadas.",
        "O usuário pode alterar a própria senha pelo menu **Alterar Senha** após o primeiro acesso."
      ]
    },
    {
      "id": "config-senha",
      "categoria": "configuracoes",
      "titulo": "Como alterar minha senha?",
      "tags": [
        "senha",
        "alterar",
        "trocar",
        "segurança"
      ],
      "passos": [
        "Clique no seu nome no canto superior direito da tela.",
        "Selecione **Alterar Senha**.",
        "Informe sua senha atual e depois a nova senha (duas vezes para confirmar).",
        "Clique em **Salvar**. Sua nova senha entra em vigor imediatamente."
      ]
    },
    {
      "id": "config-meus-dispositivos",
      "categoria": "configuracoes",
      "titulo": "Como vejo e desconecto os dispositivos conectados na minha conta?",
      "tags": [
        "dispositivos",
        "sessão",
        "sessões",
        "login",
        "celular perdido",
        "roubado",
        "navegador",
        "desconectar",
        "logout",
        "segurança"
      ],
      "passos": [
        "Clique no seu nome no canto superior direito da tela e selecione **Alterar Senha** (a tela também mostra seus dados de segurança).",
        "Na seção **Dispositivos conectados**, você vê todos os navegadores/aparelhos com sessão ativa na sua conta, com o último uso de cada um.",
        "💡 Cada navegador conta como um dispositivo separado, mesmo no mesmo computador — Chrome e Brave, por exemplo, aparecem como duas sessões diferentes.",
        "Para encerrar o acesso de um dispositivo, clique no ícone de lixeira ao lado dele e confirme.",
        "⚠️ Se o dispositivo que você perdeu ou teve roubado não aparecer na lista (por já ter passado do limite de 30 dias), troque sua senha imediatamente — isso encerra todas as sessões de uma vez."
      ]
    },
    {
      "id": "config-2fa",
      "categoria": "configuracoes",
      "titulo": "Como funciona a verificação em duas etapas (2FA) por e-mail?",
      "tags": [
        "2fa",
        "dois fatores",
        "e-mail",
        "email",
        "verificação",
        "segurança",
        "otp",
        "código",
        "autenticação"
      ],
      "passos": [
        "💡 A verificação em duas etapas é automática e obrigatória em todo login: após digitar a senha correta, o sistema envia um código de 6 dígitos para o seu e-mail cadastrado.",
        "Não é preciso ativar nada — não existe opção de desligar o 2FA, ele protege sua conta mesmo que a senha seja descoberta.",
        "Na tela de login, confira sua caixa de entrada, insira o código recebido no campo indicado e clique em **Verificar**. O código expira em 5 minutos.",
        "⚠️ Se o código não chegar, aguarde 60 segundos e clique em **Reenviar código**. Verifique também a caixa de spam e se o e-mail cadastrado está correto no seu perfil.",
        "⚠️ Após 3 tentativas com código incorreto, o acesso fica bloqueado por 15 minutos por segurança."
      ]
    },
    {
      "id": "produtos-novo",
      "categoria": "produtos",
      "titulo": "Como cadastrar um novo produto?",
      "tags": [
        "produto",
        "cadastrar",
        "código",
        "preço",
        "estoque",
        "ncm"
      ],
      "passos": [
        "No menu lateral, clique em **Produtos** e depois em **Novo Produto**.",
        "Preencha o **Nome** do produto e o **Código Interno** (código usado pela empresa).",
        "Selecione a **Categoria** do produto. Se não existir, cadastre a categoria antes (veja o artigo *Como criar uma categoria*).",
        "Informe o **Preço de Custo** e o **Preço de Venda**.",
        "Informe a **Quantidade Disponível** em estoque.",
        "Preencha o **NCM** (código fiscal de 8 dígitos). Esse campo é obrigatório para emitir Nota Fiscal.",
        "Se o produto tiver código de barras, informe no campo **EAN/Código de Barras**.",
        "Clique em **Salvar**. O produto já fica disponível para uso em orçamentos e vendas."
      ]
    },
    {
      "id": "produtos-ficha-tecnica",
      "categoria": "produtos",
      "titulo": "Como cadastrar a ficha técnica de um produto fabricado?",
      "tags": [
        "ficha tecnica",
        "bom",
        "insumo",
        "materia prima",
        "fabricacao",
        "producao",
        "perda de material",
        "mao de obra",
        "custo de fabricacao",
        "capota",
        "manufaturado"
      ],
      "passos": [
        "No cadastro do produto, escolha o **Formato** \"Ficha Técnica (Manufaturado)\" — use isso no produto acabado que sua empresa fabrica (ex: a capota pronta), não nos materiais que ela compra.",
        "Informe a **Perda de material (%)** na seção Ficha Técnica — o quanto costuma se perder de material no processo de fabricação (recorte, refugo). Ex: 15%.",
        "💡 Cadastre também os materiais usados na fabricação (resina, fibra de vidro, catalisador, etc.) como produtos comuns, com formato **Simples**, cada um com seu **Preço de Custo** preenchido.",
        "Salve o produto manufaturado. Depois de salvo, role até a seção **Insumos (materiais)** e clique em **Adicionar insumo** para informar cada material e a quantidade usada por unidade fabricada.",
        "Na seção **Mão de obra**, clique em **Adicionar mão de obra** e escolha o tipo de funcionário envolvido (ex: Pintor, Laminador) e quantas horas ele gasta para fabricar uma unidade. Se o tipo ainda não existir, clique em **+ Novo tipo** para cadastrar o cargo e o valor por hora.",
        "✅ Pronto! O sistema calcula sozinho o custo e o valor de venda do produto acabado, somando o custo dos insumos (já considerando a perda) com o custo da mão de obra.",
        "O card **Capacidade de produção e custo** mostra quantas unidades dá para fabricar agora com o estoque atual de cada insumo, e qual insumo está limitando a produção.",
        "⚠️ Se o preço de algum insumo mudar (por exemplo, depois de uma nova compra), clique no ícone de atualizar no card de capacidade para recalcular o custo do produto acabado."
      ]
    },
    {
      "id": "produtos-servico",
      "categoria": "produtos",
      "titulo": "Como cadastrar um serviço no catálogo?",
      "tags": [
        "servico",
        "hora",
        "km",
        "kilometragem",
        "limpeza",
        "instalacao",
        "manutencao",
        "orçamento servico"
      ],
      "passos": [
        "Acesse **Produtos** no menu lateral.",
        "Clique em **+ Novo Produto**.",
        "No topo do formulário, clique no botão **🔧 Serviço** para mudar o tipo de cadastro.",
        "Preencha o **Nome do serviço** (ex: Hora trabalhada, Limpeza de bico injetor, Km rodado).",
        "Selecione a **Unidade** adequada: **HR** (hora), **KM** (quilômetro), **DIA** (diária), **SV** (serviço avulso).",
        "Informe o **Valor de custo interno** (opcional) e a **Margem de lucro** para calcular o valor de venda automaticamente.",
        "💡 Os campos de estoque, NCM, CEST e dimensões são ocultados automaticamente para serviços — não é necessário preencher.",
        "Clique em **Salvar**. O serviço aparecerá no catálogo com o badge **SERVIÇO** e poderá ser adicionado a orçamentos normalmente.",
        "✅ Na listagem de produtos, use o filtro **🔧 Serviços** para visualizar apenas os serviços cadastrados."
      ]
    },
    {
      "id": "produtos-categoria",
      "categoria": "produtos",
      "titulo": "Como criar uma categoria de produto?",
      "tags": [
        "categoria",
        "grupo",
        "organizar",
        "produto"
      ],
      "passos": [
        "No menu lateral, clique em **Categorias**.",
        "Clique em **Nova Categoria**.",
        "Informe o **Nome** da categoria (ex: Filtros, Correias, Peças de Motor).",
        "Clique em **Salvar**.",
        "✅ A categoria já estará disponível ao cadastrar ou editar um produto."
      ]
    },
    {
      "id": "produtos-preco",
      "categoria": "produtos",
      "titulo": "Como atualizar o preço de um produto?",
      "tags": [
        "preço",
        "atualizar",
        "custo",
        "venda",
        "editar"
      ],
      "passos": [
        "No menu lateral, clique em **Produtos**.",
        "Encontre o produto desejado (use a barra de pesquisa se necessário).",
        "Clique no produto e depois em **Editar** (ícone de lápis).",
        "Atualize o **Preço de Custo** e/ou o **Preço de Venda** nos campos correspondentes.",
        "Clique em **Salvar** para confirmar."
      ]
    },
    {
      "id": "produtos-estoque",
      "categoria": "produtos",
      "titulo": "Como ajustar a quantidade em estoque?",
      "tags": [
        "estoque",
        "quantidade",
        "ajuste",
        "inventário",
        "saldo"
      ],
      "passos": [
        "Para ajuste pontual de um produto: acesse **Produtos**, encontre o produto, clique em **Editar** e altere o campo **Quantidade Disponível**, depois salve.",
        "Para ajuste em lote de vários produtos: acesse **Estoque → Inventário** no menu lateral.",
        "Na tela de inventário, localize os produtos e informe a quantidade real contada.",
        "Confirme o ajuste. O sistema registra a diferença como entrada ou saída de estoque.",
        "⚠️ O estoque é descontado automaticamente ao confirmar uma venda e reposto automaticamente ao registrar uma compra ou devolução."
      ]
    },
    {
      "id": "clientes-novo",
      "categoria": "clientes",
      "titulo": "Como cadastrar um novo cliente?",
      "tags": [
        "cliente",
        "cadastrar",
        "cpf",
        "cnpj",
        "pessoa física",
        "pessoa jurídica",
        "endereço"
      ],
      "passos": [
        "No menu lateral, clique em **Clientes** e depois em **Novo Cliente**.",
        "Selecione o tipo: **Pessoa Física** (CPF) ou **Pessoa Jurídica** (CNPJ).",
        "Preencha o nome, CPF ou CNPJ e os dados de contato (telefone, e-mail).",
        "Preencha o **Endereço** completo — necessário para emitir Nota Fiscal.",
        "Informe a **Inscrição Estadual** se o cliente for empresa contribuinte do ICMS.",
        "Clique em **Salvar**.",
        "✅ O cliente já estará disponível para ser selecionado em orçamentos e vendas."
      ]
    },
    {
      "id": "clientes-buscar",
      "categoria": "clientes",
      "titulo": "Como encontrar um cliente já cadastrado?",
      "tags": [
        "cliente",
        "buscar",
        "pesquisar",
        "procurar",
        "encontrar"
      ],
      "passos": [
        "No menu lateral, clique em **Clientes**.",
        "Use a barra de pesquisa no topo da lista para buscar por nome, CPF, CNPJ ou telefone.",
        "Clique no cliente desejado para ver os detalhes ou editar os dados."
      ]
    },
    {
      "id": "clientes-conceder-credito",
      "categoria": "clientes",
      "titulo": "Como dar um crédito ao cliente por devolução ou garantia?",
      "tags": [
        "crédito",
        "saldo de crédito",
        "vale-compra",
        "devolução",
        "garantia",
        "cortesia",
        "estorno",
        "abatimento"
      ],
      "passos": [
        "Abra o **Histórico do Cliente** e vá na aba **Crédito**.",
        "Na seção **Saldo de crédito (vale-compra)**, preencha o **Valor**, escolha o **Motivo** (devolução de mercadoria, garantia, cortesia comercial ou outro) e, se quiser, uma justificativa.",
        "Clique em **Conceder**. ✅ O crédito já fica disponível na hora, sem precisar de aprovação.",
        "💡 Esse saldo é diferente do **limite de crédito** (compra a prazo/fiado) — é um valor a favor do cliente, tipo um vale-compra.",
        "Para usar o crédito, gere uma venda normalmente a partir de um orçamento: na tela de **Gerar Venda**, se o cliente tiver saldo, aparece o campo **Crédito do cliente** na seção de valores — informe quanto quer abater e o total a receber é reduzido automaticamente.",
        "⚠️ Se a venda for cancelada/revertida para orçamento depois de usar o crédito, o valor volta automaticamente para o saldo do cliente."
      ]
    },
    {
      "id": "fornecedores-novo",
      "categoria": "fornecedores",
      "titulo": "Como cadastrar um fornecedor?",
      "tags": [
        "fornecedor",
        "cadastrar",
        "cnpj",
        "empresa"
      ],
      "passos": [
        "No menu lateral, clique em **Fornecedores** e depois em **Novo Fornecedor**.",
        "Preencha o nome, CNPJ e dados de contato.",
        "Informe o endereço completo.",
        "Clique em **Salvar**.",
        "✅ O fornecedor ficará disponível para vincular a compras e importações de lista de preços."
      ]
    },
    {
      "id": "fornecedores-lista-precos",
      "categoria": "fornecedores",
      "titulo": "Como importar a lista de preços de um fornecedor?",
      "tags": [
        "importar",
        "fornecedor",
        "lista",
        "preços",
        "planilha",
        "excel"
      ],
      "passos": [
        "No menu lateral, acesse **Ferramentas → Importar Lista do Fornecedor** (ou **Importar Cotação**).",
        "Selecione o fornecedor na lista.",
        "Faça o upload do arquivo enviado pelo fornecedor (Excel ou PDF de alguns fornecedores suportados).",
        "O sistema lê os itens e apresenta uma pré-visualização com os produtos identificados.",
        "Revise os itens e confirme a importação.",
        "✅ Os preços e produtos são atualizados automaticamente no cadastro."
      ]
    },
    {
      "id": "orcamentos-novo",
      "categoria": "vendas",
      "titulo": "Como criar um novo orçamento?",
      "tags": [
        "orçamento",
        "criar",
        "novo",
        "cliente",
        "itens",
        "produtos"
      ],
      "passos": [
        "No menu lateral, clique em **Vendas** e depois em **Novo Orçamento**.",
        "Selecione o **Cliente**. Se ainda não estiver cadastrado, cadastre-o antes.",
        "Clique em **Adicionar Item** para incluir os produtos do orçamento.",
        "Para cada item: selecione o produto, informe a quantidade e confirme o preço.",
        "Aplique **desconto** se necessário (por item ou no total).",
        "Clique em **Salvar Orçamento**.",
        "Para enviar ao cliente: clique em **Enviar por E-mail** ou **Imprimir** (abre um PDF para impressão)."
      ]
    },
    {
      "id": "orcamentos-venda",
      "categoria": "vendas",
      "titulo": "Como transformar um orçamento em venda?",
      "tags": [
        "orçamento",
        "venda",
        "converter",
        "gerar",
        "confirmar"
      ],
      "passos": [
        "Abra o orçamento desejado na lista de **Vendas**.",
        "Clique em **Gerar Venda** (botão de ações).",
        "Confirme a forma de pagamento, condição (à vista ou a prazo) e a data de vencimento se for parcelado.",
        "Clique em **Confirmar Venda**.",
        "✅ O orçamento vira uma venda, o estoque é descontado automaticamente e o financeiro é gerado.",
        "A partir daí você pode emitir a **Nota Fiscal** diretamente pela venda."
      ]
    },
    {
      "id": "vendas-tipo-operacao",
      "categoria": "vendas",
      "titulo": "Como registrar comodato, consignação, demonstração ou bonificação?",
      "tags": [
        "comodato",
        "consignação",
        "demonstração",
        "bonificação",
        "remessa",
        "devolução",
        "empréstimo",
        "brinde",
        "doação",
        "tipo de operação",
        "cfop"
      ],
      "passos": [
        "Ao gerar a venda (ou criar uma venda avulsa), abra a seção **Informações fiscais** e escolha o **Tipo de Operação**.",
        "Use **Comodato** para empréstimo de equipamento, **Consignação** para mercadoria que fica com o cliente sem ser vendida ainda, **Demonstração** para levar o produto para o cliente testar, **Bonificação** para brinde/doação sem cobrança, ou **Simples Remessa** para outras saídas sem venda.",
        "Quando o item retornar, registre uma nova venda escolhendo o tipo **Retorno de Comodato**, **Devolução de Consignação**, **Retorno de Demonstração** ou **Devolução de Simples Remessa**, conforme o caso.",
        "⚠️ Essas operações não geram título financeiro (conta a receber) — só a **Venda normal** gera cobrança.",
        "💡 O CFOP de cada tipo de operação já vem preenchido automaticamente na Nota Fiscal. Para conferir ou ajustar os códigos, acesse **Fiscal → Regras de CFOP por Operação**.",
        "✅ O estoque é decrementado normalmente em todos os tipos — só o financeiro muda."
      ]
    },
    {
      "id": "contratos-cliente-novo",
      "categoria": "vendas",
      "titulo": "Como criar um contrato recorrente com um cliente?",
      "tags": [
        "contrato",
        "PMP",
        "plano de manutenção preventiva",
        "peças",
        "recorrente",
        "mensalidade",
        "cobrança automática",
        "equipamento"
      ],
      "passos": [
        "No menu lateral, clique em **Vendas** e depois em **Contratos**.",
        "Clique em **Novo Contrato**.",
        "Busque e selecione o **Cliente**.",
        "Escolha o **Tipo de Contrato**: Serviço (PMP de equipamento), Fornecimento de Peças, ou Peças + Serviço.",
        "Defina a **Periodicidade** (mensal, bimestral, trimestral, semestral ou anual) e o **Valor Recorrente**.",
        "Informe a **Data de Início** e, se o contrato tiver prazo definido, a **Data de Fim**.",
        "Salve o contrato.",
        "Se o contrato envolve manutenção de equipamento, adicione os **Equipamentos Cobertos** na aba correspondente.",
        "Se o contrato envolve peças, cadastre os **Itens Inclusos** (com cota por ciclo e/ou desconto) na aba correspondente.",
        "💡 A partir daqui, o sistema gera automaticamente a cobrança (título financeiro) de cada ciclo na data de vencimento — não é preciso lançar manualmente todo mês.",
        "⚠️ Se o cliente não pagar, o título vencido segue o fluxo normal do Financeiro (cobrança). Isso é diferente do contrato de assinatura do próprio sistema, onde a falta de pagamento bloqueia o acesso."
      ]
    },
    {
      "id": "orcamentos-email",
      "categoria": "vendas",
      "titulo": "Como enviar um orçamento por e-mail para o cliente?",
      "tags": [
        "orçamento",
        "email",
        "enviar",
        "pdf",
        "cliente"
      ],
      "passos": [
        "Abra o orçamento na lista de **Vendas**.",
        "Clique no botão **Ações** e selecione **Enviar por E-mail**.",
        "O sistema envia automaticamente um PDF do orçamento para o e-mail cadastrado do cliente.",
        "Você também recebe uma cópia no e-mail da empresa.",
        "⚠️ Se o cliente não tiver e-mail cadastrado, o botão ficará desabilitado. Cadastre o e-mail no perfil do cliente primeiro."
      ]
    },
    {
      "id": "orcamentos-clone",
      "categoria": "vendas",
      "titulo": "Como duplicar um orçamento existente?",
      "tags": [
        "duplicar",
        "clonar",
        "cópia",
        "orçamento"
      ],
      "passos": [
        "Na lista de **Vendas**, encontre o orçamento que deseja duplicar.",
        "Clique em **Ações → Duplicar Orçamento**.",
        "O sistema cria uma cópia com os mesmos itens e cliente.",
        "Faça os ajustes necessários e salve."
      ]
    },
    {
      "id": "orcamentos-perdido",
      "categoria": "vendas",
      "titulo": "O que fazer quando um orçamento não fechou?",
      "tags": [
        "perdido",
        "cancelar",
        "orçamento",
        "não fechou",
        "motivo"
      ],
      "passos": [
        "Na lista de **Vendas**, encontre o orçamento.",
        "Clique em **Ações → Marcar como Perdido**.",
        "Informe o motivo da perda (ex: 'cliente optou por concorrente', 'preço acima do esperado').",
        "Confirme. O orçamento fica marcado como perdido e não aparece mais na lista ativa.",
        "💡 Registrar o motivo ajuda a identificar padrões e melhorar as negociações futuras."
      ]
    },
    {
      "id": "vendas-nova",
      "categoria": "vendas",
      "titulo": "Como registrar uma venda diretamente sem orçamento?",
      "tags": [
        "venda",
        "nova",
        "direto",
        "sem orçamento"
      ],
      "passos": [
        "No menu lateral, clique em **Vendas → Nova Venda**.",
        "Selecione o cliente.",
        "Adicione os produtos clicando em **Adicionar Item**.",
        "Confirme a forma de pagamento e condição.",
        "Clique em **Confirmar Venda**.",
        "✅ O estoque é descontado e o financeiro é gerado automaticamente."
      ]
    },
    {
      "id": "vendas-bipar-codigo-barras",
      "categoria": "vendas",
      "titulo": "Como bipar o código de barras pra adicionar item mais rápido no orçamento/venda?",
      "tags": [
        "código de barras",
        "bipar",
        "scanner",
        "leitor",
        "EAN",
        "DUN-14",
        "caixa fechada",
        "câmera",
        "QR"
      ],
      "passos": [
        "No orçamento ou na venda, use o campo **Bipar código de barras / QR** logo acima da busca de produto.",
        "Funciona com **leitor USB** (o leitor digita o código e aperta Enter sozinho), **digitação manual** (digite o código e aperte Enter) ou pela **câmera do celular/notebook** — clique no ícone de câmera ao lado do campo.",
        "O sistema busca o produto pelo código informado (EAN/código de barras cadastrado) e adiciona automaticamente o item na lista, sem precisar procurar pelo nome.",
        "💡 Se o código bipado for de uma **caixa fechada (DUN-14)**, o sistema reconhece e já lança a quantidade certa de unidades de uma vez — não precisa bipar unidade por unidade.",
        "⚠️ Se o produto não tiver o EAN/código de barras cadastrado, a bipagem não encontra o item — cadastre o código em **Produtos → editar produto → campo EAN/Código de Barras**."
      ]
    },
    {
      "id": "compras-nova",
      "categoria": "compras",
      "titulo": "Como registrar uma compra de mercadoria?",
      "tags": [
        "compra",
        "registrar",
        "fornecedor",
        "entrada",
        "estoque",
        "nota"
      ],
      "passos": [
        "No menu lateral, clique em **Compras → Nova Compra**.",
        "Selecione o **Fornecedor**.",
        "Adicione os itens comprados (produto, quantidade e valor).",
        "Informe o número e a data da nota fiscal de compra.",
        "Clique em **Salvar**.",
        "✅ O estoque é atualizado automaticamente com as quantidades compradas."
      ]
    },
    {
      "id": "compras-xml",
      "categoria": "compras",
      "titulo": "Como importar uma nota fiscal de compra pelo arquivo XML?",
      "tags": [
        "importar",
        "xml",
        "nota",
        "compra",
        "fornecedor",
        "nfe"
      ],
      "passos": [
        "No menu lateral, clique em **Compras**.",
        "Clique em **Importar NF-e (XML)**.",
        "Selecione o arquivo XML da nota fiscal enviado pelo fornecedor.",
        "O sistema lê os dados e exibe os itens da nota para revisão.",
        "Revise e confirme. Os produtos e quantidades são importados automaticamente.",
        "⚠️ Se algum produto não for encontrado no cadastro, o sistema avisa para você vincular ou cadastrar."
      ]
    },
    {
      "id": "financeiro-receber",
      "categoria": "financeiro",
      "titulo": "Como ver o que tenho a receber?",
      "tags": [
        "receber",
        "financeiro",
        "contas",
        "títulos",
        "clientes",
        "pagamento"
      ],
      "passos": [
        "No menu lateral, clique em **Financeiro → Contas a Receber**.",
        "Você verá a lista de todos os títulos em aberto, organizados por data de vencimento.",
        "Títulos vencidos aparecem destacados em vermelho.",
        "Use os filtros para buscar por cliente, período ou status (em aberto, recebido, vencido)."
      ]
    },
    {
      "id": "financeiro-baixar-receber",
      "categoria": "financeiro",
      "titulo": "Como registrar que um cliente pagou?",
      "tags": [
        "receber",
        "pago",
        "baixar",
        "quitar",
        "recebimento"
      ],
      "passos": [
        "Acesse **Financeiro → Contas a Receber**.",
        "Encontre o título do cliente.",
        "Clique em **Quitar** (ou no ícone de check).",
        "Confirme a data e o valor recebido.",
        "✅ O título fica marcado como recebido e sai da lista de pendências."
      ]
    },
    {
      "id": "financeiro-pagar",
      "categoria": "financeiro",
      "titulo": "Como ver o que tenho a pagar?",
      "tags": [
        "pagar",
        "financeiro",
        "fornecedor",
        "contas",
        "vencimento"
      ],
      "passos": [
        "No menu lateral, clique em **Financeiro → Contas a Pagar**.",
        "Você verá todos os títulos de pagamento pendentes.",
        "Títulos vencidos aparecem em destaque.",
        "Use os filtros para buscar por fornecedor, data ou status."
      ]
    },
    {
      "id": "financeiro-baixar-pagar",
      "categoria": "financeiro",
      "titulo": "Como registrar que fiz um pagamento?",
      "tags": [
        "pagar",
        "baixar",
        "quitar",
        "pagamento",
        "fornecedor"
      ],
      "passos": [
        "Acesse **Financeiro → Contas a Pagar**.",
        "Encontre o título do fornecedor.",
        "Clique em **Quitar**.",
        "Confirme a data e o valor pago.",
        "✅ O título fica marcado como pago."
      ]
    },
    {
      "id": "financeiro-credito-cliente",
      "categoria": "financeiro",
      "titulo": "Como funciona o crédito do cliente e o limite pra vendas a prazo?",
      "tags": [
        "crédito",
        "limite de crédito",
        "aprovar cliente",
        "venda a prazo",
        "bloqueado",
        "solicitar aumento",
        "documentos",
        "aguardando documentos"
      ],
      "passos": [
        "Abra o **Histórico do cliente** (pela ficha do cliente, ou pelo orçamento/venda/NF-e dele) e clique na aba **Crédito**.",
        "⚠️ Por padrão nenhum cliente vem aprovado — enquanto não for liberado, o sistema bloqueia vendas a prazo (parceladas) acima do saldo já em aberto dele. Vendas à vista nunca são bloqueadas.",
        "**Admin e Financeiro** conferem os documentos do cliente (notas fiscais de compra recentes em outros fornecedores, contrato social, comprovante de endereço, etc.), marcam **Aprovado** e definem o **limite de crédito** em R$.",
        "Documentos comprovando a análise podem ser anexados na própria aba — só quem gerencia crédito (Admin/Financeiro) vê e anexa esses arquivos.",
        "**Vendedor**: se uma venda a prazo for bloqueada por falta de limite, use o botão **Solicitar aumento** na mesma aba Crédito, informando o valor desejado e a justificativa.",
        "O Financeiro responde a solicitação: pode **Aprovar** (já atualiza o limite do cliente), **Negar**, ou **Pedir documentos** — nesse caso ele marca numa lista quais documentos faltam (varia conforme o cliente é pessoa física ou jurídica).",
        "💡 Quando o Financeiro pede documentos, o vendedor pode baixar um **PDF pronto** com a lista explicada, pra enviar direto ao cliente por e-mail ou WhatsApp — o botão \"Baixar PDF pra enviar ao cliente\" aparece na resposta.",
        "O vendedor acompanha todos os pedidos que já fez, com a resposta do Financeiro, em **Vendas → Minhas Solicitações de Crédito** — sem precisar reabrir cliente por cliente.",
        "✅ Status e limite aprovado ficam visíveis para qualquer um com acesso ao cliente; só o processo de aprovação em si (e os documentos anexados) fica restrito ao Admin/Financeiro."
      ]
    },
    {
      "id": "financeiro-cancelar-titulo",
      "categoria": "financeiro",
      "titulo": "Como cancelar um título ou parcela que foi gerado errado?",
      "tags": [
        "cancelar título",
        "excluir título",
        "cancelar parcela",
        "conta a receber errada",
        "estornar cobrança",
        "justificativa",
        "remessa não gera cobrança"
      ],
      "passos": [
        "Abra **Financeiro** e clique na linha do título para expandir as parcelas.",
        "Para apagar tudo: clique em **Cancelar título** (ao lado de \"Parcelas\"). Para apagar só uma parcela: use o menu de ações da parcela e escolha **Cancelar**.",
        "⚠️ É obrigatório informar o **motivo** (mínimo 10 caracteres). O título/parcela não é apagado do sistema — fica com status **CANCELADO**, registrando quem cancelou, quando e por quê. Esse motivo aparece depois na própria linha do título.",
        "⚠️ Não é possível cancelar um título que já tem parcela recebida (total ou parcial). Nesse caso, estorne a baixa da parcela primeiro.",
        "💡 Se a conta a receber nasceu de uma NF-e de **remessa** (conserto, comodato, demonstração, bonificação, brinde, amostra), o certo é emitir a nota como **Sem Pagamento** na forma de pagamento — assim o sistema já não gera cobrança nenhuma."
      ]
    },
    {
      "id": "nfse-gerar-de-os",
      "categoria": "nfse",
      "titulo": "Como emitir uma nota fiscal de serviço (NFS-e) para uma OS?",
      "tags": [
        "nfse",
        "nota de serviço",
        "iss",
        "ordem de serviço",
        "emitir nfs-e",
        "nota fiscal servico",
        "gerar venda",
        "codigo ibge",
        "enviar email"
      ],
      "passos": [
        "Acesse a OS que deseja faturar e confirme que ela está com status **Concluída** ou **Aprovada pelo Cliente**.",
        "Clique no botão **Gerar Venda** no cabeçalho da OS — isso cria a Venda e já gera o título financeiro (Contas a Receber), independente de emitir nota ou não.",
        "Na tela da Venda gerada, clique em **Emitir NFS-e**. O sistema cria um rascunho pré-preenchido com os dados da empresa (prestador), do cliente (tomador), o valor da venda e a descrição baseada na OS.",
        "💡 Revise os campos: **Código de Tributação Nacional**, **Alíquota ISS**, **Valor do Serviço** e **Descrição do Serviço**. Edite se necessário e clique em **Salvar**.",
        "💡 Casos especiais (isenção, imunidade, cooperativa, sociedade de profissionais, suspensão judicial do ISS) têm campos próprios em **Tributação ISS**: **Exigibilidade do ISSQN** e **Regime Especial de Tributação**. Deixe no padrão (Exigível / Nenhum) se o serviço for uma prestação comum.",
        "⚠️ Os campos **Local de Prestação** e **Município Incidência ISSQN** vêm pré-preenchidos com a cidade do Local do Atendimento da OS, mas a regra de qual prefeitura recebe o ISS varia por tipo de serviço e por prefeitura (algumas cidades não abrem mão do imposto mesmo quando o serviço foi prestado em outro município). Confirme com seu contador antes de assinar a DPS.",
        "💡 Se o **Código IBGE** do município não vier preenchido, digite o nome da cidade, selecione a UF ao lado e clique em **Buscar** — o sistema procura o código automaticamente.",
        "Na tela de detalhes da NFS-e, clique em **Assinar DPS** para gerar e assinar digitalmente o Documento Provisório de Serviço.",
        "Com o status **DPS assinada**, clique em **Enviar ao SEFIN** para transmitir ao portal nacional de NFS-e.",
        "⚠️ O envio eletrônico exige certificado digital A1 configurado na empresa e que o município seja aderente ao Padrão Nacional NFS-e (nfse.gov.br).",
        "✅ Após autorização, a NFS-e recebe número, chave de acesso e código de verificação, e um e-mail com o DANFSe e o XML é enviado automaticamente para os e-mails cadastrados do cliente.",
        "Clique em **Baixar PDF** a qualquer momento para gerar a DANFSe (Documento Auxiliar da NFS-e), com QR code para consulta de autenticidade — funciona mesmo em rascunho, antes do envio.",
        "💡 Se o cliente não quer nota fiscal, não tem problema — a Venda e o título financeiro já foram gerados no primeiro passo, mesmo sem emitir a NFS-e. Use o botão **Enviar por E-mail** na tela da Venda para mandar o PDF da venda ao cliente."
      ]
    },
    {
      "id": "nfse-configurar",
      "categoria": "nfse",
      "titulo": "Como configurar os dados da empresa para emitir NFS-e?",
      "tags": [
        "nfse",
        "inscricao municipal",
        "aliquota iss",
        "serie dps",
        "codigo tributacao",
        "configurar",
        "numero inicial nfse",
        "continuar numeração"
      ],
      "passos": [
        "Acesse **Configurações → Empresa** e localize a seção **NFS-e (Nota Fiscal de Serviço)**.",
        "Preencha a **Inscrição Municipal** da empresa junto à prefeitura.",
        "Informe o **Código de Tributação Nacional padrão** (ex: 14.01.01 para manutenção/revisão).",
        "Informe a **Alíquota ISS** padrão do seu município (ex: 5%).",
        "Defina a **Série da DPS** (padrão: 1 — verifique com a prefeitura se há exigência específica).",
        "💡 Se você já emitia NFS-e por outro sistema, preencha **Número inicial da DPS** com o próximo número a ser usado (ex: se a última foi a 352, informe 353). Esse número é próprio da sua empresa/CNPJ — não tem relação com o número de DPS de notas de outras empresas.",
        "⚠️ Certifique-se de que o município está cadastrado no Padrão Nacional NFS-e em nfse.gov.br.",
        "✅ Com esses dados preenchidos, o botão **Emitir NFS-e** ficará disponível na tela da Venda gerada a partir de uma OS de serviço concluída."
      ]
    },
    {
      "id": "nfse-reforma-tributaria-ibs-cbs-nbs",
      "categoria": "nfse",
      "titulo": "Como funcionam os campos de IBS/CBS e o código NBS na nota de serviço (NFS-e)?",
      "tags": [
        "reforma tributária",
        "ibs",
        "cbs",
        "nbs",
        "nomenclatura brasileira de serviços",
        "imposto seletivo"
      ],
      "passos": [
        "A NFS-e já emite com os campos do grupo **IBS/CBS** exigidos pela Reforma Tributária, preenchidos automaticamente com base na configuração fiscal da empresa e do serviço prestado.",
        "O campo **NBS (Nomenclatura Brasileira de Serviços)** é opcional por enquanto — use a busca no campo pra encontrar o código certo entre as mais de 800 opções, digitando parte da descrição do serviço.",
        "💡 Não é preciso decorar nem saber de cor o código NBS — comece a digitar e o sistema mostra as opções que combinam.",
        "⚠️ Esses campos só valem pra municípios já aderentes ao Padrão Nacional NFS-e (nfse.gov.br) — em município fora do padrão nacional, a nota continua no formato tradicional (sem IBS/CBS/NBS)."
      ]
    },
    {
      "id": "nfse-cancelar-descartar",
      "categoria": "nfse",
      "titulo": "Como cancelar ou descartar uma NFS-e?",
      "tags": [
        "nfse",
        "cancelar nfs-e",
        "descartar",
        "rascunho",
        "nota rejeitada",
        "motivo cancelamento",
        "erro na emissão",
        "serviço não prestado",
        "estornar nota de serviço"
      ],
      "passos": [
        "Abra a NFS-e em **Serviços → Notas** e clique nela para ver os detalhes.",
        "**Descartar** (rascunho, DPS assinada ainda não enviada, ou rejeitada): clique em **Descartar**. A NFS-e é removida de vez e a OS/Venda de origem fica livre para gerar uma nova. Use quando errou algo antes de transmitir, ou quando a nota foi rejeitada e você vai refazer do zero.",
        "**Cancelar** (nota já autorizada): clique em **Cancelar no SEFIN**, escolha o **Motivo do cancelamento** (Erro na emissão, Serviço não prestado ou Outros) e escreva a justificativa.",
        "⚠️ Para nota autorizada, a justificativa precisa ter no mínimo **15 caracteres** — o contador da linha mostra quanto falta.",
        "💡 Cancele no **mesmo mês da competência** sempre que possível: assim a nota não entra na apuração do ISS e não gera imposto. Cancelamento fora do prazo da prefeitura pode não ser aceito pelo webservice.",
        "✅ Depois de cancelada, a NFS-e fica com status **Cancelada** e deixa de valer; a OS/Venda pode receber uma nova emissão."
      ]
    },
    {
      "id": "nfe-emitir",
      "categoria": "nfe",
      "titulo": "Como emitir uma nota fiscal para uma venda?",
      "tags": [
        "nota fiscal",
        "emitir",
        "nfe",
        "venda",
        "sefaz"
      ],
      "passos": [
        "Abra a venda desejada em **Vendas**.",
        "Clique no botão **Emitir NF-e** (ou **Nota Fiscal**).",
        "O sistema preenche os dados automaticamente com base na venda.",
        "Revise os dados da nota: destinatário, itens, NCM, CFOP e forma de pagamento.",
        "Verifique se há algum **alerta** nos itens (ponto vermelho no botão Ações de cada item) — se houver, ajuste o NCM ou os impostos.",
        "Clique em **Transmitir ao SEFAZ**.",
        "Aguarde a resposta. Se autorizada ✅, a nota fica disponível para download do DANFE (PDF) e XML.",
        "💡 Se a nota for **rejeitada**, o motivo será exibido em detalhes. Corrija o que foi apontado e transmita novamente."
      ]
    },
    {
      "id": "nfe-prazo",
      "categoria": "nfe",
      "titulo": "Como emitir uma nota fiscal com pagamento a prazo?",
      "tags": [
        "nota fiscal",
        "prazo",
        "parcelas",
        "vencimento",
        "boleto"
      ],
      "passos": [
        "Ao abrir a tela de emissão da NF-e, localize a seção **Dados sobre a Nota Fiscal**.",
        "No campo **Forma de pagamento**, selecione a opção correta (Dinheiro, PIX, Boleto, etc.).",
        "No campo **Condição de pagamento**, selecione **A prazo**.",
        "Um campo de **Data de vencimento** aparecerá automaticamente — informe a data combinada com o cliente.",
        "Transmita normalmente.",
        "⚠️ O boleto em si deve ser emitido diretamente pelo seu banco ou aplicativo bancário — o sistema registra a condição de pagamento na nota fiscal, mas não emite o boleto automaticamente."
      ]
    },
    {
      "id": "nfe-remessa-conserto",
      "categoria": "nfe",
      "titulo": "Como emitir uma nota fiscal de envio para conserto ou reparo?",
      "tags": [
        "nota fiscal",
        "remessa",
        "conserto",
        "reparo",
        "assistência técnica",
        "cfop 5915",
        "cfop 6915",
        "retorno de conserto"
      ],
      "passos": [
        "Acesse **Notas Fiscais** no menu lateral e clique em **Nova NF-e**.",
        "Na seção **Em branco**, escolha **Remessa para conserto**.",
        "Preencha o destinatário (oficina, fabricante ou assistência técnica) e os itens que serão enviados.",
        "Confira se o **CFOP** dos itens está como **5915** (dentro do estado) ou **6915** (para outro estado) — o sistema já sugere essas opções no campo CFOP.",
        "Clique em **Transmitir ao SEFAZ** para autorizar a nota.",
        "💡 Quando o equipamento ou peça retornar do conserto, abra a NF-e de remessa emitida, vá em **Nova NF-e → Retorno de remessa** e selecione essa nota — o sistema gera automaticamente a NF de retorno com o CFOP correto (1915/2915)."
      ]
    },
    {
      "id": "nfe-cancelar",
      "categoria": "nfe",
      "titulo": "Como cancelar uma nota fiscal já autorizada?",
      "tags": [
        "cancelar",
        "nota fiscal",
        "sefaz",
        "cancelamento"
      ],
      "passos": [
        "Acesse **Notas Fiscais** no menu lateral.",
        "Encontre a nota e clique nela para abrir os detalhes.",
        "No menu **Ações**, selecione **Cancelar NF-e**.",
        "Informe a justificativa do cancelamento (mínimo 15 caracteres).",
        "Confirme. O sistema envia o pedido de cancelamento ao SEFAZ.",
        "⚠️ O cancelamento só é possível dentro do prazo permitido pelo estado (geralmente até 24 horas após a autorização no estado de GO).",
        "⚠️ Após o cancelamento, o estoque dos itens é afetado conforme o tipo de nota."
      ]
    },
    {
      "id": "nfe-rejeitada",
      "categoria": "nfe",
      "titulo": "Por que minha nota foi recusada pelo governo?",
      "tags": [
        "rejeição",
        "recusada",
        "erro",
        "sefaz",
        "nota",
        "motivo"
      ],
      "passos": [
        "Quando uma nota é rejeitada, o motivo aparece em **destaque vermelho** na tela de emissão.",
        "Leia com atenção a mensagem de rejeição — ela indica exatamente o que precisa ser corrigido.",
        "**Problemas mais comuns:**",
        "  - NCM inválido ou com menos de 8 dígitos → corrija o NCM do produto.",
        "  - Endereço do cliente incompleto → complete os dados do cliente.",
        "  - Nota com data de vencimento ausente em pagamento a prazo → informe a data de vencimento.",
        "  - CFOP incorreto para o tipo de operação → verifique o CFOP na seção de itens.",
        "  - Erro nos impostos (ICMS, PIS, COFINS) → verifique as regras de NCM em Configurações.",
        "Após corrigir, clique em **Transmitir ao SEFAZ** novamente.",
        "💡 A nota pode ser transmitida quantas vezes forem necessárias enquanto estiver rejeitada."
      ]
    },
    {
      "id": "nfe-recusa-cliente",
      "categoria": "nfe",
      "titulo": "O cliente recusou a nota fiscal — e agora?",
      "tags": [
        "recusa",
        "recusada",
        "manifestação do destinatário",
        "desconhecimento",
        "operação não realizada",
        "cliente recusou",
        "reemitir"
      ],
      "passos": [
        "Isso é diferente da nota rejeitada pelo SEFAZ: aqui a nota já foi **autorizada**, mas o cliente, no sistema dele, registrou que recusou ou desconhece a operação.",
        "Quando isso acontece, a tela de detalhe dessa nota mostra um aviso em **destaque vermelho** com o motivo informado pelo cliente.",
        "⚠️ Uma nota autorizada não pode ser alterada — mesmo com a recusa do cliente, a solução é sempre emitir uma **nova** NF-e corrigindo o que ele apontou.",
        "Se a nota veio de uma venda do sistema, o aviso mostra o botão **Reemitir NF-e**: ele cria a nova nota já usando a mesma venda, pronta para revisar e emitir.",
        "✅ Como é apenas correção do procedimento (a mercadoria não é uma venda nova), o **Reemitir NF-e** reaproveita o título financeiro já existente — não gera cobrança duplicada no contas a receber.",
        "Se a nota ainda não tiver sido cancelada, avalie se é o caso de cancelar (dentro do prazo) antes de emitir a nova.",
        "💡 O aviso de recusa pode demorar para aparecer no sistema: ele chega automaticamente pela sincronização com a SEFAZ, que roda a cada ~1h. Se precisar checar na hora, peça para a equipe rodar 'Rebuscar histórico' na tela de Compras."
      ]
    },
    {
      "id": "nfe-devolucao",
      "categoria": "nfe",
      "titulo": "Como fazer uma nota de devolução de mercadoria?",
      "tags": [
        "devolução",
        "retorno",
        "nota fiscal",
        "mercadoria devolvida"
      ],
      "passos": [
        "Acesse **Notas Fiscais** e abra a nota original que será devolvida.",
        "No menu **Ações**, selecione **Derivar → Devolução de Venda** (ou Devolução de Compra, conforme o caso).",
        "O sistema cria uma nova nota com os dados copiados e os CFOPs ajustados automaticamente.",
        "Revise os itens e quantidades devolvidas.",
        "Transmita ao SEFAZ normalmente.",
        "✅ O estoque se ajusta sozinho quando a nota é autorizada: **devolução de venda** repõe o estoque (mercadoria voltou); **devolução de compra** dá baixa (mercadoria saiu de volta pro fornecedor)."
      ]
    },
    {
      "id": "nfe-devolucao-compra",
      "categoria": "nfe",
      "titulo": "Como devolver mercadoria para um fornecedor (devolução de compra)?",
      "tags": [
        "devolução de compra",
        "devolver para fornecedor",
        "garantia",
        "troca",
        "simples remessa",
        "estoque",
        "CFOP 6202",
        "CFOP 5202",
        "nota externa"
      ],
      "passos": [
        "**Se a nota de compra está no sistema:** abra a **Compra** correspondente (menu Compras) e clique em **Gerar devolução**.",
        "**Se a compra foi feita fora do sistema** (outro ERP, ou antes da migração): vá em **Notas Fiscais → Nova → NF-e de Devolução de Compra (nota externa)** e informe o fornecedor, a chave da nota de compra referenciada e os itens com os valores de imposto.",
        "Confira os **itens e as quantidades** que estão voltando para o fornecedor.",
        "⚠️ Deixe o campo **CFOP em branco** quando não tiver certeza — o sistema escolhe sozinho pelo estado do fornecedor: **5202** (dentro de GO) ou **6202** (outro estado). Preencher um CFOP errado (ex: 5102) faz a SEFAZ rejeitar.",
        "A forma de pagamento fica automaticamente como **Sem Pagamento** — é o correto para devolução.",
        "Gere o XML, assine e transmita à SEFAZ, igual a qualquer NF-e.",
        "✅ Quando a nota é autorizada, o sistema **dá baixa automática no estoque** dos itens devolvidos — não precisa mais fazer ajuste manual.",
        "💡 **Troca de garantia:** quando o cliente manda uma peça com defeito por Simples Remessa, registre essa remessa como uma **Compra** (com o cliente no lugar do fornecedor). Depois use **Gerar devolução** nessa Compra para emitir a saída da peça nova de volta ao cliente — isso fecha o ciclo e acerta o estoque das duas pontas."
      ]
    },
    {
      "id": "nfe-nao-entregue",
      "categoria": "nfe",
      "titulo": "A mercadoria não foi entregue ao cliente. Como registrar o retorno?",
      "tags": [
        "não entregue",
        "retorno",
        "mercadoria",
        "recusa",
        "cliente recusou"
      ],
      "passos": [
        "Acesse **Notas Fiscais** e abra a nota da venda que não foi entregue.",
        "No menu **Ações**, selecione **Derivar → Retorno de Mercadoria Não Entregue**.",
        "O sistema cria uma nova nota de entrada (retorno) com os itens copiados.",
        "Transmita ao SEFAZ.",
        "✅ Com a nota autorizada, o estoque é reposto e o processo fiscal fica regularizado.",
        "⚠️ Se o cancelamento da nota original não foi possível (prazo expirado), o fiscal do cliente pode registrar a recusa no SEFAZ. Após isso, emita esta nota de retorno."
      ]
    },
    {
      "id": "nfe-reenviar-cancelamento",
      "categoria": "nfe",
      "titulo": "Cancelei a nota aqui no sistema mas o SEFAZ ainda mostra como ativa. O que fazer?",
      "tags": [
        "cancelamento",
        "sefaz",
        "ativo",
        "reenviar",
        "duas notas"
      ],
      "passos": [
        "Isso pode acontecer quando a comunicação com o SEFAZ falhou no momento do cancelamento.",
        "Acesse **Notas Fiscais** e abra a nota em questão (que aparece como Cancelada aqui no sistema).",
        "No menu **Ações**, selecione **Reenviar cancelamento ao SEFAZ**.",
        "Informe a justificativa novamente e confirme.",
        "⚠️ O reenvio só funciona dentro do prazo de cancelamento do seu estado.",
        "Se o prazo já expirou, solicite ao fiscal do cliente que registre a recusa no SEFAZ e depois emita uma nota de **Retorno de Mercadoria Não Entregue** (veja o artigo correspondente)."
      ]
    },
    {
      "id": "nfe-danfe",
      "categoria": "nfe",
      "titulo": "Como baixar ou imprimir o PDF de uma nota fiscal?",
      "tags": [
        "danfe",
        "pdf",
        "imprimir",
        "baixar",
        "nota fiscal"
      ],
      "passos": [
        "Acesse **Notas Fiscais** e encontre a nota desejada.",
        "Clique na nota para abrir os detalhes.",
        "Clique em **Baixar DANFE** para fazer o download do PDF.",
        "O arquivo pode ser impresso ou enviado por e-mail diretamente para o cliente.",
        "💡 Você também pode baixar o arquivo XML para envio ao contador — clique em **Baixar XML**."
      ]
    },
    {
      "id": "nfe-ncm",
      "categoria": "nfe",
      "titulo": "Como configurar os impostos de uma mercadoria (NCM)?",
      "tags": [
        "ncm",
        "imposto",
        "icms",
        "pis",
        "cofins",
        "cfop",
        "tributação"
      ],
      "passos": [
        "No menu superior direito, acesse **Configurações → Regras de NCM**.",
        "Clique em **Nova Regra**.",
        "Informe o **NCM** (código de 8 dígitos da mercadoria).",
        "Informe a **UF de Origem** e **UF de Destino** (ou deixe em branco para aplicar a todos os estados).",
        "Preencha o **CFOP Padrão**, as alíquotas de ICMS, PIS e COFINS e o CST.",
        "Clique em **Salvar**.",
        "✅ A partir daí, toda nota fiscal que usar esse NCM terá os impostos preenchidos automaticamente."
      ]
    },
    {
      "id": "nfe-numero-errado",
      "categoria": "nfe",
      "titulo": "O número da nota saiu incorreto. Como corrigir?",
      "tags": [
        "número",
        "nota fiscal",
        "contador",
        "sequência",
        "correção"
      ],
      "passos": [
        "Acesse **Minha Empresa** pelo menu superior direito.",
        "Localize o campo **Próximo Número da NF-e** na seção Configurações Fiscais.",
        "Corrija o número para o valor correto (o próximo número a ser emitido).",
        "Salve as alterações.",
        "⚠️ Só altere esse campo se houver uma divergência real — modificar incorretamente pode gerar notas com numeração duplicada.",
        "💡 Em caso de dúvida, consulte seu contador antes de alterar."
      ]
    },
    {
      "id": "nfe-rastro-anvisa",
      "categoria": "nfe",
      "titulo": "Como a nota fiscal inclui o lote do produto para ANVISA?",
      "tags": [
        "rastro",
        "lote",
        "anvisa",
        "rastreabilidade",
        "data fabricação",
        "validade",
        "nf-e"
      ],
      "passos": [
        "A tag **<rastro>** na NF-e é exigida pela ANVISA para produtos que requerem rastreabilidade de lote (ex: materiais odontológicos e médicos).",
        "O preenchimento é automático: quando o pedido passa pelo fluxo de **Separação** (**Estoque → Separação de Pedidos**) e um lote é atribuído a cada item, a NF-e gerada incluirá automaticamente o lote.",
        "Para que o **<rastro>** seja gerado corretamente, o lote precisa ter **Data de Fabricação** e **Data de Validade** preenchidas em **Estoque → Controle de Lotes**.",
        "⚠️ Se o lote não tiver data de fabricação, a validação pré-transmissão bloqueará o envio com uma mensagem clara indicando qual item/lote está com dado faltante.",
        "Na tela **Detalhe da NF-e**, a coluna **Lote** mostra o número do lote atribuído a cada item da nota.",
        "💡 Para adicionar a data de fabricação a um lote existente: acesse **Estoque → Controle de Lotes**, selecione o produto, clique no ícone de editar ao lado do lote e preencha o campo **Data de Fabricação**."
      ]
    },
    {
      "id": "cte-vincular-manualmente",
      "categoria": "nfe",
      "titulo": "O que fazer quando o CT-e não é vinculado automaticamente a uma venda ou nota fiscal?",
      "tags": [
        "cte",
        "conhecimento de transporte",
        "frete",
        "sem venda",
        "não identificado",
        "vincular",
        "transportadora"
      ],
      "passos": [
        "O sistema baixa os CT-es da transportadora automaticamente e tenta identificar a venda ou nota fiscal correspondente comparando a chave de acesso da NF-e transportada.",
        "Quando a venda já foi feita mas a **NF-e ainda não foi emitida** (ou o CT-e chegou antes da nota), o sistema não consegue achar essa chave e o CT-e fica marcado como **Sem NF-e**.",
        "Acesse **Fiscal → CT-e**, abra o CT-e em questão e role até a seção **Vincular manualmente**.",
        "Escolha se quer buscar por **Venda** ou por **Nota Fiscal**, digite o número ou o nome do cliente/destinatário e clique no resultado desejado.",
        "✅ Ao vincular, o sistema cria automaticamente a despesa de frete e o título financeiro (a pagar para a transportadora), do mesmo jeito que faz na vinculação automática.",
        "💡 Se a nota fiscal ainda não existir, vincule direto pela Venda — quando a NF-e for emitida depois, o vínculo já vai estar registrado."
      ]
    },
    {
      "id": "catalogos-usar",
      "categoria": "catalogos",
      "titulo": "Como usar o catálogo de peças?",
      "tags": [
        "catálogo",
        "peças",
        "diagrama",
        "código",
        "marca"
      ],
      "passos": [
        "No menu lateral, clique em **Catálogos**.",
        "Selecione a **marca** do equipamento (Komatsu, Caterpillar, Hyundai, etc.).",
        "Escolha o modelo específico na lista.",
        "O catálogo abre com o diagrama do equipamento.",
        "**Para encontrar uma peça:** clique diretamente na peça no diagrama ou use a lista lateral.",
        "Ao clicar em uma peça, o código é destacado.",
        "Clique em **Copiar código** para usar em um orçamento ou pedido.",
        "Use os botões de zoom (+ e -) ou o scroll do mouse para ampliar o diagrama.",
        "Use os botões de rotação para girar o diagrama 90° se necessário."
      ]
    },
    {
      "id": "catalogos-codigo",
      "categoria": "catalogos",
      "titulo": "Como encontrar o código de uma peça no catálogo?",
      "tags": [
        "código",
        "peça",
        "catálogo",
        "buscar",
        "komatsu",
        "caterpillar"
      ],
      "passos": [
        "Abra o catálogo do equipamento correspondente.",
        "Se você sabe o número da peça na lista lateral (ex: item 15), clique nele — o sistema destaca a peça no diagrama.",
        "Se não sabe o número, observe o diagrama e clique na região onde a peça se localiza.",
        "O código aparece em destaque. Clique em **Copiar** para copiar para a área de transferência.",
        "💡 O código copiado pode ser colado diretamente no campo de busca de produtos ao criar um orçamento."
      ]
    },
    {
      "id": "estoque-inventario",
      "categoria": "produtos",
      "titulo": "Como fazer um inventário e corrigir o estoque?",
      "tags": [
        "inventário",
        "estoque",
        "contagem",
        "ajuste",
        "saldo"
      ],
      "passos": [
        "No menu lateral, acesse **Estoque → Inventário**.",
        "A tela exibe todos os produtos com o saldo atual no sistema.",
        "Para cada produto que deseja ajustar, informe a **quantidade real contada**.",
        "O sistema calcula automaticamente a diferença (positiva ou negativa).",
        "Confirme o ajuste ao final.",
        "✅ Os saldos são atualizados imediatamente.",
        "💡 Recomenda-se fazer inventário periodicamente para manter o estoque em dia."
      ]
    },
    {
      "id": "estoque-locais",
      "categoria": "produtos",
      "titulo": "Como cadastrar locais físicos no armazém?",
      "tags": [
        "local",
        "endereço",
        "armazém",
        "rua",
        "prateleira",
        "wms",
        "localização"
      ],
      "passos": [
        "No menu lateral, acesse **Estoque → Locais de estoque**.",
        "Clique em **Novo Local** para cadastrar um endereço físico.",
        "Preencha o **Código** do local (ex: A-02-03-1). Ele será usado para identificar o local nos lotes.",
        "Opcionalmente, informe **Rua**, **Coluna**, **Prateleira** e **Andar** para localização detalhada.",
        "Adicione uma **Descrição** para facilitar a identificação (ex: Câmara fria, Área de fraturados).",
        "Clique em **Salvar** para confirmar.",
        "💡 Para inativar um local, use o botão vermelho na linha do cadastro.",
        "⚠️ Locais inativos não aparecem para seleção ao registrar novos lotes."
      ]
    },
    {
      "id": "estoque-separacao",
      "categoria": "produtos",
      "titulo": "Como separar um pedido e registrar os lotes usados?",
      "tags": [
        "separação",
        "picking",
        "fefo",
        "lote",
        "armazém",
        "anvisa",
        "fila"
      ],
      "passos": [
        "No menu lateral, acesse **Estoque → Separação de Pedidos**.",
        "A tela exibe a fila com todos os pedidos aguardando separação.",
        "Clique em **Iniciar** para assumir a separação de um pedido (status muda para 'Em Separação').",
        "Na tela de detalhe, o sistema sugere automaticamente o lote com vencimento mais próximo (FEFO) para cada produto.",
        "Você pode trocar o lote sugerido usando o campo de seleção — todos os lotes disponíveis com saldo aparecem na lista.",
        "Ao confirmar todos os lotes, clique em **Concluir Separação**.",
        "⚠️ Todos os itens precisam ter um lote atribuído antes de concluir.",
        "✅ Ao concluir, o saldo de cada lote é decrementado automaticamente.",
        "💡 Este fluxo é exclusivo para empresas com o Módulo ANVISA ativo (código AFE preenchido)."
      ]
    },
    {
      "id": "estoque-lotes",
      "categoria": "produtos",
      "titulo": "Como controlar lotes e datas de validade?",
      "tags": [
        "lote",
        "validade",
        "vencimento",
        "fefo",
        "rastreabilidade",
        "anvisa",
        "fabricação"
      ],
      "passos": [
        "No menu lateral, acesse **Estoque → Controle de Lotes**.",
        "Na aba **Por Produto**, busque o produto pelo nome ou código.",
        "A tabela exibe todos os lotes do produto com número, fabricação, validade, quantidade e local.",
        "O badge colorido indica a situação: 🟢 verde (OK), 🟡 amarelo (próximo do vencimento), 🔴 vermelho (vencido).",
        "Para registrar um novo lote, clique em **Novo Lote** e preencha: número, data de validade, quantidade e NF de entrada.",
        "A aba **Alertas de Vencimento** lista todos os lotes (de qualquer produto) que estão próximos do vencimento.",
        "💡 Na aba de alertas, clique no ícone de etiqueta (🏷️) ao lado de um lote para criar rapidamente uma promoção para aquele produto.",
        "💡 O sistema usa a estratégia FEFO: ao dar saída de estoque, os lotes com vencimento mais próximo saem primeiro.",
        "⚠️ O prazo de alerta (padrão 90 dias) pode ser configurado nas informações da empresa."
      ]
    },
    {
      "id": "estoque-promocoes",
      "categoria": "produtos",
      "titulo": "Como criar promoções e descontos especiais?",
      "tags": [
        "promoção",
        "desconto",
        "oferta",
        "preço especial",
        "vencimento",
        "vigência"
      ],
      "passos": [
        "No menu lateral, acesse **Estoque → Promoções**.",
        "Clique em **Nova Promoção** para criar uma promoção.",
        "Selecione o **Produto** que receberá o desconto.",
        "Informe o **Desconto (%)** — por exemplo, 15 para 15% de desconto.",
        "Preencha o **Motivo** com uma descrição livre (ex: 'Vencimento próximo', 'Promoção de aniversário', 'Queima de estoque').",
        "Defina o período de vigência com **Início** e **Fim da Vigência**.",
        "✅ A promoção ficará **Ativa** automaticamente durante o período definido e **Expirada** após o término.",
        "💡 Para criar uma promoção rapidamente para um produto com lote vencendo, acesse **Estoque → Controle de Lotes**, aba **Alertas de Vencimento**, e clique no ícone de etiqueta ao lado do lote.",
        "⚠️ Apenas Gerente, Administrador e Super Admin podem criar ou editar promoções. Vendedores têm acesso somente de leitura."
      ]
    },
    {
      "id": "vendas-grupos-clientes",
      "categoria": "vendas",
      "titulo": "Como agrupar clientes para faturamento em conjunto?",
      "tags": [
        "grupo de clientes",
        "faturamento periódico",
        "consolidar notas",
        "múltiplos cnpj",
        "dentista",
        "clínica"
      ],
      "passos": [
        "No menu lateral, acesse **Vendas → Grupos de Clientes**.",
        "Clique em **Novo Grupo** e informe um **Nome** para identificar o grupo (ex: 'Dr. Silva — Clínicas').",
        "No campo de busca, procure os clientes pelo nome e clique em **Adicionar** para incluir cada um.",
        "Marque o **interruptor Principal** do membro que será o **destinatário da NF-e** (obrigatório ter exatamente um).",
        "✅ Clique em **Salvar**. O grupo ficará disponível no Faturamento Periódico.",
        "⚠️ O membro marcado como principal precisa ter endereço completo cadastrado para emissão da NF-e.",
        "💡 Use grupos quando um mesmo cliente realiza compras com vários CNPJs diferentes e quer receber uma única nota consolidada."
      ]
    },
    {
      "id": "vendas-faturamento-periodico",
      "categoria": "vendas",
      "titulo": "Como faturar todas as compras de um grupo em uma única nota?",
      "tags": [
        "faturamento periódico",
        "nota consolidada",
        "grupo de clientes",
        "quinzena",
        "mensal",
        "nfe agrupada"
      ],
      "passos": [
        "No menu lateral, acesse **Vendas → Faturamento Periódico**.",
        "Clique em **Abrir Período**, selecione o **Grupo de Clientes** e defina a **data de início e fim** do período.",
        "O sistema registrará o período como **Aberto** e monitorará as vendas elegíveis automaticamente.",
        "Para ver quais vendas serão incluídas, clique no ícone de **seta expandir** ao lado do período.",
        "Quando quiser gerar a NF-e, clique no ícone de **Gerar NF-e** (ícone de recibo) e confirme.",
        "✅ Uma única NF-e será criada consolidando todos os itens das vendas do grupo no período. O destinatário será o membro **Principal** do grupo.",
        "💡 Após a geração, a NF-e aparece no módulo **Notas Fiscais** no status **Em Digitação** — revise e transmita normalmente.",
        "⚠️ Vendas canceladas ou já associadas a outro período não são incluídas."
      ]
    },
    {
      "id": "importacao-dados",
      "categoria": "importacao",
      "titulo": "Como importar dados de outro sistema para o ERP?",
      "tags": [
        "importar",
        "migração",
        "outro sistema",
        "planilha",
        "conta azul"
      ],
      "passos": [
        "No menu lateral, acesse **Migração → Importar Dados**.",
        "Selecione o tipo de dado a importar: produtos, clientes, notas fiscais, etc.",
        "Faça o upload do arquivo (planilha Excel ou XML, conforme o tipo).",
        "O sistema valida os dados e exibe um resumo antes de importar.",
        "Confirme a importação.",
        "💡 Para importar histórico de NF-e do Conta Azul, use **Migração → Importar Planilhas e NF-e**."
      ]
    },
    {
      "id": "importacao-lista-cliente",
      "categoria": "importacao",
      "titulo": "Como importar a lista de peças que o cliente enviou?",
      "tags": [
        "importar",
        "lista",
        "cliente",
        "peças",
        "orçamento",
        "pedido"
      ],
      "passos": [
        "No menu lateral, acesse **Ferramentas → Importar Lista do Cliente**.",
        "Faça o upload do arquivo enviado pelo cliente (PDF ou Excel).",
        "O sistema tenta identificar os produtos automaticamente pelo código.",
        "Revise os itens identificados e corrija os que não foram encontrados.",
        "Confirme. Os itens são convertidos em um orçamento ou pedido automaticamente.",
        "💡 O sistema é compatível com listas de alguns fornecedores específicos como Tem TratorPeças."
      ]
    },
    {
      "id": "relatorios-abrir",
      "categoria": "relatorios",
      "titulo": "Como acessar e abrir um relatório?",
      "tags": [
        "relatório",
        "relatorios",
        "vendas",
        "financeiro",
        "estoque",
        "dre",
        "favorito"
      ],
      "passos": [
        "No menu lateral, clique em **Relatórios**.",
        "A primeira aba é a **Visão Geral**: um painel com gráficos resumidos de faturamento, DRE, orçamentos e top clientes.",
        "Na aba **Todos os relatórios**, os relatórios estão organizados em categorias: DRE, Fluxo de Caixa, Análise Financeira, Vendas, Compras e Estoque.",
        "Expanda a categoria desejada clicando sobre ela.",
        "Clique em **Abrir relatório** ao lado do item desejado.",
        "💡 Relatórios marcados como **Em breve** ainda estão em desenvolvimento.",
        "✅ Use a **estrela** para salvar relatórios favoritos na aba Favoritos."
      ]
    },
    {
      "id": "relatorios-dre",
      "categoria": "relatorios",
      "titulo": "O que é o DRE Gerencial e como interpretar?",
      "tags": [
        "dre",
        "resultado",
        "receita",
        "cmv",
        "despesa",
        "lucro",
        "margem"
      ],
      "passos": [
        "O **DRE Gerencial** mostra o resultado financeiro mês a mês: receitas de vendas, custo da mercadoria vendida (CMV), despesas operacionais e lucro líquido.",
        "**Receitas** = total das vendas realizadas no período.",
        "**CMV** = valor total das notas de compra do período (custo das mercadorias).",
        "**Lucro Bruto** = Receitas − CMV. Indica o ganho antes das despesas.",
        "**Despesas** = títulos a pagar não vinculados a compras (ex: aluguel, serviços).",
        "**Lucro Líquido** = Lucro Bruto − Despesas.",
        "⚠️ O CMV é calculado com base nas notas de compra. Para maior precisão, mantenha as compras atualizadas.",
        "Use os botões **‹ ›** para navegar entre os anos."
      ]
    },
    {
      "id": "relatorios-inadimplentes",
      "categoria": "relatorios",
      "titulo": "Como ver os clientes com parcelas em atraso?",
      "tags": [
        "inadimplente",
        "atraso",
        "cobrança",
        "parcela",
        "receber",
        "vencido"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **Análise Financeira**.",
        "Clique em **Análise de inadimplentes**.",
        "O relatório lista todas as parcelas vencidas ainda em aberto, com o número de dias de atraso.",
        "O painel **Maiores inadimplentes** mostra os 5 clientes com maior valor em atraso.",
        "Use a barra de pesquisa para filtrar por nome do cliente ou número do documento.",
        "💡 Parcelas com mais de 60 dias são destacadas em vermelho escuro."
      ]
    },
    {
      "id": "relatorios-curva-abc",
      "categoria": "relatorios",
      "titulo": "O que é a Curva ABC de produtos?",
      "tags": [
        "curva abc",
        "abc",
        "produto",
        "ranking",
        "faturamento",
        "estoque"
      ],
      "passos": [
        "A **Curva ABC** classifica os produtos pela sua contribuição no faturamento total.",
        "**Curva A** (verde): produtos que representam ~70% do faturamento. São os mais estratégicos.",
        "**Curva B** (azul): produtos que representam ~20% do faturamento.",
        "**Curva C** (cinza): produtos com menor impacto, representam ~10%.",
        "Use o relatório para focar estoque e negociação nos produtos da Curva A.",
        "⚠️ O cálculo considera apenas produtos que tiveram vendas no ano selecionado."
      ]
    },
    {
      "id": "relatorios-estoque",
      "categoria": "relatorios",
      "titulo": "Como ver a posição atual do meu estoque?",
      "tags": [
        "estoque",
        "posição",
        "saldo",
        "abaixo mínimo",
        "valor",
        "produto"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **Estoque**.",
        "Clique em **Posição de estoque**.",
        "A tabela exibe todos os produtos ativos com: quantidade disponível, custo unitário, preço de venda e valor total em estoque.",
        "Produtos **abaixo do mínimo** são sinalizados em amarelo.",
        "Produtos **sem estoque** são sinalizados em vermelho.",
        "Use o filtro **Abaixo do mínimo** para ver apenas os itens que precisam ser repostos.",
        "💡 O valor do estoque é calculado com base no **custo cadastrado** de cada produto."
      ]
    },
    {
      "id": "relatorios-fluxo",
      "categoria": "relatorios",
      "titulo": "Como ver o fluxo de caixa da empresa?",
      "tags": [
        "fluxo de caixa",
        "entradas",
        "saídas",
        "saldo",
        "mensal",
        "diário",
        "previsão"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **Fluxo de Caixa**.",
        "Escolha **Fluxo de caixa mensal** para ver entradas e saídas mês a mês ao longo do ano.",
        "Escolha **Fluxo de caixa diário** para ver movimentações dia a dia em um período específico.",
        "Os valores são baseados nas **datas de vencimento** dos títulos financeiros (contas a receber e a pagar).",
        "💡 O fluxo diário mostra o **saldo acumulado** ao final de cada dia com movimento.",
        "⚠️ Títulos sem data de vencimento definida não aparecem no fluxo."
      ]
    },
    {
      "id": "relatorios-dre-analitico",
      "categoria": "relatorios",
      "titulo": "Como comparar o resultado de dois anos?",
      "tags": [
        "DRE",
        "analítico",
        "comparação",
        "horizontal",
        "vertical",
        "variação",
        "resultado"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **DRE – Resultado do Exercício**.",
        "Clique em **DRE com análise vertical e horizontal**.",
        "Selecione o **Ano base** (período principal) e o **Comparar com** (ano anterior ou outro ano).",
        "A coluna **Var. Receita** mostra o crescimento percentual da receita entre os dois anos.",
        "A coluna **% CMV** mostra o custo da mercadoria como percentual da receita (análise vertical).",
        "💡 Variações em verde indicam melhora; em vermelho indicam piora no período."
      ]
    },
    {
      "id": "relatorios-contas",
      "categoria": "relatorios",
      "titulo": "Como ver todas as contas a receber e pagar juntas?",
      "tags": [
        "contas",
        "receber",
        "pagar",
        "títulos",
        "vencimento",
        "consolidado"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **Análise Financeira**.",
        "Clique em **Relação de contas a receber / pagar**.",
        "Defina o período pelo **Data início** e **Data fim** e clique em **Atualizar**.",
        "Use os botões **Todos / A Receber / A Pagar** para filtrar por tipo.",
        "O campo de busca localiza títulos por nome da pessoa ou número do documento.",
        "💡 O **Saldo Previsto** mostra a diferença entre recebimentos e pagamentos do período."
      ]
    },
    {
      "id": "relatorios-margem",
      "categoria": "relatorios",
      "titulo": "Como calcular a margem de lucro das vendas?",
      "tags": [
        "margem",
        "lucro bruto",
        "CMV",
        "custo",
        "receita",
        "rentabilidade"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **Vendas**.",
        "Clique em **Gráfico de lucro bruto e margem por mês**.",
        "Selecione o ano desejado com as setas.",
        "O CMV é calculado como: **custo cadastrado do produto × quantidade vendida**.",
        "A **margem bruta** é: (receita − CMV) ÷ receita × 100.",
        "⚠️ Para resultados precisos, certifique-se de que o **valor de custo** está preenchido em cada produto."
      ]
    },
    {
      "id": "relatorios-giro",
      "categoria": "relatorios",
      "titulo": "Como saber quais produtos têm maior rotatividade?",
      "tags": [
        "giro",
        "rotatividade",
        "estoque",
        "movimentação",
        "lento",
        "alto giro"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **Estoque**.",
        "Clique em **Giro de estoque**.",
        "O índice de giro é calculado como: **quantidade vendida ÷ estoque atual**.",
        "Produtos com giro **≥ 2×** são classificados como **Alto** (boa rotatividade).",
        "Produtos com giro **1–2×** são **Médio**, e abaixo de **1×** são **Baixo**.",
        "Produtos com estoque mas **sem nenhuma venda** aparecem com giro zero.",
        "💡 Use esse relatório para identificar produtos que estão parados e podem precisar de promoção ou descontinuação."
      ]
    },
    {
      "id": "relatorios-visao-geral",
      "categoria": "relatorios",
      "titulo": "O que mostra a aba Visão Geral dos relatórios?",
      "tags": [
        "visão geral",
        "dashboard",
        "gráficos",
        "faturamento",
        "DRE",
        "orçamentos",
        "clientes",
        "resumo"
      ],
      "passos": [
        "Clique em **Relatórios** no menu lateral. A primeira aba que abre é a **Visão Geral**.",
        "O painel exibe 5 indicadores no topo: **Faturamento** e **Lucro Líquido** (últimos 12 meses), **Inadimplência** (valor em atraso), **Orçamentos em aberto** e **Ticket médio**.",
        "O gráfico de **Faturamento mensal** mostra as barras dos últimos 12 meses.",
        "O gráfico de **Situação dos Orçamentos** (donut) exibe a proporção entre abertos, aprovados, perdidos e expirados.",
        "O gráfico de **DRE — Receita vs Lucro** compara as linhas de receita e lucro líquido mês a mês.",
        "O painel de **Top 5 Clientes** mostra as barras horizontais dos clientes com maior faturamento no período.",
        "💡 Clique em qualquer gráfico para ir direto ao relatório detalhado correspondente."
      ]
    },
    {
      "id": "relatorios-vendas-rolling",
      "categoria": "relatorios",
      "titulo": "Como ver o faturamento dos últimos meses sem fixar um ano?",
      "tags": [
        "vendas por mês",
        "janela deslizante",
        "rolling",
        "12 meses",
        "período",
        "faturamento",
        "total"
      ],
      "passos": [
        "No menu **Relatórios**, expanda a categoria **Vendas** e clique em **Total de vendas por mês**.",
        "Por padrão o relatório abre no modo **Janela deslizante**: exibe os últimos N meses a partir de hoje, independente do ano.",
        "Use o seletor **12 / 24 / 36 / 48 / 60 meses** para ampliar ou reduzir a janela.",
        "O período exibido aparece no cabeçalho (ex: **Jan/25 – Jun/26**).",
        "Para ver um ano específico, clique em **Por ano** e use as setas para navegar entre os anos.",
        "💡 O modo **Janela deslizante** é ideal para acompanhar tendências de crescimento sem se prender ao início do ano fiscal."
      ]
    },
    {
      "id": "dashboard-orcamentos-topitens",
      "categoria": "relatorios",
      "titulo": "Como usar os gráficos de orçamentos e top itens no painel inicial?",
      "tags": [
        "painel",
        "dashboard",
        "orçamentos",
        "top itens",
        "donut",
        "mensal",
        "anual",
        "mais vendido"
      ],
      "passos": [
        "No **Painel inicial**, a segunda linha exibe quatro cards com gráficos em formato donut.",
        "O card **Top Itens — 12 meses** mostra os 5 produtos mais vendidos em quantidade nos últimos 12 meses. Passe o mouse sobre o ponto colorido na legenda para ver o código do produto. Clique em um segmento do donut para ver nome, quantidade e código no centro.",
        "O card **Orçamentos** exibe a distribuição de status (Abertos, Aprovados, Perdidos, Expirados).",
        "Use os botões **Mês / Ano** no card de Orçamentos para alternar entre visão mensal e visão anual.",
        "No modo **Mês**, use as setas **‹ ›** para navegar entre os meses e ver a distribuição de cada período.",
        "No modo **Ano**, as setas navegam entre os anos.",
        "💡 Os dados do Top Itens são atualizados automaticamente a cada acesso ao painel — nenhuma ação é necessária."
      ]
    },
    {
      "id": "config-meu-contrato-cliente",
      "categoria": "configuracoes",
      "titulo": "Como vejo e assino o contrato da minha empresa?",
      "tags": [
        "meu contrato",
        "assinar contrato",
        "certificado digital",
        "contrato assinado",
        "baixar contrato",
        "locatária"
      ],
      "passos": [
        "No menu lateral, acesse **Configurações → Meu Contrato**.",
        "Assim que a Komtec gerar o contrato da sua empresa, ele já aparece aqui pra leitura — não precisa esperar mais nada.",
        "Leia o contrato no visualizador de PDF na tela.",
        "Clique em **Assinar Contrato com Certificado Digital** — o sistema usa automaticamente o certificado A1 já configurado na sua conta (o mesmo usado para emitir NF-e).",
        "✅ Assinado, o acesso da empresa ao sistema é liberado na hora.",
        "💡 **Meu Contrato** continua disponível mesmo depois de assinado — volte aqui a qualquer momento pra baixar o PDF com a assinatura de ambas as partes."
      ]
    },
    {
      "id": "config-aviso",
      "categoria": "configuracoes",
      "titulo": "Como criar um aviso ou comunicado para todos os usuários?",
      "tags": [
        "aviso",
        "comunicado",
        "banner",
        "notificação",
        "alerta sistema",
        "super admin"
      ],
      "passos": [
        "⚠️ Apenas o **Super Admin** pode criar avisos do sistema.",
        "No menu lateral, acesse **Configurações → Avisos**.",
        "Clique em **Novo Aviso**.",
        "Preencha o **Título** e o **Texto** do aviso.",
        "Defina a **Data de Início** e a **Data de Expiração** — o aviso aparece automaticamente para todos os usuários logados durante esse período.",
        "💡 O aviso é exibido como um banner no topo da tela para todos os tenants. Use para comunicar manutenções, novidades ou alertas importantes.",
        "✅ Clique em **Salvar**. O banner ficará visível imediatamente."
      ]
    },
    {
      "id": "transportadoras-nova",
      "categoria": "fornecedores",
      "titulo": "Como cadastrar uma transportadora?",
      "tags": [
        "transportadora",
        "frete",
        "entrega",
        "carrier",
        "logística",
        "CNPJ transportadora"
      ],
      "passos": [
        "No menu lateral, acesse **Fornecedores → Transportadoras** (ou busque por 'Transportadoras' no menu).",
        "Clique em **Nova Transportadora**.",
        "Preencha o **CNPJ** da transportadora — o sistema tentará buscar os dados automaticamente pela Receita Federal.",
        "Informe a **Razão Social**, **Nome Fantasia**, **IE** (Inscrição Estadual) e **Endereço**.",
        "Adicione os dados de **Contato**: nome, telefone e e-mail.",
        "✅ Clique em **Salvar**.",
        "💡 Após cadastrada, a transportadora ficará disponível para seleção na emissão de notas fiscais (campo **Transportador** na NF-e)."
      ]
    },
    {
      "id": "financeiro-boleto",
      "categoria": "financeiro",
      "titulo": "Como emitir e acompanhar boletos bancários?",
      "tags": [
        "boleto",
        "cobrança",
        "banco",
        "Inter",
        "Asaas",
        "Sicoob",
        "emitir boleto",
        "segunda via",
        "vencimento boleto"
      ],
      "passos": [
        "No menu lateral, acesse **Financeiro → Boletos emitidos**.",
        "Os boletos são gerados automaticamente ao faturar uma venda com condição a prazo — se a conta bancária estiver configurada para emissão de boletos.",
        "Para emitir um boleto avulso, clique em **Novo Boleto**, selecione o **Título** (conta a receber) e confirme.",
        "💡 O sistema suporta emissão via **Banco Inter**, **Asaas** ou **Sicoob** (API). Configure o **Provedor** e as credenciais na conta bancária em **Configurações → Minha Empresa → Contas Bancárias**.",
        "Para baixar o PDF do boleto, clique no ícone de download na linha do boleto desejado.",
        "⚠️ Boletos emitidos têm validade. Se o cliente não pagar até o vencimento, será necessário emitir uma segunda via com nova data.",
        "✅ Para boletos emitidos via **Asaas**, a baixa é automática: assim que o cliente paga, o sistema recebe a confirmação direto do banco/emissor e já marca a parcela como paga no Financeiro — sem precisar conferir e dar baixa manualmente."
      ]
    },
    {
      "id": "financeiro-regua-cobranca",
      "categoria": "financeiro",
      "titulo": "Como funciona a cobrança automática de boletos vencidos?",
      "tags": [
        "régua de cobrança",
        "cobrança",
        "boleto vencido",
        "lembrete",
        "aviso",
        "inadimplência",
        "negativar",
        "Serasa",
        "protesto",
        "cartório"
      ],
      "passos": [
        "Em **Configurações → Minha Empresa → Contas Bancárias**, abra a conta que emite os boletos e ative a **Régua de Cobrança**.",
        "Defina os prazos, em dias de atraso: **Lembrete** (e-mail amigável), **Aviso** (e-mail mais firme) e **Negativação** (quando o boleto fica disponível para escalonar).",
        "💡 O lembrete e o aviso são enviados por e-mail **automaticamente** para o cliente, uma vez por dia, sem precisar de nenhuma ação sua.",
        "Passado o prazo de negativação, o boleto aparece em **Financeiro → Régua de Cobrança**.",
        "Nessa tela, para cada boleto você escolhe: **Negativar (Serasa)** — registra a dívida nos órgãos de proteção ao crédito — ou **Protestar** — envia o título a protesto em cartório.",
        "⚠️ Negativar e protestar têm custo e consequência real para o cliente, por isso **nunca são automáticos** — sempre exigem a sua confirmação nesta tela.",
        "Se o cliente pagar ou negociar antes, use o **X** para tirar o boleto da fila.",
        "✅ Negativação e protesto são feitos pelo provedor Asaas — a conta bancária precisa estar com o provedor **Asaas** configurado (o Banco Inter não oferece esse serviço por integração)."
      ]
    },
    {
      "id": "financeiro-consulta-serasa",
      "categoria": "financeiro",
      "titulo": "Como consultar o Serasa de um cliente?",
      "tags": [
        "Serasa",
        "consulta",
        "crédito",
        "score",
        "análise de crédito",
        "restrição",
        "relatório",
        "cliente"
      ],
      "passos": [
        "Abra o cadastro do cliente e clique em **Histórico do Cliente**.",
        "Na seção **Consulta Serasa**, clique em **Consultar Serasa**.",
        "⚠️ Cada consulta tem um custo cobrado pelo Asaas — por isso é uma ação manual, feita só quando você decide.",
        "O relatório fica salvo no histórico do cliente; use **Baixar relatório** para ver o PDF completo a qualquer momento.",
        "✅ A consulta usa a conta bancária com provedor **Asaas** configurado. Quem pode consultar são os perfis que gerenciam crédito (Administrador e Financeiro)."
      ]
    },
    {
      "id": "produtos-kit",
      "categoria": "produtos",
      "titulo": "Como criar um kit de produtos?",
      "tags": [
        "kit",
        "composição",
        "produto composto",
        "bundle",
        "conjunto",
        "kit dentro de kit"
      ],
      "passos": [
        "No menu lateral, acesse **Estoque → Produtos**.",
        "Clique em **Novo Produto** ou abra um produto existente para editar.",
        "No campo **Formato**, selecione **Kit**.",
        "✅ Uma seção de composição aparecerá abaixo do formulário.",
        "Clique em **Adicionar item ao kit** e busque o produto componente pelo nome ou código.",
        "Informe a **Quantidade** de cada componente dentro do kit.",
        "💡 Kits podem conter outros kits — o sistema suporta composição hierárquica.",
        "⚠️ O kit não tem estoque próprio — ao vender um kit, o sistema deduz o estoque de cada componente individualmente.",
        "✅ Salve o produto. Ao incluir o kit em um orçamento, os componentes são listados automaticamente."
      ]
    },
    {
      "id": "produtos-conversao-cx",
      "categoria": "produtos",
      "titulo": "Como configurar a conversão de caixa em unidades (CX → UN)?",
      "tags": [
        "caixa",
        "unidade",
        "conversão",
        "cx",
        "fator conversão",
        "embalagem",
        "unidades por caixa"
      ],
      "passos": [
        "No menu lateral, acesse **Estoque → Produtos** e abra o produto desejado para editar.",
        "No campo **Unidade**, selecione **CX** (ou a unidade de embalagem usada pelo fornecedor).",
        "No campo **Unidades por embalagem (CX→UN)**, informe quantas unidades existem em cada caixa. Ex: 1 CX = 100 UN → informe **100**.",
        "✅ Salve o produto.",
        "💡 Na próxima importação de NF de compra desse produto, o sistema detectará automaticamente a conversão e mostrará o badge **📦 X CX → Y UN** para confirmação.",
        "⚠️ Se deixar o valor em **1**, nenhuma conversão será aplicada — o estoque será lançado na mesma unidade da NF."
      ]
    },
    {
      "id": "compras-cx-unidades",
      "categoria": "compras",
      "titulo": "Como o sistema converte caixas em unidades ao importar uma NF?",
      "tags": [
        "caixa",
        "cx",
        "conversão",
        "unidades",
        "importação nf",
        "xml caixa",
        "estoque unidades"
      ],
      "passos": [
        "Ao importar o XML de uma NF de compra, o sistema lê a **unidade comercial** (campo uCom) de cada item.",
        "Se a unidade for CX, CXA, PCT, FD ou similar, e o produto tiver **Unidades por embalagem** configurado (maior que 1), o sistema calcula automaticamente: **quantidade em estoque = qtd. de caixas × unidades por caixa**.",
        "Na tela de revisão da importação, cada item com conversão detectada exibe um badge azul: **📦 10 CX → 1.000 UN**.",
        "Clique no badge para **ativar ou desativar** a conversão por item.",
        "💡 O fator de conversão também é detectado automaticamente do próprio XML da NF (campo qTrib ÷ qCom). Se diferente do cadastrado no produto, o valor do XML prevalece.",
        "⚠️ O valor unitário é ajustado automaticamente: se 1 CX custa R$ 100 e tem 100 UN, o custo unitário fica R$ 1,00 por UN no estoque.",
        "✅ Ao confirmar a importação, o estoque é lançado já em unidades convertidas."
      ]
    },
    {
      "id": "importacao-cotacao-fornecedor",
      "categoria": "importacao",
      "titulo": "Como importar uma cotação enviada por um fornecedor?",
      "tags": [
        "cotação",
        "fornecedor",
        "lista de preços",
        "importar cotação",
        "planilha fornecedor",
        "preço fornecedor"
      ],
      "passos": [
        "No menu lateral, acesse **Importação → Cotação de Fornecedor** (ou busque 'Importar Cotação').",
        "Clique em **Importar arquivo** e selecione o arquivo enviado pelo fornecedor (PDF de catálogo ou lista de preços).",
        "O sistema usará **OCR** para reconhecer os itens automaticamente.",
        "Revise os itens reconhecidos: código, descrição e preço. Corrija eventuais erros de leitura.",
        "Para cada item, o sistema tentará vincular ao produto cadastrado no seu estoque pelo código.",
        "💡 Itens não vinculados podem ser associados manualmente buscando pelo nome ou código interno.",
        "✅ Clique em **Confirmar** para salvar os preços atualizados nos produtos vinculados."
      ]
    },
    {
      "id": "importacao-outros-sistemas",
      "categoria": "importacao",
      "titulo": "Como migrar dados de outro sistema de gestão para o ERP?",
      "tags": [
        "migração",
        "outro sistema",
        "erp anterior",
        "transferir dados",
        "importar sistema",
        "conta azul",
        "bling",
        "omie",
        "totvs"
      ],
      "passos": [
        "No menu lateral, acesse **Migração** e escolha a origem dos dados.",
        "Exporte os dados do seu sistema atual: clientes, produtos e notas fiscais (consulte a documentação do sistema de origem).",
        "Na tela de migração, siga os passos guiados: importe na ordem **Clientes → Produtos → NF-e**.",
        "O sistema faz o de-para automático entre os campos do sistema de origem e o formato do ERP.",
        "⚠️ Revise os itens com alerta antes de confirmar — podem existir clientes duplicados ou produtos sem NCM.",
        "💡 A migração pode ser feita por etapas — não precisa fazer tudo de uma vez.",
        "✅ Após confirmar cada etapa, os dados ficam disponíveis no sistema imediatamente."
      ]
    },
    {
      "id": "importacao-planilha",
      "categoria": "importacao",
      "titulo": "Como importar dados por planilha?",
      "tags": [
        "planilha",
        "excel",
        "csv",
        "importar excel",
        "importar csv",
        "dados em massa"
      ],
      "passos": [
        "No menu lateral, acesse **Migração → Importar Planilhas**.",
        "Escolha o tipo de dado a importar: **Produtos**, **Clientes** ou **Fornecedores**.",
        "Baixe o **modelo de planilha** clicando em **Baixar modelo CSV** — use-o para garantir o formato correto.",
        "Preencha a planilha com seus dados e salve em formato CSV (separado por vírgulas).",
        "Clique em **Selecionar arquivo** e escolha o CSV preenchido.",
        "O sistema fará a validação e mostrará um preview dos dados antes de confirmar.",
        "⚠️ Campos obrigatórios como CNPJ/CPF e nome devem estar preenchidos em todas as linhas.",
        "✅ Clique em **Confirmar importação** para salvar os dados."
      ]
    },
    {
      "id": "importacao-historico-nfe",
      "categoria": "importacao",
      "titulo": "Como importar o histórico de notas fiscais antigas?",
      "tags": [
        "histórico nfe",
        "notas antigas",
        "importar notas",
        "xml nfe",
        "histórico fiscal",
        "notas anteriores"
      ],
      "passos": [
        "No menu lateral, acesse **Migração → Histórico de NF-e**.",
        "Clique em **Importar XML** e selecione um ou mais arquivos XML de NF-e emitidas anteriormente.",
        "O sistema importará as notas como registros históricos — elas **não serão retransmitidas** ao SEFAZ.",
        "💡 Use para ter o histórico fiscal completo de notas emitidas em outros sistemas.",
        "As notas importadas ficam disponíveis para consulta em **Fiscal → Notas Fiscais** com status **Histórico**.",
        "⚠️ Apenas XMLs de NF-e autorizadas pelo SEFAZ são aceitos. XMLs de homologação ou canceladas são ignorados.",
        "✅ Após importar, as notas aparecem na listagem e podem ser usadas para consulta e geração de relatórios."
      ]
    },
    {
      "id": "vendas-desconto",
      "categoria": "vendas",
      "titulo": "Como aplicar descontos em orçamentos e vendas?",
      "tags": [
        "desconto",
        "abatimento",
        "preço especial",
        "percentual",
        "valor desconto",
        "limite desconto"
      ],
      "passos": [
        "Ao criar ou editar um orçamento, role até a seção **Resumo Financeiro**.",
        "No campo **Desconto**, escolha o tipo: **Percentual** (ex: 10%) ou **Valor fixo** (ex: R$ 50,00).",
        "Informe o valor do desconto e pressione Enter — o total é recalculado automaticamente.",
        "⚠️ Cada perfil de usuário tem um **limite de desconto**: Vendedor pode dar até 5%, Gerente/Financeiro até 30%, Administrador sem limite.",
        "Se o desconto exceder seu limite, o sistema bloqueará o salvamento e orientará a solicitar aprovação ao superior.",
        "💡 Descontos podem ser aplicados também **por item** — clique no ícone de etiqueta (🏷️) ao lado do item para definir o desconto individual.",
        "✅ O desconto aplicado aparece no PDF do orçamento e na nota fiscal gerada."
      ]
    },
    {
      "id": "vendas-preco-promocional",
      "categoria": "vendas",
      "titulo": "Como funcionam os preços promocionais para o vendedor?",
      "tags": [
        "promoção",
        "preço promocional",
        "desconto produto",
        "badge promoção",
        "off",
        "vendedor promoção"
      ],
      "passos": [
        "Quando um produto tem uma **promoção ativa** (criada em Estoque → Promoções), ele exibe automaticamente um badge **X% OFF** no orçamento.",
        "O preço promocional aparece como sugestão abaixo do campo de valor: clique nele para aplicar o preço com desconto.",
        "⚠️ Quando um item está em promoção, o campo de preço é **bloqueado** para Vendedores — o desconto já foi definido pelo gestor.",
        "Se você for **Gerente** e precisar alterar o preço de um item em promoção, clique no cadeado 🔒 e informe a senha do Administrador para autorizar a alteração.",
        "💡 O total do orçamento mostra a economia potencial caso todos os preços promocionais sejam aplicados.",
        "✅ O preço promocional é válido durante o período da promoção e visível para todos os usuários que acessam o orçamento."
      ]
    },
    {
      "id": "servicos-tecnico-cadastro",
      "categoria": "servicos",
      "titulo": "Como cadastrar um técnico?",
      "tags": [
        "técnico",
        "cadastro",
        "serviços",
        "manutenção",
        "campo",
        "usuário",
        "acesso",
        "login"
      ],
      "passos": [
        "No menu lateral, acesse **Serviços → Técnicos** e clique em **Novo Técnico**.",
        "No campo **Pessoa**, digite o nome para buscar uma pessoa já cadastrada no sistema. O técnico deve ser uma pessoa cadastrada.",
        "💡 O número de registro do técnico é o ID da pessoa no sistema — use-o como referência nos documentos.",
        "Preencha a **Especialidade** (ex: Manutenção hidráulica, Eletricista).",
        "No campo **Usuário do sistema**, selecione o login que esse técnico usará para acessar o aplicativo. Sem esse vínculo, o técnico não consegue ver as OSs atribuídas a ele.",
        "⚠️ Só aparecem no campo usuário as contas com perfil **Técnico**. Se o usuário não aparecer, acesse **Configurações → Usuários**, edite o usuário e altere o perfil para **Técnico**.",
        "✅ Clique em **Salvar**. Após salvar, acesse **Veículos** para vincular um veículo ao técnico."
      ]
    },
    {
      "id": "servicos-tecnico-acesso",
      "categoria": "servicos",
      "titulo": "Por que o técnico não consegue ver as ordens de serviço no sistema?",
      "tags": [
        "técnico",
        "acesso",
        "login",
        "OS",
        "não aparece",
        "vazio",
        "usuário",
        "vincular",
        "perfil",
        "ROLE_EMPRESA_TECNICO"
      ],
      "passos": [
        "Para um técnico ver as OSs atribuídas a ele, são necessários **3 passos** — todos obrigatórios:",
        "**Passo 1 — Criar o usuário:** acesse **Configurações → Usuários**, clique em **Novo Usuário**, preencha nome e e-mail e selecione o perfil **Técnico**. Defina uma senha e salve.",
        "**Passo 2 — Cadastrar o técnico:** acesse **Serviços → Técnicos**, clique em **Novo Técnico** e preencha a Pessoa e a Especialidade. Salve.",
        "**Passo 3 — Vincular os dois:** ainda em Serviços → Técnicos, edite o técnico recém-criado. No campo **Usuário do sistema**, selecione o usuário criado no Passo 1. Salve.",
        "⚠️ Sem o Passo 3, o sistema não sabe qual login pertence a qual técnico — a tela de OSs aparecerá vazia mesmo que existam OSs abertas para ele.",
        "💡 Se o técnico já existia no cadastro mas não aparece as OSs, provavelmente falta apenas o Passo 3: edite o técnico e selecione o usuário.",
        "✅ Após o vínculo, o técnico precisa fazer logout e login novamente para que as OSs apareçam."
      ]
    },
    {
      "id": "servicos-admin-tecnico",
      "categoria": "servicos",
      "titulo": "O dono da empresa também é o técnico de campo — dá pra usar um usuário só?",
      "tags": [
        "técnico",
        "admin",
        "administrador",
        "dois usuários",
        "um usuário só",
        "único usuário",
        "iniciar atendimento",
        "concluir OS",
        "assinatura",
        "super admin"
      ],
      "passos": [
        "Sim. Quando o próprio administrador da empresa também atende as ordens de serviço em campo, não é mais necessário criar um segundo login só para isso.",
        "⚠️ Esse recurso precisa ser liberado pelo **Super Admin do sistema** — a empresa não consegue ativá-lo sozinha. Entre em contato pedindo para habilitar a opção **Admin também é o técnico**.",
        "Depois de liberado, cadastre normalmente o administrador como técnico: acesse **Serviços → Técnicos → Novo Técnico** e vincule a **Pessoa** correspondente a ele. Não é preciso preencher o campo **Usuário do sistema** nesse caso.",
        "Ao criar ou abrir uma OS, selecione esse técnico no campo **Técnico responsável**, normalmente.",
        "💡 Com o recurso ativo, o mesmo login do administrador passa a mostrar também os botões de execução em campo (Iniciar Atendimento, registrar períodos e trechos, Concluir OS com assinatura), além das telas administrativas de sempre.",
        "✅ Isso elimina a necessidade de alternar entre dois usuários (admin e técnico) para atender um cliente."
      ]
    },
    {
      "id": "servicos-veiculo-cadastro",
      "categoria": "servicos",
      "titulo": "Como cadastrar um veículo e suas manutenções periódicas?",
      "tags": [
        "veículo",
        "manutenção",
        "periódica",
        "odômetro",
        "fabricante",
        "manual"
      ],
      "passos": [
        "No menu lateral, acesse **Serviços → Veículos** e clique em **Novo Veículo**.",
        "Selecione o **Técnico responsável** — cada veículo pertence a um único técnico.",
        "Preencha os dados: **Placa**, **Modelo**, **Marca**, **Combustível** e **Odômetro atual** (km).",
        "Clique na aba **Manutenções Periódicas** para cadastrar o plano de manutenção conforme o manual do fabricante.",
        "Para cada manutenção, selecione o **Tipo** (ex: Troca de óleo do motor), informe o intervalo em km e/ou dias, e a data e km da última execução.",
        "💡 O sistema calcula automaticamente o km e a data da próxima manutenção com base no intervalo e na última execução informada.",
        "⚠️ Se o veículo for utilitário, marque a opção **Utilitário** — isso diferencia os veículos de trabalho dos de passeio.",
        "✅ Clique em **Salvar** para concluir o cadastro."
      ]
    },
    {
      "id": "servicos-veiculo-lancamento-avulso",
      "categoria": "servicos",
      "titulo": "Como lançar km e abastecimento do veículo sem abrir uma OS?",
      "tags": [
        "km avulso",
        "abastecimento avulso",
        "combustível",
        "sem OS",
        "bancada",
        "odômetro",
        "fora de OS",
        "veículo"
      ],
      "passos": [
        "💡 Use esse lançamento quando o técnico não tem uma Ordem de Serviço aberta (ex: dias em bancada) mas mesmo assim rodou pela cidade ou abasteceu o carro da empresa.",
        "Acesse **Serviços → Veículos** e abra o veículo desejado.",
        "Na aba **Km Rodado**, clique em **Novo lançamento de km** e preencha data, origem, destino e odômetro de saída/chegada.",
        "Na aba **Abastecimentos**, clique em **Novo abastecimento avulso** e preencha data, combustível, litros, preço por litro e o km do odômetro no momento do abastecimento.",
        "✅ O odômetro atual do veículo é atualizado automaticamente sempre que um km maior é informado.",
        "⚠️ Esses lançamentos são só para uso interno da empresa (o carro é da empresa) — não aparecem em nenhuma OS nem são cobrados de cliente.",
        "Lançamentos feitos dentro de uma OS continuam aparecendo na mesma lista, marcados como **OS** em vez de **Avulso**; só os avulsos podem ser editados ou excluídos por ali."
      ]
    },
    {
      "id": "servicos-custo-real-os",
      "categoria": "servicos",
      "titulo": "Como saber se uma Ordem de Serviço deu lucro ou prejuízo?",
      "tags": [
        "custo real",
        "margem",
        "lucro",
        "prejuízo",
        "HT",
        "HV",
        "KM",
        "precificação",
        "quanto cobrar"
      ],
      "passos": [
        "💡 Antes de usar essa tela, cadastre os custos reais em **Minha Empresa → Serviços e Manutenção**: custo da hora do técnico, preço do combustível, consumo médio do veículo e (opcional) custo de manutenção por km.",
        "Abra a Ordem de Serviço concluída e clique no botão **Custo Real** no topo da tela.",
        "A tela mostra o custo de cada item — horas trabalhadas (HT), horas de deslocamento (HV), km rodado e outras despesas de viagem (hospedagem, refeição, pedágio) — comparado ao valor cobrado do cliente.",
        "✅ O custo do km usa o combustível realmente abastecido nessa OS quando existir; senão, é estimado pelo consumo médio e preço do combustível cadastrados.",
        "A **Margem** no final mostra se a OS deu lucro (verde) ou prejuízo (vermelho), em R$ e em %.",
        "⚠️ Se os custos não estiverem cadastrados na empresa, alguns valores aparecem como \"—\" em vez de um número inventado.",
        "💡 Use a **Calculadora de precificação** em Minha Empresa (mesma seção) para descobrir quanto cobrar de HT/HV/KM a partir dos seus custos reais e da margem que você quer ter."
      ]
    },
    {
      "id": "servicos-empresa-config",
      "categoria": "servicos",
      "titulo": "Como habilitar o módulo de serviços na empresa?",
      "tags": [
        "serviços",
        "módulo",
        "configuração",
        "O.S.",
        "ordem de serviço",
        "NF serviço",
        "inscrição municipal"
      ],
      "passos": [
        "Acesse **Minha Empresa** e clique em **Editar Dados**.",
        "Role até a seção **Serviços e Manutenção**.",
        "Informe a **Inscrição Municipal** — obrigatória para emitir Nota Fiscal de Serviços.",
        "Ative o campo **Emite NF de Serviços** se a empresa tiver permissão para isso.",
        "Escolha o **Modelo de atribuição de O.S.**: **Exclusiva** (a empresa designa um técnico específico) ou **Aberta** (qualquer técnico pode assumir a ordem).",
        "⚠️ Esta escolha define como todas as Ordens de Serviço serão atribuídas — não pode ser alterada depois sem contato com o suporte.",
        "✅ Clique em **Salvar** para ativar o módulo de serviços."
      ]
    },
    {
      "id": "servicos-painel-oficina-tv",
      "categoria": "servicos",
      "titulo": "Como colocar um painel de acompanhamento na TV da oficina?",
      "tags": [
        "painel",
        "TV",
        "monitor",
        "oficina",
        "acompanhamento",
        "status",
        "ordem de serviço",
        "veículos na oficina",
        "link público"
      ],
      "passos": [
        "Acesse **Minha Empresa** e role até a seção **Painel de Acompanhamento da Oficina (TV)**.",
        "💡 Essa seção só aparece se o módulo de **Serviços e Manutenção** já estiver habilitado.",
        "Clique em **Gerar link do painel**. O link é copiado automaticamente para a área de transferência.",
        "Abra esse link no navegador da Smart TV ou do computador conectado ao monitor da oficina.",
        "✅ O painel não pede login — pode deixar aberto o dia todo, ele atualiza sozinho a cada 30 segundos.",
        "O painel mostra os veículos/equipamentos em atendimento, status (em andamento, aguardando peças, aguardando aprovação, pronto para entrega), mecânico responsável e avisos de atraso.",
        "Para aparecer a **placa** e a **previsão de conclusão** na tela, preencha esses campos ao abrir ou editar a Ordem de Serviço.",
        "⚠️ Se precisar revogar o acesso (TV perdida, link vazado), clique em **Regenerar** — o link antigo para de funcionar na hora e um novo é copiado."
      ]
    },
    {
      "id": "os-criar",
      "categoria": "ordens-servico",
      "titulo": "Como criar uma Ordem de Serviço?",
      "tags": [
        "ordem de serviço",
        "OS",
        "criar",
        "nova",
        "abrir",
        "técnico",
        "equipamento"
      ],
      "passos": [
        "Acesse **Serviços → Ordens de serviço** no menu lateral.",
        "Clique em **Nova OS**.",
        "Selecione o **Técnico responsável** pelo atendimento.",
        "Informe a **Descrição do equipamento** — seja específico (modelo, chassi, número de série).",
        "Preencha o **Local de atendimento** e o **KM de saída** do veículo.",
        "Opcionalmente, vincule um **Cliente** à OS.",
        "Clique em **Criar OS**. A OS abre com status **Aberta**."
      ]
    },
    {
      "id": "os-numero-inicial",
      "categoria": "ordens-servico",
      "titulo": "Como definir de qual número as OS devem começar a contar?",
      "tags": [
        "número da OS",
        "numeração",
        "contador",
        "sequência",
        "continuar numeração",
        "migração de planilha"
      ],
      "passos": [
        "Peça para o Super Admin acessar **Configurações → Locatárias** e abrir a sua empresa (ou, se você for admin da empresa, acesse **Minha Empresa**).",
        "Localize o campo **Número inicial da OS** na seção Configuração de Numeração e Preços.",
        "Informe o próximo número a ser usado. Ex: se a última OS feita em outro sistema/planilha foi a 648, informe 649.",
        "Salve as alterações.",
        "⚠️ Só altere esse campo antes de continuar abrindo novas OS pelo sistema — mudar depois pode gerar números fora de ordem.",
        "✅ A próxima OS criada já sai com o número informado."
      ]
    },
    {
      "id": "os-concluir",
      "categoria": "ordens-servico",
      "titulo": "Como concluir uma Ordem de Serviço?",
      "tags": [
        "concluir",
        "fechar",
        "finalizar",
        "OS",
        "horas",
        "KM",
        "serviço executado"
      ],
      "passos": [
        "Abra a OS desejada em **Serviços → Ordens de serviço** e clique em **Editar**.",
        "Clique no botão verde **Concluir OS**.",
        "Descreva detalhadamente **o que foi executado** no campo obrigatório.",
        "Informe o **KM de retorno**, **horas trabalhadas** e **horas de deslocamento**.",
        "Use o campo **Observação interna** para registrar custos (combustível, pedágio, pernoite) — este campo não aparece no relatório do cliente.",
        "Clique em **Confirmar**. A OS passa para o status **Concluída**.",
        "💡 A empresa pode então gerar a fatura clicando em **Faturar** na lista de OS."
      ]
    },
    {
      "id": "os-reabertura",
      "categoria": "ordens-servico",
      "titulo": "Como solicitar a reabertura de uma OS concluída?",
      "tags": [
        "reabertura",
        "reabrir",
        "OS concluída",
        "corrigir",
        "reabrir"
      ],
      "passos": [
        "Abra a OS concluída em **Serviços → Ordens de serviço** e clique em **Editar**.",
        "Clique em **Solicitar Reabertura** e informe a justificativa.",
        "A OS passa para o status **Reabertura Solicitada** — o gerente ou admin receberá para aprovar.",
        "O responsável aprova clicando em **Aprovar Reabertura** na lista de OS.",
        "✅ A OS volta ao status **Aberta** e pode ser editada novamente."
      ]
    },
    {
      "id": "os-filha",
      "categoria": "ordens-servico",
      "titulo": "Como criar uma OS Vinculada (serviço de bancada, retorno, instalação)?",
      "tags": [
        "OS vinculada",
        "OS de retorno",
        "OS principal",
        "bancada",
        "retorno",
        "acompanhamento",
        "diagnóstico",
        "peça",
        "hierarquia",
        "segunda visita",
        "numeração"
      ],
      "passos": [
        "Abra a OS original (a 'principal') e clique em **OS Vinculada** — na listagem, esse botão fica no menu de ações (⋯); na tela de detalhe, fica ao lado de Editar.",
        "Uma nova OS será aberta já com os dados do cliente e do equipamento herdados (os serviços e peças começam do zero — não são copiados).",
        "Defina o **Tipo** da nova OS: **Instalação de Peça**, **Revisão** ou **Garantia**.",
        "Preencha os detalhes adicionais e salve normalmente.",
        "É possível vincular OS a partir de outra OS já vinculada, formando uma cadeia (ex.: principal → serviço de bancada → instalação) — até 99 vinculadas por OS principal.",
        "💡 A numeração mostra a família: uma OS terminando em 00 (ex.: OS 500) nunca teve vinculada; se existir OS 501, 502..., são vinculadas dessa OS 500.",
        "✅ A NFS-e é emitida sempre pela OS principal e soma automaticamente o valor de toda a cadeia vinculada — não é preciso faturar cada uma separadamente."
      ]
    },
    {
      "id": "os-pecas",
      "categoria": "ordens-servico",
      "titulo": "Como registrar peças identificadas em uma OS?",
      "tags": [
        "peças",
        "código de peça",
        "catálogo",
        "status peça",
        "identificada",
        "aguardando",
        "instalada"
      ],
      "passos": [
        "Abra a OS e clique na aba **Peças** (disponível somente após criar a OS).",
        "Preencha o **Código da peça**, a **Descrição** e a **Quantidade** e clique em **Adicionar Peça**.",
        "💡 Use o campo de código para registrar a referência do fabricante (ex: 6754-71-6130).",
        "Atualize o **Status** de cada peça conforme o andamento: Identificada → Aguardando Peça → Instalada.",
        "⚠️ Peças com status **Instalada** são incluídas no resumo enviado ao cliente para aprovação.",
        "✅ Após concluir a OS, as peças ficam visíveis no relatório enviado à empresa."
      ]
    },
    {
      "id": "os-aprovacao-cliente",
      "categoria": "ordens-servico",
      "titulo": "Como enviar o resumo para aprovação do cliente antes de faturar?",
      "tags": [
        "aprovação",
        "faturamento",
        "cliente",
        "aguardando aprovação",
        "horas",
        "km",
        "cobrança"
      ],
      "passos": [
        "Após concluir a OS, ela fica com status **Concluída**.",
        "Na lista de OS, clique nos três pontinhos e selecione **Enviar p/ Aprovação**.",
        "A OS passa para **Aguardando Aprovação** — neste momento a empresa prepara o resumo para o cliente (horas, KM, peças e valores).",
        "Quando o cliente aprovar a cobrança, clique em **Confirmar Aprovação** na lista.",
        "Com status **Aprovada**, o botão **Faturar** fica disponível.",
        "💡 É possível faturar diretamente de **Concluída** sem passar pela etapa de aprovação, se preferir."
      ]
    },
    {
      "id": "os-precificacao",
      "categoria": "ordens-servico",
      "titulo": "Como configurar os valores cobrados por hora e quilômetro?",
      "tags": [
        "preço",
        "hora trabalhada",
        "km",
        "hora viagem",
        "precificação",
        "campo",
        "configuração"
      ],
      "passos": [
        "Acesse **Minha Empresa** e role até a seção **Precificação de Serviços de Campo**.",
        "Preencha o **Valor hora trabalhada** — base de cálculo para todas as OS.",
        "Defina o **Valor por km rodado** para cobrar o deslocamento do técnico.",
        "Ative **Cobra hora de viagem separado** se o tempo de deslocamento tem tarifa diferente.",
        "Se ativado, preencha o **Valor hora viagem** — se vazio, usa o mesmo valor da hora trabalhada.",
        "Use o interruptor **Cobrar hora viajada do cliente** para decidir se o tempo de deslocamento entra ou não na conta do cliente.",
        "💡 Desativando esse interruptor, o tempo de deslocamento continua sendo registrado normalmente nos trechos de viagem — só não entra no valor cobrado do cliente. Assim você continua acompanhando o custo real de cada atendimento.",
        "✅ Esses valores ficam disponíveis para o técnico e a empresa montarem o resumo de cobrança da OS.",
        "⚠️ O sistema calcula o tempo de viagem descontando as pausas de almoço registradas nos trechos."
      ]
    },
    {
      "id": "os-cadastrar-marca-tipo-modelo",
      "categoria": "ordens-servico",
      "titulo": "A marca, o tipo ou o modelo do equipamento não está na lista — o que fazer?",
      "tags": [
        "marca",
        "modelo",
        "tipo de equipamento",
        "importado",
        "catálogo",
        "não encontrado",
        "adicionar marca"
      ],
      "passos": [
        "Na aba **Equipamento** da OS, abra o campo (Marca, Tipo ou Modelo) onde a informação não aparece.",
        "No final da lista, clique em **+ Adicionar nova marca...** (ou tipo/modelo, conforme o campo).",
        "Digite o nome e clique em **OK**.",
        "✅ O item fica salvo para a empresa e passa a aparecer na lista em qualquer OS futura — não precisa cadastrar de novo.",
        "💡 Útil para equipamentos importados ou marcas menos comuns que não estão na lista padrão do sistema.",
        "⚠️ Para adicionar um tipo é preciso já ter escolhido a marca; para adicionar um modelo é preciso já ter escolhido marca e tipo."
      ]
    },
    {
      "id": "os-servicos-valor-fixo",
      "categoria": "ordens-servico",
      "titulo": "Como lançar um serviço de valor fixo na OS (ex: revisar bomba hidráulica)?",
      "tags": [
        "serviço",
        "valor fixo",
        "revisão de bomba",
        "reparo de cilindro",
        "comando hidráulico",
        "catálogo de serviços",
        "peças e serviços",
        "faturamento",
        "demonstrativo"
      ],
      "passos": [
        "Abra a OS e vá na aba **Peças e Serviços**.",
        "Clique em **Adicionar item** e escolha o tipo **Serviço de valor fixo** (em vez de Peça).",
        "Digite o nome do serviço no campo de busca — se ele já estiver cadastrado no catálogo de produtos (tipo Serviço), selecione a sugestão e o valor vem preenchido automaticamente.",
        "💡 Não achou no catálogo? Digite o nome do serviço e informe o **Valor unitário** manualmente — não precisa estar cadastrado antes.",
        "Ajuste a quantidade se o mesmo serviço foi feito mais de uma vez (ex: revisar 2 comandos hidráulicos) e clique em **Adicionar**.",
        "✅ O serviço aparece na lista da OS com a etiqueta **SERVIÇO**, junto com as peças identificadas.",
        "✅ Esses serviços entram automaticamente no total da tela **Revisar Faturamento** e no **Demonstrativo de Valores** — sem precisar informar de novo em outro lugar."
      ]
    },
    {
      "id": "os-revisar-faturamento",
      "categoria": "ordens-servico",
      "titulo": "Como ajustar as horas, o km ou o valor da hora cobrados de uma OS antes de gerar o demonstrativo?",
      "tags": [
        "faturamento",
        "revisão",
        "hora viajada",
        "km",
        "cortesia",
        "desconto",
        "cobrança",
        "custo real",
        "demonstrativo",
        "nfs-e",
        "valor da hora",
        "valor hora trabalhada",
        "preço diferenciado",
        "cliente novo",
        "cliente antigo",
        "tabela de preço"
      ],
      "passos": [
        "Abra a OS já **Concluída** (ou Aguardando Aprovação/Aprovada) clicando sobre ela na lista.",
        "Clique no botão **Revisar Faturamento**.",
        "Veja, do lado esquerdo, os **valores reais** apurados pelos registros de campo — eles não podem ser alterados aqui e servem para você acompanhar o custo real do atendimento.",
        "No bloco **Valores a cobrar do cliente**, ajuste as horas trabalhadas, horas de deslocamento ou km — por exemplo, zere a hora de deslocamento se quiser dar essa viagem de cortesia para o cliente.",
        "💡 Na coluna **Valor unitário** você pode alterar o **R$ por hora** (ou por km) só desta OS — útil quando o cliente tem um preço de hora combinado diferente do padrão da empresa (cliente antigo com um valor, cliente novo com outro). Aparece um link **redefinir** ao lado para voltar ao valor padrão. Deixar igual ao padrão não guarda nada — a OS volta a acompanhar o valor de **Minha Empresa**.",
        "Para dar desconto em um item específico, use o mini seletor **%**/**R$** logo abaixo da quantidade daquele item (horas trabalhadas, deslocamento ou km) e informe o valor.",
        "Para dar um desconto sobre o total do serviço em vez de item a item, use o bloco **Desconto geral (opcional)**, escolhendo **%** (percentual) ou **R$** (valor fixo).",
        "⚠️ Os dois tipos de desconto são excludentes: assim que você informa um desconto em algum item, o bloco de desconto geral fica bloqueado (e vice-versa). Zere os valores do que não quiser usar para liberar o outro.",
        "💡 Se a OS tiver **serviços de valor fixo** lançados na aba Peças e Serviços (ex: revisar bomba hidráulica), eles aparecem automaticamente nesta lista, já somados ao total — não precisam ser revisados aqui.",
        "Clique em **Salvar e voltar à OS**.",
        "✅ O valor revisado — já com o desconto aplicado — passa a ser usado tanto no Demonstrativo de Valores quanto na NFS-e gerada a partir dessa OS.",
        "💡 Se você não revisar, o sistema usa os valores reais automaticamente — e só some a hora de deslocamento se o interruptor **Cobrar hora viajada do cliente** (em Minha Empresa) estiver desativado."
      ]
    },
    {
      "id": "os-concluir-assinaturas",
      "categoria": "ordens-servico",
      "titulo": "Como funciona a assinatura digital ao concluir uma OS?",
      "tags": [
        "concluir",
        "assinatura",
        "celular",
        "técnico",
        "responsável pelo equipamento",
        "abastecimento",
        "obs interna",
        "observação interna",
        "sigilo",
        "valores",
        "cliente ausente",
        "cliente não quis assinar",
        "recusou assinar",
        "sem assinatura",
        "não presente"
      ],
      "passos": [
        "Na tela **Concluir OS** (acessada pelo técnico ao finalizar o atendimento), as informações ficam organizadas em 3 abas: **Relatório**, **Observações Internas** e **Assinaturas**.",
        "Preencha o **Relatório** normalmente (sintomas, causa, correção, pendências etc.) e, se precisar, anote custos/combustível/pedágio na aba **Observações Internas**.",
        "⚠️ A aba **Observações Internas** é só para a equipe da empresa — não aparece no relatório entregue ao cliente nem fica visível na aba de Assinaturas. As despesas de viagem com valores também não aparecem mais nesta tela — ficam só na tela **Despesas de Viagem**, separada. Assim é seguro entregar o celular/tablet para o cliente assinar sem mostrar valores internos.",
        "Na aba **Assinaturas**, o técnico assina primeiro em **Técnico Responsável**.",
        "Do lado do responsável pelo equipamento, escolha a **situação do cliente**: **Cliente assinou**, **Cliente não quis assinar** ou **Cliente não está presente**.",
        "Se escolher **Cliente assinou**, informe o **nome de quem está recebendo o serviço** e passe o aparelho para essa pessoa assinar — mesmo padrão usado no abastecimento de equipamentos (operador + responsável).",
        "✅ Se escolher **Cliente não quis assinar** ou **Cliente não está presente**, a OS pode ser concluída sem nome nem assinatura do cliente — o motivo fica registrado e aparece no relatório da OS no lugar da assinatura.",
        "⚠️ O técnico nunca deve assinar no lugar do cliente — para essas duas situações, é pra isso que servem as opções de recusa/ausência.",
        "💡 Se a OS for encerrada sem o cliente presente (ex: o próprio administrador atendeu e concluiu remotamente), dá para coletar a assinatura depois — veja o artigo sobre assinar a OS após o encerramento."
      ]
    },
    {
      "id": "os-assinar-depois",
      "categoria": "ordens-servico",
      "titulo": "Dá para assinar a OS depois que ela já foi encerrada?",
      "tags": [
        "assinatura",
        "depois",
        "encerrada",
        "concluída",
        "admin técnico",
        "corrigir assinatura",
        "assinar OS"
      ],
      "passos": [
        "Sim. Abra a OS já **Concluída** (ou Aguardando Aprovação/Aprovada/Faturada) e clique no botão **Assinar OS**.",
        "Essa tela mostra só os campos de assinatura (técnico e responsável pelo equipamento) — nenhum valor ou observação interna aparece ali.",
        "💡 Útil quando quem atendeu é o próprio administrador e encerrou a OS remotamente antes de conseguir coletar a assinatura presencialmente com o cliente.",
        "⚠️ Uma vez salva, cada assinatura fica travada nessa tela (o botão **Limpar** some) para evitar apagar por engano um registro já confirmado.",
        "✅ As assinaturas ficam sempre visíveis na tela da OS, para qualquer usuário que tenha acesso a ela."
      ]
    },
    {
      "id": "os-despesas-viagem-consulta",
      "categoria": "ordens-servico",
      "titulo": "Onde consultar as despesas de viagem de uma OS sem risco de o cliente ver os valores?",
      "tags": [
        "despesas",
        "viagem",
        "custos",
        "valores",
        "consulta",
        "somente leitura",
        "sigilo"
      ],
      "passos": [
        "Abra a OS e clique no botão **Despesas de Viagem** (visível apenas para administradores).",
        "A tela mostra, só para consulta, o resumo (km rodados, total de gastos, adiantamento recebido, resultado) e a lista de lançamentos com valores.",
        "⚠️ Essa tela não é usada durante o atendimento nem na hora da assinatura — nada aqui aparece na tela **Concluir OS** nem na tela **Assinar OS**, evitando que um funcionário do cliente veja os valores internos."
      ]
    },
    {
      "id": "os-pdf",
      "categoria": "ordens-servico",
      "titulo": "Como baixar o relatório de serviço em PDF?",
      "tags": [
        "pdf",
        "relatório",
        "download",
        "imprimir",
        "documento",
        "assinatura",
        "cliente"
      ],
      "passos": [
        "Abra a Ordem de Serviço clicando sobre ela na lista.",
        "Na tela de visualização, clique no botão **PDF** no canto superior direito.",
        "O arquivo será baixado automaticamente com o nome `OS_NÚMERO.pdf`.",
        "💡 O PDF inclui: cabeçalho da empresa com logotipo, dados do equipamento, relatório técnico, lista de peças, registros de trabalho e viagem, conclusão e área de assinaturas.",
        "⚠️ A área de assinaturas é para técnico responsável e responsável pelo equipamento — imprima, assine e entregue ao cliente."
      ]
    },
    {
      "id": "os-adiantamento-cliente",
      "categoria": "ordens-servico",
      "titulo": "Como registrar que o cliente pagou um adiantamento (sinal) antes do atendimento?",
      "tags": [
        "adiantamento",
        "sinal",
        "deslocamento",
        "pagamento antecipado",
        "abertura",
        "demonstrativo",
        "saldo a pagar",
        "desconto"
      ],
      "passos": [
        "Abra a OS (nova ou já existente, enquanto não estiver Faturada) e vá na aba **Dados**.",
        "No campo **O cliente pagou algum adiantamento?**, informe o valor recebido — por exemplo, o equivalente ao deslocamento de ida e volta, cobrado na hora de agendar o atendimento.",
        "⚠️ Não confunda com o campo **Adiantamento solicitado**, que é o dinheiro que a empresa adianta para o técnico cobrir despesas de viagem — são coisas diferentes.",
        "Deixe o campo em branco se o cliente não pagou nada adiantado.",
        "✅ O valor informado aparece automaticamente no **Demonstrativo de Valores** como dedução do total, mostrando o saldo que ainda falta o cliente pagar."
      ]
    },
    {
      "id": "os-demonstrativo-cliente",
      "categoria": "ordens-servico",
      "titulo": "Como enviar o valor de uma OS para o cliente, sem mostrar os valores para quem assina?",
      "tags": [
        "demonstrativo",
        "orçamento",
        "valores",
        "valor total",
        "preço",
        "mão de obra",
        "enviar e-mail",
        "cliente",
        "nfs-e",
        "confidencial",
        "assinatura",
        "adiantamento",
        "sinal",
        "saldo a pagar"
      ],
      "passos": [
        "Abra a OS já **Concluída** clicando sobre ela na lista.",
        "Clique no botão **Demonstrativo** para baixar um PDF separado do relatório, com os dados completos da empresa e do cliente, os valores unitários de mão de obra (hora trabalhada, hora de deslocamento e km rodado) configurados em Precificação de Serviços de Campo e o **valor total do serviço**.",
        "💡 Se um desconto foi configurado em **Revisar Faturamento** (geral ou nos itens), o PDF mostra o desconto aplicado — como uma nota ao lado do item, quando aplicado nos itens, ou como uma linha de subtotal/desconto, quando geral — e o total já com o desconto descontado.",
        "💡 Se um **adiantamento do cliente** foi informado na abertura da OS, o PDF mostra o total do serviço, o adiantamento recebido e o **saldo a pagar** já com essa dedução — veja o artigo sobre como registrar o adiantamento do cliente.",
        "💡 Esse demonstrativo não inclui peças — o custo delas é tratado separadamente.",
        "Para enviar direto ao cliente por e-mail, clique em **Enviar ao Cliente**. O sistema manda o relatório da OS e o demonstrativo juntos, como anexos, para o e-mail cadastrado do cliente.",
        "✅ Assim, quem assina a OS no local (geralmente um funcionário do cliente) não precisa ver os valores — só o responsável pela empresa, que recebe o demonstrativo por e-mail, fica ciente do valor antes da emissão da NFS-e.",
        "⚠️ O envio falha se o cliente não tiver e-mail cadastrado — edite o cadastro da pessoa para adicionar um e tente novamente."
      ]
    },
    {
      "id": "os-notificacao-email",
      "categoria": "ordens-servico",
      "titulo": "Como funciona a notificação de OS por e-mail para o técnico?",
      "tags": [
        "e-mail",
        "email",
        "notificação",
        "técnico",
        "avisar",
        "mensagem",
        "celular"
      ],
      "passos": [
        "💡 A notificação é automática: sempre que uma OS é atribuída, reaberta ou você clica em **Notificar** na tela da OS, o técnico recebe um e-mail com os dados principais.",
        "Não é preciso configurar nada além do cadastro normal do técnico — o e-mail usado é o mesmo já informado na ficha da **Pessoa** vinculada a ele.",
        "💡 A mensagem inclui: número da OS, cliente, local de atendimento, tipo, equipamento e instrução especial (se houver).",
        "⚠️ Se o técnico não tiver e-mail cadastrado, nenhuma notificação é enviada."
      ]
    },
    {
      "id": "os-demonstrativo-visualizar",
      "categoria": "ordens-servico",
      "titulo": "Como ver o demonstrativo de valores sem editar ou baixar o PDF?",
      "tags": [
        "demonstrativo",
        "ver",
        "visualizar",
        "valores",
        "conferir",
        "tela"
      ],
      "passos": [
        "Abra a OS concluída em **Serviços → Ordens de serviço** e clique em **Ver Demonstrativo**.",
        "A tela mostra os itens cobrados (horas trabalhadas, deslocamento, km rodado, serviços de valor fixo), descontos aplicados e o total — só pra conferir, sem risco de alterar nada sem querer.",
        "💡 Pra baixar o PDF, use o botão **PDF** ao lado. Pra ajustar os valores, use o botão **Editar** (disponível pra Admin/Gerente)."
      ]
    },
    {
      "id": "os-valor-fixo-item",
      "categoria": "ordens-servico",
      "titulo": "Como cobrar um valor combinado à parte, diferente do calculado por hora/km?",
      "tags": [
        "valor fixo",
        "preço diferenciado",
        "valor combinado",
        "desconto",
        "revisar faturamento"
      ],
      "passos": [
        "Abra a OS concluída e clique em **Revisar Faturamento**.",
        "No item desejado (horas trabalhadas, horas de deslocamento ou km rodado), clique no botão **R$ fixo**.",
        "Digite o valor final que será cobrado do cliente para aquele item — o sistema para de calcular por quantidade × valor unitário e usa exatamente o valor digitado.",
        "⚠️ Um item não pode ter valor fixo e desconto ao mesmo tempo — usar um desativa o outro.",
        "Clique em **Salvar**. O valor ajustado já aparece assim no demonstrativo e na NFS-e."
      ]
    },
    {
      "id": "os-gerar-venda",
      "categoria": "ordens-servico",
      "titulo": "Como gerar uma venda das peças usadas numa OS?",
      "tags": [
        "gerar venda",
        "peças",
        "vender peça",
        "faturar peça",
        "estoque"
      ],
      "passos": [
        "Conclua a OS normalmente. Na tela da OS, o botão **Gerar Venda** aparece quando existem peças identificadas com produto vinculado do estoque.",
        "Escolha a quantidade de cada peça a incluir, a forma de pagamento e os demais dados — é a mesma tela usada para gerar venda a partir de um orçamento.",
        "Confirme. A venda é criada, o estoque é baixado e o financeiro gera o título a receber automaticamente.",
        "💡 A mão de obra e os serviços de valor fixo continuam sendo cobrados pela NFS-e da OS, não entram nessa venda — são coisas separadas.",
        "⚠️ Só entram peças com o **produto vinculado** ao estoque. Se a peça foi adicionada só com código/descrição do catálogo e não achou o produto correspondente, ela não aparece pra vender — cadastre o produto ou ajuste o código."
      ]
    },
    {
      "id": "os-agrupar-nfse",
      "categoria": "ordens-servico",
      "titulo": "Como cobrar duas OSs do mesmo cliente numa única NFS-e?",
      "tags": [
        "agrupar OS",
        "juntar OS",
        "nota fiscal única",
        "NFS-e",
        "OS vinculada",
        "faturar junto"
      ],
      "passos": [
        "Se as OSs já forem criadas com essa intenção, use **OS Vinculada** ao abrir a primeira — a árvore inteira fatura junto na NFS-e da OS raiz.",
        "Se as OSs já existem separadas e você percebeu depois que precisa cobrar as duas juntas, abra a OS que vai virar a \"filha\" e clique em **Agrupar com OS**.",
        "Escolha, na lista, a outra OS do mesmo cliente que vai virar a \"mãe\".",
        "⚠️ Só é possível agrupar OSs do mesmo cliente e que ainda não foram faturadas.",
        "✅ A partir daí, gerar a NFS-e pela OS mãe cobra as duas OSs numa nota só."
      ]
    },
    {
      "id": "os-assinatura-tela-cheia",
      "categoria": "ordens-servico",
      "titulo": "Como assinar a OS com mais espaço quando não tem canetinha?",
      "tags": [
        "assinatura",
        "assinar",
        "expandir",
        "tela cheia",
        "rotacionar",
        "dedo",
        "canetinha"
      ],
      "passos": [
        "Na tela **Assinar OS** (ou ao concluir a OS/registrar abastecimento de equipamento), toque no campo de assinatura.",
        "O campo abre em tela cheia e tenta girar o aparelho pra paisagem automaticamente — dá bem mais espaço horizontal pra assinar com o dedo.",
        "⚠️ Alguns aparelhos (principalmente iPhone) não deixam o site girar a tela sozinho — nesse caso a área de assinatura continua grande, só sem girar; se preferir, gire o celular manualmente.",
        "Assine, confira e toque em **Usar assinatura** pra confirmar, ou **Cancelar** pra descartar e tentar de novo."
      ]
    },
    {
      "id": "catalogo-carrinho-os",
      "categoria": "catalogos",
      "titulo": "Como levar peças do catálogo direto para uma OS?",
      "tags": [
        "carrinho",
        "catálogo",
        "adicionar na OS",
        "copiar peça",
        "diagrama"
      ],
      "passos": [
        "No catálogo, clique no **+** ao lado de cada peça (no diagrama ou na lista) pra adicioná-la ao carrinho.",
        "Clique no ícone do carrinho pra ver os itens escolhidos e ajustar quantidades.",
        "No menu de ações do carrinho, escolha **Inserir na OS existente** (e selecione a OS em campo) ou **Criar OS com essas peças**.",
        "💡 Sempre que o código da peça bater com um produto já cadastrado no estoque, a peça já entra vinculada — é isso que depois permite gerar a venda dela pela OS."
      ]
    },
    {
      "id": "pneus-cadastrar",
      "categoria": "pneus",
      "titulo": "Como cadastrar um pneu novo no sistema?",
      "tags": [
        "pneu",
        "cadastro",
        "dimensão",
        "marca",
        "série",
        "fogo",
        "sulco",
        "OTR"
      ],
      "passos": [
        "Acesse **Equipamentos → Pneus** no menu lateral.",
        "Clique em **Novo Pneu**.",
        "Informe a **Dimensão** (ex: 29.5R25 ou 33:00 R 51) — campo obrigatório.",
        "Informe a **Marca** e o **Modelo** do pneu.",
        "Preencha o **Nº de Série / DOT** (código de rastreabilidade do fabricante).",
        "💡 O **Nº de Fogo** é o número gravado a quente no flanco do pneu pelo fabricante — muito usado em pneus OTR (mineração, construção). Registre-o se disponível.",
        "Informe a **Profundidade Inicial de Sulco** em mm (ex: 32 mm para pneu novo). Esse valor é a base para calcular o % de desgaste nas medições futuras.",
        "Informe o **Custo de Compra** em R$.",
        "Para pneus usados já adquiridos: informe as **Horas Rodadas Iniciais** (o sistema parte desse ponto).",
        "Clique em **Salvar**. O pneu entra com status **Novo** ou **Estoque** (se tiver horas).",
        "✅ Após o cadastro, use o ícone de ficha (📄) para acessar a Ficha de Acompanhamento completa do pneu."
      ]
    },
    {
      "id": "pneus-modelo-equipamento",
      "categoria": "pneus",
      "titulo": "Como definir se o equipamento usa pneus ou esteiras?",
      "tags": [
        "modelo",
        "equipamento",
        "rodagem",
        "pneu",
        "esteira",
        "damper",
        "caminhão",
        "empilhadeira",
        "articulado",
        "mapa"
      ],
      "passos": [
        "No cadastro (ou edição) do equipamento, escolha a **Rodagem**: Nenhuma, Pneu ou Esteira.",
        "Se escolher **Pneu**, selecione o **Modelo de Equipamento** (ex: DAMPER, CAMINHÃO 8X4, EMPILHADEIRA 4X2, ARTICULADO). O modelo já define quantas posições de pneu esse tipo de máquina tem.",
        "💡 Se o modelo que você precisa ainda não existe, clique em **+ Novo modelo**, informe o nome e marque as posições de pneu que ele usa (dianteiro, traseiro, 2º eixo, estepes).",
        "⚠️ Cada modelo é diferente: um DAMPER geralmente é 4x2 (sem estepe), enquanto caminhões rodoviários (caçamba, pipa, comboio) costumam ter estepe. Cadastre o modelo certo pra cada caso.",
        "Depois de salvo, o **Mapa de Pneus** do equipamento mostra só as posições cadastradas para aquele modelo — nada de posição sobrando que não existe na máquina.",
        "Se escolher **Esteira**, o modelo serve só para identificar o equipamento por enquanto — o controle de vida útil de esteiras ainda não está disponível no sistema."
      ]
    },
    {
      "id": "pneus-foto",
      "categoria": "pneus",
      "titulo": "Como adicionar fotos ao cadastro do pneu?",
      "tags": [
        "foto",
        "fotos",
        "imagem",
        "ícone",
        "upload",
        "cadastro",
        "galeria"
      ],
      "passos": [
        "Acesse **Equipamentos → Pneus**, clique em **Novo Pneu** ou no botão **Editar** de um pneu existente (inclusive um que já esteja instalado num equipamento — o botão fica na aba **Em Equipamentos** ou na própria Ficha do Pneu).",
        "No campo **Fotos do Pneu**, clique em **Adicionar foto** e escolha uma imagem (até 4MB). Repita para adicionar até **3 fotos**.",
        "💡 As fotos são opcionais. Se você não adicionar nenhuma, o sistema continua mostrando o ícone genérico de pneu no Mapa de Pneus e na tela do equipamento.",
        "Para remover uma foto, clique no **×** no canto da miniatura."
      ]
    },
    {
      "id": "pneus-instalar",
      "categoria": "pneus",
      "titulo": "Como instalar um pneu em um equipamento?",
      "tags": [
        "pneu",
        "instalar",
        "posição",
        "mapa",
        "equipamento",
        "roda",
        "eixo",
        "requisição",
        "almoxarifado"
      ],
      "passos": [
        "Acesse **Equipamentos**, clique no equipamento desejado e depois em **Pneus** (botão no cabeçalho).",
        "A tela exibe o **Mapa de Pneus** apenas com as posições cadastradas para o **Modelo de Equipamento** escolhido (ex: DAMPER mostra 4 posições, Caminhão 8x4 mostra 10, e assim por diante).",
        "💡 Se o equipamento ainda não tem um Modelo de Equipamento definido, o mapa mostra as 12 posições padrão. Edite o equipamento e escolha o modelo para ver só as posições reais dele.",
        "⚠️ A instalação não é mais direta: clique em **Solicitar Pneu** na posição vaga — isso abre uma requisição para o Almoxarifado. Veja o artigo \"Como funciona a requisição de pneu?\" para o passo a passo completo.",
        "✅ Depois que o Almoxarifado libera o pneu e a borracharia monta fisicamente, volte no mapa e clique em **Confirmar Instalação** para o sistema registrar o horímetro e mudar o status do pneu para **Em uso**."
      ]
    },
    {
      "id": "pneus-requisicao",
      "categoria": "pneus",
      "titulo": "Como funciona a requisição de pneu?",
      "tags": [
        "requisição",
        "solicitação",
        "almoxarifado",
        "manutenção",
        "estoque",
        "liberar",
        "borracharia",
        "controle"
      ],
      "passos": [
        "A instalação de pneu segue um fluxo de controle em 3 passos, do jeito que funciona num almoxarifado de verdade.",
        "1️⃣ **Manutenção solicita**: no Mapa de Pneus do equipamento, clique em **Solicitar Pneu** na posição vaga. Informe a dimensão desejada (opcional) e seu nome.",
        "2️⃣ **Almoxarifado libera**: na tela **Equipamentos → Pneus**, aba **Solicitações**, quem tem acesso ao estoque escolhe o pneu físico disponível e clica em **Liberar**.",
        "🔧 A peça liberada é entregue para a borracharia fazer a montagem física no equipamento — esse passo não é registrado no sistema.",
        "3️⃣ **Manutenção confirma**: depois de montado, a Manutenção confere os dados do pneu e clica em **Confirmar Instalação** (pelo Mapa de Pneus ou pela aba Solicitações) — só então o pneu aparece como instalado.",
        "💡 A aba **Solicitações** mostra um contador com as requisições pendentes (aguardando Almoxarifado ou aguardando confirmação de instalação).",
        "⚠️ Uma requisição pode ser **cancelada** a qualquer momento antes de ser instalada, tanto por quem solicitou quanto pelo Almoxarifado."
      ]
    },
    {
      "id": "pneus-relatorio",
      "categoria": "pneus",
      "titulo": "Como ver o relatório com o histórico de todos os pneus?",
      "tags": [
        "relatório",
        "histórico",
        "pneu",
        "movimentação",
        "csv",
        "pdf",
        "todos os equipamentos"
      ],
      "passos": [
        "Acesse **Equipamentos → Relatórios** e clique na aba **Pneus**.",
        "Filtre por **Equipamento** (opcional — deixe em branco para ver todos), **Posição** (opcional) e o **período** desejado.",
        "Clique em **Aplicar** para ver a lista de todas as instalações e remoções de pneu no período, com data, situação, posição, dimensão do pneu, km/h rodados, motivo da remoção e responsável.",
        "💡 O histórico de um pneu específico (todas as vezes que ele já foi instalado/removido, mesmo em equipamentos diferentes) continua disponível na **Ficha de Acompanhamento** daquele pneu — este relatório é a visão de todos os pneus juntos.",
        "Use os botões **CSV** ou **PDF** para exportar a lista filtrada."
      ]
    },
    {
      "id": "pneus-remover",
      "categoria": "pneus",
      "titulo": "Como registrar a retirada de um pneu?",
      "tags": [
        "pneu",
        "remover",
        "retirada",
        "rodízio",
        "recapagem",
        "descarte",
        "conserto"
      ],
      "passos": [
        "Acesse o **Mapa de Pneus** do equipamento (botão **Pneus** na tela do equipamento).",
        "Clique em **Remover** na posição do pneu desejado.",
        "O sistema mostra o preview de **horas a acumular** (diferença entre medidor atual e o horímetro de instalação).",
        "Selecione a **Razão da Retirada**: Rodízio, Mudou de Equipamento, Saiu para Conserto, Desgaste, Defeito, Recapagem, Descarte ou Outro.",
        "💡 Se o motivo for **Saiu para Conserto**, informe a **Natureza do Conserto** (ex: corte lateral, furo na BDR).",
        "Clique em **Confirmar Remoção** (botão vermelho).",
        "✅ O sistema atualiza automaticamente: acumula as horas no pneu, altera o status (Estoque, Recapando ou Descartado) e registra o histórico."
      ]
    },
    {
      "id": "pneus-profundidade",
      "categoria": "pneus",
      "titulo": "Como registrar a medição de profundidade de sulco?",
      "tags": [
        "pneu",
        "sulco",
        "profundidade",
        "mm",
        "desgaste",
        "inspeção",
        "medição",
        "H/mm"
      ],
      "passos": [
        "Acesse **Equipamentos → Pneus**, localize o pneu e clique no ícone de ficha (📄) para abrir a **Ficha de Acompanhamento**.",
        "Na seção **Profundidade de Sulco**, clique em **Nova Medição**.",
        "Informe a **data** da medição e o **total de horas** no horímetro naquele momento.",
        "Informe a **Profundidade Externa** em mm (medida com calibrador de sulco no lado externo do pneu).",
        "💡 Para pneus de eixo duplo, informe também a **Profundidade Interna** (sulco do lado que fica para dentro do eixo).",
        "Informe a **pressão encontrada** em PSI.",
        "Clique em **Registrar Medição**.",
        "✅ O sistema calcula automaticamente: **% de desgaste** (usando a profundidade inicial cadastrada) e **H/mm** (horas por milímetro de desgaste — métrica profissional para projetar vida útil).",
        "💡 O H/mm serve para projetar quando o pneu chegará ao limite de uso: divida a profundidade restante pelo H/mm."
      ]
    },
    {
      "id": "pneus-reforma",
      "categoria": "pneus",
      "titulo": "Como registrar a reforma (recapagem) de um pneu?",
      "tags": [
        "reforma",
        "recapagem",
        "recauchutagem",
        "vida",
        "vidas",
        "custo",
        "estoque"
      ],
      "passos": [
        "Remova o pneu do equipamento com a **Razão da Retirada** = Recapagem — o status dele muda para **Recapando**.",
        "Depois que a reformadora devolver o pneu, acesse a **Ficha de Acompanhamento** desse pneu.",
        "Clique em **Registrar Reforma** (só aparece quando o pneu está com status Recapando).",
        "Informe o **Custo da Recauchutagem** (obrigatório) e, se o sulco foi renovado, a **Nova Profundidade de Sulco**.",
        "✅ Ao confirmar, o sistema soma o custo em Recauchutagem, inicia uma **nova vida** (1ª → 2ª → 3ª) e o pneu volta para o estoque, pronto para ser instalado de novo.",
        "💡 O Custo/Hora do pneu é calculado sobre o total acumulado de todas as vidas — por isso registrar a reforma corretamente é importante para esse número ficar certo."
      ]
    },
    {
      "id": "pneus-ficha",
      "categoria": "pneus",
      "titulo": "O que é a Ficha de Acompanhamento do Pneu?",
      "tags": [
        "pneu",
        "ficha",
        "histórico",
        "custo",
        "vida",
        "vidas",
        "recapagem",
        "acompanhamento"
      ],
      "passos": [
        "A Ficha de Acompanhamento é a tela central do módulo de pneus, inspirada no modelo profissional Regigant para pneus OTR (mineração, construção).",
        "Para acessá-la, vá em **Pneus**, localize o pneu e clique no ícone 📄.",
        "A ficha exibe: dimensão, marca/modelo, nº de série, nº de fogo, status atual e **vida atual** (1ª, 2ª ou 3ª).",
        "💡 Cada vez que o pneu passa por **recapagem**, ele inicia uma nova vida. O sistema acompanha o custo e as horas separados por vida.",
        "A seção de **Custos** mostra: valor de compra, custos acumulados de consertos, custo de recauchutagem, total geral e **custo por hora trabalhada**.",
        "A seção de **Profundidade de Sulco** mostra o histórico de medições com evolução do desgaste (barra visual + tabela com H/mm).",
        "A seção de **Histórico de Instalações** lista todos os equipamentos e posições onde o pneu já esteve, com datas, horímetros, horas rodadas e razão da retirada."
      ]
    },
    {
      "id": "maquina-parada-registrar",
      "categoria": "equipamentos",
      "titulo": "Como registrar um equipamento que quebrou na oficina?",
      "tags": [
        "máquina parada",
        "oficina",
        "manutenção corretiva",
        "quebrou",
        "conserto",
        "F.52",
        "parada"
      ],
      "passos": [
        "Acesse **Equipamentos → Máquinas Paradas** no menu lateral.",
        "Clique em **Nova Parada** e busque o equipamento por frota, modelo, placa ou patrimônio.",
        "Descreva o **motivo da parada** (ex: motor fundido, vazamento hidráulico).",
        "Escolha quem vai consertar: **Oficina Interna** ou **Fornecedor Externo**. Se for fornecedor, selecione o fornecedor e a especialidade (retífica, hidráulica, etc.).",
        "Preencha o **Nº da OS** (se já existir), a **prioridade** e a **previsão de liberação**, se souber.",
        "Clique em **Registrar** — a ficha fica aberta até o equipamento ser liberado da oficina.",
        "💡 Se surgir mais de um problema durante o conserto (ex: ao trocar o motor, descobrem que a bomba também quebrou), não crie uma nova ficha — registre como um novo andamento na mesma ficha.",
        "✅ Quando o equipamento estiver pronto, abra a ficha e clique em **Liberar Equipamento**, informando o medidor (horímetro/odômetro) atual."
      ]
    },
    {
      "id": "maquina-parada-andamento",
      "categoria": "equipamentos",
      "titulo": "Como acompanhar o andamento de um equipamento na oficina?",
      "tags": [
        "máquina parada",
        "andamento",
        "histórico",
        "oficina",
        "timeline",
        "previsão"
      ],
      "passos": [
        "Acesse **Equipamentos → Máquinas Paradas** e clique na linha do equipamento desejado.",
        "A tela mostra os dados da ficha (motivo, responsável, previsão de liberação) e o **histórico de andamento** abaixo.",
        "Para registrar uma atualização (ex: \"motor enviado para recuperar\", \"aguardando peça\", \"em montagem\"), escreva a descrição e clique em **Registrar**.",
        "💡 Se a previsão de liberação mudou, você pode informar a nova data junto com o andamento — o sistema mantém a previsão original para comparação.",
        "⚠️ Uma ficha com a previsão de liberação vencida aparece destacada em vermelho como **Atrasada**, tanto na lista quanto no relatório e no e-mail diário."
      ]
    },
    {
      "id": "maquina-parada-relatorio-email",
      "categoria": "equipamentos",
      "titulo": "Como funciona o relatório e o e-mail diário de máquinas paradas?",
      "tags": [
        "relatório",
        "e-mail",
        "notificação",
        "máquina parada",
        "oficina",
        "destinatários",
        "horário",
        "F.52"
      ],
      "passos": [
        "Acesse **Equipamentos → Máquinas Paradas** para ver a lista de equipamentos em manutenção corretiva a qualquer momento, com o total de dias/horas parados.",
        "Clique em **PDF** para baixar o relatório completo, pronto para impressão.",
        "Para configurar o envio automático por e-mail, acesse **Equipamentos → Notificações**.",
        "Marque os **perfis** que devem receber o relatório (ex: Encarregado de Oficina, Almoxarifado, Compras, Financeiro, RH, Gestor).",
        "Adicione **e-mails avulsos** para pessoas sem usuário no sistema (ex: responsável pela britagem ou pela usina de concreto), com um rótulo identificando o papel.",
        "Defina o **horário de envio** — cada empresa escolhe o horário que preferir.",
        "💡 O relatório é enviado todos os dias, mesmo quando não há nenhuma máquina parada — assim todos confirmam que está tudo em dia.",
        "✅ Use o botão **Enviar agora** para disparar o relatório imediatamente, sem esperar o horário configurado — útil para testar ou escalar um atraso na hora.",
        "💡 Como todos os destinatários aparecem no campo Para: do e-mail, qualquer um pode usar \"Responder a todos\" para perguntar onde travou a liberação de um equipamento atrasado."
      ]
    },
    {
      "id": "marketplace-conectar-shopee",
      "categoria": "marketplace",
      "titulo": "Como conectar minha loja da Shopee ao ERP?",
      "tags": [
        "shopee",
        "marketplace",
        "conectar",
        "integração",
        "loja",
        "pedidos"
      ],
      "passos": [
        "Acesse **Configurações > Marketplaces** no menu lateral.",
        "No card da Shopee, clique em **Conectar Shopee**.",
        "Você será redirecionado para a página da Shopee para autorizar o acesso. Faça login na sua conta de vendedor e clique em **Confirmar**.",
        "Após autorizar, o sistema retorna automaticamente ao ERP com a conexão ativa.",
        "💡 A sincronização de pedidos começa automaticamente a cada 15 minutos. Para importar pedidos imediatamente, clique em **Sincronizar Agora**.",
        "✅ O status **Conectado** (verde) confirma que a integração está funcionando."
      ]
    },
    {
      "id": "marketplace-pedidos-shopee",
      "categoria": "marketplace",
      "titulo": "Como os pedidos da Shopee são importados?",
      "tags": [
        "shopee",
        "pedidos",
        "importar",
        "vendas",
        "estoque",
        "sincronizar"
      ],
      "passos": [
        "Pedidos com status **Pronto para Envio**, **Em trânsito** ou **Concluído** são importados automaticamente como **Vendas** no ERP.",
        "Cada pedido importado: cria uma Venda, desconta o estoque dos produtos e gera um título financeiro (conta a receber).",
        "O ERP busca o produto pelo **SKU** cadastrado na Shopee, comparando com o **Código Original** ou **Código Interno** do produto no ERP.",
        "⚠️ Se o produto não for encontrado pelo SKU, o pedido é importado com status **Parcial** e o item sem correspondência é registrado.",
        "Pedidos já importados anteriormente são ignorados automaticamente (sem duplicação).",
        "💡 Para ver pedidos importados, acesse o módulo **Vendas** e filtre por **Shopee Marketplace** como cliente."
      ]
    },
    {
      "id": "marketplace-sync-estoque",
      "categoria": "marketplace",
      "titulo": "Como funciona a sincronização de estoque com a Shopee?",
      "tags": [
        "shopee",
        "estoque",
        "sync",
        "sincronizar",
        "quantidade",
        "anúncio"
      ],
      "passos": [
        "Quando o estoque de um produto muda no ERP (por venda, compra ou ajuste), a nova quantidade é enviada automaticamente ao anúncio correspondente na Shopee.",
        "A sincronização funciona **apenas para produtos vinculados** — o vínculo é criado automaticamente quando um pedido da Shopee é importado.",
        "Para ver os produtos vinculados, acesse **Configurações > Marketplaces** e veja a tabela **Produtos vinculados à Shopee**.",
        "Você pode desativar a sincronização de estoque para um produto específico usando o botão **Sync Estoque** (verde/cinza) na tabela.",
        "⚠️ Se a sincronização falhar (token expirado, produto removido na Shopee), um aviso é registrado nos logs mas o ERP não é afetado.",
        "💡 Para remover um vínculo, clique no ícone 🗑️ na linha do produto. O vínculo pode ser recriado ao importar novos pedidos daquele produto."
      ]
    },
    {
      "id": "marketplace-conectar-mercado-livre",
      "categoria": "marketplace",
      "titulo": "Como conectar minha conta do Mercado Livre ao ERP?",
      "tags": [
        "mercado livre",
        "mercadolivre",
        "marketplace",
        "conectar",
        "integração",
        "loja",
        "pedidos"
      ],
      "passos": [
        "Acesse **Configurações > Marketplaces** no menu lateral.",
        "No card do Mercado Livre, clique em **Conectar Mercado Livre**.",
        "Você será redirecionado para a página do Mercado Livre para autorizar o acesso. Faça login na sua conta de vendedor e clique em **Autorizar**.",
        "Após autorizar, o sistema retorna automaticamente ao ERP com a conexão ativa.",
        "💡 A sincronização de pedidos pagos começa automaticamente a cada 15 minutos. Para importar pedidos imediatamente, clique em **Sincronizar Agora**.",
        "✅ O status **Conectado** (verde) confirma que a integração está funcionando, junto com o nome da conta vendedora."
      ]
    },
    {
      "id": "marketplace-conectar-amazon",
      "categoria": "marketplace",
      "titulo": "Como conectar minha conta da Amazon ao ERP?",
      "tags": [
        "amazon",
        "marketplace",
        "conectar",
        "integração",
        "loja",
        "pedidos",
        "seller central"
      ],
      "passos": [
        "Acesse **Configurações > Marketplaces** no menu lateral.",
        "No card da Amazon, clique em **Conectar Amazon**.",
        "Você será redirecionado para o Seller Central da Amazon para autorizar o acesso. Faça login na sua conta de vendedor e confirme a autorização.",
        "Após autorizar, o sistema retorna automaticamente ao ERP com a conexão ativa.",
        "💡 A sincronização de pedidos começa automaticamente a cada 15 minutos. Para importar pedidos imediatamente, clique em **Sincronizar Agora**.",
        "✅ O status **Conectado** (verde) confirma que a integração está funcionando, junto com o identificador da conta vendedora."
      ]
    },
    {
      "id": "produto-sku-marketplace",
      "categoria": "produtos",
      "titulo": "O que é o SKU Marketplace do produto?",
      "tags": [
        "sku",
        "marketplace",
        "mercado livre",
        "shopee",
        "amazon",
        "anúncio",
        "código",
        "copiar"
      ],
      "passos": [
        "Todo produto novo cadastrado no ERP recebe automaticamente um código único chamado **SKU Marketplace**, no formato iniciais da empresa + código interno (ex: KMT-KO12345ABCD).",
        "Esse código serve pra qualquer marketplace (Mercado Livre, Shopee, ou outro) — não importa se você vende roupa, peça ou qualquer outro produto.",
        "💡 Ao cadastrar um produto, um aviso aparece na tela mostrando o SKU gerado, com um botão para copiar.",
        "Cole esse código no campo **SKU** ao criar o anúncio na plataforma do marketplace — é assim que o ERP identifica automaticamente qual produto corresponde a cada pedido recebido.",
        "⚠️ Produtos cadastrados antes dessa funcionalidade não têm SKU Marketplace gerado — nesse caso, o ERP continua identificando o pedido pelo **Código Original** ou **Código Interno** do produto, como já funcionava antes."
      ]
    },
    {
      "id": "almoxarifado-painel",
      "categoria": "almoxarifado",
      "titulo": "O que mostra o Painel do Almoxarifado?",
      "tags": [
        "almoxarifado",
        "painel",
        "dashboard",
        "controle",
        "estoque mínimo",
        "requisição",
        "solicitação de compra"
      ],
      "passos": [
        "Acesse **Almoxarifado → Painel** no menu lateral para ver uma visão geral de tudo que está em aberto.",
        "Os cartões no topo mostram: quantas requisições de material estão em aberto, quantas estão aguardando compra, quantas Solicitações de Compra aguardam aprovação e quantos itens estão com estoque abaixo do mínimo.",
        "A tabela **Estoque Abaixo do Mínimo** lista os produtos que precisam de reposição — só aparecem aqui produtos que têm um estoque mínimo configurado no cadastro.",
        "A lista **Solicitações de Compra Pendentes** mostra quem está aguardando aprovação de gerente; clique em qualquer linha pra ir direto pra tela de aprovação.",
        "A tabela **Movimentações Recentes** mostra as últimas retiradas de peça feitas por requisição de material, com data, produto, quantidade e quem solicitou.",
        "💡 Esse painel não substitui a lista de Requisições — ele é um resumo rápido pra saber se tem algo pendente sem precisar abrir cada tela."
      ]
    },
    {
      "id": "almoxarifado-solicitacao-compra",
      "categoria": "almoxarifado",
      "titulo": "Como funciona a Solicitação de Compra quando falta peça?",
      "tags": [
        "solicitação de compra",
        "sc",
        "sem estoque",
        "aguardando compra",
        "aprovação",
        "gerente",
        "requisição",
        "orçamento",
        "fornecedor",
        "almoxarifado"
      ],
      "passos": [
        "Quando falta atender algum item de uma requisição (com ou sem produto cadastrado), você pode gerar uma Solicitação de Compra a partir dela — não precisa esperar tentar **Atender** primeiro, se já sabe de antemão que falta a peça.",
        "Na tela de detalhe da requisição, clique em **Gerar Solicitação de Compra**, ou vá em **Almoxarifado → Solicitações de Compra → Nova Solicitação de Compra** e busque a requisição pelo número, solicitante, equipamento ou centro de custo.",
        "A Solicitação de Compra criada fica com status **Pendente de Aprovação**.",
        "💡 Enquanto estiver pendente de aprovação, o comprador pode clicar em **Adicionar Orçamento** na tela de detalhe da SC e registrar cada orçamento coletado de fornecedor (fornecedor, valor total, condição de pagamento, prazo de entrega e uma observação livre) — pode adicionar quantos orçamentos quiser, não precisa ser só o mais barato.",
        "Um gerente, administrador ou super admin abre a Solicitação de Compra, vê todos os orçamentos anexados e decide junto com o comprador (presencialmente) qual usar — o sistema não marca automaticamente um \"vencedor\", já que nem sempre o menor preço é a melhor escolha (prazo, qualidade e originalidade da peça também pesam).",
        "Depois de decidido, o gestor clica em **Aprovar** ou **Rejeitar** (rejeitar exige uma justificativa).",
        "Depois de aprovada, quando a mercadoria chegar e for conferida, quem recebe clica em **Concluir** para fechar a solicitação.",
        "⚠️ Item sem cadastro de produto (descrição livre) pode entrar na Solicitação de Compra normalmente. Se quiser cadastrar o produto antes, clique em **Cadastrar produto** ao lado do item — é um cadastro enxuto (sem custo, sem código interno manual) que já vincula o produto criado ao item automaticamente, com opção de registrar códigos equivalentes por marca (ex: mesmo filtro com código diferente na Komatsu, na MAN, na Tecfil).",
        "⚠️ A Solicitação de Compra é só um controle interno — ela não gera automaticamente uma Nota Fiscal de compra. Quando a peça chegar com nota fiscal do fornecedor, o lançamento da compra continua sendo feito normalmente em **Compras**, separado deste fluxo."
      ]
    },
    {
      "id": "patrimonio-bens-cadastrados",
      "categoria": "patrimonio",
      "titulo": "Como cadastrar um bem de patrimônio (ferramental, tanque, móveis)?",
      "tags": [
        "patrimônio",
        "bem",
        "ferramental",
        "tanque",
        "torno",
        "prensa",
        "móveis",
        "cadastro",
        "centro de custo",
        "obra",
        "fazenda"
      ],
      "passos": [
        "Patrimônio é pra bens duráveis que não são Produto (estoque/revenda) nem Equipamento (máquina pesada com horímetro e pneus) — bomba de abastecimento, tanque de combustível, ferramental, torno, prensa, móveis de escritório, equipamento de cozinha/cantina, ferramentas de oficina.",
        "Acesse **Patrimônio → Bens Cadastrados** e clique em **Novo Patrimônio**.",
        "Preencha o **Nome** do bem e, se quiser organizar por tipo, a **Categoria** (texto livre, ex: \"Ferramental\", \"Mobiliário\", \"Máquina de Oficina\").",
        "Selecione o **Centro de Custo** — é obrigatório, e é como o sistema sabe se o bem está na empresa, numa obra ou numa fazenda específica. Se o local ainda não existir na lista, clique em **+ Novo** pra cadastrar ali mesmo.",
        "💡 Preencha **Localização Detalhada** pra ser ainda mais específico dentro do local (ex: \"Oficina — Prateleira 3\").",
        "Data e valor de aquisição, NF de compra e observação são opcionais.",
        "⚠️ Quando um bem é baixado/descartado, use **Inativar** em vez de excluir — mantém o histórico. Um bem inativado pode ser reativado a qualquer momento."
      ]
    },
    {
      "id": "patrimonio-lista-geral",
      "categoria": "patrimonio",
      "titulo": "Como ver tudo que a empresa, obra ou fazenda tem?",
      "tags": [
        "lista geral",
        "patrimônio",
        "produtos",
        "equipamentos",
        "centro de custo",
        "local",
        "obra",
        "fazenda",
        "inventário"
      ],
      "passos": [
        "Acesse **Patrimônio → Lista Geral** para ver, numa tabela só, todos os Produtos, Equipamentos e bens de Patrimônio cadastrados no sistema.",
        "Use o filtro de **Centro de Custo** no topo pra ver só o que está num local específico (uma obra ou fazenda, por exemplo) — ou deixe em \"Todos os locais\" pra ver tudo.",
        "Os botões **Produto / Equipamento / Patrimônio** filtram por tipo de bem.",
        "Clique em qualquer linha de Produto ou Equipamento pra ir direto à tela de detalhe dele. Linhas de Patrimônio não têm tela de detalhe própria — a edição é feita em **Patrimônio → Bens Cadastrados**.",
        "⚠️ Pra um Equipamento aparecer com o local certo nessa lista, ele precisa ter o campo **Centro de Custo** preenchido no cadastro dele (Editar Equipamento) — equipamentos antigos podem estar sem esse campo até serem atualizados."
      ]
    }
  ]
};
