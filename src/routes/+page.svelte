
<!-- src/routes/+page.svelte -->
 <!-- inicio -->
<section
	id="inicio"
	class="min-h-screen bg-gray-100 flex items-center justify-center text-center px-6 relative"
	aria-labelledby="hero-title"
>
	<!-- Fondo con desenfoque -->
	<div
		id="image-cover"
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/diseno-web-clinica-estetica-movil.webp'); filter: blur(4px);"
		aria-hidden="true"
	></div>

	<!-- Overlay oscuro para mejorar el contraste del texto -->
	<div class="absolute inset-0 bg-black opacity-70 md:opacity-50" aria-hidden="true"></div>

	<!-- Contenido de la sección -->
	<div class="relative z-10 max-w-2xl mx-auto px-4 md:px-0">
		<!-- Título Principal -->
		<h1
			style="font-family: 'Poppins', sans-serif;"
			id="hero-title"
			class="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-7 drop-shadow-md tracking-wide"
		>
			¡Transforma tu Clínica de Estética con una
			<span class="text-yellow-300">Web que Atraiga Clientes</span>!
		</h1>

		<!-- Párrafo de Introducción -->
		<p
			class="text-sm md:text-xl text-white mb-5 md:mb-7 drop-shadow-md leading-relaxed md:leading-normal"
		>
			<span class="underline decoration-4 decoration-yellow-300"
				>Aumenta tus reservas online hasta un 40%</span
			> con un sitio web diseñado para atraer y convertir más clientes.
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 mr-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
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
			<p class="text-white text-sm md:text-base italic drop-shadow-md mb-1">
				"La mejor inversión para aumentar nuestras reservas online."
			</p>
			<p class="text-white text-xs md:text-sm">— María López, Directora de Clínica Belle</p>
		</div>
	</div>
</section>

<!-- Sección de Servicios -->
<section id="servicios" class="py-20 bg-white text-center px-6 relative">
	<!-- Fondo con patrón o color sutil -->
	<div
		id="background-pattern"
		class="absolute inset-0 bg-fixed bg-cover bg-no-repeat bg-opacity-5"
		aria-hidden="true"
	></div>

	<!-- Título de la sección -->
	<div class="relative z-10">
		<h2
			class="text-3xl md:text-5xl font-bold mb-12 text-primary"
			style="font-family: 'Poppins', sans-serif;"
		>
			Nuestros Servicios Especializados
		</h2>
	</div>

	<!-- Contenedor de servicios -->
	<div
		class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
	>
		<!-- Servicio 1 -->
		<div
			class="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl"
		>
			<div class="flex justify-center mb-4">
				<img
					src="/ventas.svg"
					alt="Icono representando diseño web para aumentar ventas"
					width="128"
					height="128"
				/>
			</div>
			<h3 class="text-2xl font-bold mb-4 text-blue-600" style="font-family: 'Poppins', sans-serif;">
				Diseño Web que Convierta
			</h3>
			<p class="text-gray-700 mb-6 leading-relaxed">
				Creamos páginas web personalizadas que destacan tus servicios más rentables, capturando la
				atención de tus clientes ideales desde el primer vistazo.
			</p>
			<a
				href="#contacto"
				class="text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
				aria-label="Más información sobre Diseño Web que Convierta"
			>
				Aprende Más →
			</a>
		</div>

		<!-- Servicio 2 -->
		<div
			class="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl"
		>
			<div class="flex justify-center mb-4">
				<img
					src="/seo.svg"
					alt="Icono representando optimización SEO local"
					width="128"
					height="128"
				/>
			</div>
			<h3 class="text-2xl font-bold mb-4 text-blue-600" style="font-family: 'Poppins', sans-serif;">
				Optimización SEO Local
			</h3>
			<p class="text-gray-700 mb-6 leading-relaxed">
				Te posicionamos en los primeros lugares de Google para atraer a clientes locales que buscan
				los servicios de tu clínica de estética.
			</p>
			<a
				href="#contacto"
				class="text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
				aria-label="Más información sobre Optimización SEO Local"
			>
				Aprende Más →
			</a>
		</div>

		<!-- Servicio 3 -->
		<div
			class="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl"
		>
			<div class="flex justify-center mb-4">
				<img
					src="/reservas.svg"
					alt="Icono representando integración de reservas online"
					width="128"
					height="128"
				/>
			</div>
			<h3 class="text-2xl font-bold mb-4 text-blue-600" style="font-family: 'Poppins', sans-serif;">
				Integración de Reservas Online
			</h3>
			<p class="text-gray-700 mb-6 leading-relaxed">
				Implementamos sistemas de gestión de pacientes y herramientas de reserva online para mejorar
				la experiencia del cliente y la eficiencia operativa.
			</p>
			<a
				href="#contacto"
				class="text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
				aria-label="Más información sobre Integración de Reservas Online"
			>
				Aprende Más →
			</a>
		</div>
	</div>

	<!-- Botón de CTA principal -->
	<div class="relative z-10 mt-12">
		<a
			href="#contacto"
			class="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
			aria-label="Descubre cómo aumentar tus reservas con nuestros servicios"
		>
			Descubre Cómo Aumentar tus Reservas
		</a>
	</div>
