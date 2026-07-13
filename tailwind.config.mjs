/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palet: Merah nasional (brand) + Navy (teks) + Kuning (aksen)
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          DEFAULT: '#dc2626',
        },
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          soft: '#334155',
        },
        amber: {
          DEFAULT: '#facc15',
          light: '#fde047',
        },
        surface: '#f8fafc',
        line: '#e5e7eb',
        ink: '#334155',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04)',
        'card-hover': '0 4px 16px -6px rgba(15,23,42,0.14)',
        soft: '0 1px 2px rgba(15,23,42,0.04)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '0.9rem',
      },
    },
  },
  plugins: [],
};
