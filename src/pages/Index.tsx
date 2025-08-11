import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SideNavigation from '@/components/SideNavigation';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Zenith Party Store - Artículos y Decoración para Fiestas';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Zenith Party Store - Tu tienda de confianza para artículos y decoración de fiestas. Globos, piñatas, disfraces, vajilla y más. Asesoría personalizada en el centro de la ciudad.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Side Navigation */}
      <SideNavigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <ProductsSection />
        <WhyChooseUs />
        
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
