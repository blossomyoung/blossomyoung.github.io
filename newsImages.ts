import type { ImageMetadata } from 'astro';

const newsImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/news/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

export function getNewsImage(slug: string): ImageMetadata | undefined {
  const entry = Object.entries(newsImages).find(([path]) => {
    const filename = path.split('/').pop() ?? '';
    return filename.replace(/\.[^.]+$/, '') === slug;
  });
  return entry?.[1].default;
}
