/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Identitas SDN Bulukerto 01: Oranye hangat (brand) + Teal sejuk (aksen)
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#ea580c',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          light: '#14b8a6',
          DEFAULT: '#0d9488',
          dark: '#0f766e',
        },
        navy: {
          DEFAULT: '#7c2d12',
          light: '#9a3412',
          soft: '#57534e',
        },
        surface: '#fffbf5',
        line: '#f0e9e0',
        ink: '#44403c',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(68,64,60,0.06)',
        'card-hover': '0 20px 40px -12px rgba(234, 88, 12, 0.22)',
        soft: '0 1px 2px rgba(68,64,60,0.05)',
      },
    },
  },
  plugins: [],
};
