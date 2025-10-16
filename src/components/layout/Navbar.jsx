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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-rook rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-rook-brown">
              Rook System
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-rook-brown transition-colors font-medium"
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
            >
              Entrar
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              href="https://app.rooksystem.com.br/registro"
            >
              Começar Grátis
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-rook-brown" />
            ) : (
              <Menu className="w-6 h-6 text-rook-brown" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-rook-brown transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button 
                  variant="outline" 
                  size="md" 
                  className="w-full"
                  href="https://app.rooksystem.com.br/login"
                >
                  Entrar
                </Button>
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-full"
                  href="https://app.rooksystem.com.br/registro"
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

