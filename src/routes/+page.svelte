<!-- src/routes/+page.svelte -->
<section
  id="inicio"
  class="min-h-screen bg-gray-100 flex items-center justify-center text-center px-6 relative"
  aria-labelledby="hero-title"
>
  <!-- Fondo con desenfoque -->
  <div id="image-cover" class="absolute inset-0 bg-cover bg-center" style="background-image: url('/diseno-web-clinica-estetica-movil.webp'); filter: blur(4px);" aria-hidden="true"></div>

  <!-- Overlay oscuro para mejorar el contraste del texto -->
  <div class="absolute inset-0 bg-black opacity-70 md:opacity-50" aria-hidden="true"></div>

  <!-- Contenido de la sección -->
  <div class="relative z-10 max-w-2xl mx-auto px-4 md:px-0">
    <!-- Título Principal -->
    <h1 style="font-family: 'Poppins', sans-serif;" id="hero-title" class="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-7 drop-shadow-md tracking-wide">
      ¡Transforma tu Clínica de Estética con una 
      <span class="text-yellow-300">Web que Atraiga Clientes</span>!
    </h1>
    
    <!-- Párrafo de Introducción -->
    <p class="text-sm md:text-xl text-white mb-5 md:mb-7 drop-shadow-md leading-relaxed md:leading-normal">
      <span class="underline decoration-4 decoration-yellow-300">Aumenta tus reservas online hasta un 40%</span> con un sitio web diseñado para atraer y convertir más clientes.
    </p>

    <!-- Botón de CTA ajustado para móvil -->
    <a
      href="#contacto"
      class="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out mb-6 hover:bg-blue-600"
      aria-label="Reserva tu Consulta Gratuita Ahora"
    >
      <span class="mr-2">Reserva tu Consulta Gratuita Ahora</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 md:h-5 md:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>

    <!-- Insignia de Reembolso -->
    <div class="mt-4 md:mt-6 mb-5 md:mb-7">
      <span
        class="inline-flex items-center bg-green-200 text-green-800 font-bold py-1 px-4 rounded-full border-2 border-dashed border-green-500 text-xs md:text-sm shadow-sm"
        style="user-select: none; pointer-events: none;"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Reembolso Garantizado de 45 Días
      </span>
    </div>

    <!-- Testimonio -->
    <div class="flex flex-col items-center justify-center mt-6">
      <!-- 5 Estrellas de calificación -->
      <div class="flex items-center mb-2">
        <span class="text-yellow-300 text-lg">⭐⭐⭐⭐⭐</span>
      </div>
      <p class="text-white text-sm md:text-base italic drop-shadow-md mb-1">"La mejor inversión para aumentar nuestras reservas online."</p>
      <p class="text-white text-xs md:text-sm">— María López, Directora de Clínica Belle</p>
    </div>
  </div>
</section>

<!-- Sección de Servicios -->
<section id="servicios" class="py-20 bg-white text-center px-6 relative">
	<!-- Fondo con patrón o color sutil -->
	<div id="background-pattern" class="absolute inset-0 bg-fixed bg-cover bg-no-repeat bg-opacity-5" style="background-image: url('/images/pattern-bg.webp');" aria-hidden="true"></div>
  
	<!-- Título de la sección -->
	<div class="relative z-10">
	  <h2 class="text-3xl md:text-5xl font-bold mb-12 text-primary" style="font-family: 'Poppins', sans-serif;">
		Nuestros Servicios Especializados
	  </h2>
	</div>
  
	<!-- Contenedor de servicios -->
	<div class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
	  <!-- Servicio 1 -->
	  <div class="p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
		<div class="flex justify-center mb-4">
<svg width="125" height="125" id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path clip-rule="evenodd" d="m95.703 289.535h90.909c36.594 27.827 73.159 55.682 109.753 83.509 14.758 11.233 18.786 31.259 10.414 47.031l108.717-51.966c18.786-8.964 41.628-1.163 50.719 17.36 9.12 18.523 1.179 41.074-17.607 50.038-194.448 92.955-156.876 96.473-352.906-4.34v-141.632z" fill="#ffcebf" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m20.074 263.182h80.629v197.935h-80.629z" fill="#435469" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m121.652 263.182h46.103v-58.115h36.794l-59.86-80.425-59.831 80.425h36.794z" fill="#00c963" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m256.436 263.182h46.074v-118.703h36.823l-59.86-80.424-59.831 80.424h36.794z" fill="#00c963" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m391.22 263.182h46.074v-182.257h36.823l-59.86-80.425-59.861 80.425h36.824z" fill="#00c963" fill-rule="evenodd"/></g><g><path d="m414.257 175.69c21.99 0 41.914 8.929 56.341 23.357 14.398 14.398 23.328 34.322 23.328 56.312 0 22.019-8.93 41.943-23.328 56.341-14.427 14.427-34.352 23.328-56.341 23.328s-41.914-8.901-56.341-23.328c-14.398-14.427-23.328-34.322-23.328-56.341 0-21.99 8.901-41.914 23.328-56.312 14.427-14.428 34.351-23.357 56.341-23.357z" fill="#fea832"/></g><path d="m411.51 360.707-92.771 44.986c1.412-14.788-4.683-29.748-17.067-39.308l-46.998-36.266c-20.309-15.669-40.622-31.342-60.935-47.024-1.223-.944-2.725-1.457-4.271-1.457h-82.386v-18.645c0-3.86-3.129-6.988-6.988-6.988h-78.454c-3.859 0-6.988 3.129-6.988 6.988v192.528c0 3.86 3.129 6.988 6.988 6.988h78.454c3.859 0 6.988-3.129 6.988-6.988v-14.092c10.825 5.675 20.943 11.022 30.121 15.872 69.08 36.506 103.174 54.199 137.235 54.199 31.966 0 63.904-15.586 124.698-45.834 14.958-7.443 31.911-15.878 51.06-25.16 10.619-5.139 18.612-14.147 22.506-25.366 3.895-11.221 3.204-23.252-1.948-33.883-10.664-21.963-37.236-31.184-59.244-20.55zm-318.404 87.825h-64.478v-178.551h64.478zm366.393-37.974c-2.67 7.689-8.136 13.857-15.395 17.37-19.218 9.316-36.206 17.769-51.193 25.226-60.645 30.172-91.06 45.346-121.268 44.339-30.332-.983-62.942-18.216-127.909-52.548-10.996-5.811-23.345-12.336-36.651-19.29v-130.04h80.003c19.686 15.196 39.371 30.385 59.051 45.57l46.996 36.264c10.578 8.166 14.456 22.086 10.014 34.355l-.366.93c-.248.63-.519 1.251-.81 1.862-.033.07-.069.139-.103.208-.893 1.843-1.973 3.6-3.232 5.235-10.246 13.248-29.356 15.703-42.601 5.476l-75.98-58.617-8.537 11.066 75.977 58.616c8.047 6.214 17.573 9.221 27.036 9.22 13.278-.001 26.43-5.924 35.169-17.221 1.085-1.409 2.061-2.888 2.964-4.406l104.934-50.884c15.073-7.284 33.277-.971 40.579 14.07 3.524 7.265 3.993 15.504 1.322 23.199zm-372.901-197.104h28.83v49.538c0 3.86 3.129 6.988 6.988 6.988h44.815c3.859 0 6.988-3.129 6.988-6.988v-49.538h28.83c2.642 0 5.059-1.49 6.245-3.852 1.186-2.361.939-5.189-.639-7.309l-58.225-78.227c-1.319-1.771-3.397-2.816-5.606-2.816s-4.287 1.045-5.606 2.816l-58.225 78.227c-1.578 2.12-1.825 4.948-.639 7.309 1.186 2.362 3.602 3.852 6.244 3.852zm58.226-73.511 44.312 59.535h-21.905c-3.859 0-6.988 3.129-6.988 6.988v49.538h-30.839v-49.538c0-3.86-3.129-6.988-6.988-6.988h-21.905zm75.794 14.579h28.83v108.471c0 3.86 3.129 6.988 6.988 6.988h44.815c3.859 0 6.988-3.129 6.988-6.988v-108.471h28.801c2.642 0 5.059-1.49 6.244-3.851 1.186-2.361.94-5.189-.637-7.308l-58.197-78.228c-1.319-1.773-3.397-2.817-5.606-2.818 0 0 0 0-.001 0-2.209 0-4.287 1.045-5.606 2.816l-58.225 78.227c-1.578 2.12-1.825 4.948-.639 7.309 1.186 2.363 3.602 3.853 6.245 3.853zm58.223-73.51 44.289 59.533h-21.88c-3.859 0-6.988 3.129-6.988 6.989v108.471h-30.839v-108.472c0-3.86-3.129-6.989-6.988-6.989h-21.905zm69.552 7.841c-1.186-2.361-.94-5.189.637-7.308l58.197-78.227c1.318-1.773 3.397-2.817 5.605-2.818 2.209 0 4.288 1.044 5.606 2.816l58.225 78.227c1.578 2.12 1.826 4.948.639 7.309-1.186 2.362-3.602 3.852-6.245 3.852h-28.801v71.974h-13.977v-78.962c0-3.86 3.129-6.989 6.988-6.989h21.877l-44.311-59.533-44.289 59.533h21.881c3.86 0 6.988 3.129 6.988 6.989v79.019h-13.977v-72.03h-28.801c-2.64-.001-5.056-1.491-6.242-3.852zm146.045 144.685c-5.835-21.797-19.811-40.011-39.35-51.288-40.349-23.284-92.112-9.422-115.387 30.907-23.285 40.351-9.42 92.113 30.908 115.387 13.275 7.66 27.782 11.3 42.105 11.3 29.216 0 57.663-15.147 73.281-42.208 11.278-19.543 14.277-42.307 8.443-64.098zm-20.549 57.112c-19.423 33.655-62.621 45.224-96.294 25.789-33.654-19.422-45.223-62.62-25.789-96.295 19.423-33.654 62.621-45.224 96.295-25.788 16.306 9.41 27.967 24.608 32.836 42.797 4.869 18.186 2.367 37.185-7.048 53.497zm-34.941-54.195v6.989h-13.977v-6.989c0-3.245-2.639-5.884-5.884-5.884h-9.45c-4.914 0-8.912 3.997-8.912 8.912 0 5.065 1.129 8.94 15.334 8.94 12.62 0 22.889 10.268 22.889 22.889 0 11.352-8.29 20.799-19.125 22.602v15.338h-13.977v-15.06c-10.594-.392-19.097-9.121-19.097-19.824v-6.989h13.977v6.989c0 3.245 2.627 5.884 5.856 5.884h9.478c4.914 0 8.912-4.01 8.912-8.94 0-4.914-3.997-8.912-8.912-8.912-5.136 0-12.662-.379-18.703-3.652-4.838-2.623-10.608-8.094-10.608-19.265 0-11.328 8.275-20.756 19.097-22.569v-15.371h13.977v15.088c10.609.392 19.125 9.121 19.125 19.824z"/></svg>
		  </div>
		<h3 class="text-2xl font-bold mb-4 text-blue-600" style="font-family: 'Poppins', sans-serif;">Diseño Web que Convierta</h3>
		<p class="text-gray-700 mb-6 leading-relaxed">
		  Creamos páginas web personalizadas que destacan tus servicios más rentables, capturando la atención de tus clientes ideales desde el primer vistazo.
		</p>
		<a href="#contacto" class="text-blue-600 font-semibold hover:text-blue-800 transition duration-200">
		  Aprende Más →
		</a>
	  </div>
	  
	  <!-- Servicio 2 -->
	  <div class="p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
		<div class="flex justify-center mb-4">
			<svg id="Capa_1" enable-background="new 0 0 512 512" height="125" viewBox="0 0 512 512" width="125" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m67.233 348.733c-.001-.131-.01-.26-.01-.391 0-49.327 39.988-89.315 89.315-89.315 11.134 0 21.784 2.054 31.613 5.776 8.269-47.758 49.878-84.089 99.999-84.089 53.993 0 98.123 42.156 101.317 95.347 3.335-.321 6.715-.491 10.134-.491 57.658-.001 104.399 46.74 104.399 104.398s-46.741 104.398-104.398 104.398c-56.482 0-292.855 0-323.487 0-37.619 0-68.115-30.496-68.115-68.114 0-34.606 25.814-63.164 59.233-67.519z" fill="#a2dafd"/><path d="m399.602 466.366c-56.482 0-292.855 0-323.487 0-34.579 0-63.12-25.774-67.509-59.155-.394 2.959-.606 5.974-.606 9.041 0 37.618 30.496 68.114 68.114 68.114h323.487c57.658 0 104.398-46.741 104.398-104.398 0-3.033-.137-6.033-.39-9-4.564 53.443-49.382 95.398-104.007 95.398z" fill="#83c8ea"/><path d="m389.467 276.048c0 .004.001.008.001.012 3.335-.321 6.714-.491 10.134-.491 15.09 0 29.429 3.207 42.381 8.967v-121.573h20.319l-46.577-49.517-46.577 49.517h20.319z" fill="#b3e59f"/><path d="m282.138 180.91c1.992-.117 3.993-.197 6.014-.197 16.762 0 32.571 4.065 46.502 11.26v-103.035h20.319l-46.577-49.517-46.577 49.517h20.319z" fill="#ffe07d"/><path d="m174.808 260.931c4.583.957 9.046 2.244 13.344 3.872 4.503-26.006 18.906-48.606 39.172-63.814v-59.2h20.319l-46.577-49.517-46.577 49.517h20.319z" fill="#e7a561"/><path d="m67.479 341.551c2.509-33.38 23.367-61.641 52.516-74.728v-189.672h20.319l-46.577-49.517-46.577 49.517h20.319z" fill="#de5974"/><path d="m119.995 266.824v-19.44c-14.619 5.281-28.021 13.757-39.339 25.075-4.951 4.951-9.342 10.31-13.176 15.986v53.107c2.508-33.381 23.366-61.641 52.515-74.728z" fill="#c7495d"/><path d="m174.808 242.595v18.336c4.583.957 9.046 2.244 13.344 3.872 4.503-26.006 18.906-48.606 39.172-63.814v-21.626c-5.804 3.432-11.339 7.362-16.528 11.774-16.244 13.813-28.441 31.678-35.42 51.547-.188-.034-.379-.056-.568-.089z" fill="#e49542"/><path d="m334.654 191.973v-19.829c-14.326-6.073-30.048-9.431-46.502-9.431-2.01 0-4.014.057-6.014.158v18.039c1.992-.117 3.993-.197 6.014-.197 16.761.001 32.571 4.066 46.502 11.26z" fill="#ffd064"/><path d="m404.322 254.113c-3.058-12.666-8.135-24.525-14.855-35.237v57.171c.005.004.007.007.012.011 3.331-.32 6.707-.49 10.123-.49 15.09 0 29.429 3.207 42.381 8.967v-19.458c-10.582-3.897-21.73-6.326-33.194-7.172-2.156-.157-3.96-1.691-4.467-3.792z" fill="#95d6a4"/></g><g><path d="m449.862 279.859v-23.706c0-4.151-3.365-7.515-7.515-7.515s-7.515 3.364-7.515 7.515v17.514c-11.004-3.619-22.751-5.585-34.95-5.585-.875 0-1.757.019-2.639.04v-105.351c0-4.151-3.365-7.515-7.515-7.515h-2.974l29.283-31.132 29.283 31.132h-2.974c-4.15 0-7.515 3.364-7.515 7.515v64.055c0 4.151 3.364 7.515 7.515 7.515s7.515-3.364 7.515-7.515v-56.54h12.844c6.387.212 10.003-8.157 5.474-12.663l-46.668-49.614c-2.819-3.127-8.129-3.127-10.947 0l-46.668 49.614c-4.53 4.507-.912 12.875 5.474 12.663h12.844v56.379c-9.677-16.305-23.467-29.851-39.892-39.249v-91.3h12.844c6.387.212 10.003-8.158 5.474-12.663l-46.668-49.613c-2.819-3.127-8.129-3.127-10.947 0l-46.668 49.613c-4.531 4.506-.912 12.876 5.474 12.663h12.844v77.762c-14.297 1.762-27.788 6.287-39.891 13.061v-37.869h12.844c6.387.212 10.003-8.158 5.474-12.664l-46.668-49.613c-2.819-3.127-8.129-3.127-10.947 0l-46.668 49.613c-4.53 4.507-.912 12.875 5.474 12.664h12.844v103.046c-3.569-.397-7.168-.607-10.791-.607-10.135 0-19.91 1.569-29.101 4.465v-171.668h12.844c6.387.212 10.003-8.157 5.474-12.663l-46.67-49.615c-2.818-3.127-8.129-3.127-10.947 0l-46.669 49.614c-4.531 4.507-.912 12.875 5.474 12.663h12.844v61.639c0 4.151 3.365 7.515 7.515 7.515s7.515-3.364 7.515-7.515v-69.153c0-4.151-3.364-7.515-7.515-7.515h-2.974l29.283-31.132 29.283 31.132h-2.974c-4.15 0-7.515 3.364-7.515 7.515v185.354c-15.344 7.872-28.327 19.714-37.59 34.162v-120.303c0-4.151-3.364-7.515-7.515-7.515-4.15 0-7.515 3.364-7.515 7.515v165.533c-.024.341-.054.682-.075 1.024-34.35 7.511-59.518 38.25-59.518 73.994 0 41.775 33.987 75.762 75.762 75.762h231.09c4.15 0 7.515-3.364 7.515-7.515s-3.364-7.515-7.515-7.515h-231.09c-33.488 0-60.733-27.245-60.733-60.733 0-30.396 22.702-56.277 52.806-60.2 3.754-.489 6.558-3.695 6.544-7.48-.001-.135-.004-.269-.01-.431.036-45.171 36.796-81.907 81.975-81.907 9.962 0 19.725 1.784 29.014 5.301 4.247 1.729 9.393-1.212 10.066-5.746 7.828-45.208 46.852-78.021 92.791-78.021 49.74 0 91.035 38.86 94.014 88.469.758 9.347 11.284 6.526 17.655 6.573 53.535 0 97.088 43.554 97.088 97.088s-43.553 97.088-97.088 97.088h-62.974c-4.15 0-7.515 3.364-7.515 7.515s3.365 7.515 7.515 7.515h62.972c61.822 0 112.118-50.296 112.118-112.118 0-43.873-25.334-81.934-62.138-100.341zm-141.364-229.903 29.283 31.131h-2.973c-4.15 0-7.515 3.364-7.515 7.515v91.672c-11.718-4.504-24.388-7.036-37.589-7.214v-84.459c0-4.151-3.365-7.515-7.515-7.515h-2.974zm-126.077 205.114c-.085-.024-.172-.044-.257-.067v-113.449c0-4.151-3.365-7.515-7.515-7.515h-2.973l29.283-31.131 29.283 31.131h-2.973c-4.15 0-7.515 3.364-7.515 7.515v55.526c-17.977 14.44-31.354 34.537-37.333 57.99z"/><path d="m283.178 340.991c4.15 0 7.515-3.364 7.515-7.515s-3.365-7.515-7.515-7.515h-35.189c-4.15 0-7.515 3.364-7.515 7.515v83.515c0 4.151 3.365 7.515 7.515 7.515h35.189c4.15 0 7.515-3.364 7.515-7.515s-3.365-7.515-7.515-7.515h-27.675v-26.728h25.08c4.15 0 7.515-3.364 7.515-7.515s-3.364-7.515-7.515-7.515h-25.08v-26.728h27.675z"/><path d="m194.1 409.861c-9.216 0-18.114-3.748-23.802-10.025-2.787-3.075-7.539-3.308-10.615-.523-3.075 2.787-3.309 7.539-.523 10.615 8.49 9.369 21.551 14.963 34.939 14.963 16.034 0 30.003-10.516 32.493-24.461 2.872-16.086-9.777-26.862-22.573-31.581-10.846-4.001-20.907-8.369-23.447-9.484-2.693-1.974-4-5.126-3.51-8.536.616-4.293 3.914-7.738 8.823-9.216 13.522-4.076 25.741 5.723 25.982 5.92 3.177 2.647 7.898 2.229 10.561-.939 2.67-3.177 2.26-7.918-.917-10.588-.746-.626-18.482-15.252-39.962-8.784-10.497 3.163-17.917 11.39-19.365 21.472-1.347 9.388 2.718 18.414 10.609 23.559.332.217.681.407 1.043.568.484.215 12.002 5.342 24.98 10.129 9.318 3.437 14.049 8.846 12.979 14.84-1.043 5.85-7.6 12.071-17.695 12.071z"/><path d="m397.404 375.233c0-27.381-22.276-49.656-49.656-49.656-27.381 0-49.657 22.276-49.657 49.656 0 27.381 22.276 49.656 49.657 49.656 27.38.001 49.656-22.275 49.656-49.656zm-84.284 0c0-19.094 15.534-34.627 34.627-34.627s34.627 15.533 34.627 34.627-15.534 34.627-34.627 34.627c-19.093.001-34.627-15.533-34.627-34.627z"/></g></g></svg>
					  </div>
		<h3 class="text-2xl font-bold mb-4 text-blue-600" style="font-family: 'Poppins', sans-serif;">Optimización SEO Local</h3>
		<p class="text-gray-700 mb-6 leading-relaxed">
		  Te posicionamos en los primeros lugares de Google para atraer a clientes locales que buscan los servicios de tu clínica de estética.
		</p>
		<a href="#contacto" class="text-blue-600 font-semibold hover:text-blue-800 transition duration-200">
		  Aprende Más →
		</a>
	  </div>
  
	  <!-- Servicio 3 -->
	  <div class="p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
		<div class="flex justify-center mb-4">
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg width="125" height="125" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#D8D7DA;" d="M31,416h147v-72h37v-15h37v-15h37v-65.5c0-11.322,9.178-20.5,20.5-20.5s20.5,9.178,20.5,20.5V346
	h35.625v70H481V106H31V416z"/>
