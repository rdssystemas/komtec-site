import { lazy, Suspense } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { Modulos } from './sections/Modulos';
import { Diferenciais } from './sections/Diferenciais';
import { Depoimentos } from './sections/Depoimentos';
import { Planos } from './sections/Planos';
import { Faq } from './sections/Faq';
import { CtaBanner } from './sections/CtaBanner';
import { Contato } from './sections/Contato';
import { ExperimenteGratis } from './sections/ExperimenteGratis';
import { SecoesExtras } from './sections/SecoesExtras';
import { InformacoesDestaque } from './sections/InformacoesDestaque';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { CentralInformacoes } from './pages/CentralInformacoes';
import { InformacaoDetalhe } from './pages/InformacaoDetalhe';
import { CookieConsent } from './components/CookieConsent';
import { useSiteConteudo } from './hooks/useSiteConteudo';

// Carregado sob demanda: a página tem fontes e CSS próprios (~150KB) que não
// devem entrar no bundle principal do site.
const Portfolio = lazy(() => import('./pages/Portfolio').then(m => ({ default: m.Portfolio })));
const Panfleto = lazy(() => import('./pages/Panfleto').then(m => ({ default: m.Panfleto })));
const PanfletoParceiros = lazy(() => import('./pages/PanfletoParceiros').then(m => ({ default: m.PanfletoParceiros })));
const PanfletoOS = lazy(() => import('./pages/PanfletoOS').then(m => ({ default: m.PanfletoOS })));

export default function App() {
  const { secoes, hero, modulos, diferenciais, depoimentos, faq, planos, ctabanner, secoesExtras, informacoes } = useSiteConteudo();

  if (window.location.pathname === '/privacidade') {
    return <PoliticaPrivacidade />;
  }

  if (window.location.pathname === '/informacoes') {
    return <CentralInformacoes content={informacoes} />;
  }

  if (window.location.pathname.startsWith('/informacoes/')) {
    const slug = window.location.pathname.replace('/informacoes/', '').replace(/\/$/, '');
    return <InformacaoDetalhe content={informacoes} slug={slug} />;
  }

  if (window.location.pathname === '/portfolio') {
    return (
      <Suspense fallback={null}>
        <Portfolio />
      </Suspense>
    );
  }

  if (window.location.pathname === '/panfleto') {
    return (
      <Suspense fallback={null}>
        <Panfleto />
      </Suspense>
    );
  }

  if (window.location.pathname === '/panfleto-parceiros') {
    return (
      <Suspense fallback={null}>
        <PanfletoParceiros />
      </Suspense>
    );
  }

  if (window.location.pathname === '/panfleto-os') {
    return (
      <Suspense fallback={null}>
        <PanfletoOS />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {secoes.hero              && <Hero         content={hero} />}
        {secoes.modulos           && <Modulos      content={modulos} />}
        {secoes.diferenciais      && <Diferenciais content={diferenciais} />}
        {secoes.ctaBanner         && <CtaBanner    content={ctabanner} />}
        <SecoesExtras secoes={secoesExtras} />
        <Depoimentos content={depoimentos} mostrarGaleria={secoes.depoimentos} />
        {secoes.planos            && <Planos       content={planos} />}
        {secoes.experimenteGratis && <ExperimenteGratis />}
        {secoes.informacoesDestaque && <InformacoesDestaque content={informacoes} />}
        {secoes.faq               && <Faq          content={faq} />}
        {secoes.contato           && <Contato />}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
