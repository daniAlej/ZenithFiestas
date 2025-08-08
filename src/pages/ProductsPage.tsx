import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsSection from '@/components/ProductsSection';

const ProductsPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-8 pb-8 bg-background">
      <ProductsSection />
    </main>
    <Footer />
  </>
);

export default ProductsPage;
