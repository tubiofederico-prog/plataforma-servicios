export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1B5E20',      // Verde yerba oscuro - principal
          'primary-dark': '#0D3B15',  // Más oscuro para hover
          'primary-light': '#2E7D32',  // Un poco más claro
          secondary: '#4CAF50',    // Verde yerba claro - secundario
          'secondary-light': '#66BB6A',  // Verde claro para elementos suaves
          accent: '#2E7D32',       // Verde oscuro para acentos
          'accent-light': '#81C784',  // Verde suave
        }
      },
      animation: {
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
