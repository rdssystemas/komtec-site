import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';

const SITE_TITLE = 'ERP KomTec — Sistema de Gestão Empresarial Online | Vendas, NF-e, Estoque';
const PAGE_TITLE = 'Nossa História — ERP KomTec Pro';

interface Etapa {
  periodo: string;
  titulo: string;
  paragrafos: string[];
}

const ETAPAS: Etapa[] = [
  {
    periodo: '1988',
    titulo: 'O primeiro emprego',
    paragrafos: [
      'Em julho de 1988, em Cuiabá (MT), aos 17 anos e com pouco estudo, consegui minha primeira carteira assinada numa grande construtora. No registro eu era auxiliar de lubrificação; na prática, trabalhava no lavador, lavando máquinas da linha amarela e veículos. Um dia lavei com água um filtro de ar que deveria ser limpo com ar comprimido. A explicação que recebi naquele dia — o que era a peça, para que servia e como cuidar dela — ficou gravada até hoje.',
    ],
  },
  {
    periodo: 'Anos 1990',
    titulo: 'No campo',
    paragrafos: [
      'Fui para as obras em Rondônia e depois em São Paulo. Aprendi a dirigir num caminhão de comboio, virei lubrificador de campo e aprendi a operar trator de esteiras, motoscraper e carregadeira de rodas.',
    ],
  },
  {
    periodo: '2007 a 2012',
    titulo: 'Controlando a manutenção',
    paragrafos: [
      'Voltei à construtora onde tudo começou, agora como controlador de manutenção, em obras de usina hidrelétrica e de ferrovia em Goiás. Controlava lubrificantes, filtros e combustível, garantias, pneus, abastecimentos, horas trabalhadas e o que era custo da obra ou da central de equipamentos. O sistema de manutenção era instalado no computador da obra; quando a máquina mudava de obra, os dados iam num disquete, junto com a pasta de papel.',
      'Ali propus uma parada semanal obrigatória: em horário marcado, cada equipamento passava pelo lavador, pela oficina e pela borracharia. A lista de máquinas paradas na oficina caiu drasticamente.',
    ],
  },
  {
    periodo: '2012 a 2017',
    titulo: 'Do outro lado do balcão',
    paragrafos: [
      'Fui trabalhar em concessionárias: primeiro numa representante de marcas chinesas, depois na representante da Komatsu em Goiás, Distrito Federal e Tocantins. Pela primeira vez vi de dentro como o cliente é atendido — e comparei com o atendimento que eu recebia nas obras.',
      'Comecei no atendimento ao cliente e depois virei vendedor de peças. Visitei clientes pequenos, médios e grandes em GO, TO, DF e SP: construtoras, fazendas, minerações. Medição de material rodante, relatório fotográfico da máquina, plano de manutenção periódica — aprendi a enxergar a necessidade do cliente antes de a máquina parar. E entendi que vender é bem diferente de comprar.',
    ],
  },
  {
    periodo: '2018',
    titulo: 'Nasce a KomTec',
    paragrafos: [
      'Depois de uma última passagem pelo pós-venda, em 2018 nasceu a KomTec Peças.',
    ],
  },
  {
    periodo: 'Hoje',
    titulo: 'O sistema — um sonho antigo',
    paragrafos: [
      'A vontade de criar um sistema de gestão de equipamentos me acompanha há muitos anos. Liguei um computador pela primeira vez aos 30 anos, num curso de informática numa carreta do Sesi que chegou ao meu bairro, em Cuiabá. Fiz um curso de web designer, mas não era bem aquilo. Quando vi o sistema em disquete nas obras, quis fazer algo mais moderno — sem saber por onde começar. Estudei Java sozinho, depois em curso presencial em Goiânia e em cursos on-line; experimentei outra linguagem e voltei ao Java. Até que, sentindo falta de recursos no sistema de gestão que usávamos, decidi construir o nosso. Assim nasceu o ERP KomTec Pro.',
    ],
  },
];

export function NossaHistoria() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="text-orange-300 text-sm font-medium hover:text-white transition-colors">← Voltar ao início</a>
          <span className="block text-xs font-semibold text-orange-300 uppercase tracking-widest mt-6">
            Nossa História
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-3xl leading-tight">
            De lavador de máquinas a criador de um ERP
          </h1>
          <p className="text-orange-200/80 mt-4 max-w-xl text-base md:text-lg">
            38 anos ao lado dos equipamentos pesados.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-14 md:py-20">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-14">
          Me chamo <strong className="text-gray-900">Roberson Santos</strong>, fundador da KomTec. Comecei aos 17 anos
          lavando máquinas pesadas e, 38 anos depois, criei o ERP KomTec Pro.
        </p>

        <ol className="relative border-l-2 border-orange-200 ml-2 md:ml-3 space-y-12">
          {ETAPAS.map(etapa => (
            <li key={etapa.periodo} className="pl-8 md:pl-10 relative">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-orange-600 ring-4 ring-orange-100" />
              <span className="inline-block text-xs font-semibold text-orange-700 bg-orange-50 rounded-full px-3 py-1 uppercase tracking-wide">
                {etapa.periodo}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-3 mb-3">{etapa.titulo}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {etapa.paragrafos.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-16 rounded-2xl bg-orange-50 border border-orange-100 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Do disquete à nuvem</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Do lavador ao ERP, cada parte do sistema carrega um pouco dessa estrada. Eu sei como é ser atendido — e
            hoje procuro fazer melhor.
          </p>
          <p className="mt-6 text-gray-900 font-semibold">— Roberson Santos, fundador da KomTec</p>
        </section>

        <div className="mt-12 text-center">
          <a
            href="/#contato"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            Fale com a gente
          </a>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
