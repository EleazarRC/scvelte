
<!-- src/routes/+page.svelte -->
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

<!-- enfoque-y-razones -->
<section id="enfoque-y-razones" class="py-20 bg-gray-100 text-center px-6 relative">
	<!-- Título de la sección -->
	<div class="max-w-3xl mx-auto mb-10">
		<h2 class="text-4xl font-bold mb-4 text-primary" style="font-family: 'Poppins', sans-serif;">
			Sobre Nosotros
		</h2>
		<p class="text-lg text-gray-700 mb-4 leading-relaxed">
			En <span class="font-semibold text-blue-600">Turbify</span>, ayudamos a las clínicas de
			estética a
			<span class="font-semibold underline decoration-4 decoration-blue-600"
				>convertir más visitantes en clientes</span
			> con sitios web optimizados para la conversión y el SEO.
		</p>
	</div>

	<!-- Banner 1: Nuestro Enfoque -->
	<div
		class="flex flex-col lg:flex-row items-center justify-between bg-white p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl my-12 max-w-7xl mx-auto"
	>
		<!-- Imagen Izquierda -->
		<div class="flex-1 mb-6 lg:mb-0">
			<img src="/enfoque.svg" alt="Nuestro Enfoque" />
		</div>

		<!-- Contenido Derecha -->
		<div class="flex-1 lg:pl-12">
			<h3 class="text-3xl font-bold mb-6 text-primary" style="font-family: 'Poppins', sans-serif;">
				Nuestro Enfoque
			</h3>
			<p class="text-lg mb-4 leading-relaxed">
				Nos especializamos en <span class="font-semibold text-blue-600"
					>diseños web personalizados</span
				>
				que no solo son visualmente atractivos, sino que también están diseñados para ayudarte a
				<span class="font-semibold text-blue-600">captar más clientes</span> y potenciar tu presencia
				online.
			</p>
			<ul class="list-none text-left space-y-4">
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Diseños centrados en destacar los servicios más rentables.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Optimización SEO específica para atraer clientes locales.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Velocidad y seguridad para generar confianza.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Integración con herramientas de gestión de pacientes y reservas.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Diseño responsive para móviles y tabletas.
				</li>
			</ul>
		</div>
	</div>

	<!-- Banner 2: Por Qué Elegirnos -->
	<div
		class="flex flex-col lg:flex-row-reverse items-center justify-between bg-white p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl my-12 max-w-7xl mx-auto"
	>
		<!-- Imagen Derecha -->
		<div class="flex-1 mb-6 lg:mb-0">
			<img src="/por-que-elegirnos.svg" alt="Por Qué Elegirnos" />
		</div>

		<!-- Contenido Izquierda -->
		<div class="flex-1 lg:pr-12">
			<h3 class="text-3xl font-bold mb-6 text-primary" style="font-family: 'Poppins', sans-serif;">
				Por Qué Elegirnos
			</h3>
			<p class="text-lg mb-4 leading-relaxed">
				Empleamos herramientas y tecnologías de <span class="font-semibold text-blue-600"
					>última generación</span
				> para garantizar que cada web sea altamente efectiva. Aquí hay algunas razones para elegirnos:
			</p>
			<ul class="list-none text-left space-y-4">
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Google Analytics para un análisis detallado del comportamiento del usuario.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					SEO Tools para garantizar que tu clínica esté siempre en los primeros lugares.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Svelte y TailwindCSS para sitios web rápidos, seguros y modernos.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Pruebas A/B continuas para optimizar la conversión de visitantes en clientes.
				</li>
				<li class="flex items-start">
					<span class="w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1"></span>
					Soporte técnico continuo y actualizaciones regulares.
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- HERRAMIENTAS -->
<section id="herramientas" class="py-20 bg-white text-center px-6 relative overflow-hidden">
	<!-- Título de la sección -->
	<div class="max-w-3xl mx-auto mb-10">
		<h2 class="text-4xl font-bold mb-4 text-primary" style="font-family: 'Poppins', sans-serif;">
			Herramientas que Utilizamos
		</h2>
		<p class="text-lg text-gray-700 mb-8 leading-relaxed">
			Utilizamos las mejores herramientas para asegurar que tu web sea rápida, segura y esté
			optimizada para conversiones.
		</p>
	</div>

	<!-- Carrusel -->
	<div id="carousel" class="flex items-center space-x-6 overflow-x-hidden w-full max-w-7xl mx-auto">
		<!-- <div class="flex-shrink-0 w-1/4 p-4">
			<img src="/images/tool1.svg" alt="Herramienta 1" class="mx-auto w-16 h-16 mb-4" />
			<p class="text-md text-gray-600">Google Analytics</p>
		</div>
		<div class="flex-shrink-0 w-1/4 p-4">
			<img src="/images/tool2.svg" alt="Herramienta 2" class="mx-auto w-16 h-16 mb-4" />
			<p class="text-md text-gray-600">SEO Tools</p>
		</div>
		<div class="flex-shrink-0 w-1/4 p-4">
			<img src="/images/tool3.svg" alt="Herramienta 3" class="mx-auto w-16 h-16 mb-4" />
			<p class="text-md text-gray-600">Pruebas A/B</p>
		</div> -->
		<!-- Agregar más herramientas según sea necesario -->
	</div>

	<!-- Botón de CTA debajo del carrusel -->
	<div class="mt-10">
		<a
			href="#contacto"
			class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-200 shadow-md"
		>
			¡Descubre Cómo Aumentar tus Reservas!
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

		// Inicializar el carrusel
		const carousel = document.getElementById('carousel');
		let scrollAmount = 0;

		if (carousel) {
			// Verifica que el carrusel no sea null
			function scrollCarousel() {
				scrollAmount += 1;
				if (scrollAmount >= carousel!.scrollWidth / 2) {
					scrollAmount = 0;
					carousel!.scrollTo(0, 0);
				} else {
					carousel!.scrollTo(scrollAmount, 0);
				}
			}

			setInterval(scrollCarousel, 30); // Ajusta el valor para controlar la velocidad
		}
	});
</script>
