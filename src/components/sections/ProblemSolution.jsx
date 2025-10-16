import { AlertTriangle, TrendingUp, Brain, Zap } from 'lucide-react'
import Container from '../ui/Container'

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problema */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-error-50 px-4 py-2 rounded-full">
              <AlertTriangle className="w-5 h-5 text-error-600" />
              <span className="text-sm font-semibold text-error-700">
                O Problema
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-rook-brown leading-tight">
              CMV alto está{' '}
              <span className="text-error-600">matando</span>{' '}
              seu lucro?
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Você trabalha duro, vende bem, mas no final do mês o lucro não aparece. 
              O problema? <strong className="text-rook-brown">Custo de Mercadoria Vendida descontrolado.</strong>
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
                  <div className="w-6 h-6 bg-error-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-error-600 font-bold text-sm">✕</span>
                  </div>
                  <p className="text-gray-700">{pain}</p>
                </div>
              ))}
            </div>
            
            {/* Stat */}
            <div className="bg-error-50 border-l-4 border-error-600 p-6 rounded-lg">
              <p className="text-3xl font-bold text-error-700 mb-2">11,84%</p>
              <p className="text-gray-700">
                É quanto restaurantes com CMV acima de 36% <strong>perdem de lucro</strong> em média, 
                segundo análise de 1.000+ estabelecimentos.
              </p>
            </div>
          </div>
          
          {/* Solução */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-2 bg-success-50 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-success-600" />
              <span className="text-sm font-semibold text-success-700">
                A Solução
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-rook-brown leading-tight">
              Rook System:{' '}
              <span className="bg-gradient-success bg-clip-text text-transparent">
                Inteligência
              </span>{' '}
              que gera lucro
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Controle automático de CMV com inteligência artificial. 
              O Rook <strong className="text-rook-brown">prevê, alerta e orienta</strong> suas decisões de compra em tempo real.
            </p>
            
            {/* Solution Points */}
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: Brain,
                  title: 'IA Preditiva',
                  description: 'Prevê quanto você pode comprar sem estourar a meta'
                },
                {
                  icon: TrendingUp,
                  title: 'Alertas Inteligentes',
                  description: 'Notifica quando o CMV está saindo do controle'
                },
                {
                  icon: Zap,
                  title: 'Automação Total',
                  description: 'Integra com seu ERP e calcula tudo automaticamente'
                },
                {
                  icon: AlertTriangle,
                  title: 'Ações Corretivas',
                  description: 'Sugere exatamente o que fazer para reequilibrar'
                }
              ].map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white border border-success-200 rounded-xl p-4 hover:shadow-rook transition-shadow">
                  <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-rook-brown mb-1">{solution.title}</h4>
                    <p className="text-gray-600 text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Result Stat */}
            <div className="bg-gradient-success text-white p-6 rounded-xl shadow-rook-lg">
              <p className="text-3xl font-bold mb-2">R$ 12.500</p>
              <p className="text-success-50">
                É quanto nossos clientes <strong>economizam em média por mês</strong> 
                com o controle inteligente de CMV do Rook System.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProblemSolution

