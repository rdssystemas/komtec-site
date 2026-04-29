import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const perguntas = [
  {
    pergunta: 'Preciso instalar algum programa para usar o sistema?',
    resposta:
      'Não. O ERP KomTec é 100% web — basta ter um navegador (Chrome, Edge, Firefox) e acesso à internet. Funciona no computador, tablet e celular, sem instalação.',
  },
  {
    pergunta: 'O sistema emite Nota Fiscal Eletrônica (NF-e)?',
    resposta:
      'Sim. O sistema possui módulo completo de NF-e integrado à SEFAZ, permitindo emitir, cancelar e consultar notas fiscais diretamente, sem precisar de outro programa.',
  },
  {
    pergunta: 'Os dados da minha empresa ficam misturados com os de outras?',
    resposta:
      'Não. Cada empresa tem seus dados completamente isolados em um ambiente exclusivo. Nenhuma empresa acessa ou visualiza informações de outra.',
  },
  {
    pergunta: 'Quantos usuários posso ter no sistema?',
    resposta:
      'O número de usuários depende do plano contratado. Temos planos para pequenas empresas (até 2 usuários) até planos empresariais com usuários ilimitados. Consulte-nos para o plano ideal.',
  },
  {
    pergunta: 'Como funciona o suporte técnico?',
    resposta:
      'Oferecemos suporte por WhatsApp e e-mail. O atendimento é feito diretamente pela equipe técnica que desenvolveu o sistema, garantindo respostas rápidas e precisas.',
  },
  {
    pergunta: 'É possível importar meus dados de outro sistema?',
    resposta:
      'Sim. O sistema suporta importação de produtos via Excel, PDF e XML (NF-e). Para migrações mais complexas, nossa equipe oferece suporte dedicado no processo.',
  },
  {
    pergunta: 'O sistema funciona para qualquer segmento de empresa?',
    resposta:
      'Sim. O ERP KomTec atende comércio, distribuidoras, prestadores de serviço e indústrias. Os módulos são flexíveis e podem ser configurados conforme a necessidade do seu negócio.',
  },
];

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-gray-500">
            Tire suas dúvidas antes de falar com a nossa equipe.
          </p>
        </div>

        <div className="space-y-2">
          {perguntas.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setAberto(aberto === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm pr-4">{item.pergunta}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    aberto === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {aberto === i && (
                <div className="px-5 pb-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
