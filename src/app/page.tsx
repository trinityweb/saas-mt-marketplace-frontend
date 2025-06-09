import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  ShoppingCart, 
  Heart,
  Grid3X3,
  List,
  ChevronDown,
  Store
} from "lucide-react"

export default function MarketplacePage() {
  // Mock data para demostración
  const categories = [
    { name: "Moda", count: 245, icon: "👗" },
    { name: "Electrónicos", count: 189, icon: "📱" },
    { name: "Hogar", count: 156, icon: "🏠" },
    { name: "Deportes", count: 98, icon: "⚽" },
    { name: "Libros", count: 67, icon: "📚" },
    { name: "Belleza", count: 134, icon: "💄" },
  ]

  const products = [
    {
      id: 1,
      name: "Remera Básica Algodón",
      price: 2500,
      seller: "TiendaMari",
      location: "Bahía Blanca",
      rating: 4.8,
      reviews: 23,
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 2,
      name: "Smartphone Galaxy A54",
      price: 85000,
      seller: "TechStore",
      location: "Río Cuarto",
      rating: 4.6,
      reviews: 45,
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 3,
      name: "Zapatillas Running Nike",
      price: 45000,
      seller: "DeportesMax",
      location: "Tandil",
      rating: 4.9,
      reviews: 67,
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 4,
      name: "Lámpara LED Escritorio",
      price: 8500,
      seller: "CasaBella",
      location: "Mar del Plata",
      rating: 4.7,
      reviews: 12,
      image: "/api/placeholder/300/300",
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="marketplace-header sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">TiendaVecina</h1>
                <p className="text-sm text-muted-foreground">Marketplace</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <MapPin className="w-3 h-3" />
                Argentina
              </Badge>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Favoritos
              </Button>
              <Button size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Carrito
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="marketplace-nav">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Buscar productos, vendedores o categorías..." 
                  className="pl-10 h-12 marketplace-search text-base"
                />
              </div>
              <Button size="lg" className="px-8">
                Buscar
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filtros
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <div className="text-sm text-muted-foreground">
                  2,453 productos encontrados
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="font-semibold mb-4">Categorías</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="category-item">
                    <span className="text-lg">{category.icon}</span>
                    <div className="flex-1">
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Filters */}
            <Card className="p-6 mt-6">
              <h3 className="font-semibold mb-4">Filtros</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Precio</label>
                  <div className="flex gap-2">
                    <Input placeholder="Mín" className="text-sm" />
                    <Input placeholder="Máx" className="text-sm" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Ubicación</label>
                  <Input placeholder="Ciudad o provincia" className="text-sm" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Calificación</label>
                  <div className="space-y-2">
                    {[5, 4, 3].map((stars) => (
                      <div key={stars} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-accent rounded p-1">
                        <div className="flex">
                          {Array.from({ length: stars }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          {Array.from({ length: 5 - stars }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-gray-300" />
                          ))}
                        </div>
                        <span>y más</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Featured Products */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Productos Destacados</h2>
              <div className="product-grid grid">
                {products.filter(p => p.featured).map((product) => (
                  <Card key={product.id} className="product-card group cursor-pointer">
                    <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <span className="text-4xl">📦</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 text-xs">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="price-tag">
                          ${product.price.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Store className="w-3 h-3" />
                          <span>{product.seller}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{product.location}</span>
                        </div>
                      </div>
                      
                      <Button size="sm" className="w-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Products */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Todos los Productos</h2>
              <div className="product-grid grid">
                {products.map((product) => (
                  <Card key={product.id} className="product-card group cursor-pointer">
                    <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                        <span className="text-4xl">📦</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 text-xs">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="price-tag">
                          ${product.price.toLocaleString()}
                        </div>
                        <div className="seller-badge">
                          {product.seller}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{product.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="p-2">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="flex-1">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Cargar más productos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">TiendaVecina</h3>
              <p className="text-sm text-muted-foreground">
                El marketplace que conecta vendedores locales con compradores de toda Argentina.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Compradores</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Cómo comprar</p>
                <p>Métodos de pago</p>
                <p>Envíos</p>
                <p>Devoluciones</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Vendedores</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Vender en TiendaVecina</p>
                <p>Comisiones</p>
                <p>Herramientas</p>
                <p>Soporte</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Ayuda</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Centro de ayuda</p>
                <p>Contacto</p>
                <p>Términos</p>
                <p>Privacidad</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
