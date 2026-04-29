import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Hero } from './sections/Hero';
import { Modulos } from './sections/Modulos';
import { Screenshots } from './sections/Screenshots';
import { Diferenciais } from './sections/Diferenciais';
import { Depoimentos } from './sections/Depoimentos';
import { Planos } from './sections/Planos';
import { Faq } from './sections/Faq';
import { Contato } from './sections/Contato';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Modulos />
        <Screenshots />
        <Diferenciais />
        <Depoimentos />
        <Planos />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
