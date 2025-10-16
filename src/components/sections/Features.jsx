import { Calculator, Brain, TrendingUp, Zap, BarChart3, Bell, ShoppingCart, Users } from 'lucide-react'
import Container from '../ui/Container'

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Calculadora Automática de CMV',
      description: 'Insira receita e compras. O Rook calcula seu CMV instantaneamente, mostrando se está dentro da meta ou não.',
      color: 'rook-brown',
      gradient: 'gradient-rook'
    },
    {
      icon: Brain,
      title: 'Inteligência Preditiva',
      description: 'IA prevê quanto você pode comprar na próxima semana sem comprometer sua meta de CMV. Decisões baseadas em dados reais.',
      color: 'info',
      gradient: 'gradient-info'
    },
    {
      icon: Bell,
      title: 'Alertas em Tempo Real',
      description: 'Receba notificações quando o CMV estiver acima do ideal. Aja antes que o problema vire prejuízo.',
      color: 'warning',
      gradient: 'gradient-warning'
    },
    {
      icon: TrendingUp,
      title: 'Análise Estratégica com IA',
      description: 'Relatórios mensais gerados por IA identificam tendências, oportunidades e ações corretivas personalizadas.',
      color: 'success',
      gradient: 'gradient-success'
    },
    {
      icon: BarChart3,
      title: 'Gráficos de Evolução',
      description: 'Visualize a evolução do seu CMV em gráficos interativos. Compare períodos, identifique padrões e tome decisões.',
      color: 'rook-pingado',
      gradient: 'gradient-rook-dark'
    },
    {
      icon: Zap,
      title: 'Integração com ERP',
      description: 'Conecte com Omie, Colibri, Saipo, Teknisa e outros. Dados sincronizados automaticamente, zero trabalho manual.',
      color: 'rook-verde',
      gradient: 'gradient-rook'
    },
    {
      icon: ShoppingCart,
      title: 'Controle de Compras',
      description: 'Registre compras por categoria e veja o impacto no CMV em tempo real. Identifique quais categorias estão pesando mais.',
      color: 'info',
      gradient: 'gradient-info'
    },
    {
      icon: Users,
      title: 'Multi-Unidade',
      description: 'Gerencie várias unidades em um único painel. Compare performance, identifique melhores práticas e replique sucessos.',
      color: 'success',
      gradient: 'gradient-success'
    }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-rook-brown-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-rook-brown-100 px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5 text-rook-brown" />
            <span className="text-sm font-semibold text-rook-brown">
              Funcionalidades Poderosas
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-rook-brown mb-6">
            Tudo que você precisa para{' '}
            <span className="bg-gradient-rook bg-clip-text text-transparent">
              controlar seu CMV
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Ferramentas profissionais que transformam dados em decisões lucrativas. 
            Do cálculo básico à inteligência artificial avançada.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-rook-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-rook-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 mb-6">
            E muito mais! Novas funcionalidades são adicionadas mensalmente.
          </p>
          <a 
            href="https://app.rooksystem.com.br/registro"
            className="inline-flex items-center space-x-2 bg-gradient-rook text-white px-8 py-4 rounded-lg font-semibold hover:shadow-rook-lg transition-all group"
          >
            <span>Experimentar Grátis</span>
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Features

