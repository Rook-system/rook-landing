import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Preços', href: '/precos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ]
  
  return (
    <nav className="bg-white border-b border-rook-light/20 sticky top-0 z-50 shadow-rook-sm backdrop-blur-sm bg-white/95">
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-rook rounded-lg flex items-center justify-center group-hover:bg-rook-light transition-colors">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-semibold text-rook uppercase tracking-wide">
              Rook
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-rook-dark/70 hover:text-rook transition-colors font-light uppercase tracking-wider text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              href="https://app.rooksystem.com.br/login"
              className="text-rook hover:text-rook-dark"
            >
              Entrar
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              href="https://app.rooksystem.com.br/registro"
              className="bg-terracota hover:bg-terracota-dark text-white border-none"
            >
              Começar Grátis
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-rook hover:bg-rook/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-rook-light/20 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-rook-dark/70 hover:text-rook transition-colors font-light uppercase tracking-wider text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-rook-light/20 space-y-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  href="https://app.rooksystem.com.br/login"
                  className="w-full text-rook"
                >
                  Entrar
                </Button>
                <Button 
                  variant="primary" 
                  size="sm"
                  href="https://app.rooksystem.com.br/registro"
                  className="w-full bg-terracota hover:bg-terracota-dark text-white border-none"
                >
                  Começar Grátis
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default Navbar

