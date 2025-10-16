import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react'
import Container from '../ui/Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    product: [
      { name: 'Funcionalidades', href: '/#features' },
      { name: 'Preços', href: '/precos' },
      { name: 'FAQ', href: '/#faq' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
    company: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carreiras', href: '/carreiras' },
      { name: 'Contato', href: '/contato' },
    ],
    legal: [
      { name: 'Termos de Uso', href: '/termos' },
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Cookies', href: '/cookies' },
    ],
  }
  
  return (
    <footer className="bg-rook-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>
      
      <Container className="py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-rook rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-semibold uppercase tracking-wide">Rook</span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm font-light leading-relaxed">
              Controle seu CMV com inteligência artificial. Reduza custos, aumente lucros e tome decisões estratégicas baseadas em dados.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/rooksystem" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ocre transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/rooksystem" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ocre transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@rooksystem" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ocre transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="mailto:contato@rooksystem.com.br" className="text-white/60 hover:text-ocre transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-ocre">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-ocre">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-ocre">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm font-light">
            © {currentYear} Rook System. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2 text-sm text-white/60 font-light">
            <span>Feito com</span>
            <span className="text-terracota">♟</span>
            <span>estratégia em São Paulo, Brasil</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

