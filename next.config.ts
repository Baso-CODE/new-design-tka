import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bimbeledumatrix.com",
      },
      {
        protocol: "https",
        hostname: "node-osn.edusmart-indonesia.com",
        port: "",
        pathname: "/**",
      },
    ],

    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
