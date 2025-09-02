import { useState } from 'react';
import { Menu, X, Facebook, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-horizontal-zenith.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
        <Link to="/" className="flex items-center" style={{ maxHeight: '80px' }}>
          <img 
            src={logo}
            alt="Logo Zenith Fiestas"
            className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
            style={{ maxHeight: '200px' }}
          />
        </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#productos" className="text-foreground hover:text-primary transition-colors font-medium">
              Productos
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
              Quiénes Somos
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Social Icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a 
                href="https://m.facebook.com/684010418137354/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/zenithu2025?igsh=cGFsbmxmNXZiMGxo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            
            <Button 
              className="btn-party" 
              onClick={() => window.open('https://maps.app.goo.gl/Xyr8XDEEjB1mKhau5', '_blank')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Cómo llegar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 mt-4">
              <a 
                href="#inicio" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Inicio
              </a>
              <a 
                href="#productos" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Productos
              </a>
              <a 
                href="#nosotros" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Quiénes Somos
              </a>
              <a 
                href="#contacto" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contacto
              </a>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://facebook.com/zenithpartystore" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/zenithpartystore" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
                
                <Button 
                  className="btn-party" 
                  size="sm"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Cómo llegar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;