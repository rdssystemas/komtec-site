import { useEffect } from 'react';
import './Panfleto.css';

const SITE_TITLE = 'ERP KomTec — Sistema de Gestão Empresarial Online | Vendas, NF-e, Estoque';
const PANFLETO_TITLE = 'ERP KomTec Pro — Panfleto';

const BENEFICIOS = [
  { titulo: 'Sem planilha', desc: 'Estoque e financeiro sempre batendo, sem digitar duas vezes.' },
  { titulo: 'Sem nota manual', desc: 'NF-e, NFS-e e CT-e emitidas e autorizadas pela Sefaz na hora.' },
  { titulo: 'Sem papel na oficina', desc: 'Ordem de serviço e manutenção acompanhadas pelo celular.' },
];

const MODULOS = [
  { titulo: 'Fiscal', desc: 'NF-e, NFS-e e CT-e direto do sistema. A Sefaz autoriza e o PDF sai pronto — sem dor de cabeça.', foto: '/komtec_nfe.webp' },
  { titulo: 'Vendas & Orçamentos', desc: 'Monte o orçamento e, quando o cliente aprovar, gere a venda com um clique.', foto: '/komtec_comercial.webp' },
  { titulo: 'Financeiro', desc: 'Cada venda gera as parcelas certas. Recibo enviado automaticamente quando o pagamento cai.', foto: '/komtec_bi.webp' },
  { titulo: 'Estoque & Produtos', desc: 'Catálogo com kits, lotes e promoções. Saldo sempre certo, sem contagem manual.', foto: '/komtec_cotacao.webp' },
  { titulo: 'Ordens de Serviço', desc: 'Técnico, peças e prazo em uma tela só. Painel de andamento mostra o que está atrasado.', foto: '/komtec_comboio_manutencao_v3.webp' },
  { titulo: 'Equipamentos & Pneus', desc: 'Ficha por máquina: pneus fora de estrada e rodoviários, componentes, manutenção.', foto: '/komtec_gestao_pneus_dia_v2.webp' },
];

const DIFERENCIAIS = [
  {
    titulo: 'Mais de uma empresa',
    desc: 'Dados de cada empresa separados e protegidos, com o mesmo login.',
    icon: <><rect x="3" y="7" width="8" height="13" rx="1" /><rect x="13" y="3" width="8" height="17" rx="1" /><path d="M6 11h2M6 14h2M16 7h2M16 10h2M16 13h2" /></>,
  },
  {
    titulo: 'No escritório e em campo',
    desc: 'Funciona no computador da loja e no celular do técnico em rota.',
    icon: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></>,
  },
  {
    titulo: 'Dados protegidos',
    desc: 'Sessão segura e informações isoladas por empresa.',
    icon: <path d="M12 2l8 3.5v6c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-6L12 2z" />,
  },
  {
    titulo: 'Suporte de verdade',
    desc: 'Time que ajusta o sistema conforme seu negócio cresce.',
    icon: <><path d="M4 15v-3a8 8 0 0116 0v3" /><path d="M4 15a2 2 0 002 2h1v-6H6a2 2 0 00-2 2v2zM20 15a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2v2z" /></>,
  },
  {
    titulo: 'Painel adaptável',
    desc: 'O mesmo painel de andamento serve pra oficina, equipamento e vendas.',
    icon: <><rect x="3" y="4" width="5" height="16" rx="1" /><rect x="9.5" y="4" width="5" height="10" rx="1" /><rect x="16" y="4" width="5" height="13" rx="1" /></>,
  },
  {
    titulo: 'Avisos automáticos',
    desc: 'Recibo, cobrança e contrato enviados automaticamente por e-mail.',
    icon: <><path d="M12 4a4.5 4.5 0 00-4.5 4.5V12l-1.5 3h12l-1.5-3V8.5A4.5 4.5 0 0012 4z" /><path d="M10 19a2 2 0 004 0" /></>,
  },
  {
    titulo: 'Relatórios prontos',
    desc: 'Vendas, estoque e financeiro já em relatório montado.',
    icon: <><rect x="4" y="13" width="3.5" height="7" /><rect x="10.25" y="8" width="3.5" height="12" /><rect x="16.5" y="4" width="3.5" height="16" /></>,
  },
  {
    titulo: 'Sincroniza com Mercado Livre',
    desc: 'Estoque se ajusta automaticamente entre a loja física e o on-line.',
    icon: <><path d="M4.5 12a7.5 7.5 0 0113-5.2M19.5 5v4.5H15" /><path d="M19.5 12a7.5 7.5 0 01-13 5.2M4.5 19v-4.5H9" /></>,
  },
];

