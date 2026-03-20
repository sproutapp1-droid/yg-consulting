import { MetadataRoute } from "next";
import { EXPERTISE_PAGES } from "@/lib/expertise-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yganconsulting.com";

  return [
    { url: baseUrl, priority: 1.0, changeFrequency: "monthly" },
    {
      url: `${baseUrl}/experience`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/expertise`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    ...EXPERTISE_PAGES.map((page) => ({
      url: `${baseUrl}/expertise/${page.slug}`,
      priority: 0.9 as const,
      changeFrequency: "monthly" as const,
    })),
  ];
}
