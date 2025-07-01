import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        module: /node_modules/,
      },
      {
        file: /.*/,
        message: /There are multiple modules with names that only differ in casing/,
      },
    ];
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // All requests to /api/* on frontend
        destination:
          "https://dynamiccalendar-backend-fhd9hdhgb2atf3bx.southeastasia-01.azurewebsites.net/:path*", // Proxied to backend
      },
    ];
  },
};
 
export default nextConfig;