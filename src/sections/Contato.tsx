import { useState } from 'react';
import { Send, MessageCircle, Gift, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

type Etapa = 'form' | 'confirmando' | 'enviado';

export function Contato() {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    ofertasAniversario: false,
  });
  const [etapa, setEtapa] = useState<Etapa>('form');

  const formatarData = (iso: string) => {
    if (!iso) return '';
    const [ano, mes, dia] = iso.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEtapa('confirmando');
  };

  const handleConfirmar = () => {
    const texto = encodeURIComponent(
      `Olá! Tenho interesse no ERP KomTec Pro.\n\nNome: ${form.nome}\nCPF: ${form.cpf}\nNascimento: ${formatarData(form.dataNascimento)}\nTelefone: ${form.telefone}\nE-mail: ${form.email}${form.ofertasAniversario ? '\n✅ Aceita receber ofertas especiais no aniversário' : ''}`
    );
    window.open(`https://wa.me/5562993256370?text=${texto}`, '_blank');
    setEtapa('enviado');
    trackEvent('generate_lead', { origem: 'formulario_contato' });
  };

  const handleReiniciar = () => {
    setForm({ nome: '', cpf: '', dataNascimento: '', telefone: '', email: '', ofertasAniversario: false });
    setEtapa('form');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texto lateral */}
          <div>
            <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Contato</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Fale com nossa equipe
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Preencha o formulário e entraremos em contato para apresentar o sistema e
              responder todas as suas dúvidas. Sem compromisso.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">WhatsApp</p>
                  <p className="text-sm font-medium text-gray-800">Atendimento rápido pelo chat</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">E-mail</p>
                  <p className="text-sm font-medium text-gray-800">contato@erpkomtec.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-pink-50 rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Ofertas exclusivas</p>
                  <p className="text-sm font-medium text-gray-800">Promoções especiais no seu aniversário</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card principal */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">

            {/* Etapa: formulário */}
            {etapa === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Nome completo *</label>
                  <input
                    required
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    value={form.nome}
                    onChange={e => setForm({ ...form, nome: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">CPF *</label>
                    <input
                      required
                      type="text"
                      placeholder="000.000.000-00"
                      maxLength={14}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                      value={form.cpf}
                      onChange={e => setForm({ ...form, cpf: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Data de nascimento *</label>
                    <input
                      required
                      type="date"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                      value={form.dataNascimento}
                      onChange={e => setForm({ ...form, dataNascimento: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Telefone / WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    value={form.telefone}
                    onChange={e => setForm({ ...form, telefone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">E-mail *</label>
                  <input
                    required
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100 cursor-pointer">
                  <input
                    type="checkbox"
                    id="ofertasAniversario"
                    className="mt-0.5 w-4 h-4 accent-orange-600 cursor-pointer shrink-0"
                    checked={form.ofertasAniversario}
                    onChange={e => setForm({ ...form, ofertasAniversario: e.target.checked })}
                  />
                  <label htmlFor="ofertasAniversario" className="text-xs text-gray-700 leading-relaxed cursor-pointer">
                    Desejo receber <span className="font-semibold text-orange-700">ofertas especiais no meu aniversário</span> e comunicações sobre promoções exclusivas do ERP KomTec.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar demonstração via WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Ao enviar, você será redirecionado ao nosso WhatsApp.
                </p>
                <p className="text-xs text-gray-400">* Campos obrigatórios</p>
                <p className="text-xs text-gray-400">
                  Ao continuar, você concorda com nossa{' '}
                  <a href="/privacidade" className="text-orange-600 hover:underline">Política de Privacidade</a>.
                </p>
              </form>
            )}

            {/* Etapa: confirmação */}
            {etapa === 'confirmando' && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Confirme seus dados</h3>
                  <p className="text-sm text-gray-500">Verifique as informações antes de ir ao WhatsApp.</p>
                </div>

                <ul className="space-y-2 text-sm">
                  {[
                    { label: 'Nome', valor: form.nome },
                    { label: 'CPF', valor: form.cpf },
                    { label: 'Nascimento', valor: formatarData(form.dataNascimento) },
                    { label: 'Telefone', valor: form.telefone },
                    { label: 'E-mail', valor: form.email },
                  ].map(({ label, valor }) => (
                    <li key={label} className="flex gap-2 py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-400 w-24 shrink-0">{label}</span>
                      <span className="font-medium text-gray-900 break-all">{valor}</span>
                    </li>
                  ))}
                  {form.ofertasAniversario && (
                    <li className="flex items-center gap-2 pt-1 text-orange-700 text-xs">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      Receberá ofertas especiais no aniversário
                    </li>
                  )}
                </ul>

                <button
                  onClick={handleConfirmar}
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirmar e ir ao WhatsApp
                </button>
                <button
                  onClick={() => setEtapa('form')}
                  className="w-full py-2.5 border border-gray-300 text-gray-600 hover:bg-gray-100 font-medium rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar e editar
                </button>
              </div>
            )}

            {/* Etapa: enviado */}
            {etapa === 'enviado' && (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                <p className="text-gray-500 text-sm">Nossa equipe vai entrar em contato em breve.</p>
                <button
                  onClick={handleReiniciar}
                  className="mt-6 text-orange-600 text-sm font-medium hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
