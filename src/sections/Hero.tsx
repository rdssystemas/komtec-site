import { ArrowRight, CheckCircle } from 'lucide-react';

const destaques = [
  'Nota Fiscal Eletrônica integrada',
  'Multi-empresa com dados isolados',
  'Acesso via navegador, sem instalação',
];

export function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium mb-6">
            Sistema ERP 100% online
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Gerencie sua empresa com{' '}
            <span className="text-blue-300">simplicidade e eficiência</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
            O ERP KomTec reúne vendas, compras, estoque, financeiro e emissão de nota fiscal
            em um único sistema — fácil de usar, seguro e acessível de qualquer lugar.
          </p>

          <ul className="space-y-2 mb-10">
            {destaques.map(d => (
              <li key={d} className="flex items-center gap-2 text-blue-100 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-300 shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-800 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Solicitar demonstração gratuita
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#modulos"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Ver módulos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
