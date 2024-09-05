// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Asegúrate de que Tailwind escanee los archivos de tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        // Definición de colores personalizados
        primary: '#0056b3', // Color principal
        secondary: '#28a745', // Color secundario para CTA y acentos
        background: '#FFFFFF', // Fondo principal
        accent: '#f0f0f0', // Color de fondo de secciones
        textPrimary: '#333333', // Color de texto principal
        textSecondary: '#666666', // Color de texto secundario
        link: '#0056b3', // Color para los enlaces
      },
      fontFamily: {
        // Definición de tipografías personalizadas
        sans: ['Montserrat', 'Arial', 'sans-serif'], // Fuente principal
        serif: ['Merriweather', 'Georgia', 'serif'], // Fuente secundaria
      },
      fontSize: {
        // Tamaños de fuente personalizados
        base: '16px', // Tamaño base de fuente
        lg: '18px', // Texto grande
        xl: '24px', // Título pequeño
        '2xl': '32px', // Título mediano
        '3xl': '40px', // Título grande
        '4xl': '48px', // Título muy grande
      },
      spacing: {
        // Espaciado personalizado
        sm: '8px', // Espaciado pequeño
        md: '16px', // Espaciado mediano
        lg: '24px', // Espaciado grande
        xl: '32px', // Espaciado extra grande
      },
      borderRadius: {
        // Bordes redondeados personalizados
        DEFAULT: '4px', // Bordes ligeramente redondeados
        md: '8px', // Bordes medianamente redondeados
        lg: '12px', // Bordes más redondeados
      },
      boxShadow: {
        // Sombra personalizada
        card: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra para tarjetas
        button: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra para botones
      },
    },
  },
  plugins: [],
};