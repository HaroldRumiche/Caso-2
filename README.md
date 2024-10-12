# Cloudflex - Web Hosting Service

## Descripción
Cloudflex es una plataforma de **hosting web** diseñada para ofrecer servicios escalables y de alto rendimiento. Este proyecto proporciona características como gestión de servicios, contenido dinámico y navegación interactiva mediante menús desplegables y efectos visuales.

## Tecnologías Utilizadas
- **HTML5**: Estructura del contenido.
- **CSS3**: Estilo visual y diseño responsivo.
- **JavaScript**: Interactividad y manipulación del DOM.
- **Firebase**: Configuración de backend para almacenamiento y autenticación.
- **GitHub Pages**: Hosting opcional del proyecto.

## Estructura del Proyecto
- **index.html**: Página principal con enlaces a diferentes secciones como *Servicios*, *FAQ* y *Contacto*.
- **style.css**: Contiene los estilos y el diseño responsivo de la página.
- **JavaScript Modules**:
  - `commensts-people.js`: Gestiona los comentarios y feedback de los usuarios en un mapa interactivo.
  - `loadContent.js`: Carga contenido dinámico en secciones específicas.
  - `menu-desplegable.js`: Controla el menú desplegable y el overlay.
  - `remove-img.js`: Cambia las imágenes al pasar el cursor.
  - `top.js`: Implementa el botón de "volver arriba" y animaciones de navegación.

## Funcionalidades Clave
- **Hosting escalable**: Servicios de almacenamiento que crecen con las necesidades del usuario.
- **Soporte para PaaS**: Desarrollo y despliegue simplificado de aplicaciones.
- **Tráfico ilimitado**: Maneja un gran volumen de visitantes sin afectar el rendimiento.
- **Menú interactivo**: Menú desplegable con un overlay que mejora la navegación.
- **Scroll Suave**: Animaciones fluidas al navegar por diferentes secciones.

## Firebase Configuration
El proyecto está configurado para utilizar Firebase. Aquí tienes la configuración básica:

```javascript
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvV0Uz...",
  authDomain: "caso-2-96de5.firebaseapp.com",
  projectId: "caso-2-96de5",
  storageBucket: "caso-2-96de5.appspot.com",
  messagingSenderId: "209880451899",
  appId: "1:209880451899:web:4a3ae1580026cdb11c851e"
};
firebase.initializeApp(firebaseConfig);
