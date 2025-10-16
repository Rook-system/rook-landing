import { AlertTriangle, Zap, TrendingUp, Shield, Brain, Clock } from 'lucide-react'
import Container from '../ui/Container'

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problema */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-terracota/10 px-4 py-2 rounded-full border border-terracota/20">
              <AlertTriangle className="w-5 h-5 text-terracota" />
              <span className="text-sm font-light text-terracota-dark uppercase tracking-wider">
                O Problema
              </span>
            </div>
            
            <h2 className="text-display-md lg:text-display-lg font-display text-rook leading-tight uppercase">
              CMV alto está{' '}
              <span className="text-terracota">matando</span>{' '}
              seu lucro?
            </h2>
            
            <p className="text-xl text-rook-dark/70 leading-relaxed font-light">
              Você trabalha duro, vende bem, mas no final do mês o lucro não aparece. 
              O problema? <strong className="text-rook font-medium">Custo de Mercadoria Vendida descontrolado.</strong>
            </p>
            
            {/* Pain Points */}
            <div className="space-y-4 pt-4">
              {[
                'Compras sem planejamento aumentam custos em até 40%',
                'Desperdício e perdas comem sua margem de lucro',
                'Falta de controle impede decisões estratégicas',
                'Planilhas manuais são lentas, propensas a erros e desatualizadas'
              ].map((pain, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-terracota/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terracota font-bold text-sm">✕</span>
                  </div>
                  <p className="text-rook-dark/60 font-light">{pain}</p>
                </div>
              ))}
            </div>
            
            {/* Stat */}
            <div className="bg-white border-l-4 border-terracota p-6 rounded-lg shadow-rook">
              <p className="text-4xl font-bold text-terracota mb-2">11,84%</p>
              <p className="text-rook-dark/70 font-light">
                É quanto restaurantes com CMV acima de 36% <strong className="text-rook font-medium">perdem de lucro</strong> em média, 
                segundo análise de 1.000+ estabelecimentos.
              </p>
            </div>
          </div>
          
          {/* Solução */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-2 bg-floresta/10 px-4 py-2 rounded-full border border-floresta/20">
              <Zap className="w-5 h-5 text-floresta" />
              <span className="text-sm font-light text-floresta-dark uppercase tracking-wider">
                A Solução
              </span>
            </div>
            
            <h2 className="text-display-md lg:text-display-lg font-display text-rook leading-tight uppercase">
              Rook System:{' '}
              <span className="text-ocre">
                Inteligência
              </span>{' '}
              que gera lucro
            </h2>
            
            <p className="text-xl text-rook-dark/70 leading-relaxed font-light">
              Controle automático de CMV com inteligência artificial. 
              O Rook <strong className="text-rook font-medium">prevê, alerta e orienta</strong> suas decisões de compra em tempo real.
            </p>
            
            {/* Solution Points */}
            <div className="space-y-4 pt-4">
              {[
                { icon: Brain, text: 'IA prevê variações de custo antes de acontecerem' },
                { icon: TrendingUp, text: 'Alertas inteligentes sugerem ações para reduzir CMV' },
                { icon: Shield, text: 'Controle total em tempo real, sem planilhas' },
                { icon: Clock, text: 'Economize 15h/semana em gestão de compras' }
              ].map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-floresta/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-floresta" />
                  </div>
                  <p className="text-rook-dark/70 font-light pt-2">{solution.text}</p>
                </div>
              ))}
            </div>
            
            {/* Success Stat */}
            <div className="bg-gradient-to-br from-rook-light to-rook p-6 rounded-lg shadow-rook-lg">
              <p className="text-4xl font-bold text-white mb-2">R$ 47.500</p>
              <p className="text-white/90 font-light">
                É quanto nossos clientes <strong className="font-medium">economizam em média</strong> nos primeiros 3 meses 
                com o Rook System.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProblemSolution

