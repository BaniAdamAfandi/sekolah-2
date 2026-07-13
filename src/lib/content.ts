import { getEntry } from 'astro:content';

// Loader tipis untuk singleton "pages" agar tiap halaman ringkas.
export async function getSettings() {
  const entry = await getEntry('pages', 'settings');
  return entry!.data as Record<string, any>;
}

export async function getPage(slug: string) {
  const entry = await getEntry('pages', slug);
  return entry!.data as Record<string, any>;
}
