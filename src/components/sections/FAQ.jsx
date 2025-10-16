import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Container from '../ui/Container'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      question: 'O que é CMV e por que ele é importante?',
      answer: 'CMV (Custo de Mercadoria Vendida) é o percentual do seu faturamento que você gasta com compras de insumos. Um CMV alto significa que você está gastando muito para produzir, reduzindo sua margem de lucro. O ideal é manter o CMV entre 28% e 35% para garantir rentabilidade.'
    },
    {
      question: 'Como o Rook System calcula o CMV?',
      answer: 'O Rook usa a fórmula: CMV = (Compras / Receita Líquida) × 100. Você insere sua receita e suas compras do período, e o sistema calcula automaticamente. Se você tem integração com ERP, os dados são importados automaticamente, sem trabalho manual.'
    },
    {
      question: 'Preciso ter conhecimento técnico para usar o Rook?',
      answer: 'Não! O Rook foi desenvolvido para ser extremamente intuitivo. Se você sabe usar WhatsApp, vai saber usar o Rook. Além disso, oferecemos onboarding personalizado e suporte em português para te ajudar em qualquer dúvida.'
    },
    {
      question: 'Quais ERPs o Rook integra?',
      answer: 'Atualmente integramos com Omie, Colibri, Saipo e Teknisa (disponível no plano Business). Novas integrações são adicionadas regularmente. Se você usa outro ERP, entre em contato que podemos avaliar a possibilidade de integração.'
    },
    {
      question: 'O Rook funciona para qualquer tipo de estabelecimento?',
      answer: 'Sim! O Rook foi desenvolvido para restaurantes, bares, lanchonetes, cafeterias, pizzarias, hamburguerias e qualquer estabelecimento que venda alimentos e bebidas. Funciona tanto para operações pequenas quanto para redes com múltiplas unidades.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Absolutamente! Usamos criptografia de ponta a ponta, servidores seguros na AWS e seguimos todas as normas da LGPD. Seus dados são 100% privados e nunca são compartilhados com terceiros. Fazemos backups diários automáticos.'
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim! Não temos contratos de fidelidade. Você pode cancelar quando quiser, sem multas ou taxas. Se cancelar, seus dados ficam disponíveis por 90 dias caso você queira voltar.'
    },
    {
      question: 'Como funciona o plano Freemium?',
      answer: 'O plano Freemium é 100% gratuito para sempre. Você tem acesso à calculadora de CMV, histórico de 30 dias e gráficos básicos. É perfeito para conhecer o Rook e começar a controlar seu CMV sem investir nada.'
    },
    {
      question: 'Qual a diferença entre os planos Basic e Business?',
      answer: 'O Basic é ideal para pequenos restaurantes que querem controle completo de CMV com IA. O Business adiciona integração automática com ERPs, multi-unidade ilimitado, análise preditiva avançada e suporte 24/7. Se você tem ERP, o Business é a melhor escolha.'
    },
    {
      question: 'Vocês oferecem treinamento?',
      answer: 'Sim! Todos os planos incluem materiais de treinamento em vídeo. O plano Business inclui onboarding personalizado com um especialista que vai te ensinar a usar todas as funcionalidades e configurar tudo do jeito certo.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Plano Freemium: suporte por email (resposta em até 48h). Plano Basic: suporte prioritário por email (resposta em até 24h). Plano Business: suporte 24/7 via WhatsApp com resposta imediata.'
    },
    {
      question: 'Posso testar antes de assinar?',
      answer: 'Sim! Todos os planos pagos incluem 14 dias de teste grátis, sem necessidade de cartão de crédito. Você pode testar todas as funcionalidades sem compromisso. Se não gostar, basta não assinar.'
    }
  ]
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-info-100 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-info-600" />
            <span className="text-sm font-semibold text-info-700">
              Perguntas Frequentes
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-rook-brown mb-6">
            Dúvidas?{' '}
            <span className="bg-gradient-rook bg-clip-text text-transparent">
              Temos as respostas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Tudo que você precisa saber sobre o Rook System. 
            Não encontrou sua dúvida? Entre em contato!
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-rook-brown-200 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-rook-brown-50 transition-colors"
              >
                <span className="font-bold text-rook-brown text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-rook-brown flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-rook-brown-50 to-rook-pingado-50 border border-rook-brown-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-rook-brown mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-700 mb-6">
              Nossa equipe está pronta para te ajudar. Entre em contato e responderemos em até 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-rook text-white rounded-lg font-semibold hover:shadow-rook-lg transition-all"
              >
                Falar com Especialista
              </a>
              <a 
                href="https://app.rooksystem.com.br/registro"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-rook-brown border-2 border-rook-brown rounded-lg font-semibold hover:bg-rook-brown hover:text-white transition-all"
              >
                Começar Grátis
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQ

