import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


  <url>
    <loc>https://pikaai.vercel.app/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>


  <url>
    <loc>https://pikaai.vercel.app/about/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>


  <url>
    <loc>https://pikaai.vercel.app/privacy/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

->
  <url>
    <loc>https://pikaai.vercel.app/support/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>


  <url>
    <loc>https://pikaai.vercel.app/blog/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>


  <url>
    <loc>https://pikaai.vercel.app/blog/real-life-jarvis/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/create-ai-assistant-no-code/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/best-free-ai-image-generators/</loc>
    <lastmod>2025-01-08</lastmod>
    <changefreq>monthly</changefreq>
  </url>

</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
      Pragma: 'public',
      Expires: new Date(Date.now() + 86400 * 1000).toUTCString(), // 24-hour expiration
    },
  });
}
