import { useEffect, useState } from 'react';
import './Portfolio.css';

const SITE_TITLE = 'ERP KomTec — Sistema de Gestão Empresarial Online | Vendas, NF-e, Estoque';
const PORTFOLIO_TITLE = 'ERP KomTec Pro — Portfólio';

type ShotInfo = { src: string; label: string; caption: string };

const SHOTS: Record<string, ShotInfo> = {
  fiscal: { src: '/komtec_nfe.webp', label: 'Fiscal', caption: 'Emissão de NF-e, NFS-e e CT-e' },
  vendas: { src: '/komtec_comercial.webp', label: 'Vendas', caption: 'Orçamentos e vendas' },
  financeiro: { src: '/komtec_bi.webp', label: 'Financeiro', caption: 'Parcelas e recebimentos' },
  estoque: { src: '/komtec_cotacao.webp', label: 'Estoque', caption: 'Catálogo e saldo de estoque' },
  os: { src: '/komtec_comboio_manutencao_v3.webp', label: 'Manutenção', caption: 'Manutenção de frota' },
  equipamentos: { src: '/komtec_gestao_pneus_dia_v2.webp', label: 'Pneus', caption: 'Gestão de pneus fora de estrada' },
};

const GALLERY: ShotInfo[] = [
  SHOTS.fiscal,
  SHOTS.vendas,
  { src: '/komtec_relatorios.webp', label: 'Relatórios', caption: 'Relatórios prontos para decidir' },
  SHOTS.financeiro,
  SHOTS.equipamentos,
  SHOTS.os,
  SHOTS.estoque,
  { src: '/komtec_suporte_ia.webp', label: 'Suporte IA', caption: 'Suporte inteligente com IA' },
];

function Shot({ shot, onOpen }: { shot: ShotInfo; onOpen: (shot: ShotInfo) => void }) {
  return (
    <button type="button" className="shot" onClick={() => onOpen(shot)} aria-label={`Ampliar: ${shot.caption}`}>
      <span className="shot-img-wrap">
        <img src={shot.src} alt={shot.caption} loading="lazy" decoding="async" />
        <span className="shot-caption">{shot.label}</span>
        <span className="shot-expand" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></svg>
        </span>
      </span>
    </button>
  );
}

