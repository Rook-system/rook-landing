import { Calculator, Brain, TrendingUp, Zap, BarChart3, Bell, ShoppingCart, Building2 } from 'lucide-react'
import Container from '../ui/Container'

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Calculadora Automática de CMV',
      description: 'Insira receita e compras. O Rook calcula seu CMV instantaneamente, mostrando se está dentro da meta ou não.'
    },
    {
      icon: Brain,
      title: 'Inteligência Preditiva',
      description: 'IA prevê quanto você pode comprar na próxima semana sem comprometer sua meta de CMV. Decisões baseadas em dados reais.'
    },
    {
      icon: Bell,
      title: 'Alertas em Tempo Real',
      description: 'Receba notificações quando o CMV estiver acima do ideal. Aja antes que o problema vire prejuízo.'
    },
    {
      icon: TrendingUp,
      title: 'Análise Estratégica com IA',
      description: 'Relatórios mensais gerados por IA identificam tendências, oportunidades e ações corretivas personalizadas.'
    },
    {
      icon: BarChart3,
      title: 'Gráficos de Evolução',
      description: 'Visualize a evolução do seu CMV em gráficos interativos. Compare períodos, identifique padrões e tome decisões.'
    },
    {
      icon: Zap,
      title: 'Integração com ERP',
      description: 'Conecte com Omie, Colibri, Saipo, Teknisa e outros. Dados sincronizados automaticamente, zero trabalho manual.'
    },
    {
      icon: ShoppingCart,
      title: 'Controle de Compras',
      description: 'Registre compras por categoria e veja o impacto no CMV em tempo real. Identifique quais categorias estão pesando mais.'
    },
    {
      icon: Building2,
      title: 'Multi-Unidade',
      description: 'Gerencie várias unidades em um único painel. Compare performance, identifique melhores práticas e replique sucessos.'
    }
  ]
  
  return (
    <section id="funcionalidades" className="py-20 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>
      
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-ocre/10 px-4 py-2 rounded-full mb-6 border border-ocre/20">
            <Zap className="w-5 h-5 text-ocre-dark" />
            <span className="text-sm font-light text-ocre-dark uppercase tracking-wider">
              Funcionalidades Poderosas
            </span>
          </div>
          
          <h2 className="text-display-md lg:text-display-lg font-display text-rook mb-6 uppercase">
            Tudo que você precisa para{' '}
            <span className="text-ocre">
              controlar seu CMV
            </span>
          </h2>
          
          <p className="text-xl text-rook-dark/70 font-light">
            Ferramentas profissionais que transformam dados em decisões lucrativas. 
            Do cálculo básico à inteligência artificial avançada.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-rook-light/20 hover:shadow-rook-lg hover:-translate-y-1 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-rook/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-rook group-hover:scale-110 transition-all">
                <feature.icon className="w-7 h-7 text-rook group-hover:text-white transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-rook mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-rook-dark/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-rook-dark/60 mb-6 font-light">
            E muito mais! Novas funcionalidades são adicionadas mensalmente.
          </p>
          <a 
            href="https://app.rooksystem.com.br/registro"
            className="inline-flex items-center space-x-2 bg-gradient-rook text-white px-8 py-4 rounded-lg font-semibold hover:shadow-rook-lg transition-all group uppercase tracking-wide"
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