<g>
	<rect x="71" y="146" style="fill:#B0EF60;" width="50" height="50"/>
	<rect x="71" y="236" style="fill:#B0EF60;" width="50" height="50"/>
	<rect x="71" y="326" style="fill:#B0EF60;" width="50" height="50"/>
	<rect x="391" y="146" style="fill:#B0EF60;" width="50" height="50"/>
	<rect x="391" y="236" style="fill:#B0EF60;" width="50" height="50"/>
	<rect x="391" y="326" style="fill:#B0EF60;" width="50" height="50"/>
</g>
<rect x="284.33" y="146" style="fill:#FDD844;" width="50" height="50"/>
<g>
	<rect x="177.67" y="146" style="fill:#B0EF60;" width="50" height="50"/>
	<rect x="177.67" y="236" style="fill:#B0EF60;" width="50" height="50"/>
</g>
<path style="fill:#FDD8A8;" d="M332.375,512v-35l33.25-57.001V346H330v-97.5c0-11.322-9.178-20.5-20.5-20.5l0,0
	c-11.322,0-20.5,9.178-20.5,20.5V314h-37v15h-37v15h-37v75.999L201.75,477v35H332.375z"/>
<rect x="31" y="26" style="fill:#FF3F62;" width="450" height="80"/>
<rect x="201.75" y="492" style="fill:#FFC477;" width="130.62" height="20"/>
<path style="fill:#ACABB1;" d="M385.625,396v-70H350v-77.5c0-22.332-18.168-40.5-40.5-40.5S269,226.168,269,248.5V294h-37v15h-37v15
	h-37v72H31v20h147v-72h37v-15h37v-15h37v-65.5c0-11.322,9.178-20.5,20.5-20.5s20.5,9.178,20.5,20.5V346h35.625v70H481v-20H385.625z"
	/>
<path d="M443.5,18.5V0h-15v18.5h-57V0h-15v18.5h-57V0h-15v18.5h-57V0h-15v18.5h-57V0h-15v18.5h-57V0h-15v18.5h-45v405h147.834
	l22.916,55V512h15v-36.5l-23.75-57.001V351.5h22V378h15v-26.5V344v-7.5h22V378h15v-41.5V329v-7.5h22V378h15v-56.5V314v-65.5
	c0-7.168,5.832-13,13-13s13,5.832,13,13v105h35.625v64.472l-33.25,57.001V512h15v-32.973l32.39-55.527H488.5v-405H443.5z M68.5,33.5
	V52h15V33.5h57V52h15V33.5h57V52h15V33.5h57V52h15V33.5h57V52h15V33.5h57V52h15V33.5h30v65h-435v-65H68.5z M373.125,408.5v-70H337.5
	v-90c0-15.439-12.561-28-28-28s-28,12.561-28,28v58h-37v15h-37v15h-37v72h-132v-295h435v295H373.125z"/>
<rect x="248.5" y="68.5" width="15" height="15"/>
<rect x="278.5" y="68.5" width="15" height="15"/>
<rect x="218.5" y="68.5" width="15" height="15"/>
<path d="M63.5,203.5h65v-65h-65V203.5z M78.5,153.5h35v35h-35V153.5z"/>
<path d="M63.5,293.5h65v-65h-65V293.5z M78.5,243.5h35v35h-35V243.5z"/>
<path d="M63.5,383.5h65v-65h-65V383.5z M78.5,333.5h35v35h-35V333.5z"/>
<path d="M383.5,203.5h65v-65h-65V203.5z M398.5,153.5h35v35h-35V153.5z"/>
<path d="M383.5,293.5h65v-65h-65V293.5z M398.5,243.5h35v35h-35V243.5z"/>
<path d="M383.5,383.5h65v-65h-65V383.5z M398.5,333.5h35v35h-35V333.5z"/>
<path d="M276.833,203.5h65v-65h-65V203.5z M291.833,153.5h35v35h-35V153.5z"/>
<path d="M170.167,203.5h65v-65h-65V203.5z M185.167,153.5h35v35h-35V153.5z"/>
<path d="M170.167,293.5h65v-65h-65V293.5z M185.167,243.5h35v35h-35V243.5z"/>
<g>
	<path style="fill:#FFFFFF;" d="M441,83.5h-40v-15h40V83.5z M386,83.5h-15v-15h15V83.5z"/>
	<path style="fill:#FFFFFF;" d="M141,83.5h-40v-15h40V83.5z M86,83.5H71v-15h15V83.5z"/>
	<path style="fill:#FFFFFF;" d="M368.5,279h-15v-15h15V279z M368.5,249h-15v-30h15V249z"/>
	<path style="fill:#FFFFFF;" d="M308.854,472.669l-12.957-7.559l7.558-12.957l12.957,7.559L308.854,472.669z M323.969,446.756
		l-12.957-7.559l17.113-29.336V376h15v37.916L323.969,446.756z"/>
	<path style="fill:#FFFFFF;" d="M224.827,473.885l-5.769-13.846l13.846-5.77l5.769,13.846L224.827,473.885z M213.289,446.192
		l-12.212-29.309l13.846-5.77l12.212,29.309L213.289,446.192z"/>
	<path style="fill:#FFFFFF;" d="M158.5,382.001h-15v-15h15V382.001z M158.5,352.001h-15v-40h15V352.001z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

					  </div>
		<h3 class="text-2xl font-bold mb-4 text-blue-600" style="font-family: 'Poppins', sans-serif;">Integración de Reservas Online</h3>
		<p class="text-gray-700 mb-6 leading-relaxed">
		  Implementamos sistemas de gestión de pacientes y herramientas de reserva online para mejorar la experiencia del cliente y la eficiencia operativa.
		</p>
		<a href="#contacto" class="text-blue-600 font-semibold hover:text-blue-800 transition duration-200">
		  Aprende Más →
		</a>
	  </div>
	</div>
  
	<!-- Botón de CTA principal -->
	<div class="relative z-10 mt-12">
	  <a
		href="#contacto"
		class="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
	  >
		Descubre Cómo Aumentar tus Reservas
	  </a>
	</div>
  </section>
  

<!-- Sección de Sobre Nosotros -->
<!-- <section id="sobre-nosotros" class="py-16 bg-gray-100 text-center px-6">
	<h2 class="text-3xl font-bold mb-8 text-primary">Sobre Nosotros</h2>
	<div class="max-w-3xl mx-auto">
		<p class="text-lg mb-6">
			En Turbify, ayudamos a clínicas de estética a maximizar su potencial online. Con experiencia
			en desarrollo web y optimización de conversiones, creamos sitios que no solo lucen bien, sino
			que también venden.
		</p>
		<p class="text-lg">
			Nuestro enfoque está en la velocidad, la seguridad, y la eficiencia, garantizando que tu web
			sea una herramienta poderosa para atraer y retener clientes.
		</p>
	</div>
</section> -->

<!-- Sección de Testimonios -->
<!-- <section id="testimonios" class="py-16 bg-white text-center px-6">
	<h2 class="text-3xl font-bold mb-8 text-primary">Lo que dicen nuestros clientes</h2>
	<div class="max-w-4xl mx-auto">
		<blockquote class="mb-8">
			<p class="text-xl italic">
				"Desde que optimizamos nuestra web con Turbify, nuestras reservas han aumentado un 50%. ¡El
				mejor retorno de inversión que hemos tenido!"
			</p>
			<footer class="text-sm mt-4">— María López, Directora de Clínica Bella</footer>
		</blockquote>
		<blockquote class="mb-8">
			<p class="text-xl italic">
				"Turbify nos ayudó a posicionarnos en Google y a destacar nuestros servicios premium.
				Estamos encantados con los resultados."
			</p>
			<footer class="text-sm mt-4">— Carlos Rodríguez, CEO de Estética Plus</footer>
		</blockquote>
	</div>
</section> -->

<!-- Sección de Urgencia y Escasez -->
<!-- <section id="oferta" class="py-16 bg-red-100 text-center px-6">
	<h2 class="text-3xl font-bold mb-8 text-red-600">¡Oferta Exclusiva por Tiempo Limitado!</h2>
	<p class="text-lg mb-4">
		Reserva tu consulta gratuita en las próximas 24 horas y recibe un análisis SEO sin costo.
	</p>
	<div class="flex justify-center items-center mb-6">
		<p class="text-xl font-semibold mr-4">Tiempo restante:</p>
		<div id="countdown" class="text-2xl font-bold bg-white px-4 py-2 rounded-md text-red-600">
			23:59:59
		</div>
	</div>
	<a
		href="#contacto"
		class="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition duration-200 shadow-md"
		>Reserva Ahora</a
	>
</section> -->

<!-- Sección de Contacto -->
<!-- <section id="contacto" class="py-16 bg-gray-100 text-center px-6">
	<h2 class="text-3xl font-bold mb-8 text-primary">Contáctanos</h2>
	<form action="/enviar" method="post" class="max-w-xl mx-auto space-y-4">
		<input
			type="text"
			name="nombre"
			placeholder="Tu nombre"
			class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
			required
		/>
		<input
			type="email"
			name="email"
			placeholder="Tu correo electrónico"
			class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
			required
		/>
		<textarea
			name="mensaje"
			placeholder="Tu mensaje"
			class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
			rows="5"
			required
		></textarea>
		<button
			type="submit"
			class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-200 shadow-md"
			>Enviar Mensaje</button
		>
	</form>
