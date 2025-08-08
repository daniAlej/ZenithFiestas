import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      event: "Fiesta Infantil",
      text: "Increíble variedad de productos y la atención fue excelente. Mi hijo quedó encantado con su fiesta de superhéroes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodríguez",
      event: "Boda",
      text: "Nos ayudaron a coordinar toda la decoración de nuestra boda. Todo salió perfecto, justo como lo habíamos imaginado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      event: "Cumpleaños Adulto",
      text: "La calidad de los globos y decoraciones es excelente. Además, los precios son muy competitivos. Totalmente recomendado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-secondary fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Clientes <span className="text-gradient-party">felices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Mira lo que dicen sobre sus experiencias con Zenith.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-party relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="pt-4">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`Foto de ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.event}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Calificación promedio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Recomendaciones</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Años de confianza</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;