import Header from '@/components/Header';
import HeaderProduct from '@/components/HeaderProduct';
import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

interface Accesorio {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
  colores: string[];
  material: string;
}

const descuento = 1;
const accesoriosData: Accesorio[] = [
  {
    id: 1,
    nombre: "Juego de Platos Desechables",
    categoria: "Platos",
    precio: 25.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1556911220-bda0e4aad32b?w=400&h=300&fit=crop",
    descripcion: "Juego de 20 platos desechables de alta calidad, resistentes a líquidos calientes y fríos",
    colores: ["Blanco", "Negro", "Rojo", "Azul", "Verde"],
    material: "Cartón recubierto"
  },
  {
    id: 2,
    nombre: "Vasos de Plástico Transparente",
    categoria: "Vasos",
    precio: 18.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1575223970966-76ae61ee7834?w=400&h=300&fit=crop",
    descripcion: "Paquete de 25 vasos transparentes de 12oz, ideales para bebidas frías",
    colores: ["Transparente", "Azul", "Rojo", "Verde"],
    material: "Plástico PET"
  },
  {
    id: 3,
    nombre: "Manteles Decorativos",
    categoria: "Mantelería",
    precio: 35.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop",
    descripcion: "Manteles decorativos para mesas de fiesta, fáciles de limpiar y reutilizables",
    colores: ["Blanco", "Negro", "Rojo", "Dorado", "Plateado"],
    material: "Polipropileno"
  },
  {
    id: 4,
    nombre: "Servilletas Decoradas",
    categoria: "Servilletas",
    precio: 15.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1589984662646-e7f2dfb1aae7?w=400&h=300&fit=crop",
    descripcion: "Paquete de 50 servilletas decorativas con diseños elegantes para cualquier ocasión",
    colores: ["Blanco", "Rojo", "Azul", "Verde", "Rosa"],
    material: "Papel de alta calidad"
  },
  {
    id: 5,
    nombre: "Cubiertos Desechables de Lujo",
    categoria: "Cubiertos",
    precio: 40.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop",
    descripcion: "Juego de 50 cubiertos desechables con acabado metálico, elegante y práctico",
    colores: ["Plateado", "Dorado"],
    material: "Plástico rígido"
  },
  {
    id: 6,
    nombre: "Centros de Mesa Flotantes",
    categoria: "Decoración",
    precio: 45.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1519671482749-5fcaaff5a92d?w=400&h=300&fit=crop",
    descripcion: "Juego de 3 centros de mesa con flores flotantes para decoración elegante",
    colores: ["Blanco", "Transparente", "Azul"],
    material: "Vidrio y flores artificiales"
  },
  {
    id: 7,
    nombre: "Portavasos de Cartón",
    categoria: "Accesorios",
    precio: 12.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
    descripcion: "Juego de 25 portavasos de cartón con diseños festivos, ideales para proteger tus mesas",
    colores: ["Multicolor", "Blanco y Negro", "Colores Pastel"],
    material: "Cartón reciclado"
  },
  {
    id: 8,
    nombre: "Bandejas de Servicio",
    categoria: "Bandejas",
    precio: 30.00 * descuento,
    imagen: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    descripcion: "Bandejas rígidas ideales para servir alimentos en eventos, disponibles en varios tamaños",
    colores: ["Blanco", "Negro", "Plateado"],
    material: "Poliestireno"
  }
];

const categorias = ["Todos", "Platos", "Vasos", "Mantelería", "Servilletas", "Cubiertos", "Decoración", "Bandejas", "Accesorios"];

const VajillasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

  const accesoriosFiltrados = useMemo(() => {
    return accesoriosData.filter(accesorio => {
      const cumpleNombre = accesorio.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
      const cumpleCategoria = filtroCategoria === "Todos" || accesorio.categoria === filtroCategoria;
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
            Vajillas y Accesorios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para la mesa de tu evento. 
            Desde vajillas desechables hasta decoración de mesa, todo en un solo lugar.
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
                  placeholder="Buscar accesorios..."
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
            Mostrando {accesoriosFiltrados.length} de {accesoriosData.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {accesoriosFiltrados.map((accesorio) => (
            <Card key={accesorio.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={accesorio.imagen}
                  alt={accesorio.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{accesorio.nombre}</CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {accesorio.categoria}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2 h-12">
                  {accesorio.descripcion}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${accesorio.precio}</span>
                    
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">Colores disponibles:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {accesorio.colores.map((color, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Material: <span className="text-foreground">{accesorio.material}</span>
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

export default VajillasPage;