</section> -->

<!-- Pie de Página -->
<!-- <footer class="bg-gray-800 text-white py-6 text-center">
	<p>&copy; 2024 Turbify. Todos los derechos reservados.</p>
	<nav class="flex justify-center space-x-4 mt-4">
		<a href="#inicio" class="hover:underline">Inicio</a>
		<a href="#servicios" class="hover:underline">Servicios</a>
		<a href="#sobre-nosotros" class="hover:underline">Sobre Nosotros</a>
		<a href="#testimonios" class="hover:underline">Testimonios</a>
		<a href="#oferta" class="hover:underline">Oferta</a>
		<a href="#contacto" class="hover:underline">Contacto</a>
	</nav>
</footer> -->

<!-- Ajuste de fondo para pantallas más grandes con TailwindCSS -->
<style>
	@media (min-width: 768px) {
		#image-cover {
			background-image: url('/diseno-web-clinica-estetica-tablet-pc.webp') !important;
		}
	}
</style>
<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const countdown = () => {
			// Calculate the end time 24 hours from now
			const end = new Date(Date.now() + 24 * 60 * 60 * 1000).getTime(); // Convert to milliseconds

			// Function to update the countdown every second
			const updateCountdown = () => {
				const now = new Date().getTime(); // Current time in milliseconds
				const timeLeft = end - now; // Difference in milliseconds

				// Get the countdown element
				const countdownElement = document.getElementById('countdown') as HTMLElement | null; // Assert type to HTMLElement or null

				if (!countdownElement) return; // Exit if element is not found

				if (timeLeft <= 0) {
					// If the countdown has ended, display 00:00:00
					countdownElement.innerHTML = '00:00:00';
				} else {
					// Calculate hours, minutes, and seconds
					const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
					const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

					// Update the countdown element with formatted time
					countdownElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
				}
			};

			// Set the countdown to update every second
			setInterval(updateCountdown, 1000);
		};

		// Start the countdown
		countdown();
	});
</script>
