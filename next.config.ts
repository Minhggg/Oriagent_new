import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // <-- QUAN TRỌNG
      },
    ],
  },
};

export default nextConfig;