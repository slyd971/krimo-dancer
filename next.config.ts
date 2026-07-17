import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Aucune image du site n'est jamais affichée au-delà de ~1600-1900px
    // (le plus grand cas est le lightbox de la galerie) : on retire les
    // paliers 2048/3840 par défaut de Next pour ne pas générer de variantes
    // inutilement lourdes.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920]
  }
};

export default nextConfig;
