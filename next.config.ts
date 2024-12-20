import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true, // Ignore all ESLint errors during builds
  },
};

export default nextConfig;
