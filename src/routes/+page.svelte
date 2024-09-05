<!-- src/routes/+page.svelte -->
<!-- Hero Section -->
<section id="inicio" class="min-h-screen bg-gray-100 flex items-center justify-center text-center px-6">
    <div>
      <h1 class="text-5xl font-bold text-blue-600 mb-4">¡Haz crecer tu negocio con una web ultra rápida!</h1>
      <p class="text-lg text-gray-700 mb-6">Optimiza tu sitio web con Turbify y mejora tu conversión con la máxima velocidad y rendimiento.</p>
      <a href="/contacto" class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700">Obtén una consulta gratuita</a>
    </div>
  </section>
  
  <!-- Sección de Servicios -->
  <section id="servicios" class="py-16 bg-white text-center px-6">
    <h2 class="text-3xl font-bold mb-8 text-primary">Nuestros Servicios</h2>
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-6 bg-gray-100 rounded-md shadow-md">
        <h3 class="text-2xl font-bold mb-4">Optimización de Velocidad</h3>
        <p>Reducimos los tiempos de carga de tu web para mejorar la experiencia del usuario y aumentar tu tasa de conversión.</p>
      </div>
      <div class="p-6 bg-gray-100 rounded-md shadow-md">
        <h3 class="text-2xl font-bold mb-4">Diseño Web Moderno</h3>
        <p>Diseños atractivos y funcionales que se adaptan a cualquier dispositivo, garantizando una experiencia óptima.</p>
      </div>
      <div class="p-6 bg-gray-100 rounded-md shadow-md">
        <h3 class="text-2xl font-bold mb-4">SEO Técnico</h3>
        <p>Mejoramos la visibilidad de tu sitio en los motores de búsqueda, asegurando que tus clientes te encuentren fácilmente.</p>
      </div>
    </div>
  </section>
  
  <!-- Sección de Sobre Nosotros -->
  <section id="sobre-nosotros" class="py-16 bg-gray-100 text-center px-6">
    <h2 class="text-3xl font-bold mb-8 text-primary">Sobre Nosotros</h2>
    <div class="max-w-3xl mx-auto">
      <p class="text-lg mb-6">
        En Turbify, estamos dedicados a ayudar a las empresas a alcanzar su máximo potencial en línea. Con años de experiencia en desarrollo web y optimización de rendimiento, sabemos lo que se necesita para que tu negocio sobresalga.
      </p>
      <p class="text-lg">
        Nuestro enfoque está en la calidad, la velocidad, y la conversión, trabajando mano a mano contigo para asegurar que tu sitio web no solo sea atractivo sino también efectivo.
      </p>
    </div>
  </section>
  
  <!-- Sección de Testimonios -->
  <section id="testimonios" class="py-16 bg-white text-center px-6">
    <h2 class="text-3xl font-bold mb-8 text-primary">Lo que dicen nuestros clientes</h2>
    <div class="max-w-4xl mx-auto">
      <blockquote class="mb-8">
        <p class="text-xl italic">"Desde que optimizamos nuestra web con Turbify, nuestras ventas han aumentado un 30% en solo un mes."</p>
        <footer class="text-sm mt-4">— Juan Pérez, CEO de Empresa X</footer>
      </blockquote>
    </div>
  </section>
  
  <!-- Sección de Contacto -->
  <section id="contacto" class="py-16 bg-gray-100 text-center px-6">
    <h2 class="text-3xl font-bold mb-8 text-primary">Contáctanos</h2>
    <form action="/enviar" method="post" class="max-w-xl mx-auto space-y-4">
      <input type="text" name="nombre" placeholder="Tu nombre" class="w-full px-4 py-2 border rounded-md" required>
      <input type="email" name="email" placeholder="Tu correo electrónico" class="w-full px-4 py-2 border rounded-md" required>
      <textarea name="mensaje" placeholder="Tu mensaje" class="w-full px-4 py-2 border rounded-md" rows="5" required></textarea>
      <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700">Enviar Mensaje</button>
    </form>
  </section>
  
  <!-- Pie de Página -->
  <footer class="bg-gray-800 text-white py-6 text-center">
    <p>&copy; 2024 Turbify. Todos los derechos reservados.</p>
    <nav class="flex justify-center space-x-4 mt-4">
      <a href="#inicio" class="hover:underline">Inicio</a>
      <a href="#servicios" class="hover:underline">Servicios</a>
      <a href="#sobre-nosotros" class="hover:underline">Sobre Nosotros</a>
      <a href="#testimonios" class="hover:underline">Testimonios</a>
      <a href="#contacto" class="hover:underline">Contacto</a>
    </nav>
  </footer>
  