export function Portfolio() {
  const [showTop, setShowTop] = useState(false);
  const [lightbox, setLightbox] = useState<ShotInfo | null>(null);

  useEffect(() => {
    document.title = PORTFOLIO_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, behavior });
  };

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.komtec-portfolio .reveal').forEach(el => el.classList.add('in'));
      return;
    }
    const els = document.querySelectorAll('.komtec-portfolio .reveal');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="komtec-portfolio">
      <header className="top">
        <div className="topbar wrap">
          <a href="/" className="wordmark">
            <span className="tag-erp">ERP</span>
            <span className="brand">
              KOM<span className="dot">TEC</span>
            </span>
            <span className="pro">PRO</span>
          </a>
          <nav>
            <a href="#modulos">Módulos</a>
            <a href="#fluxo">Como funciona</a>
            <a href="#diferenciais">Diferenciais</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="blueprint" aria-hidden="true" />
        <div className="wrap">
          <div>
            <div className="eyebrow">Sistema de gestão para revendas, oficinas e frotistas</div>
            <h1>
              Do orçamento à <em>nota fiscal.</em>
              <br />
              Da oficina ao <em>pátio de máquinas.</em>
            </h1>
            <p className="lead">
              O ERP KomTec Pro é o sistema que uma revenda de peças, oficina mecânica ou frotista — de
              pequenas e médias construtoras a fazendas com equipamentos pesados — usa no dia a dia: sem
              planilha, sem nota fiscal manual e sem anotar ordem de serviço no papel.
            </p>
            <div className="ctas">
              <a href="/#experimente" className="cta">Solicitar demonstração</a>
              <a href="#modulos" className="cta ghost">Ver os módulos ↓</a>
            </div>
          </div>
          <div className="stub reveal">
            <div className="stub-head">
              <div>
                <div className="t1">DANFE · Documento Auxiliar da NF-e</div>
                <div className="t2">NF-e Nº 001.284</div>
              </div>
              <div className="status">Autorizado</div>
            </div>
            <div className="stub-body">
              <div className="row"><span>Emitente</span><span>Sua Empresa LTDA</span></div>
              <div className="row"><span>Destinatário</span><span>Cliente Exemplo LTDA</span></div>
              <div className="row"><span>Natureza</span><span>Venda de mercadoria</span></div>
              <div className="row"><span>Protocolo Sefaz</span><span>135260000123456</span></div>
              <div className="chave">3526 0714 2000 0116 5500 5500 1000 0128 4123 4567</div>
              <div className="barcode" aria-hidden="true" />
            </div>
            <div className="stub-foot">Ilustração de tela — dados fictícios</div>
          </div>
        </div>
      </section>

      <div className="stripe-rule" aria-hidden="true" />

      <section className="problems">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">O dia a dia sem controle</div>
            <h2>Problemas que todo negócio assim já viveu</h2>
            <p>Se algum destes já aconteceu essa semana, o ERP KomTec Pro foi feito pensando exatamente nisso.</p>
          </div>
          <div className="problem-grid">
            <div className="problem reveal">
              <div className="problem-pair">
                <div><span className="tag bad">Antes</span><div className="txt dim">Nota fiscal rejeitada pela Sefaz e ninguém sabe o motivo.</div></div>
                <div><span className="tag good">Com o ERP KomTec Pro</span><div className="txt">O sistema mostra o motivo da rejeição na hora e já orienta a correção.</div></div>
              </div>
            </div>
            <div className="problem reveal">
              <div className="problem-pair">
                <div><span className="tag bad">Antes</span><div className="txt dim">Estoque da planilha nunca bate com o estoque da prateleira.</div></div>
                <div><span className="tag good">Com o ERP KomTec Pro</span><div className="txt">Cada venda, compra ou devolução atualiza o saldo automaticamente, na hora.</div></div>
              </div>
            </div>
            <div className="problem reveal">
              <div className="problem-pair">
                <div><span className="tag bad">Antes</span><div className="txt dim">Ordem de serviço anotada no papel — o técnico não sabe o que foi combinado.</div></div>
                <div><span className="tag good">Com o ERP KomTec Pro</span><div className="txt">O técnico abre a OS pelo celular e vê peças, prazo e o que precisa ser feito.</div></div>
              </div>
            </div>
            <div className="problem reveal">
              <div className="problem-pair">
                <div><span className="tag bad">Antes</span><div className="txt dim">A máquina quebra e ninguém lembra quando foi a última manutenção.</div></div>
                <div><span className="tag good">Com o ERP KomTec Pro</span><div className="txt">Cada equipamento tem sua própria ficha: abastecimento, pneus, peças, intervenções.</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modulos">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">O que o sistema faz</div>
            <h2>Seis frentes, um sistema só</h2>
            <p>Cada módulo resolve uma parte da operação — e todos conversam entre si, sem você digitar a mesma informação duas vezes.</p>
          </div>
          <div className="module-grid">

            <div className="card reveal">
              <span className="rivet" aria-hidden="true" />
              <div className="eyebrow">Fiscal · NF-e / NFS-e / CT-e</div>
              <h3>Nota fiscal sem dor de cabeça</h3>
              <p className="desc">Emita NF-e, NFS-e e CT-e direto do sistema. A Sefaz autoriza, o PDF sai pronto para envio, e se o cliente recusar a nota você fica sabendo na hora — não meses depois.</p>
              <div className="mockup">
                <Shot shot={SHOTS.fiscal} onOpen={setLightbox} />
              </div>
            </div>

            <div className="card reveal">
              <span className="rivet" aria-hidden="true" />
              <div className="eyebrow">Vendas &amp; Orçamentos</div>
              <h3>Do orçamento à venda fechada</h3>
              <p className="desc">Monte o orçamento, envie por e-mail ou PDF e, quando o cliente aprovar, gere a venda com um clique — sem redigitar item, preço ou desconto.</p>
              <div className="mockup">
                <Shot shot={SHOTS.vendas} onOpen={setLightbox} />
              </div>
            </div>

            <div className="card reveal">
              <span className="rivet" aria-hidden="true" />
              <div className="eyebrow">Financeiro</div>
              <h3>Contas a pagar e receber em dia</h3>
              <p className="desc">Cada venda gera as parcelas certas automaticamente. Quando o pagamento cai, o recibo é enviado para o cliente sem ninguém precisar lembrar.</p>
              <div className="mockup">
                <Shot shot={SHOTS.financeiro} onOpen={setLightbox} />
              </div>
            </div>

            <div className="card reveal">
              <span className="rivet" aria-hidden="true" />
              <div className="eyebrow">Estoque &amp; Produtos</div>
              <h3>Estoque que bate com a prateleira</h3>
              <p className="desc">Catálogo com kits, lotes e promoções. Toda movimentação — venda, compra, ajuste de inventário — atualiza o saldo automaticamente.</p>
              <div className="mockup">
                <Shot shot={SHOTS.estoque} onOpen={setLightbox} />
              </div>
            </div>

            <div className="card reveal">
              <span className="rivet" aria-hidden="true" />
              <div className="eyebrow">Ordens de Serviço</div>
              <h3>A oficina organizada, do orçamento à entrega</h3>
              <p className="desc">Técnico, veículo, peças e prazo em uma tela só. O painel de andamento da oficina mostra o que está atrasado antes que o cliente ligue perguntando.</p>
              <div className="mockup">
                <Shot shot={SHOTS.os} onOpen={setLightbox} />
              </div>
            </div>

            <div className="card reveal">
              <span className="rivet" aria-hidden="true" />
              <div className="eyebrow">Equipamentos &amp; Pneus</div>
              <h3>Cada máquina com a própria ficha</h3>
              <p className="desc">Feito para frotistas — de construtoras a fazendas. Pneus fora de estrada e rodoviários, com rodízio, vida útil e troca por equipamento. Um painel de andamento mostra em que etapa está cada manutenção, do diagnóstico até a liberação da máquina.</p>
              <div className="mockup">
                <Shot shot={SHOTS.equipamentos} onOpen={setLightbox} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="stripe-rule" aria-hidden="true" />

      <section id="fluxo" className="flow-wrap">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Como as partes conversam</div>
            <h2>Tudo conectado, de ponta a ponta</h2>
            <p>Cada etapa alimenta a próxima automaticamente — sem copiar dado de uma tela para outra.</p>
          </div>
          <div className="flow reveal">
            <div className="stage"><div className="n">01</div><h4>Orçamento</h4><p>Monta a proposta e envia para o cliente aprovar.</p></div>
            <div className="stage"><div className="n">02</div><h4>Venda</h4><p>Aprovado, vira venda com um clique — mesmos itens, mesmo preço.</p></div>
            <div className="stage"><div className="n">03</div><h4>Nota Fiscal</h4><p>NF-e é emitida e autorizada pela Sefaz a partir da venda.</p></div>
            <div className="stage"><div className="n">04</div><h4>Financeiro</h4><p>As parcelas certas são criadas automaticamente ao gerar a venda, prontas para cobrar.</p></div>
          </div>
        </div>
      </section>

      <section id="diferenciais">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Por que o ERP KomTec Pro</div>
            <h2>Feito para o seu tipo de operação</h2>
          </div>
          <div className="diff-grid">
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="7" width="8" height="13" rx="1" /><rect x="13" y="3" width="8" height="17" rx="1" /><path d="M6 11h2M6 14h2M16 7h2M16 10h2M16 13h2" /></svg>
              <h4>Mais de uma empresa</h4>
              <p>Se você administra mais de uma empresa, cada uma tem seus dados separados e protegidos — mas você acessa tudo com o mesmo login.</p>
            </div>
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></svg>
              <h4>No escritório e em campo</h4>
              <p>Funciona no computador da loja e no celular do técnico ou vendedor em rota, mesmo longe do balcão.</p>
            </div>
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l8 3.5v6c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-6L12 2z" /></svg>
              <h4>Login e dados protegidos</h4>
              <p>Sessão que avisa antes de expirar, senha protegida e dados de cada empresa isolados dos demais clientes.</p>
            </div>
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 15v-3a8 8 0 0116 0v3" /><path d="M4 15a2 2 0 002 2h1v-6H6a2 2 0 00-2 2v2zM20 15a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2v2z" /></svg>
              <h4>Suporte de quem entende do seu negócio</h4>
              <p>Time que atende e ajusta o sistema conforme a sua operação cresce — não é um sistema genérico adaptado às pressas.</p>
            </div>
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="5" height="16" rx="1" /><rect x="9.5" y="4" width="5" height="10" rx="1" /><rect x="16" y="4" width="5" height="13" rx="1" /></svg>
              <h4>Painel de andamento adaptável</h4>
              <p>O mesmo painel que acompanha manutenções na oficina e nos equipamentos pode ser configurado para mostrar o andamento dos atendimentos de vendas — a mesma lógica, adaptada ao seu processo.</p>
            </div>
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 4a4.5 4.5 0 00-4.5 4.5V12l-1.5 3h12l-1.5-3V8.5A4.5 4.5 0 0012 4z" /><path d="M10 19a2 2 0 004 0" /></svg>
              <h4>Avisos automáticos por e-mail</h4>
              <p>Recibo de pagamento, cobrança perto do vencimento, contrato pra assinar — o sistema manda por e-mail automaticamente, sem ninguém precisar lembrar.</p>
            </div>
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="13" width="3.5" height="7" /><rect x="10.25" y="8" width="3.5" height="12" /><rect x="16.5" y="4" width="3.5" height="16" /></svg>
              <h4>Relatórios prontos pra decidir</h4>
              <p>Vendas, estoque e financeiro em relatórios já montados — sem precisar exportar dado e montar planilha na mão.</p>
            </div>
            <div className="diff reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4.5 12a7.5 7.5 0 0113-5.2M19.5 5v4.5H15" /><path d="M19.5 12a7.5 7.5 0 01-13 5.2M4.5 19v-4.5H9" /></svg>
              <h4>Estoque sincronizado com o Mercado Livre</h4>
              <p>Vende peça na loja física e também on-line? O estoque se ajusta automaticamente dos dois lados, sem risco de vender o que não tem.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="gallery-wrap">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Sem enrolação</div>
            <h2>Veja o sistema por dentro</h2>
            <p>Uma frente para cada parte da operação, do fiscal ao pátio de máquinas. Clique para ampliar.</p>
          </div>
          <div className="gallery-grid reveal">
            {GALLERY.map(shot => (
              <Shot key={shot.src} shot={shot} onOpen={setLightbox} />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <div>
            <h2>Pronto para tirar a operação da planilha?</h2>
            <p>Mostramos o sistema rodando com um caso parecido com o seu, sem compromisso.</p>
          </div>
          <a href="/#experimente" className="cta">Solicitar demonstração</a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            <div className="wordmark">ERP KOMTEC PRO</div>
            <div className="footer-tagline">Sistema de gestão para revendas, oficinas e frotistas — de pequenas e médias construtoras a fazendas.</div>
          </div>
          <div className="footer-contact">
            <a href="https://erpkomtec.com.br" target="_blank" rel="noopener noreferrer">erpkomtec.com.br</a>
            <a href="mailto:contato@erpkomtec.com.br">contato@erpkomtec.com.br</a>
            <a href="https://wa.me/5562993256370" target="_blank" rel="noopener noreferrer">(62) 99325-6370 · WhatsApp</a>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
        className={`back-to-top${showTop ? ' visible' : ''}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
        <span>Topo</span>
      </button>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button type="button" className="lightbox-close" aria-label="Fechar" onClick={() => setLightbox(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
          <figure onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} />
            <figcaption>{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
