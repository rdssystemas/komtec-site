import { useEffect, useState } from 'react';
import { Quote, Send, CheckCircle2 } from 'lucide-react';
import type { DepoimentosContent, DepoimentoItem } from '../data/defaultContent';

const API_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? 'https://api.erpkomtec.com.br';

// Normaliza texto digitado em CAIXA ALTA (ou tudo minúsculo) para exibição formal no site —
// não altera o que fica salvo no banco, só como aparece aqui.
function formatarFrase(texto: string): string {
  if (!texto) return texto;
  const minusculo = texto.toLowerCase();
  return minusculo.replace(/(^\s*\S|[.!?\n]\s*\S)/g, (m) => m.toUpperCase());
}

function formatarNome(texto: string): string {
  if (!texto) return texto;
  return texto
    .toLowerCase()
    .split(' ')
    .map(p => (p.length > 2 ? p.charAt(0).toUpperCase() + p.slice(1) : p))
    .join(' ');
}

export function Depoimentos({ content, mostrarGaleria }: { content: DepoimentosContent; mostrarGaleria: boolean }) {
  const [aprovados, setAprovados] = useState<DepoimentoItem[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/v1/public/depoimentos`)
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(setAprovados)
      .catch(() => {}); // mantém só os manuais se a API estiver indisponível
  }, []);

  const todos = [...content.items, ...aprovados];

  return (
    <section id="depoimentos" className="py-20 bg-orange-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-300 text-sm font-semibold uppercase tracking-wide">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {mostrarGaleria ? content.titulo : 'Compartilhe sua experiência'}
          </h2>
          <p className="text-orange-200 max-w-xl mx-auto">
            {mostrarGaleria ? content.subtitulo : 'Já usa o ERP KomTec? Conte pra gente como está sendo.'}
          </p>
        </div>

        {mostrarGaleria && todos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {todos.map((d, i) => (
              <div
                key={`${d.nome}-${i}`}
                className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
              >
                <Quote className="w-6 h-6 text-orange-300 shrink-0" />
                <p className="text-orange-50 text-sm leading-relaxed flex-1">"{formatarFrase(d.texto)}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{formatarNome(d.nome)}</p>
                  <p className="text-orange-300 text-xs">{formatarNome(d.cargo)} — {formatarNome(d.empresa)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <FormularioDepoimento />
      </div>
    </section>
  );
}

function FormularioDepoimento() {
  const [aberto, setAberto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: '', empresa: '', cargo: '', email: '', texto: '' });

  const campo = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.empresa.trim() || !form.texto.trim()) {
      setErro('Preencha nome, empresa e o depoimento.');
      return;
    }
    setErro(null);
    setEnviando(true);
    try {
      const res = await fetch(`${API_URL}/api/v1/public/depoimentos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setEnviado(true);
    } catch {
      setErro('Não foi possível enviar agora. Tente novamente em instantes.');
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <div className="max-w-xl mx-auto bg-white/10 border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center gap-2">
        <CheckCircle2 className="w-8 h-8 text-orange-300" />
        <p className="text-white font-semibold">Obrigado pelo seu depoimento!</p>
        <p className="text-orange-200 text-sm">Ele será avaliado pela nossa equipe antes de aparecer no site.</p>
      </div>
    );
  }

  if (!aberto) {
    return (
      <div className="text-center">
        <button
          onClick={() => setAberto(true)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-6 py-3 transition-colors"
        >
          <Quote className="w-4 h-4" /> Deixe seu depoimento
        </button>
      </div>
    );
  }

  const inputCls = "w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-orange-200/60 focus:outline-none focus:border-orange-300";

  return (
    <form onSubmit={enviar} className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
      <p className="text-white font-semibold text-center mb-2">Conte sua experiência com o ERP KomTec</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required placeholder="Seu nome" className={inputCls} value={form.nome} onChange={campo('nome')} />
        <input required placeholder="Empresa" className={inputCls} value={form.empresa} onChange={campo('empresa')} />
        <input placeholder="Cargo (opcional)" className={inputCls} value={form.cargo} onChange={campo('cargo')} />
        <input type="email" placeholder="E-mail (opcional, não é exibido)" className={inputCls} value={form.email} onChange={campo('email')} />
      </div>
      <textarea required placeholder="Seu depoimento" rows={4} className={inputCls} value={form.texto} onChange={campo('texto')} />
      {erro && <p className="text-red-300 text-xs">{erro}</p>}
      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-orange-200/70 text-xs">Passa por uma avaliação antes de ser publicado.</p>
        <button
          type="submit"
          disabled={enviando}
          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-orange-900 bg-orange-300 hover:bg-orange-200 disabled:opacity-60 rounded-full px-5 py-2.5 transition-colors"
        >
          <Send className="w-4 h-4" /> {enviando ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
}
