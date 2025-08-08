import { Heart, MapPin, Users, Clock } from 'lucide-react';
import storeInteriorImg from '@/assets/store-interior.jpg';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Asesoría personalizada",
      description: "Te ayudamos a elegir los productos perfectos para tu celebración especial."
    },
    {
      icon: Users,
      title: "Gran variedad temática",
      description: "Productos para cumpleaños, bodas, bautizos, graduaciones y más ocasiones."
    },
    {
      icon: MapPin,
      title: "Ubicación céntrica",
      description: "Fácil acceso y estacionamiento disponible para tu comodidad."
    },
    {
      icon: Clock,
      title: "Atención personalizada",
      description: "Horarios amplios y personal capacitado para atenderte con amabilidad."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Por qué elegir <span className="text-gradient-party">Zenith?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Más de 5 años transformando momentos especiales en celebraciones 
              inolvidables. Somos tu aliado perfecto para crear la fiesta de tus sueños.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Fiestas realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={storeInteriorImg} 
                alt="Interior de tienda Zenith con productos festivos" 
                className="w-full h-96 lg:h-full object-cover"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-foreground mb-2">
                  Visítanos en tienda
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Conoce todos nuestros productos y recibe asesoría especializada
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-1" />
                  Centro de la ciudad
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;