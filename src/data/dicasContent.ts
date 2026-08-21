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
  ],
};
