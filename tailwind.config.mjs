/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Identitas SDN Bulukerto 01: Biru royal (percaya diri) + teal segar (ceria)
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
          DEFAULT: '#1d4ed8',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          light: '#2dd4bf',
          DEFAULT: '#0f766e',
          dark: '#115e59',
        },
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          soft: '#475569',
        },
        surface: '#f8fbff',
        line: '#dbe7f5',
        ink: '#172033',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 20px 40px -12px rgba(37, 99, 235, 0.24)',
        soft: '0 1px 2px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
};