</section>

<!-- Carrusel de Servicios Ofrecidos -->
<section id="carousel-servicios" class="py-20 bg-white text-center relative overflow-hidden">
    <!-- Carousel de Servicios -->
    <div id="carousel" class="flex animate-marquee items-center gap-6 w-full max-w-7xl mx-auto px-6">
        <!-- Servicio 1 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                SEO Avanzado
            </h3>
            <p class="text-gray-600 mt-2">
                Mejora tu posicionamiento en Google y atrae a más clientes locales.
            </p>
        </div>

        <!-- Servicio 2 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Diseño SPA
            </h3>
            <p class="text-gray-600 mt-2">
                Aplicaciones web de página única para una experiencia de usuario fluida.
            </p>
        </div>

        <!-- Servicio 3 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                CRO
            </h3>
            <p class="text-gray-600 mt-2">
                Optimización del Ratio de Conversión para maximizar tus ventas.
            </p>
        </div>

        <!-- Servicio 4 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Seguridad Web
            </h3>
            <p class="text-gray-600 mt-2">
                Protección avanzada para asegurar la confianza de tus clientes.
            </p>
        </div>

        <!-- Servicio 5 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Marketing Digital
            </h3>
            <p class="text-gray-600 mt-2">
                Estrategias personalizadas para aumentar tu visibilidad online.
            </p>
        </div>

        <!-- Servicio 6 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Diseño Responsive
            </h3>
            <p class="text-gray-600 mt-2">
                Experiencia óptima en todos los dispositivos, móviles y de escritorio.
            </p>
        </div>

        <!-- Servicio 7 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-green-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Análisis de Datos
            </h3>
            <p class="text-gray-600 mt-2">
                Decisiones basadas en datos para mejorar continuamente el rendimiento.
            </p>
        </div>
    </div>
</section>

