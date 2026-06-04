import { Shield, Globe, Building2, Zap, HeadphonesIcon, RefreshCw } from 'lucide-react';

const itens = [
  {
    icone: Building2,
    titulo: 'Multi-empresa',
    descricao: 'Cada empresa tem seus dados completamente isolados. Ideal para grupos com várias filiais ou negócios.',
  },
  {
    icone: Shield,
    titulo: 'Segurança total',
    descricao: 'Autenticação com JWT, controle de acesso por perfil e auditoria completa de todas as operações.',
  },
  {
    icone: Globe,
    titulo: 'Acesso de qualquer lugar',
    descricao: 'Sistema 100% web — acesse do computador, tablet ou celular, sem instalar nada.',
  },
  {
    icone: Zap,
    titulo: 'Rápido e moderno',
    descricao: 'Interface ágil e responsiva, desenvolvida com tecnologia de ponta para máxima produtividade.',
  },
  {
    icone: RefreshCw,
    titulo: 'Sempre atualizado',
    descricao: 'Novas funcionalidades entregues continuamente, sem necessidade de atualização manual.',
  },
  {
    icone: HeadphonesIcon,
    titulo: 'Suporte especializado',
    descricao: 'Atendimento direto com a equipe técnica por WhatsApp e e-mail, com resposta rápida.',
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Por que escolher</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Diferenciais do ERP KomTec Pro
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Desenvolvido especialmente para empresas brasileiras que precisam de um sistema simples, seguro e completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itens.map(item => {
            const Icon = item.icone;
            return (
              <div key={item.titulo} className="flex gap-4 p-5 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
