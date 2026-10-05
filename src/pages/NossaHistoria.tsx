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

const MARCOS = [
  { ano: '1988', texto: 'Primeiro emprego, com máquinas pesadas' },
  { ano: '2007', texto: 'Controle de manutenção nas obras' },
  { ano: '2018', texto: 'Nasce a KomTec Peças' },
  { ano: 'Hoje', texto: 'ERP KomTec Pro na nuvem' },
];

const MISSAO =
  'Simplificar a gestão de empresas com um sistema feito por quem viveu o dia a dia da operação, com atendimento próximo e de verdade.';

const VISAO =
  'Ser referência em gestão para empresas de equipamentos, peças e serviços no Brasil, levando o controle do papel e do disquete para a nuvem, de forma acessível.';

const VALORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Experiência de campo',
    texto: 'Cada funcionalidade do sistema nasce de um problema real da operação.',
  },
  {
    titulo: 'Atendimento próximo',
    texto: 'Tratamos cada cliente da forma como gostaríamos de ser atendidos.',
  },
  {
    titulo: 'Foco na necessidade do cliente',
    texto: 'Ouvimos, entendemos a rotina de cada empresa e evoluímos o sistema a partir do que ela realmente precisa.',
  },
  {
    titulo: 'Honestidade e transparência',
    texto: 'Preço claro, sem letras miúdas e sem prometer o que o sistema não faz.',
  },
  {
    titulo: 'Simplicidade',
    texto: 'Telas e linguagem pensadas para quem usa o sistema no dia a dia, sem jargão técnico.',
  },
];

export function NossaHistoria() {
  useEffect(() => {
    if (window.location.hash === '#missao') {
      document.getElementById('missao')?.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 border-b border-orange-100 pt-28 pb-16 md:pt-36 md:pb-24">
        <div aria-hidden className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <a href="/" className="text-orange-700 text-sm font-medium hover:text-orange-900 transition-colors">← Voltar ao início</a>

          <div className="text-center mt-8 md:mt-10">
            <span className="inline-block text-xs font-semibold text-orange-700 bg-white/70 border border-orange-200 rounded-full px-4 py-1.5 uppercase tracking-widest">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-6 max-w-4xl mx-auto leading-tight tracking-tight">
              Do canteiro de obras à{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                criação de um ERP
              </span>
            </h1>
            <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg md:text-xl">
              38 anos ao lado dos equipamentos pesados.
            </p>
          </div>

          <dl className="mt-12 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {MARCOS.map(marco => (
              <div key={marco.ano} className="rounded-2xl bg-white/80 border border-orange-100 shadow-sm px-4 py-5 text-center">
                <dt className="text-2xl md:text-3xl font-extrabold text-orange-600">{marco.ano}</dt>
                <dd className="text-sm text-gray-600 mt-1">{marco.texto}</dd>
              </div>
            ))}
          </dl>
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

        <section id="missao" className="mt-20 scroll-mt-24">
          <span className="block text-xs font-semibold text-orange-700 uppercase tracking-widest">
            Quem somos
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-8">Missão, Visão e Valores</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-orange-100 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-3">Missão</h3>
              <p className="text-gray-800 text-lg leading-relaxed">{MISSAO}</p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-3">Visão</h3>
              <p className="text-gray-800 text-lg leading-relaxed">{VISAO}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-100 p-6 md:p-8">
            <h3 className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-6">Valores</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {VALORES.map(valor => (
                <li key={valor.titulo} className="rounded-xl bg-white border-l-4 border-orange-400 p-4 shadow-sm">
                  <p className="text-gray-900 font-semibold">{valor.titulo}</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">{valor.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

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
