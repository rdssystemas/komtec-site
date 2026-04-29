import { Quote } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Jales Junior',
    empresa: 'A G M Peças',
    cargo: 'Proprietário',
    texto:
      'O KomTec resolveu o que a gente mais precisava: controle de estoque e emissão de nota fiscal no mesmo lugar. Simples de usar e o suporte atende na hora.',
  },
  {
    nome: 'William Carvalho',
    empresa: 'Ancora Reposição de Peças',
    cargo: 'Proprietário',
    texto:
      'Antes era tudo no papel e planilha. Com o KomTec a gente faz orçamento, venda e nota fiscal sem complicação. Mudou bastante a rotina aqui na loja.',
  },
  {
    nome: 'Mariano Henrique',
    empresa: 'Maq Filtro',
    cargo: 'Proprietário',
    texto:
      'Sistema completo e fácil de entender. O que mais gosto é poder acessar de qualquer lugar — fico de olho no movimento mesmo quando não estou na loja.',
  },
  {
    nome: 'Roberson Santos',
    empresa: 'KomTec Peças',
    cargo: 'Proprietário',
    texto:
      'Desenvolvemos o sistema para resolver os problemas que a gente mesmo enfrentava no dia a dia. Hoje usamos na nossa própria loja e não abrimos mão.',
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 bg-brand-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-blue-300 text-sm font-semibold uppercase tracking-wide">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Empresas que transformaram sua gestão com o ERP KomTec.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {depoimentos.map(d => (
            <div
              key={d.nome}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <Quote className="w-6 h-6 text-blue-300 shrink-0" />
              <p className="text-blue-50 text-sm leading-relaxed flex-1">"{d.texto}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{d.nome}</p>
                <p className="text-blue-300 text-xs">{d.cargo} — {d.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
