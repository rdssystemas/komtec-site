import { ArrowRight, LayoutDashboard } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-orange-600 py-16 px-6">
      {/* Círculos decorativos de fundo */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-orange-500/40 pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-orange-700/30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-orange-200 text-sm font-semibold uppercase tracking-widest mb-3">
          Sem fidelidade · Cancele quando quiser
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
          Pronto para simplificar a gestão<br className="hidden md:block" /> da sua empresa?
        </h2>
        <p className="text-orange-100 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
          Escolha um plano e comece hoje — ou fale com nossa equipe para uma demonstração personalizada e gratuita.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors text-sm shadow-lg"
          >
            <LayoutDashboard className="w-4 h-4" />
            Falar com um especialista
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
          >
            Solicitar demo gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
