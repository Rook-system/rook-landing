import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react'
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
    <footer className="bg-rook-brown-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-rook rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">Rook System</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Controle seu CMV com inteligência artificial. Reduza custos, aumente lucros e tome decisões estratégicas baseadas em dados.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/rooksystem" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/rooksystem" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@rooksystem" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-rook-brown-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-rook-pingado mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:contato@rooksystem.com.br" className="text-gray-300 hover:text-white transition-colors">
                  contato@rooksystem.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-rook-pingado mt-1" />
              <div>
                <p className="font-semibold">Telefone</p>
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-rook-pingado mt-1" />
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="text-gray-300">
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} Rook System. Todos os direitos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

