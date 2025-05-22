import { categoryData } from '@/app/data/categoryMap';

export async function GET() {
  const baseUrl = 'https://coloringpageprint.com';
  const currentDate = new Date().toISOString();

  const urls = Object.keys(categoryData).map(key => `
    <url>
      <loc>${baseUrl}/category/${key}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      ${urls}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 