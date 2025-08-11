import { PartyPopper, Gift, UtensilsCrossed, Shirt, ArrowRight, PaintRoller, Drama } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import balloonsImg from '@/assets/balloons.jpg';
import pinataImg from '@/assets/pinata.jpg';

const ProductsSection = () => {
  const navigate = useNavigate();
  const handleProductClick = (route: string) => {
    navigate(route);
  };
  const products = [
    {
      icon: PartyPopper,
      title: "Globos y decoración",
      description: "Globos de helio, metálicos, temáticos y decoraciones para ambientar tu evento perfectamente.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      route: '/globos'
    },
    {
      icon: Gift,
      title: "Piñatas y temáticas",
      description: "Piñatas artesanales, decoraciones temáticas de superhéroes, princesas y más.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      route: '/pinatas'   
    },
    {
      icon: UtensilsCrossed,
      title: "Accesorios",
      description: "Platos, vasos, servilletas desechables y accesorios coordinados para tu mesa.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      route: '/vajilla'
    },
    {
      icon: Drama,
      title: "Disfraces y velas",
      description: "Disfraces divertidos, máscaras, velas numéricas y de colores para completar la celebración.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      route: '/disfraces'
    }
  ];

  return (
    <section id="productos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Todo para tu <span className="text-gradient-party">celebración</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia variedad de productos para hacer de tu fiesta 
            un evento inolvidable. Calidad garantizada y los mejores precios.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div 
                key={index} 
                className="card-party group cursor-pointer"
                onClick={() => handleProductClick(product.route)}
              >
                <div className={`w-16 h-16 ${product.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${product.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={balloonsImg} 
              alt="Globos coloridos para fiestas" 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Globos premium</h3>
                <p className="text-sm opacity-90">Helio de larga duración</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={pinataImg} 
              alt="Piñatas artesanales" 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Piñatas artesanales</h3>
                <p className="text-sm opacity-90">Diseños únicos y personalizados</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-festive text-lg px-8 py-6"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver galería completa
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;