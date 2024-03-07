/** @type {import('next').NextConfig} */

import nextMDX from "@next/mdx";

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default nextConfig
