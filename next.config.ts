import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "efvivjdsmnjmucdqmpvi.supabase.co",
      },
      {
        hostname: "example.com",
      },
    ],
  },
};

export default nextConfig;
