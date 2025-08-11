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

interface Disfraz {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
  tallas: string[];
  edades: string[];
}

const descuento = 1;
const disfracesData: Disfraz[] = [
  {
    id: 1,
    nombre: "Disfraz de Superhéroe Clásico",
    categoria: "Superhéroes",
    precio: 150.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    descripcion: "Disfraz completo de superhéroe con capa y máscara, disponible en varios personajes",
    tallas: ["S", "M", "L", "XL"],
    edades: ["Niños 4-6", "Niños 7-9", "Niños 10-12", "Adultos"]
  },
  {
    id: 2,
    nombre: "Vestido de Princesa Elegante",
    categoria: "Princesas",
    precio: 180.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    descripcion: "Hermoso vestido de princesa con brillos y detalles en pedrería",
    tallas: ["XS", "S", "M"],
    edades: ["Niñas 3-5", "Niñas 6-8", "Niñas 9-12"]
  },
  {
    id: 3,
    nombre: "Disfraz de Animal Salvaje",
    categoria: "Animales",
    precio: 130.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1503376785-2a5b6c8c238e?w=400&h=300&fit=crop",
    descripcion: "Disfraz de animal con capucha y cola, disponible en varios diseños",
    tallas: ["S", "M", "L"],
    edades: ["1-2 años", "3-4 años", "5-6 años", "7-8 años"]
  },
  {
    id: 4,
    nombre: "Traje de Pirata para Adulto",
    categoria: "Aventura",
    precio: 220.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1517607648415-b431854daa65?w=400&h=300&fit=crop",
    descripcion: "Traje completo de pirata con sombrero, parche y cinturón",
    tallas: ["S", "M", "L", "XL", "XXL"],
    edades: ["Adultos"]
  },
  {
    id: 5,
    nombre: "Disfraz de Dinosaurio con Sonido",
    categoria: "Animales",
    precio: 190.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1503376785-2a5b6c8c238e?w=400&h=300&fit=crop",
    descripcion: "Disfraz de dinosaurio con efectos de sonido y cola móvil",
    tallas: ["2-3T", "4-5T", "6-7T"],
    edades: ["2-3 años", "4-5 años", "6-7 años"]
  },
  {
    id: 6,
    nombre: "Traje de Época para Caballero",
    categoria: "Histórico",
    precio: 240.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1551817958-4f0b1b3f4e1a?w=400&h=300&fit=crop",
    descripcion: "Elegante traje de caballero medieval con capa y espada de juguete",
    tallas: ["S", "M", "L"],
    edades: ["Niños 6-8", "Niños 9-12", "Adultos"]
  },
  {
    id: 7,
    nombre: "Disfraz de Personaje de Película",
    categoria: "Películas",
    precio: 210.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1511367461986-f677a9f1c50b?w=400&h=300&fit=crop",
    descripcion: "Disfraz de personaje de película popular, varios modelos disponibles",
    tallas: ["S", "M", "L"],
    edades: ["Niños 4-6", "Niños 7-9", "Niños 10-12", "Adultos"]
  },
  {
    id: 8,
    nombre: "Disfraz de Profesión para Niños",
    categoria: "Profesiones",
    precio: 160.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
    descripcion: "Disfraces de diferentes profesiones: médico, bombero, policía, etc.",
    tallas: ["2-3T", "4-5T", "6-7T"],
    edades: ["2-3 años", "4-5 años", "6-7 años"]
  }
];

const categorias = ["Todos", "Superhéroes", "Princesas", "Animales", "Aventura", "Histórico", "Películas", "Profesiones"];

const DisfracesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

  const disfracesFiltrados = useMemo(() => {
    return disfracesData.filter(disfraz => {
      const cumpleNombre = disfraz.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
      const cumpleCategoria = filtroCategoria === "Todos" || disfraz.categoria === filtroCategoria;
      return cumpleNombre && cumpleCategoria;
    });
  }, [filtroNombre, filtroCategoria]);

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
            Disfraces para Todas las Ocasiones
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra el disfraz perfecto para niños y adultos. 
            Desde superhéroes hasta personajes históricos, tenemos opciones para todos los gustos.
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
                  placeholder="Buscar disfraces..."
                  value={filtroNombre}
                  onChange={(e) => setFiltroNombre(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filtro por categoría */}
            <div>
              <label className="block text-sm font-medium mb-2">Filtrar por categoría</label>
              <div className="flex flex-wrap gap-2">
                {categorias.map((categoria) => (
                  <Button
                    key={categoria}
                    variant={filtroCategoria === categoria ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFiltroCategoria(categoria)}
                    className="text-xs"
                  >
                    {categoria}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {disfracesFiltrados.length} de {disfracesData.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {disfracesFiltrados.map((disfraz) => (
            <Card key={disfraz.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={disfraz.imagen}
                  alt={disfraz.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{disfraz.nombre}</CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {disfraz.categoria}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2 h-12">
                  {disfraz.descripcion}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${disfraz.precio}</span>
                    
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">Tallas disponibles:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {disfraz.tallas.map((talla, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {talla}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Edades: <span className="text-foreground">{disfraz.edades.join(", ")}</span>
                  </p>
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

export default DisfracesPage;
