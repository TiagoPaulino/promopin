import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'down-br.img.susercontent.com',
        port: '',
        pathname: '/file/**',
        search: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
