import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        source: "/user-books",
        destination: "/books/mine",
        permanent: true, // 301 Redirect
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/next",
        destination: "https://nextjs.org/",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ecx.images-amazon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
};

export default nextConfig;
