import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export function Contato() {
  const [form, setForm] = useState({ nome: '', empresa: '', telefone: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Abre WhatsApp com os dados do formulário
    const texto = encodeURIComponent(
      `Olá! Tenho interesse no ERP KomTec Pro.\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\nTelefone: ${form.telefone}\n${form.mensagem ? `Mensagem: ${form.mensagem}` : ''}`
    );
    window.open(`https://wa.me/5562993256370?text=${texto}`, '_blank');
    setEnviado(true);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
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
                  <p className="text-sm font-medium text-gray-800">komtec.komatsu@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                <p className="text-gray-500 text-sm">Nossa equipe vai entrar em contato em breve.</p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-6 text-orange-600 text-sm font-medium hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Nome *</label>
                  <input
                    required
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    value={form.nome}
                    onChange={e => setForm({ ...form, nome: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Empresa *</label>
                  <input
                    required
                    type="text"
                    placeholder="Nome da sua empresa"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    value={form.empresa}
                    onChange={e => setForm({ ...form, empresa: e.target.value })}
                  />
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
                  <label className="block text-xs font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="Alguma dúvida ou informação adicional..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white resize-none"
                    value={form.mensagem}
                    onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  />
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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
