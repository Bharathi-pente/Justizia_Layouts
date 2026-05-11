/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Justitia Legal Color Palette
        navy: {
          DEFAULT: '#1a2332',
          primary: '#1a2332',
          50: '#f0f1f3',
          100: '#d1d4da',
          900: '#1a2332',
        },
        charcoal: {
          DEFAULT: '#2b2d42',
          50: '#f5f5f7',
          900: '#2b2d42',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e5c963',
          dark: '#b8860b',
          50: '#faf8f0',
          100: '#f5f0d9',
          600: '#d4af37',
          700: '#b8860b',
        },
        copper: {
          DEFAULT: '#b8860b',
          600: '#b8860b',
        },
        slate: {
          50: '#f5f5f7',
          100: '#f1f5f9',
          200: '#e2e8f0',
          400: '#8a8a8f',
          500: '#64748b',
          600: '#475569',
          900: '#333333',
        },
        success: {
          DEFAULT: '#2ecc71',
          500: '#2ecc71',
        },
        warning: {
          DEFAULT: '#e74c3c',
          500: '#e74c3c',
        },
        info: {
          DEFAULT: '#3498db',
          500: '#3498db',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Amiri', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'base': '0.625rem',
        'lg': '0.875rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'md': '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        'lg': '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        'xl': '0 20px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.04)',
        '2xl': '0 25px 50px rgba(0,0,0,0.15)',
        'glow-white': '0 0 20px rgba(255,255,255,0.50)',
        'glow-primary': '0 0 30px rgba(201,66,52,0.15)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
        'image': '700ms',
      },
    },
  },
  plugins: [],
}