<!-- enfoque-y-razones -->
<section id="enfoque-y-razones" class="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white px-6 relative">
    <!-- Título de la sección -->
    <div class="max-w-3xl mx-auto mb-10 text-center">
        <h2 class="text-4xl font-bold mb-4" style="font-family: 'Poppins', sans-serif;">
            Sobre Nosotros
        </h2>
        <p class="text-lg mb-4 leading-relaxed">
            En <span class="font-semibold text-yellow-300">Turbify</span>, ayudamos a las clínicas de estética a 
            <span class="font-semibold underline decoration-4 decoration-yellow-300">convertir más visitantes en clientes</span> 
            con sitios web optimizados para la conversión y el SEO.
        </p>
    </div>

    <!-- Banner 1: Nuestro Enfoque -->
    <div class="flex flex-col lg:flex-row items-center justify-between bg-white bg-opacity-20 p-10 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl my-12 max-w-7xl mx-auto">
        <!-- Imagen Izquierda en móvil -->
        <div class="flex-1 mb-6 lg:mb-0 lg:order-none order-first lg:max-w-none max-w-xs mx-auto lg:mx-0">
            <img src="/enfoque.svg" alt="Nuestro Enfoque" class="rounded-lg lg:rounded-full lg:shadow-md mx-auto lg:mx-0 lg:w-auto lg:h-auto w-48 h-48" />
        </div>

        <!-- Contenido Derecha -->
        <div class="flex-1 lg:pl-12">
            <h3 class="text-3xl font-bold mb-6 text-white text-center lg:text-left" style="font-family: 'Poppins', sans-serif;">
                Nuestro Enfoque
            </h3>
            <p class="text-lg mb-4 leading-relaxed text-center lg:text-left">
                Nos especializamos en <span class="font-semibold text-yellow-300">diseños web personalizados</span> 
                que no solo son visualmente atractivos, sino que también están diseñados para ayudarte a 
                <span class="font-semibold text-yellow-300">captar más clientes</span> y potenciar tu presencia online.
            </p>
            <ul class="list-none text-left space-y-4">
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Diseños centrados en destacar los servicios más rentables.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Optimización SEO específica para atraer clientes locales.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Velocidad y seguridad para generar confianza.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Integración con herramientas de gestión de pacientes y reservas.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Diseño responsive para móviles y tabletas.
                </li>
            </ul>
            <!-- CTA Button -->
            <div class="text-center lg:text-left mt-6">
                <a href="#contacto" class="inline-block bg-yellow-300 text-blue-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transform transition duration-300 ease-in-out">
                    Reserva tu Consulta Gratis
                </a>
            </div>
        </div>
    </div>

    <!-- Banner 2: Por Qué Elegirnos -->
    <div class="flex flex-col lg:flex-row-reverse items-center justify-between bg-white bg-opacity-20 p-10 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl my-12 max-w-7xl mx-auto">
        <!-- Imagen Derecha en móvil -->
        <div class="flex-1 mb-6 lg:mb-0 lg:order-none order-first lg:max-w-none max-w-xs mx-auto lg:mx-0">
            <img src="/por-que-elegirnos.svg" alt="Por Qué Elegirnos" class="rounded-lg lg:rounded-full lg:shadow-md mx-auto lg:mx-0 lg:w-auto lg:h-auto w-48 h-48" />
        </div>

        <!-- Contenido Izquierda -->
        <div class="flex-1 lg:pr-12">
            <h3 class="text-3xl font-bold mb-6 text-white text-center lg:text-left" style="font-family: 'Poppins', sans-serif;">
                Por Qué Elegirnos
            </h3>
            <p class="text-lg mb-4 leading-relaxed text-center lg:text-left">
                Empleamos herramientas y tecnologías de <span class="font-semibold text-yellow-300">última generación</span> 
                para garantizar que cada web sea altamente efectiva. Aquí hay algunas razones para elegirnos:
            </p>
            <ul class="list-none text-left space-y-4">
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Google Analytics para un análisis detallado del comportamiento del usuario.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    SEO Tools para garantizar que tu clínica esté siempre en los primeros lugares.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Svelte y TailwindCSS para sitios web rápidos, seguros y modernos.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Pruebas A/B continuas para optimizar la conversión de visitantes en clientes.
                </li>
                <li class="flex items-start">
                    <span class="w-3 h-3 rounded-full bg-yellow-300 mr-3 mt-1"></span>
                    Soporte técnico continuo y actualizaciones regulares.
                </li>
            </ul>
            <!-- CTA Button -->
            <div class="text-center lg:text-left mt-6">
                <a href="#contacto" class="inline-block bg-yellow-300 text-blue-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transform transition duration-300 ease-in-out">
                    Conoce Nuestros Servicios
                </a>
            </div>
        </div>
    </div>
</section>

