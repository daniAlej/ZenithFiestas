import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import HeaderProduct from '@/components/HeaderProduct';
import Footer from '@/components/Footer';
// imports de imágenes (Vite las convierte a URL final)
import NumRojo     from '@/assets/NumerosMetalicosRojo.jpg';
import GlobosMetal from '@/assets/GlobosMetalicos.jpg';
import NumRosa     from '@/assets/NumerosMetalicosRosa.jpg';


interface ColorVariant {
  nombre: string;
  imagen: string;        // imagen para esa variante
}

interface Globo {
  id: number;
  nombre: string;
  tematica: string;
  precio: number;
  imagen: string;        // imagen por defecto (fallback)
  descripcion: string;
  colores: ColorVariant[];
  colorSeleccionado?: number; // índice del color elegido
}

const descuento = 1;

// Datos base (se copian a estado al montar)
const INITIAL_GLOBOS: Globo[] = [
  {
    id: 1,
    nombre: "Globos Látex Básicos",
    tematica: "Básico",
    precio: 2.50 * descuento,
    imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    descripcion: "Globos de látex en colores variados, perfectos para cualquier ocasión",
    colores: [
      { nombre: "Rojo",     imagen: "/images/globos/rojo.jpg" },
      { nombre: "Azul",     imagen: "/images/globos/azul.jpg" },
      { nombre: "Verde",    imagen: "/images/globos/verde.jpg" },
      { nombre: "Amarillo", imagen: "/images/globos/amarillo.jpg" },
      { nombre: "Rosa",     imagen: "/images/globos/rosa.jpg" }
    ],
    colorSeleccionado: 0
  },
  {
    id: 2,
    nombre: "Globos Metálicos Corazón",
    tematica: "Romance",
    precio: 8.00 * descuento,
    imagen: "/images/globos/corazon-rojo.jpg",
    descripcion: "Globos metálicos en forma de corazón, ideales para San Valentín y aniversarios",
    colores: [
      { nombre: "Rojo",    imagen: "/images/globos/corazon-rojo.jpg" },
      { nombre: "Rosa",    imagen: "/images/globos/corazon-rosa.jpg" },
      { nombre: "Dorado",  imagen: "/images/globos/corazon-dorado.jpg" }
    ],
    colorSeleccionado: 0
  },
  {
    id: 3,
    nombre: "Globos Números Gigantes",
    tematica: "Cumpleaños",
    precio: 15.00 * descuento,
    imagen: "/images/globos/numero-dorado.jpg",
    descripcion: "Globos metálicos con números del 0 al 9, perfectos para cumpleaños",
    colores: [
      { nombre: "Rojo",     imagen: NumRojo },
      { nombre: "Plateado", imagen: GlobosMetal },
      { nombre: "Rosa",     imagen: NumRosa },
    ],
    colorSeleccionado: 0
  },
  // ... agrega más globos si hace falta
];

const tematicas = ["Todos", "Básico", "Romance", "Cumpleaños", "Infantil", "Elegante", "Graduación", "Baby Shower"];

const Globos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Estado: globos (para poder cambiar colorSeleccionado)
  const [globos, setGlobos] = useState<Globo[]>(INITIAL_GLOBOS);

  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroTematica, setFiltroTematica] = useState("Todos");

  const globosFiltrados = useMemo(() => {
    return globos.filter(globo => {
      const cumpleNombre = globo.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
      const cumpleTematica = filtroTematica === "Todos" || globo.tematica === filtroTematica;
      return cumpleNombre && cumpleTematica;
    });
  }, [globos, filtroNombre, filtroTematica]);

  // Cambiar el color seleccionado de un globo
  const handleColorSelect = (globoId: number, colorIndex: number) => {
    setGlobos(prev =>
      prev.map(g =>
        g.id === globoId ? { ...g, colorSeleccionado: colorIndex } : g
      )
    );
  };

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

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Catálogo de Globos</h1>
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
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
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
            Mostrando {globosFiltrados.length} de {globos.length} productos
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {globosFiltrados.map((globo) => {
            const idx = globo.colorSeleccionado ?? 0;
            const imagenActual = globo.colores[idx]?.imagen || globo.imagen;

            return (
              <Card key={globo.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={imagenActual}
                    alt={`${globo.nombre} - ${globo.colores[idx]?.nombre ?? 'Imagen'}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{globo.nombre}</CardTitle>
                    <Badge variant="secondary" className="ml-2">{globo.tematica}</Badge>
                  </div>
                  <CardDescription className="text-sm">{globo.descripcion}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Selector de colores (con miniaturas) */}
                  <div className="mb-3">
                    <p className="text-sm font-medium mb-2">Colores disponibles:</p>
                    <div className="flex flex-wrap gap-2">
                      {globo.colores.map((color, index) => (
                        <button
                          key={`${globo.id}-${color.nombre}`}
                          onClick={() => handleColorSelect(globo.id, index)}
                          className={`relative w-8 h-8 rounded-full border-2 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/40
                            ${globo.colorSeleccionado === index ? 'border-primary' : 'border-muted'}`}
                          title={color.nombre}
                          aria-label={`Seleccionar color ${color.nombre}`}
                        >
                          <img
                            src={color.imagen}
                            alt={color.nombre}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-primary">${globo.precio.toFixed(2)}</span>
                    
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sin resultados */}
        {globosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4">
              <Search size={48} className="mx-auto text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
            <p className="text-muted-foreground mb-4">Intenta ajustar los filtros para encontrar lo que buscas</p>
            <Button
              onClick={() => { setFiltroNombre(""); setFiltroTematica("Todos"); }}
              variant="outline"
            >
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contáctanos y te ayudaremos a encontrar los globos perfectos para tu evento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
