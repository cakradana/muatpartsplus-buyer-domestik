import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.builder.io",
      },
      {
        hostname: "azlogistik.s3.ap-southeast-3.amazonaws.com",
      },
      {
        hostname: "fastly.picsum.photos",
      },
      {
        hostname: "picsum.photos",
      },
    ],
  },
  reactStrictMode: false,
  webpack: (config) => {
    // Add alias for @/ in packages
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/lib": path.resolve(__dirname, "packages/ui/src/lib"),
      "@/hooks": path.resolve(__dirname, "packages/ui/src/hooks"),
      "@/store": path.resolve(__dirname, "packages/ui/src/store"),
      "@/components": path.resolve(__dirname, "packages/ui/src/components"),
    };
    return config;
  },
};

export default nextConfig;