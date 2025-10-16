/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores de Marca - Rook Brown (Marrom Principal)
        'rook-brown': {
          DEFAULT: '#754A31', // Compatibilidade com uso sem variação
          50: '#FAF6F4',
          100: '#F5EDE8',
          200: '#E8D5C6',
          300: '#DBBDA4',
          400: '#C18D60',
          500: '#754A31', // Principal
          600: '#5C3B27',
          700: '#4A2F1F',
          800: '#382317',
          900: '#26170F',
        },
        // Cores de Marca - Rook Verde (Verde Institucional)
        'rook-verde': {
          DEFAULT: '#44604A', // Compatibilidade com uso sem variação
          50: '#F2F5F3',
          100: '#E5EBE7',
          200: '#BFCDC3',
          300: '#99AF9F',
          400: '#6E8A77',
          500: '#44604A', // Principal
          600: '#364D3B',
          700: '#2B3D2F',
          800: '#202E23',
          900: '#151E17',
        },
        // Cores de Marca - Rook Pingado (Tom Secundário)
        'rook-pingado': {
          DEFAULT: '#B07C4A', // Compatibilidade com uso sem variação
          50: '#FBF7F3',
          100: '#F7EFE7',
          200: '#EBD7C3',
          300: '#DFBF9F',
          400: '#C78F57',
          500: '#B07C4A', // Principal
          600: '#8D633B',
          700: '#6A4A2C',
          800: '#47321E',
          900: '#24190F',
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
        'sans': ['Trebuchet MS', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Trebuchet MS', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px - Para Hero
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px - Para Hero
      },
      backgroundImage: {
        'gradient-rook': 'linear-gradient(135deg, #754A31, #B07C4A)',
        'gradient-rook-dark': 'linear-gradient(135deg, #5C3B27, #754A31)',
        'gradient-success': 'linear-gradient(135deg, #16A34A, #22C55E)',
        'gradient-warning': 'linear-gradient(135deg, #F59E0B, #FBBF24)',
        'gradient-error': 'linear-gradient(135deg, #DC2626, #EF4444)',
        'gradient-info': 'linear-gradient(135deg, #2563EB, #3B82F6)',
        'gradient-hero': 'linear-gradient(135deg, #754A31 0%, #B07C4A 100%)',
      },
      boxShadow: {
        'rook': '0 4px 6px -1px rgba(117, 74, 49, 0.1), 0 2px 4px -1px rgba(117, 74, 49, 0.06)',
        'rook-lg': '0 10px 15px -3px rgba(117, 74, 49, 0.1), 0 4px 6px -2px rgba(117, 74, 49, 0.05)',
        'rook-xl': '0 20px 25px -5px rgba(117, 74, 49, 0.1), 0 10px 10px -5px rgba(117, 74, 49, 0.04)',
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

