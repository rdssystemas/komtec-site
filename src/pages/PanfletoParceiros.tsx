import { useEffect } from 'react';
import './PanfletoParceiros.css';

const SITE_TITLE = 'ERP KomTec — Sistema de Gestão Empresarial Online | Vendas, NF-e, Estoque';
const PAGE_TITLE = 'ERP KomTec Pro — Programa de Parceiros';

const BENEFICIOS = [
  { titulo: 'Comissão recorrente', desc: '50% do lucro líquido de cada cliente, todo mês, enquanto ele estiver ativo.' },
  { titulo: 'A carteira é sua', desc: 'Os clientes que você indicar ficam vinculados a você — para sempre.' },
  { titulo: 'Bônus de ativação', desc: 'R$ 200 por cliente que assina, além da comissão recorrente mensal.' },
];

const PASSOS = [
  { titulo: 'Cadastre-se', desc: 'Fale com a gente e receba seu código exclusivo de indicação.' },
  { titulo: 'Indique', desc: 'Compartilhe seu link com quem você conhece: revendas, oficinas, frotistas.' },
  { titulo: 'Cliente assina', desc: 'Ele testa grátis e, se aprovar, contrata um plano.' },
  { titulo: 'Você recebe', desc: 'Comissão gerada automaticamente todo mês — sem precisar cobrar nada.' },
];

const MODELO = [
  {
    titulo: '50% do lucro líquido',
    desc: 'Não é sobre a mensalidade cheia — é sobre o que sobra depois de impostos e taxas, mostrado linha a linha no seu portal.',
    icon: <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>,
  },
  {
    titulo: 'R$200 por cliente ativado',
    desc: 'Bônus fixo pago 90 dias após o início do contrato, além da comissão recorrente.',
    icon: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></>,
  },
  {
    titulo: 'Portal do parceiro',
    desc: 'Veja seus clientes, comissões e saldo em tempo real, quando quiser.',
    icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>,
  },
  {
    titulo: 'Sem exclusividade',
    desc: 'Indique nas horas livres, sem carteira assinada, sem compromisso de horário.',
    icon: <><path d="M12 2l8 3.5v6c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-6L12 2z" /></>,
  },
  {
    titulo: 'Liberação em 30 dias',
    desc: 'Cada comissão gerada fica disponível 30 dias depois, sem enrolação.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  },
  {
    titulo: 'Carteira vitalícia',
    desc: 'Os clientes que você trouxer continuam seus enquanto você for parceiro ativo.',
    icon: <><rect x="3" y="7" width="8" height="13" rx="1" /><rect x="13" y="3" width="8" height="17" rx="1" /></>,
  },
];

const FLUXO = ['Indique', 'Cliente testa', 'Cliente assina', 'Você ganha'];

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
      <img src="/qr-parceiros.svg" alt="QR code para falar com a gente no WhatsApp" className="qr" />
      <div>
        <div className="cta-label">Aponte a câmera do celular</div>
        <div className="cta-big">Quero ser parceiro</div>
        <div className="cta-url">wa.me/5562993256370</div>
      </div>
    </div>
  );
}

export function PanfletoParceiros() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  return (
    <div className="komtec-panfleto-parceiros">
      <div className="toolbar">
        <a href="/">← Voltar ao site</a>
        <button onClick={() => window.print()}>Baixar / Imprimir PDF</button>
      </div>
      <p className="caption">4 páginas A4. Imprima frente e verso (duplex) e grampeie no canto, ou imprima solto.</p>

      {/* PÁGINA 1 — CAPA */}
      <section className="page capa">
        <div className="blueprint" aria-hidden="true" />
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Programa de Parceiros</div>
          </div>

          <h1>
            Indique uma vez.
            <br />
            Ganhe <em>todo mês.</em>
          </h1>

          <p className="lead">
            Revendas de peças, oficinas mecânicas e frotistas — você já conhece alguém assim. Indique o
            ERP KomTec Pro e receba comissão recorrente por cada cliente ativo da sua carteira, sem CLT,
            sem exclusividade e sem investir nada.
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
                <div className="t1">Extrato de Comissão · Parceiro Ativo</div>
                <div className="t2">Saldo do mês</div>
              </div>
              <div className="status">Aprovada</div>
            </div>
            <div className="stub-body">
              <div className="row"><span>Parceiro</span><span>Seu Nome</span></div>
              <div className="row"><span>Clientes ativos na carteira</span><span>7</span></div>
              <div className="row"><span>Comissão do mês</span><span>R$ 1.284,00</span></div>
              <div className="foot">Ilustração — valores fictícios</div>
            </div>
          </div>

          <QrCta />
        </div>
      </section>

      {/* PÁGINA 2 — COMO FUNCIONA */}
      <section className="page pg-passos">
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Do zero ao primeiro pagamento</div>
          </div>

          <h2 className="pg-title">Como funciona</h2>
          <p className="pg-subtitle">Quatro passos simples entre a sua indicação e a comissão caindo na sua conta.</p>

          <div className="mod-grid">
            {PASSOS.map((p, i) => (
              <div className="mod" key={p.titulo}>
                <div className="mod-n">{String(i + 1).padStart(2, '0')}</div>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PÁGINA 3 — MODELO DE COMISSÃO */}
      <section className="page pg-modelo">
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Transparência do início ao fim</div>
          </div>

          <h2 className="pg-title">O modelo de comissão</h2>

          <div className="diff-grid">
            {MODELO.map(d => (
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
            <div className="eyebrow">Sua rede de contatos, sua renda recorrente</div>
          </div>

          <div className="flow-strip">
            {FLUXO.map((etapa, i) => (
              <span className="flow-stage" key={etapa}>
                {i > 0 && <span className="flow-arrow">→</span>}
                {etapa}
              </span>
            ))}
          </div>

          <h2 className="closing-title">Pronto para transformar sua rede em renda recorrente?</h2>
          <p className="closing-lead">Fale com a gente agora e receba seu link de indicação exclusivo.</p>

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
