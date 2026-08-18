const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Em produção, o gtag.js e a coleta de eventos passam pelo próprio domínio
 * (proxy first-party via nginx — ver /gtag/js e /g/collect em nginx.conf do servidor).
 * Isso evita que bloqueadores de rastreadores (Brave Shields, uBlock, etc.), que
 * bloqueiam por domínio conhecido (googletagmanager.com / google-analytics.com),
 * descartem as chamadas do GA4. Em dev, usa os endpoints do Google direto.
 */
const isProd = import.meta.env.PROD;

/** Carrega o gtag.js e inicializa o Google Analytics 4, se a env var estiver configurada. */
export function initAnalytics(): void {
  if (!GA_MEASUREMENT_ID) return;
  if (document.getElementById('ga4-script')) return;

  const origin = window.location.origin;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = isProd
    ? `${origin}/gtag/js?id=${GA_MEASUREMENT_ID}`
    : `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  // Consent Mode: declara o padrão como concedido, já que initAnalytics() só roda
  // depois que o usuário aceita os cookies (CookieConsent.tsx). Sem essa chamada,
  // o gtag.js quebra internamente (TypeError "Cannot read properties of undefined
  // (reading 'update')") e nunca envia nenhum hit — nem page_view nem eventos.
  window.gtag('consent', 'default', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, isProd
    ? { transport_url: origin, first_party_collection: true }
    : undefined);
}

/** Registra um evento de conversão (trial criado, lead via WhatsApp, etc.). Não faz nada se o GA4 não estiver configurado. */
export function trackEvent(nome: string, params?: Record<string, unknown>): void {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', nome, params ?? {});
}
