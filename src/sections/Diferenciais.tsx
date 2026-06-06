import { Shield, Globe, Building2, Zap, HeadphonesIcon, RefreshCw } from 'lucide-react';

const itens = [
  {
    icone: Building2,
    titulo: 'Multi-empresa',
    descricao: 'Cada empresa tem seus dados completamente isolados. Ideal para grupos com várias filiais ou negócios.',
    imagem: '/komtec_multi_empresa.png',
    gradiente: 'from-orange-500/60 via-amber-600/40 to-transparent',
    destaque: 'bg-orange-500/20 border-orange-400/30 text-orange-300',
    iconeCorFundo: 'bg-orange-500/20',
    iconeCorTexto: 'text-orange-300',
  },
  {
    icone: Shield,
    titulo: 'Segurança total',
    descricao: 'Autenticação com JWT, controle de acesso por perfil e auditoria completa de todas as operações.',
    imagem: '/komtec_seguranca.png',
    gradiente: 'from-indigo-500/60 via-blue-600/40 to-transparent',
    destaque: 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300',
    iconeCorFundo: 'bg-indigo-500/20',
    iconeCorTexto: 'text-indigo-300',
  },
  {
    icone: Globe,
    titulo: 'Acesso de qualquer lugar',
    descricao: 'Sistema 100% web — acesse do computador, tablet ou celular, sem instalar nada.',
    imagem: '/komtec_acesso_remoto.png',
    gradiente: 'from-emerald-500/60 via-teal-600/40 to-transparent',
    destaque: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300',
    iconeCorFundo: 'bg-emerald-500/20',
    iconeCorTexto: 'text-emerald-300',
  },
  {
    icone: Zap,
    titulo: 'Rápido e moderno',
    descricao: 'Interface ágil e responsiva, desenvolvida com tecnologia de ponta para máxima produtividade.',
    imagem: '/komtec_rapido_moderno.png',
    gradiente: 'from-yellow-500/60 via-orange-500/40 to-transparent',
    destaque: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-300',
    iconeCorFundo: 'bg-yellow-500/20',
    iconeCorTexto: 'text-yellow-300',
  },
  {
    icone: RefreshCw,
    titulo: 'Sempre atualizado',
    descricao: 'Novas funcionalidades entregues continuamente, sem necessidade de atualização manual.',
    imagem: '/komtec_atualizado.png',
    gradiente: 'from-violet-500/60 via-purple-600/40 to-transparent',
    destaque: 'bg-violet-500/20 border-violet-400/30 text-violet-300',
    iconeCorFundo: 'bg-violet-500/20',
    iconeCorTexto: 'text-violet-300',
  },
  {
    icone: HeadphonesIcon,
    titulo: 'Suporte especializado',
    descricao: 'Atendimento direto com a equipe técnica por WhatsApp e e-mail, com resposta rápida.',
    imagem: '/komtec_suporte.png',
    gradiente: 'from-cyan-500/60 via-sky-600/40 to-transparent',
    destaque: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300',
    iconeCorFundo: 'bg-cyan-500/20',
    iconeCorTexto: 'text-cyan-300',
  },
];

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="py-24"
      style={{ background: 'linear-gradient(to bottom, #5c1a06 0%, #2d0d03 40%, #100400 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/10 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-500/20 mb-5">
            Por que escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Diferenciais do{' '}
            <span className="text-orange-400">ERP KomTec Pro</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Desenvolvido especialmente para empresas brasileiras que precisam de um sistema simples, seguro e completo.
          </p>
        </div>

        {/* Grid 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {itens.map(item => {
            const Icon = item.icone;
            return (
              <div
                key={item.titulo}
                className="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-default"
              >
                {/* Imagem */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge do ícone — topo esquerdo */}
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center border backdrop-blur-sm ${item.destaque}`}>
                    <Icon className={`w-5 h-5 ${item.iconeCorTexto}`} />
                  </div>
                </div>

                {/* Borda brilhante no hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
