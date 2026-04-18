import type { MetadataRoute } from "next";
import { cityPages } from "@/lib/site";

const base = "https://nationalasbuilt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/enterprise`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 }
  ];

  const cityEntries: MetadataRoute.Sitemap = cityPages.map((city) => ({
    url: `${base}/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7
  }));

  return [...corePages, ...cityEntries];
}
