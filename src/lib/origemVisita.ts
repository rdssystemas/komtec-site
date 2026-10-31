/**
 * De onde a visita veio: etiqueta utm_source no link (rádio, Instagram, Facebook) ou, sem ela, o site
 * anterior (document.referrer). Guardada na sessão para valer em qualquer página, usada para abrir o
 * WhatsApp já dizendo a origem e contada no banco (visitas, cliques no WhatsApp e toques no Instagram/Facebook por origem).
 * Só contadores anônimos: nada de quem visitou sai do navegador.
 */
const ORIGENS: Record<string, string> = {
  'radio-mae-misericordia': 'pelo site da Rádio Mãe da Misericórdia',
  instagram: 'pelo Instagram',
  facebook: 'pelo Facebook',
  google: 'pela busca do Google',
  'site-erp': 'pelo site do ERP KomTec',
};

/** Outros nomes que podem vir na etiqueta. */
const APELIDOS: Record<string, string> = { ig: 'instagram', fb: 'facebook' };

const CHAVE = 'komtec_origem';
const API_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? 'https://api.erpkomtec.com.br';

function lerSessao(chave: string): string | null {
  try { return sessionStorage.getItem(chave); } catch { return null; }
}
function gravarSessao(chave: string, valor: string) {
  try { sessionStorage.setItem(chave, valor); } catch { /* navegador sem storage: vale só nesta página */ }
}

function pelaEtiqueta(): string | null {
  const bruto = new URLSearchParams(window.location.search).get('utm_source')?.toLowerCase().trim();
  if (!bruto) return null;
  const chave = APELIDOS[bruto] ?? bruto;
  return ORIGENS[chave] ? chave : null;
}

function pelaPaginaAnterior(): string | null {
  let host = '';
  try { host = new URL(document.referrer).hostname; } catch { return null; }
  if (/(^|\.)instagram\.com$/.test(host)) return 'instagram';
  if (/(^|\.)(facebook\.com|fb\.com|fb\.me)$/.test(host)) return 'facebook';
  if (/(^|\.)google\.[a-z.]+$/.test(host)) return 'google';
  if (/(^|\.)radio\.maedamisericordia\.com\.br$/.test(host)) return 'radio-mae-misericordia';
  return null;
}

/** Chave da origem desta visita ("site-erp" quando não dá para saber). */
export function origemVisita(): string {
  const nova = pelaEtiqueta() ?? (lerSessao(CHAVE) ? null : pelaPaginaAnterior());
  if (nova) {
    gravarSessao(CHAVE, nova);
    return nova;
  }
  const salva = lerSessao(CHAVE);
  if (salva && ORIGENS[salva]) return salva;
  gravarSessao(CHAVE, 'site-erp');
  return 'site-erp';
}

/** "Olá! Vim pelo Instagram." etc. */
export function saudacaoWhatsApp(): string {
  return `Olá! Vim ${ORIGENS[origemVisita()]}.`;
}

/** Conta no banco uma vez por sessão e origem. */
function contar(tipo: 'VISITA' | 'WHATSAPP' | 'INSTAGRAM' | 'FACEBOOK') {
  const origem = origemVisita();
  const marca = `komtec_contado_${tipo}_${origem}`;
  if (lerSessao(marca)) return;
  gravarSessao(marca, '1');
  fetch(`${API_URL}/api/v1/public/site/origem`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ origem, tipo }),
    keepalive: true,
  }).catch(() => { /* contagem é só estatística: nunca atrapalha o visitante */ });
}

export const registrarVisita = () => contar('VISITA');
export const registrarCliqueWhatsApp = () => contar('WHATSAPP');
export const registrarCliqueRede = (rede: 'Instagram' | 'Facebook') => contar(rede === 'Instagram' ? 'INSTAGRAM' : 'FACEBOOK');
