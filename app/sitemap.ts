import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAllArticlesFr } from "@/lib/articles-fr";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const articles = getAllArticles();
  const articlesFr = getAllArticlesFr();

  // Primary pages
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/news`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.8,
    },
  ];

  // English articles
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  // French articles
  const articlePagesFr = articlesFr.map((article) => ({
    url: `${baseUrl}/fr/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  return [...pages, ...articlePages, ...articlePagesFr];
}
