import type { NextConfig } from "next";

import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});


const nextConfig: NextConfig = {
  /* config options here */
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

export default bundleAnalyzer(nextConfig);
