/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palet: Deep Trust Blue (brand) + Warm Amber (aksen) — ramah & terpercaya
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#1e40af',
        },
        navy: {
          DEFAULT: '#1e3a8a',
          light: '#1e40af',
          soft: '#334155',
        },
        amber: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        surface: '#fafafa',
        line: '#e5e7eb',
        ink: '#1f2937',
      },
      fontFamily: {
        display: ['Fredoka', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,23,42,0.06)',
        'card-hover': '0 20px 40px -12px rgba(30, 64, 175, 0.22)',
        soft: '0 1px 2px rgba(15,23,42,0.05)',
      },
    },
  },
  plugins: [],
};
