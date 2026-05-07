import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const siteUrl =
    import.meta.env.SITE?.toString() ??
    import.meta.env.PUBLIC_SITE_URL ??
    "https://ajayraj.ca";
  const baseUrl = import.meta.env.BASE_URL;
  const root = new URL(baseUrl, siteUrl);
  const sitemapUrl = new URL("sitemap-index.xml", root).toString();

  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${sitemapUrl}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
