import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Angličtina WELSAN",
    short_name: "WELSAN",
    description: "Individuálne online hodiny angličtiny.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10265D",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
