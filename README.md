# IESTP Huanta - Sitio Web Dinámico

Sitio web dinámico del Instituto de Educación Superior Tecnológico Público Huanta, construido con HTML, CSS (Tailwind CSS v4) y JavaScript vanilla.

## Características

- **Diseño moderno y responsivo** - Adaptado a todos los dispositivos
- **Renderizado dinámico con JavaScript** - Todas las secciones se generan dinámicamente desde un archivo de datos centralizado
- **Animaciones suaves** - Efectos de scroll y transiciones fluidas
- **Accesibilidad** - HTML semántico y atributos ARIA
- **Optimizado para SEO** - Meta tags y estructura semántica

## Estructura del Proyecto

```
PaginaWeb/
├── index.html              # Página principal (renderizado 100% dinámico por JS)
├── css/
│   ├── tailwind.css        # Fuente de estilos Tailwind + personalizaciones
│   └── tailwind.generated.css  # CSS compilado
├── js/
│   ├── data.js             # Estado y datos centralizados (SITE_DATA)
│   ├── header.js           # Componente dinámico de encabezado y navegación responsiva
│   ├── footer.js           # Componente dinámico de pie de página institucional
│   ├── nosotros.js         # Módulo dinámico para la réplica de Nosotros
│   ├── plana-docente.js    # Módulo dinámico para la réplica de Plana Docente (búsqueda, filtros, vistas)
│   └── app.js              # Módulo dinámico para la página de inicio
├── pages/                  # Páginas internas (esqueletos semánticos dinamizados por JS)
│   ├── nosotros.html       # Presentación institucional completa
│   ├── plana-docente.html  # Plana docente por carrera con hojas de vida
│   ├── carreras.html
│   ├── admision.html
│   ├── servicios.html
│   ├── transparencia.html
│   ├── tramites.html
│   └── ...
├── assets/                 # Recursos estáticos (logos, fotos)
└── package.json
```

## Desarrollo

### Instalación

```bash
npm install
```

### Comandos disponibles

```bash
# Generar CSS de Tailwind
npm run build:css

# Modo watch (regenera CSS automáticamente)
npm run watch:css
```

## Arquitectura Dinámica

El sitio usa un enfoque basado en datos:

1. **`js/data.js`** - Contiene toda la información del sitio (carreras, servicios, eventos, etc.)
2. **`js/app.js`** - Renderiza dinámicamente todas las secciones del index.html
3. **`js/footer.js`** - Genera el footer en las páginas internas

### Agregar nueva información

Para agregar una nueva carrera, servicio o evento, simplemente edita el archivo `js/data.js`:

```javascript
carreras: [
  {
    id: "nueva-carrera",
    nombre: "Nombre de la Carrera",
    descripcion: "Descripción...",
    icono: "🎯",
    imagen: "url-de-imagen",
    duracion: "3 años",
    modalidad: "Presencial",
    titulo: "Profesional Técnico en..."
  }
]
```

El sitio automáticamente renderizará la nueva información en todas las secciones relevantes.

## Páginas Internas

Las páginas internas usan un header y footer consistentes. El footer se genera dinámicamente con `js/footer.js`.

## Despliegue

El sitio es 100% estático, puede desplegarse en:
- Netlify
- Vercel
- GitHub Pages
- Cualquier servidor web estático

## Licencia

ISC
