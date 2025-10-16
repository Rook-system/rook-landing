import { useState } from 'react'
import { ArrowRight, Mail, User, Phone, Building2, Sparkles } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })
    
    try {
      // TODO: Integrar com CRM/Supabase
      // Por enquanto, apenas simula o envio
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simula sucesso
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.'
      })
      
      // Limpa o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
      })
      
      // TODO: Enviar para Google Analytics/Facebook Pixel
      // window.gtag('event', 'form_submit', { form_name: 'contact' })
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section className="py-20 bg-gradient-to-br from-rook-brown-900 via-rook-brown-800 to-rook-brown-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-rook-pingado-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-rook-brown-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-rook-pingado" />
              <span className="text-sm font-semibold">
                Pronto para Transformar seu Negócio?
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Comece a controlar seu CMV{' '}
              <span className="text-rook-pingado">
                hoje mesmo
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Junte-se a mais de 500 restaurantes que já reduziram custos e aumentaram lucros com o Rook System. 
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Demonstração personalizada do sistema',
                'Consultoria gratuita sobre seu CMV',
                'Plano de ação customizado para seu negócio',
                '14 dias de teste grátis, sem cartão de crédito'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-300">🔒 Dados 100% Seguros</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-300">⚡ Resposta em 24h</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-300">🇧🇷 Suporte em Português</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-rook-xl p-8">
              <h3 className="text-2xl font-bold text-rook-brown mb-6">
                Fale com um Especialista
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rook-brown focus:outline-none transition-colors text-gray-900"
                      placeholder="João Silva"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rook-brown focus:outline-none transition-colors text-gray-900"
                      placeholder="joao@restaurante.com.br"
                    />
                  </div>
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rook-brown focus:outline-none transition-colors text-gray-900"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                
                {/* Business */}
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome do Estabelecimento
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rook-brown focus:outline-none transition-colors text-gray-900"
                      placeholder="Restaurante Sabor & Arte"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rook-brown focus:outline-none transition-colors resize-none text-gray-900"
                    placeholder="Conte-nos um pouco sobre seu negócio e como podemos ajudar..."
                  ></textarea>
                </div>
                
                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-success-50 text-success-700 border border-success-200' 
                      : 'bg-error-50 text-error-700 border border-error-200'
                  }`}>
                    {status.message}
                  </div>
                )}
                
                {/* Submit Button */}
                <Button 
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Falar com Especialista
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você concorda com nossa{' '}
                  <a href="/privacidade" className="text-rook-brown hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA

