/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // The Premium Academic Palette (lihat design.md)
        primary: {
          DEFAULT: '#0F172A', // Slate Dark / Deep Navy
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#0D9488', // Prestige Teal
          light: '#14B8A6',
        },
        surface: '#F8FAFC', // Clean Slate White
        line: '#E2E8F0', // Slate-200
        ink: '#334155', // Slate Gray untuk teks konten
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Syne', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
};
