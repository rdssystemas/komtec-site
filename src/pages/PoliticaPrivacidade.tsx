export function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <a href="/" className="text-orange-600 text-sm font-medium hover:underline">← Voltar ao início</a>

        <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-2">Política de Privacidade</h1>
        <p className="text-gray-400 text-sm mb-10">Última atualização: julho de 2026</p>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Quem somos</h2>
            <p>
              O <strong>ERP KomTec Pro</strong> é um sistema de gestão empresarial operado por
              R D DOS SANTOS SOLUCOES EMPRESARIAIS (CNPJ 34.446.363/0001-77). Esta política explica
              quais dados coletamos através deste site, para que usamos e como você pode exercer seus
              direitos, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. Dados que coletamos</h2>
            <p className="mb-2">Ao preencher os formulários deste site, podemos coletar:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nome completo</li>
              <li>E-mail e telefone/WhatsApp</li>
              <li>Nome da empresa e segmento de atuação</li>
              <li>CPF e data de nascimento (apenas no formulário de contato comercial)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. Para que usamos seus dados</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Criar e disponibilizar sua conta de teste gratuito no sistema</li>
              <li>Entrar em contato para apresentar o produto e tirar dúvidas</li>
              <li>Enviar comunicações comerciais, incluindo ofertas especiais de aniversário, caso você tenha optado por recebê-las</li>
              <li>Cumprir obrigações legais e prevenir fraudes (ex.: verificação por reCAPTCHA)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Com quem compartilhamos</h2>
            <p>
              Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.
              Seus dados podem ser processados por prestadores de infraestrutura técnica
              (hospedagem, envio de e-mail) estritamente para operar o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">5. Seus direitos</h2>
            <p>
              Você pode solicitar a qualquer momento a confirmação, correção, anonimização ou
              exclusão dos seus dados pessoais, bem como revogar o consentimento para receber
              comunicações. Para isso, entre em contato pelo e-mail{' '}
              <a href="mailto:contato@erpkomtec.com.br" className="text-orange-600 hover:underline">
                contato@erpkomtec.com.br
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">6. Retenção de dados</h2>
            <p>
              Dados de contas de teste gratuito não convertidas em clientes são removidos
              automaticamente do nosso banco de dados após o período de teste mais uma carência
              de alguns dias. Dados de contato comercial são mantidos enquanto houver relacionamento
              ativo ou até solicitação de exclusão.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">7. Contato</h2>
            <p>
              Dúvidas sobre esta política ou sobre o tratamento dos seus dados podem ser enviadas para{' '}
              <a href="mailto:contato@erpkomtec.com.br" className="text-orange-600 hover:underline">
                contato@erpkomtec.com.br
              </a>{' '}
              ou pelo WhatsApp (62) 99325-6370.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
