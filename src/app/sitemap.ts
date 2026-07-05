import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anglictinawelsan.sk",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
