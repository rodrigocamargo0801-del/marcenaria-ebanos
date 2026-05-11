import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silencia o aviso de workspace root — o lockfile correto é o deste projeto
  turbopack: {
    root: __dirname,
  },
  images: {
    // Autoriza os domínios externos usados nas imagens do site
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
    // Formatos modernos com melhor compressão
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
