import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { frentes } from '@/content/frentes';

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const paginasFixas = ['', '/sobre'];
  const paginasDeFrentes = frentes.map((frente) => frente.href);

  return [...paginasFixas, ...paginasDeFrentes].map((caminho) => ({
    url: `${site.url}${caminho}`,
    lastModified: agora,
    changeFrequency: 'monthly',
    priority: caminho === '' ? 1 : caminho === '/especializacao' ? 0.9 : 0.7,
  }));
}
