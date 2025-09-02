import { PartyPopper, MapPin, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroParty from '@/assets/hero-party.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroParty} 
          alt="Decoración de fiestas colorida" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 text-secondary opacity-30 float-animation">
        <PartyPopper size={60} />
      </div>
      <div className="absolute bottom-40 right-40 text-primary opacity-20 float-animation" style={{animationDelay: '1s'}}>
        <Star size={40} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main heading */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-gradient-party block">¡Haz de tu fiesta</span>
              <span className="text-foreground block">un momento único</span>
              <span className="text-gradient-party block">con Zenith!</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Tu tienda de confianza para artículos y decoración de fiestas. 
            Globos, piñatas, disfraces, vajilla y todo lo que necesitas para 
            celebrar con estilo. ¡Te asesoramos personalmente!
          </p>

          {/* Features badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ✨ Asesoría personalizada
            </div>
            <div className="bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
              🎈 Gran variedad temática
            </div>
            <div className="bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              📍 Ubicación céntrica
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="btn-party text-lg px-8 py-6"
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Ver productos
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://maps.app.goo.gl/Xyr8XDEEjB1mKhau5', '_blank')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Cómo llegar
            </Button>
          </div>

          {/* Store info */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 max-w-md">
            <h2 className="font-semibold text-foreground mb-2">Horario de atención:</h2>
            <p className="text-muted-foreground text-sm mb-3">
               9h00 - 19h00<br />
              
            </p>
            <div className="flex items-center text-primary text-sm font-medium">
              
            </div>
          </div>
        </div>
      </div>

      {/* Decorative confetti (optional animation) */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full confetti-animation opacity-60"></div>
      <div className="absolute top-0 right-1/3 w-3 h-3 bg-secondary rounded-full confetti-animation opacity-40" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full confetti-animation opacity-50" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default Hero;