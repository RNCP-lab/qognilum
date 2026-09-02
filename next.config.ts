import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Nothing on this site is ever rendered wider than ~800px, so there's no
    // reason to let the optimizer generate (and bill for) 1920/2048/3840px
    // variants — trimming these caps worst-case Image Optimization spend.
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [60, 75],
    minimumCacheTTL: 2678400, // 31 days — these are static marketing assets
  },
};

export default nextConfig;
