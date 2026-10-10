// Gera, no fim do build, um HTML por página (dist/<rota>.html) com título, descrição,
// canonical e Open Graph próprios. WhatsApp, Facebook e Google não executam o React:
// leem só o HTML que o nginx entrega, e sem isso toda URL se apresentava como a home.
//
// O nginx precisa procurar o .html: try_files $uri $uri.html $uri/ /index.html;
// (pasta com index.html não serve — o nginx redireciona /rota para http://.../rota/).
import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { DEFAULT_INFORMACOES } from './src/data/defaultContent';
import { DEFAULT_DICAS } from './src/data/dicasContent';
import { AJUDA_CONTENT } from './src/data/ajudaContent';

const SITE = 'https://erpkomtec.com.br';

interface Pagina {
  rota: string;
  titulo: string;
  descricao: string;
  imagem?: string; // caminho em /public; vazio = og-image.png padrão
  artigo?: boolean;
}

function textoCurto(md: string, max = 160): string {
  const t = md
    .replace(/\*\*/g, '')
    .replace(/^(##\s|-\s)/gm, '')
    .replace(/^[⚠️💡✅]+\s*/u, '')
    .replace(/\s+/g, ' ')
    .trim();
  return t.length <= max ? t : t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

function paginas(): Pagina[] {
  const lista: Pagina[] = [
    { rota: '/nossa-historia', titulo: 'Nossa História — ERP KomTec Pro', descricao: 'Conheça a trajetória da KomTec, nossa missão, visão e valores, e como nasceu o ERP KomTec Pro.' },
    { rota: '/portfolio', titulo: 'Portfólio — ERP KomTec Pro', descricao: 'Veja as telas e os recursos do ERP KomTec Pro: vendas, estoque, financeiro, ordens de serviço, NF-e e NFS-e.' },
    { rota: '/privacidade', titulo: 'Política de Privacidade — ERP KomTec Pro', descricao: 'Como o ERP KomTec Pro coleta, usa e protege os seus dados pessoais, conforme a LGPD.' },
    { rota: '/informacoes', titulo: 'Central de Informações — ERP KomTec Pro', descricao: 'Artigos sobre Reforma Tributária, NF-e, NFS-e e gestão empresarial explicados em linguagem simples.' },
    { rota: '/dicas', titulo: 'Dicas & Novidades — ERP KomTec Pro', descricao: 'Dicas práticas por módulo para tirar mais proveito do ERP KomTec Pro no dia a dia da sua empresa.' },
    { rota: '/ajuda', titulo: 'Central de Ajuda — ERP KomTec Pro', descricao: 'Passo a passo para usar o ERP KomTec Pro: vendas, NF-e, NFS-e, estoque, financeiro, ordens de serviço e mais.' },
    { rota: '/panfleto', titulo: 'ERP KomTec Pro — Panfleto', descricao: 'Sistema de gestão empresarial online: vendas, estoque, financeiro, ordens de serviço, NF-e e NFS-e.' },
    { rota: '/panfleto-os', titulo: 'ERP KomTec Pro — Ordens de Serviço', descricao: 'Controle suas ordens de serviço do início ao fim: peças, horas, técnico, fotos e emissão de NFS-e.' },
    { rota: '/panfleto-parceiros', titulo: 'ERP KomTec Pro — Programa de Parceiros', descricao: 'Seja parceiro KomTec: indique o ERP KomTec Pro e receba comissão recorrente mensal.' },
  ];

  for (const a of DEFAULT_INFORMACOES.items.filter(i => i.publicado)) {
    lista.push({ rota: `/informacoes/${a.slug}`, titulo: `${a.titulo} — ERP KomTec Pro`, descricao: textoCurto(a.resumo), imagem: a.imagem, artigo: true });
  }

  for (const m of DEFAULT_DICAS.modulos) {
    const publicadas = m.dicas.filter(d => d.publicado);
    if (publicadas.length === 0) continue;
    lista.push({ rota: `/dicas/${m.id}`, titulo: `Dicas de ${m.nome} — ERP KomTec Pro`, descricao: textoCurto(m.descricao), imagem: m.imagem });
    for (const d of publicadas) {
      lista.push({ rota: `/dicas/${m.id}/${d.slug}`, titulo: `${d.titulo} — ERP KomTec Pro`, descricao: textoCurto(d.resumo), imagem: d.imagem, artigo: true });
    }
  }

  for (const c of AJUDA_CONTENT.categorias) {
    const artigos = AJUDA_CONTENT.artigos.filter(a => a.categoria === c.id);
    if (artigos.length === 0) continue;
    lista.push({ rota: `/ajuda/${c.id}`, titulo: `Ajuda: ${c.label} — ERP KomTec Pro`, descricao: textoCurto(c.descricao) });
    for (const a of artigos) {
      lista.push({ rota: `/ajuda/${c.id}/${a.id}`, titulo: `${a.titulo} — Ajuda ERP KomTec Pro`, descricao: textoCurto(a.passos.join(' ')), artigo: true });
    }
  }
  return lista;
}

// A capa original não serve para prévia: WebP não aparece no WhatsApp do iPhone e os
// PNG/JPG têm vários MB (o WhatsApp ignora imagem grande). Usa a cópia 1200x630 em
// public/og/<nome>.jpg, se existir; senão cai na imagem padrão do site.
function imagemOg(publicDir: string, imagem?: string): string | null {
  if (!imagem) return null;
  const jpg = `/og/${path.basename(imagem).replace(/\.[^.]+$/, '')}.jpg`;
  return fs.existsSync(path.join(publicDir, jpg)) ? jpg : null;
}

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function trocaMeta(html: string, chave: string, valor: string): string {
  const re = new RegExp(`(<meta\\s+(?:property|name)="${chave.replace(/:/g, '\\:')}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`seo-paginas: meta ${chave} não encontrada no index.html`);
  return html.replace(re, `$1${attr(valor)}$2`);
}

export function seoPaginas(): Plugin {
  let outDir = 'dist';
  let publicDir = 'public';
  return {
    name: 'komtec-seo-paginas',
    apply: 'build',
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir);
      publicDir = c.publicDir;
    },
    closeBundle() {
      const base = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');
      const lista = paginas();
      for (const p of lista) {
        const url = SITE + p.rota;
        const img = imagemOg(publicDir, p.imagem);
        let html = base
          .replace(/<title>[^<]*<\/title>/, `<title>${attr(p.titulo)}</title>`)
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
          // FAQ e dados do software valem só para a home
          .replace(/\s*<!-- ── Dados estruturados[\s\S]*?<\/script>/, '');
        html = trocaMeta(html, 'description', p.descricao);
        html = trocaMeta(html, 'og:url', url);
        html = trocaMeta(html, 'og:title', p.titulo);
        html = trocaMeta(html, 'og:description', p.descricao);
        html = trocaMeta(html, 'twitter:title', p.titulo);
        html = trocaMeta(html, 'twitter:description', p.descricao);
        if (p.artigo) html = trocaMeta(html, 'og:type', 'article');
        if (img) {
          html = trocaMeta(html, 'og:image', SITE + img);
          html = trocaMeta(html, 'twitter:image', SITE + img);
        }
        const destino = path.join(outDir, `${p.rota.slice(1)}.html`);
        fs.mkdirSync(path.dirname(destino), { recursive: true });
        fs.writeFileSync(destino, html);
      }

      // Panfletos são peças de impressão, não conteúdo para busca.
      const urls = [SITE + '/', ...lista.filter(p => !p.rota.startsWith('/panfleto')).map(p => SITE + p.rota)];
      const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + urls.map(u => `  <url><loc>${attr(u)}</loc></url>`).join('\n')
        + '\n</urlset>\n';
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
      console.log(`seo-paginas: ${lista.length} páginas com título e prévia próprios; sitemap com ${urls.length} endereços`);
    },
  };
}
