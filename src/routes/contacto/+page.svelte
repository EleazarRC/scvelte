<!-- src/routes/contacto/+page.svelte -->
<script>
    // Puedes incluir scripts para validaciones de formulario o integraciones aquí.
  </script>
  
  <div class="min-h-screen bg-white flex items-center justify-center">
    <div class="w-full max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center text-primary">Contáctanos</h2>
      <form>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input type="email" id="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea id="message" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required></textarea>
        </div>
        <button type="submit" class="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">Enviar</button>
      </form>
    </div>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
    }
  </style>
  