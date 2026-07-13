/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Identitas SDN Bulukerto 01: Merah nasional (brand) + Kuning cerah (aksen)
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          DEFAULT: '#b91c1c',
        },
        navy: {
          DEFAULT: '#7f1d1d',
          light: '#991b1b',
          soft: '#44403c',
        },
        amber: {
          DEFAULT: '#facc15',
          light: '#fde047',
          dark: '#eab308',
        },
        surface: '#fdfaf6',
        line: '#e7e5e4',
        ink: '#292524',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(41,37,36,0.06)',
        'card-hover': '0 20px 40px -12px rgba(185, 28, 28, 0.22)',
        soft: '0 1px 2px rgba(41,37,36,0.05)',
      },
    },
  },
  plugins: [],
};
