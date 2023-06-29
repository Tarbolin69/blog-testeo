import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'La Tumba de Solcaronte',
    description: 'Mi sitio personal para hablar de cualquier cosa',
    site: 'https://solcaronte.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-ar</language>`,
  });
}
