import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
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
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { CookieConsent } from './components/CookieConsent';
import { useSiteConteudo } from './hooks/useSiteConteudo';

export default function App() {
  const { secoes, hero, modulos, diferenciais, depoimentos, faq, planos, ctabanner, secoesExtras } = useSiteConteudo();

  if (window.location.pathname === '/privacidade') {
    return <PoliticaPrivacidade />;
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
        {secoes.depoimentos       && <Depoimentos  content={depoimentos} />}
        {secoes.planos            && <Planos       content={planos} />}
        {secoes.experimenteGratis && <ExperimenteGratis />}
        {secoes.faq               && <Faq          content={faq} />}
        {secoes.contato           && <Contato />}
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
