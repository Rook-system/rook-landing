import { Star, Quote } from 'lucide-react'
import Container from '../ui/Container'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Dono',
      business: 'Pizzaria Bella Massa',
      location: 'São Paulo, SP',
      avatar: 'CS',
      rating: 5,
      text: 'Antes do Rook, meu CMV estava em 42%. Em 3 meses, consegui reduzir para 32%. A inteligência preditiva me alertou sobre compras desnecessárias e economizei R$ 18.000 no trimestre.',
      result: 'Reduziu CMV de 42% para 32%'
    },
    {
      name: 'Ana Paula Mendes',
      role: 'Gestora',
      business: 'Restaurante Sabor & Arte',
      location: 'Rio de Janeiro, RJ',
      avatar: 'AM',
      rating: 5,
      text: 'A integração com o Omie foi perfeita. Agora não preciso mais fazer cálculos manuais. O Rook faz tudo automaticamente e me avisa quando estou comprando demais. Indispensável!',
      result: 'Economizou 15h/mês em planilhas'
    },
    {
      name: 'Roberto Oliveira',
      role: 'Proprietário',
      business: 'Hamburgueria Urban Burger',
      location: 'Belo Horizonte, MG',
      avatar: 'RO',
      rating: 5,
      text: 'O que mais me impressionou foi a análise estratégica com IA. Ela identificou que eu estava gastando muito com embalagens e sugeriu fornecedores alternativos. Resultado: R$ 4.500 economizados por mês.',
      result: 'Economizou R$ 4.500/mês'
    },
    {
      name: 'Juliana Costa',
      role: 'Sócia',
      business: 'Cafeteria Grão Especial',
      location: 'Curitiba, PR',
      avatar: 'JC',
      rating: 5,
      text: 'Tenho 3 unidades e o Rook me permite comparar o desempenho de todas em um único painel. Identifiquei que uma unidade tinha CMV 8% maior e consegui corrigir rapidamente.',
      result: 'Gerencia 3 unidades com facilidade'
    },
    {
      name: 'Fernando Santos',
      role: 'Chef e Proprietário',
      business: 'Bistrô Le Gourmet',
      location: 'Porto Alegre, RS',
      avatar: 'FS',
      rating: 5,
      text: 'Como chef, sempre priorizei qualidade, mas não tinha controle dos custos. O Rook me mostrou onde eu estava perdendo dinheiro sem comprometer a qualidade. Meu lucro aumentou 35%.',
      result: 'Aumentou lucro em 35%'
    },
    {
      name: 'Mariana Alves',
      role: 'Gerente',
      business: 'Lanchonete Sabor Express',
      location: 'Brasília, DF',
      avatar: 'MA',
      rating: 5,
      text: 'O suporte do Rook é excepcional. Sempre que tenho dúvida, sou atendida rapidamente. A plataforma é intuitiva e os alertas em tempo real me salvaram várias vezes de estourar o orçamento.',
      result: 'Suporte 5 estrelas'
    }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-br from-rook-brown-50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-warning-100 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-warning-600 fill-warning-600" />
            <span className="text-sm font-semibold text-warning-700">
              Depoimentos
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-rook-brown mb-6">
            Veja o que nossos clientes{' '}
            <span className="bg-gradient-rook bg-clip-text text-transparent">
              estão dizendo
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Mais de 500 restaurantes já reduziram custos e aumentaram lucros com o Rook System.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-rook-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-rook-brown-200 mb-4" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning-500 fill-warning-500" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Result Badge */}
              <div className="bg-success-50 border border-success-200 rounded-lg px-3 py-2 mb-6">
                <p className="text-success-700 font-semibold text-sm">
                  ✓ {testimonial.result}
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-rook rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-rook-brown">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '500+', label: 'Restaurantes Ativos' },
            { value: '40%', label: 'Redução Média de CMV' },
            { value: 'R$ 12.5k', label: 'Economia Média/Mês' },
            { value: '4.9/5', label: 'Avaliação Média' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-rook-brown mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials

