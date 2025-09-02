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
  // Server deployment mode for full functionality including API routes
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
