import { MetadataRoute } from "next";
import { CITIES } from "@/lib/data";

const BASE = "https://nationalasbuilt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityUrls = CITIES.map(c => ({
    url: `${BASE}/cities/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/#services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...cityUrls,
  ];
}
