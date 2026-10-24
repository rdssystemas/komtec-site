/**
 * De onde a visita veio (etiqueta utm_source no link de um parceiro). Guardada na sessão para valer
 * em qualquer página do site, e usada para abrir o WhatsApp já dizendo a origem.
 */
const ORIGENS: Record<string, string> = {
  'radio-mae-misericordia': 'pelo site da Rádio Mãe da Misericórdia',
};

const CHAVE = 'komtec_origem';

export function origemVisita(): string | null {
  const daUrl = new URLSearchParams(window.location.search).get('utm_source');
  if (daUrl && ORIGENS[daUrl]) {
    try { sessionStorage.setItem(CHAVE, daUrl); } catch { /* navegador sem storage: vale só nesta página */ }
    return ORIGENS[daUrl];
  }
  try {
    const salva = sessionStorage.getItem(CHAVE);
    return salva && ORIGENS[salva] ? ORIGENS[salva] : null;
  } catch {
    return null;
  }
}

/** "Olá! Vim pelo site da Rádio Mãe da Misericórdia." ou só "Olá!". */
export function saudacaoWhatsApp(): string {
  const origem = origemVisita();
  return origem ? `Olá! Vim ${origem}.` : 'Olá!';
}
