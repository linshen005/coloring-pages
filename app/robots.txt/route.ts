export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coloringpageprint.com';
  
  const content = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 