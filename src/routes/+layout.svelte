<!-- src/routes/+layout.svelte -->
<script>
  import "../app.css"; // Importa estilos globales
  let isOpen = false; // Estado para el menú móvil
</script>

<header class="fixed w-full bg-white shadow-md z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="text-2xl font-bold text-primary">Turbify</a>
      </div>

      <!-- Menú de navegación para pantallas grandes -->
      <nav class="hidden md:flex space-x-8">
        <a href="/" class="text-gray-700 hover:text-primary">Inicio</a>
        <a href="/contacto" class="text-gray-700 hover:text-primary">Contacto</a>
      </nav>

      <!-- Botón del menú móvil -->
      <div class="md:hidden">
        <button on:click={() => (isOpen = !isOpen)} class="text-gray-500 hover:text-primary focus:outline-none">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Menú de navegación para pantallas móviles -->
  <div class="{isOpen ? 'block' : 'hidden'} md:hidden">
    <nav class="px-2 pt-2 pb-3 space-y-1">
      <a href="/" class="block text-gray-700 hover:text-primary">Inicio</a>
      <a href="/contacto" class="block text-gray-700 hover:text-primary">Contacto</a>
    </nav>
  </div>
</header>

<!-- Contenedor principal que incluye el slot para renderizar el contenido de las páginas internas -->
<main class="pt-16">
  <slot />
</main>

<style>
  :global(body) {
    margin: 0;
  }
</style>
