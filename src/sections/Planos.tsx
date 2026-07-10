import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { getIcon } from '../data/iconMap';
import type { PlanosContent } from '../data/defaultContent';

export function Planos({ content }: { content: PlanosContent }) {
  const [form, setForm] = useState({ nome: '', telefone: '', horario: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Olá! Gostaria de conhecer uma proposta do ERP KomTec.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}${form.horario ? `\nMelhor horário: ${form.horario}` : ''}`
    );
    window.open(`https://wa.me/5562993256370?text=${texto}`, '_blank');
    setEnviado(true);
  };

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">{content.subtitulo}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {content.titulo}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              {content.texto}
            </p>

            <div className="space-y-7">
              {content.diferenciais.map(d => {
                const Icon = getIcon(d.icone);
                return (
                  <div key={d.titulo} className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">{d.titulo}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{d.descricao}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">Ligamos para você</h3>
                <p className="text-sm text-gray-400">Sem compromisso · Resposta em até 1 dia útil</p>
              </div>
            </div>

            {enviado ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">📞</div>
                <p className="font-semibold text-gray-900 text-lg">Recebemos seu contato!</p>
                <p className="text-sm text-gray-500 mt-2">Nossa equipe vai ligar em breve para entender melhor o seu negócio.</p>
                <button
                  onClick={() => { setForm({ nome: '', telefone: '', horario: '' }); setEnviado(false); }}
                  className="mt-5 text-orange-600 text-sm font-medium hover:underline"
                >
                  Enviar outro contato
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Seu nome *</label>
                    <input
                      required type="text" placeholder="Como podemos te chamar?"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Telefone / WhatsApp *</label>
                    <input
                      required type="tel" placeholder="(00) 00000-0000"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Melhor horário para ligar</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-gray-700"
                      value={form.horario} onChange={e => setForm({ ...form, horario: e.target.value })}
                    >
                      <option value="">Qualquer horário</option>
                      <option value="Manhã — 8h às 12h">Manhã — 8h às 12h</option>
                      <option value="Início da tarde — 12h às 15h">Início da tarde — 12h às 15h</option>
                      <option value="Final da tarde — 15h às 18h">Final da tarde — 15h às 18h</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!form.nome || !form.telefone}
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                  onClick={handleSubmit as any}
                >
                  <Phone className="w-4 h-4" />
                  Quero receber uma ligação
                </button>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400 mb-2">Prefere pelo WhatsApp agora?</p>
                  <a
                    href="https://wa.me/5562993256370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
