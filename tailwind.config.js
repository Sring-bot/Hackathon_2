/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F8F6',
          100: '#E6F0ED',
          200: '#D1E4DE',
          300: '#B3D1C9',
          400: '#95BEB4',
          500: '#77AA9F', // Softer primary green
          600: '#5C8B82',
          700: '#466B64',
          800: '#2F4B46',
          900: '#172B28',
        },
        secondary: {
          50: '#F6F9F6',
          100: '#EBF2EB',
          200: '#D8E6D8',
          300: '#BCDABC',
          400: '#A0CDA0', // Softer secondary green
          500: '#84C184',
          600: '#689D68',
          700: '#4C794C',
          800: '#305530',
          900: '#143114',
        },
        accent: {
          50: '#F7F9FC',
          100: '#EEF3F9',
          200: '#DDE7F3',
          300: '#CCDBED',
          400: '#BBCFE7',
          500: '#AAC3E1', // Softer accent blue
          600: '#89A2C0',
          700: '#68819F',
          800: '#47607E',
          900: '#263F5D',
        },
        calm: {
          50: '#FAFCFD',
          100: '#F5F9FB',
          200: '#EBF3F7',
          300: '#E1EDF3',
          400: '#D7E7EF',
          500: '#CDE1EB', // Softer calm blue
          600: '#ACC0CA',
          700: '#8B9FA9',
          800: '#6A7E88',
          900: '#495D67',
        },
        warmth: {
          50: '#FDFAF7',
          100: '#FAF5EF',
          200: '#F5EBE0',
          300: '#F0E0D1',
          400: '#EBD6C2',
          500: '#E6CBB3', // Softer warm neutral
          600: '#C5AA92',
          700: '#A48971',
          800: '#836850',
          900: '#62472F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-slower': 'float 16s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
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
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'softer': '0 2px 15px rgba(0, 0, 0, 0.02)',
        'glow': '0 0 15px rgba(119, 170, 159, 0.2)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};