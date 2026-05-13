import { getAllArticles } from "@/lib/articles";
import { SITE } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const staticEntries = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE.url}/news`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
  const articleEntries = getAllArticles().map((a) => ({
    url: `${SITE.url}/news/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  // Draft articles are excluded from sitemap (noindex)
  return [...staticEntries, ...articleEntries];
}
