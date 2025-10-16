import { ArrowRight, TrendingDown, Zap, BarChart3 } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-rook-brown-50 via-white to-rook-pingado-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-rook-brown-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-rook-pingado-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-rook">
              <Zap className="w-4 h-4 text-warning-500" />
              <span className="text-sm font-semibold text-rook-brown">
                Inteligência Artificial para Gestão de CMV
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-rook-brown leading-tight">
              Controle seu CMV com{' '}
              <span className="bg-gradient-rook bg-clip-text text-transparent">
                Inteligência
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Reduza custos, aumente lucros e tome decisões estratégicas baseadas em dados. 
              O Rook System usa IA para prever, alertar e orientar sua gestão de compras.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div>
                <div className="text-3xl font-bold text-rook-brown">40%</div>
                <div className="text-sm text-gray-600">Redução de CMV</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rook-brown">3x</div>
                <div className="text-sm text-gray-600">Mais Rápido</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rook-brown">100%</div>
                <div className="text-sm text-gray-600">Automático</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                href="https://app.rooksystem.com.br/registro"
                className="group"
              >
                Começar Grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="#demo"
              >
                Ver Demonstração
              </Button>
            </div>
            
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sem cartão de crédito • Cancele quando quiser • Suporte em português</span>
            </div>
          </div>
          
          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Floating Cards */}
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-rook-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-rook-brown">Dashboard CMV</h3>
                  <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-semibold">
                    Em tempo real
                  </span>
                </div>
                
                {/* CMV Indicator */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-4xl font-bold text-rook-brown">32,5%</span>
                    <span className="text-success-600 text-sm font-semibold flex items-center">
                      <TrendingDown className="w-4 h-4 mr-1" />
                      -8,3%
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">CMV Atual vs. Meta (40%)</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-success rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                {/* Mini Chart */}
                <div className="flex items-end justify-between h-24 space-x-2">
                  {[40, 55, 45, 60, 50, 65, 55, 70, 60, 75, 65, 80].map((height, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-gradient-rook rounded-t opacity-70 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Floating Alert Card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-rook-lg p-4 border border-warning-200 max-w-xs animate-pulse">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-warning-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rook-brown text-sm mb-1">
                      Alerta Inteligente
                    </h4>
                    <p className="text-xs text-gray-600">
                      Você pode economizar R$ 12.500 esta semana reduzindo compras em 15%
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Success Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-rook-lg p-4 border border-success-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-rook-brown">Meta Atingida!</p>
                    <p className="text-xs text-gray-600">CMV 7,5% abaixo do ideal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero

