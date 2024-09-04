<!-- src/routes/+layout.svelte -->
<script>
  import "../app.css"; // Importa estilos globales
</script>

<nav class="bg-blue-600 p-4 text-white">
  <ul class="flex space-x-4">
    <li><a href="/" class="hover:underline">Inicio</a></li>
    <li><a href="/about" class="hover:underline">Acerca de</a></li>
  </ul>
</nav>

<!-- Slot donde se cargarán las páginas -->
<slot />