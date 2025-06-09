# 🛒 Marketplace Frontend Público

Interfaz pública del marketplace multi-tenant TiendaVecina. Permite a los compradores navegar, buscar y adquirir productos de múltiples vendedores locales.

## 🎯 Funcionalidades

### ✅ Implementado
- ✅ **Interfaz Principal**: Landing page con productos destacados
- ✅ **Sistema de Búsqueda**: Barra de búsqueda avanzada con filtros
- ✅ **Navegación por Categorías**: Sidebar con taxonomía organizada
- ✅ **Grid de Productos**: Vista responsive con cards de productos
- ✅ **Filtros Avanzados**: Por precio, ubicación, calificación
- ✅ **UI Responsiva**: Optimizada para mobile, tablet y desktop
- ✅ **Estilos TiendaVecina**: Paleta de colores consistente

### 🚧 En Desarrollo (Roadmap)
- [ ] **Búsqueda Cross-Tenant**: Motor de búsqueda con ElasticSearch
- [ ] **Facetas Dinámicas**: Filtros basados en taxonomía marketplace
- [ ] **Vista Detalle Producto**: Página individual con galería e info
- [ ] **Carrito de Compras**: Gestión de productos multi-vendor
- [ ] **Sistema de Favoritos**: Wishlist persistente
- [ ] **Geolocalización**: Búsqueda por proximidad
- [ ] **Reviews y Ratings**: Sistema de calificaciones
- [ ] **Chat con Vendedores**: Comunicación directa

## 🛠️ Tecnologías

- **Framework**: Next.js 15 con App Router
- **UI**: ShadCN UI + Radix UI primitives
- **Estilos**: Tailwind CSS con variables marketplace
- **Iconos**: Lucide React
- **Animaciones**: CSS animations + Framer Motion
- **Puerto**: `3003` (diferente a admin 3002 y backoffice 3001)

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev
# Abre http://localhost:3003

# Build para producción
npm run build
npm run start
```

## 🎨 Estructura UI

```
src/
├── app/
│   ├── page.tsx              # Marketplace homepage
│   ├── search/               # Página de búsqueda avanzada
│   ├── product/[id]/         # Detalle de producto
│   ├── category/[slug]/      # Navegación por categoría
│   ├── seller/[id]/          # Perfil de vendedor
│   └── globals.css           # Estilos marketplace específicos
├── components/
│   ├── ui/                   # Componentes base ShadCN
│   ├── marketplace/          # Componentes específicos marketplace
│   └── search/               # Componentes de búsqueda
└── lib/
    ├── utils.ts              # Utilidades compartidas
    └── api.ts                # Cliente API marketplace
```

## 🎨 Design System Marketplace

### Paleta de Colores
- **Primario**: `#9333EA` (Púrpura TiendaVecina)
- **Secundario**: `#06B6D4` (Cyan)
- **Fondo**: `#FFFFFF` (Blanco para marketplace público)
- **Cards**: `#FAFAFA` (Gris muy claro)

### Componentes Específicos
- `.product-card` - Cards de productos con hover effects
- `.category-item` - Items de navegación por categorías
- `.marketplace-search` - Barra de búsqueda principal
- `.seller-badge` - Badge de identificación de vendedor
- `.price-tag` - Estilo para precios destacados

### Responsividad
- **Mobile**: Grid 2 columnas, navegación simplificada
- **Tablet**: Grid 3 columnas, filtros colapsables
- **Desktop**: Grid 4 columnas, sidebar completo

## 🔗 Integración con Servicios

El frontend se conectará con:

- **Kong Gateway**: API proxy y rate limiting
- **PIM Service**: Catálogo de productos y categorías
- **Stock Service**: Disponibilidad en tiempo real
- **ElasticSearch**: Búsquedas y facetas dinámicas
- **Chat Service**: Comunicación vendedor-comprador

## 📱 Experiencia Mobile-First

### Optimizaciones
- **Progressive Web App**: Installable como app nativa
- **Lazy Loading**: Carga diferida de imágenes
- **Infinite Scroll**: Carga continua de productos
- **Touch Gestures**: Navegación táctil optimizada
- **Offline Support**: Cache básico para navegación

## 🔍 SEO y Performance

### Optimizaciones Implementadas
- **Server-Side Rendering**: Next.js App Router
- **Meta Tags Dinámicos**: Por producto y categoría
- **Structured Data**: Schema.org para productos
- **Lighthouse Score Target**: >90 en todas las métricas

## 📊 Analytics y Tracking

### Métricas Clave
- **Conversion Rate**: Por categoría y vendedor
- **Search Success Rate**: Efectividad de búsquedas
- **Page Views**: Productos más visitados
- **User Journey**: Flujo de navegación optimizado

## 🛡️ Seguridad

- **Rate Limiting**: Protección contra spam
- **Input Sanitization**: Validación de búsquedas
- **HTTPS Only**: Conexiones seguras
- **CSP Headers**: Content Security Policy

## 📋 Próximos Pasos

1. **FASE 3**: Implementar motor de búsqueda con ElasticSearch
2. **FASE 4**: Crear sistema de carrito multi-vendor
3. **FASE 5**: Integrar chat en tiempo real
4. **FASE 6**: PWA y optimizaciones mobile

---

**Parte del ecosistema**: [saas-mt](../../README.md) | **Puerto**: 3003 | **Estado**: �� MVP Implementado
