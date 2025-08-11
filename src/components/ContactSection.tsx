import { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo muy pronto.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+593 996272566",
      action: "tel:+525551234567",
      actionText: "Llamar ahora"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Principal 123, Centro, Ciudad de México",
      action: "https://maps.app.goo.gl/Xyr8XDEEjB1mKhau5",
      actionText: "Ver en mapa"
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun-Dom: 9:00-19:00",
      action: null,
      actionText: null
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¡Hagamos realidad <span className="text-gradient-party">tu fiesta!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctanos para recibir asesoría personalizada o visítanos en nuestra tienda. 
            Estamos aquí para ayudarte a crear momentos inolvidables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Información de contacto
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground whitespace-pre-line mb-2">
                        {info.content}
                      </p>
                      {info.action && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(info.action!, '_blank')}
                        >
                          {info.actionText}
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-[#25D366] mr-3" />
                <h4 className="font-semibold text-foreground">WhatsApp Business</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                ¡Escríbenos por WhatsApp para atención inmediata y cotizaciones rápidas!
              </p>
              <Button 
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                onClick={() => window.open('https://wa.me/593996272566?text=Hola, me gustaría información sobre productos para fiestas', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chatear en WhatsApp
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mapa de ubicación
                  <br />
                  <span className="text-sm">
                    Av. Principal 123, Centro
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            

            

            {/* Additional contact options */}
            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                Otras formas de contacto
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 Email: info@zenithpartystore.com</p>
                <p>📱 WhatsApp Business: +593 996272566</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;