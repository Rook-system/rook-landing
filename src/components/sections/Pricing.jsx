import { Check, Sparkles, Zap, Crown } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Pricing = () => {
  const plans = [
    {
      name: 'Freemium',
      price: 'Grátis',
      period: 'para sempre',
      description: 'Ideal para conhecer o Rook e começar a controlar seu CMV',
      icon: Zap,
      color: 'info',
      gradient: 'gradient-info',
      features: [
        'Calculadora de CMV básica',
        'Histórico de 30 dias',
        'Gráficos de evolução',
        'Alertas por email',
        'Suporte por email'
      ],
      cta: 'Começar Grátis',
      href: 'https://app.rooksystem.com.br/registro?plan=freemium',
      popular: false
    },
    {
      name: 'Basic',
      price: 'R$ 99',
      period: '/mês',
      description: 'Para pequenos restaurantes que querem resultados reais',
      icon: Sparkles,
      color: 'rook-brown',
      gradient: 'gradient-rook',
      features: [
        'Tudo do Freemium',
        'Histórico completo ilimitado',
        'Gráficos avançados de evolução',
        'Insights com IA',
        'Análise de tendências',
        'Relatórios mensais',
        'Suporte prioritário'
      ],
      cta: 'Escolher Basic',
      href: 'https://app.rooksystem.com.br/registro?plan=basic',
      popular: true
    },
    {
      name: 'Business',
      price: 'R$ 299',
      period: '/mês',
      description: 'Para restaurantes com ERP que querem automação total',
      icon: Crown,
      color: 'rook-pingado',
      gradient: 'gradient-rook-dark',
      badge: 'RECOMENDADO',
      features: [
        'Tudo do Basic',
        'Integração ERP automática',
        'Omie, Colibri, Saipo, Teknisa',
        'Multi-unidade ilimitado',
        'Análise preditiva avançada',
        'Consultoria especializada',
        'Suporte 24/7 via WhatsApp',
        'Onboarding personalizado'
      ],
      cta: 'Escolher Business',
      href: 'https://app.rooksystem.com.br/registro?plan=business',
      popular: false
    }
  ]
  
  return (
    <section id="precos" className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-rook-brown-100 px-4 py-2 rounded-full mb-6">
            <Crown className="w-5 h-5 text-rook-brown" />
            <span className="text-sm font-semibold text-rook-brown">
              Planos e Preços
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-rook-brown mb-6">
            Escolha o plano ideal para{' '}
            <span className="bg-gradient-rook bg-clip-text text-transparent">
              seu restaurante
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Comece grátis e evolua conforme seu negócio cresce. 
            Sem contratos, sem surpresas, cancele quando quiser.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl border-2 ${
                plan.popular 
                  ? 'border-rook-brown shadow-rook-xl scale-105' 
                  : 'border-gray-200 hover:border-rook-brown-200'
              } p-8 transition-all duration-300 hover:shadow-rook-xl animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-rook text-white px-4 py-1 rounded-full text-sm font-bold shadow-rook">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              {/* Icon */}
              <div className={`w-14 h-14 bg-${plan.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <plan.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-rook-brown mb-2">
                {plan.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 min-h-[3rem]">
                {plan.description}
              </p>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold text-rook-brown">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">
                    {plan.period}
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button 
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg"
                className="w-full mb-8"
                href={plan.href}
              >
                {plan.cta}
              </Button>
              
              {/* Features */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-700 mb-4">
                  O que está incluído:
                </p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-rook-brown-50 border border-rook-brown-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="font-bold text-rook-brown mb-2">
              💡 Tem ERP? O plano Business é perfeito para você!
            </h4>
            <p className="text-gray-700">
              Integração automática com Omie, Colibri, Saipo e Teknisa. 
              Seus dados sincronizados em tempo real, zero trabalho manual.
            </p>
          </div>
          
          <p className="text-gray-500 mt-8 text-sm">
            Todos os planos incluem 14 dias de teste grátis • Sem cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Pricing

