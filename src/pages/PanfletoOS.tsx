import { useEffect } from 'react';
import './PanfletoOS.css';

const SITE_TITLE = 'ERP KomTec — Sistema de Gestão Empresarial Online | Vendas, NF-e, Estoque';
const PAGE_TITLE = 'ERP KomTec Pro — Ordens de Serviço';

const BENEFICIOS = [
  { titulo: 'Sem papel na oficina', desc: 'Técnico abre, atualiza e conclui a OS pelo próprio celular.' },
  { titulo: 'Sem peça perdida', desc: 'Cada peça da OS tem status: identificada, aguardando ou instalada.' },
  { titulo: 'Sem faturar errado', desc: 'Cliente aprova horas, km e peças antes da nota sair.' },
];

const PASSOS = [
  { titulo: 'Abertura', desc: 'A empresa abre a OS com técnico, equipamento e instrução de atendimento.' },
  { titulo: 'Em campo ou na oficina', desc: 'O técnico atualiza tudo pelo celular: sintomas, peças usadas, horas e km.' },
  { titulo: 'Aprovação do cliente', desc: 'O cliente aprova horas, km e peças antes de qualquer nota sair.' },
  { titulo: 'Faturamento', desc: 'Aprovado, a OS vira nota fiscal — ou pula direto pro faturamento, se preferir.' },
];

const RECURSOS = [
  {
    titulo: 'Peças com status',
    desc: 'Cada peça identificada na OS mostra se está aguardando, instalada ou descartada — sem perder o controle do estoque.',
    icon: <><rect x="3" y="9" width="7" height="7" rx="1" /><rect x="14" y="9" width="7" height="7" rx="1" /><path d="M6.5 9V6a2 2 0 012-2h7a2 2 0 012 2v3" /></>,
  },
  {
    titulo: 'Painel de andamento',
    desc: 'Veja em uma tela só quais OS estão atrasadas, em campo ou aguardando aprovação.',
    icon: <><rect x="3" y="4" width="5" height="16" rx="1" /><rect x="9.5" y="4" width="5" height="10" rx="1" /><rect x="16" y="4" width="5" height="13" rx="1" /></>,
  },
  {
    titulo: 'Permissão por perfil',
    desc: 'O técnico só edita o que é dele; dados de abertura e custo ficam só com a empresa.',
    icon: <><path d="M12 2l8 3.5v6c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-6L12 2z" /></>,
  },
  {
    titulo: 'Aviso automático',
    desc: 'O técnico recebe um e-mail assim que uma OS é atribuída ou reaberta pra ele.',
    icon: <><path d="M12 4a4.5 4.5 0 00-4.5 4.5V12l-1.5 3h12l-1.5-3V8.5A4.5 4.5 0 0012 4z" /><path d="M10 19a2 2 0 004 0" /></>,
  },
  {
    titulo: 'OS mãe e filha',
    desc: 'Peça em garantia ou revisão de retorno? Vira uma OS filha ligada à original, com o histórico junto.',
    icon: <><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /><path d="M7 11v4a2 2 0 002 2h4" /></>,
  },
  {
    titulo: 'Horas e km controlados',
    desc: 'Cada período trabalhado e trecho de viagem é registrado pelo técnico, pronto para o faturamento.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  },
  {
    titulo: 'PDF do relatório',
    desc: 'Relatório completo com equipamento, diagnóstico, peças e conclusão — pronto para imprimir e assinar.',
    icon: <><path d="M6 2h9l4 4v16H6z" /><path d="M15 2v4h4M9 13h6M9 16.5h6" /></>,
  },
  {
    titulo: 'Faturamento flexível',
    desc: 'A aprovação do cliente pode ser pulada quando a empresa preferir faturar direto.',
    icon: <><path d="M4.5 12a7.5 7.5 0 0113-5.2M19.5 5v4.5H15" /><path d="M19.5 12a7.5 7.5 0 01-13 5.2M4.5 19v-4.5H9" /></>,
  },
];

const FLUXO = ['Abertura', 'Em Campo', 'Aprovação', 'Faturamento'];

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

export function PanfletoOS() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  return (
    <div className="komtec-panfleto-os">
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
            <div className="eyebrow">Gestão de Ordens de Serviço</div>
          </div>

          <h1>
            Da abertura da OS
            <br />
            ao <em>cliente aprovando.</em>
          </h1>

          <p className="lead">
            O ERP KomTec Pro organiza cada Ordem de Serviço da oficina ou do atendimento em campo:
            técnico, peças, horas e aprovação do cliente — tudo em um só lugar, sem planilha e sem
            papel.
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
                <div className="t1">Ordem de Serviço · OS Nº 001.284</div>
                <div className="t2">Revisão preventiva</div>
              </div>
              <div className="status">Em Campo</div>
            </div>
            <div className="stub-body">
              <div className="row"><span>Técnico</span><span>João Alves</span></div>
              <div className="row"><span>Equipamento</span><span>Motoniveladora 140K</span></div>
              <div className="row"><span>Peças</span><span>2 instaladas · 1 aguardando</span></div>
              <div className="row"><span>Horas registradas</span><span>6h40</span></div>
            </div>
            <div className="foot">Ilustração de tela — dados fictícios</div>
          </div>

          <QrCta />
        </div>
      </section>

      {/* PÁGINA 2 — COMO FUNCIONA */}
      <section className="page pg-fluxo">
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Do técnico ao faturamento</div>
          </div>

          <h2 className="pg-title">Como funciona a OS</h2>
          <p className="pg-subtitle">Quatro etapas entre abrir o atendimento e faturar — sem planilha paralela.</p>

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

      {/* PÁGINA 3 — RECURSOS */}
      <section className="page pg-recursos">
        <div className="page-inner">
          <div className="page-top">
            <Wordmark />
            <div className="eyebrow">Feito para oficina e para o campo</div>
          </div>

          <h2 className="pg-title">O que a OS resolve</h2>

          <div className="diff-grid">
            {RECURSOS.map(d => (
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
            <div className="eyebrow">Da oficina ao pátio de máquinas</div>
          </div>

          <div className="flow-strip">
            {FLUXO.map((etapa, i) => (
              <span className="flow-stage" key={etapa}>
                {i > 0 && <span className="flow-arrow">→</span>}
                {etapa}
              </span>
            ))}
          </div>

          <h2 className="closing-title">Pronto para organizar a oficina — ou o campo?</h2>
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
