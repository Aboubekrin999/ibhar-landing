import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ibhar",
    short_name: "Ibhar",
    description:
      "Yacht and marine vessel registration services in Dubai and across the UAE.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5227FF",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
