import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/program/`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${siteUrl}/free-training/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/clarity-call/`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