<!-- tools-carousel-->
<section id="tools-carousel" class="py-20 bg-white text-center relative overflow-hidden">
    <!-- Carousel de Herramientas -->
    <div id="carousel" class="flex animate-marquee items-center gap-6 w-full max-w-7xl mx-auto px-6">
        <!-- Herramienta 1 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Google Analytics
            </h3>
        </div>

        <!-- Herramienta 2 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                SEO Tools
            </h3>
        </div>

        <!-- Herramienta 3 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Pruebas A/B
            </h3>
        </div>

        <!-- Herramienta 4 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Svelte & TailwindCSS
            </h3>
        </div>

        <!-- Herramienta 5 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Soporte Continuo
            </h3>
        </div>

        <!-- Herramienta 6 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Vercel
            </h3>
        </div>

        <!-- Herramienta 7 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-green-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                TypeScript
            </h3>
        </div>

        <!-- Herramienta 8 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 to-purple-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Netlify
            </h3>
        </div>

        <!-- Herramienta 9 -->
        <div class="flex-shrink-0 p-4">
            <h3 class="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text"
                style="font-family: 'Montserrat', sans-serif;">
                Figma
            </h3>
        </div>

        <!-- Repetir herramientas para efecto de loop -->
        <!-- Añadir más herramientas aquí según sea necesario -->
    </div>
</section>

<!-- testimonios -->
<section id="testimonios" class="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white relative overflow-hidden">
	<!-- Estrellas de Fondo -->
<!-- 	<div class="absolute inset-0 flex justify-center items-center">
	  <div class="starry-bg opacity-30 w-full h-full"></div>
	</div> -->

	<!-- Título de la Sección -->
	<div class="relative z-10 max-w-3xl mx-auto mb-10 text-center">
	  <h2 class="text-4xl font-bold mb-4" style="font-family: 'Poppins', sans-serif;">
		Lo que Dicen Nuestros Clientes
	  </h2>
	  <p class="text-lg mb-6 leading-relaxe">
		Descubre cómo hemos transformado la presencia online de clínicas de estética.
	  </p>
	</div>

	<!-- Carrusel de Testimonios -->
	<div id="testimonios-carousel" class="relative z-10 max-w-2xl mx-auto overflow-hidden">
	  <div class="testimonios-slider flex transition-transform duration-700 ease-in-out" style="width: 300%;">
		<!-- Testimonio 1 -->
		<div class="flex-shrink-0 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg text-center">
		  <div class="flex items-center justify-center mb-4">
			<img src="/enfoque.svg" alt="Testimonio de María López" class="w-16 h-16 rounded-full border-2 border-yellow-300 mr-4 shadow-md">
			<div>
			  <h3 class="text-xl font-semibold text-yellow-300">María López</h3>
			  <p class="text-sm text-white">Directora de Clínica Belle</p>
			</div>
		  </div>
		  <p class="text-lg italic text-white leading-relaxed mb-4">"Desde que optimizamos nuestra web con Turbify, nuestras reservas han aumentado un 50%. ¡El mejor retorno de inversión que hemos tenido!"</p>
		  <div class="text-yellow-300 text-2xl">⭐⭐⭐⭐⭐</div>
		</div>

		<!-- Testimonio 2 -->
		<div class="flex-shrink-0 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg text-center">
		  <div class="flex items-center justify-center mb-4">
			<img src="/enfoque.svg" alt="Testimonio de Carlos Rodríguez" class="w-16 h-16 rounded-full border-2 border-yellow-300 mr-4 shadow-md">
			<div>
			  <h3 class="text-xl font-semibold text-yellow-300">Carlos Rodríguez</h3>
			  <p class="text-sm text-white">CEO de Estética Plus</p>
			</div>
		  </div>
		  <p class="text-lg italic text-white leading-relaxed mb-4">"Turbify nos ayudó a posicionarnos en Google y a destacar nuestros servicios premium. Estamos encantados con los resultados."</p>
		  <div class="text-yellow-300 text-2xl">⭐⭐⭐⭐⭐</div>
		</div>

		<!-- Testimonio 3 -->
		<div class="flex-shrink-0 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg text-center">
		  <div class="flex items-center justify-center mb-4">
			<img src="/enfoque.svg" alt="Testimonio de Ana Martínez" class="w-16 h-16 rounded-full border-2 border-yellow-300 mr-4 shadow-md">
			<div>
			  <h3 class="text-xl font-semibold text-yellow-300">Ana Martínez</h3>
			  <p class="text-sm text-white">Fundadora de Dermaluxe</p>
			</div>
		  </div>
		  <p class="text-lg italic text-white leading-relaxed mb-4">"La atención al detalle y el enfoque personalizado de Turbify realmente marcaron la diferencia en nuestro negocio."</p>
		  <div class="text-yellow-300 text-2xl">⭐⭐⭐⭐⭐</div>
		</div>
	  </div>
	</div>

	<!-- Indicadores del Carrusel -->
	<div class="flex justify-center mt-8 space-x-2 relative z-10">
	  <button data-index="0" class="carousel-indicator w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></button>
	  <button data-index="1" class="carousel-indicator w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></button>
	  <button data-index="2" class="carousel-indicator w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></button>
	</div>

	<!-- Botón de CTA debajo de los indicadores -->
	<div class="flex justify-center mt-6 relative z-10">
	  <a href="#contacto" class="inline-block bg-yellow-300 text-blue-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transform transition duration-300 ease-in-out">
		Reserva tu Consulta Gratis
	  </a>
	</div>
