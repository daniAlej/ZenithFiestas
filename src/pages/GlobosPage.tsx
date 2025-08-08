import { useState, useMemo } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Globo {
  id: number;
  nombre: string;
  tematica: string;
  precio: number;
  imagen: string;
  descripcion: string;
  colores: string[];
}
const descuento = 1;
const globosData: Globo[] = [
  {
    id: 1,
    nombre: "Globos Látex Básicos",
    tematica: "Básico",
    precio: 2.50*descuento,
    imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    descripcion: "Globos de látex en colores variados, perfectos para cualquier ocasión",
    colores: ["Rojo", "Azul", "Verde", "Amarillo", "Rosa"]
  },
  {
    id: 2,
    nombre: "Globos Metálicos Corazón",
    tematica: "Romance",
    precio: 8.00*descuento,
    imagen: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    descripcion: "Globos metálicos en forma de corazón, ideales para San Valentín y aniversarios",
    colores: ["Rojo", "Rosa", "Dorado"]
  },
  {
    id: 3,
    nombre: "Globos Números Gigantes",
    tematica: "Cumpleaños",
    precio: 15.00*descuento,
    imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    descripcion: "Globos metálicos con números del 0 al 9, perfectos para cumpleaños",
    colores: ["Dorado", "Plateado", "Rosa", "Azul"]
  },
  {
    id: 4,
    nombre: "Globos Temáticos Unicornio",
    tematica: "Infantil",
    precio: 12.00*descuento,
    imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    descripcion: "Set de globos con diseño de unicornio, mágicos para fiestas infantiles",
    colores: ["Rosa", "Púrpura", "Blanco", "Dorado"]
  },
  {
    id: 5,
    nombre: "Globos Confeti Transparentes",
    tematica: "Elegante",
    precio: 10.00*descuento,
    imagen: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400&h=300&fit=crop",
    descripcion: "Globos transparentes rellenos de confeti dorado y plateado",
    colores: ["Transparente", "Dorado", "Plateado"]
  },
  {
    id: 6,
    nombre: "Globos Superhéroes",
    tematica: "Infantil",
    precio: 9.50*descuento,
    imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    descripcion: "Globos con diseños de superhéroes favoritos de los niños",
    colores: ["Rojo", "Azul", "Amarillo", "Verde"]
  },
  {
    id: 7,
    nombre: "Globos Graduación",
    tematica: "Graduación",
    precio: 7.50*descuento,
    imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    descripcion: "Globos especiales para celebrar graduaciones y logros académicos",
    colores: ["Negro", "Dorado", "Blanco"]
  },
  {
    id: 8,
    nombre: "Globos Baby Shower",
    tematica: "Baby Shower",
    precio: 6.50*descuento,
    imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    descripcion: "Globos pastel perfectos para celebrar la llegada del bebé",
    colores: ["Rosa", "Azul", "Amarillo", "Verde"]
  }
];

const tematicas = ["Todos", "Básico", "Romance", "Cumpleaños", "Infantil", "Elegante", "Graduación", "Baby Shower"];

const Globos = () => {
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroTematica, setFiltroTematica] = useState("Todos");

  const globosFiltrados = useMemo(() => {
    return globosData.filter(globo => {
      const cumpleNombre = globo.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
      const cumpleTematica = filtroTematica === "Todos" || globo.tematica === filtroTematica;
      return cumpleNombre && cumpleTematica;
    });
  }, [filtroNombre, filtroTematica]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </div>

        {/* Header de página */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Catálogo de Globos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia variedad de globos para todas las ocasiones. 
            Desde básicos hasta temáticos, tenemos lo que necesitas para tu celebración.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-card rounded-lg border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-primary" />
            <h2 className="text-lg font-semibold">Filtros</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filtro por nombre */}
            <div>
              <label className="block text-sm font-medium mb-2">Buscar por nombre</label>
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar globos..."
                  value={filtroNombre}
                  onChange={(e) => setFiltroNombre(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filtro por temática */}
            <div>
              <label className="block text-sm font-medium mb-2">Filtrar por temática</label>
              <div className="flex flex-wrap gap-2">
                {tematicas.map((tematica) => (
                  <Button
                    key={tematica}
                    variant={filtroTematica === tematica ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFiltroTematica(tematica)}
                    className="text-xs"
                  >
                    {tematica}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {globosFiltrados.length} de {globosData.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {globosFiltrados.map((globo) => (
            <Card key={globo.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={globo.imagen}
                  alt={globo.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{globo.nombre}</CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {globo.tematica}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {globo.descripcion}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <p className="text-sm font-medium mb-2">Colores disponibles:</p>
                  <div className="flex flex-wrap gap-1">
                    {globo.colores.map((color) => (
                      <Badge key={color} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${globo.precio}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Consultar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {globosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4">
              <Search size={48} className="mx-auto text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
            <p className="text-muted-foreground mb-4">
              Intenta ajustar los filtros para encontrar lo que buscas
            </p>
            <Button 
              onClick={() => {
                setFiltroNombre("");
                setFiltroTematica("Todos");
              }}
              variant="outline"
            >
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contáctanos y te ayudaremos a encontrar los globos perfectos para tu evento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Llamar ahora
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Globos;