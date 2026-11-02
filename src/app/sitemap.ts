import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://noir-creative-studio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, priority: 1 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.8 },
  ];

  for (const p of projects) {
    pages.push({
      url: `${BASE}/work/${p.slug}`,
      lastModified: now,
      priority: 0.9,
    });
  }

  return pages;
}
