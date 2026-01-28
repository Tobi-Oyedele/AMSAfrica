import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/our-team",
        destination: "/team",
        permanent: true,
      },
      { source: "/our-team/", destination: "/team", permanent: true },
    ];
  },
};

export default nextConfig;
