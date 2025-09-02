import { Heart, MapPin, Clock, Phone, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">Zenith</h3>
              <span className="ml-2 text-sm text-background/70">Party Store</span>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
            Tu tienda de confianza de artículos y decoración de fiestas. 
            Transformamos momentos especiales en celebraciones inolvidables con la mejor calidad y atención personalizada.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-background/70 text-sm">Síguenos:</span>
              <a 
                href="https://facebook.com/zenithpartystore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/zenithpartystore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@zenithpartystore.com"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-1">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/80 text-sm">
                  Mariana de Jesús 427 y de los Romeros.<br />
                  Capelo 
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a 
                    href="tel:0996272566"
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                     0996272566
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/80 text-sm">
                  de 09h00 a 19h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm text-center md:text-left">
              <p>
                © {currentYear} Zenith Party Store. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-1 text-background/70 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>para hacer tus fiestas únicas</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-background/60">
              <a href="#" className="hover:text-primary transition-colors">
                Aviso de Privacidad
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;