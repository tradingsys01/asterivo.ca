import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during build for production deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during build for production deployment
    ignoreBuildErrors: true,
  },
  // Export as static files for Apache deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
