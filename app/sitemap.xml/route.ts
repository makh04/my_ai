import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <url>
    <loc>https://pikaai.vercel.app/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>1.00</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/about/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/support/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/privacy/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/terms/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/review/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/ai_assistant_for_pc/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/6-best-ai-voice-assistants-you-should-try-today/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/pika-ai-voice-assistant-new-update-11-09-2025/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/battle-of-the-titans-alexa-vs-google-assistant-unmasked/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/amazon-alexa-download-alternatives-windows-2025/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/is-pika-ai-safe-privacy-security-comprehensive-review/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/best-websites-for-making-money-2025/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/pika-ai-assistant-new-voice-highlight-search/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/create-ai-assistant-no-code/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/real-life-jarvis/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://pikaai.vercel.app/blog/best-free-ai-image-generators/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://pikaai.vercel.app/blog/top-free-ai-api/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
  </url>

    <url>
    <loc>https://pikaai.vercel.app/blog/real-life-jarvis/</loc>
    <lastmod>2025-10-17T13:28:30+00:00</lastmod>
    <priority>0.7</priority>
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
