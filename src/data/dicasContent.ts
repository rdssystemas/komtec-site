// Conteúdo de "Dicas & Novidades" por módulo — hardcoded, mesmo padrão de
// DEFAULT_MODULOS/DEFAULT_DIFERENCIAIS (não passa pelo backend/CMS).

export interface DicaItem {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  tempoLeitura: string;
  imagem: string;
  // Mesmo markdown leve do InformacaoArtigo: "## " = título de seção,
  // "- " = item de lista, linha em branco = novo parágrafo.
  conteudo: string;
  publicado: boolean;
}

export interface ModuloDicas {
  id: string;
  nome: string;
  icone: string;
  imagem: string;
  descricao: string;
  dicas: DicaItem[];
}

export interface DicasContent {
  modulos: ModuloDicas[];
}

export const DEFAULT_DICAS: DicasContent = {
  modulos: [
    {
      id: 'gestao-de-equipamentos',
      nome: 'Gestão de Equipamentos',
      icone: 'Wrench',
      imagem: '/screenshots/komtec_gestao_maquinas_pesadas.jpg',
      descricao: 'Dicas práticas para tirar mais horas de operação da sua frota de máquinas e veículos.',
      dicas: [
        {
          slug: 'cuidados-pneus-fora-de-estrada',
          titulo: 'Como cuidar bem dos pneus fora de estrada da sua frota',
          resumo: 'Pneu fora de estrada é um dos itens mais caros da manutenção. Veja cuidados simples que aumentam a vida útil e evitam parada inesperada de máquina.',
          data: 'Agosto de 2026',
          tempoLeitura: '4 min de leitura',
          imagem: '/komtec_gestao_pneus_dia_v2.webp',
          conteudo: `## Por que o pneu fora de estrada pesa tanto no custo

Em máquinas agrícolas e de construção, o pneu costuma ser um dos itens mais caros de repor — e o desgaste irregular ou uma troca feita tarde demais custa muito mais do que o preço do pneu novo: são horas de máquina parada, frete de socorro em campo e, às vezes, dano a outros componentes por rodar com o pneu já comprometido.

## Calibragem é o cuidado que mais compensa

Pneu murcho esquenta mais, desgasta as bordas mais rápido e aumenta o consumo de combustível puxando a máquina. Pneu cheio demais desgasta o centro e reduz a tração em terreno irregular. Vale manter uma rotina fixa de checagem — semanal, ou antes de cada frente de trabalho mais pesada — em vez de calibrar só quando alguém percebe o problema visualmente.

## Rodízio evita que um pneu "carregue" o desgaste sozinho

Máquinas que trabalham sempre na mesma posição ou fazendo sempre a mesma curva tendem a desgastar um pneu bem mais rápido que os outros. Um rodízio programado (não só "de vez em quando") equilibra esse desgaste entre os pneus da mesma máquina, esticando a vida útil do conjunto inteiro.

## Fique de olho no terreno, não só no pneu

Pedra, ferragem e buraco mal contornado costumam ser a causa real por trás de um corte ou bolha que só aparece dias depois. Vale treinar o operador para reportar terreno ruim assim que perceber, e não só quando o pneu já furou.

## Como o KomTec ajuda nisso

No módulo de Gestão de Equipamentos, cada pneu fica cadastrado por equipamento, com histórico de rodízio e vida útil acompanhados pelo sistema — então em vez de depender da memória de quem está em campo, dá para ver rapidamente qual pneu está há mais tempo sem rodízio ou perto do fim de vida útil, antes que ele vire uma parada não planejada.`,
          publicado: true,
        },
        {
          slug: 'controle-de-combustivel-frota',
          titulo: 'Controle de combustível: como evitar desperdício e furo na frota',
          resumo: 'Combustível costuma ser um dos maiores custos variáveis de uma frota. Veja como um controle simples por equipamento evita desperdício e sumiço de litros.',
          data: 'Agosto de 2026',
          tempoLeitura: '4 min de leitura',
          imagem: '/komtec_comboio_dia.webp',
          conteudo: `## O combustível some aos poucos, não de uma vez

Raramente é um roubo grande que pesa no bolso — é o litro a mais anotado errado, o abastecimento sem registrar o equipamento certo, ou a máquina ligada parada "esquentando" sem necessidade. Sozinhos, esses pequenos desvios não chamam atenção; somados ao longo do mês, viram uma diferença real entre o que foi comprado e o que a frota realmente devia ter consumido.

## Registrar por equipamento, não só por abastecimento

Quando o combustível é lançado só como uma saída geral do tanque, fica quase impossível saber depois qual máquina consumiu mais do que deveria. O controle fica muito mais útil quando cada abastecimento é vinculado ao equipamento específico que recebeu o combustível — aí dá para comparar consumo entre máquinas parecidas e notar rápido quando uma foge do padrão.

## Comboio em campo pede o mesmo cuidado que o posto

Times que atendem a frota longe da sede, com caminhão-comboio ou tanque móvel, costumam relaxar o controle justamente por estar fora da rotina do escritório. Definir um responsável fixo pelo tanque do comboio, com saldo controlado, evita que o abastecimento em campo vire o ponto cego do controle de combustível.

## Consumo fora do padrão é sinal de alerta, não só de custo

Uma máquina consumindo mais combustível que o normal para a mesma tarefa quase sempre está avisando outra coisa — filtro sujo, pneu murcho, motor pedindo manutenção. Acompanhar consumo por equipamento ajuda a pegar esse tipo de problema antes que ele vire um reparo maior.

## Como o KomTec ajuda nisso

O comboio de manutenção do módulo de Gestão de Equipamentos tem tanque com saldo controlado por tipo de combustível e responsável definido, e todo abastecimento fica registrado por equipamento atendido — mesmo quando a equipe está em campo, longe do pátio. Assim o histórico de consumo por máquina fica completo, dá para comparar entre equipamentos parecidos e perceber rápido quando algo sai do padrão.`,
          publicado: true,
        },
        {
          slug: 'manutencao-periodica-evita-parada',
          titulo: 'Manutenção periódica: o segredo para reduzir equipamento parado',
          resumo: 'Máquina parada custa caro mesmo sem quebrar de vez — é frete atrasado, obra travada, safra esperando. Veja por que manutenção por horímetro/km bate a manutenção "quando quebrar".',
          data: 'Agosto de 2026',
          tempoLeitura: '4 min de leitura',
          imagem: '/komtec_comboio_manutencao_v3.webp',
          conteudo: `## Manutenção corretiva sempre custa mais que preventiva

Esperar a máquina quebrar para só então mexer nela parece mais barato no dia a dia — mas na prática costuma sair mais caro: peça que quebra sozinha geralmente danifica outra ao redor, o conserto vira urgência (com preço de urgência) e a máquina fica parada mais tempo do que ficaria numa revisão programada.

## Horímetro e quilometragem, não "de vez em quando"

"Fazer manutenção de tempos em tempos" é vago demais para funcionar de verdade. O que realmente previne quebra é programar a revisão por horímetro ou quilometragem rodada — cada equipamento tem seu próprio ritmo de uso, então o intervalo entre revisões também deveria ser individual, não uma data igual pra frota inteira.

## Sem alerta automático, a revisão sempre atrasa

Mesmo com um plano de manutenção bem definido no papel, é fácil perder o momento certo quando depende de alguém lembrar manualmente — principalmente em frotes maiores, com várias máquinas em ritmos diferentes de uso. Um aviso automático quando o equipamento se aproxima do prazo tira esse controle da memória de uma pessoa só.

## Histórico completo evita repetir diagnóstico

Quando cada intervenção fica registrada — peça trocada, mão de obra, responsável, custo — o próximo problema é diagnosticado mais rápido, porque já se sabe o que foi feito antes naquele equipamento. Sem esse histórico, cada quebra vira uma investigação do zero.

## Como o KomTec ajuda nisso

No módulo de Gestão de Equipamentos, cada máquina tem sua própria ficha, com manutenção programável por horímetro ou quilometragem e alertas automáticos quando o equipamento se aproxima do prazo. Cada intervenção fica registrada com peças, mão de obra, custo e responsável — dando rastreabilidade completa do ciclo de vida do equipamento, do primeiro abastecimento à última revisão.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'compras',
      nome: 'Compras',
      icone: 'Truck',
      imagem: '/komtec_comercial.webp',
      descricao: 'Dicas para comprar com mais controle, menos retrabalho e sem furo no estoque.',
      dicas: [
        {
          slug: 'importar-xml-fornecedor-compras',
          titulo: 'Pare de redigitar nota de compra: importe o XML do fornecedor',
          resumo: 'Digitar item por item de uma nota de compra é onde mais aparece erro de preço e código. Veja por que importar o XML da nota resolve isso na raiz.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_comercial.webp',
          conteudo: `## O erro mais comum na compra nasce na digitação

Preço trocado, quantidade errada, produto lançado no código errado — a maioria desses erros não acontece porque alguém foi descuidado, acontece porque redigitar uma nota de compra item por item é um trabalho repetitivo e cansativo, terreno perfeito para erro humano.

## Importar o XML resolve isso na raiz

A nota fiscal que o fornecedor emite já traz todos os itens, preços e quantidades certos dentro do próprio arquivo XML. Importar esse XML em vez de digitar manualmente elimina a etapa onde o erro mais aparece — o sistema lê o que o fornecedor realmente emitiu, sem intermediário digitando de novo.

## Funciona até com fornecedor pequeno, MEI incluso

Um receio comum é achar que isso só funciona com fornecedor grande e "organizado". Na prática, mesmo fornecedor MEI emite XML de NF-e — então o ganho de não redigitar vale para a compra de qualquer porte, não só para os fornecedores maiores.

## Como o KomTec ajuda nisso

O módulo de Compras importa a NF-e do fornecedor diretamente do XML, incluindo notas de MEI, e já organiza os itens prontos para conferência — sem digitar preço, quantidade ou código na mão.`,
          publicado: true,
        },
        {
          slug: 'fluxo-aprovacao-pedidos-compra',
          titulo: 'Fluxo de aprovação: como evitar pedido de compra feito sem controle',
          resumo: 'Sem aprovação formal, é fácil um pedido de compra sair do controle de orçamento sem ninguém perceber a tempo. Veja por que aprovação e prazo fazem parte do mesmo cuidado.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_comercial.webp',
          conteudo: `## Comprar sem aprovação é decidir no escuro

Quando qualquer pessoa pode fechar uma compra sem passar por uma aprovação, o controle de orçamento vira uma surpresa no fim do mês — não porque ninguém está prestando atenção, mas porque não existe um ponto único onde alguém confirma "sim, essa compra faz sentido agora".

## Prazo também é parte do controle, não só o valor

Um pedido aprovado sem prazo de entrega acompanhado vira um "vou lembrar de cobrar depois" — e depois vira nunca. Acompanhar o prazo prometido pelo fornecedor evita que a falta de um insumo pegue a operação de surpresa, mesmo quando a compra já foi aprovada corretamente.

## A compra só termina quando o estoque confirma a entrada

Aprovar o pedido é só metade do caminho — o controle de verdade fecha quando o que chegou fisicamente bate com o que foi pedido e aprovado. Sem esse fechamento, é fácil pagar por uma quantidade que nunca chegou completa.

## Como o KomTec ajuda nisso

O módulo de Compras organiza aprovações e prazos de cada pedido, e conecta a entrada no estoque diretamente à compra aprovada — assim o pedido só é dado como concluído quando o que chegou realmente confere com o que foi pedido.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'vendas-e-orcamentos',
      nome: 'Vendas e Orçamentos',
      icone: 'ShoppingCart',
      imagem: '/komtec_cotacao.webp',
      descricao: 'Dicas para vender mais rápido, com mais segurança e sem redigitar orçamento.',
      dicas: [
        {
          slug: 'orcamento-para-venda-sem-redigitar',
          titulo: 'Do orçamento à venda sem redigitar nada',
          resumo: 'Todo minuto entre o cliente aprovar o orçamento e a venda sair é um minuto a mais de risco dele mudar de ideia. Veja por que transformar orçamento em venda com um clique importa tanto quanto o preço em si.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_cotacao.webp',
          conteudo: `## A demora entre aprovar e vender custa venda

Quando o cliente aprova o orçamento e alguém precisa refazer tudo manualmente para virar venda — reconferir item, preço, desconto — esse intervalo é tempo de sobra para o cliente esfriar, comparar com outro fornecedor ou simplesmente esquecer.

## Orçamento profissional já ajuda a fechar mais rápido

Um orçamento enviado em PDF, organizado e por e-mail, passa mais confiança do que uma proposta anotada correndo. Isso não é só estética — cliente que recebe uma proposta clara decide mais rápido, porque não precisa perguntar de novo o que já estava escrito.

## Converter com um clique evita o erro de redigitar

Quando o orçamento aprovado vira venda automaticamente — mesmos itens, mesmo preço, mesmo desconto — desaparece o risco de alguém digitar um valor diferente do que foi combinado com o cliente. É controle e agilidade ao mesmo tempo.

## Como o KomTec ajuda nisso

O módulo de Vendas e Orçamentos permite montar o orçamento, enviar por e-mail em PDF com um clique e, quando o cliente aprovar, converter direto em venda — sem redigitar item, preço ou desconto.`,
          publicado: true,
        },
        {
          slug: 'limite-de-credito-cliente-vendas',
          titulo: 'Limite de crédito do cliente: venda com segurança sem travar o balcão',
          resumo: 'Vender sem olhar o histórico do cliente é abrir mão de uma informação que já existe no sistema. Veja como o limite de crédito ajuda a decidir na hora, sem burocracia.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_cotacao.webp',
          conteudo: `## Vender no escuro custa caro depois

Aprovar uma venda a prazo sem olhar o histórico do cliente é um risco silencioso — ele só aparece depois, quando a parcela vence e não é paga. Nesse ponto, já é tarde para decidir diferente.

## Limite de crédito não é sobre desconfiar do cliente

A ideia não é dificultar a venda — é dar ao vendedor, na hora da negociação, uma informação que hoje pode estar espalhada entre memória, planilha ou conversa com o financeiro. Saber o limite disponível do cliente na tela da venda evita tanto o excesso de risco quanto a demora de perguntar para alguém antes de fechar.

## Isso também acelera a venda, não só protege o caixa

Quando o limite já está calculado e visível, o vendedor não precisa parar a negociação para "confirmar com o financeiro se pode vender". A decisão sai mais rápida — e mais segura ao mesmo tempo.

## Como o KomTec ajuda nisso

O módulo de Análise e Limite de Crédito do Cliente calcula o limite disponível a partir do histórico financeiro do cliente e mostra essa informação direto na tela de venda — sem travar o atendimento, mas sem vender no escuro.`,
          publicado: true,
        },
        {
          slug: 'comparativo-desempenho-vendedores',
          titulo: 'Comparativo de vendedores: enxergue quem está performando e por quê',
          resumo: 'Sem comparar desempenho entre a equipe, é difícil saber se um resultado fraco é do vendedor, da carteira de clientes ou da região. Veja por que esse comparativo ajuda a decidir com mais justiça.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_cotacao.webp',
          conteudo: `## Comparar sem contexto pune o vendedor errado

Olhar só o valor total vendido por cada pessoa esconde uma diferença importante: vendedor interno de balcão e vendedor de rota trabalham em condições bem diferentes. Comparar os dois sem separar esse contexto pode fazer parecer que alguém está performando mal quando na verdade está numa operação diferente.

## O painel ajuda a enxergar o motivo, não só o resultado

Ver a evolução de vendas por vendedor ao longo do tempo, separando perfil interno de perfil externo, ajuda a identificar se uma queda é sazonal, é de um vendedor específico, ou é do mercado como um todo — decisão bem diferente em cada caso.

## Isso também serve para reconhecer o que está dando certo

Comparativo não é só para achar problema — também mostra rápido quem está performando acima da média, o que ajuda a entender o que esse vendedor está fazendo diferente e replicar com o resto da equipe.

## Como o KomTec ajuda nisso

O Dashboard de Vendas traz um comparativo de desempenho entre vendedores, separando o perfil interno do vendedor de rota, para uma comparação mais justa e decisões melhor embasadas.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'financeiro',
      nome: 'Financeiro',
      icone: 'DollarSign',
      imagem: '/komtec_bi.webp',
      descricao: 'Contas a pagar e receber merecem atenção diária — dicas para manter o fluxo de caixa sob controle.',
      dicas: [
        {
          slug: 'importancia-contas-a-pagar-receber',
          titulo: 'Por que contas a pagar e receber merecem atenção todo dia, não só no fim do mês',
          resumo: 'Fluxo de caixa não é um relatório de fim de mês — é uma decisão de todo dia. Veja por que acompanhar contas a pagar e receber diariamente evita os maiores sustos financeiros de uma empresa.',
          data: 'Agosto de 2026',
          tempoLeitura: '4 min de leitura',
          imagem: '/komtec_bi.webp',
          conteudo: `## O problema financeiro raramente aparece de repente

Quase todo aperto de caixa sério vinha se formando havia semanas — um cliente atrasando, uma conta a pagar maior que o previsto, um recebimento que não veio no dia esperado. O problema não é a falta de dinheiro no momento, é não ter visto o sinal chegando a tempo de se planejar.

## Contas a pagar e a receber são as duas metades da mesma decisão

Olhar só o que precisa ser pago, sem olhar o que está previsto para entrar, é enxergar metade do problema. É o cruzamento das duas informações — o que sai e o que entra, e quando — que mostra se a empresa vai ter caixa suficiente na data certa, não só no total do mês.

## Diariamente, não semanalmente

Uma conta a receber que atrasa hoje muda o planejamento de uma conta a pagar de amanhã. Quando esse acompanhamento é feito só uma vez por semana (ou pior, uma vez por mês), a empresa reage ao problema depois que ele já aconteceu, em vez de se antecipar a ele.

## Como o KomTec ajuda nisso

O módulo Financeiro reúne contas a pagar, contas a receber, parcelas e vencimentos em um só lugar, com o fluxo de caixa sempre atualizado — para que essa checagem diária vire questão de minutos, não uma tarefa que fica sempre para depois.`,
          publicado: true,
        },
        {
          slug: 'parcelas-automaticas-nao-esquecer-cobranca',
          titulo: 'Parcelas automáticas: nunca mais esquecer de cobrar um cliente',
          resumo: 'Esquecer de cobrar uma parcela vencida não costuma ser falta de atenção — é falta de um lugar único e confiável onde toda cobrança pendente aparece. Veja como isso muda quando a parcela nasce junto com a venda.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_bi.webp',
          conteudo: `## A cobrança esquecida quase sempre é falha de processo, não de atenção

Quando as parcelas de uma venda são lançadas manualmente depois, separadas do momento da venda em si, é fácil uma parcela ficar de fora — principalmente em dias corridos, com várias vendas fechando ao mesmo tempo.

## Gerar a parcela junto com a venda elimina essa lacuna

Se a parcela nasce automaticamente no momento em que a venda é registrada, com valor e vencimento corretos, não existe uma etapa manual separada onde ela pode ser esquecida. O lançamento e a cobrança ficam ligados desde o início.

## Um lugar só para ver tudo que está para vencer

Espalhar o controle de vencimento entre memória, agenda pessoal e planilha paralela é onde a cobrança se perde. Ter um único painel com tudo que está a vencer, vencido ou já pago elimina a dúvida de "será que eu já cobrei esse cliente?".

## Como o KomTec ajuda nisso

Cada venda gera automaticamente as parcelas corretas no módulo Financeiro, com vencimento já calculado — e o painel de contas a receber mostra tudo que está por vencer ou já vencido, sem depender de ninguém lembrar manualmente.`,
          publicado: true,
        },
        {
          slug: 'conciliacao-financeira-sem-planilha-paralela',
          titulo: 'Conciliação financeira: por que vale abandonar a planilha paralela',
          resumo: 'Muita empresa mantém o sistema de um lado e uma planilha "real" de outro. Veja por que essa duplicação é mais perigosa do que parece, e o que muda ao conciliar tudo em um só lugar.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_bi.webp',
          conteudo: `## A planilha paralela nasce de uma boa intenção

Quase ninguém cria uma segunda planilha financeira por preguiça — geralmente é porque, em algum momento, o sistema pareceu incompleto ou lento demais para alguma checagem rápida. O problema é que, uma vez criada, a planilha vira a fonte "de confiança" e o sistema vira só um registro formal, cada vez mais desatualizado.

## Duas fontes de verdade é o mesmo que nenhuma

Quando existe uma divergência entre o sistema e a planilha, a pergunta vira "qual dos dois está certo?" — e normalmente ninguém tem certeza, porque os dois foram alimentados por pessoas diferentes, em momentos diferentes. Nesse ponto, o controle financeiro já não está controlando nada.

## Conciliar é a única forma de fechar essa dúvida de vez

Conciliação bem feita significa que todo lançamento tem uma origem clara e um status real — pago, pendente, vencido — direto no sistema. Isso não elimina o trabalho de revisar, mas elimina o trabalho duplicado de manter duas versões da mesma informação.

## Como o KomTec ajuda nisso

O módulo Financeiro permite conciliar lançamentos e acompanhar a saúde financeira da empresa em tempo real dentro do próprio sistema — reduzindo a necessidade de uma planilha paralela para "ter certeza" do que já está registrado.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'ordens-de-servico',
      nome: 'Ordens de Serviço',
      icone: 'ClipboardList',
      imagem: '/ordens-de-servico-oficina.webp',
      descricao: 'Manter o histórico de cada ordem de serviço é o que transforma a oficina de reativa em previsível.',
      dicas: [
        {
          slug: 'historico-os-vale-mais-do-que-parece',
          titulo: 'Histórico de OS: por que ele vale mais do que parece no dia a dia',
          resumo: 'Uma ordem de serviço encerrada não deveria "desaparecer" depois de entregue. Veja por que o histórico completo de OS é uma das informações mais valiosas — e mais esquecidas — de uma oficina.',
          data: 'Agosto de 2026',
          tempoLeitura: '4 min de leitura',
          imagem: '/ordens-de-servico-oficina.webp',
          conteudo: `## A OS encerrada não é o fim da informação, é o começo do histórico

É comum tratar a ordem de serviço como algo que só importa enquanto está em aberto — assim que o cliente retira o equipamento, ela vira só um papel arquivado (ou pior, perdido). Mas é exatamente esse registro que responde à pergunta mais importante da próxima visita: "isso já aconteceu antes com esse cliente ou equipamento?"

## Problema recorrente só se enxerga olhando para trás

Quando o histórico de OS está disperso ou incompleto, cada atendimento é tratado como se fosse a primeira vez — mesmo quando é a terceira vez que o mesmo equipamento volta com um sintoma parecido. Um histórico acessível permite ao técnico ver rápido se aquilo é recorrente, o que muda completamente o diagnóstico.

## Histórico também protege a oficina, não só o cliente

Peça trocada, serviço realizado, técnico responsável e assinatura do cliente registrados em cada OS formam uma prova do que foi combinado e entregue — importante em qualquer discussão futura sobre garantia ou sobre o que já foi ou não resolvido antes.

## Como o KomTec ajuda nisso

O módulo de Ordens de Serviço mantém o histórico completo de cada atendimento — técnico responsável, peças utilizadas e assinatura do cliente — vinculado ao cliente e ao equipamento, para que a próxima OS já comece sabendo o que veio antes.`,
          publicado: true,
        },
        {
          slug: 'tecnico-abre-os-pelo-celular',
          titulo: 'Técnico em campo: abrir a OS pelo celular sem perder informação',
          resumo: 'Ordem de serviço anotada no papel é informação que só existe na cabeça de quem anotou. Veja por que o técnico acompanhar a OS pelo celular muda o atendimento em campo.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/ordens-de-servico-oficina.webp',
          conteudo: `## O papel é o elo mais fraco da ordem de serviço

Uma OS anotada à mão depende de letra legível, de não se perder no bolso do macacão e de alguém digitar essa informação depois, de volta na oficina. Cada uma dessas etapas é uma chance de a informação chegar incompleta — ou não chegar.

## O técnico precisa ver o que foi combinado, não só executar

Quando o técnico só recebe uma instrução verbal ou um papel resumido, ele não tem acesso ao que realmente foi negociado com o cliente: peças previstas, prazo combinado, observações do atendimento anterior. Ver isso pelo próprio celular elimina o telefone de "e aí, o que era mesmo para fazer nesse serviço?"

## Isso também dá mais autonomia para quem está longe da oficina

Técnico que atende fora do balcão — em campo, na casa do cliente, na fazenda — não deveria depender de ligar para a oficina toda vez que precisa confirmar um detalhe da OS. Ter a informação na mão resolve isso sem depender de mais ninguém.

## Como o KomTec ajuda nisso

No módulo de Ordens de Serviço, o técnico abre a OS pelo próprio celular e vê peças, prazo e o que precisa ser feito — sem depender de anotação em papel ou de ligar para confirmar detalhes com a oficina.`,
          publicado: true,
        },
        {
          slug: 'assinatura-cliente-nfse-direto-da-os',
          titulo: 'Assinatura do cliente e NFS-e direto da OS: feche o ciclo sem sair do sistema',
          resumo: 'Encerrar uma OS não deveria virar uma segunda tarefa em outro sistema. Veja por que assinatura do cliente e emissão de nota fiscal direto da ordem finalizada fecham o ciclo com mais segurança.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/ordens-de-servico-oficina.webp',
          conteudo: `## Encerrar a OS deveria ser um só passo, não vários

Quando finalizar a ordem, colher a assinatura do cliente e emitir a nota fiscal são três etapas separadas — em papel, em outro programa — cada uma vira uma chance de algo ficar pendente sem ninguém perceber na hora.

## A assinatura fecha a confirmação de entrega

Ter a confirmação do cliente registrada junto com a própria OS, no momento da entrega, evita a situação incômoda de discutir depois se um serviço foi ou não aprovado como combinado. É uma prova simples, mas que evita muito desgaste.

## Emitir a nota direto da OS evita relançar tudo de novo

Quando a nota fiscal precisa ser gerada separadamente, alguém acaba redigitando itens, valores e dados do cliente que já estavam na própria ordem de serviço — mais uma chance de erro, e mais tempo até o cliente receber o documento fiscal.

## Como o KomTec ajuda nisso

O módulo de Ordens de Serviço permite colher a assinatura do cliente na entrega e emitir a NFS-e direto da ordem finalizada, sem sair do sistema nem redigitar as informações em outro lugar.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'estoque',
      nome: 'Estoque',
      icone: 'Package',
      imagem: '/komtec_backup.webp',
      descricao: 'Dicas para manter o estoque confiável — do alerta de falta à rastreabilidade de cada movimentação.',
      dicas: [
        {
          slug: 'estoque-minimo-alerta-evita-venda-perdida',
          titulo: 'Estoque mínimo: por que o alerta automático evita venda perdida',
          resumo: 'Descobrir que faltou peça só na hora da venda é o pior momento possível para descobrir isso. Veja por que o alerta de estoque mínimo é mais sobre venda do que sobre estoque.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_backup.webp',
          conteudo: `## Faltar estoque na hora da venda é a pior hora de descobrir

Quando o controle de estoque baixo depende de alguém perceber visualmente na prateleira, o problema só aparece no pior momento possível — com o cliente já esperando no balcão ou o orçamento já aprovado, esperando confirmação de disponibilidade.

## O alerta muda o problema de reativo para preventivo

Ser avisado quando um item se aproxima do estoque mínimo, antes de zerar de vez, dá tempo de repor com calma — negociando prazo e preço com o fornecedor, em vez de comprar correndo, muitas vezes pagando mais caro por causa da urgência.

## Cada produto tem seu próprio ritmo de reposição

Produto de giro rápido precisa de um mínimo diferente de um produto que vende poucas vezes por mês. Definir esse número por produto, e não um valor genérico para todo o estoque, é o que faz o alerta realmente funcionar em vez de disparar sem parar ou não disparar quando deveria.

## Como o KomTec ajuda nisso

O módulo de Estoque permite definir o estoque mínimo por produto e avisa automaticamente quando esse limite se aproxima — dando tempo de repor antes que a falta apareça na hora da venda.`,
          publicado: true,
        },
        {
          slug: 'rastreabilidade-por-lote-estoque',
          titulo: 'Rastreabilidade por lote: saiba exatamente o que saiu e para onde',
          resumo: 'Quando um lote específico tem algum problema, a pergunta urgente é "quem já comprou isso?". Veja por que rastrear por lote responde essa pergunta em minutos, não em dias.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_backup.webp',
          conteudo: `## Sem rastreio por lote, um problema pontual vira um problema geral

Quando o controle de estoque não diferencia lotes, um defeito identificado numa remessa específica obriga a desconfiar de todo o estoque daquele produto — porque não há como saber, sem essa informação, quais unidades vieram exatamente daquela remessa problemática.

## Rastrear por lote transforma isso numa lista específica

Com o lote registrado desde a entrada, é possível saber exatamente quais vendas saíram daquele lote específico — em vez de revisar o estoque inteiro do produto, a checagem fica restrita a quem realmente precisa ser avisado ou atendido.

## Isso também ajuda no dia a dia, não só em situação de problema

Saber a data de entrada de cada lote ajuda a priorizar a saída do estoque mais antigo primeiro, reduzindo produto parado ou vencido na prateleira — um ganho que aparece todo mês, não só quando algo dá errado.

## Como o KomTec ajuda nisso

O módulo de Estoque oferece rastreabilidade por lote em cada movimentação, com histórico completo de entradas e saídas — para que, se for preciso, dê para saber rápido exatamente o que saiu, de qual lote e para qual venda.`,
          publicado: true,
        },
        {
          slug: 'inventario-fisico-ainda-importa',
          titulo: 'Inventário: por que contar fisicamente ainda importa, mesmo com sistema automatizado',
          resumo: 'O sistema calcula o saldo certo com base no que foi registrado — mas só o inventário físico mostra se algo não foi registrado direito. Veja por que as duas coisas se completam.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_backup.webp',
          conteudo: `## O sistema é tão certo quanto o que foi lançado nele

Um saldo de estoque automatizado só está correto se toda entrada, saída e ajuste realmente aconteceu como foi registrado. Quando algo escapa do fluxo normal — uma devolução não lançada, uma perda não registrada — o saldo no sistema começa a divergir do que existe fisicamente na prateleira, sem nenhum aviso de que isso está acontecendo.

## O inventário físico é o que revela essa divergência

Contar fisicamente de tempos em tempos é a única forma de confirmar que o saldo do sistema ainda reflete a realidade. Sem essa checagem periódica, pequenas divergências se acumulam por meses até virarem uma surpresa desagradável — falta ou sobra que ninguém sabe explicar.

## Depois de contar, o ajuste também precisa ficar registrado

De nada adianta fazer o inventário físico se a diferença encontrada não é lançada de volta no sistema como um ajuste explicado. Sem esse fechamento, a próxima contagem começa do mesmo jeito incerto que a anterior.

## Como o KomTec ajuda nisso

O módulo de Estoque permite registrar o inventário físico e lançar os ajustes encontrados diretamente, mantendo o histórico de movimentações completo — para que o saldo do sistema continue confiável entre uma contagem e outra.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'dashboard-e-relatorios',
      nome: 'Dashboard e Relatórios',
      icone: 'BarChart3',
      imagem: '/komtec_relatorios.webp',
      descricao: 'Um sistema só é tão bom quanto os relatórios que ele entrega — dicas para transformar dado lançado em decisão.',
      dicas: [
        {
          slug: 'sistema-bom-e-o-relatorio-que-ele-entrega',
          titulo: 'Por que um sistema só é tão bom quanto os relatórios que ele entrega',
          resumo: 'De nada adianta lançar venda, compra e parcela certinho se, na hora de decidir, ninguém consegue enxergar o retrato completo. Veja por que o relatório é o verdadeiro retorno de todo dado registrado no sistema.',
          data: 'Agosto de 2026',
          tempoLeitura: '4 min de leitura',
          imagem: '/komtec_relatorios.webp',
          conteudo: `## Todo módulo alimenta o mesmo destino final

Venda lançada, compra registrada, parcela baixada, estoque movimentado — cada módulo faz sua parte, mas o valor de tudo isso junto só aparece quando esses dados viram uma visão clara para quem precisa decidir. Um sistema com módulos ótimos e relatório fraco entrega só metade do que promete.

## Dado sem relatório é trabalho que não vira decisão

Lançar informação certinho todo dia, sem nunca transformar isso numa visão que ajude a decidir, é sustentar um esforço que não retorna nada em troca. O relatório é o momento em que o trabalho de registrar cada operação finalmente vira algo útil: "vender mais isso", "cortar aquilo", "repor aquele produto".

## Bom relatório responde à pergunta antes de ser feita

Um relatório realmente bom não obriga quem está olhando a caçar a informação — ele já organiza, compara e destaca o que importa, para que a decisão apareça naturalmente ao ler, sem precisar cruzar planilha nenhuma por fora.

## Como o KomTec ajuda nisso

O módulo de Dashboard e Relatórios reúne os indicadores de vendas, estoque e financeiro já organizados e prontos, exatamente para que todo o dado lançado nos outros módulos do sistema realmente vire decisão — não fique só registrado, esperando alguém montar uma planilha para entender.`,
          publicado: true,
        },
        {
          slug: 'relatorios-tempo-real-decisao-atualizada',
          titulo: 'Relatório em tempo real: decidir com o dado de agora, não do fim do mês',
          resumo: 'Esperar o fechamento do mês para saber como o negócio está indo é decidir sempre com atraso. Veja por que acompanhar indicadores em tempo real muda o momento em que um problema é percebido.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_relatorios.webp',
          conteudo: `## Relatório de fim de mês é sempre uma notícia atrasada

Quando o único momento de olhar os números é o fechamento mensal, qualquer problema que começou na primeira semana só é percebido semanas depois — tempo suficiente para o que era pequeno virar grande.

## Gráfico por período mostra a tendência, não só o total

Ver o total vendido no mês diz pouco sobre o que está acontecendo agora. Comparar por período — semana a semana, por exemplo — mostra se a empresa está subindo, caindo ou estável, o que é exatamente o tipo de sinal que permite agir antes do fechamento confirmar o resultado.

## Tempo real não é luxo, é antecipação

A vantagem de um indicador atualizado na hora não é só conveniência — é a diferença entre reagir a um problema já consolidado e ajustar o rumo enquanto ele ainda está começando.

## Como o KomTec ajuda nisso

O módulo de Dashboard e Relatórios acompanha os indicadores da empresa em tempo real, com gráficos organizados por período — para que a decisão use o dado de agora, não uma fotografia de semanas atrás.`,
          publicado: true,
        },
        {
          slug: 'relatorios-em-pdf-compartilhar-decisao',
          titulo: 'Relatórios exportáveis em PDF: leve a decisão para quem precisa ver',
          resumo: 'Nem toda decisão é tomada por quem tem acesso ao sistema. Veja por que exportar o relatório em PDF é o que leva o número certo até o contador, o sócio ou o banco.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_relatorios.webp',
          conteudo: `## Nem todo mundo que precisa do número tem login no sistema

Contador, sócio, banco na hora de negociar uma linha de crédito — várias das pessoas que mais precisam enxergar a saúde do negócio não acessam o sistema no dia a dia. Se o relatório só existe dentro da tela, essa informação simplesmente não chega até quem precisa dela.

## PDF evita a versão "resumida de memória"

Sem um relatório para exportar, é comum alguém repassar os números de memória ou montar um resumo à mão para enviar — e nesse meio de campo, informação se perde ou se distorce. Exportar o relatório real evita esse "telefone sem fio" dos números.

## Documento formal também facilita negociação externa

Levar um relatório de vendas ou financeiro organizado para uma conversa com fornecedor, banco ou investidor passa mais credibilidade do que uma descrição verbal — e evita a pergunta seguinte de "tem como me mandar isso por escrito?"

## Como o KomTec ajuda nisso

Os relatórios de vendas, estoque e financeiro do módulo de Dashboard e Relatórios são exportáveis em PDF com um clique — prontos para sair do sistema e chegar até quem precisa ver, mesmo sem acesso direto ao KomTec.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'clientes-e-fornecedores',
      nome: 'Clientes e Fornecedores',
      icone: 'Users',
      imagem: '/komtec_parceiros.webp',
      descricao: 'Um cadastro completo e organizado é a base de qualquer venda, compra ou atendimento bem feito.',
      dicas: [
        {
          slug: 'consulta-automatica-cnpj-cadastro',
          titulo: 'Consulta automática de CNPJ: cadastro completo sem digitar tudo à mão',
          resumo: 'Cadastrar uma empresa nova digitando razão social, endereço e inscrição estadual à mão é onde mais aparece erro de digitação. Veja por que a consulta automática de CNPJ resolve isso.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_parceiros.webp',
          conteudo: `## Cadastrar empresa à mão é repetir informação que já existe em algum lugar

Razão social, endereço, CNAE, inscrição estadual — quando esses dados são digitados manualmente a partir do que o próprio cliente informou, qualquer erro de digitação (ou de informação errada passada por telefone) vira um cadastro incorreto que só aparece como problema depois, na hora de emitir uma nota fiscal, por exemplo.

## A consulta automática traz o dado oficial direto

Buscar o CNPJ automaticamente já preenche razão social, endereço e outros dados a partir da fonte oficial, sem depender de ninguém digitar ou repassar essa informação por telefone. O cadastro nasce correto, na fonte certa.

## Inscrição estadual é um detalhe que costuma faltar

Muita consulta de CNPJ disponível por aí não traz a inscrição estadual — um dado essencial para operação fiscal. Vale garantir que a fonte usada realmente traga esse campo, para não precisar completar manualmente depois.

## Como o KomTec ajuda nisso

O módulo de Clientes e Fornecedores consulta o CNPJ automaticamente e já preenche razão social, endereço e inscrição estadual — reduzindo o cadastro manual e o risco de erro de digitação num dado que é usado depois em vendas e notas fiscais.`,
          publicado: true,
        },
        {
          slug: 'historico-compras-cliente-nao-perguntar-duas-vezes',
          titulo: 'Histórico de compras do cliente: a informação que evita perguntar duas vezes',
          resumo: 'Atender um cliente sem saber o que ele já comprou antes é recomeçar o relacionamento do zero toda vez. Veja por que ter esse histórico à mão muda a qualidade do atendimento.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_parceiros.webp',
          conteudo: `## Cada atendimento sem histórico é um recomeço

Quando o vendedor ou atendente não tem acesso ao que o cliente já comprou antes, cada contato vira uma conversa do zero — perguntando de novo informações que a empresa já deveria saber, o que passa a impressão de desorganização, mesmo quando o atendimento em si é bom.

## O histórico ajuda a vender melhor, não só a atender melhor

Saber que um cliente compra um determinado tipo de peça com certa frequência permite oferecer proativamente a reposição antes mesmo dele pedir — uma venda que só acontece porque a informação estava disponível na hora certa.

## Também ajuda a identificar o cliente que sumiu

Um histórico organizado por cliente também mostra quem comprava regularmente e parou — um sinal valioso para reativar contato antes que esse cliente vire cliente de outra empresa.

## Como o KomTec ajuda nisso

O módulo de Clientes e Fornecedores mantém o histórico de compras vinculado a cada cadastro, junto com contatos, endereços e documentos — para que qualquer atendimento comece já sabendo o que veio antes, sem precisar perguntar de novo.`,
          publicado: true,
        },
        {
          slug: 'endereco-entrega-separado-cadastro',
          titulo: 'Endereço de entrega separado do cadastro: evita erro na hora da entrega',
          resumo: 'Nem sempre o endereço fiscal do cliente é para onde a mercadoria deve ir. Veja por que separar endereço de cadastro e endereço de entrega evita retrabalho e entrega no lugar errado.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_parceiros.webp',
          conteudo: `## Um cliente pode ter mais de um lugar relevante

O endereço usado no cadastro fiscal do cliente (matriz, escritório) nem sempre é o mesmo lugar onde a mercadoria precisa chegar — pode ser uma fazenda, uma obra, uma filial. Tratar os dois como se fossem sempre o mesmo endereço é onde nasce a entrega no lugar errado.

## Apelido de endereço facilita identificar rápido

Quando o cliente tem mais de um endereço cadastrado, dar um apelido simples para cada um ("Fazenda Santa Rita", "Obra Centro") evita a confusão de escolher pelo texto completo do endereço toda vez que for gerar uma venda ou entrega.

## Editar sem recriar o cadastro inteiro

Endereço muda, apelido muda, CNAE é atualizado — poder editar esses dados pontualmente, sem precisar refazer o cadastro do cliente do zero, mantém a base de clientes correta com menos esforço ao longo do tempo.

## Como o KomTec ajuda nisso

O módulo de Clientes e Fornecedores permite cadastrar endereço de entrega separado do endereço principal, com apelido próprio, além de editar CNAE e outros dados do cadastro sem recriar o cliente — reduzindo o risco de entrega no endereço errado.`,
          publicado: true,
        },
      ],
    },
    {
      id: 'nota-fiscal-eletronica',
      nome: 'Nota Fiscal Eletrônica',
      icone: 'FileText',
      imagem: '/komtec_nfe.webp',
      descricao: 'Emitir nota fiscal não deveria ser a parte mais estressante do fechamento da venda.',
      dicas: [
        {
          slug: 'consulta-status-sefaz-nfe',
          titulo: 'Consulta de status na SEFAZ: saiba na hora se a nota foi autorizada',
          resumo: 'Emitir a nota e só descobrir depois que ela foi rejeitada é um dos momentos mais frustrantes da rotina fiscal. Veja por que a consulta direta à SEFAZ muda esse momento.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_nfe.webp',
          conteudo: `## A pior hora de descobrir um problema é depois que o cliente já saiu

Quando o status da nota fiscal só é conferido manualmente, tempo depois da emissão, uma rejeição pode passar despercebida até o cliente já ter saído com a mercadoria — nesse ponto, corrigir e reemitir vira um problema bem maior do que seria na hora.

## Saber o motivo da rejeição na hora já orienta a correção

Não basta saber que a nota foi rejeitada — o que realmente ajuda é entender o motivo assim que ele aparece, para corrigir e reemitir rápido, sem precisar investigar código de erro da SEFAZ por conta própria.

## Consultar direto evita depender de terceiros para confirmar

Ligar para o contador ou esperar um relatório de terceiros para saber se a nota foi autorizada é uma etapa a mais que atrasa a confirmação. Consultar o status direto na fonte (SEFAZ) fecha essa dúvida sem intermediário.

## Como o KomTec ajuda nisso

O módulo de Nota Fiscal Eletrônica consulta o status direto na SEFAZ e mostra o motivo de uma eventual rejeição na hora, já orientando a correção — sem esperar horas ou depender de terceiros para saber se a nota foi autorizada.`,
          publicado: true,
        },
        {
          slug: 'calculo-automatico-impostos-nfe',
          titulo: 'Cálculo automático de impostos: menos erro manual na hora de emitir',
          resumo: 'Calcular imposto na mão, item por item, é onde mais aparece divergência entre o que devia ser cobrado e o que realmente saiu na nota. Veja por que o cálculo automático muda isso.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_nfe.webp',
          conteudo: `## Imposto calculado à mão é terreno fértil para erro

Cada item de uma nota pode ter uma regra tributária ligeiramente diferente — dependendo de NCM, operação e situação do cliente. Calcular isso manualmente, item por item, é onde mais aparece divergência entre o valor certo e o que efetivamente sai na nota.

## O erro de cálculo custa caro dos dois lados

Cobrar imposto a menos gera passivo fiscal para a empresa; cobrar a mais reduz a margem sem necessidade ou gera reclamação do cliente. Um cálculo automático, aplicado de forma consistente em toda nota emitida, evita os dois lados desse problema.

## Consistência importa mais do que velocidade

O ganho de calcular automaticamente não é só a rapidez — é a certeza de que a mesma regra é aplicada sempre da mesma forma, sem depender de quem está emitindo a nota naquele dia estar lembrado de todos os detalhes tributários daquele produto.

## Como o KomTec ajuda nisso

O módulo de Nota Fiscal Eletrônica calcula os impostos automaticamente na emissão, com base nas regras tributárias de cada item — reduzindo o erro manual e mantendo o cálculo consistente em toda nota emitida.`,
          publicado: true,
        },
        {
          slug: 'danfe-email-automatico-cliente',
          titulo: 'DANFE por e-mail automático: o cliente recebe sem você ter que lembrar',
          resumo: 'Lembrar de enviar o DANFE manualmente para cada cliente, depois de cada venda, é uma tarefa fácil de esquecer num dia corrido. Veja por que automatizar esse envio evita esse esquecimento.',
          data: 'Agosto de 2026',
          tempoLeitura: '3 min de leitura',
          imagem: '/komtec_nfe.webp',
          conteudo: `## Enviar manualmente depende de lembrar, sempre

Quando o envio do DANFE (o PDF da nota fiscal) para o cliente depende de alguém lembrar de fazer isso depois da emissão, em algum dia mais corrido essa etapa acaba ficando para trás — e o cliente liga perguntando "cadê minha nota?"

## O cliente espera receber isso sem precisar pedir

Hoje, receber o documento fiscal por e-mail logo após a compra é uma expectativa básica do cliente, não um diferencial. Quando isso não acontece automaticamente, a empresa fica devendo uma etapa do atendimento sem perceber.

## Automatizar tira essa responsabilidade da memória de alguém

Assim como as parcelas geradas automaticamente na venda evitam esquecer de cobrar, automatizar o envio do DANFE evita esquecer de entregar um documento que o cliente já está esperando.

## Como o KomTec ajuda nisso

O módulo de Nota Fiscal Eletrônica envia o DANFE por e-mail automaticamente ao cliente assim que a nota é autorizada — sem depender de alguém lembrar de fazer esse envio manualmente.`,
          publicado: true,
        },
      ],
    },
  ],
};
