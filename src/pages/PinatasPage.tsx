import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HeaderProduct from '@/components/HeaderProduct';
import Footer from '@/components/Footer';

interface Pinata {
  id: number;
  nombre: string;
  tematica: string;
  precio: number;
  imagen: string;
  descripcion: string;
  tamanos: string[];
}

const descuento = 1;
const pinatasData: Pinata[] = [
  {
    id: 1,
    nombre: "Piñata Tradicional de 7 Picos",
    tematica: "Tradicional",
    precio: 120.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1519671482749-5fcaaff5a92d?w=400&h=300&fit=crop",
    descripcion: "Piñata clásica de 7 picos, perfecta para cualquier celebración",
    tamanos: ["Mediana (80cm)", "Grande (1.2m)"]
  },
  {
    id: 2,
    nombre: "Piñata de Superhéroe",
    tematica: "Infantil",
    precio: 150.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=300&fit=crop",
    descripcion: "Elige entre los superhéroes favoritos de los niños",
    tamanos: ["Mediana (70cm)", "Grande (1m)"]
  },
  {
    id: 3,
    nombre: "Piñata de Unicornio",
    tematica: "Infantil",
    precio: 180.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1600697233272-8aaee8ef0842?w=400&h=300&fit=crop",
    descripcion: "Mágica piñata de unicornio con cuerno y crin de colores",
    tamanos: ["Mediana (70cm)", "Grande (1m)", "Gigante (1.5m)"]
  },
  {
    id: 4,
    nombre: "Piñata de Números",
    tematica: "Cumpleaños",
    precio: 130.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    descripcion: "Números del 0 al 9 para personalizar según la edad del festejado",
    tamanos: ["Mediano (60cm)", "Grande (90cm)"]
  },
  {
    id: 5,
    nombre: "Piñata de Letras",
    tematica: "Personalizada",
    precio: 140.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
    descripcion: "Letras del abecedario para armar nombres o palabras especiales",
    tamanos: ["Mediano (50cm)", "Grande (80cm)"]
  },
  {
    id: 6,
    nombre: "Piñata de Fútbol",
    tematica: "Deportes",
    precio: 160.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe1954c4?w=400&h=300&fit=crop",
    descripcion: "Perfecta para los amantes del fútbol en todas las edades",
    tamanos: ["Mediana (70cm)", "Grande (1m)"]
  },
  {
    id: 7,
    nombre: "Piñata de Piñata",
    tematica: "Humor",
    precio: 200.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=400&h=300&fit=crop",
    descripcion: "Una piñata con forma de piñata, ¡el mejor regalo irónico!",
    tamanos: ["Mediana (60cm)", "Grande (90cm)"]
  },
  {
    id: 8,
    nombre: "Piñata de Cactus",
    tematica: "Temática",
    precio: 170.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&h=300&fit=crop",
    descripcion: "Diseño moderno de cactus, ideal para fiestas con temática desértica",
    tamanos: ["Mediana (60cm)", "Grande (1m)"]
  }
];

const tematicas = ["Todos", "Tradicional", "Infantil", "Cumpleaños", "Personalizada", "Deportes", "Humor", "Temática"];

const Pinatas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroTematica, setFiltroTematica] = useState("Todos");

  const pinatasFiltradas = useMemo(() => {
    return pinatasData.filter(pinata => {
      const cumpleNombre = pinata.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
      const cumpleTematica = filtroTematica === "Todos" || pinata.tematica === filtroTematica;
      return cumpleNombre && cumpleTematica;
    });
  }, [filtroNombre, filtroTematica]);

  return (
    <div className="min-h-screen bg-background">
      <HeaderProduct />
      
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
            Catálogo de Piñatas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra la piñata perfecta para tu celebración. 
            Desde diseños tradicionales hasta personalizados, tenemos opciones para todos los gustos y edades.
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
                  placeholder="Buscar piñatas..."
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
            Mostrando {pinatasFiltradas.length} de {pinatasData.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {pinatasFiltradas.map((pinata) => (
            <Card key={pinata.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={pinata.imagen}
                  alt={pinata.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{pinata.nombre}</CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {pinata.tematica}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2 h-12">
                  {pinata.descripcion}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${pinata.precio}</span>
                    
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">Tamaños disponibles:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {pinata.tamanos.map((tamano, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tamano}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pinatas;
