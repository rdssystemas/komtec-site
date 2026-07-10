import { useEffect, useState } from 'react';
import { SECOES } from '../data/secoes';
import {
  DEFAULT_HERO, DEFAULT_MODULOS, DEFAULT_DIFERENCIAIS,
  DEFAULT_DEPOIMENTOS, DEFAULT_FAQ, DEFAULT_PLANOS, DEFAULT_CTABANNER,
  type HeroContent, type ModulosContent, type DiferenciaisContent,
  type DepoimentosContent, type FaqContent, type PlanosContent,
  type CtaBannerContent,
} from '../data/defaultContent';
import { SECOES_EXTRAS, type SecaoExtra } from '../data/secoesExtras';

const API_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? 'https://api.erpkomtec.com.br';

export type Secoes = typeof SECOES;

export interface SiteContent {
  secoes: Secoes;
  hero: HeroContent;
  modulos: ModulosContent;
  diferenciais: DiferenciaisContent;
  depoimentos: DepoimentosContent;
  faq: FaqContent;
  planos: PlanosContent;
  ctabanner: CtaBannerContent;
  secoesExtras: SecaoExtra[];
}

function parse<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try { return { ...fallback, ...JSON.parse(raw) } as T; } catch { return fallback; }
}

function parseArr<T>(raw: string | undefined, fallback: T[]): T[] {
  if (!raw) return fallback;
  try { const p = JSON.parse(raw); return Array.isArray(p) ? p : fallback; } catch { return fallback; }
}

export function useSiteConteudo(): SiteContent {
  const [content, setContent] = useState<SiteContent>({
    secoes: SECOES,
    hero: DEFAULT_HERO,
    modulos: DEFAULT_MODULOS,
    diferenciais: DEFAULT_DIFERENCIAIS,
    depoimentos: DEFAULT_DEPOIMENTOS,
    faq: DEFAULT_FAQ,
    planos: DEFAULT_PLANOS,
    ctabanner: DEFAULT_CTABANNER,
    secoesExtras: SECOES_EXTRAS,
  });

  useEffect(() => {
    fetch(`${API_URL}/api/v1/site/conteudo`)
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then((data: Record<string, string>) => {
        setContent({
          secoes:       parse(data.secoes,       SECOES),
          hero:         parse(data.hero,         DEFAULT_HERO),
          modulos:      parse(data.modulos,      DEFAULT_MODULOS),
          diferenciais: parse(data.diferenciais, DEFAULT_DIFERENCIAIS),
          depoimentos:  parse(data.depoimentos,  DEFAULT_DEPOIMENTOS),
          faq:          parse(data.faq,          DEFAULT_FAQ),
          planos:       parse(data.planos,       DEFAULT_PLANOS),
          ctabanner:    parse(data.ctabanner,    DEFAULT_CTABANNER),
          secoesExtras: parseArr(data.secoesExtras, SECOES_EXTRAS),
        });
      })
      .catch(() => {}); // mantém defaults se backend indisponível
  }, []);

  return content;
}
