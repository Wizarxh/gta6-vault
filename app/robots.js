import { SITE } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/news/draft/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