</section>

  


  
  
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
	#carousel {
		display: flex;
		gap: 2rem;
		animation: scroll 20s linear infinite;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	/* Animación para el efecto de scroll infinito */
	@keyframes marquee {
	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(-100%);
	}
	}

	.animate-marquee {
	display: flex;
	gap: 6rem;
	animation: marquee 20s linear infinite;
	}
	.testimonios-slider {
  display: flex;
  transition: transform 0.7s ease-in-out;
  width: 100%; /* Asegura que el slider ocupe el 100% del ancho del contenedor */
}

.testimonios-slider {
  display: flex;
  transition: transform 0.7s ease-in-out; /* Transición suave */
  width: 300%; /* El ancho total es el triple del contenedor porque hay 3 testimonios */
}

.testimonios-slider > div {
  flex: 0 0 33.33%; /* Cada testimonio ocupa 1/3 del contenedor total */
  max-width: 100%; /* Evita que el contenido se desborde */
  box-sizing: border-box; /* Incluye padding y border en el ancho total */
  text-align: center; /* Centra el texto */
}

#testimonios-carousel {
  overflow: hidden; /* Oculta el contenido que se desborda fuera del área visible */
  position: relative; /* Asegura que los elementos internos se posicionen correctamente */
  max-width: 100%; /* Limita el ancho del carrusel al contenedor */
}

</style>
<script lang="ts">
	import { onMount } from 'svelte';
  
	onMount(() => {
	  const testimoniosSlider = document.querySelector('.testimonios-slider') as HTMLElement;
	  const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
	  let currentIndex = 0;
	  let intervalId: number;
  
	  const updateCarousel = () => {
		// Calcula la nueva posición de desplazamiento basándose en el índice actual
		testimoniosSlider.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`; // Usa 100/3 para mover un tercio por vez
		indicators.forEach((indicator, index) => {
		  indicator.classList.toggle('bg-yellow-300', index === currentIndex);
		});
	  };
  
	  const startAutoSlide = () => {
		intervalId = setInterval(() => {
		  currentIndex = (currentIndex + 1) % indicators.length; // Cambia al siguiente testimonio
		  updateCarousel(); // Actualiza la posición del carrusel
		}, 5000); // Duración de 5 segundos para cada testimonio
	  };
  
	  indicators.forEach((indicator, index) => {
		indicator.addEventListener('click', () => {
		  clearInterval(intervalId); // Detener el carrusel automático
		  currentIndex = index; // Actualiza el índice al seleccionado
		  updateCarousel(); // Actualiza la posición del carrusel
		  startAutoSlide(); // Reinicia el carrusel automático
		});
	  });
  
	  // Inicializa el carrusel
	  updateCarousel();
	  startAutoSlide();
	});
</script>


  
  


