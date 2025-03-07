import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "down-br.img.susercontent.com",
        port: "",
        pathname: "/file/**",
        search: "",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/api/(.*)", // Aplica a todas as rotas da API
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "chrome-extension://fjkenfedaihomanollgdkblkbglfdbnl", // ID da sua extensão
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