const FLUXO = ['Orçamento', 'Venda', 'Nota Fiscal', 'Financeiro'];

function Wordmark() {
  return (
    <div className="wordmark">
      <span className="tag-erp">ERP</span>
      <span className="brand">KOM<span className="dot">TEC</span></span>
      <span className="pro">PRO</span>
    </div>
  );
}

function QrCta({ big }: { big?: boolean }) {
  return (
    <div className={`qr-cta${big ? ' big' : ''}`}>
      <img src="/qr-portfolio.svg" alt="QR code para o portfólio completo" className="qr" />
      <div>
        <div className="cta-label">Aponte a câmera do celular</div>
        <div className="cta-big">Veja o sistema completo</div>
        <div className="cta-url">erpkomtec.com.br/portfolio</div>
      </div>
    </div>
  );
}

export function Panfleto() {
  useEffect(() => {
    document.title = PANFLETO_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  return (
    <div className="komtec-panfleto">
      <div className="toolbar">
        <a href="/portfolio">← Voltar ao portfólio</a>
        <button onClick={() => window.print()}>Baixar / Imprimir PDF</button>
      </div>
      <p className="caption">4 páginas A4. Imprima frente e verso (duplex) e grampeie no canto, ou imprima solto.</p>

      {/* PÁGINA 1 — CAPA */}
      <section className="page capa">
        <div className="blueprint" aria-hidden="true" />
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Sistema de gestão para revendas, oficinas e frotistas</div>
          </div>

          <h1>
            Do orçamento à <em>nota fiscal.</em>
            <br />
            Da oficina ao <em>pátio de máquinas.</em>
          </h1>

          <p className="lead">
            O ERP KomTec Pro é o sistema que revendas de peças, oficinas mecânicas e frotistas — de
            pequenas e médias construtoras a fazendas com equipamentos pesados — usam no dia a dia:
            sem planilha, sem nota fiscal manual, sem papel.
          </p>

          <div className="beneficios">
            {BENEFICIOS.map(b => (
              <div className="beneficio" key={b.titulo}>
                <h4>{b.titulo}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="stub">
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
              <div className="row"><span>Protocolo Sefaz</span><span>135260000123456</span></div>
              <div className="barcode" aria-hidden="true" />
            </div>
          </div>

          <QrCta />
        </div>
      </section>

      {/* PÁGINA 2 — MÓDULOS */}
      <section className="page pg-modulos">
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">O que o sistema faz</div>
          </div>

          <h2 className="pg-title">Seis frentes, um sistema só</h2>
          <p className="pg-subtitle">Cada módulo resolve uma parte da operação — e todos conversam entre si.</p>

          <div className="mod-grid">
            {MODULOS.map(m => (
              <div className={`mod${m.foto ? ' has-foto' : ''}`} key={m.titulo}>
                <div className="mod-text">
                  <h3>{m.titulo}</h3>
                  <p>{m.desc}</p>
                </div>
                {m.foto && <img className="mod-shot" src={m.foto} alt={`Tela de ${m.titulo}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PÁGINA 3 — DIFERENCIAIS */}
      <section className="page pg-diferenciais">
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Por que o ERP KomTec Pro</div>
          </div>

          <h2 className="pg-title">Feito para o seu tipo de operação</h2>

          <div className="diff-grid">
            {DIFERENCIAIS.map(d => (
              <div className="diff" key={d.titulo}>
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{d.icon}</svg>
                <h4>{d.titulo}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PÁGINA 4 — CONTRACAPA */}
      <section className="page contracapa">
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Tudo conectado, de ponta a ponta</div>
          </div>

          <div className="flow-strip">
            {FLUXO.map((etapa, i) => (
              <span className="flow-stage" key={etapa}>
                {i > 0 && <span className="flow-arrow">→</span>}
                {etapa}
              </span>
            ))}
          </div>

          <h2 className="closing-title">Pronto para tirar a operação da planilha?</h2>
          <p className="closing-lead">Mostramos o sistema rodando com um caso parecido com o seu, sem compromisso.</p>

          <QrCta big />

          <div className="contact-block">
            <div className="wordmark big">
              <span className="tag-erp">ERP</span>
              <span className="brand">KOM<span className="dot">TEC</span></span>
              <span className="pro">PRO</span>
            </div>
            <div className="contact-lines">
              erpkomtec.com.br &nbsp;·&nbsp; contato@erpkomtec.com.br
              <br />
              (62) 99325-6370 · WhatsApp
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
