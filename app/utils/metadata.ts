import type { Metadata } from 'next';

interface MetadataParams {
  title: string;
  description: string;
  url: string;
}

export function createMetadata({ title, description, url }: MetadataParams): Metadata {
  const siteName = 'Kids Coloring Pages';
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL('https://coloring-pages.com'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: 'website',
      locale: 'en_US',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
} 