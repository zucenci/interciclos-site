import type { Metadata, Viewport } from 'next';
import { merchant, raleway } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PularParaConteudo } from '@/components/layout/PularParaConteudo';
import { site, contato } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} — Instituto de Formação e Centro de Pesquisa e Terapia`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
  applicationName: site.nome,
  keywords: [
    'terapia sistêmica',
    'terapia de casal e família',
    'especialização para psicólogos',
    'formação em terapia familiar',
    'InterCiclos',
    'Chapecó',
  ],
  authors: [{ name: site.nomeCompleto }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.nomeCompleto,
    title: `${site.nome} — Formação, prática clínica, pesquisa e desenvolvimento para psicólogos`,
    description: site.descricao,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.nomeCompleto,
    description: site.descricao,
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ede9de',
  colorScheme: 'light',
};

/** Dados estruturados da organização, para busca e rich results. */
const dadosEstruturados = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.nomeCompleto,
  alternateName: site.nome,
  description: site.descricao,
  url: site.url,
  foundingDate: site.fundacao,
  address: {
    '@type': 'PostalAddress',
    addressLocality: contato.cidade,
    addressRegion: contato.estadoSigla,
    addressCountry: 'BR',
  },
  sameAs: [contato.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.idioma} className={`${merchant.variable} ${raleway.variable}`}>
      <body>
        <PularParaConteudo />
        <Header />
        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
