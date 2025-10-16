/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores Primárias Rook (Manual de Identidade Visual)
        rook: {
          DEFAULT: '#754A31', // Marrom Rook (cor principal)
          light: '#B07C4A',   // Marrom Pingado
          dark: '#351F07',    // Marrom Café
        },
        // Cores Auxiliares
        terracota: {
          DEFAULT: '#E54C00',
          light: '#FF6B1A',
          dark: '#CC4300',
        },
        ocre: {
          DEFAULT: '#E79F4A',
          light: '#FFB366',
          dark: '#D18A35',
        },
        floresta: {
          DEFAULT: '#46604A',
          light: '#5A7A5E',
          dark: '#354A38',
        },
        // Cores Semânticas - Success (Verde Sucesso)
        'success': {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A', // Principal
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        // Cores Semânticas - Warning (Amarelo Aviso)
        'warning': {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Principal
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Cores Semânticas - Error (Vermelho Erro)
        'error': {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626', // Principal
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        // Cores Semânticas - Info (Azul Informação)
        'info': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Principal
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Cinzas Neutros (para textos e fundos)
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Work Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '100' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '100' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '0.04em', fontWeight: '100' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.04em', fontWeight: '300' }],
      },
      backgroundImage: {
        'gradient-rook': 'linear-gradient(135deg, #B07C4A 0%, #351F07 100%)',
        'gradient-rook-radial': 'radial-gradient(circle at top right, #B07C4A 0%, #754A31 50%, #351F07 100%)',
        'hexagon-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23B07C4A' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'rook-sm': '0 1px 2px 0 rgba(117, 74, 49, 0.05)',
        'rook': '0 4px 6px -1px rgba(117, 74, 49, 0.1), 0 2px 4px -1px rgba(117, 74, 49, 0.06)',
        'rook-md': '0 10px 15px -3px rgba(117, 74, 49, 0.1), 0 4px 6px -2px rgba(117, 74, 49, 0.05)',
        'rook-lg': '0 20px 25px -5px rgba(117, 74, 49, 0.1), 0 10px 10px -5px rgba(117, 74, 49, 0.04)',
        'rook-xl': '0 25px 50px -12px rgba(117, 74, 49, 0.25)',
      },
      maxWidth: {
        'container': '1280px',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

