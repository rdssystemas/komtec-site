import { useState, useEffect } from 'react';
import { Rocket, CheckCircle2, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const API_URL = (import.meta.env.VITE_API_URL as string) ?? 'https://api.erpkomtec.com.br';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

async function obterTokenCaptcha(): Promise<string | undefined> {
  if (!RECAPTCHA_SITE_KEY) return undefined;
  return new Promise((resolve) => {
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'trial' });
        resolve(token);
      } catch {
        resolve(undefined);
      }
    });
  });
}

const SEGMENTOS = [
  'Autopeças',
  'Mecânica / Funilaria',
  'Distribuidora',
  'Comércio Geral',
  'Prestação de Serviços',
  'Outro',
];

type Etapa = 'form' | 'enviando' | 'sucesso' | 'erro';

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  nomeEmpresa: string;
  segmento: string;
}

export function ExperimenteGratis() {
  const codigoIndicacao = new URLSearchParams(window.location.search).get('ref') || undefined;

  const [form, setForm] = useState<FormState>({
    nome: '',
    email: '',
    telefone: '',
    nomeEmpresa: '',
    segmento: '',
  });
  const [etapa, setEtapa] = useState<Etapa>('form');
  const [erroMsg, setErroMsg] = useState('');
  const [trialAte, setTrialAte] = useState('');

  // Carrega o script reCAPTCHA v3 quando a chave estiver configurada
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    const id = 'recaptcha-script';
    if (document.getElementById(id)) return;
    const script = document.createElement('script');
    script.id = id;
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEtapa('enviando');
    setErroMsg('');

    try {
      const recaptchaToken = await obterTokenCaptcha();
      const resp = await fetch(`${API_URL}/api/v1/trial/solicitar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome.trim(),
          email: form.email.trim().toLowerCase(),
          telefone: form.telefone.trim(),
          nome_empresa: form.nomeEmpresa.trim(),
          segmento: form.segmento || null,
          codigo_indicacao: codigoIndicacao,
          recaptcha_token: recaptchaToken,
        }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data.message ?? 'Ocorreu um erro. Tente novamente.');
      }

      const data = await resp.json();
      setTrialAte(data.trial_ate ?? '');
      setEtapa('sucesso');
      trackEvent('trial_signup', { segmento: form.segmento || undefined });
    } catch (err: unknown) {
      setErroMsg(err instanceof Error ? err.message : 'Ocorreu um erro inesperado.');
      setEtapa('erro');
    }
  };

  const reiniciar = () => {
    setForm({ nome: '', email: '', telefone: '', nomeEmpresa: '', segmento: '' });
    setEtapa('form');
    setErroMsg('');
  };

  const formatarData = (iso: string) => {
    if (!iso) return '';
    const [ano, mes, dia] = iso.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <section id="experimente" className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Lado esquerdo — texto */}
          <div>
            <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
              Teste grátis por 7 dias
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Experimente o ERP KomTec sem compromisso
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Preencha o formulário e sua conta é criada automaticamente em segundos.
              Você recebe login e senha por e-mail e já pode explorar o sistema completo.
            </p>

            <ul className="space-y-3">
              {[
                'Conta criada na hora, sem cartão de crédito',
                'Acesso total por 7 dias — todos os módulos',
                'Dados de exemplo pré-carregados para você explorar',
                'Suporte via WhatsApp durante o período de trial',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lado direito — card */}
          <div className="bg-white rounded-2xl p-8 border border-orange-100 shadow-sm">

            {/* ── Formulário ── */}
            {etapa === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Crie sua conta agora</h3>

                {codigoIndicacao && (
                  <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2">
                    <span className="text-orange-500 text-sm">🤝</span>
                    <span className="text-xs text-orange-700 font-medium">
                      Você foi indicado por um parceiro KomTec
                    </span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Seu nome *</label>
                  <input
                    required
                    name="nome"
                    type="text"
                    placeholder="Nome completo"
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">E-mail *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">WhatsApp *</label>
                  <input
                    required
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Nome da empresa *</label>
                  <input
                    required
                    name="nomeEmpresa"
                    type="text"
                    placeholder="Razão social ou nome fantasia"
                    value={form.nomeEmpresa}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Segmento</label>
                  <select
                    name="segmento"
                    value={form.segmento}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="">Selecione (opcional)</option>
                    {SEGMENTOS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  Criar minha conta grátis
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Sem cartão de crédito. Cancele quando quiser.
                </p>
                <p className="text-xs text-gray-400 text-center">
                  Ao continuar, você concorda com nossa{' '}
                  <a href="/privacidade" className="text-orange-600 hover:underline">Política de Privacidade</a>.
                </p>
              </form>
            )}

            {/* ── Enviando ── */}
            {etapa === 'enviando' && (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
                <p className="text-gray-600 font-medium">Criando sua conta…</p>
                <p className="text-gray-400 text-sm">Isso leva apenas alguns segundos.</p>
              </div>
            )}

            {/* ── Sucesso ── */}
            {etapa === 'sucesso' && (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conta criada!</h3>
                <p className="text-gray-500 text-sm mb-1">
                  Enviamos o login e a senha para <span className="font-medium text-gray-800">{form.email}</span>.
                </p>
                {trialAte && (
                  <p className="text-gray-400 text-xs mb-6">
                    Período gratuito até <span className="font-semibold">{formatarData(trialAte)}</span>.
                  </p>
                )}
                <a
                  href="https://app.erpkomtec.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Acessar o ERP agora
                </a>
                <button
                  onClick={reiniciar}
                  className="block mx-auto mt-4 text-xs text-gray-400 hover:underline"
                >
                  Criar outra conta
                </button>
              </div>
            )}

            {/* ── Erro ── */}
            {etapa === 'erro' && (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Não foi possível criar a conta</h3>
                <p className="text-gray-500 text-sm mb-6">{erroMsg}</p>
                <button
                  onClick={reiniciar}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  Tentar novamente
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
