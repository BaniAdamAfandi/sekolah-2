import { defineCollection, z } from 'astro:content';

const berita = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum(['Akademik', 'Pengumuman', 'Prestasi', 'Ekstrakurikuler']),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

const guru = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nip: z.string().optional(),
    role: z.string(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const agenda = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eventDate: z.coerce.date(),
    location: z.string().optional(),
    description: z.string().optional(),
  }),
});

const galeri = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().default('Umum'),
    image: z.string(),
    order: z.number().default(99),
  }),
});

// Singleton / data collections (halaman statis yang tetap bisa diedit via CMS)
const pages = defineCollection({
  type: 'data',
  schema: z.any(),
});

export const collections = { berita, guru, agenda, galeri, pages };
